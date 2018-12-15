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
        var Effect_simple_firework02Struct = /** @class */ (function (_super) {
            __extends(Effect_simple_firework02Struct, _super);
            function Effect_simple_firework02Struct() {
                return _super.call(this) || this;
            }
            Effect_simple_firework02Struct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Fx", "Effect_simple_firework02"));
            };
            Effect_simple_firework02Struct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_t0 = this.getTransition("t0");
            };
            Effect_simple_firework02Struct.URL = "ui://9l36y1ki10sh5to";
            Effect_simple_firework02Struct.DependPackages = ["Fx"];
            return Effect_simple_firework02Struct;
        }(fairygui.GComponent));
        Fx.Effect_simple_firework02Struct = Effect_simple_firework02Struct;
    })(Fx = fgui.Fx || (fgui.Fx = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=Effect_simple_firework02Struct.js.map