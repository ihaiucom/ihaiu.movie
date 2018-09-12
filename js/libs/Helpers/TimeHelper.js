var Games;
(function (Games) {
    var TimeHelper = /** @class */ (function () {
        function TimeHelper() {
        }
        /**
         * 返回格式 00:00:00
         * @param time 秒
         */
        TimeHelper.TimeFormat = function (time) {
            var str = "";
            var hours = Math.floor(time / 3600);
            var minutes = Math.floor((time % 3600) / 60);
            var seconds = Math.floor(time % 60);
            str += hours < 10 ? "0" + hours : hours;
            str += ":" + (minutes < 10 ? "0" + minutes : minutes);
            str += ":" + (seconds < 10 ? "0" + seconds : seconds);
            return str;
        };
        /**
         * 返回格式 x小时x分x秒
         * @param time 秒
         */
        TimeHelper.TimeFormat2 = function (time) {
            var str = "";
            var hours = Math.floor(time / 3600);
            var minutes = Math.floor((time % 3600) / 60);
            var seconds = Math.floor(time % 60);
            if (hours > 0)
                str += hours + Games.TEXT.Hour;
            str += minutes + Games.TEXT.Minute;
            str += seconds + Games.TEXT.Second;
            return str;
        };
        /**
         * 返回格式 Y-M-D-H:M:S
         * @param time 时间戳 秒
         */
        TimeHelper.DateTimeFormat = function (time, isHaveYear) {
            if (isHaveYear === void 0) { isHaveYear = true; }
            //三目运算符
            var Dates;
            if (time == null) {
                Dates = new Date();
            }
            else {
                Dates = new Date(time * 1000);
            }
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
            //秒
            // const Seconds = Dates.getSeconds() < 10 ? '0' + Dates.getSeconds() : Dates.getSeconds();
            //返回数据格式
            if (LangManager.Instance.lang == LangType.zh_cn) {
                if (isHaveYear) {
                    return Year + '-' + Months + '-' + Day + ' ' + Hours + ':' + Minutes;
                }
                else {
                    return Months + '-' + Day + ' ' + Hours + ':' + Minutes;
                }
            }
            else {
                if (isHaveYear) {
                    return Year + ' ' + TimeHelper.MonthText[Dates.getMonth()] + ' ' + Day + ', ' + Hours + ':' + Minutes;
                }
                else {
                    return TimeHelper.MonthText[Dates.getMonth()] + ' ' + Day + ', ' + Hours + ':' + Minutes;
                }
            }
        };
        /**
         * 返回格式 Y-M-D
         * @param time 单位：秒
         */
        TimeHelper.DateTimeFormat2 = function (time) {
            //三目运算符
            var Dates;
            if (time == null) {
                Dates = new Date();
            }
            else {
                Dates = new Date(time * 1000);
            }
            //年份
            var Year = Dates.getFullYear();
            //月份下标是0-11
            var Months = (Dates.getMonth() + 1) < 10 ? '0' + (Dates.getMonth() + 1) : (Dates.getMonth() + 1);
            //具体的天数
            var Day = Dates.getDate() < 10 ? '0' + Dates.getDate() : Dates.getDate();
            if (LangManager.Instance.lang == LangType.zh_cn) {
                //返回数据格式
                return Year + '-' + Months + '-' + Day;
            }
            else {
                //返回数据格式
                return Year + ' ' + TimeHelper.MonthText[Dates.getMonth()] + ' ' + Day;
            }
        };
        /**
         * 返回格式 M - D
         * @param time 单位：秒
         */
        TimeHelper.DateTimeFormat3 = function (time) {
            //三目运算符
            var Dates;
            if (time == null) {
                Dates = new Date();
            }
            else {
                Dates = new Date(time * 1000);
            }
            //月份下标是0-11
            var Months = (Dates.getMonth() + 1) < 10 ? '0' + (Dates.getMonth() + 1) : (Dates.getMonth() + 1);
            //具体的天数
            var Day = Dates.getDate() < 10 ? '0' + Dates.getDate() : Dates.getDate();
            if (LangManager.Instance.lang == LangType.zh_cn) {
                //返回数据格式
                return Months + '-' + Day;
            }
            else {
                //返回数据格式
                return TimeHelper.MonthText[Dates.getMonth()] + ' ' + Day;
            }
        };
        TimeHelper.TimeReformat1 = function (h, m, s) {
            if (h === void 0) { h = 0; }
            if (m === void 0) { m = 0; }
            if (s === void 0) { s = 0; }
            var date = new Date(Game.time.serverMilliseconds);
            date.setHours(h);
            date.setMinutes(m);
            date.setSeconds(s);
            return date.getTime();
        };
        TimeHelper.TimeReformat2 = function (time) {
            var strTimes = time.split(':');
            var h, m, s;
            if (strTimes[0]) {
                h = Number(strTimes[0]) || 0;
            }
            if (strTimes[1]) {
                m = Number(strTimes[1]) || 0;
            }
            if (strTimes[2]) {
                s = Number(strTimes[2]) || 0;
            }
            return this.TimeReformat1(h, m, s);
        };
        /**
         * 返回格式 00:00
         * @param time 秒
         */
        TimeHelper.TimeFormat3 = function (time) {
            var str = "";
            var hours = Math.floor(time / 3600);
            var minutes = Math.floor((time % 3600) / 60);
            var seconds = Math.floor(time % 60);
            str += hours == 0 ? "" : "0" + hours;
            str += (hours > 0 ? ":" : "") + (minutes < 10 ? "0" + minutes : minutes);
            str += ":" + (seconds < 10 ? "0" + seconds : seconds);
            return str;
        };
        /**
         * 返回格式 x小时x分x秒 前面为0 不显示
         * @param time 秒
         */
        TimeHelper.TimeFormat4 = function (time) {
            var str = "";
            var hours = Math.floor(time / 3600);
            var minutes = Math.floor((time % 3600) / 60);
            var seconds = Math.floor(time % 60);
            if (hours > 0)
                str += hours + Games.TEXT.Hour;
            if (minutes > 0)
                str += minutes + Games.TEXT.Minute;
            str += seconds + Games.TEXT.Second;
            return str;
        };
        TimeHelper.MonthText = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        return TimeHelper;
    }());
    Games.TimeHelper = TimeHelper;
})(Games || (Games = {}));
//# sourceMappingURL=TimeHelper.js.map