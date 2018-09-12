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
        var Effect_fireworks_light01Struct = /** @class */ (function (_super) {
            __extends(Effect_fireworks_light01Struct, _super);
            function Effect_fireworks_light01Struct() {
                return _super.call(this) || this;
            }
            Effect_fireworks_light01Struct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Fx", "Effect_fireworks_light01"));
            };
            Effect_fireworks_light01Struct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_yy0 = this.getTransition("yy0");
            };
            Effect_fireworks_light01Struct.URL = "ui://9l36y1kirlky63";
            Effect_fireworks_light01Struct.DependPackages = ["Fx"];
            return Effect_fireworks_light01Struct;
        }(fairygui.GComponent));
        Fx.Effect_fireworks_light01Struct = Effect_fireworks_light01Struct;
    })(Fx = fgui.Fx || (fgui.Fx = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=Effect_fireworks_light01Struct.js.map