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
        var Effect_Oscar_particleStruct = /** @class */ (function (_super) {
            __extends(Effect_Oscar_particleStruct, _super);
            function Effect_Oscar_particleStruct() {
                return _super.call(this) || this;
            }
            Effect_Oscar_particleStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Fx", "Effect_Oscar_particle"));
            };
            Effect_Oscar_particleStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_t0 = this.getTransition("t0");
            };
            Effect_Oscar_particleStruct.URL = "ui://9l36y1kitbt4d2";
            Effect_Oscar_particleStruct.DependPackages = ["Fx"];
            return Effect_Oscar_particleStruct;
        }(fairygui.GComponent));
        Fx.Effect_Oscar_particleStruct = Effect_Oscar_particleStruct;
    })(Fx = fgui.Fx || (fgui.Fx = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=Effect_Oscar_particleStruct.js.map