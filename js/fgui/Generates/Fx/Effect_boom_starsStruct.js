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
        var Effect_boom_starsStruct = /** @class */ (function (_super) {
            __extends(Effect_boom_starsStruct, _super);
            function Effect_boom_starsStruct() {
                return _super.call(this) || this;
            }
            Effect_boom_starsStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Fx", "Effect_boom_stars"));
            };
            Effect_boom_starsStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_t0 = this.getTransition("t0");
            };
            Effect_boom_starsStruct.URL = "ui://9l36y1ki10sh5tj";
            Effect_boom_starsStruct.DependPackages = ["Fx", "OpenAnima"];
            return Effect_boom_starsStruct;
        }(fairygui.GComponent));
        Fx.Effect_boom_starsStruct = Effect_boom_starsStruct;
    })(Fx = fgui.Fx || (fgui.Fx = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=Effect_boom_starsStruct.js.map