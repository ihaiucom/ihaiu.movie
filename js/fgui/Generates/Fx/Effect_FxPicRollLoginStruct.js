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
        var Effect_FxPicRollLoginStruct = /** @class */ (function (_super) {
            __extends(Effect_FxPicRollLoginStruct, _super);
            function Effect_FxPicRollLoginStruct() {
                return _super.call(this) || this;
            }
            Effect_FxPicRollLoginStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Fx", "Effect_FxPicRollLogin"));
            };
            Effect_FxPicRollLoginStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_t0 = this.getTransition("t0");
            };
            Effect_FxPicRollLoginStruct.URL = "ui://9l36y1kip6obm8";
            Effect_FxPicRollLoginStruct.DependPackages = ["Fx"];
            return Effect_FxPicRollLoginStruct;
        }(fairygui.GComponent));
        Fx.Effect_FxPicRollLoginStruct = Effect_FxPicRollLoginStruct;
    })(Fx = fgui.Fx || (fgui.Fx = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=Effect_FxPicRollLoginStruct.js.map