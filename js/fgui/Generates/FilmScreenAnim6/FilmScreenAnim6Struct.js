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
    var FilmScreenAnim6;
    (function (FilmScreenAnim6) {
        var FilmScreenAnim6Struct = /** @class */ (function (_super) {
            __extends(FilmScreenAnim6Struct, _super);
            function FilmScreenAnim6Struct() {
                return _super.call(this) || this;
            }
            FilmScreenAnim6Struct.createInstance = function () {
                return (fairygui.UIPackage.createObject("FilmScreenAnim6", "FilmScreenAnim6"));
            };
            FilmScreenAnim6Struct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_3 = (this.getChild("3"));
                this.m_2 = (this.getChild("2"));
                this.m_1 = (this.getChild("1"));
                this.m_t0 = this.getTransition("t0");
            };
            FilmScreenAnim6Struct.URL = "ui://fa5hxb30sd1yh";
            FilmScreenAnim6Struct.DependPackages = ["FilmScreenAnim6"];
            return FilmScreenAnim6Struct;
        }(fairygui.GComponent));
        FilmScreenAnim6.FilmScreenAnim6Struct = FilmScreenAnim6Struct;
    })(FilmScreenAnim6 = fgui.FilmScreenAnim6 || (fgui.FilmScreenAnim6 = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=FilmScreenAnim6Struct.js.map