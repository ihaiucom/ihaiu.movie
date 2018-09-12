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
        var StreetCinemaSelectedPanel = /** @class */ (function (_super) {
            __extends(StreetCinemaSelectedPanel, _super);
            function StreetCinemaSelectedPanel() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            StreetCinemaSelectedPanel.prototype.onWindowInited = function () {
                this.m_btnClose.onClick(this, this.OnBtnCloseClick);
            };
            StreetCinemaSelectedPanel.prototype.onWindowOpen = function (arg) {
                this.moduleMain = this.moduleWindow.mainWindow;
                this.cinemaId = arg;
                this.UpdateView();
            };
            StreetCinemaSelectedPanel.prototype.onWindowShow = function () {
            };
            StreetCinemaSelectedPanel.prototype.onWindowHide = function () {
            };
            StreetCinemaSelectedPanel.prototype.UpdateView = function () {
                if (this.cinemaId) {
                    var cfg = Game.config.cinema.getConfig(this.cinemaId);
                    this.m_txtTip1.text = cfg.proportionString;
                    this.m_txtTip2.text = Game.config.msg.getTxtFormat(MsgKey.cinema_sign, cfg.name, numberToLetter(6 - cfg.level), cfg.num);
                    this.m_cinemaIcon.icon = cfg.iconUrl;
                    this.m_cinemaIcon.Level = cfg.sign_level;
                }
            };
            StreetCinemaSelectedPanel.prototype.OnBtnCloseClick = function () {
                this.moduleWindow.closeSelf();
            };
            return StreetCinemaSelectedPanel;
        }(Street.StreetCinemaSelectedPanelStruct));
        Street.StreetCinemaSelectedPanel = StreetCinemaSelectedPanel;
    })(Street = fgui.Street || (fgui.Street = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=StreetCinemaSelectedPanel.js.map