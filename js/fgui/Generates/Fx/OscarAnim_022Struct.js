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
    var Fx;
    (function (Fx) {
        var OscarAnim_022Struct = /** @class */ (function (_super) {
            __extends(OscarAnim_022Struct, _super);
            function OscarAnim_022Struct() {
                return _super.call(this) || this;
            }
            OscarAnim_022Struct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Fx", "OscarAnim_022"));
            };
            OscarAnim_022Struct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_t0 = this.getTransition("t0");
            };
            OscarAnim_022Struct.URL = "ui://9l36y1kik14co7";
            OscarAnim_022Struct.DependPackages = ["Fx"];
            return OscarAnim_022Struct;
        }(fairygui.GComponent));
        Fx.OscarAnim_022Struct = OscarAnim_022Struct;
    })(Fx = fgui.Fx || (fgui.Fx = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=OscarAnim_022Struct.js.map