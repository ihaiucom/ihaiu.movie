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
    // 加载界面--进入游戏
    //----------------------
    var LoaderEnterPanel = /** @class */ (function (_super) {
        __extends(LoaderEnterPanel, _super);
        function LoaderEnterPanel() {
            return _super.call(this) || this;
        }
        LoaderEnterPanel.prototype.onInit = function () {
            this.loader = fgui.System.LoaderEnterGame.createInstance();
            this.contentPane = this.loader;
            // this.center();
            //弹出窗口的动效已中心为轴心
            // this.setPivot(0.5, 0.5);
            _super.prototype.onInit.call(this);
        };
        // 设置最大值
        LoaderEnterPanel.prototype.setMax = function (value) {
            this.loader.m_progressBar.max = value;
        };
        // 设置加载进度
        LoaderEnterPanel.prototype.setValue = function (value) {
            this.loader.m_progressBar.value = value;
        };
        // 设置Tip
        LoaderEnterPanel.prototype.setTip = function (tip) {
            this.loader.m_help.text = tip;
        };
        LoaderEnterPanel.prototype.setTips = function (tips) {
        };
        return LoaderEnterPanel;
    }(Games.LoaderPanel));
    Games.LoaderEnterPanel = LoaderEnterPanel;
})(Games || (Games = {}));
//# sourceMappingURL=LoaderEnterPanel.js.map