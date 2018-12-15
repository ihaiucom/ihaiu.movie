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
        var AccountComboBoxStruct = /** @class */ (function (_super) {
            __extends(AccountComboBoxStruct, _super);
            function AccountComboBoxStruct() {
                return _super.call(this) || this;
            }
            AccountComboBoxStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Login", "AccountComboBox"));
            };
            AccountComboBoxStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_c1 = this.getController("c1");
                this.m_button = (this.getChild("button"));
            };
            AccountComboBoxStruct.URL = "ui://7znsj5i6dl322a";
            AccountComboBoxStruct.DependPackages = ["Login"];
            return AccountComboBoxStruct;
        }(fairygui.GComboBox));
        Login.AccountComboBoxStruct = AccountComboBoxStruct;
    })(Login = fgui.Login || (fgui.Login = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=AccountComboBoxStruct.js.map