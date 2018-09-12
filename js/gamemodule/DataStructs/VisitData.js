var Games;
(function (Games) {
    var VisitData = /** @class */ (function () {
        function VisitData() {
            //最大时间
            this.tomaxTimeOut = 0;
        }
        Object.defineProperty(VisitData.prototype, "actorId", {
            get: function () {
                return this._actorId;
            },
            set: function (value) {
                this._actorId = value;
                if (value > 0) {
                    this.actorConfig = Game.config.actor.getConfig(value);
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(VisitData.prototype, "leaveTime", {
            //粉丝离开时间
            get: function () {
                return this.startTime + EManageVisit.overdueTime;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(VisitData.prototype, "id", {
            get: function () {
                return this._id;
            },
            set: function (value) {
                this._id = value;
                if (this._id > 0) {
                    this.config = Game.config.visit.getConfig(value);
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(VisitData.prototype, "nextFansNum", {
            //获取需要探班的粉丝数量
            get: function () {
                var nowTime = Game.time.serverSeconds;
                var lastTime = this.lastTime;
                var duration = Math.max(0, nowTime - lastTime);
                var num = Math.floor(duration / this.intervalTime);
                if (this.isWaiting) {
                    num = num + 1;
                }
                num = Math.min(this.lineLimit, num);
                return num;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(VisitData.prototype, "isLeave", {
            //粉丝是否离开
            get: function () {
                var nowTime = Game.time.serverSeconds;
                //过期时间
                var nextTime = this.leaveTime;
                //倒计时
                var duration = Math.max(0, nextTime - nowTime);
                var b = false;
                //
                if (duration <= 0) {
                    b = true;
                }
                // console.log("粉丝是否离开", b, "当前时间:" + nowTime, "过期时间" + nextTime)
                return b;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(VisitData.prototype, "isWaiting", {
            //是否正在等候		
            get: function () {
                var b = false;
                if (this.id > 0 && this._actorId > 0 && this.isLeave == false) {
                    b = true;
                }
                return b;
            },
            enumerable: true,
            configurable: true
        });
        VisitData.prototype.clearVisitTimeOut = function () {
            clearTimeout(this.visitTimeOut);
        };
        VisitData.prototype.starTimeToVisit = function () {
            var _this = this;
            this.clearVisitTimeOut();
            var nowTime = Game.time.serverSeconds;
            //过期时间
            var nextTime = this.leaveTime;
            //倒计时
            var duration = Math.max(0, nextTime - nowTime);
            if (this.id > 0 && duration > 0) {
                this.visitTimeOut = setTimeout(function () {
                    _this._id = 0;
                    Game.event.dispatch(GameEventKey.GameEventKey_UpdateVisitActor);
                }, duration * 1000);
            }
        };
        //开始定时器
        VisitData.prototype.startToMaxTime = function () {
            //
            if (this.tomaxTimeOut > 0) {
                clearTimeout(this.tomaxTimeOut);
                this.tomaxTimeOut = 0;
            }
            //
            var nowTime = Game.time.serverSeconds;
            var nextNum = this.nextFansNum;
            //
            if (nextNum < this.lineLimit) {
                var duration = (this.lineLimit - nextNum) * this.intervalTime;
                this.tomaxTimeOut = setTimeout(function () {
                    Game.event.dispatch(GameEventKey.GameEventKey_UpdateMainUIRed);
                }, duration * 1000);
            }
            Game.event.dispatch(GameEventKey.GameEventKey_UpdateMainUIRed);
        };
        Object.defineProperty(VisitData.prototype, "nextFansComeTime", {
            //新粉丝到来时间
            get: function () {
                var nowTime = Game.time.serverSeconds;
                var lastTime = this.lastTime + this.intervalTime;
                return Math.max(0, lastTime - nowTime);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(VisitData.prototype, "actorData", {
            //
            get: function () {
                return Game.moduleModel.actor.getActor(this._actorId);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(VisitData.prototype, "isMax", {
            //最大
            get: function () {
                return this.nextFansNum >= this.lineLimit;
            },
            enumerable: true,
            configurable: true
        });
        return VisitData;
    }());
    Games.VisitData = VisitData;
})(Games || (Games = {}));
//# sourceMappingURL=VisitData.js.map