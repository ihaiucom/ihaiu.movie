var Games;
(function (Games) {
    /**
     * 统计协议
     */
    var StatisProto = /** @class */ (function () {
        function StatisProto() {
            this.channel = "business";
            this.level = 5; // 固定值
            this.message = new Games.StaticMessage();
        }
        Object.defineProperty(StatisProto.prototype, "filter", {
            get: function () {
                if (gameApplication.IDFA) {
                    return gameApplication.IDFA;
                }
                return BrowserDetect.deviceId;
            },
            enumerable: true,
            configurable: true
        });
        StatisProto.prototype.toJson = function () {
            return JSON.stringify(this);
        };
        return StatisProto;
    }());
    Games.StatisProto = StatisProto;
})(Games || (Games = {}));
//# sourceMappingURL=StatisProto.js.map