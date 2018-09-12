var Games;
(function (Games) {
    var DanmuData = /** @class */ (function () {
        function DanmuData() {
        }
        DanmuData.CreateByProto = function (msg) {
            var danmu = new DanmuData();
            danmu.id = msg.id;
            danmu.name = msg.name;
            danmu.time = msg.time;
            danmu.MsgAnalysis(msg.msg);
            return danmu;
        };
        DanmuData.Create = function (msg, flag) {
            var danmu = new DanmuData();
            danmu.msg = msg;
            danmu.flag = flag;
            return danmu;
        };
        DanmuData.prototype.MsgAnalysis = function (msg) {
            this.msg = msg.substr(0, msg.length - 1);
            this.flag = parseInt(msg.substr(msg.length - 1, 1));
            if (this.flag == null) {
                this.flag = 0;
            }
        };
        return DanmuData;
    }());
    Games.DanmuData = DanmuData;
})(Games || (Games = {}));
//# sourceMappingURL=DanmuData.js.map