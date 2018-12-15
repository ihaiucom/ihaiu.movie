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
    var LoginTabType;
    (function (LoginTabType) {
        // 登录
        LoginTabType[LoginTabType["Login"] = 0] = "Login";
        // 注册
        LoginTabType[LoginTabType["Register"] = 1] = "Register";
        // 游客登录
        LoginTabType[LoginTabType["LoginGuest"] = 2] = "LoginGuest";
        // 注册协议
        LoginTabType[LoginTabType["Agreement"] = 3] = "Agreement";
    })(LoginTabType = Games.LoginTabType || (Games.LoginTabType = {}));
    //======================
    // 登录窗口
    //----------------------
    var LoginWindow = /** @class */ (function (_super) {
        __extends(LoginWindow, _super);
        function LoginWindow() {
            var _this = _super.call(this) || this;
            // 添加依赖资源
            _this.addAssetForFguiComponent(fgui.Login.Main);
            return _this;
        }
        // 生成动态预加载资源
        LoginWindow.prototype.generateAssetsForDynmic = function () {
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
        LoginWindow.prototype.onMenuCreate = function () {
            var windowUI = fgui.Login.LoginWindowUI.createInstance();
            this.conent = windowUI.m_conent;
            this.contentPane = windowUI;
            // this.center();
            // //弹出窗口的动效已中心为轴心
            // this.setPivot(0.5, 0.5);
            // 注册Tab
            this.registerTab(LoginTabType.Login, this.conent.m_login);
            this.registerTab(LoginTabType.Register, this.conent.m_register);
            this.registerTab(LoginTabType.LoginGuest, this.conent.m_login_guest);
            this.registerTab(LoginTabType.Agreement, this.conent.m_agreement);
            this.openTab(LoginTabType.Login);
            _super.prototype.onMenuCreate.call(this);
        };
        // 菜单打开事件，传递参数
        LoginWindow.prototype.onMenuOpen = function (parameter) {
            if (parameter.openType == Games.MenuOpenType.None) {
                if (Game.localStorage.isGuest) {
                    parameter.openType = Games.MenuOpenType.Tab;
                    parameter.openIndex = LoginTabType.LoginGuest;
                }
            }
            _super.prototype.onMenuOpen.call(this, parameter);
        };
        //=========================
        // 显示完成
        // 可以在这里添加协议消息监听
        //-------------------------
        LoginWindow.prototype.onShowComplete = function () {
            _super.prototype.onShowComplete.call(this);
        };
        //=========================
        // 隐藏完成
        // 可以在这里移除协议消息监听
        //-------------------------
        LoginWindow.prototype.onHideComplete = function () {
            _super.prototype.onHideComplete.call(this);
        };
        return LoginWindow;
    }(Games.MWindow));
    Games.LoginWindow = LoginWindow;
})(Games || (Games = {}));
//# sourceMappingURL=LoginWindow.js.map