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
            if (Game.time.checkNewDayToRefrush(this.lastUpdateTime, 0)) {
                this.dailyCount = 0;
            }
            else {
                var resetHour = 0;
                var curr = Game.time.serverMilliseconds;
                var d = new Date();
                d.setTime(curr);
                d.setMinutes(0);
                d.setSeconds(0);
                var hour = d.getHours();
                d.setHours(resetHour);
                d.setTime(d.getTime() + 24 * 60 * 60 * 1000);
                //下一时间
                var nextSecond = Math.floor(d.getTime() / 1000);
                var currSecond = Game.time.serverSeconds;
                if (currSecond < nextSecond) {
                    var timeDuration = nextSecond - currSecond;
                    this.resetTimeHandler = setTimeout(function () {
                        _this.dailyCount = 0;
                    }, timeDuration * 1000);
                }
            }
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