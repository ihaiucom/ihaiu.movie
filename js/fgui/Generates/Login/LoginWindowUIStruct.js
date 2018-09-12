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
        var LoginWindowUIStruct = /** @class */ (function (_super) {
            __extends(LoginWindowUIStruct, _super);
            function LoginWindowUIStruct() {
                return _super.call(this) || this;
            }
            LoginWindowUIStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Login", "LoginWindowUI"));
            };
            LoginWindowUIStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_screenBG = (this.getChild("screenBG"));
                this.m_conent = (this.getChild("conent"));
            };
            LoginWindowUIStruct.URL = "ui://7znsj5i6vkfj3y";
            LoginWindowUIStruct.DependPackages = ["Login", "System"];
            return LoginWindowUIStruct;
        }(fairygui.GComponent));
        Login.LoginWindowUIStruct = LoginWindowUIStruct;
    })(Login = fgui.Login || (fgui.Login = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=LoginWindowUIStruct.js.map