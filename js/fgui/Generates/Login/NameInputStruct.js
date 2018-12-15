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
        var NameInputStruct = /** @class */ (function (_super) {
            __extends(NameInputStruct, _super);
            function NameInputStruct() {
                return _super.call(this) || this;
            }
            NameInputStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Login", "nameInput"));
            };
            NameInputStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_txt_account = (this.getChild("txt_account"));
            };
            NameInputStruct.URL = "ui://7znsj5i6w5tk26";
            NameInputStruct.DependPackages = ["Login"];
            return NameInputStruct;
        }(fairygui.GComponent));
        Login.NameInputStruct = NameInputStruct;
    })(Login = fgui.Login || (fgui.Login = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=NameInputStruct.js.map