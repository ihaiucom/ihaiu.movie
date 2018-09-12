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
        var BuildScene13Struct = /** @class */ (function (_super) {
            __extends(BuildScene13Struct, _super);
            function BuildScene13Struct() {
                return _super.call(this) || this;
            }
            BuildScene13Struct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Building", "BuildScene13"));
            };
            BuildScene13Struct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_trainSit5 = (this.getChild("trainSit5"));
                this.m_trainSit4 = (this.getChild("trainSit4"));
                this.m_trainSit3 = (this.getChild("trainSit3"));
                this.m_trainSit2 = (this.getChild("trainSit2"));
                this.m_trainSit1 = (this.getChild("trainSit1"));
            };
            BuildScene13Struct.URL = "ui://d062jvkgnjm312q";
            BuildScene13Struct.DependPackages = ["Building"];
            return BuildScene13Struct;
        }(fairygui.GComponent));
        Building.BuildScene13Struct = BuildScene13Struct;
    })(Building = fgui.Building || (fgui.Building = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=BuildScene13Struct.js.map