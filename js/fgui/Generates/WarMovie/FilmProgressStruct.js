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
        var FilmProgressStruct = /** @class */ (function (_super) {
            __extends(FilmProgressStruct, _super);
            function FilmProgressStruct() {
                return _super.call(this) || this;
            }
            FilmProgressStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("WarMovie", "FilmProgress"));
            };
            FilmProgressStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_bar = (this.getChild("bar"));
                this.m_top1 = (this.getChild("top1"));
            };
            FilmProgressStruct.URL = "ui://y6ozucp1r0zd4l";
            FilmProgressStruct.DependPackages = ["WarMovie", "System", "Common"];
            return FilmProgressStruct;
        }(fairygui.GProgressBar));
        WarMovie.FilmProgressStruct = FilmProgressStruct;
    })(WarMovie = fgui.WarMovie || (fgui.WarMovie = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=FilmProgressStruct.js.map