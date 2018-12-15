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
        var PasswordInputStruct = /** @class */ (function (_super) {
            __extends(PasswordInputStruct, _super);
            function PasswordInputStruct() {
                return _super.call(this) || this;
            }
            PasswordInputStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Login", "passwordInput"));
            };
            PasswordInputStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_txt_password = (this.getChild("txt_password"));
                this.m_btn_pwdeye = (this.getChild("btn_pwdeye"));
            };
            PasswordInputStruct.URL = "ui://7znsj5i6cpc91l";
            PasswordInputStruct.DependPackages = ["Login"];
            return PasswordInputStruct;
        }(fairygui.GComponent));
        Login.PasswordInputStruct = PasswordInputStruct;
    })(Login = fgui.Login || (fgui.Login = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=PasswordInputStruct.js.map