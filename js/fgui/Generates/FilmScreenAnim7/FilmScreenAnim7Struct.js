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
    var FilmScreenAnim7;
    (function (FilmScreenAnim7) {
        var FilmScreenAnim7Struct = /** @class */ (function (_super) {
            __extends(FilmScreenAnim7Struct, _super);
            function FilmScreenAnim7Struct() {
                return _super.call(this) || this;
            }
            FilmScreenAnim7Struct.createInstance = function () {
                return (fairygui.UIPackage.createObject("FilmScreenAnim7", "FilmScreenAnim7"));
            };
            FilmScreenAnim7Struct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_3 = (this.getChild("3"));
                this.m_2 = (this.getChild("2"));
                this.m_1 = (this.getChild("1"));
                this.m_t0 = this.getTransition("t0");
            };
            FilmScreenAnim7Struct.URL = "ui://fka8qla1sd1yh";
            FilmScreenAnim7Struct.DependPackages = ["FilmScreenAnim7"];
            return FilmScreenAnim7Struct;
        }(fairygui.GComponent));
        FilmScreenAnim7.FilmScreenAnim7Struct = FilmScreenAnim7Struct;
    })(FilmScreenAnim7 = fgui.FilmScreenAnim7 || (fgui.FilmScreenAnim7 = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=FilmScreenAnim7Struct.js.map