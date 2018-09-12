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
    var BusinessWindow = /** @class */ (function (_super) {
        __extends(BusinessWindow, _super);
        function BusinessWindow() {
            var _this = _super.call(this) || this;
            // 添加依赖资源
            _this.addAssetForFguiComponent(fgui.Manage.BusinessUI);
            return _this;
        }
        // 生成动态预加载资源
        BusinessWindow.prototype.generateAssetsForDynmic = function () {
            _super.prototype.generateAssetsForDynmic.call(this);
        };
        // 菜单创建
        BusinessWindow.prototype.onMenuCreate = function () {
            this.conent = fgui.Manage.BusinessUI.createInstance();
            this.contentPane = this.conent;
            this.center();
            //弹出窗口的动效已中心为轴心
            this.setPivot(0.5, 0.5);
            // 注册Tab
            _super.prototype.onMenuCreate.call(this);
        };
        return BusinessWindow;
    }(Games.MWindow));
    Games.BusinessWindow = BusinessWindow;
})(Games || (Games = {}));
//# sourceMappingURL=BusinessWindow.js.map