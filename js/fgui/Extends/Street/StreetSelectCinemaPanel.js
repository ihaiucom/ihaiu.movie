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
        var StreetSelectCinemaPanel = /** @class */ (function (_super) {
            __extends(StreetSelectCinemaPanel, _super);
            function StreetSelectCinemaPanel() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            StreetSelectCinemaPanel.prototype.onWindowInited = function () {
                this.m_list.itemRenderer = new Handler(this, this.RenderListItem, null, false);
                this.m_btnConfirm.onClick(this, this.OnBtnConfirmClick);
                this.m_btnClose.onClick(this, this.OnBtnCloseClick);
            };
            StreetSelectCinemaPanel.prototype.onWindowOpen = function (arg) {
                this.moduleMain = this.moduleWindow.mainWindow;
                this.streetData = arg;
                this.m_list.selectedIndex = -1;
                this.UpdateView();
            };
            StreetSelectCinemaPanel.prototype.onWindowShow = function () {
                Game.protoOkEvent.add(ProtoEventKey.rank_ChoseTheater, this.OnSelectCinemaHandler, this);
            };
            StreetSelectCinemaPanel.prototype.onWindowHide = function () {
                Game.protoOkEvent.remove(ProtoEventKey.rank_ChoseTheater, this.OnSelectCinemaHandler, this);
            };
            StreetSelectCinemaPanel.prototype.UpdateView = function () {
                if (this.streetData) {
                    var cinemaList = this.streetData.Cfg.cinema;
                    this.m_list.numItems = cinemaList.length;
                    if (cinemaList.length == 1) {
                        this.m_list.selectedIndex = 0;
                    }
                }
            };
            StreetSelectCinemaPanel.prototype.RenderListItem = function (index, obj) {
                var cinemaList = this.streetData.Cfg.cinema;
                var cinemaId = cinemaList[index];
                obj.Render(cinemaId);
            };
            StreetSelectCinemaPanel.prototype.OnBtnCloseClick = function () {
                this.moduleWindow.closeSelf();
            };
            StreetSelectCinemaPanel.prototype.OnBtnConfirmClick = function () {
                if (this.m_list.selectedIndex >= 0) {
                    var cinemaList = this.streetData.Cfg.cinema;
                    var cinema = cinemaList[this.m_list.selectedIndex];
                    if (cinema) {
                        Game.protosender.rank.ChoseTheater(cinema);
                    }
                }
                else {
                    Game.system.toastMsg(MsgKey.choose_cinema);
                }
            };
            StreetSelectCinemaPanel.prototype.OnSelectCinemaHandler = function () {
                this.moduleWindow.closeSelf();
                var cinemaList = this.streetData.Cfg.cinema;
                var cinemaId = cinemaList[this.m_list.selectedIndex];
                this.moduleMain.openSubwindowByIndex(Games.StreetWindowSubEnum.StreetCinemaSelectedPanel, true, cinemaId);
            };
            return StreetSelectCinemaPanel;
        }(Street.StreetSelectCinemaPanelStruct));
        Street.StreetSelectCinemaPanel = StreetSelectCinemaPanel;
    })(Street = fgui.Street || (fgui.Street = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=StreetSelectCinemaPanel.js.map