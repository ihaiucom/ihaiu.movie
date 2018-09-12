/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////
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
var fgui;
(function (fgui) {
    var Login;
    (function (Login) {
        var LoginGuest = /** @class */ (function (_super) {
            __extends(LoginGuest, _super);
            function LoginGuest() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            LoginGuest.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_btn_guestlogin.onClick(this, this.onClickLogin);
                this.m_btn_linkaccount.onClick(this, this.onClickRegister);
                this.m_btn_back.onClick(this, this.onClickBack);
            };
            // 点击按钮--登录
            LoginGuest.prototype.onClickLogin = function () {
                Game.protosender.account.GuestAuth();
            };
            // 点击按钮--绑定账号
            LoginGuest.prototype.onClickRegister = function () {
                this.moduleWindow.openTab(Games.LoginTabType.Register);
            };
            // 点击按钮--返回
            LoginGuest.prototype.onClickBack = function () {
                this.moduleWindow.backTab();
            };
            return LoginGuest;
        }(Login.LoginGuestStruct));
        Login.LoginGuest = LoginGuest;
    })(Login = fgui.Login || (fgui.Login = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=LoginGuest.js.map