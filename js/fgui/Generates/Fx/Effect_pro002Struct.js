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
        var Effect_pro002Struct = /** @class */ (function (_super) {
            __extends(Effect_pro002Struct, _super);
            function Effect_pro002Struct() {
                return _super.call(this) || this;
            }
            Effect_pro002Struct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Fx", "Effect_pro002"));
            };
            Effect_pro002Struct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_t88999 = this.getTransition("t88999");
            };
            Effect_pro002Struct.URL = "ui://9l36y1kiqacwgk";
            Effect_pro002Struct.DependPackages = ["Fx"];
            return Effect_pro002Struct;
        }(fairygui.GComponent));
        Fx.Effect_pro002Struct = Effect_pro002Struct;
    })(Fx = fgui.Fx || (fgui.Fx = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=Effect_pro002Struct.js.map