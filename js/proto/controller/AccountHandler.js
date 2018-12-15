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
    //====================
    // 消息处理器 -- 账号
    //--------------------
    var accountHandler = /** @class */ (function (_super) {
        __extends(accountHandler, _super);
        function accountHandler() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.moduleName = Games.ProtoModuleNames.account;
            return _this;
        }
        /**
         * 请求登录反馈
         */
        accountHandler.prototype.auth = function (msg) {
            User.account.account = msg.account;
            Game.protosender.account.Login(msg.account, msg.token);
        };
        /**
         * 登录反馈
         */
        accountHandler.prototype.login = function (msg) {
            User.isLogined = true;
            User.account.userId = msg.userId;
            Game.proto.httpChannel.userId = msg.userId;
            Game.proto.httpChannel.jwt = msg.jwt;
            if (Game.protosender.account.isRister) {
                Game.protosender.GameData.Auth(Game.localStorage.password);
            }
            else {
                if (Game.protosender.account.isGuestBind) {
                    Game.protosender.GameData.VisitorAuth(Game.localStorage.username, Game.localStorage.password);
                }
                else {
                    Game.protosender.GameData.GetLoginGameData(Game.localStorage.password, "1");
                }
            }
        };
        /**
         * 刷新 jwt
         */
        accountHandler.prototype.refreshToken = function (msg) {
            console.log("refreshTokenResponse");
            Game.proto.httpChannel.jwt = msg.jwt;
            Game.proto.isEnableSendProto = true;
            // 角色登陆游戏信息（能够获取角色后 立马调用该接口，每次登陆都要传）
            // Games.Static.Instance.actLoadStart(true);
            Games.Static.Instance.onloadstart(true);
            // 加载开始 埋点
            Games.Static.Instance.onLoadStep("load_start");
            // 加载结束 埋点
            Games.Static.Instance.onLoadStep("load_end");
            if (Game.proto.isNeedReGetLoginGameData) {
                Game.protosender.GameData.ReGetLoginGameData();
            }
        };
        return accountHandler;
    }(Games.ProtoHandler));
    Games.accountHandler = accountHandler;
})(Games || (Games = {}));
//# sourceMappingURL=AccountHandler.js.map