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
        var MeetingResultPanel = /** @class */ (function (_super) {
            __extends(MeetingResultPanel, _super);
            function MeetingResultPanel() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            MeetingResultPanel.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_okBtn.onClick(this, this.onClickOkBtn);
                this.m_refuse.onClick(this, this.onClickRefuseBtn);
                this.m_closeBtn.onClick(this, this.onClickCloseBtn);
                this.m_closeBtn.text = TEXT.ButtonOk;
                this.m_refuse.text = Games.TEXT.MeetingHuijue;
                this.m_title.text = TEXT.MeetingInMeeting;
                this.m_paylist.itemRenderer = Handler.create(this, this.updateItemRender, null, false);
            };
            MeetingResultPanel.prototype.onClickCloseBtn = function () {
                this.onClickRefuseBtn();
            };
            //更新
            MeetingResultPanel.prototype.updateItemRender = function (index, item) {
                var item1 = item;
                item1.updateViewByDTNum(this.meetingData.resultRewards[index]);
            };
            //点击好
            MeetingResultPanel.prototype.onClickOkBtn = function () {
                var _this = this;
                Game.system.alertTextIcon([this.meetingData.costMoney], Games.TEXT.MeetingChengjiaoSure, function () {
                    var enough = ItemHelper.checkItemEnough(_this.meetingData.costMoney);
                    if (enough) {
                        Game.moduleModel.meeting.rewardItems = Game.moduleModel.meeting.getMeetingData().resultRewards;
                        Game.protosender.manageMeeting.GetReward(MeetingRewardType.Receive);
                    }
                    else {
                        Game.system.openItemWay(_this.meetingData.costMoney.itemId, _this.meetingData.costMoney.itemNum);
                    }
                });
            };
            //点击回绝
            MeetingResultPanel.prototype.onClickRefuseBtn = function () {
                Game.protosender.manageMeeting.GetReward(MeetingRewardType.Refuse);
            };
            MeetingResultPanel.prototype.updateView = function () {
                //头像
                var avatarConfig = Game.config.avatar.getConfig(Game.moduleModel.meeting.companyDelegateAvatarId);
                if (avatarConfig) {
                    this.m_head.m_icon.icon = avatarConfig.iconUrl;
                }
                var meetingData = Game.moduleModel.meeting.getMeetingData();
                this.m_okBtn.text = Games.TEXT.MeetingChengjiao;
                this.m_okBtn.m_number.visible = true;
                this.m_okBtn.m_icon.visible = true;
                this.meetingData = meetingData;
                if (meetingData) {
                    var cost = meetingData.costMoney;
                    this.m_okBtn.m_number.text = formatNumberUnit(cost.itemNum);
                    this.m_okBtn.m_icon.icon = Game.config.item.getConfig(cost.itemId).iconUrl;
                    var config = Game.config.meetingGame.getConfig(meetingData.randResult);
                    this.result = config.result;
                    switch (this.result) {
                        case MeetingResultType.Win:
                            this.m_c_result.selectedIndex = 1;
                            this.m_dialog.m_title.text = Game.config.msg.getTxt(MsgKey.meeting_win);
                            break;
                        case MeetingResultType.Draw:
                            this.m_c_result.selectedIndex = 1;
                            this.m_dialog.m_title.text = Game.config.msg.getTxt(MsgKey.meeting_fair);
                            break;
                        case MeetingResultType.FailAll:
                            this.m_c_result.selectedIndex = 0;
                            this.m_dialog.m_title.text = Game.config.msg.getTxt(MsgKey.meeting_lose1);
                            break;
                        case MeetingResultType.FailHalf:
                            this.m_c_result.selectedIndex = 1;
                            this.m_dialog.m_title.text = Game.config.msg.getTxt(MsgKey.meeting_lose2);
                            break;
                        default:
                            break;
                    }
                    //会议游戏阶段
                    var step = this.result == MeetingResultType.FailAll ? 4 : 3;
                    Game.event.dispatch(GameEventKey.GameEventKey_MeetingStep, step);
                    this.m_title.text = config.name;
                    this.m_paylist.numItems = meetingData.resultRewards.length;
                }
            };
            return MeetingResultPanel;
        }(Manage.MeetingResultPanelStruct));
        Manage.MeetingResultPanel = MeetingResultPanel;
    })(Manage = fgui.Manage || (fgui.Manage = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=MeetingResultPanel.js.map