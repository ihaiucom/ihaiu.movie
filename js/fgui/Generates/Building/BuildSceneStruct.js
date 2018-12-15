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
        var BuildSceneStruct = /** @class */ (function (_super) {
            __extends(BuildSceneStruct, _super);
            function BuildSceneStruct() {
                return _super.call(this) || this;
            }
            BuildSceneStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Building", "BuildScene"));
            };
            BuildSceneStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_bg = (this.getChild("bg"));
                this.m_loader = (this.getChild("loader"));
                this.m_scenePartBottom = (this.getChild("scenePartBottom"));
                this.m_scenePart = (this.getChild("scenePart"));
                this.m_avatarContainer0 = (this.getChild("avatarContainer0"));
                this.m_avatarContainer1 = (this.getChild("avatarContainer1"));
                this.m_canvasContainer = (this.getChild("canvasContainer"));
            };
            BuildSceneStruct.URL = "ui://d062jvkgnjm312o";
            BuildSceneStruct.DependPackages = ["Building", "Common"];
            return BuildSceneStruct;
        }(fairygui.GComponent));
        Building.BuildSceneStruct = BuildSceneStruct;
    })(Building = fgui.Building || (fgui.Building = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=BuildSceneStruct.js.map