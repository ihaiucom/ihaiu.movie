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
        var Btn_forgotStruct = /** @class */ (function (_super) {
            __extends(Btn_forgotStruct, _super);
            function Btn_forgotStruct() {
                return _super.call(this) || this;
            }
            Btn_forgotStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Login", "btn_forgot"));
            };
            Btn_forgotStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_button = this.getController("button");
                this.m_Title = (this.getChild("Title"));
            };
            Btn_forgotStruct.URL = "ui://7znsj5i6eiknn";
            Btn_forgotStruct.DependPackages = ["Login"];
            return Btn_forgotStruct;
        }(fairygui.GButton));
        Login.Btn_forgotStruct = Btn_forgotStruct;
    })(Login = fgui.Login || (fgui.Login = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=Btn_forgotStruct.js.map