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
                var date = new Date(this.time * 1000);
                var hours = date.getHours();
                var minutes = date.getMinutes();
                var str = "";
                str += hours < 10 ? "0" + hours : hours;
                str += ":" + (minutes < 10 ? "0" + minutes : minutes);
                return str;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DailyEventData.prototype, "isToday", {
            get: function () {
                var date = new Date(this.time * 1000);
                var nowDate = new Date(Game.time.serverMilliseconds);
                if (date.getDay() == nowDate.getDay()) {
                    return true;
                }
                return false;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DailyEventData.prototype, "hasData", {
            get: function () {
                var date = new Date(this.time * 1000);
                var nowDate = new Date(Game.time.serverMilliseconds);
                if (date.getDay() == nowDate.getDay()) {
                    if (date.getTime() < nowDate.getTime()) {
                        return true;
                    }
                    else {
                        return false;
                    }
                }
                else {
                    if (nowDate.getHours() < Game.config.global.getConfig(GlobalKey.KEY_25_AoSiKaBanJiangShiJian).value) {
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