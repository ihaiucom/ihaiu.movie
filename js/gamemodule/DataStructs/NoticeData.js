var Games;
(function (Games) {
    var NoticeData = /** @class */ (function () {
        function NoticeData() {
            this.itemList = [];
        }
        NoticeData.CreateByProto = function (msg) {
            var notice = new NoticeData();
            notice.title = msg.title;
            notice.content = msg.content;
            notice.itemList = Games.ItemData.BinningItemList(msg.itemList);
            notice.time = this.TimeAnalysis(msg.messageDetailUrl);
            notice.AddTick();
            return notice;
        };
        NoticeData.TimeAnalysis = function (str) {
            var time = parseInt(str);
            return time;
        };
        NoticeData.prototype.AddTick = function () {
            var time = this.time - Game.time.serverSeconds;
            if (time > NoticeData.PreNoticeTime) {
                this.tick = Game.tick.AddTick(1, time - NoticeData.PreNoticeTime, Handler.create(this, this.OnTickClock, null, false), Handler.create(this, this.OnTickFinish1, null, false));
                this.tick.Restart();
            }
            else if (time > 0) {
                this.OnTickFinish1();
            }
            else {
                return;
            }
        };
        NoticeData.prototype.AddTick2 = function () {
            var time = this.time - Game.time.serverSeconds;
            this.tick = Game.tick.AddTick(1, time, Handler.create(this, this.OnTickClock, null, false), Handler.create(this, this.OnTickFinish2, null, false));
            this.tick.Restart();
        };
        NoticeData.prototype.ClearTick = function () {
            if (this.tick) {
                this.tick.Stop();
                Game.tick.ClearTick(this.tick);
                this.tick = null;
            }
        };
        NoticeData.prototype.OnTickClock = function (times) {
            // console.log(times);
        };
        NoticeData.prototype.OnTickFinish1 = function () {
            Game.system.alrtTextFull(this.content, this.title);
            this.AddTick2();
        };
        NoticeData.prototype.OnTickFinish2 = function () {
            Game.system.alrtTextFull(Games.TEXT.NoticeServerClose, Games.TEXT.NoticeTitle, null, function () {
                // TODO 退出游戏
            });
        };
        NoticeData.PreNoticeTime = 30 * 60;
        return NoticeData;
    }());
    Games.NoticeData = NoticeData;
})(Games || (Games = {}));
//# sourceMappingURL=NoticeData.js.map