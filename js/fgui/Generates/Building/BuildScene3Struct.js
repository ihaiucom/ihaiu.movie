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
        var BuildScene3Struct = /** @class */ (function (_super) {
            __extends(BuildScene3Struct, _super);
            function BuildScene3Struct() {
                return _super.call(this) || this;
            }
            BuildScene3Struct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Building", "BuildScene3"));
            };
            BuildScene3Struct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_pos1 = (this.getChild("pos1"));
                this.m_pos2 = (this.getChild("pos2"));
                this.m_btnNpcTip1 = (this.getChild("btnNpcTip1"));
                this.m_btnNpcTip2 = (this.getChild("btnNpcTip2"));
            };
            BuildScene3Struct.URL = "ui://d062jvkggy5h13s";
            BuildScene3Struct.DependPackages = ["Building", "Common"];
            return BuildScene3Struct;
        }(fairygui.GComponent));
        Building.BuildScene3Struct = BuildScene3Struct;
    })(Building = fgui.Building || (fgui.Building = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=BuildScene3Struct.js.map