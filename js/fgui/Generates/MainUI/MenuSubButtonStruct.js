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
    var MainUI;
    (function (MainUI) {
        var MenuSubButtonStruct = /** @class */ (function (_super) {
            __extends(MenuSubButtonStruct, _super);
            function MenuSubButtonStruct() {
                return _super.call(this) || this;
            }
            MenuSubButtonStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("MainUI", "MenuSubButton"));
            };
            MenuSubButtonStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_button = this.getController("button");
                this.m_icon = (this.getChild("icon"));
                this.m_lock = (this.getChild("lock"));
                this.m_title = (this.getChild("title"));
                this.m_red = (this.getChild("red"));
            };
            MenuSubButtonStruct.URL = "ui://7ecreso0m6h3x4g";
            MenuSubButtonStruct.DependPackages = ["MainUI", "Common"];
            return MenuSubButtonStruct;
        }(fairygui.GButton));
        MainUI.MenuSubButtonStruct = MenuSubButtonStruct;
    })(MainUI = fgui.MainUI || (fgui.MainUI = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=MenuSubButtonStruct.js.map