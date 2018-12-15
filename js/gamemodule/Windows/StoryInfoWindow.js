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
    // 剧本详情
    //----------------------
    var StoryInfoWindow = /** @class */ (function (_super) {
        __extends(StoryInfoWindow, _super);
        function StoryInfoWindow() {
            var _this = _super.call(this) || this;
            // 注册子窗口
            // let subwindwoA = new LoginRegisterSubwindow(LoginTabType.Register, this);
            // let subwindwoB = new LoginGuestSubwindow(LoginTabType.LoginGuest, this);
            // this.registerSubwindow(subwindwoA);
            // this.registerSubwindow(subwindwoB);
            // 子窗口的其他api,不能在构造方法里调
            // this.openSubwindow(subwindwoA);
            // this.openSubwindowByIndex(LoginTabType.LoginGuest);
            // let subwindwoA = this.getSubwindow<LoginRegisterSubwindow>(LoginTabType.Register);
            // 添加依赖资源
            _this.addAssetForFguiComponent(fgui.PfSkin.StoryInfoUI);
            return _this;
        }
        // 生成动态预加载资源
        StoryInfoWindow.prototype.generateAssetsForDynmic = function () {
            _super.prototype.generateAssetsForDynmic.call(this);
            // // 方式1, 自己手动加资源
            // this.addDynamicAsset({url:xxxxx, type:AssetItemType.Buffer});
            // // 方式2, 添加AvatarConfig里指定的资源
            // let list = Game.moduleModel.story.getList();
            // for(let i = 0; i < list.length; i ++)
            // {
            //     this.addDynamicAsset(list[i].avatarConfig.iconAssetItem);
            //     this.addDynamicAsset(list[i].avatarConfig.miniIconAssetItem);
            // }
            // // 方式3, 添加AvatarConfig所有的资源
            // let list = Game.moduleModel.story.getList();
            // for(let i = 0; i < list.length; i ++)
            // {
            //     this.addDynmicAssetForAvatarAll(list[i].avatarConfig);
            // }
        };
        // 菜单创建
        StoryInfoWindow.prototype.onMenuCreate = function () {
            this.conent = fgui.PfSkin.StoryInfoUI.createInstance();
            this.contentPane = this.conent;
            //this.center();
            //弹出窗口的动效已中心为轴心
            //this.setPivot(0.5, 0.5);
            _super.prototype.onMenuCreate.call(this);
        };
        // 菜单打开事件，传递参数
        StoryInfoWindow.prototype.onMenuOpen = function (parameter) {
            _super.prototype.onMenuOpen.call(this, parameter);
        };
        //=========================
        // 显示完成
        // 可以在这里添加协议消息监听
        //-------------------------
        StoryInfoWindow.prototype.onShowComplete = function () {
            _super.prototype.onShowComplete.call(this);
        };
        //=========================
        // 隐藏完成
        // 可以在这里移除协议消息监听
        //-------------------------
        StoryInfoWindow.prototype.onHideComplete = function () {
            _super.prototype.onHideComplete.call(this);
        };
        return StoryInfoWindow;
    }(Games.MWindow));
    Games.StoryInfoWindow = StoryInfoWindow;
})(Games || (Games = {}));
//# sourceMappingURL=StoryInfoWindow.js.map