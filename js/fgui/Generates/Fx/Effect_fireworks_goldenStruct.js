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
        var Effect_fireworks_goldenStruct = /** @class */ (function (_super) {
            __extends(Effect_fireworks_goldenStruct, _super);
            function Effect_fireworks_goldenStruct() {
                return _super.call(this) || this;
            }
            Effect_fireworks_goldenStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Fx", "Effect_fireworks_golden"));
            };
            Effect_fireworks_goldenStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_spotlights_all = (this.getChild("spotlights_all"));
                this.m_fireworks_11111 = this.getTransition("fireworks_11111");
            };
            Effect_fireworks_goldenStruct.URL = "ui://9l36y1kijmphdw";
            Effect_fireworks_goldenStruct.DependPackages = ["Fx"];
            return Effect_fireworks_goldenStruct;
        }(fairygui.GComponent));
        Fx.Effect_fireworks_goldenStruct = Effect_fireworks_goldenStruct;
    })(Fx = fgui.Fx || (fgui.Fx = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=Effect_fireworks_goldenStruct.js.map