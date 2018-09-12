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
        var Agreement = /** @class */ (function (_super) {
            __extends(Agreement, _super);
            function Agreement() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            Agreement.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_btn_closeAgreement.onClick(this, this.onClickBack);
            };
            // 点击按钮--返回
            Agreement.prototype.onClickBack = function () {
                this.moduleWindow.backTab();
            };
            return Agreement;
        }(Login.AgreementStruct));
        Login.Agreement = Agreement;
    })(Login = fgui.Login || (fgui.Login = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=Agreement.js.map