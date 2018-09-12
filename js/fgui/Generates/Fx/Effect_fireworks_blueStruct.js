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
        var Effect_fireworks_blueStruct = /** @class */ (function (_super) {
            __extends(Effect_fireworks_blueStruct, _super);
            function Effect_fireworks_blueStruct() {
                return _super.call(this) || this;
            }
            Effect_fireworks_blueStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Fx", "Effect_fireworks_blue"));
            };
            Effect_fireworks_blueStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_t023 = this.getTransition("t023");
            };
            Effect_fireworks_blueStruct.URL = "ui://9l36y1kirs6lm3";
            Effect_fireworks_blueStruct.DependPackages = ["Fx"];
            return Effect_fireworks_blueStruct;
        }(fairygui.GComponent));
        Fx.Effect_fireworks_blueStruct = Effect_fireworks_blueStruct;
    })(Fx = fgui.Fx || (fgui.Fx = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=Effect_fireworks_blueStruct.js.map