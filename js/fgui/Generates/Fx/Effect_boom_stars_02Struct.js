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
        var Effect_boom_stars_02Struct = /** @class */ (function (_super) {
            __extends(Effect_boom_stars_02Struct, _super);
            function Effect_boom_stars_02Struct() {
                return _super.call(this) || this;
            }
            Effect_boom_stars_02Struct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Fx", "Effect_boom_stars_02"));
            };
            Effect_boom_stars_02Struct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_t0 = this.getTransition("t0");
            };
            Effect_boom_stars_02Struct.URL = "ui://9l36y1kioyw75u3";
            Effect_boom_stars_02Struct.DependPackages = ["Fx", "OpenAnima"];
            return Effect_boom_stars_02Struct;
        }(fairygui.GComponent));
        Fx.Effect_boom_stars_02Struct = Effect_boom_stars_02Struct;
    })(Fx = fgui.Fx || (fgui.Fx = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=Effect_boom_stars_02Struct.js.map