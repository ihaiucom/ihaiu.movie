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
        var Btn_guestStruct = /** @class */ (function (_super) {
            __extends(Btn_guestStruct, _super);
            function Btn_guestStruct() {
                return _super.call(this) || this;
            }
            Btn_guestStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Login", "btn_guest"));
            };
            Btn_guestStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_button = this.getController("button");
            };
            Btn_guestStruct.URL = "ui://7znsj5i6eiknk";
            Btn_guestStruct.DependPackages = ["Login", "Common"];
            return Btn_guestStruct;
        }(fairygui.GButton));
        Login.Btn_guestStruct = Btn_guestStruct;
    })(Login = fgui.Login || (fgui.Login = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=Btn_guestStruct.js.map