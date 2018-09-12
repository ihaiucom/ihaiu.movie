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
        var ProduceSkillType = Games.ProduceSkillType;
        var ProduceItem = /** @class */ (function (_super) {
            __extends(ProduceItem, _super);
            function ProduceItem() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.PAPER_ID = 7; //图纸id
                _this.FIRST_LINE = 100;
                _this.PRODUCE_SKILL_GROUP = 1002;
                _this.cutDownTime = -1;
                _this.totalTime = 0; //当前生产线的总时长-秒
                //更新生产倒计时
                _this.timeProcessedlineNum = 0; //生产队列里从开始生产到现在可以完成的队列数
                _this.processedlineNum = 0; //当前已经完成的生产队列数
                return _this;
            }
            ProduceItem.prototype.setInfo = function (produceId, grade) {
                this.grade = grade;
                this.produceId = produceId;
                //cfg
                this.cfg = Game.config.produce.getConfig(this.produceId);
                this.itemId = this.cfg.item;
                this.m_nameText.text = this.cfg.name;
                this.m_descText.text = this.cfg.tip;
                this.m_curItemNumLb.text = TEXT.ProduceItemStore;
                this.m_curItemNum.text = formatNumberUnit(ItemHelper.getItemNum(this.cfg.item));
                this.m_itemIcon.m_iconLoader.url = ItemHelper.getItemIcon(this.cfg.item);
                this.m_btn_getItem.m_title.text = TEXT.GetReward;
                this.m_btn_produce.m_icon.url = Game.config.item.getConfig(this.PAPER_ID).iconUrl;
                this.m_btn_produce.m_title.text = TEXT.ProduceStart;
                this.m_btn_produce.m_num.text = "1";
                this.m_btn_timeEnd.m_assetIcon.url = Game.config.item.getConfig(Games.AssetType.Diamond).iconUrl;
                //data
                this.data = Game.moduleModel.produce.getProduce(produceId);
                this.m_levelText.text = format(TEXT.ProduceLevel, this.data.level);
                this.setOutputItemText();
                this.setActorAvatar(this.data.actorId);
                //Event
                this.m_btn_upgrade.onClick(this, this.onUpgradeClick);
                this.m_btn_tips.onClick(this, this.onTipsClick);
                this.m_btn_addAvatar.onClick(this, this.onAddAvatar);
                this.m_btn_timeEnd.onClick(this, this.onTimeEndClick);
                this.m_btn_getItem.onClick(this, this.onGetItemClick);
                this.m_btn_produce.onClick(this, this.onProduceClick);
                //set limit ui
                this.m_cutTime.text = "";
                this.m_btn_getItem.visible = true;
                // this.m_btn_timeEnd.visible = false;
                this.m_onProducing.visible = false;
                this.m_btn_upgrade.visible = true;
                this.m_avatarLoader.visible = true;
                this.m_btn_addAvatar.visible = true;
                if (this.data.itemNum == 0) {
                    this.disableGetItemView();
                }
                if (this.data.actorId > 0) {
                    this.m_btn_addAvatar.visible = false;
                }
                this.setFirstLine();
                this.setProcessLine();
                this.setMaxProcessLine();
                this.refresh();
                this.updateTime();
            };
            //销毁
            ProduceItem.prototype.dispose = function () {
                this.stopTimeCutdown();
            };
            Object.defineProperty(ProduceItem.prototype, "currentItemNum", {
                //当前库存量
                get: function () {
                    return ItemHelper.getItemNum(this.cfg.item);
                },
                enumerable: true,
                configurable: true
            });
            //第一生产线不能升级,不能加艺人,不消耗图纸
            ProduceItem.prototype.setFirstLine = function () {
                this.m_curItemNumLb.visible = true;
                this.m_curItemNum.visible = true;
                this.m_storeBg.visible = true;
                if (this.isFirstLine) {
                    this.m_btn_upgrade.visible = false;
                    this.m_avatarLoader.visible = false;
                    this.m_btn_addAvatar.visible = false;
                    this.m_btn_produce.m_num.text = "0";
                    this.m_curItemNumLb.visible = false;
                    this.m_curItemNum.visible = false;
                    this.m_storeBg.visible = false;
                }
            };
            //更新服务器数据
            ProduceItem.prototype.refresh = function () {
                this.totalTime = this.getProcessTotalTime();
                this.timeProcessedlineNum = Math.floor(Game.time.getSubSecondsPre(this.data.startTime) / this.totalTime);
                this.processedlineNum = (this.data.processNum > this.timeProcessedlineNum ? this.timeProcessedlineNum : this.data.processNum);
                if (this.timeProcessedlineNum > this.data.processNum) {
                    for (var i = 0; i < this.processedlineNum; i++) {
                        this.data.itemNum += this.perOutputNum();
                    }
                    this.data.processNum = 0;
                }
                for (var i = 0; i < this.processedlineNum; i++) {
                    if (this.m_produceLine.numChildren > 0)
                        this.m_produceLine.removeChildAt(0);
                }
            };
            //-------------------------------
            // 服务器消息更新
            //-------------------------------
            //更新物品信息
            ProduceItem.prototype.updateAssets = function () {
                if (this.cfg) {
                    this.m_curItemNum.text = ItemHelper.getItemNumFormat(this.cfg.item);
                    var costNum = 1;
                    if (this.isFirstLine) {
                        costNum = 0;
                    }
                    if (!this.checkPaperEnough()) {
                        if (!this.isFirstLine) {
                            this.m_btn_produce.m_num.text = "[color=#ff0000]" + costNum + "[/color]";
                        }
                        else {
                            this.m_btn_produce.m_num.text = "[color=#ffffff]" + costNum + "[/color]";
                        }
                    }
                    else {
                        this.m_btn_produce.m_num.text = "[color=#ffffff]" + costNum + "[/color]";
                    }
                }
            };
            //list内更新单项
            ProduceItem.prototype.singleUpdate = function () {
                this.data = Game.moduleModel.produce.getProduce(this.produceId);
                this.refresh();
                if (this.data.processNum > 0) {
                    this.updateTime();
                }
                this.setOutputItemText();
                this.setProcessLine();
            };
            //list整体更新
            ProduceItem.prototype.updateView = function () {
                this.data = Game.moduleModel.produce.getProduce(this.produceId);
                this.setActorAvatar(this.data.actorId);
                this.updateAssets();
            };
            ProduceItem.prototype.updateUpgrade = function (skillId) {
                this.data = Game.moduleModel.produce.getProduce(this.produceId);
                this.m_levelText.text = format(TEXT.ProduceLevel, this.data.level);
                this.setOutputItemText();
                if (skillId == ProduceSkillType.Output) {
                    this.updateTime();
                }
                this.setMaxProcessLine();
            };
            ProduceItem.prototype.updateGetReward = function () {
                this.data = Game.moduleModel.produce.getProduce(this.produceId);
                this.refresh();
                this.setProcessLine();
                this.disableGetItemView();
                this.updateTime();
            };
            ProduceItem.prototype.updateActor = function (actorId) {
                this.data = Game.moduleModel.produce.getProduce(this.produceId);
                this.setActorAvatar(actorId);
            };
            ProduceItem.prototype.updateImmediateProduce = function () {
                this.data = Game.moduleModel.produce.getProduce(this.produceId);
                this.refresh();
                this.setProcessLine();
                this.enableGetItemView();
                this.updateTime();
            };
            //设置可领取奖励显示
            ProduceItem.prototype.enableGetItemView = function () {
                this.m_cutTime.text = "";
                // this.m_btn_timeEnd.visible = false;
                this.m_onProducing.visible = false;
                this.m_btn_getItem.visible = true;
                this.m_item.visible = true;
                this.showGetItemEffect();
                this.setOutputItemText();
            };
            //设置不可领取奖励显示
            ProduceItem.prototype.disableGetItemView = function () {
                this.m_btn_getItem.visible = false;
                this.m_item.visible = false;
                this.hideGetItemEffect();
            };
            ProduceItem.prototype.showGetItemEffect = function () {
                this.m_effectFull.visible = true;
                var animTrans = this.m_itemIcon.getTransition("t1");
                if (animTrans) {
                    animTrans.play(null, -1, 0);
                }
            };
            ProduceItem.prototype.hideGetItemEffect = function () {
                this.m_effectFull.visible = false;
                var animTrans = this.m_itemIcon.getTransition("t1");
                if (animTrans) {
                    animTrans.stop();
                }
            };
            ProduceItem.prototype.setOutputItemText = function () {
                if (this.checkOutputFull()) {
                    this.m_item.text = "[color=#e02f2b]" + this.data.itemNum + "/" + this.maxStorage + "[/color]";
                }
                else {
                    this.m_item.text = "[color=#50e38a]" + this.data.itemNum + "/" + this.maxStorage + "[/color]";
                }
            };
            ProduceItem.prototype.updateTime = function () {
                if (this.processedlineNum < this.data.processNum) {
                    this.startTimeCutdown();
                }
                else {
                    this.stopTimeCutdown();
                    if (this.data.itemNum > 0) {
                        this.refreshOutput();
                    }
                }
            };
            ProduceItem.prototype.startTimeCutdown = function () {
                this.stopTimeCutdown();
                this.m_onProducing.visible = true;
                if (!this.isFirstLine) {
                    this.m_btn_timeEnd.visible = true;
                }
                else {
                    this.m_btn_timeEnd.visible = false;
                }
                this.onProcessTimeCutDown();
                Laya.timer.loop(1000, this, this.onProcessTimeCutDown, null, true, true);
            };
            ProduceItem.prototype.stopTimeCutdown = function () {
                Laya.timer.clear(this, this.onProcessTimeCutDown);
                this.m_cutTime.text = "";
                // this.m_btn_timeEnd.visible = false;
                this.m_onProducing.visible = false;
            };
            //生产时间倒计时
            ProduceItem.prototype.onProcessTimeCutDown = function () {
                var curtimeProcessLineNum = Math.floor(Game.time.getSubSecondsPre(this.data.startTime) / this.totalTime);
                if (curtimeProcessLineNum > this.timeProcessedlineNum) {
                    this.timeProcessedlineNum = curtimeProcessLineNum;
                    this.processedlineNum++;
                    this.data.itemNum += this.perOutputNum();
                    this.data.processNum--;
                    //生产线全部倒计时完
                    if (this.processedlineNum >= this.data.processNum) {
                        this.stopTimeCutdown();
                        // this.setMaxProcessLine();
                    }
                    this.m_produceLine.removeChildAt(0);
                    this.refreshOutput();
                }
                else {
                    this.cutDownTime = this.totalTime - Game.time.getSubSecondsPre(this.data.startTime) % this.totalTime;
                    if (this.cutDownTime > 0) {
                        this.immediateProduceCost = this.getImmediateProcessCost(this.cutDownTime, this.totalTime);
                        this.updateImmediateProcessCost(this.cutDownTime, this.totalTime);
                        this.m_cutTime.text = TimeHelper.TimeFormat3(this.cutDownTime);
                    }
                }
            };
            //每项生产倒计时结束更新产出
            ProduceItem.prototype.refreshOutput = function () {
                if (this.checkOutputFull()) {
                    this.stopTimeCutdown();
                }
                this.enableGetItemView();
            };
            //一次生产产出物品
            ProduceItem.prototype.perOutputNum = function () {
                if (this.isFirstLine) {
                    var cfg = Game.config.produceSouvenir.getConfig(User.info.level);
                    return cfg.once;
                }
                var outputSkill = Game.moduleModel.produce.getProduceSkill(this.produceId, ProduceSkillType.Output);
                var baseOutput = Game.config.produceLevel.getConfig(outputSkill.level).output_initial;
                //艺人基础产出鼓舞
                var baseOutputFactor = 100;
                if (this.data.outFactorList.length > 0) {
                    baseOutputFactor = this.data.outFactorList.splice(0, 1)[0];
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
            //获得一条生产线总时间
            ProduceItem.prototype.getProcessTotalTime = function () {
                var cd = Game.config.produce.getConfig(this.data.produceId).cd;
                var skillOutputLevel = this.data.produceSkillList[ProduceSkillType.Output].level;
                var extTime = Game.config.produceLevel.getConfig(skillOutputLevel).time_add;
                var skillTimeLevel = this.data.produceSkillList[ProduceSkillType.Time].level;
                var reduceTime = Game.config.produceLevel.getConfig(skillTimeLevel).time;
                var calcTime = cd + extTime - reduceTime;
                if (calcTime <= 0) {
                    calcTime = 1;
                }
                return calcTime;
            };
            //设置生产线总数
            ProduceItem.prototype.setMaxProcessLine = function () {
                var pSkillProcess = Game.moduleModel.produce.getProduceSkill(this.produceId, ProduceSkillType.Process);
                if (pSkillProcess) {
                    var maxLine = Game.config.produceLevel.getConfig(pSkillProcess.level).line;
                    this.m_produceMaxLine.removeChildrenToPool();
                    for (var i = 0; i < maxLine; i++) {
                        var line = this.m_produceMaxLine.addItemFromPool();
                        this.m_produceMaxLine.addChild(line);
                    }
                }
            };
            //设置生产线
            ProduceItem.prototype.setProcessLine = function () {
                // this.setMaxProcessLine();
                this.m_produceLine.removeChildrenToPool();
                for (var i = 0; i < this.data.processNum; i++) {
                    var lineItem = this.m_produceLine.addItemFromPool();
                    this.m_produceLine.addChild(lineItem);
                }
            };
            Object.defineProperty(ProduceItem.prototype, "maxStorage", {
                //获得生产存储容量
                get: function () {
                    if (this.isFirstLine) {
                        var cfg = Game.config.produceSouvenir.getConfig(User.info.level);
                        return cfg.max;
                    }
                    var pSkillStorage = Game.moduleModel.produce.getProduceSkill(this.produceId, ProduceSkillType.Storage);
                    if (pSkillStorage) {
                        var produceLevelCfg = Game.config.produceLevel.getConfig(pSkillStorage.level);
                        return produceLevelCfg.save;
                    }
                    return 0;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(ProduceItem.prototype, "isFirstLine", {
                //是否是第一生产线
                get: function () {
                    return this.produceId == this.FIRST_LINE;
                },
                enumerable: true,
                configurable: true
            });
            //---------------------------
            // Event Click
            //---------------------------
            ProduceItem.prototype.onUpgradeClick = function () {
                var produceUpdate = Produce.ProduceUpgrade.createInstance();
                produceUpdate.showForParent(this.produceId, this.grade);
            };
            ProduceItem.prototype.onTipsClick = function () {
                this.m_tip.visible = true;
                this.m_tip.setInfo(this.produceId);
                fairygui.GRoot.inst.showPopup(this.m_tip);
            };
            //立即完成生产
            ProduceItem.prototype.onTimeEndClick = function () {
                // if (!this.checkStallLevelEnough(1003))
                // {
                // 	Game.system.toastText(Game.config.msg.getTxt(MsgKey.produce_down));
                // 	return;
                // }
                if (ItemHelper.getItemNum(Proto.SE.EItemId.diamond) < this.immediateProduceCost) {
                    Game.system.toastText(Game.config.msg.getTxt(MsgKey.produce_diamond_less));
                    return;
                }
                Game.protosender.manageProduce.cleanTime(this.produceId);
            };
            //添加艺人
            ProduceItem.prototype.onAddAvatar = function () {
                if (this.data.actorId == 0) {
                    if (this.checkAddAvatarToProduce()) {
                        var actorListPanel = Produce.ProduceSelectActorPanel.createInstance();
                        actorListPanel.showForParent(this.produceId);
                    }
                }
                else {
                    var offActorPanel = Produce.ProduceOffActor.createInstance();
                    offActorPanel.show(this.produceId, this.data.actorId);
                }
            };
            ProduceItem.prototype.checkAddAvatarToProduce = function () {
                var buildIdLock = Game.config.global.getConfig(GlobalKey.produce_inspire_buildlock).value;
                var lineLevelLock = Game.config.global.getConfig(GlobalKey.produce_inspire_linelock).value;
                if (!Game.moduleModel.building.validataBuildLevel(buildIdLock)) {
                    var buildLevelCfg = Game.config.buildingLevel.getConfig(buildIdLock);
                    if (buildLevelCfg) {
                        Game.system.toastText(Game.config.msg.getTxtFormat(MsgKey.produce_inspire_buildlock, buildLevelCfg.name, buildLevelCfg.level));
                    }
                    return false;
                }
                if (this.data.level < lineLevelLock) {
                    Game.system.toastText(Game.config.msg.getTxtFormat(MsgKey.produce_inspire_linelock, lineLevelLock));
                    return false;
                }
                return true;
            };
            //设置艺人
            ProduceItem.prototype.setActorAvatar = function (actorId) {
                var cfg = Game.config.actor.getConfig(actorId);
                if (cfg) {
                    this.m_btn_addAvatar.visible = false;
                    var avatarCfg = Game.config.avatar.getConfig(cfg.avatar);
                    this.m_avatarLoader.url = avatarCfg.bodyIconUrl;
                    this.m_avatarLoader.onClick(this, this.onAddAvatar);
                }
                else {
                    this.m_avatarLoader.url = "";
                    this.m_btn_addAvatar.visible = true;
                }
            };
            //领取奖励
            ProduceItem.prototype.onGetItemClick = function () {
                Game.protosender.manageProduce.GetReward(this.produceId);
            };
            //判断是否有奖励可领
            ProduceItem.prototype.isCanGetItem = function () {
                return this.data.itemNum > 0;
            };
            //获取产出量
            ProduceItem.prototype.getOutItemNum = function () {
                if (this.isCanGetItem()) {
                    return this.data.itemNum;
                }
                return 0;
            };
            //开始生产
            ProduceItem.prototype.onProduceClick = function () {
                if (!this.isFirstLine) {
                    if (!this.checkPaperEnough()) {
                        Game.system.openItemWay(this.PAPER_ID, 1);
                        return;
                    }
                }
                if (this.checkOutputFull()) {
                    Game.system.toastText(Game.config.msg.getTxt(MsgKey.produce_item_max));
                    return;
                }
                if (this.checkProcessLineFull()) {
                    if (this.isFirstLine) {
                        Game.system.toastText(Game.config.msg.getTxt(MsgKey.produce_special));
                    }
                    else {
                        Game.system.toastText(Game.config.msg.getTxt(MsgKey.produce_line_max));
                    }
                    return;
                }
                //request
                Game.protosender.manageProduce.Produce(this.produceId);
            };
            //检查所有生产条件
            ProduceItem.prototype.checkAll = function () {
                if (!this.checkPaperEnough()) {
                    return false;
                }
                if (this.checkOutputFull()) {
                    return false;
                }
                if (this.checkProcessLineFull()) {
                    return false;
                }
                return true;
            };
            //检查图纸是否足够
            ProduceItem.prototype.checkPaperEnough = function () {
                return ItemHelper.getItemNum(this.PAPER_ID) > 0;
            };
            //判断是否产出已满
            ProduceItem.prototype.checkOutputFull = function () {
                if (this.isFirstLine) {
                    var cfg = Game.config.produceSouvenir.getConfig(User.info.level);
                    return this.data.itemNum >= cfg.max;
                }
                return this.data.itemNum >= this.maxStorage;
            };
            //检查生产线是否已满
            ProduceItem.prototype.checkProcessLineFull = function () {
                var pSkillProcess = Game.moduleModel.produce.getProduceSkill(this.produceId, ProduceSkillType.Process);
                if (pSkillProcess) {
                    var produceLevelCfg = Game.config.produceLevel.getConfig(pSkillProcess.level);
                    return this.data.processNum - this.processedlineNum >= produceLevelCfg.line;
                }
                return false;
            };
            //检查立即完成生产条件
            ProduceItem.prototype.checkStallLevelEnough = function (level) {
                if (level === void 0) { level = 1003; }
                var stall = User.info.stall;
                if (User.info.stall >= level) {
                    return true;
                }
                return false;
            };
            //更新立即完成消耗
            ProduceItem.prototype.updateImmediateProcessCost = function (cur, total) {
                var costNum = this.getImmediateProcessCost(cur, total);
                var dt = total / cur;
                this.m_btn_timeEnd.m_num.text = costNum.toString();
            };
            ProduceItem.prototype.getImmediateProcessCost = function (cur, total) {
                var costNum = 0;
                var dt = total / cur;
                if (dt >= 3) {
                    return 20;
                }
                else if (dt >= 2 && dt < 3) {
                    return 40;
                }
                else {
                    return 60;
                }
            };
            return ProduceItem;
        }(Produce.ProduceItemStruct));
        Produce.ProduceItem = ProduceItem;
    })(Produce = fgui.Produce || (fgui.Produce = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=ProduceItem.js.map