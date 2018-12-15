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
    // 商店窗口
    //----------------------
    var ShopWindow = /** @class */ (function (_super) {
        __extends(ShopWindow, _super);
        function ShopWindow() {
            var _this = _super.call(this) || this;
            // 添加依赖资源
            _this.addAssetForFguiComponent(fgui.PfSkin.ShopMainPanel);
            return _this;
        }
        // 菜单创建
        ShopWindow.prototype.onMenuCreate = function () {
            this.conent = fgui.PfSkin.ShopMainPanel.createInstance();
            this.contentPane = this.conent;
            _super.prototype.onMenuCreate.call(this);
        };
        // 菜单打开事件，传递参数
        ShopWindow.prototype.onMenuOpen = function (parameter) {
            _super.prototype.onMenuOpen.call(this, parameter);
            this.conent.onWindowOpen(parameter.args);
        };
        //=========================
        // 显示完成
        // 可以在这里添加协议消息监听
        //-------------------------
        ShopWindow.prototype.onShowComplete = function () {
            _super.prototype.onShowComplete.call(this);
        };
        //=========================
        // 隐藏完成
        // 可以在这里移除协议消息监听
        //-------------------------
        ShopWindow.prototype.onHideComplete = function () {
            _super.prototype.onHideComplete.call(this);
        };
        return ShopWindow;
    }(Games.MWindow));
    Games.ShopWindow = ShopWindow;
})(Games || (Games = {}));
//# sourceMappingURL=ShopWindow.js.map