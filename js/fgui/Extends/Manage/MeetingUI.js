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
        var MeetingUI = /** @class */ (function (_super) {
            __extends(MeetingUI, _super);
            function MeetingUI() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            MeetingUI.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_startMeeting.moduleView = this;
                this.m_gamePanel.moduleView = this;
                this.m_resultPanel.moduleView = this;
                this.m_askPrice.moduleView = this;
            };
            MeetingUI.prototype.onWindowHide = function () {
                this.m_c1.selectedIndex = MeetingPanelType.None;
                Game.event.dispatch(GameEventKey.GameEventKey_EnabledScrollMain, true, Games.RoomType.Meeting);
                Game.protoOkEvent.remove(ProtoEventKey.manageMeeting_Markup, this.onMarkUpHandler, this);
            };
            MeetingUI.prototype.onWindowShow = function () {
                Game.protoOkEvent.add(ProtoEventKey.manageMeeting_Markup, this.onMarkUpHandler, this);
                Game.event.dispatch(GameEventKey.GameEventKey_ScrollMainRoom, [Games.RoomType.Meeting]);
                Game.event.dispatch(GameEventKey.GameEventKey_EnabledScrollMain, false, Games.RoomType.Meeting);
                this.m_c_result_effect.selectedIndex = 0;
                this.updateView();
            };
            //加价后返回
            MeetingUI.prototype.onMarkUpHandler = function (msg) {
                this.updateResult(this.meetingData.randResult);
            };
            //更新结果
            MeetingUI.prototype.updateResult = function (result) {
                this.m_gamePanel.updateResult(result);
            };
            //显示不同界面
            MeetingUI.prototype.showTargetUI = function (type) {
                if (type === void 0) { type = MeetingPanelType.None; }
                this.m_c1.selectedIndex = type;
                switch (type) {
                    case MeetingPanelType.Start:
                        this.m_startMeeting.updateView();
                        break;
                    case MeetingPanelType.Result:
                        this.m_resultPanel.updateView();
                        break;
                    case MeetingPanelType.Game:
                        this.m_gamePanel.updateView();
                        break;
                    case MeetingPanelType.AskPirce:
                        this.m_askPrice.updateView();
                        Game.event.dispatch(GameEventKey.GameEventKey_MeetingStep, 0);
                        break;
                    default:
                        break;
                }
            };
            //显示结果
            MeetingUI.prototype.showResultPanel = function () {
                this.showTargetUI(MeetingPanelType.Result);
            };
            //显示问价界面
            MeetingUI.prototype.showAskPricePanel = function () {
                this.showTargetUI(MeetingPanelType.AskPirce);
            };
            //显示小游戏界面
            MeetingUI.prototype.showGamePanel = function () {
                this.showTargetUI(MeetingPanelType.Game);
            };
            //更新一下界面
            MeetingUI.prototype.updateView = function () {
                var meetingData = Game.moduleModel.meeting.getMeetingData();
                if (meetingData) {
                    if (this.moduleWindow.menuParameter.args.length > 0) {
                        this.showTargetUI(this.moduleWindow.menuParameter.args[0]);
                    }
                    else {
                        this.showTargetUI(MeetingPanelType.Start);
                    }
                }
                this.meetingData = meetingData;
            };
            return MeetingUI;
        }(Manage.MeetingUIStruct));
        Manage.MeetingUI = MeetingUI;
    })(Manage = fgui.Manage || (fgui.Manage = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=MeetingUI.js.map