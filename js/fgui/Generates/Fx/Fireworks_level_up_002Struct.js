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
        var Fireworks_level_up_002Struct = /** @class */ (function (_super) {
            __extends(Fireworks_level_up_002Struct, _super);
            function Fireworks_level_up_002Struct() {
                return _super.call(this) || this;
            }
            Fireworks_level_up_002Struct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Fx", "fireworks_level_up_002"));
            };
            Fireworks_level_up_002Struct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_Effect_fireworks_n0 = (this.getChild("Effect_fireworks_n0"));
                this.m_Effect_fireworks_n9 = (this.getChild("Effect_fireworks_n9"));
                this.m_Effect_fireworks_n7 = (this.getChild("Effect_fireworks_n7"));
                this.m_fireworks_11 = this.getTransition("fireworks_11");
            };
            Fireworks_level_up_002Struct.URL = "ui://9l36y1kilrr48y";
            Fireworks_level_up_002Struct.DependPackages = ["Fx"];
            return Fireworks_level_up_002Struct;
        }(fairygui.GComponent));
        Fx.Fireworks_level_up_002Struct = Fireworks_level_up_002Struct;
    })(Fx = fgui.Fx || (fgui.Fx = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=Fireworks_level_up_002Struct.js.map