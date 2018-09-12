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
        var FilmIconStruct = /** @class */ (function (_super) {
            __extends(FilmIconStruct, _super);
            function FilmIconStruct() {
                return _super.call(this) || this;
            }
            FilmIconStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("WarMovie", "FilmIcon"));
            };
            FilmIconStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_c1 = this.getController("c1");
                this.m_icon = (this.getChild("icon"));
                this.m_filmStar = (this.getChild("filmStar"));
            };
            FilmIconStruct.URL = "ui://y6ozucp1r0zd53";
            FilmIconStruct.DependPackages = ["WarMovie", "Common"];
            return FilmIconStruct;
        }(fairygui.GButton));
        WarMovie.FilmIconStruct = FilmIconStruct;
    })(WarMovie = fgui.WarMovie || (fgui.WarMovie = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=FilmIconStruct.js.map