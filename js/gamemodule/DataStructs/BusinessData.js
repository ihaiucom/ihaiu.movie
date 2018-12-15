var Games;
(function (Games) {
    var BusinessData = /** @class */ (function () {
        function BusinessData() {
            this.tomaxTimeOut = 0;
            this.resetTimeHandler = 0;
        }
        Object.defineProperty(BusinessData.prototype, "id", {
            get: function () {
                return this._id;
            },
            set: function (value) {
                this._id = value;
                if (value > 0) {
                    this.config = Game.config.business.getConfig(value);
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BusinessData.prototype, "interval", {
            get: function () {
                return Game.config.global.getConfig(GlobalKey.bussiness_cd).value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BusinessData.prototype, "nextBusinessNum", {
            //获取
            get: function () {
                var nowTime = Game.time.serverSeconds;
                var lastTime = this.lastResetTime;
                var duration = 0;
                if (nowTime > lastTime) {
                    duration = nowTime - lastTime;
                }
                var num = Math.floor(duration / this.interval);
                num = Math.min(this.lineLimit, num);
                return num;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BusinessData.prototype, "resultRewards", {
            get: function () {
                var items = [];
                for (var index = 0; index < this.config.reward.length; index++) {
                    var element = this.config.reward[index];
                    var item = new DTItemNum();
                    item.itemId = element.itemId;
                    var num = Game.moduleModel.building.getBuildEffectNum(Games.RoomType.Office, item.itemId, element.itemNum);
                    item.itemNum = num;
                    items.push(item);
                }
                var expect = new DTItemNum();
                expect.itemId = EItemId.expect;
                expect.itemNum = Game.moduleModel.building.getBuildEffectNum(Games.RoomType.Office, expect.itemId, this.config.expect);
                items.push(expect);
                return items;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BusinessData.prototype, "nextBusinessComeTime", {
            //新公务到来的时间
            get: function () {
                var nowTime = Game.time.serverSeconds;
                var lastTime = this.lastResetTime + this.interval;
                return Math.max(0, lastTime - nowTime);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BusinessData.prototype, "isMaxDaily", {
            //当日阅读达到最大次数
            get: function () {
                return this.dailyCount >= Game.config.global.getConfig(GlobalKey.bussiness_number).value;
            },
            enumerable: true,
            configurable: true
        });
        //开始定时器
        BusinessData.prototype.startToMaxTime = function () {
            //清除定时器
            if (this.tomaxTimeOut > 0) {
                clearTimeout(this.tomaxTimeOut);
                this.tomaxTimeOut = 0;
            }
            //当前时间
            var nowTime = Game.time.serverSeconds;
            var nextNum = this.nextBusinessNum;
            //
            if (nextNum < this.lineLimit) {
                var duration = (this.lineLimit - nextNum) * this.interval;
                this.tomaxTimeOut = setTimeout(function () {
                    Game.event.dispatch(GameEventKey.GameEventKey_UpdateMainUIRed);
                }, duration * 1000);
            }
            Game.event.dispatch(GameEventKey.GameEventKey_UpdateMainUIRed);
        };
        //清除当天公务
        BusinessData.prototype.startResetDailyCountTime = function () {
            var _this = this;
            clearTimeout(this.resetTimeHandler);
            //当前重置的小时
            var resetHour = 22;
            //当前时间
            var currSecond = Game.time.serverSeconds;
            //上次时间的小时
            var lastHour = Games.TimeHelper.GetServerDateTime(this.lastUpdateTime).getHours();
            //当前时间的小时
            var nowHour = Games.TimeHelper.GetServerDateTime().getHours();
            //超过一天 重置
            if (currSecond - this.lastUpdateTime > Games.TimeHelper.OneDaySeconds) {
                this.resetStatus();
            }
            else {
                var isSameDay = Games.TimeHelper.IsSameDay(this.lastUpdateTime, currSecond);
                if (isSameDay) {
                    if (nowHour >= resetHour && lastHour < resetHour) {
                        //同一天 上次更新时间在重置时间之前
                        this.resetStatus();
                    }
                }
                else {
                    //不在同一天
                    if (lastHour < resetHour) {
                        this.resetStatus();
                    }
                }
            }
            var nextSecond = Games.TimeHelper.TimeReformat(resetHour).getTime() / 1000;
            if (nowHour >= resetHour) {
                nextSecond += Games.TimeHelper.OneDaySeconds;
            }
            if (currSecond < nextSecond) {
                var time = nextSecond - currSecond;
                this.resetTimeHandler = setTimeout(function () {
                    _this.resetStatus();
                }, time * 1000);
            }
        };
        BusinessData.prototype.resetStatus = function () {
            this.dailyCount = 0;
        };
        Object.defineProperty(BusinessData.prototype, "isMax", {
            //达到最大
            get: function () {
                return this.nextBusinessNum >= this.lineLimit && this.isMaxDaily == false;
            },
            enumerable: true,
            configurable: true
        });
        return BusinessData;
    }());
    Games.BusinessData = BusinessData;
})(Games || (Games = {}));
//# sourceMappingURL=BusinessData.js.map