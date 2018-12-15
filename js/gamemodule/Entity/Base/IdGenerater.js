var Games;
(function (Games) {
    var IdGenerater = /** @class */ (function () {
        function IdGenerater() {
        }
        IdGenerater.GenerateId = function () {
            var time = laya.utils.Browser.now() / 1000;
            return (this.AppId << 48) + (time >> 16) + ++this.value;
        };
        IdGenerater.getAppId = function (id) {
            return Number(id >> 48);
        };
        IdGenerater.AppId = 1000;
        IdGenerater.value = 1;
        return IdGenerater;
    }());
    Games.IdGenerater = IdGenerater;
})(Games || (Games = {}));
//# sourceMappingURL=IdGenerater.js.map