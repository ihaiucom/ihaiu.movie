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
        var FilmProgressBlueStruct = /** @class */ (function (_super) {
            __extends(FilmProgressBlueStruct, _super);
            function FilmProgressBlueStruct() {
                return _super.call(this) || this;
            }
            FilmProgressBlueStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("WarMovie", "FilmProgressBlue"));
            };
            FilmProgressBlueStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_bar = (this.getChild("bar"));
                this.m_top1 = (this.getChild("top1"));
            };
            FilmProgressBlueStruct.URL = "ui://y6ozucp1qbxl6h";
            FilmProgressBlueStruct.DependPackages = ["WarMovie", "System", "Common"];
            return FilmProgressBlueStruct;
        }(fairygui.GProgressBar));
        WarMovie.FilmProgressBlueStruct = FilmProgressBlueStruct;
    })(WarMovie = fgui.WarMovie || (fgui.WarMovie = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=FilmProgressBlueStruct.js.map