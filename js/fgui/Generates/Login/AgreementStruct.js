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
        var AgreementStruct = /** @class */ (function (_super) {
            __extends(AgreementStruct, _super);
            function AgreementStruct() {
                return _super.call(this) || this;
            }
            AgreementStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Login", "Agreement"));
            };
            AgreementStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_text = (this.getChild("text"));
                this.m_btn_closeAgreement = (this.getChild("btn_closeAgreement"));
            };
            AgreementStruct.URL = "ui://7znsj5i6cpc91p";
            AgreementStruct.DependPackages = ["Login"];
            return AgreementStruct;
        }(fairygui.GComponent));
        Login.AgreementStruct = AgreementStruct;
    })(Login = fgui.Login || (fgui.Login = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=AgreementStruct.js.map