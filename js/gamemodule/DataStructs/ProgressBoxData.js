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
        //开启倒计时重置
        ProgressBoxData.prototype.startResetTime = function () {
            var _this = this;
            //重置小时
            var resetHour = 0;
            var curr = Game.time.serverMilliseconds;
            var d = new Date();
            d.setTime(curr);
            d.setMinutes(0);
            d.setSeconds(0);
            var hour = d.getHours();
            d.setHours(resetHour);
            d.setTime(d.getTime() + 24 * 60 * 60 * 1000);
            clearTimeout(this.timeOutHandler);
            if (Game.time.checkNewDayToRefrush(this.lastTime, 0)) {
                this.staus = 0;
                this.progress = 0;
            }
            else {
                //下一时间
                var nextSecond = Math.floor(d.getTime() / 1000);
                var currSecond = Game.time.serverSeconds;
                if (currSecond < nextSecond) {
                    var time = nextSecond - currSecond;
                    this.timeOutHandler = setTimeout(function () {
                        _this.staus = 0;
                        _this.progress = 0;
                        Game.event.dispatch(GameEventKey.GameEventKey_UpdateProgressBoxStatus, _this.id);
                        _this.startResetTime();
                    }, time * 1000);
                }
            }
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