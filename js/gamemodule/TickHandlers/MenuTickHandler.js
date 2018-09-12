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
        /** Tick处理器 -- 模块销毁 */
        var MenuTickHandler = /** @class */ (function (_super) {
            __extends(MenuTickHandler, _super);
            function MenuTickHandler() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            /** 启动 */
            MenuTickHandler.prototype.beginInit = function () {
                // 心跳时间(单位毫秒)
                this.heartbeat = 1000;
                // 调启动完成
                this.endInit();
            };
            /** 执行 */
            MenuTickHandler.prototype.update = function () {
                Game.menu.onTick();
            };
            return MenuTickHandler;
        }(Games.TickHandler));
        Ticks.MenuTickHandler = MenuTickHandler;
    })(Ticks = Games.Ticks || (Games.Ticks = {}));
})(Games || (Games = {}));
//# sourceMappingURL=MenuTickHandler.js.map