var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Games;
(function (Games) {
    var Ticks;
    (function (Ticks) {
        /** Tick处理器 -- 卸载骨骼动画 */
        var ClearSkeletonTickHandler = /** @class */ (function (_super) {
            __extends(ClearSkeletonTickHandler, _super);
            function ClearSkeletonTickHandler() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            /** 启动 */
            ClearSkeletonTickHandler.prototype.beginInit = function () {
                // 心跳时间(单位毫秒)
                this.heartbeat = 1000;
                // 调启动完成
                this.endInit();
            };
            /** 执行 */
            ClearSkeletonTickHandler.prototype.update = function () {
                // GameBoone.skeletonCache.tickClear(false);
            };
            return ClearSkeletonTickHandler;
        }(Games.TickHandler));
        Ticks.ClearSkeletonTickHandler = ClearSkeletonTickHandler;
    })(Ticks = Games.Ticks || (Games.Ticks = {}));
})(Games || (Games = {}));
//# sourceMappingURL=ClearSkeletonHandler.js.map