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
    (function (Login_1) {
        var Login = /** @class */ (function (_super) {
            __extends(Login, _super);
            function Login() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            Login.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_btn_login.onClick(this, this.onClickLogin);
                this.m_btn_register.onClick(this, this.onClickRegister);
                this.m_btn_guest.onClick(this, this.onClickGuest);
                this.popupMenu = Login_1.PopupMenu.createInstance();
                this.popupMenu.mainButton = this.m_accountInput.m_button;
                this.popupMenu.sOnSelect.add(this.onSelectePopupItem, this);
                this.popupMenu.center();
                this.m_accountInput.m_button.onClick(this, this.onClickPopupButton);
            };
            Login.prototype.onWindowShow = function () {
                this.popupMenu.setListData(Game.localStorage.useraccountList);
            };
            // 点击弹窗菜单按钮		
            Login.prototype.onClickPopupButton = function () {
                fairygui.GRoot.inst.showPopup(this.popupMenu, this.m_accountInput, true);
            };
            // 选中弹窗菜单
            Login.prototype.onSelectePopupItem = function (data) {
                this.account = data.username;
                this.password = data.password;
            };
            Object.defineProperty(Login.prototype, "account", {
                // 账号
                get: function () {
                    return this.m_accountInput.m_txt_account.text.trim();
                },
                set: function (value) {
                    this.m_accountInput.m_txt_account.text = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Login.prototype, "password", {
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
            // 点击按钮--登录
            Login.prototype.onClickLogin = function () {
                Game.protosender.account.Auth(this.account, this.password);
            };
            // 点击按钮--注册
            Login.prototype.onClickRegister = function () {
                this.moduleWindow.conent.m_register.isFromGuest = false;
                this.moduleWindow.openTab(Games.LoginTabType.Register);
            };
            // 点击按钮--游客登录
            Login.prototype.onClickGuest = function () {
                if (Game.localStorage.isGameGuest) {
                    this.moduleWindow.openTab(Games.LoginTabType.LoginGuest);
                }
                else {
                    Game.protosender.account.GuestAuth();
                }
            };
            // 如果组件代码里添加该代码，当设该该对象的Tab显示时，将被调用。 需要注意多次连续打开同一个Tab，那边这里也将被多次调用。监听事件需注意
            Login.prototype.onTabShow = function () {
                if (isNullOrEmpty(this.account)) {
                    this.account = Game.localStorage.username;
                }
                if (isNullOrEmpty(this.password)) {
                    this.password = Game.localStorage.password;
                }
            };
            // 如果组件代码里添加该代码，当设该该对象的Tab隐藏时，将被调用
            Login.prototype.onTabHide = function () {
            };
            return Login;
        }(Login_1.LoginStruct));
        Login_1.Login = Login;
    })(Login = fgui.Login || (fgui.Login = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=Login.js.map