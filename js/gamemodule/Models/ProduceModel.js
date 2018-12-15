var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Games;
(function (Games) {
    //======================
    // 生产 数据模型
    //----------------------
    var ProduceModel = /** @class */ (function (_super) {
        __extends(ProduceModel, _super);
        function ProduceModel() {
            var _this = _super.call(this) || this;
            _this.PAPER_ID = 7; //图纸id
            _this.FIRST_LINE = 100;
            _this.PRODUCE_SKILL_GROUP = 1002;
            _this.skillNames = [Games.TEXT.ProduceSkillType1, Games.TEXT.ProduceSkillType2, Games.TEXT.ProduceSkillType3, Games.TEXT.ProduceSkillType4];
            _this.produceMap = new Dictionary();
            return _this;
        }
        //添加,更新生产数据
        ProduceModel.prototype.addProduceData = function (msg, uuid) {
            console.log("addProduceData= " + msg.produceId);
            var data = this.getProduce(msg.produceId);
            if (data == null) {
                data = new Games.ProduceData();
            }
            data.produceId = msg.produceId;
            data.itemNum = msg.hadNum;
            data.actorId = msg.actId;
            data.level = msg.level;
            data.produceSkillList.length = 0;
            for (var _i = 0, _a = msg.skills; _i < _a.length; _i++) {
                var i = _a[_i];
                var pskill = new Games.ProduceSkill();
                pskill.id = i.skillId;
                pskill.level = i.level;
                data.produceSkillList.push(pskill);
            }
            data.outFactorList.length = 0;
            for (var _b = 0, _c = msg.randomNums; _b < _c.length; _b++) {
                var m = _c[_b];
                data.outFactorList.push(m);
            }
            data.processNum = msg.produceNum;
            data.startTime = msg.lastTime;
            data.uuid = uuid;
            //add
            this.produceMap.add(data.produceId, data);
        };
        //获得生产数据
        ProduceModel.prototype.getProduce = function (produceId) {
            return this.produceMap.getValue(produceId);
        };
        //通过Uuid获得生产数据
        ProduceModel.prototype.getProduceByUuid = function (uuid) {
            var enumerator = this.produceMap.getValues();
            return enumerator.findOne(function (value) {
                return value.uuid == uuid;
            });
        };
        ProduceModel.prototype.getProduceSkillName = function (skillId) {
            return this.skillNames[skillId - 1];
        };
        //获得生产技能信息
        ProduceModel.prototype.getProduceSkill = function (produceId, skillType) {
            var produce = this.getProduce(produceId);
            if (produce) {
                return produce.produceSkillList.findOne(function (value) {
                    return value.id == skillType;
                });
            }
            return null;
        };
        // 检查升级项-生产线等级限制
        ProduceModel.prototype.checkProduceLvLimit = function (produceLevel, skill) {
            var configId = skill.id * 1000 + skill.level;
            var config = Game.config.produceLv.getConfig(configId);
            if (config) {
                return config.produce_lv > produceLevel;
            }
            return false;
        };
        //获取生产升级单项的生产线限制等级
        ProduceModel.prototype.getProduceLvLimit = function (skill) {
            var configId = skill.id * 1000 + skill.level;
            var config = Game.config.produceLv.getConfig(configId);
            if (config) {
                return config.produce_lv;
            }
            return 1;
        };
        //获得生产唯一id
        ProduceModel.prototype.getProduceUuid = function (produceId) {
            var data = this.getProduce(produceId);
            if (data) {
                return data.uuid;
            }
            return "";
        };
        ProduceModel.prototype.hasProduce = function (produceId) {
            return this.getProduce(produceId) != null;
        };
        //获取所有生产列表
        ProduceModel.prototype.getProduceDataList = function () {
            return this.produceMap.getValues();
        };
        //获取所有助产艺人列表
        ProduceModel.prototype.getActorList = function () {
            var result = [];
            var list = this.getProduceDataList();
            list.forEach(function (value, index, array) {
                if (value.actorId > 0) {
                    result.push(value.actorId);
                }
            });
            return result;
        };
        Object.defineProperty(ProduceModel.prototype, "hasLineOutputFull", {
            //列表中是否有生产线满了
            get: function () {
                var produceLines = this.getProduceDataList();
                for (var _i = 0, produceLines_1 = produceLines; _i < produceLines_1.length; _i++) {
                    var produceLine = produceLines_1[_i];
                    if (this.checkOutPutFull(produceLine.produceId)) {
                        return true;
                    }
                }
                return false;
            },
            enumerable: true,
            configurable: true
        });
        //检查生产线产量是否已满
        ProduceModel.prototype.checkOutPutFull = function (produceId) {
            var output = 0;
            var data = this.getProduce(produceId);
            var totalTime = this.getProcessTotalTime(produceId);
            var timeProcessedlineNum = Math.floor(Game.time.getSubSecondsPre(data.startTime) / totalTime);
            var processedlineNum = (data.processNum > timeProcessedlineNum ? timeProcessedlineNum : data.processNum);
            if (timeProcessedlineNum > data.processNum) {
                output = data.itemNum + processedlineNum * this.perOutputNum(produceId);
            }
            if (this.isFirstLine) {
                var cfg = Game.config.produceSouvenir.getConfig(User.info.level);
                return output >= cfg.max;
            }
            return output >= this.getMaxStorage(produceId);
        };
        //获得一条生产线总时间
        ProduceModel.prototype.getProcessTotalTime = function (produceId) {
            var data = this.getProduce(produceId);
            var cd = Game.config.produce.getConfig(data.produceId).cd;
            var skillOutput = data.produceSkillList[Games.ProduceSkillType.Output];
            var extTime = this.getProduceLvEffect(skillOutput, 1);
            var skillTime = data.produceSkillList[Games.ProduceSkillType.Time];
            var reduceTime = this.getProduceLvEffect(skillTime);
            var calcTime = cd + extTime - reduceTime;
            if (calcTime <= 0) {
                calcTime = 1;
            }
            return calcTime;
        };
        //一次生产产出物品
        ProduceModel.prototype.perOutputNum = function (produceId) {
            var data = this.getProduce(produceId);
            if (this.isFirstLine(produceId)) {
                var cfg = Game.config.produceSouvenir.getConfig(User.info.level);
                return cfg.once;
            }
            var outputSkill = Game.moduleModel.produce.getProduceSkill(produceId, Games.ProduceSkillType.Output);
            var baseOutput = this.getProduceLvEffect(outputSkill);
            //艺人基础产出鼓舞
            var baseOutputFactor = 100;
            if (data.outFactorList.length > 0) {
                baseOutputFactor = data.outFactorList[0];
            }
            //艺人特殊技能产出鼓舞
            var produceSkillFactor = 1;
            if (data.actorId > 0) {
                var actorData = Game.moduleModel.actor.getActor(data.actorId);
                if (actorData) {
                    var effectSkills = actorData.getEffectSkills();
                    for (var _i = 0, effectSkills_1 = effectSkills; _i < effectSkills_1.length; _i++) {
                        var effectSkill = effectSkills_1[_i];
                        if (effectSkill.config.group_id == this.PRODUCE_SKILL_GROUP) {
                            produceSkillFactor = effectSkill.config.value;
                        }
                    }
                }
            }
            return baseOutput * (baseOutputFactor / 100) * produceSkillFactor; //基础+艺人鼓舞+艺人技能增益产出
        };
        //获取生产线最大存储
        ProduceModel.prototype.getMaxStorage = function (produceId) {
            if (this.isFirstLine) {
                var cfg = Game.config.produceSouvenir.getConfig(User.info.level);
                return cfg.max;
            }
            var pSkillStorage = Game.moduleModel.produce.getProduceSkill(produceId, Games.ProduceSkillType.Storage);
            if (pSkillStorage) {
                var save = this.getProduceLvEffect(pSkillStorage);
                return save;
            }
            return 0;
        };
        ProduceModel.prototype.isFirstLine = function (produceId) {
            return produceId == this.FIRST_LINE;
        };
        /** 获取生产线升级项的效果值 */
        ProduceModel.prototype.getProduceLvEffect = function (skill, index) {
            if (index === void 0) { index = 0; }
            if (skill) {
                var configId = skill.id * 1000 + skill.level;
                var config = Game.config.produceLv.getConfig(configId);
                if (config) {
                    return config.effect[index];
                }
            }
            return 1;
        };
        /** 获取生成线档次 */
        ProduceModel.prototype.getStall = function (produceId) {
            var cfg = Game.config.produce.getConfig(produceId);
            if (cfg) {
                return cfg.grade;
            }
            return 0;
        };
        return ProduceModel;
    }(Games.MModel));
    Games.ProduceModel = ProduceModel;
})(Games || (Games = {}));
//# sourceMappingURL=ProduceModel.js.map