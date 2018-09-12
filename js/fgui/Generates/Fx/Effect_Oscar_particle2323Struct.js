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
        var Effect_Oscar_particle2323Struct = /** @class */ (function (_super) {
            __extends(Effect_Oscar_particle2323Struct, _super);
            function Effect_Oscar_particle2323Struct() {
                return _super.call(this) || this;
            }
            Effect_Oscar_particle2323Struct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Fx", "Effect_Oscar_particle2323"));
            };
            Effect_Oscar_particle2323Struct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_t88 = this.getTransition("t88");
            };
            Effect_Oscar_particle2323Struct.URL = "ui://9l36y1kiipn7dq";
            Effect_Oscar_particle2323Struct.DependPackages = ["Fx"];
            return Effect_Oscar_particle2323Struct;
        }(fairygui.GComponent));
        Fx.Effect_Oscar_particle2323Struct = Effect_Oscar_particle2323Struct;
    })(Fx = fgui.Fx || (fgui.Fx = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=Effect_Oscar_particle2323Struct.js.map