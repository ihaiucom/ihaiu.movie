var Games;
(function (Games) {
    var GoodsData = /** @class */ (function () {
        function GoodsData() {
            this.saleNums = 0; //可购买数量
        }
        Object.defineProperty(GoodsData.prototype, "Config", {
            get: function () {
                if (this.id == null) {
                    return null;
                }
                return Game.config.shop.getConfig(this.id);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GoodsData.prototype, "HasBuy", {
            set: function (num) {
                if (this.Config && this.Config.limit && this.Config.limit) {
                    this.saleNums = this.Config.limit.itemNum - num;
                    if (this.saleNums < 0) {
                        this.saleNums = 0;
                    }
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GoodsData.prototype, "LimitType", {
            get: function () {
                if (this.Config && this.Config.limit && this.Config.limit) {
                    return this.Config.limit.itemId;
                }
                return 0;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GoodsData.prototype, "LimitString", {
            get: function () {
                var str = "";
                switch (this.LimitType) {
                    case 1:
                        str += Games.TEXT.ShopDayLimit;
                        break;
                    case 2:
                        str += Games.TEXT.ShopWeekLimit;
                        break;
                    default:
                        return "";
                }
                return str;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GoodsData.prototype, "Limit", {
            get: function () {
                return this.saleNums;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GoodsData.prototype, "ShopType", {
            get: function () {
                if (this.Config && this.Config.type) {
                    return this.Config.type;
                }
                return 0;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GoodsData.prototype, "isPeriodTime", {
            get: function () {
                if (this.Config.hasPeriodTime) {
                    return this.Config.isPeriodTime;
                }
                return true;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GoodsData.prototype, "Items", {
            get: function () {
                if (this.Config) {
                    if (this.Config.special == 1) {
                        return this.Config.item;
                    }
                    var item = this.Config.item[0];
                    if (this.Config.special == 2) {
                        item.itemNum = Game.config.playerLevel.GetShopGold(User.info.level);
                        return [item];
                    }
                    if (this.Config.special == 3) {
                        item.itemNum = Game.config.playerLevel.GetShopMoney(User.info.level);
                        return [item];
                    }
                }
                return [];
            },
            enumerable: true,
            configurable: true
        });
        /**
         * 创建物品数据结构，使用物品ID和已购买数量
         * @param id
         * @param num 已经购买的个数，默认为0
         */
        GoodsData.Create = function (id, num) {
            if (num === void 0) { num = 0; }
            var goods = new GoodsData();
            goods.id = id;
            goods.HasBuy = num;
            return goods;
        };
        return GoodsData;
    }());
    Games.GoodsData = GoodsData;
})(Games || (Games = {}));
//# sourceMappingURL=GoodsData.js.map