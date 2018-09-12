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
    //======================
    // 登录窗口
    //----------------------
    var OrderWindow = /** @class */ (function (_super) {
        __extends(OrderWindow, _super);
        function OrderWindow() {
            var _this = _super.call(this) || this;
            // 添加依赖资源
            _this.addAssetForFguiComponent(fgui.Manage.ManagerOrderUI);
            return _this;
        }
        // 菜单创建
        OrderWindow.prototype.onMenuCreate = function () {
            this.conent = fgui.Manage.ManagerOrderUI.createInstance();
            this.contentPane = this.conent;
            this.center();
            //弹出窗口的动效已中心为轴心
            this.setPivot(0.5, 0.5);
            _super.prototype.onMenuCreate.call(this);
        };
        // 菜单打开事件，传递参数
        OrderWindow.prototype.onMenuOpen = function (parameter) {
            _super.prototype.onMenuOpen.call(this, parameter);
        };
        //=========================
        // 显示完成
        // 可以在这里添加协议消息监听
        //-------------------------
        OrderWindow.prototype.onShowComplete = function () {
            _super.prototype.onShowComplete.call(this);
        };
        //=========================
        // 隐藏完成
        // 可以在这里移除协议消息监听
        //-------------------------
        OrderWindow.prototype.onHideComplete = function () {
            _super.prototype.onHideComplete.call(this);
        };
        OrderWindow.prototype.guideSelectOrder = function () {
            return this.conent.guideSelectOrder();
        };
        OrderWindow.prototype.guideBoxItem = function () {
            var arg = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                arg[_i] = arguments[_i];
            }
            return this.conent.guideBoxItem(arg[0]);
        };
        return OrderWindow;
    }(Games.MWindow));
    Games.OrderWindow = OrderWindow;
})(Games || (Games = {}));
//# sourceMappingURL=OrderWindow.js.map