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
    var GuideCompleteWindow = /** @class */ (function (_super) {
        __extends(GuideCompleteWindow, _super);
        function GuideCompleteWindow() {
            var _this = _super.call(this) || this;
            // 添加依赖资源
            _this.addAssetForFguiComponent(fgui.GuideComplete.GuideCompleteUI);
            return _this;
        }
        // 生成动态预加载资源
        GuideCompleteWindow.prototype.generateAssetsForDynmic = function () {
            _super.prototype.generateAssetsForDynmic.call(this);
        };
        // 菜单创建
        GuideCompleteWindow.prototype.onMenuCreate = function () {
            this.conent = fgui.GuideComplete.GuideCompleteUI.createInstance();
            this.contentPane = this.conent;
            _super.prototype.onMenuCreate.call(this);
        };
        //=========================
        // 显示完成
        // 可以在这里添加协议消息监听
        //-------------------------
        GuideCompleteWindow.prototype.onShowComplete = function () {
            _super.prototype.onShowComplete.call(this);
        };
        //=========================
        // 隐藏完成
        // 可以在这里移除协议消息监听
        //-------------------------
        GuideCompleteWindow.prototype.onHideComplete = function () {
            _super.prototype.onHideComplete.call(this);
        };
        return GuideCompleteWindow;
    }(Games.MWindow));
    Games.GuideCompleteWindow = GuideCompleteWindow;
})(Games || (Games = {}));
//# sourceMappingURL=GuideCompleteWindow.js.map