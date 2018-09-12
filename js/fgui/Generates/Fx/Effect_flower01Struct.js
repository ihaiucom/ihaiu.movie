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
        var Effect_flower01Struct = /** @class */ (function (_super) {
            __extends(Effect_flower01Struct, _super);
            function Effect_flower01Struct() {
                return _super.call(this) || this;
            }
            Effect_flower01Struct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Fx", "Effect_flower01"));
            };
            Effect_flower01Struct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_yumilili001 = (this.getChild("yumilili001"));
                this.m_n12_baoguangg = (this.getChild("n12_baoguangg"));
                this.m_t0 = this.getTransition("t0");
            };
            Effect_flower01Struct.URL = "ui://9l36y1kis60hf9";
            Effect_flower01Struct.DependPackages = ["Fx"];
            return Effect_flower01Struct;
        }(fairygui.GComponent));
        Fx.Effect_flower01Struct = Effect_flower01Struct;
    })(Fx = fgui.Fx || (fgui.Fx = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=Effect_flower01Struct.js.map