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
        var Effect_bulbs_001Struct = /** @class */ (function (_super) {
            __extends(Effect_bulbs_001Struct, _super);
            function Effect_bulbs_001Struct() {
                return _super.call(this) || this;
            }
            Effect_bulbs_001Struct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Fx", "Effect_bulbs_001"));
            };
            Effect_bulbs_001Struct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_t033333 = this.getTransition("t033333");
            };
            Effect_bulbs_001Struct.URL = "ui://9l36y1kip6obm4";
            Effect_bulbs_001Struct.DependPackages = ["Fx"];
            return Effect_bulbs_001Struct;
        }(fairygui.GComponent));
        Fx.Effect_bulbs_001Struct = Effect_bulbs_001Struct;
    })(Fx = fgui.Fx || (fgui.Fx = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=Effect_bulbs_001Struct.js.map