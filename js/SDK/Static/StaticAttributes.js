var Games;
(function (Games) {
    var StaticAttributes = /** @class */ (function () {
        function StaticAttributes() {
            // 上一次时间戳
            this.preTime = 0;
            this.preTimeCount = 0;
        }
        Object.defineProperty(StaticAttributes, "Instance", {
            get: function () {
                if (!StaticAttributes._Instance) {
                    StaticAttributes._Instance = new StaticAttributes();
                }
                return StaticAttributes._Instance;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(StaticAttributes.prototype, "enable", {
            get: function () {
                if (this._enabled === undefined) {
                    this._enabled = BrowserDetect.isApp;
                }
                return this._enabled;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(StaticAttributes.prototype, "enableShinezone", {
            /**
             * 公司打点数据是否可用
             */
            get: function () {
                return this.enable;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(StaticAttributes.prototype, "enableAppflyer", {
            /**
             * ios appflyer 是否可用
             */
            get: function () {
                if (!this.enable) {
                    return false;
                }
                if (!BrowserDetect.isIOS) {
                    return false;
                }
                return true;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(StaticAttributes.prototype, "enableAppflyerAndorid", {
            /**
             * android appflyer 是否可用
             */
            get: function () {
                if (!this.enable) {
                    return false;
                }
                if (!BrowserDetect.isAndroid) {
                    return false;
                }
                return true;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * 获取时间戳
         * @param time
         */
        StaticAttributes.prototype.DateTimeFormat = function (time) {
            if (StaticAttributes.Instance.enableShinezone) {
                if (time == null) {
                    time = Game.time.serverSeconds;
                    if (this.preTimeCount < 58 && (time - this.preTime < 600) && !isNullOrEmpty(this.preDateTime)) {
                        return this.preDateTime + this.secondStr;
                    }
                    this.preTime = time;
                }
                var Dates = new Date(time * 1000 + Game.time.localSubServerTimezone);
                //年份
                var Year = Dates.getFullYear();
                //月份下标是0-11
                var Months = (Dates.getMonth() + 1) < 10 ? '0' + (Dates.getMonth() + 1) : (Dates.getMonth() + 1);
                //具体的天数
                var Day = Dates.getDate() < 10 ? '0' + Dates.getDate() : Dates.getDate();
                //小时
                var Hours = Dates.getHours() < 10 ? '0' + Dates.getHours() : Dates.getHours();
                //分钟
                var Minutes = Dates.getMinutes() < 10 ? '0' + Dates.getMinutes() : Dates.getMinutes();
                this.preDateTime = Year + '-' + Months + '-' + Day + ' ' + Hours + ':' + Minutes + ":";
                this.preTimeCount = -1;
                //返回数据格式
                return this.preDateTime + this.secondStr;
            }
            return "";
        };
        // 跨天，重新计时
        StaticAttributes.prototype.newDay = function () {
            this.preTime = 0;
            // this._userItemInfo = false;
        };
        Object.defineProperty(StaticAttributes.prototype, "secondStr", {
            // 秒转string
            get: function () {
                this.preTimeCount++;
                return this.preTimeCount < 10 ? "0" + this.preTimeCount : this.preTimeCount;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(StaticAttributes.prototype, "curToken", {
            /**
             * token
             */
            get: function () {
                if (isNullOrEmpty(this._token)) {
                    this._token = this.DeviceId + Game.time.serverSeconds;
                }
                return this._token;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(StaticAttributes.prototype, "DeviceId", {
            /**
             * 设备id
             */
            get: function () {
                if (gameApplication.IDFA) {
                    return gameApplication.IDFA;
                }
                return BrowserDetect.deviceId;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(StaticAttributes.prototype, "rTime", {
            /**
             * 注册时间
             */
            get: function () {
                if (isNullOrEmpty(this._rTime)) {
                    this._rTime = this.DateTimeFormat(Game.time.registerSeconds);
                }
                return this._rTime;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(StaticAttributes.prototype, "lTime", {
            /**
             * 发送时间戳
             */
            get: function () {
                return this.DateTimeFormat();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(StaticAttributes.prototype, "cashs", {
            /**
             * 游戏内二级货币数量
             */
            get: function () {
                return Game.moduleModel.item.getItemNum(EItemId.dollar);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(StaticAttributes.prototype, "coins", {
            /**
             * 游戏内一级货币数量
             */
            get: function () {
                return Game.moduleModel.item.getItemNum(EItemId.gold);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(StaticAttributes.prototype, "levels", {
            /**
             * 当前等级
             */
            get: function () {
                return User.info.level;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(StaticAttributes.prototype, "uuid", {
            /**
             * uid
             */
            get: function () {
                return User.account.userId.toString();
            },
            enumerable: true,
            configurable: true
        });
        return StaticAttributes;
    }());
    Games.StaticAttributes = StaticAttributes;
})(Games || (Games = {}));
//# sourceMappingURL=StaticAttributes.js.map