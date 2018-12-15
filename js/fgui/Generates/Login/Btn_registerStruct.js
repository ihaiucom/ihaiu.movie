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
        var Btn_registerStruct = /** @class */ (function (_super) {
            __extends(Btn_registerStruct, _super);
            function Btn_registerStruct() {
                return _super.call(this) || this;
            }
            Btn_registerStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Login", "btn_register"));
            };
            Btn_registerStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_button = this.getController("button");
            };
            Btn_registerStruct.URL = "ui://7znsj5i6eiknj";
            Btn_registerStruct.DependPackages = ["Login", "System"];
            return Btn_registerStruct;
        }(fairygui.GButton));
        Login.Btn_registerStruct = Btn_registerStruct;
    })(Login = fgui.Login || (fgui.Login = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=Btn_registerStruct.js.map