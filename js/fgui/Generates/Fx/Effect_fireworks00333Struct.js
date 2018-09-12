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
        var Effect_fireworks00333Struct = /** @class */ (function (_super) {
            __extends(Effect_fireworks00333Struct, _super);
            function Effect_fireworks00333Struct() {
                return _super.call(this) || this;
            }
            Effect_fireworks00333Struct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Fx", "Effect_fireworks00333"));
            };
            Effect_fireworks00333Struct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_Effect_fireworks_18 = (this.getChild("Effect_fireworks_18"));
                this.m_spotlights_all = (this.getChild("spotlights_all"));
                this.m_fireworks_11111 = this.getTransition("fireworks_11111");
            };
            Effect_fireworks00333Struct.URL = "ui://9l36y1kijmphdw";
            Effect_fireworks00333Struct.DependPackages = ["Fx"];
            return Effect_fireworks00333Struct;
        }(fairygui.GComponent));
        Fx.Effect_fireworks00333Struct = Effect_fireworks00333Struct;
    })(Fx = fgui.Fx || (fgui.Fx = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=Effect_fireworks00333Struct.js.map