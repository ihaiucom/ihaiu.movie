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
    var PlayerInfo;
    (function (PlayerInfo) {
        var ItemBuy = /** @class */ (function (_super) {
            __extends(ItemBuy, _super);
            function ItemBuy() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.ITEM_RENAME_ID = 5008;
                return _this;
            }
            ItemBuy.prototype.showForParent = function (parent) {
                var _this = this;
                parent.addChild(this);
                var item = Game.moduleModel.item.getItem(this.ITEM_RENAME_ID);
                this.m_itemIcon.url = item.itemIconUrl;
                this.m_btn_close.onClick(this, function () {
                    _this.parent.removeChild(_this);
                });
            };
            return ItemBuy;
        }(PlayerInfo.ItemBuyStruct));
        PlayerInfo.ItemBuy = ItemBuy;
    })(PlayerInfo = fgui.PlayerInfo || (fgui.PlayerInfo = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=ItemBuy.js.map