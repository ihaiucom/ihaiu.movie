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
        var Tree = /** @class */ (function (_super) {
            __extends(Tree, _super);
            function Tree() {
                var _this = _super.call(this) || this;
                _this.layerLevelInitPaddingLeft = 60;
                _this.layerLevelPaddingLeft = 50;
                _this.itemPool = new fairygui.GObjectPool();
                return _this;
            }
            Tree.prototype.refresh = function () {
                if (this.data)
                    this.setDataRoot(this.data);
                else
                    this.setDataRoot(fairygui.GRoot.inst);
            };
            Tree.prototype.setDataRoot = function (dataRoot) {
                this.data = dataRoot;
                var item;
                if (this.itemRoot) {
                    item = this.itemRoot;
                }
                else {
                    item = this.itemPool.getObject(GM.TreeItem.URL);
                    item.treeParent = this;
                    item.treeRoot = this;
                    this.addChild(item);
                }
                item.setData(dataRoot);
                this.itemRoot = item;
                this.updateLayout();
            };
            Tree.prototype.updateLayout = function () {
                this.itemRoot.updateLayout();
            };
            return Tree;
        }(GM.TreeStruct));
        GM.Tree = Tree;
    })(GM = fgui.GM || (fgui.GM = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=Tree.js.map