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
    var Street;
    (function (Street) {
        var MenuIconStruct = /** @class */ (function (_super) {
            __extends(MenuIconStruct, _super);
            function MenuIconStruct() {
                return _super.call(this) || this;
            }
            MenuIconStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Street", "MenuIcon"));
            };
            MenuIconStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_icon = (this.getChild("icon"));
                this.m_title = (this.getChild("title"));
            };
            MenuIconStruct.URL = "ui://mu4e45moh9ou14";
            MenuIconStruct.DependPackages = ["Street", "Common"];
            return MenuIconStruct;
        }(fairygui.GButton));
        Street.MenuIconStruct = MenuIconStruct;
    })(Street = fgui.Street || (fgui.Street = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=MenuIconStruct.js.map