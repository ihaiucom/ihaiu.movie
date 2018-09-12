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
    var PfSkin;
    (function (PfSkin) {
        var ArtListExerciseItem = /** @class */ (function (_super) {
            __extends(ArtListExerciseItem, _super);
            function ArtListExerciseItem() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.uuid = "";
                _this.totalTime = 0;
                _this.cutDownTime = 0;
                _this.quickExperciseCost = 0;
                _this.isComplete = false; //是否训练完成
                return _this;
            }
            ArtListExerciseItem.prototype.setInfo = function (uuid, info) {
                this.uuid = uuid;
                this.info = info;
                this.totalTime = Game.config.global.getConfig(GlobalKey.Actor_Train_Time).value * 60 - MathDesign.calcActorExperciseDerateTime() * 60;
                this.m_iconBtn.onClick(this, this.onActorExercise);
                this.m_quickBtn.onClick(this, this.onQuickExercise);
                this.m_quickBtn.m_title.text = TEXT.ActorExperciseExpedite;
                this.m_completeExpercise.visible = false;
                this.m_onActorBg.visible = false;
                this.m_noneActorBg.visible = false;
                if (info.uuid == "") //没有艺人在训练
                 {
                    this.m_noneActorBg.visible = true;
                    this.m_iconBtn.visible = true;
                    this.stopTimeCutdown();
                    this.m_onExpercise.visible = false;
                    this.m_timeText.text = "";
                    this.m_noneActorDesc.text = TEXT.ActorExperciserStart;
                    this.m_iconLoader.url = "";
                }
                else {
                    var actorId = 0;
                    var actorData = Game.moduleModel.actor.getActorByUUid(info.uuid);
                    if (actorData) {
                        actorId = actorData.id;
                    }
                    this.actorCfg = Game.config.actor.getConfig(actorId); //3005;
                    if (this.actorCfg) {
                        this.m_iconLoader.url = this.actorCfg.avatarConfig.bodyIconUrl;
                    }
                    this.m_onActorBg.visible = true;
                    this.m_iconBtn.visible = false;
                    this.m_onExpercise.visible = true;
                    this.m_desc.text = TEXT.ActorExperciserOn;
                    this.m_noneActorDesc.text = "";
                    this.m_assetIcon.url = Game.config.item.getConfig(Games.AssetType.Diamond).iconUrl;
                    this.startTimeCutdown();
                }
            };
            ArtListExerciseItem.prototype.dispose = function () {
                this.stopTimeCutdown();
            };
            Object.defineProperty(ArtListExerciseItem.prototype, "complete", {
                get: function () {
                    return this.isComplete;
                },
                enumerable: true,
                configurable: true
            });
            ArtListExerciseItem.prototype.startTimeCutdown = function () {
                this.cutDownTime = this.totalTime - Game.time.getSubSecondsPre(this.info.startTime);
                if (this.cutDownTime <= 0) {
                    this.setExperciseComplete();
                }
                else {
                    this.onTimeCutDown();
                    Laya.timer.loop(1000, this, this.onTimeCutDown, null, true, true);
                }
            };
            ArtListExerciseItem.prototype.stopTimeCutdown = function () {
                Laya.timer.clear(this, this.onTimeCutDown);
            };
            //生产时间倒计时
            ArtListExerciseItem.prototype.onTimeCutDown = function () {
                this.cutDownTime--;
                if (this.cutDownTime >= 0) {
                    this.quickExperciseCost = this.getQuickExperciseCost(this.cutDownTime);
                    this.updateQuickExperciseCost(this.cutDownTime);
                    this.m_timeText.text = TimeHelper.TimeFormat(this.cutDownTime);
                    this.m_bar.value = Math.round((this.totalTime - this.cutDownTime) * 100 / this.totalTime);
                }
                else {
                    this.setExperciseComplete();
                }
            };
            //（剩余训练时间（分钟）/5）取整
            ArtListExerciseItem.prototype.getQuickExperciseCost = function (leftTime) {
                return Math.round(leftTime / 60 / 5);
            };
            ArtListExerciseItem.prototype.updateQuickExperciseCost = function (leftTime) {
                var cost = this.getQuickExperciseCost(leftTime);
                this.m_costText.text = cost.toString();
                if (cost == 0) {
                    this.m_quickBtn.visible = false;
                }
            };
            //添加艺人到训练
            ArtListExerciseItem.prototype.onActorExercise = function () {
                console.log("onActorExercise");
                var selectActorPanel = PfSkin.ActorExperciseSelectPanel.createInstance();
                selectActorPanel.showForParent(this.uuid);
            };
            //快速训练
            ArtListExerciseItem.prototype.onQuickExercise = function () {
                var _this = this;
                console.log("onQuickExercise");
                var cost = new DTItemNum();
                cost.itemId = Games.AssetType.Diamond;
                cost.itemNum = this.getQuickExperciseCost(this.cutDownTime);
                Game.system.confirmTextIcon([cost], TEXT.NoticeTitle, TEXT.ActorExperciseQuick, function () {
                    if (!ItemHelper.checkItemEnough(cost)) {
                        Game.system.toastFormatText(TEXT.ToastTextItemNotEnough, ItemHelper.getItemName(cost.itemId));
                        return;
                    }
                    Game.protosender.Actor.ActorExerciseReward(_this.uuid, true);
                });
            };
            //设置完成
            ArtListExerciseItem.prototype.setExperciseComplete = function () {
                this.stopTimeCutdown();
                this.m_t1.text = TEXT.ActorExperciceCompleteDesc;
                this.m_tkey.text = TEXT.ActorExperciceKey;
                var expVal = Game.config.global.getConfig(GlobalKey.Actor_Train_Exp).value;
                this.m_tvalue.text = MathDesign.calcActorExperciseExp().toString();
                this.m_completeExpercise.visible = true;
                this.m_onExpercise.visible = false;
                this.isComplete = true;
                this.m_bar.value = 100;
            };
            return ArtListExerciseItem;
        }(PfSkin.ArtListExerciseItemStruct));
        PfSkin.ArtListExerciseItem = ArtListExerciseItem;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=ArtListExerciseItem.js.map