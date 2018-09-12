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
        var Effect_filming02Struct = /** @class */ (function (_super) {
            __extends(Effect_filming02Struct, _super);
            function Effect_filming02Struct() {
                return _super.call(this) || this;
            }
            Effect_filming02Struct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Fx", "Effect_filming02"));
            };
            Effect_filming02Struct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_t0 = this.getTransition("t0");
            };
            Effect_filming02Struct.URL = "ui://9l36y1kisv5mek";
            Effect_filming02Struct.DependPackages = ["Fx"];
            return Effect_filming02Struct;
        }(fairygui.GComponent));
        Fx.Effect_filming02Struct = Effect_filming02Struct;
    })(Fx = fgui.Fx || (fgui.Fx = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=Effect_filming02Struct.js.map