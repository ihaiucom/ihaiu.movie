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
    // 模版窗口, 没有用到的方法尽量删掉
    //----------------------
    var GoldExchangeWindow = /** @class */ (function (_super) {
        __extends(GoldExchangeWindow, _super);
        function GoldExchangeWindow() {
            var _this = _super.call(this) || this;
            // 添加依赖资源
            _this.addAssetForFguiComponent(fgui.GoldExchange.GoldExchangeView);
            return _this;
        }
        // 菜单创建
        GoldExchangeWindow.prototype.onMenuCreate = function () {
            this.conent = fgui.GoldExchange.GoldExchangeView.createInstance();
            this.contentPane = this.conent;
            // this.center();
            // //弹出窗口的动效已中心为轴心
            // this.setPivot(0.5, 0.5);
            // 注册Tab
            _super.prototype.onMenuCreate.call(this);
        };
        return GoldExchangeWindow;
    }(Games.MWindow));
    Games.GoldExchangeWindow = GoldExchangeWindow;
})(Games || (Games = {}));
//# sourceMappingURL=GoldExchangeWindow.js.map