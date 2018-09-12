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
        /** Tick处理器 -- 卸载Icon类型的资源 */
        var ClearSpriteTickHandler = /** @class */ (function (_super) {
            __extends(ClearSpriteTickHandler, _super);
            function ClearSpriteTickHandler() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            /** 启动 */
            ClearSpriteTickHandler.prototype.beginInit = function () {
                // 心跳时间(单位毫秒)
                this.heartbeat = 1000;
                // 调启动完成
                this.endInit();
            };
            /** 执行 */
            ClearSpriteTickHandler.prototype.update = function () {
                var list = FGLoader.freeList;
                while (list.length > 0) {
                    var url = list.pop();
                    console.log("--ClearRes:" + url);
                    FGLoader.removeFree(url);
                    Laya.loader.clearRes(url);
                }
            };
            return ClearSpriteTickHandler;
        }(Games.TickHandler));
        Ticks.ClearSpriteTickHandler = ClearSpriteTickHandler;
    })(Ticks = Games.Ticks || (Games.Ticks = {}));
})(Games || (Games = {}));
//# sourceMappingURL=ClearSpriteTickHandler.js.map