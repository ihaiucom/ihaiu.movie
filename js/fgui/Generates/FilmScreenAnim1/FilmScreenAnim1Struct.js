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
    var FilmScreenAnim1;
    (function (FilmScreenAnim1) {
        var FilmScreenAnim1Struct = /** @class */ (function (_super) {
            __extends(FilmScreenAnim1Struct, _super);
            function FilmScreenAnim1Struct() {
                return _super.call(this) || this;
            }
            FilmScreenAnim1Struct.createInstance = function () {
                return (fairygui.UIPackage.createObject("FilmScreenAnim1", "FilmScreenAnim1"));
            };
            FilmScreenAnim1Struct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_3 = (this.getChild("3"));
                this.m_2 = (this.getChild("2"));
                this.m_1 = (this.getChild("1"));
                this.m_t0 = this.getTransition("t0");
            };
            FilmScreenAnim1Struct.URL = "ui://zd7syq8psd1yi";
            FilmScreenAnim1Struct.DependPackages = ["FilmScreenAnim1"];
            return FilmScreenAnim1Struct;
        }(fairygui.GComponent));
        FilmScreenAnim1.FilmScreenAnim1Struct = FilmScreenAnim1Struct;
    })(FilmScreenAnim1 = fgui.FilmScreenAnim1 || (fgui.FilmScreenAnim1 = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=FilmScreenAnim1Struct.js.map