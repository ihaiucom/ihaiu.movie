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
    var ArtistGetWindow = /** @class */ (function (_super) {
        __extends(ArtistGetWindow, _super);
        function ArtistGetWindow() {
            var _this = _super.call(this) || this;
            // 添加依赖资源
            _this.addAssetForFguiComponent(fgui.PfSkin.ArtistGetUI);
            return _this;
        }
        // 生成动态预加载资源
        ArtistGetWindow.prototype.generateAssetsForDynmic = function () {
            _super.prototype.generateAssetsForDynmic.call(this);
        };
        // 菜单创建
        ArtistGetWindow.prototype.onMenuCreate = function () {
            this.conent = fgui.PfSkin.ArtistGetUI.createInstance();
            this.contentPane = this.conent;
            // this.center();
            // //弹出窗口的动效已中心为轴心
            // this.setPivot(0.5, 0.5);
            _super.prototype.onMenuCreate.call(this);
        };
        ArtistGetWindow.prototype.onMenuOpen = function (parameter) {
            _super.prototype.onMenuOpen.call(this, parameter);
            this.openView();
        };
        /**
         *
         */
        ArtistGetWindow.prototype.openView = function () {
            this.conent.updateView(this.menuParameter.args[0]);
        };
        //=========================
        // 显示完成
        // 可以在这里添加协议消息监听
        //-------------------------
        ArtistGetWindow.prototype.onShowComplete = function () {
            _super.prototype.onShowComplete.call(this);
        };
        //=========================
        // 隐藏完成
        // 可以在这里移除协议消息监听
        //-------------------------
        ArtistGetWindow.prototype.onHideComplete = function () {
            _super.prototype.onHideComplete.call(this);
        };
        return ArtistGetWindow;
    }(Games.MWindow));
    Games.ArtistGetWindow = ArtistGetWindow;
})(Games || (Games = {}));
//# sourceMappingURL=ArtistGetWindow.js.map