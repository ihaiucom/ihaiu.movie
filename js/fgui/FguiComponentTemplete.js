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
var fgui;
(function (fgui) {
    // 组件代码模版, 没有用到的方法尽量删掉
    var FguiComponentTemplete = /** @class */ (function (_super) {
        __extends(FguiComponentTemplete, _super);
        function FguiComponentTemplete() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        // 窗口初始化完毕
        FguiComponentTemplete.prototype.onWindowInited = function () {
        };
        // 窗口销毁
        FguiComponentTemplete.prototype.onWindowDestory = function () {
        };
        // 窗口显示
        FguiComponentTemplete.prototype.onWindowShow = function () {
        };
        // 窗口隐藏
        FguiComponentTemplete.prototype.onWindowHide = function () {
        };
        // 该组件所在Tab 显示
        FguiComponentTemplete.prototype.onTabShow = function () {
        };
        // 该组件所在Tab 隐藏
        FguiComponentTemplete.prototype.onTabHide = function () {
        };
        return FguiComponentTemplete;
    }(fairygui.GComponent));
    fgui.FguiComponentTemplete = FguiComponentTemplete;
})(fgui || (fgui = {}));
//# sourceMappingURL=FguiComponentTemplete.js.map