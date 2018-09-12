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
    var Common;
    (function (Common) {
        var ItemInfoPanel = /** @class */ (function (_super) {
            __extends(ItemInfoPanel, _super);
            function ItemInfoPanel() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            ItemInfoPanel.prototype.Show = function (button, data) {
                this.m_itemInfo.UpdateData(data);
                this.m_itemInfo.showPopup(button);
                // this.UpdatePoint(point);
                Games.MenuLayer.showDialogModel();
                Games.MenuLayer.dialog.addChild(this);
                centerScreen(this);
            };
            ItemInfoPanel.prototype.UpdatePoint = function (point) {
                if (point.y < this.m_itemInfo.height) {
                    if (point.x > (this.width - this.m_itemInfo.width)) {
                        this.m_itemInfo.setPivot(1, 0);
                    }
                    else {
                        this.m_itemInfo.setPivot(0, 0);
                    }
                }
                else {
                    if (point.x > (this.width - this.m_itemInfo.width)) {
                        this.m_itemInfo.setPivot(1, 1);
                    }
                    else {
                        this.m_itemInfo.setPivot(0, 1);
                    }
                }
            };
            ItemInfoPanel.prototype.Hide = function () {
                this.removeFromParent();
            };
            return ItemInfoPanel;
        }(Common.ItemInfoPanelStruct));
        Common.ItemInfoPanel = ItemInfoPanel;
    })(Common = fgui.Common || (fgui.Common = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=ItemInfoPanel.js.map