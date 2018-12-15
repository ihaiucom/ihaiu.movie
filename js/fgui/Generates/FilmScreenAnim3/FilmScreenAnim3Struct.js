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
    var FilmScreenAnim3;
    (function (FilmScreenAnim3) {
        var FilmScreenAnim3Struct = /** @class */ (function (_super) {
            __extends(FilmScreenAnim3Struct, _super);
            function FilmScreenAnim3Struct() {
                return _super.call(this) || this;
            }
            FilmScreenAnim3Struct.createInstance = function () {
                return (fairygui.UIPackage.createObject("FilmScreenAnim3", "FilmScreenAnim3"));
            };
            FilmScreenAnim3Struct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_3 = (this.getChild("3"));
                this.m_2 = (this.getChild("2"));
                this.m_1 = (this.getChild("1"));
                this.m_t0 = this.getTransition("t0");
            };
            FilmScreenAnim3Struct.URL = "ui://sq94p4flm647l";
            FilmScreenAnim3Struct.DependPackages = ["FilmScreenAnim3"];
            return FilmScreenAnim3Struct;
        }(fairygui.GComponent));
        FilmScreenAnim3.FilmScreenAnim3Struct = FilmScreenAnim3Struct;
    })(FilmScreenAnim3 = fgui.FilmScreenAnim3 || (fgui.FilmScreenAnim3 = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=FilmScreenAnim3Struct.js.map