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
        var RegisterStruct = /** @class */ (function (_super) {
            __extends(RegisterStruct, _super);
            function RegisterStruct() {
                return _super.call(this) || this;
            }
            RegisterStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Login", "Register"));
            };
            RegisterStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_c1 = this.getController("c1");
                this.m_accountInput = (this.getChild("accountInput"));
                this.m_passwordInput = (this.getChild("passwordInput"));
                this.m_btn_onRegister = (this.getChild("btn_onRegister"));
                this.m_lb_agreement = (this.getChild("lb_agreement"));
                this.m_btn_registerback = (this.getChild("btn_registerback"));
            };
            RegisterStruct.URL = "ui://7znsj5i6cpc91n";
            RegisterStruct.DependPackages = ["Login"];
            return RegisterStruct;
        }(fairygui.GComponent));
        Login.RegisterStruct = RegisterStruct;
    })(Login = fgui.Login || (fgui.Login = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=RegisterStruct.js.map