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
    var FilmScreenAnim8;
    (function (FilmScreenAnim8) {
        var FilmScreenAnim8Struct = /** @class */ (function (_super) {
            __extends(FilmScreenAnim8Struct, _super);
            function FilmScreenAnim8Struct() {
                return _super.call(this) || this;
            }
            FilmScreenAnim8Struct.createInstance = function () {
                return (fairygui.UIPackage.createObject("FilmScreenAnim8", "FilmScreenAnim8"));
            };
            FilmScreenAnim8Struct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_3 = (this.getChild("3"));
                this.m_2 = (this.getChild("2"));
                this.m_1 = (this.getChild("1"));
                this.m_t0 = this.getTransition("t0");
            };
            FilmScreenAnim8Struct.URL = "ui://fjsa7hfhsd1yh";
            FilmScreenAnim8Struct.DependPackages = ["FilmScreenAnim8"];
            return FilmScreenAnim8Struct;
        }(fairygui.GComponent));
        FilmScreenAnim8.FilmScreenAnim8Struct = FilmScreenAnim8Struct;
    })(FilmScreenAnim8 = fgui.FilmScreenAnim8 || (fgui.FilmScreenAnim8 = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=FilmScreenAnim8Struct.js.map