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
        var Btn_userAgreementStruct = /** @class */ (function (_super) {
            __extends(Btn_userAgreementStruct, _super);
            function Btn_userAgreementStruct() {
                return _super.call(this) || this;
            }
            Btn_userAgreementStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Login", "btn_userAgreement"));
            };
            Btn_userAgreementStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_button = this.getController("button");
                this.m_title = (this.getChild("title"));
            };
            Btn_userAgreementStruct.URL = "ui://7znsj5i68zgr1f";
            Btn_userAgreementStruct.DependPackages = ["Login"];
            return Btn_userAgreementStruct;
        }(fairygui.GButton));
        Login.Btn_userAgreementStruct = Btn_userAgreementStruct;
    })(Login = fgui.Login || (fgui.Login = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=Btn_userAgreementStruct.js.map