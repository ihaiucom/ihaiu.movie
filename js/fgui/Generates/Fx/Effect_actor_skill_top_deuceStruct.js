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
        var Effect_actor_skill_top_deuceStruct = /** @class */ (function (_super) {
            __extends(Effect_actor_skill_top_deuceStruct, _super);
            function Effect_actor_skill_top_deuceStruct() {
                return _super.call(this) || this;
            }
            Effect_actor_skill_top_deuceStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Fx", "Effect_actor_skill_top_deuce"));
            };
            Effect_actor_skill_top_deuceStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_Effect_actor02 = (this.getChild("Effect_actor02"));
                this.m_Effect_actor04 = (this.getChild("Effect_actor04"));
                this.m_Effect_actor05 = (this.getChild("Effect_actor05"));
                this.m_Effect_actor03 = (this.getChild("Effect_actor03"));
                this.m_t0 = this.getTransition("t0");
            };
            Effect_actor_skill_top_deuceStruct.URL = "ui://9l36y1kixeimii";
            Effect_actor_skill_top_deuceStruct.DependPackages = ["Fx", "Common"];
            return Effect_actor_skill_top_deuceStruct;
        }(fairygui.GComponent));
        Fx.Effect_actor_skill_top_deuceStruct = Effect_actor_skill_top_deuceStruct;
    })(Fx = fgui.Fx || (fgui.Fx = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=Effect_actor_skill_top_deuceStruct.js.map