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
        var VersionStruct = /** @class */ (function (_super) {
            __extends(VersionStruct, _super);
            function VersionStruct() {
                return _super.call(this) || this;
            }
            VersionStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Login", "Version"));
            };
            VersionStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_txt_resVer = (this.getChild("txt_resVer"));
                this.m_txt_gamever = (this.getChild("txt_gamever"));
            };
            VersionStruct.URL = "ui://7znsj5i6cpc91q";
            VersionStruct.DependPackages = ["Login"];
            return VersionStruct;
        }(fairygui.GComponent));
        Login.VersionStruct = VersionStruct;
    })(Login = fgui.Login || (fgui.Login = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=VersionStruct.js.map