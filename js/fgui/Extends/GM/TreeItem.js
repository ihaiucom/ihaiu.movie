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
        var TreeItem = /** @class */ (function (_super) {
            __extends(TreeItem, _super);
            function TreeItem() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.layerLevel = 0;
                return _this;
            }
            TreeItem.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_visiable.onClick(this, this.onClickVisiableButton);
                this.m_openClose.onClick(this, this.onClickOpencloseButton);
            };
            TreeItem.prototype.onClickVisiableButton = function () {
                this.data.visible = !this.data.visible;
            };
            TreeItem.prototype.onClickOpencloseButton = function () {
                this.m_list.visible = !this.m_list.visible;
                this.treeRoot.updateLayout();
            };
            TreeItem.prototype.setData = function (data, layerLevel) {
                if (layerLevel === void 0) { layerLevel = 0; }
                var otherText = "";
                if (data instanceof fairygui.GTextField) {
                    otherText = data.font + " " + data.fontSize;
                }
                this.data = data;
                this.m_title.text = data.name + "(" + getClassName(data) + ") w=" + data.width + ", h=" + data.height + ", sxy=" + data.scaleX + " " + data.scaleY + " " + otherText;
                this.m_visiable.selected = data.visible;
                this.m_openClose.selected = true;
                this.m_list.visible = true;
                this.width = this.treeParent.width;
                this.m_title.x = this.treeRoot.layerLevelInitPaddingLeft + this.treeRoot.layerLevelPaddingLeft * layerLevel;
                this.m_title.width = this.width - this.m_title.x;
                this.m_list.width = this.treeParent.width;
                for (var i = this.m_list.numChildren - 1; i >= 0; i--) {
                    var item = this.m_list.getChildAt(i);
                    item.removeFromParent();
                    this.treeRoot.itemPool.returnObject(item);
                }
                this.m_openClose.visible = false;
                if (data instanceof fairygui.GComponent || data instanceof laya.display.Sprite) {
                    this.m_openClose.visible = true;
                    if (data == Games.MenuLayer.gm) {
                        return;
                    }
                    // for (let i = 0; i < data.numChildren; i++)
                    // {
                    // 	let item: TreeItem = <TreeItem>this.treeRoot.itemPool.getObject(TreeItem.URL);
                    // 	item.treeParent = this;
                    // 	item.treeRoot = this.treeRoot;
                    // 	item.y = i * item.sourceHeight;
                    // 	item.width = this.m_list.width;
                    // 	this.m_list.addChild(item);
                    // 	if (data instanceof laya.display.Sprite)
                    // 	{
                    // 		item.setData(<laya.display.Sprite>data.getChildAt(i), layerLevel + 1);
                    // 	}
                    // 	else
                    // 	{
                    // 		item.setData(data.getChildAt(i), layerLevel + 1);
                    // 	}
                    // }
                    var container = data;
                    if (data instanceof fairygui.GComponent) {
                        container = data.displayObject;
                    }
                    for (var i = 0; i < container.numChildren; i++) {
                        var display = container.getChildAt(i);
                        if (display["$owner"])
                            display = display["$owner"];
                        var item = this.treeRoot.itemPool.getObject(TreeItem.URL);
                        item.treeParent = this;
                        item.treeRoot = this.treeRoot;
                        item.y = i * item.sourceHeight;
                        item.width = this.m_list.width;
                        this.m_list.addChild(item);
                        item.setData(display, layerLevel + 1);
                    }
                }
            };
            TreeItem.prototype.updateLayout = function () {
                var y = 0;
                if (this.m_list.visible) {
                    for (var i = 0; i < this.m_list.numChildren; i++) {
                        var item = this.m_list.getChildAt(i);
                        item.updateLayout();
                        item.y = y;
                        y += item.height;
                    }
                }
                this.m_list.height = y;
                this.height = this.sourceHeight + y;
            };
            return TreeItem;
        }(GM.TreeItemStruct));
        GM.TreeItem = TreeItem;
    })(GM = fgui.GM || (fgui.GM = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=TreeItem.js.map