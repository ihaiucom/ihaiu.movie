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
    var GM;
    (function (GM) {
        var TreeItemCheckboxStruct = /** @class */ (function (_super) {
            __extends(TreeItemCheckboxStruct, _super);
            function TreeItemCheckboxStruct() {
                return _super.call(this) || this;
            }
            TreeItemCheckboxStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("GM", "TreeItemCheckbox"));
            };
            TreeItemCheckboxStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_button = this.getController("button");
            };
            TreeItemCheckboxStruct.URL = "ui://ujw583ypx6hou";
            TreeItemCheckboxStruct.DependPackages = ["GM"];
            return TreeItemCheckboxStruct;
        }(fairygui.GButton));
        GM.TreeItemCheckboxStruct = TreeItemCheckboxStruct;
    })(GM = fgui.GM || (fgui.GM = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=TreeItemCheckboxStruct.js.map