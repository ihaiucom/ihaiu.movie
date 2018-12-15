var Games;
(function (Games) {
    var NoticeModel = /** @class */ (function () {
        function NoticeModel() {
            this.listNotice = [];
            this.dicNotice = new Dictionary();
        }
        NoticeModel.prototype.install = function () {
        };
        NoticeModel.prototype.UpdateNoticeMsg = function (msg) {
            for (var index = 0; index < msg.length; index++) {
                var data = msg[index];
                if (this.dicNotice.getValue(data.messageDetailUrl) == null) {
                    var notice = Games.NoticeData.CreateByProto(data);
                    this.dicNotice.add(data.messageDetailUrl, notice);
                }
            }
        };
        NoticeModel.prototype.LocalData = function () {
            var _this = this;
            var data = new Proto.SS.Notice();
            data.content = "test--------test";
            data.title = "test";
            data.itemList = [];
            data.messageDetailUrl = (Game.time.serverSeconds + 60).toString();
            this.UpdateNoticeMsg([data]);
            setTimeout(function () {
                _this.UpdateNoticeMsg([data]);
            }, 5000);
        };
        return NoticeModel;
    }());
    Games.NoticeModel = NoticeModel;
})(Games || (Games = {}));
//# sourceMappingURL=NoticeModel.js.map