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
        var BuildScene12Struct = /** @class */ (function (_super) {
            __extends(BuildScene12Struct, _super);
            function BuildScene12Struct() {
                return _super.call(this) || this;
            }
            BuildScene12Struct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Building", "BuildScene12"));
            };
            BuildScene12Struct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_pos = (this.getChild("pos"));
            };
            BuildScene12Struct.URL = "ui://d062jvkguju9e14j";
            BuildScene12Struct.DependPackages = ["Building"];
            return BuildScene12Struct;
        }(fairygui.GComponent));
        Building.BuildScene12Struct = BuildScene12Struct;
    })(Building = fgui.Building || (fgui.Building = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=BuildScene12Struct.js.map