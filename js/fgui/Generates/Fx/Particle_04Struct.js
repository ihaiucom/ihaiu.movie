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
        var Particle_04Struct = /** @class */ (function (_super) {
            __extends(Particle_04Struct, _super);
            function Particle_04Struct() {
                return _super.call(this) || this;
            }
            Particle_04Struct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Fx", "particle_04"));
            };
            Particle_04Struct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_0001_top = (this.getChild("0001_top"));
                this.m_t0_particle1233 = this.getTransition("t0_particle1233");
            };
            Particle_04Struct.URL = "ui://9l36y1kieb1rc0";
            Particle_04Struct.DependPackages = ["Fx"];
            return Particle_04Struct;
        }(fairygui.GComponent));
        Fx.Particle_04Struct = Particle_04Struct;
    })(Fx = fgui.Fx || (fgui.Fx = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=Particle_04Struct.js.map