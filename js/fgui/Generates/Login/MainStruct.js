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
        var MainStruct = /** @class */ (function (_super) {
            __extends(MainStruct, _super);
            function MainStruct() {
                return _super.call(this) || this;
            }
            MainStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Login", "Main"));
            };
            MainStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_login = (this.getChild("login"));
                this.m_register = (this.getChild("register"));
                this.m_login_guest = (this.getChild("login_guest"));
                this.m_agreement = (this.getChild("agreement"));
                this.m_version = (this.getChild("version"));
            };
            MainStruct.URL = "ui://7znsj5i6eiknh";
            MainStruct.DependPackages = ["Login"];
            return MainStruct;
        }(fairygui.GComponent));
        Login.MainStruct = MainStruct;
    })(Login = fgui.Login || (fgui.Login = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=MainStruct.js.map