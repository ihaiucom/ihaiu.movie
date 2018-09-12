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
    var WarMovie;
    (function (WarMovie) {
        var WarYRFilmItemStruct = /** @class */ (function (_super) {
            __extends(WarYRFilmItemStruct, _super);
            function WarYRFilmItemStruct() {
                return _super.call(this) || this;
            }
            WarYRFilmItemStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("WarMovie", "WarYRFilmItem"));
            };
            WarYRFilmItemStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_tipBg = (this.getChild("tipBg"));
                this.m_tip = (this.getChild("tip"));
                this.m_attList = (this.getChild("attList"));
                this.m_icon = (this.getChild("icon"));
                this.m_star = (this.getChild("star"));
            };
            WarYRFilmItemStruct.URL = "ui://y6ozucp1r0zd3u";
            WarYRFilmItemStruct.DependPackages = ["WarMovie"];
            return WarYRFilmItemStruct;
        }(fairygui.GButton));
        WarMovie.WarYRFilmItemStruct = WarYRFilmItemStruct;
    })(WarMovie = fgui.WarMovie || (fgui.WarMovie = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=WarYRFilmItemStruct.js.map