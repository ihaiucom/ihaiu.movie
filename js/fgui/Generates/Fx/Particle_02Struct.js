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
        var Particle_02Struct = /** @class */ (function (_super) {
            __extends(Particle_02Struct, _super);
            function Particle_02Struct() {
                return _super.call(this) || this;
            }
            Particle_02Struct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Fx", "particle_02"));
            };
            Particle_02Struct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_pp_particle = this.getTransition("pp_particle");
            };
            Particle_02Struct.URL = "ui://9l36y1kimhuwbx";
            Particle_02Struct.DependPackages = ["Fx"];
            return Particle_02Struct;
        }(fairygui.GComponent));
        Fx.Particle_02Struct = Particle_02Struct;
    })(Fx = fgui.Fx || (fgui.Fx = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=Particle_02Struct.js.map