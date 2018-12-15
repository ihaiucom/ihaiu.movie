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
        var Fireworks_spotlights0003Struct = /** @class */ (function (_super) {
            __extends(Fireworks_spotlights0003Struct, _super);
            function Fireworks_spotlights0003Struct() {
                return _super.call(this) || this;
            }
            Fireworks_spotlights0003Struct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Fx", "fireworks_spotlights0003"));
            };
            Fireworks_spotlights0003Struct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_fireworks_nn23 = (this.getChild("fireworks_nn23"));
                this.m_fireworks_111 = this.getTransition("fireworks_111");
            };
            Fireworks_spotlights0003Struct.URL = "ui://9l36y1kiflbk6i";
            Fireworks_spotlights0003Struct.DependPackages = ["Fx"];
            return Fireworks_spotlights0003Struct;
        }(fairygui.GComponent));
        Fx.Fireworks_spotlights0003Struct = Fireworks_spotlights0003Struct;
    })(Fx = fgui.Fx || (fgui.Fx = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=Fireworks_spotlights0003Struct.js.map