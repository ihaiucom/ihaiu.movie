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
        var PopupMenuStruct = /** @class */ (function (_super) {
            __extends(PopupMenuStruct, _super);
            function PopupMenuStruct() {
                return _super.call(this) || this;
            }
            PopupMenuStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Login", "PopupMenu"));
            };
            PopupMenuStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_list = (this.getChild("list"));
            };
            PopupMenuStruct.URL = "ui://7znsj5i6l8d850";
            PopupMenuStruct.DependPackages = ["Login"];
            return PopupMenuStruct;
        }(fairygui.GComponent));
        Login.PopupMenuStruct = PopupMenuStruct;
    })(Login = fgui.Login || (fgui.Login = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=PopupMenuStruct.js.map