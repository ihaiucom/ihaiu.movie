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
        var Btn_loginStruct = /** @class */ (function (_super) {
            __extends(Btn_loginStruct, _super);
            function Btn_loginStruct() {
                return _super.call(this) || this;
            }
            Btn_loginStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Login", "btn_login"));
            };
            Btn_loginStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_button = this.getController("button");
                this.m_title = (this.getChild("title"));
            };
            Btn_loginStruct.URL = "ui://7znsj5i6eikni";
            Btn_loginStruct.DependPackages = ["Login", "System"];
            return Btn_loginStruct;
        }(fairygui.GButton));
        Login.Btn_loginStruct = Btn_loginStruct;
    })(Login = fgui.Login || (fgui.Login = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=Btn_loginStruct.js.map