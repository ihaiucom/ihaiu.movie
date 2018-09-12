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
        var Effect_build01Struct = /** @class */ (function (_super) {
            __extends(Effect_build01Struct, _super);
            function Effect_build01Struct() {
                return _super.call(this) || this;
            }
            Effect_build01Struct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Fx", "Effect_build01"));
            };
            Effect_build01Struct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_smoke_beat_qq = this.getTransition("smoke_beat_qq");
            };
            Effect_build01Struct.URL = "ui://9l36y1kidbtdc1";
            Effect_build01Struct.DependPackages = ["Fx"];
            return Effect_build01Struct;
        }(fairygui.GComponent));
        Fx.Effect_build01Struct = Effect_build01Struct;
    })(Fx = fgui.Fx || (fgui.Fx = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=Effect_build01Struct.js.map