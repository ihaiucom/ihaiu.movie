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
        var Effect_fireworks_showcaseStruct = /** @class */ (function (_super) {
            __extends(Effect_fireworks_showcaseStruct, _super);
            function Effect_fireworks_showcaseStruct() {
                return _super.call(this) || this;
            }
            Effect_fireworks_showcaseStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Fx", "Effect_fireworks_showcase"));
            };
            Effect_fireworks_showcaseStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_t1 = this.getTransition("t1");
            };
            Effect_fireworks_showcaseStruct.URL = "ui://9l36y1kilv2z5u0";
            Effect_fireworks_showcaseStruct.DependPackages = ["Fx"];
            return Effect_fireworks_showcaseStruct;
        }(fairygui.GComponent));
        Fx.Effect_fireworks_showcaseStruct = Effect_fireworks_showcaseStruct;
    })(Fx = fgui.Fx || (fgui.Fx = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=Effect_fireworks_showcaseStruct.js.map