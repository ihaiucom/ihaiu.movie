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
        var Btn_accoutsecStruct = /** @class */ (function (_super) {
            __extends(Btn_accoutsecStruct, _super);
            function Btn_accoutsecStruct() {
                return _super.call(this) || this;
            }
            Btn_accoutsecStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Login", "btn_accoutsec"));
            };
            Btn_accoutsecStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_button = this.getController("button");
            };
            Btn_accoutsecStruct.URL = "ui://7znsj5i6eikno";
            Btn_accoutsecStruct.DependPackages = ["Login"];
            return Btn_accoutsecStruct;
        }(fairygui.GButton));
        Login.Btn_accoutsecStruct = Btn_accoutsecStruct;
    })(Login = fgui.Login || (fgui.Login = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=Btn_accoutsecStruct.js.map