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
        var LoginFrameStruct = /** @class */ (function (_super) {
            __extends(LoginFrameStruct, _super);
            function LoginFrameStruct() {
                return _super.call(this) || this;
            }
            LoginFrameStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Login", "LoginFrame"));
            };
            LoginFrameStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
            };
            LoginFrameStruct.URL = "ui://7znsj5i6o11z29";
            LoginFrameStruct.DependPackages = ["Login"];
            return LoginFrameStruct;
        }(fairygui.GComponent));
        Login.LoginFrameStruct = LoginFrameStruct;
    })(Login = fgui.Login || (fgui.Login = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=LoginFrameStruct.js.map