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
    var FilmScreenAnim2;
    (function (FilmScreenAnim2) {
        var FilmScreenAnim2Struct = /** @class */ (function (_super) {
            __extends(FilmScreenAnim2Struct, _super);
            function FilmScreenAnim2Struct() {
                return _super.call(this) || this;
            }
            FilmScreenAnim2Struct.createInstance = function () {
                return (fairygui.UIPackage.createObject("FilmScreenAnim2", "FilmScreenAnim2"));
            };
            FilmScreenAnim2Struct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_3 = (this.getChild("3"));
                this.m_2 = (this.getChild("2"));
                this.m_1 = (this.getChild("1"));
                this.m_t0 = this.getTransition("t0");
            };
            FilmScreenAnim2Struct.URL = "ui://sfr8vcohsd1yk";
            FilmScreenAnim2Struct.DependPackages = ["FilmScreenAnim2"];
            return FilmScreenAnim2Struct;
        }(fairygui.GComponent));
        FilmScreenAnim2.FilmScreenAnim2Struct = FilmScreenAnim2Struct;
    })(FilmScreenAnim2 = fgui.FilmScreenAnim2 || (fgui.FilmScreenAnim2 = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=FilmScreenAnim2Struct.js.map