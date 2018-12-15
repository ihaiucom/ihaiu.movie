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
        var MissionItemStruct = /** @class */ (function (_super) {
            __extends(MissionItemStruct, _super);
            function MissionItemStruct() {
                return _super.call(this) || this;
            }
            MissionItemStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Mission", "MissionItem"));
            };
            MissionItemStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_state_controler = this.getController("state_controler");
                this.m_name = (this.getChild("name"));
                this.m_stateText = (this.getChild("stateText"));
                this.m_state = (this.getChild("state"));
                this.m_gotImg = (this.getChild("gotImg"));
                this.m_barFinishBg = (this.getChild("barFinishBg"));
                this.m_buttonGet = (this.getChild("buttonGet"));
                this.m_buttonGo = (this.getChild("buttonGo"));
                this.m_progressBar = (this.getChild("progressBar"));
                this.m_reward = (this.getChild("reward"));
            };
            MissionItemStruct.URL = "ui://33rn3ccxj3a35";
            MissionItemStruct.DependPackages = ["Mission", "Common", "WarMovie"];
            return MissionItemStruct;
        }(fairygui.GComponent));
        Mission.MissionItemStruct = MissionItemStruct;
    })(Mission = fgui.Mission || (fgui.Mission = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=MissionItemStruct.js.map