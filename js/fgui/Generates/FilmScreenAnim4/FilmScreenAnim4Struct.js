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
    var FilmScreenAnim4;
    (function (FilmScreenAnim4) {
        var FilmScreenAnim4Struct = /** @class */ (function (_super) {
            __extends(FilmScreenAnim4Struct, _super);
            function FilmScreenAnim4Struct() {
                return _super.call(this) || this;
            }
            FilmScreenAnim4Struct.createInstance = function () {
                return (fairygui.UIPackage.createObject("FilmScreenAnim4", "FilmScreenAnim4"));
            };
            FilmScreenAnim4Struct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_3 = (this.getChild("3"));
                this.m_2 = (this.getChild("2"));
                this.m_1 = (this.getChild("1"));
                this.m_t0 = this.getTransition("t0");
            };
            FilmScreenAnim4Struct.URL = "ui://fxfjh2tksd1yh";
            FilmScreenAnim4Struct.DependPackages = ["FilmScreenAnim4"];
            return FilmScreenAnim4Struct;
        }(fairygui.GComponent));
        FilmScreenAnim4.FilmScreenAnim4Struct = FilmScreenAnim4Struct;
    })(FilmScreenAnim4 = fgui.FilmScreenAnim4 || (fgui.FilmScreenAnim4 = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=FilmScreenAnim4Struct.js.map