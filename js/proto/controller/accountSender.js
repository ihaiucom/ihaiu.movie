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
    // 消息发送器 -- 账号
    //--------------------
    var accountSender = /** @class */ (function (_super) {
        __extends(accountSender, _super);
        function accountSender() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.moduleName = Games.ProtoModuleNames.account;
            _this.isRister = false;
            return _this;
        }
        // 生成游客账号
        accountSender.prototype.generateGuestAccount = function () {
            var timestamp = new Date().getTime();
            var random = Math.random();
            var guset = "#" + timestamp.toString() + "." + random.toString();
            return guset;
        };
        // 获取游客账号
        accountSender.prototype.getGuestAccount = function () {
            if (!isNullOrEmpty(Game.localStorage.guestusername)) {
                return Game.localStorage.guestusername;
            }
            return this.generateGuestAccount();
        };
        /**
         * 游客登录
         */
        accountSender.prototype.GuestAuth = function () {
            var account = this.getGuestAccount();
            Game.localStorage.guestusername = account;
            Game.localStorage.isGuest = true;
            // Game.proto.httpChannel.login(account);
            var reqData = new Proto.API.account.authRequest();
            reqData.account = account;
            this.sendByCommand(reqData, "account/auth");
        };
        /**
         * 请求登录
         */
        accountSender.prototype.Auth = function (account, password, isRister) {
            if (isRister === void 0) { isRister = false; }
            this.isRister = isRister;
            if (isNullOrEmpty(account) || (account.length < 6 || account.length > 12)) {
                Game.system.toastMsg(MsgKey.account_name_long, 6, 12);
                return;
            }
            if (isNullOrEmpty(password) || (password.length < 6 || password.length > 12)) {
                Game.system.toastMsg(MsgKey.account_load_long);
                return;
            }
            var patt = /[^a-zA-Z0-9\.@_\u4e00-\u9fa5]/;
            if (patt.test(account)) {
                Game.system.toastMsg(MsgKey.account_name_blockword);
                return;
            }
            Game.localStorage.addUseraccount(Game.localStorage.username, Game.localStorage.password);
            Game.localStorage.username = account;
            Game.localStorage.password = password;
            Game.localStorage.isGuest = false;
            // Game.proto.httpChannel.login(account);
            var reqData = new Proto.API.account.authRequest();
            reqData.account = account;
            this.sendByCommand(reqData, "account/auth");
        };
        /**
         * 登录反馈
         */
        accountSender.prototype.Login = function (account, token) {
            var reqData = new Proto.API.account.loginRequest();
            reqData.account = account;
            reqData.token = token;
            this.sendByCommand(reqData, "account/login");
        };
        /**
         *
         * @param account
         */
        accountSender.prototype.auth = function (account) {
            var req = new Proto.API.account.authRequest();
            req.account = account;
            this.send(req);
        };
        /**
         *
         */
        accountSender.prototype.refreshToken = function () {
            var req = new Proto.API.account.refreshTokenRequest();
            this.send(req);
        };
        return accountSender;
    }(Games.ProtoSender));
    Games.accountSender = accountSender;
})(Games || (Games = {}));
//# sourceMappingURL=AccountSender.js.map