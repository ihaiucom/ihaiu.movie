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
        var PopupMenu_itemStruct = /** @class */ (function (_super) {
            __extends(PopupMenu_itemStruct, _super);
            function PopupMenu_itemStruct() {
                return _super.call(this) || this;
            }
            PopupMenu_itemStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Login", "PopupMenu_item"));
            };
            PopupMenu_itemStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_button = this.getController("button");
                this.m_checked = this.getController("checked");
                this.m_title = (this.getChild("title"));
            };
            PopupMenu_itemStruct.URL = "ui://7znsj5i6l8d851";
            PopupMenu_itemStruct.DependPackages = ["Login"];
            return PopupMenu_itemStruct;
        }(fairygui.GButton));
        Login.PopupMenu_itemStruct = PopupMenu_itemStruct;
    })(Login = fgui.Login || (fgui.Login = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=PopupMenu_itemStruct.js.map