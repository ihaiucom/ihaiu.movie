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
    var OscarShowSubWindow = /** @class */ (function (_super) {
        __extends(OscarShowSubWindow, _super);
        function OscarShowSubWindow(subwindowIndex, mainWindow) {
            var _this = _super.call(this, subwindowIndex, mainWindow) || this;
            // 添加依赖资源
            _this.addAssetForFguiComponent(fgui.Oscar.OscarShowPanel);
            return _this;
        }
        // 菜单创建
        OscarShowSubWindow.prototype.onMenuCreate = function () {
            this.conent = fgui.Oscar.OscarShowPanel.createInstance();
            this.contentPane = this.conent;
            this.center();
            //弹出窗口的动效已中心为轴心
            this.setPivot(0.5, 0.5);
            _super.prototype.onMenuCreate.call(this);
        };
        // 菜单打开事件，传递参数
        OscarShowSubWindow.prototype.onMenuOpen = function (parameter) {
            _super.prototype.onMenuOpen.call(this, parameter);
            this.conent.onWindowOpen(parameter.args[0]);
        };
        //=========================
        // 显示完成
        // 可以在这里添加协议消息监听
        //-------------------------
        OscarShowSubWindow.prototype.onShowComplete = function () {
            _super.prototype.onShowComplete.call(this);
        };
        //=========================
        // 隐藏完成
        // 可以在这里移除协议消息监听
        //-------------------------
        OscarShowSubWindow.prototype.onHideComplete = function () {
            _super.prototype.onHideComplete.call(this);
        };
        return OscarShowSubWindow;
    }(Games.MSubwindow));
    Games.OscarShowSubWindow = OscarShowSubWindow;
})(Games || (Games = {}));
//# sourceMappingURL=OscarShowSubWindow.js.map