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
        var Effect_fireworks_showcase002Struct = /** @class */ (function (_super) {
            __extends(Effect_fireworks_showcase002Struct, _super);
            function Effect_fireworks_showcase002Struct() {
                return _super.call(this) || this;
            }
            Effect_fireworks_showcase002Struct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Fx", "Effect_fireworks_showcase002"));
            };
            Effect_fireworks_showcase002Struct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_t1 = this.getTransition("t1");
            };
            Effect_fireworks_showcase002Struct.URL = "ui://9l36y1kiv2lu55v8";
            Effect_fireworks_showcase002Struct.DependPackages = ["Fx"];
            return Effect_fireworks_showcase002Struct;
        }(fairygui.GComponent));
        Fx.Effect_fireworks_showcase002Struct = Effect_fireworks_showcase002Struct;
    })(Fx = fgui.Fx || (fgui.Fx = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=Effect_fireworks_showcase002Struct.js.map