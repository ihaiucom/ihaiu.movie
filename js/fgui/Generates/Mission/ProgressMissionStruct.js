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
        var ProgressMissionStruct = /** @class */ (function (_super) {
            __extends(ProgressMissionStruct, _super);
            function ProgressMissionStruct() {
                return _super.call(this) || this;
            }
            ProgressMissionStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Mission", "ProgressMission"));
            };
            ProgressMissionStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_title = (this.getChild("title"));
                this.m_list = (this.getChild("list"));
                this.m_bar = (this.getChild("bar"));
            };
            ProgressMissionStruct.URL = "ui://33rn3ccxpmz6b";
            ProgressMissionStruct.DependPackages = ["Mission", "Common", "Cooperation"];
            return ProgressMissionStruct;
        }(fairygui.GComponent));
        Mission.ProgressMissionStruct = ProgressMissionStruct;
    })(Mission = fgui.Mission || (fgui.Mission = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=ProgressMissionStruct.js.map