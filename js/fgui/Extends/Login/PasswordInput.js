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
        var PasswordInput = /** @class */ (function (_super) {
            __extends(PasswordInput, _super);
            function PasswordInput() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            PasswordInput.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_btn_pwdeye.onClick(this, this.onClickEye);
            };
            PasswordInput.prototype.onClickEye = function () {
                this.m_txt_password.password = !this.m_txt_password.password;
                this.m_txt_password.text = this.m_txt_password.text;
            };
            return PasswordInput;
        }(Login.PasswordInputStruct));
        Login.PasswordInput = PasswordInput;
    })(Login = fgui.Login || (fgui.Login = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=PasswordInput.js.map