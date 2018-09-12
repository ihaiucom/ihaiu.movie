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
        var MettingStartPanel = /** @class */ (function (_super) {
            __extends(MettingStartPanel, _super);
            function MettingStartPanel() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            MettingStartPanel.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_okBtn.text = Games.TEXT.MeetingStartOkBtnText;
                this.m_cancleBtn.text = Games.TEXT.MeetingStartCancelBtnText;
                this.m_okBtn.onClick(this, this.onClickOkBtn);
                this.m_cancleBtn.onClick(this, this.onClickCancleBtn);
                this.m_icon.icon = Game.config.avatar.getConfig(9999).bodyIconUrl;
            };
            MettingStartPanel.prototype.updateView = function () {
                this.meetingData = Game.moduleModel.meeting.getMeetingData();
                if (this.meetingData) {
                    //数量
                    var nextNum = this.meetingData.nextMeetingNum;
                    this.m_next.text = format(Games.TEXT.MeetingNextNum, nextNum, this.meetingData.lineLimit);
                    if (this.meetingData.randResult > 0) {
                        //对话
                        this.m_dialog.m_title.text = Game.config.msg.getTxtFormat(MsgKey.meeting_midtime, Game.moduleModel.meeting.meetingCompanyName);
                        //
                        this.m_cancleBtn.visible = false;
                    }
                    else {
                        //对话
                        this.m_dialog.m_title.text = Game.config.msg.getTxtFormat(MsgKey.meeting_wait, Game.moduleModel.meeting.meetingCompanyName);
                        this.m_cancleBtn.visible = true;
                    }
                }
            };
            MettingStartPanel.prototype.onClickOkBtn = function () {
                if (this.meetingData.randResult > 0) {
                    this.moduleView.showResultPanel();
                }
                else {
                    this.moduleView.showAskPricePanel();
                }
            };
            MettingStartPanel.prototype.onClickCancleBtn = function () {
                this.moduleView.moduleWindow.menuClose();
            };
            return MettingStartPanel;
        }(Manage.MettingStartPanelStruct));
        Manage.MettingStartPanel = MettingStartPanel;
    })(Manage = fgui.Manage || (fgui.Manage = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=MettingStartPanel.js.map