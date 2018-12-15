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
        var ItemIcon = /** @class */ (function (_super) {
            __extends(ItemIcon, _super);
            function ItemIcon() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            ItemIcon.prototype.RenderItem = function (data) {
                if (data == null) {
                    return;
                }
                this.itemDate = Games.ItemData.Create(data.itemId, data.itemNum);
                if (this.itemDate.itemType == 7) {
                    this.m_itemType.setSelectedIndex(1);
                    this.m_pactIcon.Render(this.itemDate);
                }
                else {
                    this.m_itemType.setSelectedIndex(0);
                    this.m_icon.setItemInfo(this.itemDate.itemId, this.itemDate.itemNum);
                    this.m_icon.PopupInfo = this.itemDate.itemId;
                }
            };
            Object.defineProperty(ItemIcon.prototype, "ItemId", {
                set: function (itemId) {
                    var itemType = Game.config.item.getType(itemId);
                    if (itemType == 7) {
                        this.m_itemType.setSelectedIndex(1);
                        this.m_pactIcon.ItemId = itemId;
                    }
                    else {
                        this.m_itemType.setSelectedIndex(0);
                        this.m_icon.m_icon.url = Game.config.item.getItemIcon(itemId);
                        this.m_icon.m_star.starNum = Game.config.item.getStarNum(itemId);
                    }
                },
                enumerable: true,
                configurable: true
            });
            return ItemIcon;
        }(Common.ItemIconStruct));
        Common.ItemIcon = ItemIcon;
    })(Common = fgui.Common || (fgui.Common = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=ItemIcon.js.map