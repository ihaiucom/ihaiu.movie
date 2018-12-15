var Games;
(function (Games) {
    var DriverTimeData = /** @class */ (function () {
        function DriverTimeData() {
            this.deltaTime = 0.0333; //秒
        }
        return DriverTimeData;
    }());
    Games.DriverTimeData = DriverTimeData;
    var DriverTime = /** @class */ (function () {
        function DriverTime() {
            this.fixedDeltaTime = 0.02; //秒
        }
        DriverTime.prototype.init = function () {
            this.updateTime = new DriverTimeData();
            this.renderTime = new DriverTimeData();
        };
        return DriverTime;
    }());
    Games.DriverTime = DriverTime;
})(Games || (Games = {}));
//# sourceMappingURL=DriverTime.js.map