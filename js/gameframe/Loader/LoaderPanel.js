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
    // 加载界面
    //----------------------
    var LoaderPanel = /** @class */ (function (_super) {
        __extends(LoaderPanel, _super);
        function LoaderPanel() {
            var _this = _super.call(this) || this;
            // 消息--显示完成
            _this.sShowComplete = new Signal();
            // 消息--隐藏完成
            _this.sHideComplete = new Signal();
            return _this;
        }
        LoaderPanel.prototype.onInit = function () {
            _super.prototype.onInit.call(this);
        };
        // 设置内容是否显示
        LoaderPanel.prototype.getContentVisiable = function () {
            if (this.contentPane) {
                return this.contentPane.visible;
            }
            return false;
        };
        LoaderPanel.prototype.setContentVisiable = function (value) {
            if (this.contentPane) {
                this.contentPane.visible = value;
            }
        };
        LoaderPanel.prototype.doShowAnimation = function () {
            this.onWindowWillShow();
            _super.prototype.doShowAnimation.call(this);
        };
        LoaderPanel.prototype.doHideAnimation = function () {
            this.onWindowWillHide();
            _super.prototype.doHideAnimation.call(this);
        };
        // 显示完成
        LoaderPanel.prototype.onShown = function () {
            this.sShowComplete.dispatch();
        };
        // 隐藏完成
        LoaderPanel.prototype.onHide = function () {
            this.sHideComplete.dispatch();
        };
        // 设置最大值
        LoaderPanel.prototype.setMax = function (value) {
        };
        // 设置加载进度
        LoaderPanel.prototype.setValue = function (value) {
        };
        // 设置Tip
        LoaderPanel.prototype.setTip = function (tip) {
        };
        LoaderPanel.prototype.setTips = function (tips) {
        };
        // 设置版本号
        LoaderPanel.prototype.setVersion = function () {
        };
        return LoaderPanel;
    }(Games.FWindow));
    Games.LoaderPanel = LoaderPanel;
})(Games || (Games = {}));
//# sourceMappingURL=LoaderPanel.js.map