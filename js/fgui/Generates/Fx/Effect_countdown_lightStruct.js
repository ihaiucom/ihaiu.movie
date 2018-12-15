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
        var Effect_countdown_lightStruct = /** @class */ (function (_super) {
            __extends(Effect_countdown_lightStruct, _super);
            function Effect_countdown_lightStruct() {
                return _super.call(this) || this;
            }
            Effect_countdown_lightStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Fx", "Effect_countdown_light"));
            };
            Effect_countdown_lightStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_t0 = this.getTransition("t0");
            };
            Effect_countdown_lightStruct.URL = "ui://9l36y1kirxnhp1";
            Effect_countdown_lightStruct.DependPackages = ["Fx"];
            return Effect_countdown_lightStruct;
        }(fairygui.GComponent));
        Fx.Effect_countdown_lightStruct = Effect_countdown_lightStruct;
    })(Fx = fgui.Fx || (fgui.Fx = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=Effect_countdown_lightStruct.js.map