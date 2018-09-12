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
        var Particle_allStruct = /** @class */ (function (_super) {
            __extends(Particle_allStruct, _super);
            function Particle_allStruct() {
                return _super.call(this) || this;
            }
            Particle_allStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Fx", "particle_all"));
            };
            Particle_allStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_t0 = this.getTransition("t0");
            };
            Particle_allStruct.URL = "ui://9l36y1kimhuwbu";
            Particle_allStruct.DependPackages = ["Fx"];
            return Particle_allStruct;
        }(fairygui.GComponent));
        Fx.Particle_allStruct = Particle_allStruct;
    })(Fx = fgui.Fx || (fgui.Fx = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=Particle_allStruct.js.map