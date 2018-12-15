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
    // 奥斯卡颁奖窗口
    //----------------------
    var OscarRewardSubWindow = /** @class */ (function (_super) {
        __extends(OscarRewardSubWindow, _super);
        function OscarRewardSubWindow(subwindowIndex, mainWindow) {
            var _this = _super.call(this, subwindowIndex, mainWindow) || this;
            // 添加依赖资源
            _this.addAssetForFguiComponent(fgui.Oscar.OscarRewardPanel);
            return _this;
        }
        // 菜单创建
        OscarRewardSubWindow.prototype.onMenuCreate = function () {
            this.conent = fgui.Oscar.OscarRewardPanel.createInstance();
            this.contentPane = this.conent;
            _super.prototype.onMenuCreate.call(this);
        };
        // 菜单打开事件，传递参数
        OscarRewardSubWindow.prototype.onMenuOpen = function (parameter) {
            _super.prototype.onMenuOpen.call(this, parameter);
            this.conent.onWindowOpen(parameter.args[0]);
        };
        //=========================
        // 显示完成
        // 可以在这里添加协议消息监听
        //-------------------------
        OscarRewardSubWindow.prototype.onShowComplete = function () {
            _super.prototype.onShowComplete.call(this);
        };
        //=========================
        // 隐藏完成
        // 可以在这里移除协议消息监听
        //-------------------------
        OscarRewardSubWindow.prototype.onHideComplete = function () {
            _super.prototype.onHideComplete.call(this);
        };
        return OscarRewardSubWindow;
    }(Games.MSubwindow));
    Games.OscarRewardSubWindow = OscarRewardSubWindow;
})(Games || (Games = {}));
//# sourceMappingURL=OscarRewardSubWindow.js.map