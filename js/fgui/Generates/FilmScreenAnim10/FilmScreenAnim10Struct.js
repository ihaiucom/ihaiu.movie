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
    var FilmScreenAnim10;
    (function (FilmScreenAnim10) {
        var FilmScreenAnim10Struct = /** @class */ (function (_super) {
            __extends(FilmScreenAnim10Struct, _super);
            function FilmScreenAnim10Struct() {
                return _super.call(this) || this;
            }
            FilmScreenAnim10Struct.createInstance = function () {
                return (fairygui.UIPackage.createObject("FilmScreenAnim10", "FilmScreenAnim10"));
            };
            FilmScreenAnim10Struct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_3 = (this.getChild("3"));
                this.m_2 = (this.getChild("2"));
                this.m_1 = (this.getChild("1"));
                this.m_t0 = this.getTransition("t0");
            };
            FilmScreenAnim10Struct.URL = "ui://fj4c0b9tsd1yp";
            FilmScreenAnim10Struct.DependPackages = ["FilmScreenAnim10"];
            return FilmScreenAnim10Struct;
        }(fairygui.GComponent));
        FilmScreenAnim10.FilmScreenAnim10Struct = FilmScreenAnim10Struct;
    })(FilmScreenAnim10 = fgui.FilmScreenAnim10 || (fgui.FilmScreenAnim10 = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=FilmScreenAnim10Struct.js.map