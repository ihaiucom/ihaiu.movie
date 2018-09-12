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
        var Btn_pwdeyeStruct = /** @class */ (function (_super) {
            __extends(Btn_pwdeyeStruct, _super);
            function Btn_pwdeyeStruct() {
                return _super.call(this) || this;
            }
            Btn_pwdeyeStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Login", "btn_pwdeye"));
            };
            Btn_pwdeyeStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_button = this.getController("button");
            };
            Btn_pwdeyeStruct.URL = "ui://7znsj5i6eiknm";
            Btn_pwdeyeStruct.DependPackages = ["Login"];
            return Btn_pwdeyeStruct;
        }(fairygui.GButton));
        Login.Btn_pwdeyeStruct = Btn_pwdeyeStruct;
    })(Login = fgui.Login || (fgui.Login = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=Btn_pwdeyeStruct.js.map