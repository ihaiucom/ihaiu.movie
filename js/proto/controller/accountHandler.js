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
            User.account.userId = msg.userId;
            Game.proto.httpChannel.userId = msg.userId;
            Game.proto.httpChannel.jwt = msg.jwt;
            if (Game.protosender.account.isRister) {
                Game.protosender.GameData.Auth(Game.localStorage.password);
            }
            else {
                Game.protosender.GameData.GetLoginGameData(Game.localStorage.password, "1");
            }
        };
        /**
         *
         */
        accountHandler.prototype.refreshToken = function (msg) {
        };
        return accountHandler;
    }(Games.ProtoHandler));
    Games.accountHandler = accountHandler;
})(Games || (Games = {}));
//# sourceMappingURL=AccountHandler.js.map