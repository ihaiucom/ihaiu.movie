var Games;
(function (Games) {
    /** Tick处理器 */
    var TickHandler = /** @class */ (function () {
        function TickHandler() {
            //---------- 配置参数 -----------------------
            /** 心跳时间(单位毫秒) */
            this.heartbeat = 1000;
            //---------- 其他参数 -----------------------
            /** 是否初始化完毕 */
            this.isInited = false;
            /** 最后一次执行时间(秒) */
            this.lastUpdateTime = 0;
        }
        /** 启动 */
        TickHandler.prototype.beginInit = function () {
        };
        /** 启动完成 */
        TickHandler.prototype.endInit = function () {
            this.isInited = true;
        };
        /** 执行前提条件 */
        TickHandler.prototype.precondition = function () {
            return true;
        };
        /** 执行 */
        TickHandler.prototype.update = function () {
        };
        return TickHandler;
    }());
    Games.TickHandler = TickHandler;
})(Games || (Games = {}));
//# sourceMappingURL=TickHandler.js.map