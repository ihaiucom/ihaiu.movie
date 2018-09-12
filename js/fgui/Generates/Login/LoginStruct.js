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
        var LoginStruct = /** @class */ (function (_super) {
            __extends(LoginStruct, _super);
            function LoginStruct() {
                return _super.call(this) || this;
            }
            LoginStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Login", "Login"));
            };
            LoginStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_c1 = this.getController("c1");
                this.m_accountInput = (this.getChild("accountInput"));
                this.m_passwordInput = (this.getChild("passwordInput"));
                this.m_btn_forgot = (this.getChild("btn_forgot"));
                this.m_btn_security = (this.getChild("btn_security"));
                this.m_btn_login = (this.getChild("btn_login"));
                this.m_btn_register = (this.getChild("btn_register"));
                this.m_btn_guest = (this.getChild("btn_guest"));
            };
            LoginStruct.URL = "ui://7znsj5i6cpc91m";
            LoginStruct.DependPackages = ["Login"];
            return LoginStruct;
        }(fairygui.GComponent));
        Login.LoginStruct = LoginStruct;
    })(Login = fgui.Login || (fgui.Login = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=LoginStruct.js.map