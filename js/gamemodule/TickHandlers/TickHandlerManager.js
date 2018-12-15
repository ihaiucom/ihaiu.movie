var Games;
(function (Games) {
    //====================
    // Tick处理器管理器
    //--------------------
    var TickHandlerManager = /** @class */ (function () {
        function TickHandlerManager() {
            this.list = [];
            this.count = 0;
            this.serverMilliseconds = 0;
        }
        Object.defineProperty(TickHandlerManager, "Instance", {
            /**
             * 获取单例实例
             */
            get: function () {
                var Class = this;
                if (Class.__instance == null) {
                    Class.__instance = new Class();
                }
                return Class.__instance;
            },
            enumerable: true,
            configurable: true
        });
        // 添加	
        TickHandlerManager.prototype.addTick = function (took) {
            this.list.push(took);
        };
        // 初始化订阅列表
        TickHandlerManager.prototype.initTookList = function () {
            for (var itemKey in Games.Ticks) {
                var cls = Games.Ticks[itemKey];
                var obj = new cls();
                this.addTick(obj);
            }
        };
        // 启动
        TickHandlerManager.prototype.start = function () {
            // 初始化订阅列表
            this.initTookList();
            this.count = this.list.length;
            Laya.timer.loop(1000, this, this.onTick);
        };
        // 停止
        TickHandlerManager.prototype.stop = function () {
            Laya.timer.clear(this, this.onTick);
        };
        // 刷新		
        TickHandlerManager.prototype.onTick = function () {
            this.serverMilliseconds = Game.time.localTime;
            for (var i = 0; i < this.count; i++) {
                var took = this.list[i];
                if (this.validate(took)) {
                    took.lastUpdateTime = this.serverMilliseconds;
                    took.update();
                }
            }
        };
        // 验证是否可以执行
        TickHandlerManager.prototype.validate = function (took) {
            var result = this.serverMilliseconds - took.lastUpdateTime >= took.heartbeat;
            if (result) {
                if (!took.isInited) {
                    took.beginInit();
                    result = took.isInited;
                }
                if (result) {
                    result = took.precondition();
                }
            }
            return result;
        };
        return TickHandlerManager;
    }());
    Games.TickHandlerManager = TickHandlerManager;
})(Games || (Games = {}));
//# sourceMappingURL=TickHandlerManager.js.map