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
        var Register = /** @class */ (function (_super) {
            __extends(Register, _super);
            function Register() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                //是否从游客登录进入的，绑定账号
                _this.isFromGuest = false;
                return _this;
            }
            Register.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_btn_registerback.onClick(this, this.onClickBack);
                this.m_btn_onRegister.onClick(this, this.onClickRegister);
                this.m_lb_agreement.onClick(this, this.onClickAgreement);
                this.m_accountInput.m_button.visible = false;
            };
            Object.defineProperty(Register.prototype, "account", {
                // 账号
                get: function () {
                    return this.m_accountInput.m_txt_account.text;
                },
                set: function (value) {
                    this.m_accountInput.m_txt_account.text = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Register.prototype, "password", {
                // 密码
                get: function () {
                    return this.m_passwordInput.m_txt_password.text;
                },
                set: function (value) {
                    this.m_passwordInput.m_txt_password.text = value;
                },
                enumerable: true,
                configurable: true
            });
            // 点击按钮--返回
            Register.prototype.onClickBack = function () {
                this.moduleWindow.backTab();
            };
            // 点击按钮--注册
            Register.prototype.onClickRegister = function () {
                if (!this.isFromGuest) {
                    Game.protosender.account.Auth(this.account, this.password, true);
                    Game.localStorage.isGuest = false;
                }
                else {
                    Game.protosender.account.GuestBind(this.account, this.password);
                }
            };
            // 点击按钮--查看协议
            Register.prototype.onClickAgreement = function () {
                this.moduleWindow.openTab(Games.LoginTabType.Agreement);
            };
            return Register;
        }(Login.RegisterStruct));
        Login.Register = Register;
    })(Login = fgui.Login || (fgui.Login = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=Register.js.map