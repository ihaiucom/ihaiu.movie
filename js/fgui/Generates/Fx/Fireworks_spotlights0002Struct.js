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
        var Fireworks_spotlights0002Struct = /** @class */ (function (_super) {
            __extends(Fireworks_spotlights0002Struct, _super);
            function Fireworks_spotlights0002Struct() {
                return _super.call(this) || this;
            }
            Fireworks_spotlights0002Struct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Fx", "fireworks_spotlights0002"));
            };
            Fireworks_spotlights0002Struct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_fireworks_spotlights23 = (this.getChild("fireworks_spotlights23"));
                this.m_fireworks_spotlights0444 = (this.getChild("fireworks_spotlights0444"));
                this.m_fireworks_spotlights0222 = this.getTransition("fireworks_spotlights0222");
            };
            Fireworks_spotlights0002Struct.URL = "ui://9l36y1kiflbk6f";
            Fireworks_spotlights0002Struct.DependPackages = ["Fx"];
            return Fireworks_spotlights0002Struct;
        }(fairygui.GComponent));
        Fx.Fireworks_spotlights0002Struct = Fireworks_spotlights0002Struct;
    })(Fx = fgui.Fx || (fgui.Fx = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=Fireworks_spotlights0002Struct.js.map