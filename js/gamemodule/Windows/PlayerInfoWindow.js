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
    var PlayerInfoTabType;
    (function (PlayerInfoTabType) {
        PlayerInfoTabType[PlayerInfoTabType["HOME"] = 1] = "HOME";
        PlayerInfoTabType[PlayerInfoTabType["CAREER"] = 2] = "CAREER";
        PlayerInfoTabType[PlayerInfoTabType["TROPHY"] = 3] = "TROPHY";
        PlayerInfoTabType[PlayerInfoTabType["FILMS"] = 4] = "FILMS";
        PlayerInfoTabType[PlayerInfoTabType["ACTORS"] = 5] = "ACTORS";
    })(PlayerInfoTabType = Games.PlayerInfoTabType || (Games.PlayerInfoTabType = {}));
    //======================
    // 登录窗口
    //----------------------
    var PlayerInfoWindow = /** @class */ (function (_super) {
        __extends(PlayerInfoWindow, _super);
        function PlayerInfoWindow() {
            var _this = _super.call(this) || this;
            // 添加依赖资源
            _this.addAssetForFguiComponent(fgui.PlayerInfo.Main);
            return _this;
        }
        // 生成动态预加载资源
        // generateAssetsForDynmic(): void
        // {
        //     super.generateAssetsForDynmic();
        //     this.addDynmicAssetForAvatarAll(Game.config.avatar.getConfig(7101));
        // }
        // 菜单创建
        PlayerInfoWindow.prototype.onMenuCreate = function () {
            this.conent = fgui.PlayerInfo.Main.createInstance();
            this.contentPane = this.conent;
            this.conent.visible = false;
            this.center();
            //弹出窗口的动效已中心为轴心
            this.setPivot(0.5, 0.5);
            _super.prototype.onMenuCreate.call(this);
        };
        // 菜单打开事件，传递参数
        PlayerInfoWindow.prototype.onMenuOpen = function (parameter) {
            _super.prototype.onMenuOpen.call(this, parameter);
        };
        //=========================
        // 显示完成
        // 可以在这里添加协议消息监听
        //-------------------------
        PlayerInfoWindow.prototype.onShowComplete = function () {
            Game.protoOkEvent.add(ProtoEventKey.GameInfoExt, this.onGameInfoExt, this);
            Game.protosender.GameData.GetGameInfoExt();
            _super.prototype.onShowComplete.call(this);
        };
        //=========================
        // 隐藏完成
        // 可以在这里移除协议消息监听
        //-------------------------
        PlayerInfoWindow.prototype.onHideComplete = function () {
            _super.prototype.onHideComplete.call(this);
            Game.protoOkEvent.remove(ProtoEventKey.GameInfoExt, this.onGameInfoExt, this);
        };
        PlayerInfoWindow.prototype.onGameInfoExt = function (proto) {
            Game.protoOkEvent.remove(ProtoEventKey.GameInfoExt, this.onGameInfoExt, this);
            this.conent.visible = true;
            this.conent.onWindowShowCall();
        };
        return PlayerInfoWindow;
    }(Games.MWindow));
    Games.PlayerInfoWindow = PlayerInfoWindow;
})(Games || (Games = {}));
//# sourceMappingURL=PlayerInfoWindow.js.map