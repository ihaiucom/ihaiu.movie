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
        var Effect_actor_skill_top_loseStruct = /** @class */ (function (_super) {
            __extends(Effect_actor_skill_top_loseStruct, _super);
            function Effect_actor_skill_top_loseStruct() {
                return _super.call(this) || this;
            }
            Effect_actor_skill_top_loseStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Fx", "Effect_actor_skill_top_lose"));
            };
            Effect_actor_skill_top_loseStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_Effect_actor02 = (this.getChild("Effect_actor02"));
                this.m_Effect_actor04 = (this.getChild("Effect_actor04"));
                this.m_Effect_actor05 = (this.getChild("Effect_actor05"));
                this.m_Effect_actor03 = (this.getChild("Effect_actor03"));
                this.m_t222 = this.getTransition("t222");
            };
            Effect_actor_skill_top_loseStruct.URL = "ui://9l36y1kixeimij";
            Effect_actor_skill_top_loseStruct.DependPackages = ["Fx", "Common"];
            return Effect_actor_skill_top_loseStruct;
        }(fairygui.GComponent));
        Fx.Effect_actor_skill_top_loseStruct = Effect_actor_skill_top_loseStruct;
    })(Fx = fgui.Fx || (fgui.Fx = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=Effect_actor_skill_top_loseStruct.js.map