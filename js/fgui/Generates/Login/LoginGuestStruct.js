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
        var LoginGuestStruct = /** @class */ (function (_super) {
            __extends(LoginGuestStruct, _super);
            function LoginGuestStruct() {
                return _super.call(this) || this;
            }
            LoginGuestStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Login", "LoginGuest"));
            };
            LoginGuestStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_style = this.getController("style");
                this.m_g_guestlogin = (this.getChild("g_guestlogin"));
                this.m_btn_guestlogin = (this.getChild("btn_guestlogin"));
                this.m_btn_linkaccount = (this.getChild("btn_linkaccount"));
                this.m_btn_back = (this.getChild("btn_back"));
            };
            LoginGuestStruct.URL = "ui://7znsj5i6w5tk27";
            LoginGuestStruct.DependPackages = ["Login"];
            return LoginGuestStruct;
        }(fairygui.GComponent));
        Login.LoginGuestStruct = LoginGuestStruct;
    })(Login = fgui.Login || (fgui.Login = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=LoginGuestStruct.js.map