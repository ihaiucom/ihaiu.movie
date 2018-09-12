var Games;
(function (Games) {
    var Tick = /** @class */ (function () {
        function Tick() {
            this.isStart = false;
            // 当前次数
            this.curentTimes = 0;
            // 当前计时
            this.currentClock = 0;
        }
        Tick.CreateTick = function (distance, targetTimes, clockHandler, finishHandler) {
            var tick = new Tick();
            tick.isStart = false;
            tick.distance = distance;
            tick.targetTimes = targetTimes;
            tick.clockHandler = clockHandler;
            tick.finishHandler = finishHandler;
            return tick;
        };
        ;
        Tick.prototype.UpdateTime = function () {
            if (!this.isStart) {
                return;
            }
            this.currentClock++;
            if (this.currentClock >= this.distance) {
                this.currentClock = 0;
                this.curentTimes++;
                if (this.targetTimes > 0 && this.curentTimes >= this.targetTimes) {
                    if (this.finishHandler) {
                        this.isStart = false;
                        this.finishHandler.run();
                    }
                }
                else {
                    // console.log(this.curentTimes);
                    if (this.clockHandler) {
                        this.clockHandler.runWith(this.targetTimes - this.curentTimes);
                    }
                }
            }
        };
        Object.defineProperty(Tick.prototype, "Times", {
            get: function () {
                return this.curentTimes;
            },
            enumerable: true,
            configurable: true
        });
        Tick.prototype.SetDistance = function (distance) {
            this.distance = distance;
            return this;
        };
        Tick.prototype.SetTargetTimes = function (target) {
            this.targetTimes = target;
            return this;
        };
        Tick.prototype.Start = function () {
            this.isStart = true;
            if (this.clockHandler) {
                this.clockHandler.runWith(this.targetTimes - this.curentTimes);
            }
        };
        Tick.prototype.Restart = function () {
            this.curentTimes = 0;
            this.currentClock = 0;
            this.isStart = true;
            if (this.clockHandler) {
                this.clockHandler.runWith(this.targetTimes - this.curentTimes);
            }
        };
        Tick.prototype.Continue = function () {
            this.isStart = true;
        };
        Tick.prototype.Stop = function () {
            this.isStart = false;
        };
        return Tick;
    }());
    Games.Tick = Tick;
    var TickManager = /** @class */ (function () {
        function TickManager() {
            this.list = new Array();
        }
        TickManager.prototype.install = function () {
            var tick = this.AddTick(1, 0, null, null);
            tick.Start();
            Laya.timer.loop(1000, this, this.LoopUpdateTime);
        };
        /**
         * 每秒刷新一次
         * @param distance :间隔时间 秒
         * @param targetTimes ：目标计数次数（共计数多少个间隔时间，小于等于0时无限循环）
         * @param clockHandler ：计数时回调（每个间隔时间回调）
         * @param finishHandler ：计数完成回调
         */
        TickManager.prototype.AddTick = function (distance, targetTimes, clockHandler, finishHandler) {
            var tick = Tick.CreateTick(distance, targetTimes, clockHandler, finishHandler);
            this.list.push(tick);
            return tick;
        };
        TickManager.prototype.ClearTick = function (tick) {
            var index = this.list.indexOf(tick);
            if (index >= 0) {
                this.list.splice(index, 1);
            }
        };
        TickManager.prototype.LoopUpdateTime = function () {
            for (var _i = 0, _a = this.list; _i < _a.length; _i++) {
                var tick = _a[_i];
                this.UpdateTime(tick);
            }
        };
        TickManager.prototype.UpdateTime = function (tick) {
            tick.UpdateTime();
        };
        return TickManager;
    }());
    Games.TickManager = TickManager;
})(Games || (Games = {}));
//# sourceMappingURL=TickManager.js.map