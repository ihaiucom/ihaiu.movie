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
        var CinemaSelectItem = /** @class */ (function (_super) {
            __extends(CinemaSelectItem, _super);
            function CinemaSelectItem() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            CinemaSelectItem.prototype.Render = function (cinemaId) {
                this.cinemaId = cinemaId;
                var cfg = Game.config.cinema.getConfig(cinemaId);
                if (cfg) {
                    this.m_cinemaIcon.icon = cfg.iconUrl;
                    this.m_cinemaIcon.Level = cfg.sign_level;
                    this.m_txtCinemaNums.text = formatNumberUnit(cfg.num);
                    this.m_txtLike.text = cfg.favoriteActor;
                }
            };
            return CinemaSelectItem;
        }(Street.CinemaSelectItemStruct));
        Street.CinemaSelectItem = CinemaSelectItem;
    })(Street = fgui.Street || (fgui.Street = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=CinemaSelectItem.js.map