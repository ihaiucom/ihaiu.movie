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
var Games;
(function (Games) {
    //======================
    // 物品 数据模型
    //----------------------
    var ItemModel = /** @class */ (function (_super) {
        __extends(ItemModel, _super);
        function ItemModel() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            // 物品字典
            _this.dict = new Dictionary();
            // 物品字典,用uuid作为字典
            _this.dictByUuid = new Dictionary();
            return _this;
        }
        ItemModel.prototype.CreateItem = function (id, num) {
            var item = new Games.ItemData();
            item.itemId = id;
            item.itemNum = num;
            return item;
        };
        Object.defineProperty(ItemModel.prototype, "itemList", {
            // 获取物品列表，数量大于0，且config存在
            get: function () {
                var list = [];
                var items = this.dict.getValues();
                for (var i = 0; i < items.length; i++) {
                    if (items[i].itemNum > 0 && items[i].itemConfig) {
                        list.push(items[i]);
                    }
                }
                return list;
            },
            enumerable: true,
            configurable: true
        });
        ItemModel.prototype.GetItemListByType = function (types) {
            var list = [];
            var items = this.dict.getValues();
            for (var i = 0; i < items.length; i++) {
                for (var j = 0; j < types.length; j++) {
                    var type = types[j];
                    if (items[i].itemType == type && items[i].itemNum > 0 && items[i].itemConfig) {
                        list.push(items[i]);
                        break;
                    }
                }
            }
            return list;
        };
        // 获取物品, 用uuid
        ItemModel.prototype.getItemByUuid = function (uuid) {
            if (this.dictByUuid.hasKey(uuid)) {
                return this.dictByUuid.getValue(uuid);
            }
            else {
                return null;
            }
        };
        // 获取物品数量, 用uuid
        ItemModel.prototype.getItemNumByUuid = function (uuid) {
            var item = this.getItemByUuid(uuid);
            if (item) {
                return item.itemNum;
            }
            return 0;
        };
        // 获取物品
        ItemModel.prototype.getItem = function (itemId) {
            if (this.dict.hasKey(itemId)) {
                return this.dict.getValue(itemId);
            }
            else {
                var item = Games.ItemData.Create(itemId, 0);
                this.dict.add(itemId, item);
                return item;
            }
        };
        // 获取物品数量文本
        ItemModel.prototype.getItemNumTxt = function (itemId) {
            return formatNumberUnit(this.getItemNum(itemId));
        };
        // 获取物品数量
        ItemModel.prototype.getItemNum = function (itemId) {
            var item = this.getItem(itemId);
            if (item) {
                return item.itemNum;
            }
            return 0;
        };
        // 设置物品数量
        ItemModel.prototype.setItemNum = function (itemId, itemNum, uuid, createTime) {
            var item;
            if (uuid) {
                item = this.getItemByUuid(uuid);
                if (!item && itemId > 0) {
                    item = this.getItem(itemId);
                    item.uuid = uuid;
                    this.dictByUuid.add(uuid, item);
                }
            }
            if (!item) {
                item = this.getItem(itemId);
            }
            item.itemNum = itemNum;
            if (createTime !== undefined) {
                item.createTime = createTime;
            }
        };
        // 是否满足物品数量
        ItemModel.prototype.hasItemNum = function (itemId, needNum) {
            return this.getItemNum(itemId) >= needNum;
        };
        return ItemModel;
    }(Games.MModel));
    Games.ItemModel = ItemModel;
})(Games || (Games = {}));
//# sourceMappingURL=ItemModel.js.map