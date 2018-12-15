var Games;
(function (Games) {
    var OrderData = /** @class */ (function () {
        function OrderData() {
            //合作
            this.isCooperation = false;
        }
        Object.defineProperty(OrderData.prototype, "id", {
            get: function () {
                return this._id;
            },
            set: function (value) {
                this._id = value;
                this.config = Game.config.order.getConfig(this._id);
            },
            enumerable: true,
            configurable: true
        });
        /**
         * 是否被塞入
         * @param id
         */
        OrderData.prototype.isPut = function (id) {
            var b = false;
            for (var index = 0; index < this.items.length; index++) {
                var element = this.items[index];
                if (element.itemId == id) {
                    b = true;
                    break;
                }
            }
            return b;
        };
        /**
         * 已经装入
         * @param id
         */
        OrderData.prototype.getOrderItem = function (id) {
            for (var index = 0; index < this.items.length; index++) {
                var element = this.items[index];
                if (element.itemId == id) {
                    return element;
                }
            }
            return null;
        };
        Object.defineProperty(OrderData.prototype, "isCooperationOrder", {
            /**
             * 已经合作该顶到
             */
            get: function () {
                var b = false;
                for (var index = 0; index < this.items.length; index++) {
                    var element = this.items[index];
                    if (element.portrait >= 0) {
                        b = true;
                        break;
                    }
                }
                return b;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(OrderData.prototype, "cooperationOrderItem", {
            /**
             * 已经合作该顶到
             */
            get: function () {
                for (var index = 0; index < this.items.length; index++) {
                    var element = this.items[index];
                    if (element.portrait >= 0) {
                        return element;
                    }
                }
                return null;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(OrderData.prototype, "isAllComplete", {
            //是否全部装箱
            get: function () {
                var b = true;
                for (var index = 0; index < this.config.need.length; index++) {
                    var element = this.config.need[index];
                    if (this.isPut(element.itemId) == false) {
                        b = false;
                    }
                }
                return b;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(OrderData.prototype, "isCanPut", {
            //
            get: function () {
                var b = true;
                for (var index = 0; index < this.config.need.length; index++) {
                    var element = this.config.need[index];
                    if (this.isPut(element.itemId) == false) {
                        if (Game.moduleModel.item.getItemNum(element.itemId) < element.itemNum) {
                            b = false;
                            break;
                        }
                    }
                }
                return b;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(OrderData.prototype, "delTime", {
            //删除时间
            get: function () {
                return this.lastTime + EManageOrder.baseTime;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(OrderData.prototype, "expiredTime", {
            //过期时间
            get: function () {
                return this.lastTime + EManageOrder.baseTime;
            },
            enumerable: true,
            configurable: true
        });
        /**
         *
         * @param callBack
         */
        OrderData.prototype.startDelTime = function (callBack) {
            var _this = this;
            var nowTime = Game.time.serverSeconds;
            var endTime = this.delTime;
            var duration = endTime - nowTime;
            this.deleteCallBack = callBack;
            if (duration > 0) {
                this.timeOut = setTimeout(function () { _this.deleteComplete(); }, duration * 1000);
            }
            else {
                this.deleteComplete();
            }
        };
        /**
         *
         * @param callBack
         */
        OrderData.prototype.startExpiredTime = function (callBack) {
            var _this = this;
            var nowTime = Game.time.serverSeconds;
            var endTime = this.expiredTime;
            var duration = endTime - nowTime;
            this.expiredCallBack = callBack;
            if (duration > 0) {
                this.timeOut = setTimeout(function () { _this.expiredComplete(); }, duration * 1000);
            }
            else {
                this.expiredComplete();
            }
        };
        //过期完成
        OrderData.prototype.expiredComplete = function () {
            this.expiredCallBack(this.uuid);
            this.dispatch();
        };
        OrderData.prototype.dispatch = function () {
            if (this.isCooperation) {
                Game.event.dispatch(GameEventKey.GameEventKey_UpdateCoopreationOrderView);
            }
            else {
                Game.event.dispatch(GameEventKey.GameEventKey_UpdateOrderView);
            }
        };
        //删除完成
        OrderData.prototype.deleteComplete = function () {
            // setTimeout(() => { Game.protosender.manageOrder.DealOrder(); }, 2000);
            this.deleteCallBack(this.uuid);
            // this.dispatch();
        };
        OrderData.prototype.clearTime = function () {
            clearTimeout(this.timeOut);
        };
        OrderData.prototype.isRemoved = function () {
            var b = false;
            var duration = 0;
            //已经删除
            if (this.deleteFlag) {
                duration = Game.time.getSubSecondsAfter(this.delTime);
                if (duration <= 0) {
                    b = true;
                }
            }
            else {
                duration = Game.time.getSubSecondsAfter(this.expiredTime);
            }
            return b;
        };
        Object.defineProperty(OrderData.prototype, "rewardItems", {
            //奖励
            get: function () {
                this._rewardItems = [];
                var item = new DTItemNum();
                item.itemId = this.config.reward.itemId;
                item.itemNum = Game.moduleModel.building.getBuildEffectNum(Games.RoomType.Sale, item.itemId, this.config.reward.itemNum);
                this._rewardItems.push(item);
                item = new DTItemNum();
                item.itemId = 8;
                item.itemNum = Game.moduleModel.building.getBuildEffectNum(Games.RoomType.Sale, item.itemId, this.config.expect);
                this._rewardItems.push(item);
                return this._rewardItems;
            },
            enumerable: true,
            configurable: true
        });
        return OrderData;
    }());
    Games.OrderData = OrderData;
})(Games || (Games = {}));
//# sourceMappingURL=OrderData.js.map