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
        var Effect_boxgolden_01Struct = /** @class */ (function (_super) {
            __extends(Effect_boxgolden_01Struct, _super);
            function Effect_boxgolden_01Struct() {
                return _super.call(this) || this;
            }
            Effect_boxgolden_01Struct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Fx", "Effect_boxgolden_01"));
            };
            Effect_boxgolden_01Struct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_t0 = this.getTransition("t0");
            };
            Effect_boxgolden_01Struct.URL = "ui://9l36y1kiqhas55v7";
            Effect_boxgolden_01Struct.DependPackages = ["Fx"];
            return Effect_boxgolden_01Struct;
        }(fairygui.GComponent));
        Fx.Effect_boxgolden_01Struct = Effect_boxgolden_01Struct;
    })(Fx = fgui.Fx || (fgui.Fx = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=Effect_boxgolden_01Struct.js.map