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
    var StoryLibraryWindow = /** @class */ (function (_super) {
        __extends(StoryLibraryWindow, _super);
        function StoryLibraryWindow() {
            var _this = _super.call(this) || this;
            // 添加依赖资源
            _this.addAssetForFguiComponent(fgui.PfSkin.StoryLibraryUI);
            return _this;
        }
        // 生成动态预加载资源
        StoryLibraryWindow.prototype.generateAssetsForDynmic = function () {
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
        StoryLibraryWindow.prototype.onMenuCreate = function () {
            this.conent = fgui.PfSkin.StoryLibraryUI.createInstance();
            this.contentPane = this.conent;
            // this.center();
            // //弹出窗口的动效已中心为轴心
            // this.setPivot(0.5, 0.5);
            _super.prototype.onMenuCreate.call(this);
        };
        StoryLibraryWindow.prototype.onMenuOpen = function (parameter) {
            _super.prototype.onMenuOpen.call(this, parameter);
        };
        //=========================
        // 显示完成
        // 可以在这里添加协议消息监听
        //-------------------------
        StoryLibraryWindow.prototype.onShowComplete = function () {
            _super.prototype.onShowComplete.call(this);
            // Game.protoOkEvent.add(ProtoEventKey.GameInfoExt, this.updateView, this);
            // Game.protosender.GameData.GetGameInfoExt();
        };
        //=========================
        // 隐藏完成
        // 可以在这里移除协议消息监听
        //-------------------------
        StoryLibraryWindow.prototype.onHideComplete = function () {
            _super.prototype.onHideComplete.call(this);
            // Game.protoOkEvent.remove(ProtoEventKey.GameInfoExt, this.updateView, this);
        };
        return StoryLibraryWindow;
    }(Games.MWindow));
    Games.StoryLibraryWindow = StoryLibraryWindow;
})(Games || (Games = {}));
//# sourceMappingURL=StoryLibraryWindow.js.map