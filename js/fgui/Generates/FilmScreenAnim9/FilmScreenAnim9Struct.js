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
    var FilmScreenAnim9;
    (function (FilmScreenAnim9) {
        var FilmScreenAnim9Struct = /** @class */ (function (_super) {
            __extends(FilmScreenAnim9Struct, _super);
            function FilmScreenAnim9Struct() {
                return _super.call(this) || this;
            }
            FilmScreenAnim9Struct.createInstance = function () {
                return (fairygui.UIPackage.createObject("FilmScreenAnim9", "FilmScreenAnim9"));
            };
            FilmScreenAnim9Struct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_3 = (this.getChild("3"));
                this.m_2 = (this.getChild("2"));
                this.m_1 = (this.getChild("1"));
                this.m_t0 = this.getTransition("t0");
            };
            FilmScreenAnim9Struct.URL = "ui://fo83pk0qsd1yh";
            FilmScreenAnim9Struct.DependPackages = ["FilmScreenAnim9"];
            return FilmScreenAnim9Struct;
        }(fairygui.GComponent));
        FilmScreenAnim9.FilmScreenAnim9Struct = FilmScreenAnim9Struct;
    })(FilmScreenAnim9 = fgui.FilmScreenAnim9 || (fgui.FilmScreenAnim9 = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=FilmScreenAnim9Struct.js.map