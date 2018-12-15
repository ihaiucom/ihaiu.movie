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
        var MissionMainPanelStruct = /** @class */ (function (_super) {
            __extends(MissionMainPanelStruct, _super);
            function MissionMainPanelStruct() {
                return _super.call(this) || this;
            }
            MissionMainPanelStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Mission", "MissionMainPanel"));
            };
            MissionMainPanelStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_title = (this.getChild("title"));
                this.m_list = (this.getChild("list"));
                this.m_tipMsg = (this.getChild("tipMsg"));
                this.m_closeBtn = (this.getChild("closeBtn"));
                this.m_progressTotalBar = (this.getChild("progressTotalBar"));
            };
            MissionMainPanelStruct.URL = "ui://33rn3ccxj3a30";
            MissionMainPanelStruct.DependPackages = ["Mission", "Common", "WarMovie"];
            return MissionMainPanelStruct;
        }(fairygui.GComponent));
        Mission.MissionMainPanelStruct = MissionMainPanelStruct;
    })(Mission = fgui.Mission || (fgui.Mission = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=MissionMainPanelStruct.js.map