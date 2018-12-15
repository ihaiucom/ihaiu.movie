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
    var ActorDetailWindow = /** @class */ (function (_super) {
        __extends(ActorDetailWindow, _super);
        function ActorDetailWindow() {
            var _this = _super.call(this) || this;
            // 添加依赖资源
            _this.addAssetForFguiComponent(fgui.PfSkin.ActorDetailUI);
            return _this;
        }
        // 菜单创建
        ActorDetailWindow.prototype.onMenuCreate = function () {
            this.conent = fgui.PfSkin.ActorDetailUI.createInstance();
            this.contentPane = this.conent;
            // this.center();
            // //弹出窗口的动效已中心为轴心
            // this.setPivot(0.5, 0.5);
            _super.prototype.onMenuCreate.call(this);
        };
        // 菜单打开事件，传递参数
        ActorDetailWindow.prototype.onMenuOpen = function (parameter) {
            _super.prototype.onMenuOpen.call(this, parameter);
            this.openUpdateView();
        };
        ActorDetailWindow.prototype.openUpdateView = function () {
            var args = this.menuParameter.args;
            if (args.length > 0) {
                this.conent.updateView(args[0]);
            }
        };
        //=========================
        // 显示完成
        // 可以在这里添加协议消息监听
        //-------------------------
        ActorDetailWindow.prototype.onShowComplete = function () {
            _super.prototype.onShowComplete.call(this);
            this.conent.m_closeBtn.onClick(this, this.onClickCloseBtn);
        };
        //=========================
        // 隐藏完成
        // 可以在这里移除协议消息监听
        //-------------------------
        ActorDetailWindow.prototype.onHideComplete = function () {
            _super.prototype.onHideComplete.call(this);
            this.conent.m_closeBtn.offClick(this, this.onClickCloseBtn);
        };
        ActorDetailWindow.prototype.onClickCloseBtn = function () {
            this.menuClose();
        };
        return ActorDetailWindow;
    }(Games.MWindow));
    Games.ActorDetailWindow = ActorDetailWindow;
})(Games || (Games = {}));
//# sourceMappingURL=ActorDetailWindow.js.map