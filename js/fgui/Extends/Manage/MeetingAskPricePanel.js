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
    var Manage;
    (function (Manage) {
        var MeetingAskPricePanel = /** @class */ (function (_super) {
            __extends(MeetingAskPricePanel, _super);
            function MeetingAskPricePanel() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            MeetingAskPricePanel.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_pay1Btn.text = Games.TEXT.MeetingMantianYaojia;
                this.m_pay2Btn.text = Games.TEXT.MeetingTaojiahuanjia;
                this.m_pay1Btn.m_number.text = "+200%";
                this.m_pay2Btn.m_number.text = "+50%";
                this.m_title.text = TEXT.MeetingInMeeting;
                this.m_tip.text = TEXT.MeetingNeedAddPiece;
                this.m_refuse.text = Games.TEXT.MeetingHuijue;
                this.m_okBtn.text = Games.TEXT.MeetingChengjiao;
                this.m_pay1Btn.onClick(this, this.onClickPay1Btn);
                this.m_pay2Btn.onClick(this, this.onClickPay2Btn);
                this.m_refuse.onClick(this, this.onClickRefuseBtn);
                this.m_okBtn.onClick(this, this.onClickOkBtn);
                this.m_okBtn.text = Games.TEXT.MeetingChengjiao;
            };
            MeetingAskPricePanel.prototype.onWindowHide = function () {
                console.log("hide");
            };
            MeetingAskPricePanel.prototype.onWindowShow = function () {
                console.log("show");
            };
            MeetingAskPricePanel.prototype.onClickPay1Btn = function () {
                Game.moduleModel.meeting.isDouble = true;
                this.moduleView.showGamePanel();
                //会议游戏阶段
                Game.event.dispatch(GameEventKey.GameEventKey_MeetingStep, 2);
                Game.protosender.manageMeeting.Markup(1);
            };
            MeetingAskPricePanel.prototype.onClickPay2Btn = function () {
                Game.moduleModel.meeting.isDouble = false;
                this.moduleView.showGamePanel();
                //会议游戏阶段
                Game.event.dispatch(GameEventKey.GameEventKey_MeetingStep, 1);
                Game.protosender.manageMeeting.Markup(2);
            };
            MeetingAskPricePanel.prototype.onClickRefuseBtn = function () {
                Game.protosender.manageMeeting.GetReward(MeetingRewardType.Refuse);
            };
            MeetingAskPricePanel.prototype.onClickOkBtn = function () {
                var _this = this;
                Game.system.alertTextIcon([this.meetingData.costMoney], Games.TEXT.MeetingChengjiaoSure, function () {
                    var enough = ItemHelper.checkItemEnough(_this.meetingData.costMoney);
                    if (enough) {
                        Game.moduleModel.meeting.rewardItems = _this.meetingData.resultRewards;
                        Game.protosender.manageMeeting.GetReward(MeetingRewardType.Receive);
                    }
                    else {
                        Game.system.openItemWay(_this.meetingData.costMoney.itemId, _this.meetingData.costMoney.itemNum);
                    }
                });
            };
            MeetingAskPricePanel.prototype.updateItemRender = function (index, item) {
                var item1 = item;
                item1.updateViewByDTNum(this.meetingData.rewards[index]);
            };
            MeetingAskPricePanel.prototype.updateView = function () {
                //目的
                this.m_dialog.m_title.text = Game.moduleModel.meeting.companyGoal;
                //
                var meetingData = Game.moduleModel.meeting.getMeetingData();
                this.meetingData = meetingData;
                this.m_dialog.updateView(meetingData);
                if (meetingData) {
                    var cost = meetingData.costMoney;
                    this.m_okBtn.m_number.text = formatNumberUnit(cost.itemNum);
                    this.m_okBtn.m_icon.icon = Game.config.item.getConfig(cost.itemId).iconUrl;
                }
                //头像
                var avatarConfig = Game.config.avatar.getConfig(Game.moduleModel.meeting.companyDelegateAvatarId);
                if (avatarConfig) {
                    this.m_head.m_icon.icon = avatarConfig.iconUrl;
                }
            };
            return MeetingAskPricePanel;
        }(Manage.MeetingAskPricePanelStruct));
        Manage.MeetingAskPricePanel = MeetingAskPricePanel;
    })(Manage = fgui.Manage || (fgui.Manage = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=MeetingAskPricePanel.js.map