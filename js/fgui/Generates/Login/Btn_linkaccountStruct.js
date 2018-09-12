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
        var Btn_linkaccountStruct = /** @class */ (function (_super) {
            __extends(Btn_linkaccountStruct, _super);
            function Btn_linkaccountStruct() {
                return _super.call(this) || this;
            }
            Btn_linkaccountStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Login", "btn_linkaccount"));
            };
            Btn_linkaccountStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_button = this.getController("button");
            };
            Btn_linkaccountStruct.URL = "ui://7znsj5i68zgr1j";
            Btn_linkaccountStruct.DependPackages = ["Login", "Common"];
            return Btn_linkaccountStruct;
        }(fairygui.GButton));
        Login.Btn_linkaccountStruct = Btn_linkaccountStruct;
    })(Login = fgui.Login || (fgui.Login = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=Btn_linkaccountStruct.js.map