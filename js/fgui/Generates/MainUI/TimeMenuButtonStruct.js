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
        var TimeMenuButtonStruct = /** @class */ (function (_super) {
            __extends(TimeMenuButtonStruct, _super);
            function TimeMenuButtonStruct() {
                return _super.call(this) || this;
            }
            TimeMenuButtonStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("MainUI", "TimeMenuButton"));
            };
            TimeMenuButtonStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_button = this.getController("button");
                this.m_visiableTitle = this.getController("visiableTitle");
                this.m_c_visible_new = this.getController("c_visible_new");
                this.m_icon = (this.getChild("icon"));
                this.m_title = (this.getChild("title"));
                this.m_lock = (this.getChild("lock"));
                this.m_buttonTime = (this.getChild("buttonTime"));
                this.m_red = (this.getChild("red"));
            };
            TimeMenuButtonStruct.URL = "ui://7ecreso0m6h3x4j";
            TimeMenuButtonStruct.DependPackages = ["MainUI", "Common"];
            return TimeMenuButtonStruct;
        }(fairygui.GButton));
        MainUI.TimeMenuButtonStruct = TimeMenuButtonStruct;
    })(MainUI = fgui.MainUI || (fgui.MainUI = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=TimeMenuButtonStruct.js.map