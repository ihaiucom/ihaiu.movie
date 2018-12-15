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
    var Mission;
    (function (Mission) {
        var MissionRewardStruct = /** @class */ (function (_super) {
            __extends(MissionRewardStruct, _super);
            function MissionRewardStruct() {
                return _super.call(this) || this;
            }
            MissionRewardStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Mission", "MissionReward"));
            };
            MissionRewardStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_c_progress = this.getController("c_progress");
                this.m_c_state = this.getController("c_state");
                this.m_iconBg = (this.getChild("iconBg"));
                this.m_icon = (this.getChild("icon"));
                this.m_iconGet = (this.getChild("iconGet"));
                this.m_title = (this.getChild("title"));
                this.m_twinkle = this.getTransition("twinkle");
            };
            MissionRewardStruct.URL = "ui://33rn3ccxpmz6c";
            MissionRewardStruct.DependPackages = ["Mission", "Common"];
            return MissionRewardStruct;
        }(fairygui.GButton));
        Mission.MissionRewardStruct = MissionRewardStruct;
    })(Mission = fgui.Mission || (fgui.Mission = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=MissionRewardStruct.js.map