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
    var ArtistListSubType;
    (function (ArtistListSubType) {
        ArtistListSubType[ArtistListSubType["ListPanel"] = 0] = "ListPanel";
        ArtistListSubType[ArtistListSubType["FindPanel"] = 1] = "FindPanel";
    })(ArtistListSubType = Games.ArtistListSubType || (Games.ArtistListSubType = {}));
    //======================
    // 艺人窗口
    //----------------------
    var ArtistListWindow = /** @class */ (function (_super) {
        __extends(ArtistListWindow, _super);
        function ArtistListWindow() {
            var _this = _super.call(this) || this;
            // 添加依赖资源
            _this.addAssetForFguiComponent(fgui.PfSkin.ArtistUI);
            return _this;
        }
        // 生成动态预加载资源
        ArtistListWindow.prototype.generateAssetsForDynmic = function () {
            _super.prototype.generateAssetsForDynmic.call(this);
            this.addDynmicAssetForAvatarAll(Game.config.avatar.getConfig(1001));
            this.addDynmicAssetForAvatarAll(Game.config.avatar.getConfig(6001));
        };
        // 菜单创建
        ArtistListWindow.prototype.onMenuCreate = function () {
            this.conent = fgui.PfSkin.ArtistUI.createInstance();
            this.contentPane = this.conent;
            this.registerTab(ArtistListSubType.ListPanel, this.conent.m_listPanel);
            this.registerTab(ArtistListSubType.FindPanel, this.conent.m_findPanel);
            // this.center();
            // //弹出窗口的动效已中心为轴心
            // this.setPivot(0.5, 0.5);
            _super.prototype.onMenuCreate.call(this);
        };
        // 菜单打开事件，传递参数
        ArtistListWindow.prototype.onMenuOpen = function (parameter) {
            _super.prototype.onMenuOpen.call(this, parameter);
        };
        //=========================
        // 显示完成
        // 可以在这里添加协议消息监听
        //-------------------------
        ArtistListWindow.prototype.onShowComplete = function () {
            _super.prototype.onShowComplete.call(this);
        };
        //=========================
        // 隐藏完成
        // 可以在这里移除协议消息监听
        //-------------------------
        ArtistListWindow.prototype.onHideComplete = function () {
            _super.prototype.onHideComplete.call(this);
        };
        // 如果需要处理额外的业务，可以重新该方法
        ArtistListWindow.prototype.onOpenTab = function (tabIndex) {
            this.conent.onOpenTab(tabIndex);
        };
        //
        ArtistListWindow.prototype.selectActor = function (lv) {
            return this.conent.selectActor(lv);
        };
        return ArtistListWindow;
    }(Games.MWindow));
    Games.ArtistListWindow = ArtistListWindow;
})(Games || (Games = {}));
//# sourceMappingURL=ArtistListWindow.js.map