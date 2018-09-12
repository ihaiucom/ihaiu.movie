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
        var BuildScenePartStruct = /** @class */ (function (_super) {
            __extends(BuildScenePartStruct, _super);
            function BuildScenePartStruct() {
                return _super.call(this) || this;
            }
            BuildScenePartStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Building", "BuildScenePart"));
            };
            BuildScenePartStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
            };
            BuildScenePartStruct.URL = "ui://d062jvkgnjm312r";
            BuildScenePartStruct.DependPackages = ["Building"];
            return BuildScenePartStruct;
        }(fairygui.GComponent));
        Building.BuildScenePartStruct = BuildScenePartStruct;
    })(Building = fgui.Building || (fgui.Building = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=BuildScenePartStruct.js.map