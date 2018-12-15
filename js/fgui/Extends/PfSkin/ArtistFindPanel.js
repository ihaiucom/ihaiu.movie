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
        var ArtistFindPanel = /** @class */ (function (_super) {
            __extends(ArtistFindPanel, _super);
            function ArtistFindPanel() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.dialogNumbers = [];
                _this.dialogPanels = [];
                _this.dialogNumPanels = [];
                return _this;
            }
            ArtistFindPanel.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_findBtn.m_red.visible = false;
                this.dialogPanels = [this.m_dialog1, this.m_dialog2, this.m_dialog3];
            };
            ArtistFindPanel.prototype.clearTime = function () {
                Laya.timer.clear(this, this.onUpdateTime);
                Laya.timer.clear(this, this.onUpdateClearTime);
            };
            ArtistFindPanel.prototype.updateView = function () {
                //显示倒计时
                this.checkTime();
                this.startDialog();
                //金币
                this.updateGoldView();
            };
            ArtistFindPanel.prototype.initDialog = function () {
                this.dialogNumbers = [100101, 100102, 100103, 100104, 100105, 100106, 100107, 100108];
            };
            ArtistFindPanel.prototype.initDialogNum = function () {
                this.dialogNumPanels = [0, 1, 2];
            };
            ArtistFindPanel.prototype.updateButtonView = function () {
                if (this.resetTimes > 0) {
                }
            };
            ArtistFindPanel.prototype.onTabHide = function () {
                this.clearTime();
                clearTimeout(this.dialogInterval);
                this.m_findBtn.offClick(this, this.onClickFindBtn);
                User.sGameInfoUpdate.remove(this.onUpdateGameInfoHandler, this);
                Game.moduleModel.actor.sUpdateActorInfo.remove(this.onUpdateActorHandler, this);
            };
            ArtistFindPanel.prototype.onTabShow = function () {
                this.m_findBtn.onClick(this, this.onClickFindBtn);
                User.sGameInfoUpdate.add(this.onUpdateGameInfoHandler, this);
                Game.moduleModel.actor.sUpdateActorInfo.add(this.onUpdateActorHandler, this);
                this.m_findBtn.text = Games.TEXT.ScountActor;
                var itemCost = GlobalConfig.getValue1(GlobalKey.KEY_1001_TanChaXiaoHao);
                this.m_findBtn.m_icon.icon = Game.config.item.getConfig(itemCost[0]).iconUrl;
                this.m_findBtn.m_number.text = itemCost[1] + "";
                this.m_artistEffect.m_t0.play(null, -1);
            };
            ArtistFindPanel.prototype.onUpdateActorHandler = function () {
                this.updateView();
            };
            //并
            ArtistFindPanel.prototype.onUpdateGameInfoHandler = function () {
                //正在显示查找面板
                if (Game.moduleModel.actor.noseActorIsWaiting && User.info.noseIntoActorList.length > 0) {
                    //有探查艺人
                    Game.menu.open(MenuId.ArtistScoutResult);
                }
                else {
                    this.updateView();
                }
            };
            ArtistFindPanel.prototype.startDialog = function () {
                var _this = this;
                if (this.dialogNumbers.length <= 0) {
                    this.initDialog();
                }
                if (this.dialogNumPanels.length <= 0) {
                    this.initDialogNum();
                }
                clearTimeout(this.dialogInterval);
                var index = Math.floor(this.dialogNumbers.length * Math.random());
                var dialogId = this.dialogNumbers[index];
                this.dialogNumbers.splice(index, 1);
                var pos = Math.floor(this.dialogNumPanels.length * Math.random());
                index = this.dialogNumPanels[pos];
                var dialog = this.dialogPanels[index];
                this.dialogNumPanels.splice(pos, 1);
                this.m_c_visible_dialog.selectedIndex = index + 1;
                var config = Game.config.speak.getConfig(dialogId);
                if (config) {
                    dialog.m_title.text = config.speak;
                    this.dialogInterval = setTimeout(function () {
                        _this.startDialog();
                    }, 3000);
                }
                else {
                    // this.startDialog();
                }
            };
            ArtistFindPanel.prototype.updateGoldView = function () {
                this.m_gold.text = formatNumberUnit(Game.moduleModel.item.getItemNum(EItemId.gold));
            };
            ArtistFindPanel.prototype.updateRemainTime = function (remain) {
                //剩余次数
                this.m_remianTime.text = Games.TEXT.TalentTimes;
                this.m_tremianTime.text = format("{0}/{1}", remain, GlobalConfig.getValue(GlobalKey.KEY_1013_XingTanCiShu));
                ;
            };
            /**
             * 开始倒计时
             */
            ArtistFindPanel.prototype.checkTime = function () {
                this.clearTime();
                //次数用完并且没有道具
                if (Game.moduleModel.actor.isMaxNose) {
                    //显示星探使者离开
                    this.showNoseLeave();
                }
                else {
                    //时间
                    var nowTimes = Game.time.serverSeconds;
                    //探查时间CD
                    var resetTimes = User.info.noseIntoTime + Game.moduleModel.actor.noseCdReset;
                    //重置时间
                    this.resetTimes = Math.max(0, resetTimes - nowTimes);
                    if (this.resetTimes > 0) {
                        this.startTimeHandler();
                    }
                    else {
                        //显示
                        this.showCanNose();
                    }
                }
            };
            //开始倒计时
            ArtistFindPanel.prototype.startTimeHandler = function () {
                // this.m_time.visible = false;
                // this.m_speedBtn.visible = true;
                // this.m_findBtn.visible = false;
                // this.m_leaveTip.visible = false;
                this.m_findBtn.text = Games.TEXT.ScountActor;
                this.m_state.setSelectedIndex(1);
                this.m_speedBtn.onClick(this, this.onClickFindBtn);
                this.updateRemainTime(0);
                Laya.timer.loop(1000, this, this.onUpdateTime, null, true, true);
                this.updateTimeView();
            };
            //显示可以探查
            ArtistFindPanel.prototype.showCanNose = function () {
                this.updateRemainTime(1);
                this.m_time.visible = false;
                // this.m_speedBtn.visible = false;
                this.m_leaveTip.visible = false;
                this.m_state.setSelectedIndex(0);
            };
            //探查离开
            ArtistFindPanel.prototype.showNoseLeave = function () {
                this.updateRemainTime(0);
                this.m_time.visible = false;
                this.m_speedBtn.visible = false;
                this.m_leaveTip.visible = true;
                this.m_state.setSelectedIndex(0);
                var currSecond = Game.time.serverSeconds;
                this.clearTimes = 0;
                var nextSecond = User.info.resetNoseIntoTime; //Math.floor(d.getTime() / 1000);
                if (currSecond < nextSecond) {
                    this.clearTimes = nextSecond - currSecond;
                    Laya.timer.loop(1000, this, this.onUpdateClearTime, null, true, true);
                }
                this.updateLeaveTimeView();
            };
            //
            ArtistFindPanel.prototype.stopTimeHandler = function () {
                this.updateRemainTime(1);
                this.m_findBtn.text = Games.TEXT.ScountActor;
                this.m_findBtn.m_number.text = formatNumberUnit(GlobalConfig.getValue1(GlobalKey.KEY_1001_TanChaXiaoHao)[1]);
                this.m_time.visible = false;
                // this.m_speedBtn.visible = false;
                this.m_leaveTip.visible = false;
                this.m_state.setSelectedIndex(0);
            };
            /**
             *更新时间
             */
            ArtistFindPanel.prototype.onUpdateTime = function () {
                //重置次数时间
                if (this.resetTimes >= 0) {
                    this.resetTimes--;
                    if (this.resetTimes < 0) {
                        this.resetTimes = 0;
                        this.checkTime();
                    }
                }
                this.updateTimeView();
            };
            /**
             *
             */
            ArtistFindPanel.prototype.onUpdateClearTime = function () {
                //重置次数时间
                if (this.clearTimes >= 0) {
                    this.clearTimes--;
                    if (this.clearTimes < 0) {
                        this.clearTimes = 0;
                        this.checkTime();
                    }
                }
                this.updateLeaveTimeView();
            };
            /**
             *更新时间
             */
            ArtistFindPanel.prototype.updateTimeView = function () {
                this.m_time.text = format(Games.TEXT.AfterToScountActor, Games.TimeHelper.TimeFormat2(this.resetTimes));
                this.m_speedBtn.m_title.text = Games.TimeHelper.TimeFormat(this.resetTimes);
            };
            /**
             * 离开时间
             */
            ArtistFindPanel.prototype.updateLeaveTimeView = function () {
                this.m_leaveTip.text = format(Games.TEXT.AfterToClearNoseTimes, Games.TimeHelper.TimeFormat2(this.clearTimes));
            };
            /**
             * 点击探查按钮
             */
            ArtistFindPanel.prototype.onClickFindBtn = function () {
                var self = this;
                function noseActor() {
                    var cost = GlobalConfig.getValue1(GlobalKey.KEY_1001_TanChaXiaoHao);
                    var enough = Games.ItemHelper.checkItemEnough3(cost);
                    if (enough) {
                        //请求探查艺人
                        Game.protosender.Actor.noseInfoActor(self.resetTimes > 0);
                    }
                    else {
                        Game.system.openItemWay(cost[0], cost[1]);
                    }
                }
                if (Game.moduleModel.actor.actorIsMax) {
                    Game.moduleModel.actor.toMaxActor();
                }
                else {
                    if (this.resetTimes > 0 || Game.moduleModel.actor.isMaxNose) {
                        Game.system.openGoOtherFunc(Games.OtherFunctionType.ActorStarCard, Games.TEXT.TitleTip, TEXT.SystemGoOtherFunction_Desc_2, function () {
                            var cost = GlobalConfig.getValue1(GlobalKey.KEY_1008_JiangZhiTanCha__PinHeShuLiang);
                            var enough = Games.ItemHelper.checkItemEnough3(cost);
                            if (enough) {
                                noseActor();
                            }
                            else {
                                Game.system.openItemWay(cost[0], cost[1]);
                            }
                        });
                    }
                    else {
                        noseActor();
                    }
                }
            };
            return ArtistFindPanel;
        }(PfSkin.ArtistFindPanelStruct));
        PfSkin.ArtistFindPanel = ArtistFindPanel;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=ArtistFindPanel.js.map