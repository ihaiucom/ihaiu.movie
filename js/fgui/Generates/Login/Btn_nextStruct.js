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
        var Btn_nextStruct = /** @class */ (function (_super) {
            __extends(Btn_nextStruct, _super);
            function Btn_nextStruct() {
                return _super.call(this) || this;
            }
            Btn_nextStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Login", "btn_next"));
            };
            Btn_nextStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_title = (this.getChild("title"));
            };
            Btn_nextStruct.URL = "ui://7znsj5i6cpc91y";
            Btn_nextStruct.DependPackages = ["Login", "System"];
            return Btn_nextStruct;
        }(fairygui.GButton));
        Login.Btn_nextStruct = Btn_nextStruct;
    })(Login = fgui.Login || (fgui.Login = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=Btn_nextStruct.js.map