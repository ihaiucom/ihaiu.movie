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
    var FilmScreenAnim5;
    (function (FilmScreenAnim5) {
        var FilmScreenAnim5Struct = /** @class */ (function (_super) {
            __extends(FilmScreenAnim5Struct, _super);
            function FilmScreenAnim5Struct() {
                return _super.call(this) || this;
            }
            FilmScreenAnim5Struct.createInstance = function () {
                return (fairygui.UIPackage.createObject("FilmScreenAnim5", "FilmScreenAnim5"));
            };
            FilmScreenAnim5Struct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_3 = (this.getChild("3"));
                this.m_2 = (this.getChild("2"));
                this.m_1 = (this.getChild("1"));
                this.m_t0 = this.getTransition("t0");
            };
            FilmScreenAnim5Struct.URL = "ui://fx10j6kysd1yh";
            FilmScreenAnim5Struct.DependPackages = ["FilmScreenAnim5"];
            return FilmScreenAnim5Struct;
        }(fairygui.GComponent));
        FilmScreenAnim5.FilmScreenAnim5Struct = FilmScreenAnim5Struct;
    })(FilmScreenAnim5 = fgui.FilmScreenAnim5 || (fgui.FilmScreenAnim5 = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=FilmScreenAnim5Struct.js.map