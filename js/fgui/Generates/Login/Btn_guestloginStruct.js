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
        var Btn_guestloginStruct = /** @class */ (function (_super) {
            __extends(Btn_guestloginStruct, _super);
            function Btn_guestloginStruct() {
                return _super.call(this) || this;
            }
            Btn_guestloginStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Login", "btn_guestlogin"));
            };
            Btn_guestloginStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_button = this.getController("button");
            };
            Btn_guestloginStruct.URL = "ui://7znsj5i68zgr1i";
            Btn_guestloginStruct.DependPackages = ["Login"];
            return Btn_guestloginStruct;
        }(fairygui.GButton));
        Login.Btn_guestloginStruct = Btn_guestloginStruct;
    })(Login = fgui.Login || (fgui.Login = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=Btn_guestloginStruct.js.map