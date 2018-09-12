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
        var FilmProgressBlue2Struct = /** @class */ (function (_super) {
            __extends(FilmProgressBlue2Struct, _super);
            function FilmProgressBlue2Struct() {
                return _super.call(this) || this;
            }
            FilmProgressBlue2Struct.createInstance = function () {
                return (fairygui.UIPackage.createObject("WarMovie", "FilmProgressBlue2"));
            };
            FilmProgressBlue2Struct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_showNum = this.getController("showNum");
                this.m_bar = (this.getChild("bar"));
                this.m_title = (this.getChild("title"));
            };
            FilmProgressBlue2Struct.URL = "ui://y6ozucp1qbxl6p";
            FilmProgressBlue2Struct.DependPackages = ["WarMovie", "System", "Common"];
            return FilmProgressBlue2Struct;
        }(fairygui.GProgressBar));
        WarMovie.FilmProgressBlue2Struct = FilmProgressBlue2Struct;
    })(WarMovie = fgui.WarMovie || (fgui.WarMovie = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=FilmProgressBlue2Struct.js.map