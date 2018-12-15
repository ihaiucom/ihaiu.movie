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
    var Oscar;
    (function (Oscar) {
        var OscarAwardsListPanel = /** @class */ (function (_super) {
            __extends(OscarAwardsListPanel, _super);
            function OscarAwardsListPanel() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.dailyEventList = [];
                return _this;
            }
            OscarAwardsListPanel.prototype.onWindowInited = function () {
                this.m_checkDay.SetHandler(this, this.OnDayChange);
                this.m_btnClose.onClick(this, this.OnCloseClick);
                this.m_list.itemRenderer = new Handler(this, this.RenderItem, null, false);
                this.m_list.setVirtual();
                this.m_list.on(fairygui.Events.CLICK_ITEM, this, this.OnItemClick);
            };
            OscarAwardsListPanel.prototype.onWindowOpen = function (arg) {
                var oscType = arg;
                switch (oscType) {
                    case Games.OscarSubEnum.OscarReward:
                        {
                            console.log("OscarReward");
                            this.moduleWindow.openSubwindowByIndex(Games.OscarSubEnum.OscarReward, false);
                        }
                        break;
                    case Games.OscarSubEnum.OscarShow:
                        {
                            console.log("OscarShow");
                            this.moduleWindow.openSubwindowByIndex(Games.OscarSubEnum.OscarShow, false);
                        }
                        break;
                    default:
                        this.m_checkDay.selected = false;
                        this.UpdateView();
                        break;
                }
            };
            OscarAwardsListPanel.prototype.UpdateView = function () {
                if (this.m_checkDay.selected) {
                    this.m_checkDay.title = Games.TEXT.Today;
                    this.dailyEventList = Game.moduleModel.oscar.OscarDailyEventList;
                }
                else {
                    this.m_checkDay.title = Games.TEXT.Yestoday;
                    this.dailyEventList = Game.moduleModel.oscar.OscarYesterdayEventList;
                }
                this.m_list.numItems = this.dailyEventList.length;
            };
            OscarAwardsListPanel.prototype.RenderItem = function (index, obj) {
                var data = this.dailyEventList[index];
                obj.Render(data);
            };
            OscarAwardsListPanel.prototype.OnItemClick = function (obj) {
                var data = obj.dailyEvent;
                if (data.hasData && data.type == Games.DailyEventType.Awards) {
                    this.moduleWindow.openSubwindowByIndex(Games.OscarSubEnum.OscarShow, false);
                }
            };
            OscarAwardsListPanel.prototype.onWindowShow = function () {
                Game.protoOkEvent.add(ProtoEventKey.DailyEvent, this.UpdateView, this);
            };
            OscarAwardsListPanel.prototype.onWindowHide = function () {
                Game.protoOkEvent.remove(ProtoEventKey.DailyEvent, this.UpdateView, this);
            };
            OscarAwardsListPanel.prototype.OnCloseClick = function () {
                this.moduleWindow.menuClose();
            };
            OscarAwardsListPanel.prototype.OnDayChange = function () {
                this.UpdateView();
            };
            return OscarAwardsListPanel;
        }(Oscar.OscarAwardsListPanelStruct));
        Oscar.OscarAwardsListPanel = OscarAwardsListPanel;
    })(Oscar = fgui.Oscar || (fgui.Oscar = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=OscarAwardsListPanel.js.map