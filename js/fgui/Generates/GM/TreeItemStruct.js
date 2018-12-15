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
        var TreeItemStruct = /** @class */ (function (_super) {
            __extends(TreeItemStruct, _super);
            function TreeItemStruct() {
                return _super.call(this) || this;
            }
            TreeItemStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("GM", "TreeItem"));
            };
            TreeItemStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_button = this.getController("button");
                this.m_title = (this.getChild("title"));
                this.m_visiable = (this.getChild("visiable"));
                this.m_openClose = (this.getChild("openClose"));
                this.m_list = (this.getChild("list"));
            };
            TreeItemStruct.URL = "ui://ujw583ypx6hot";
            TreeItemStruct.DependPackages = ["GM"];
            return TreeItemStruct;
        }(fairygui.GButton));
        GM.TreeItemStruct = TreeItemStruct;
    })(GM = fgui.GM || (fgui.GM = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=TreeItemStruct.js.map