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
    var Building;
    (function (Building) {
        var BuildSceneUIStruct = /** @class */ (function (_super) {
            __extends(BuildSceneUIStruct, _super);
            function BuildSceneUIStruct() {
                return _super.call(this) || this;
            }
            BuildSceneUIStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Building", "BuildSceneUI"));
            };
            BuildSceneUIStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_frame = (this.getChild("frame"));
                this.m_frameTitleBg = (this.getChild("frameTitleBg"));
                this.m_buildFloorInfo = (this.getChild("buildFloorInfo"));
                this.m_failReason = (this.getChild("failReason"));
                this.m_btn_roomName = (this.getChild("btn_roomName"));
                this.m_btn_buildRoom = (this.getChild("btn_buildRoom"));
                this.m_btn_buildFloor = (this.getChild("btn_buildFloor"));
                this.m_effectContainer = (this.getChild("effectContainer"));
            };
            BuildSceneUIStruct.URL = "ui://d062jvkglgv4e14p";
            BuildSceneUIStruct.DependPackages = ["Building"];
            return BuildSceneUIStruct;
        }(fairygui.GComponent));
        Building.BuildSceneUIStruct = BuildSceneUIStruct;
    })(Building = fgui.Building || (fgui.Building = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=BuildSceneUIStruct.js.map