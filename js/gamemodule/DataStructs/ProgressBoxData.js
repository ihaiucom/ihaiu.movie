var Games;
(function (Games) {
    var ProgressBoxData = /** @class */ (function () {
        function ProgressBoxData() {
            this.uuid = "";
            this._id = 0;
            this.progress = 0;
            this.staus = 0;
            this.lastTime = 0;
            this.timeOutHandler = 0;
        }
        Object.defineProperty(ProgressBoxData.prototype, "id", {
            get: function () {
                return this._id;
            },
            set: function (value) {
                this._id = value;
            },
            enumerable: true,
            configurable: true
        });
        // 获取是否可以领取
        ProgressBoxData.prototype.isEnableGet = function (index) {
            var config = this.configs[index];
            return this.progress >= config.completion;
        };
        // 是否已经获取		
        ProgressBoxData.prototype.isGet = function (index) {
            return ((this.staus >> index) & 1) != 0;
        };
        //获取重置时间
        ProgressBoxData.prototype.getResetHour = function () {
            switch (this.id) {
                case EProgressBoxId.manageOrder:
                    return 22;
                default:
                    return 24;
            }
        };
        //开启倒计时重置
        ProgressBoxData.prototype.startResetTime = function () {
            var _this = this;
            clearTimeout(this.timeOutHandler);
            //当前重置的小时
            var resetHour = this.getResetHour();
            //当前时间
            var currSecond = Game.time.serverSeconds;
            //上次时间的小时
            var lastHour = Games.TimeHelper.GetServerDateTime(this.lastTime).getHours();
            //当前时间的小时
            var nowHour = Games.TimeHelper.GetServerDateTime().getHours();
            //超过一天 重置
            if (currSecond - this.lastTime > Games.TimeHelper.OneDaySeconds) {
                this.resetStatus();
            }
            else {
                var isSameDay = Games.TimeHelper.IsSameDay(this.lastTime, currSecond);
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
                this.timeOutHandler = setTimeout(function () {
                    _this.resetStatus();
                }, time * 1000);
            }
        };
        ProgressBoxData.prototype.resetStatus = function () {
            this.progress = 0;
            this.staus = 0;
            Game.event.dispatch(GameEventKey.GameEventKey_UpdateProgressBoxStatus, this.id);
        };
        Object.defineProperty(ProgressBoxData.prototype, "configs", {
            get: function () {
                if (!this._configs) {
                    if (this._id > 0)
                        this._configs = Game.config.complete.getCompleteList(this._id);
                }
                return this._configs;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ProgressBoxData.prototype, "count", {
            // 数量		
            get: function () {
                return this.configs.length;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ProgressBoxData.prototype, "maxProgress", {
            // 最大进度值
            get: function () {
                return this.configs[this.configs.length - 1].completion;
            },
            enumerable: true,
            configurable: true
        });
        // 获取红点数量
        ProgressBoxData.prototype.getReadNum = function () {
            var num = 0;
            for (var i = 0; i < this.count; i++) {
                if (this.isEnableGet(i)) {
                    if (!this.isGet(i)) {
                        num++;
                    }
                }
            }
            return num;
        };
        return ProgressBoxData;
    }());
    Games.ProgressBoxData = ProgressBoxData;
})(Games || (Games = {}));
//# sourceMappingURL=ProgressBoxData.js.map