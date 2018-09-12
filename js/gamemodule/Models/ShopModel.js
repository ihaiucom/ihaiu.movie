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
    var ShopModel = /** @class */ (function (_super) {
        __extends(ShopModel, _super);
        function ShopModel() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.dict = new Dictionary();
            _this.lastDailyUpdateTime = 0;
            _this.lastWeekUpdateTime = 0;
            return _this;
        }
        ShopModel.prototype.install = function () {
            this.InitLocalData();
        };
        ShopModel.prototype.ClearGoodsLimit = function () {
            var keys = this.dict.getKeys();
            var values = this.dict.getValues();
            for (var index = 0; index < values.length; index++) {
                var value = values[index];
                if (value != null) {
                    if (value.LimitType == 1) {
                        value.HasBuy = 0;
                    }
                    else if (value.LimitType == 2) {
                        var date = new Date(Game.time.serverMilliseconds);
                        if (date.getDay() == 1) {
                            value.HasBuy = 0;
                        }
                    }
                }
            }
        };
        ShopModel.prototype.UpdateGoodsLimit = function (msg, uuid) {
            this.lastDailyUpdateTime = Game.time.serverMilliseconds;
            this.lastWeekUpdateTime = Game.time.serverMilliseconds;
            if (this.dict.hasKey(msg.id)) {
                this.dict.getValue(msg.id).HasBuy = msg.amount;
            }
            else {
                var goods = Games.GoodsData.Create(msg.id, msg.amount);
                this.dict.add(msg.id, goods);
            }
        };
        Object.defineProperty(ShopModel.prototype, "goodsList", {
            get: function () {
                this.TryUpdate();
                var list = [];
                var goodsList = this.dict.getValues();
                for (var key in goodsList) {
                    if (goodsList.hasOwnProperty(key)) {
                        var goods = goodsList[key];
                        list.push(goods);
                    }
                }
                return list;
            },
            enumerable: true,
            configurable: true
        });
        ShopModel.prototype.TryUpdate = function () {
            var serverTime = Game.time.serverMilliseconds;
            var updateDailyTime = User.info.mallLimitDailyUpdateTime;
            var updateWeekTime = User.info.mallLimitWeeklyUpdateTime;
            if (serverTime > updateDailyTime && this.lastDailyUpdateTime - updateDailyTime < 24 * 60 * 60 * 1000) {
                this.lastDailyUpdateTime = serverTime;
                this.InitDailyData();
            }
            if (serverTime > updateWeekTime && this.lastWeekUpdateTime - updateWeekTime < 7 * 24 * 60 * 60 * 1000) {
                this.lastWeekUpdateTime = serverTime;
                this.InitWeekData();
            }
        };
        ShopModel.prototype.GetGoodsByShopType = function (shoptype) {
            var list = [];
            var goodsList = this.goodsList;
            for (var key in goodsList) {
                if (goodsList.hasOwnProperty(key)) {
                    var goods = goodsList[key];
                    if (goods.ShopType == shoptype) {
                        list.push(goods);
                    }
                }
            }
            return list;
        };
        ShopModel.prototype.InitLocalData = function () {
            this.dict.clear();
            var cfglist = Game.config.shop.getConfigList();
            for (var index = 0; index < cfglist.length; index++) {
                var cfg = cfglist[index];
                this.dict.add(cfg.id, Games.GoodsData.Create(cfg.id));
            }
        };
        ShopModel.prototype.InitDailyData = function () {
            var dailyType = 1;
            var goodsList = this.dict.getValues();
            for (var key in goodsList) {
                if (goodsList.hasOwnProperty(key)) {
                    var goods = goodsList[key];
                    if (goods.ShopType == dailyType) {
                        goods.HasBuy = 0;
                        this.dict.add(goods.id, goods);
                    }
                }
            }
        };
        ShopModel.prototype.InitWeekData = function () {
            var weekType = 2;
            var goodsList = this.dict.getValues();
            for (var key in goodsList) {
                if (goodsList.hasOwnProperty(key)) {
                    var goods = goodsList[key];
                    if (goods.ShopType == weekType) {
                        goods.HasBuy = 0;
                        this.dict.add(goods.id, goods);
                    }
                }
            }
        };
        ShopModel.prototype.SetDataToZero = function () {
            this.dict.clear();
            var cfglist = Game.config.shop.getConfigList();
            for (var index = 0; index < cfglist.length; index++) {
                var cfg = cfglist[index];
                this.dict.add(cfg.id, Games.GoodsData.Create(cfg.id, 100));
            }
        };
        Object.defineProperty(ShopModel.prototype, "RedNum", {
            get: function () {
                var goodsList = this.goodsList;
                var num = 0;
                for (var index = 0; index < goodsList.length; index++) {
                    var goods = goodsList[index];
                    if (goods.Config.hasPeriodTime && goods.isPeriodTime) {
                        num++;
                    }
                }
                return num;
            },
            enumerable: true,
            configurable: true
        });
        ShopModel.prototype.GetRedNumByType = function (type) {
            // let lastOpen = Gam
            var goodsList = this.GetGoodsByShopType(type);
            var num = 0;
            for (var index = 0; index < goodsList.length; index++) {
                var goods = goodsList[index];
                if (goods.Config.hasPeriodTime && goods.isPeriodTime) {
                    num++;
                }
            }
            return num;
        };
        return ShopModel;
    }(Games.MModel));
    Games.ShopModel = ShopModel;
})(Games || (Games = {}));
//# sourceMappingURL=ShopModel.js.map