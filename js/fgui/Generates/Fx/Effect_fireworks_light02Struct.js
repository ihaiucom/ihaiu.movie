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
        var Effect_fireworks_light02Struct = /** @class */ (function (_super) {
            __extends(Effect_fireworks_light02Struct, _super);
            function Effect_fireworks_light02Struct() {
                return _super.call(this) || this;
            }
            Effect_fireworks_light02Struct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Fx", "Effect_fireworks_light02"));
            };
            Effect_fireworks_light02Struct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_fireworks_xuan = this.getTransition("fireworks_xuan");
            };
            Effect_fireworks_light02Struct.URL = "ui://9l36y1kiff4m6c";
            Effect_fireworks_light02Struct.DependPackages = ["Fx"];
            return Effect_fireworks_light02Struct;
        }(fairygui.GComponent));
        Fx.Effect_fireworks_light02Struct = Effect_fireworks_light02Struct;
    })(Fx = fgui.Fx || (fgui.Fx = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=Effect_fireworks_light02Struct.js.map