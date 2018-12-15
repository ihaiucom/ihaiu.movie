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
        var Particle_01Struct = /** @class */ (function (_super) {
            __extends(Particle_01Struct, _super);
            function Particle_01Struct() {
                return _super.call(this) || this;
            }
            Particle_01Struct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Fx", "particle_01"));
            };
            Particle_01Struct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_t0_particle11333 = this.getTransition("t0_particle11333");
            };
            Particle_01Struct.URL = "ui://9l36y1kimhuwbr";
            Particle_01Struct.DependPackages = ["Fx"];
            return Particle_01Struct;
        }(fairygui.GComponent));
        Fx.Particle_01Struct = Particle_01Struct;
    })(Fx = fgui.Fx || (fgui.Fx = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=Particle_01Struct.js.map