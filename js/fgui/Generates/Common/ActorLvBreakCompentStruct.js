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
    var Common;
    (function (Common) {
        var ActorLvBreakCompentStruct = /** @class */ (function (_super) {
            __extends(ActorLvBreakCompentStruct, _super);
            function ActorLvBreakCompentStruct() {
                return _super.call(this) || this;
            }
            ActorLvBreakCompentStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Common", "ActorLvBreakCompent"));
            };
            ActorLvBreakCompentStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_Effect_actor01 = (this.getChild("Effect_actor01"));
                this.m_Effect_actor02 = (this.getChild("Effect_actor02"));
                this.m_Effect_actor04 = (this.getChild("Effect_actor04"));
                this.m_Effect_actor05 = (this.getChild("Effect_actor05"));
                this.m_Effect_actor03 = (this.getChild("Effect_actor03"));
                this.m_icon = (this.getChild("icon"));
                this.m_desc = (this.getChild("desc"));
                this.m_t0 = this.getTransition("t0");
            };
            ActorLvBreakCompentStruct.URL = "ui://txcuvopdvmyct25a";
            ActorLvBreakCompentStruct.DependPackages = ["Common", "Fx"];
            return ActorLvBreakCompentStruct;
        }(fairygui.GComponent));
        Common.ActorLvBreakCompentStruct = ActorLvBreakCompentStruct;
    })(Common = fgui.Common || (fgui.Common = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=ActorLvBreakCompentStruct.js.map