var Games;
(function (Games) {
    var Browser = laya.utils.Browser;
    /** 游戏帧驱动管理 */
    var GameDriver = /** @class */ (function () {
        function GameDriver() {
        }
        GameDriver.init = function () {
            this.time = new Games.DriverTime();
            this.time.init();
            this.updateTimeSpan = Browser.now();
            this.renderTimeSpan = Browser.now();
            Laya.timer.loop(this.deltaTimeUpdateInMs, this, this.onUpdate);
            Laya.timer.loop(this.deltaTimeRenderInMs, this, this.onRender);
            Laya.timer.loop(this.deltaTimeSecondInMs, this, this.onSeconds);
        };
        GameDriver.registerDriver = function (driver) {
            if (driver.isUpdateTick)
                this.updateDrivers.push(driver);
            if (driver.isRenderTick)
                this.renderDrivers.push(driver);
            if (driver.isSecondsTick)
                this.secondDrivers.push(driver);
        };
        GameDriver.unregisterDriver = function (driver) {
            if (driver.isUpdateTick)
                this.removeUpdateDrivers.push(driver);
            if (driver.isRenderTick)
                this.removeRenderDrivers.push(driver);
            if (driver.isSecondsTick)
                this.removeSecondDrivers.push(driver);
        };
        /** 逻辑更新 */
        GameDriver.onUpdate = function () {
            /** 时间间隔 */
            this.time.updateTime.deltaTime = (Browser.now() - this.updateTimeSpan) / 1000;
            this.updateTimeSpan = Browser.now();
            var driverCount = this.updateDrivers.length;
            for (var i = 0; i < driverCount; i++) {
                this.updateDrivers[i].onUpdate();
            }
            var removeCount = this.removeUpdateDrivers.length;
            for (var i = removeCount - 1; i >= 0; i--) {
                var index = this.updateDrivers.indexOf(this.removeUpdateDrivers[i]);
                if (index != -1) {
                    this.updateDrivers.splice(index, 1);
                }
                this.removeUpdateDrivers.splice(i, 1);
            }
        };
        /** 渲染更新 */
        GameDriver.onRender = function () {
            /** 时间间隔 */
            this.time.renderTime.deltaTime = (Browser.now() - this.renderTimeSpan) / 1000;
            this.renderTimeSpan = Browser.now();
            var driverCount = this.renderDrivers.length;
            for (var i = 0; i < driverCount; i++) {
                this.renderDrivers[i].onRender();
            }
            var removeCount = this.removeRenderDrivers.length;
            for (var i = removeCount - 1; i >= 0; i--) {
                var index = this.renderDrivers.indexOf(this.removeRenderDrivers[i]);
                if (index != -1) {
                    this.renderDrivers.splice(index, 1);
                }
                this.removeRenderDrivers.splice(i, 1);
            }
        };
        /** 秒更新 */
        GameDriver.onSeconds = function () {
            var driverCount = this.secondDrivers.length;
            for (var i = 0; i < driverCount; i++) {
                this.secondDrivers[i].onSeconds();
            }
            var removeCount = this.removeSecondDrivers.length;
            for (var i = removeCount - 1; i >= 0; i--) {
                var index = this.secondDrivers.indexOf(this.removeSecondDrivers[i]);
                if (index != -1) {
                    this.secondDrivers.splice(index, 1);
                }
                this.removeSecondDrivers.splice(i, 1);
            }
        };
        GameDriver.updateDrivers = [];
        GameDriver.removeUpdateDrivers = [];
        GameDriver.renderDrivers = [];
        GameDriver.removeRenderDrivers = [];
        GameDriver.secondDrivers = [];
        GameDriver.removeSecondDrivers = [];
        /** 计时器Loop*/
        GameDriver.deltaTimeUpdateInMs = 50;
        GameDriver.deltaTimeRenderInMs = 20;
        GameDriver.deltaTimeSecondInMs = 1000;
        GameDriver.updateTimeSpan = 0;
        GameDriver.renderTimeSpan = 0;
        return GameDriver;
    }());
    Games.GameDriver = GameDriver;
})(Games || (Games = {}));
//# sourceMappingURL=GameDriver.js.map