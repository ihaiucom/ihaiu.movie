var Games;
(function (Games) {
    //======================
    // 游戏时间 数据
    //----------------------
    var GameTimeData = /** @class */ (function () {
        function GameTimeData() {
            // 本地与服务器的时差， unix时间戳 毫秒
            this._serverSubtime = 0;
            // 服务器与客户端的时区差		
            this._localSubServerTimezone = null;
            //服务器所在时区
            this._serverTimezone = "";
            this._preFrame = 0;
            this._localTime = 0;
            // 本地， 登录时间， unix时间戳 毫秒
            this._localLoginTime = new Date().getTime();
            // 服务器， 注册时间， unix时间戳 毫秒
            this._registerTime = new Date().getTime();
            // 服务器， 登录时间， unix时间戳 毫秒
            this._serverLoginTime = new Date().getTime();
            /**
             * 测试所用数据，用于本地时间校正，程序中不要调用
             */
            this._localTestAddTIme = 0;
        }
        // 检查是否就今天		
        GameTimeData.prototype.isLocalToday = function (localTime) {
            var d = new Date(localTime);
            var c = new Date();
            return d.getFullYear() == c.getFullYear() && d.getMonth() == c.getMonth() && d.getDate() == c.getDate();
        };
        // 检查是否就今天 localTime 秒
        GameTimeData.prototype.isLocalTodayTimezone = function (localTime) {
            return Games.TimeHelper.IsSameDay(localTime, this.serverSeconds);
        };
        Object.defineProperty(GameTimeData.prototype, "serverSubtime", {
            get: function () {
                return this._serverSubtime;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GameTimeData.prototype, "localSubServerTimezone", {
            get: function () {
                if (this._localSubServerTimezone == null) {
                    this.serverTimezone = "America/Regina";
                }
                return this._localSubServerTimezone + this._localTestAddTIme;
            },
            set: function (time) {
                this._localSubServerTimezone = time;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GameTimeData.prototype, "serverTimezone", {
            get: function () {
                if (this._serverTimezone == "") {
                    this._serverTimezone = "America/Regina";
                }
                return this._serverTimezone;
            },
            //设置服务器时区
            set: function (timeZone) {
                this._serverTimezone = timeZone;
                this.localSubServerTimezone = new Date().getTimezoneOffset() * 60 * 1000 - 6 * 60 * 60 * 1000;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GameTimeData.prototype, "localTime", {
            // 	本地，当前时间， unix时间戳 毫秒
            get: function () {
                if (Laya.timer.currFrame != this._preFrame) {
                    this._localTime = new Date().getTime();
                    this._preFrame = Laya.timer.currFrame;
                }
                return this._localTime;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GameTimeData.prototype, "localLoginTime", {
            get: function () {
                return this._localLoginTime;
            },
            set: function (value) {
                this._localLoginTime = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GameTimeData.prototype, "localGameTime", {
            // 本地 游戏时间， unix时间戳 毫秒
            get: function () {
                return this.localTime - this.localLoginTime;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GameTimeData.prototype, "registerTime", {
            get: function () {
                return this._registerTime;
            },
            set: function (value) {
                this._registerTime = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GameTimeData.prototype, "registerSeconds", {
            // 	注册时间，注册时间， unix时间戳 秒
            get: function () {
                return Math.floor(this.registerTime / 1000);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GameTimeData.prototype, "serverLoginTime", {
            get: function () {
                return this._serverLoginTime;
            },
            set: function (value) {
                this._serverLoginTime = value;
                this.localLoginTime = this.localTime;
                this._serverSubtime = this.localLoginTime - this._serverLoginTime;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GameTimeData.prototype, "serverSeconds", {
            // 	服务器，当前时间， unix时间戳 秒
            get: function () {
                return Math.floor(this.serverMilliseconds / 1000);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GameTimeData.prototype, "serverMilliseconds", {
            // 	服务器，当前时间， unix时间戳 毫秒
            get: function () {
                return this.serverLoginTime + this.localGameTime;
            },
            enumerable: true,
            configurable: true
        });
        // 服务器更新时间
        // 年月日时分秒
        GameTimeData.prototype.timestampToTime = function (timestamp) {
            // let date = new Date(timestamp * 1000);
            var date = Games.TimeHelper.GetServerDateTime(timestamp);
            var Y = date.getFullYear();
            var M = date.getMonth() + 1;
            var D = date.getDate();
            var h = date.getHours();
            var m = date.getMinutes();
            var s = date.getSeconds();
            return [Y, M, D, h, m, s];
        };
        // 本地时间
        // 年月日时分秒
        GameTimeData.prototype.localTimestamToTime = function () {
            // let date = new Date();
            var date = Games.TimeHelper.GetServerDateTime();
            var Y = date.getFullYear();
            var M = date.getMonth() + 1;
            var D = date.getDate();
            var h = date.getHours();
            var m = date.getMinutes();
            var s = date.getSeconds();
            return [Y, M, D, h, m, s];
        };
        /**
         * 服务器当前时间和之前的一个时间差 秒
         * @param preunix 之前的时间
         */
        GameTimeData.prototype.getSubSecondsPre = function (preunixSeconds) {
            var dTime = this.serverSeconds - preunixSeconds;
            if (dTime < 0)
                dTime = 0;
            return dTime;
        };
        /**
         * 服务器当前时间和之后的一个时间差 秒
         * @param afterunix 之后的时间
         */
        GameTimeData.prototype.getSubSecondsAfter = function (afterunixSeconds) {
            return afterunixSeconds - this.serverSeconds;
        };
        /**
         * 服务器当前时间和之前的一个时间差 毫秒
         * @param preunix 之前的时间
         */
        GameTimeData.prototype.getSubMillisecondsPre = function (preunixMilliseconds) {
            return this.serverMilliseconds - preunixMilliseconds;
        };
        /**
         * 服务器当前时间和之后的一个时间差 毫秒
         * @param afterunix 之后的时间
         */
        GameTimeData.prototype.getSubMillisecondsAfter = function (afterunixMilliseconds) {
            return afterunixMilliseconds - this.serverMilliseconds;
        };
        /**
         * 判断是否跨天
         * @param serverLastRefrushTime 服务器上次刷新时间
         * @param timePoint 跨天时间点，比如：22点
         */
        GameTimeData.prototype.checkNewDayToRefrush = function (serverLastRefrushTime, timePoint) {
            var newDay = false;
            var sevTime = this.timestampToTime(serverLastRefrushTime);
            var locTime = this.localTimestamToTime();
            for (var i = 0; i < 3; i++) {
                if (sevTime[i] < locTime[i]) {
                    newDay = true;
                    break;
                }
            }
            if (!newDay && timePoint > 0) {
                if (locTime[3] >= timePoint && sevTime[3] < timePoint) {
                    newDay = true;
                }
            }
            return newDay;
        };
        /**
         * 检查是否时间到
         * @param localTime 时间戳毫秒 服务器当前时间
         * @param h 小时
         * @param m 分钟
         */
        GameTimeData.prototype.checkTime = function (localTime, h, m) {
            if (m === void 0) { m = 0; }
            return Games.TimeHelper.IsBeyondTimeInSameDay(localTime / 1000, h, m);
        };
        // 格式化日期，获取今天的日期
        GameTimeData.prototype.timeLeft = function (time, hour, minutes, seconds) {
            if (seconds === void 0) { seconds = 0; }
            if (this.isLocalTodayTimezone(time / 1000)) {
                //服务器所在时区的h时m分s秒对应的时间戳
                var time1 = Games.TimeHelper.TimeReformat(hour, minutes, seconds).getTime();
                return time1 - time;
            }
            else {
                return 0;
            }
        };
        /**
         * 检查是否时间到
         * @param localTime 时间戳
         * @param h 小时
         * @param m 分钟
         */
        GameTimeData.prototype.checkTime22222 = function (localTime, h, m) {
            if (m === void 0) { m = 0; }
            var d = new Date(localTime);
            if (d.getHours() < h) {
                return false;
            }
            else if (d.getHours() === h) {
                if (d.getMinutes() < m) {
                    return false;
                }
            }
            return true;
        };
        // 格式化日期，获取今天的日期
        GameTimeData.prototype.timeLeft22222 = function (time, hour, minutes, seconds) {
            if (seconds === void 0) { seconds = 0; }
            if (this.isLocalToday(time)) {
                // 今天
                var dates = new Date(time);
                // 小时
                var h = dates.getHours();
                // 分钟
                var m = dates.getMinutes();
                // 秒
                var s = dates.getSeconds();
                var cur = h * 3600 + m * 60 + s;
                var req = hour * 3600 + minutes * 60 + seconds;
                var res = (req - cur) * 1000;
                if (res < 0)
                    res = 0;
                return res;
            }
            else {
                // 非今天，理论上隔天，本算法不计算往日数据
                return 0;
            }
        };
        //测试所用数据，用于本地时间校正，程序中不要调用
        GameTimeData.prototype.AddLocalTestSubServerTimezone = function (h, m, s) {
            this._localTestAddTIme = this._localTestAddTIme + ((h * 60 + m) * 60 + s) * 1000;
        };
        return GameTimeData;
    }());
    Games.GameTimeData = GameTimeData;
})(Games || (Games = {}));
// // 	服务器，当前时间， unix时间戳 秒
// Game.time.serverSeconds;
// // 	服务器，当前时间， unix时间戳 毫秒
// Game.time.serverMilliseconds;
// // 上次操作时间， unix时间戳 秒
// let preOpsTime: number;
// // 服务器当前时间和之前的一个时间差 秒
// let s1 = Game.time.getSubSecondsPre(preOpsTime);
// // 下次操作时间， unix时间戳 秒
// let afterOpsTime: number;
// // 服务器当前时间和之前的一个时间差 秒
// let s2 = Game.time.getSubSecondsAfter(afterOpsTime);
// // 上次操作时间， unix时间戳 毫秒
// let preOpsTime2: number;
// // 服务器当前时间和之前的一个时间差 毫秒
// let ms1 = Game.time.getSubMillisecondsPre(preOpsTime);
// // 下次操作时间， unix时间戳 毫秒
// let afterOpsTime2: number;
// // 服务器当前时间和之后的一个时间差 毫秒
// let ms2 = Game.time.getSubMillisecondsAfter(afterOpsTime);
//# sourceMappingURL=GameTimeData.js.map