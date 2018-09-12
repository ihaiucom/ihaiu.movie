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
        var Effect_MovieTarget_FailedStruct = /** @class */ (function (_super) {
            __extends(Effect_MovieTarget_FailedStruct, _super);
            function Effect_MovieTarget_FailedStruct() {
                return _super.call(this) || this;
            }
            Effect_MovieTarget_FailedStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Fx", "Effect_MovieTarget_Failed"));
            };
            Effect_MovieTarget_FailedStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_failed_01 = this.getTransition("failed_01");
            };
            Effect_MovieTarget_FailedStruct.URL = "ui://9l36y1kijeka42";
            Effect_MovieTarget_FailedStruct.DependPackages = ["Fx", "Common"];
            return Effect_MovieTarget_FailedStruct;
        }(fairygui.GComponent));
        Fx.Effect_MovieTarget_FailedStruct = Effect_MovieTarget_FailedStruct;
    })(Fx = fgui.Fx || (fgui.Fx = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=Effect_MovieTarget_FailedStruct.js.map