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
    // 电影选择窗口，目前作为战斗主窗口使用
    //----------------------
    var PopUpWindow = /** @class */ (function (_super) {
        __extends(PopUpWindow, _super);
        function PopUpWindow() {
            var _this = _super.call(this) || this;
            // 添加依赖资源
            _this.addAssetForFguiComponent(fgui.PopUp.PopUpMain);
            return _this;
        }
        // 菜单创建
        PopUpWindow.prototype.onMenuCreate = function () {
            this.conent = fgui.PopUp.PopUpMain.createInstance();
            this.contentPane = this.conent;
            // this.center();
            // //弹出窗口的动效已中心为轴心
            // this.setPivot(0.5, 0.5);
            _super.prototype.onMenuCreate.call(this);
        };
        // 菜单打开事件，传递参数
        PopUpWindow.prototype.onMenuOpen = function (parameter) {
            _super.prototype.onMenuOpen.call(this, parameter);
        };
        // 菜单显示
        PopUpWindow.prototype.menuShow = function (root) {
            this.showOn(root);
        };
        //=========================
        // 显示完成
        // 可以在这里添加协议消息监听
        //-------------------------
        PopUpWindow.prototype.onShowComplete = function () {
            _super.prototype.onShowComplete.call(this);
        };
        //=========================
        // 隐藏完成
        // 可以在这里移除协议消息监听
        //-------------------------
        PopUpWindow.prototype.onHideComplete = function () {
            _super.prototype.onHideComplete.call(this);
        };
        return PopUpWindow;
    }(Games.MWindow));
    Games.PopUpWindow = PopUpWindow;
})(Games || (Games = {}));
//# sourceMappingURL=PopUpWindow.js.map