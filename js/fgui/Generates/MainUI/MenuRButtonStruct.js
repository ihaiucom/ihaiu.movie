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
        var MenuRButtonStruct = /** @class */ (function (_super) {
            __extends(MenuRButtonStruct, _super);
            function MenuRButtonStruct() {
                return _super.call(this) || this;
            }
            MenuRButtonStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("MainUI", "MenuRButton"));
            };
            MenuRButtonStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_button = this.getController("button");
                this.m_icon = (this.getChild("icon"));
                this.m_lock = (this.getChild("lock"));
                this.m_title = (this.getChild("title"));
                this.m_red = (this.getChild("red"));
            };
            MenuRButtonStruct.URL = "ui://7ecreso0ua2b2w";
            MenuRButtonStruct.DependPackages = ["MainUI", "Common"];
            return MenuRButtonStruct;
        }(fairygui.GButton));
        MainUI.MenuRButtonStruct = MenuRButtonStruct;
    })(MainUI = fgui.MainUI || (fgui.MainUI = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=MenuRButtonStruct.js.map