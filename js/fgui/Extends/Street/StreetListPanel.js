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
    var Street;
    (function (Street) {
        var StreetListPanel = /** @class */ (function (_super) {
            __extends(StreetListPanel, _super);
            function StreetListPanel() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            StreetListPanel.prototype.onInit = function (moduleWindow) {
                this.moduleWindow = moduleWindow;
                this.m_btnClose.onClick(this, this.OnCloseClick);
                this.m_btnRank.onClick(this, this.OnBtnRankClick);
                this.m_list.itemRenderer = new Handler(this, this.RenderListItem, null, false);
                this.m_list.setVirtual();
            };
            StreetListPanel.prototype.onWindowOpen = function () {
                var arg = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    arg[_i] = arguments[_i];
                }
                this.UpdateView();
            };
            StreetListPanel.prototype.onWindowShow = function () {
                Game.protoOkEvent.add(ProtoEventKey.GameInfo, this.UpdateView, this);
            };
            StreetListPanel.prototype.onWindowHide = function () {
                Game.protoOkEvent.remove(ProtoEventKey.GameInfo, this.UpdateView, this);
            };
            StreetListPanel.prototype.UpdateView = function () {
                this.streetList = Game.moduleModel.street.StreetList;
                this.m_list.numItems = this.streetList.length;
                this.m_list.refreshVirtualList();
                this.m_list.scrollToView(Game.moduleModel.street.NextStreetNum);
            };
            StreetListPanel.prototype.RenderListItem = function (index, obj) {
                var data = this.streetList[index];
                obj.Render(data, this);
            };
            StreetListPanel.prototype.OnItemClick = function (obj) {
                var item = obj;
                if (item.streetData.isLock) {
                    this.moduleWindow.openSubwindowByIndex(Games.StreetWindowSubEnum.StreetLvUpInfoPanel, true, item.streetData);
                }
                else {
                    this.moduleWindow.openSubwindowByIndex(Games.StreetWindowSubEnum.StreetInfoPanel, true, item.streetData);
                }
            };
            StreetListPanel.prototype.OnSignClick = function (obj) {
                var item = obj;
                this.moduleWindow.openSubwindowByIndex(Games.StreetWindowSubEnum.StreetSelectCinemaPanel, true, item.streetData);
            };
            StreetListPanel.prototype.OnCloseClick = function () {
                this.moduleWindow.menuClose();
            };
            StreetListPanel.prototype.OnBtnRankClick = function () {
                this.moduleWindow.conent.OpenStreetRankPanel();
            };
            StreetListPanel.prototype.ShowSelectCinemaPanel = function () {
                this.moduleWindow.openSubwindowByIndex(Games.StreetWindowSubEnum.StreetSelectCinemaPanel);
            };
            return StreetListPanel;
        }(Street.StreetListPanelStruct));
        Street.StreetListPanel = StreetListPanel;
    })(Street = fgui.Street || (fgui.Street = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=StreetListPanel.js.map