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
        var Effect_fireworks_light03Struct = /** @class */ (function (_super) {
            __extends(Effect_fireworks_light03Struct, _super);
            function Effect_fireworks_light03Struct() {
                return _super.call(this) || this;
            }
            Effect_fireworks_light03Struct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Fx", "Effect_fireworks_light03"));
            };
            Effect_fireworks_light03Struct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_t0 = this.getTransition("t0");
            };
            Effect_fireworks_light03Struct.URL = "ui://9l36y1kisl89e5";
            Effect_fireworks_light03Struct.DependPackages = ["Fx"];
            return Effect_fireworks_light03Struct;
        }(fairygui.GComponent));
        Fx.Effect_fireworks_light03Struct = Effect_fireworks_light03Struct;
    })(Fx = fgui.Fx || (fgui.Fx = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=Effect_fireworks_light03Struct.js.map