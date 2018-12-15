var Games;
(function (Games) {
    var DailyEventType;
    (function (DailyEventType) {
        DailyEventType[DailyEventType["Movie"] = 1] = "Movie";
        DailyEventType[DailyEventType["Awards"] = 2] = "Awards";
    })(DailyEventType = Games.DailyEventType || (Games.DailyEventType = {}));
    var DailyEventData = /** @class */ (function () {
        function DailyEventData() {
        }
        DailyEventData.CreateByProto = function (msg) {
            var data = new DailyEventData();
            data.time = msg.time;
            data.uuid = msg.uuid;
            data.name = msg.name;
            data.type = DailyEventType.Movie;
            return data;
        };
        DailyEventData.Create = function (type, time, name) {
            var data = new DailyEventData();
            data.time = time;
            data.name = name;
            data.type = type;
            return data;
        };
        DailyEventData.sort = function (a, b) {
            return a.time - b.time;
        };
        Object.defineProperty(DailyEventData.prototype, "Name", {
            get: function () {
                if (this.type == DailyEventType.Movie) {
                    return Games.TEXT.OscarMovie.format(this.name);
                }
                return this.name;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DailyEventData.prototype, "TimeNum", {
            get: function () {
                return this.time;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DailyEventData.prototype, "Time", {
            get: function () {
                return Games.TimeHelper.DateTimeFormat4(this.time);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DailyEventData.prototype, "isToday", {
            get: function () {
                return Games.TimeHelper.IsSameDay(this.time, Game.time.serverSeconds);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DailyEventData.prototype, "isYestody", {
            get: function () {
                return Games.TimeHelper.IsSameDay(this.time, Game.time.serverSeconds - 24 * 60 * 60);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DailyEventData.prototype, "hasData", {
            get: function () {
                if (!Game.moduleModel.oscar.isUnLockOscar) {
                    return false;
                }
                if (this.isToday) {
                    if (this.time < Game.time.serverSeconds) {
                        return true;
                    }
                    else {
                        return false;
                    }
                }
                else {
                    if (!Games.TimeHelper.IsBeyondTimeInSameDay(Game.time.serverSeconds, Game.config.global.OscarHour)) {
                        return true;
                    }
                    else {
                        return false;
                    }
                }
            },
            enumerable: true,
            configurable: true
        });
        return DailyEventData;
    }());
    Games.DailyEventData = DailyEventData;
})(Games || (Games = {}));
//# sourceMappingURL=DailyEventData.js.map