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
    // 登录窗口
    //----------------------
    var BagWindow = /** @class */ (function (_super) {
        __extends(BagWindow, _super);
        function BagWindow() {
            var _this = _super.call(this) || this;
            // 添加依赖资源
            _this.addAssetForFguiComponent(fgui.Bag.BagMainPanel);
            return _this;
        }
        // 生成动态预加载资源
        BagWindow.prototype.generateAssetsForDynmic = function () {
            _super.prototype.generateAssetsForDynmic.call(this);
            this.addDynmicAssetForAvatarAll(Game.config.avatar.getConfig(1001));
        };
        // 菜单创建
        BagWindow.prototype.onMenuCreate = function () {
            this.conent = fgui.Bag.BagMainPanel.createInstance();
            this.contentPane = this.conent;
            // this.center();
            // //弹出窗口的动效已中心为轴心
            // this.setPivot(0.5, 0.5);
            _super.prototype.onMenuCreate.call(this);
        };
        //=========================
        // 显示完成
        // 可以在这里添加协议消息监听
        //-------------------------
        BagWindow.prototype.onShowComplete = function () {
            _super.prototype.onShowComplete.call(this);
        };
        //=========================
        // 隐藏完成
        // 可以在这里移除协议消息监听
        //-------------------------
        BagWindow.prototype.onHideComplete = function () {
            _super.prototype.onHideComplete.call(this);
        };
        return BagWindow;
    }(Games.MWindow));
    Games.BagWindow = BagWindow;
})(Games || (Games = {}));
//# sourceMappingURL=BagWindow.js.map