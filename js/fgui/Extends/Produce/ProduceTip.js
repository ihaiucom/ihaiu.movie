/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////
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
var fgui;
(function (fgui) {
    var Produce;
    (function (Produce) {
        var ProduceTip = /** @class */ (function (_super) {
            __extends(ProduceTip, _super);
            function ProduceTip() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.FIRST_LINE = 100;
                _this.PRODUCE_SKILL_GROUP = 1002;
                return _this;
            }
            ProduceTip.prototype.setInfo = function (produceId) {
                this.produceId = produceId;
                this.cfg = Game.config.produce.getConfig(this.produceId);
                this.m_itemIcon1.url = ItemHelper.getItemIcon(this.cfg.item);
                this.m_itemIcon2.url = ItemHelper.getItemIcon(this.cfg.item);
                this.data = Game.moduleModel.produce.getProduce(produceId);
                var outputSkill = Game.moduleModel.produce.getProduceSkill(this.produceId, Games.ProduceSkillType.Output);
                var baseOutput = Game.config.produceLevel.getConfig(outputSkill.level).output_initial;
                this.m_GActor.visible = true;
                if (this.isFirstLine) {
                    var cfg = Game.config.produceSouvenir.getConfig(User.info.level);
                    baseOutput = cfg.once;
                    this.m_GActor.visible = false;
                }
                this.m_baseAddNum.text = baseOutput.toString();
                this.m_actorAddNum.text = (baseOutput * 1.5).toString();
            };
            ProduceTip.prototype.getActorOutputNum = function () {
                var outputSkill = Game.moduleModel.produce.getProduceSkill(this.produceId, Games.ProduceSkillType.Output);
                var baseOutput = Game.config.produceLevel.getConfig(outputSkill.level).output_initial;
                //艺人基础产出鼓舞
                var baseOutputFactor = 100;
                if (this.data.outFactorList.length > 0) {
                    baseOutputFactor = this.data.outFactorList[0];
                }
                //艺人特殊技能产出鼓舞
                var produceSkillFactor = 1;
                if (this.data.actorId > 0) {
                    var actorData = Game.moduleModel.actor.getActor(this.data.actorId);
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
            Object.defineProperty(ProduceTip.prototype, "isFirstLine", {
                //是否是第一生产线
                get: function () {
                    return this.produceId == this.FIRST_LINE;
                },
                enumerable: true,
                configurable: true
            });
            return ProduceTip;
        }(Produce.ProduceTipStruct));
        Produce.ProduceTip = ProduceTip;
    })(Produce = fgui.Produce || (fgui.Produce = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=ProduceTip.js.map