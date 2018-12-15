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
        var Effect_light_300Struct = /** @class */ (function (_super) {
            __extends(Effect_light_300Struct, _super);
            function Effect_light_300Struct() {
                return _super.call(this) || this;
            }
            Effect_light_300Struct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Fx", "Effect_light_300"));
            };
            Effect_light_300Struct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_t0 = this.getTransition("t0");
            };
            Effect_light_300Struct.URL = "ui://9l36y1kidbud5tx";
            Effect_light_300Struct.DependPackages = ["Fx"];
            return Effect_light_300Struct;
        }(fairygui.GComponent));
        Fx.Effect_light_300Struct = Effect_light_300Struct;
    })(Fx = fgui.Fx || (fgui.Fx = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=Effect_light_300Struct.js.map