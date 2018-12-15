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
        var TimeMenuGoalButtonStruct = /** @class */ (function (_super) {
            __extends(TimeMenuGoalButtonStruct, _super);
            function TimeMenuGoalButtonStruct() {
                return _super.call(this) || this;
            }
            TimeMenuGoalButtonStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("MainUI", "TimeMenuGoalButton"));
            };
            TimeMenuGoalButtonStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_button = this.getController("button");
                this.m_c_color = this.getController("c_color");
                this.m_c_visible_time = this.getController("c_visible_time");
                this.m_c_visible_new = this.getController("c_visible_new");
                this.m_c_visible_star = this.getController("c_visible_star");
                this.m_c_visible_touxiang = this.getController("c_visible_touxiang");
                this.m_icon = (this.getChild("icon"));
                this.m_title = (this.getChild("title"));
                this.m_lock = (this.getChild("lock"));
                this.m_goal = (this.getChild("goal"));
                this.m_starlist = (this.getChild("starlist"));
                this.m_touxiang = (this.getChild("touxiang"));
                this.m_red = (this.getChild("red"));
                this.m_buttonTime = (this.getChild("buttonTime"));
            };
            TimeMenuGoalButtonStruct.URL = "ui://7ecreso0uayyx5p";
            TimeMenuGoalButtonStruct.DependPackages = ["MainUI", "Common"];
            return TimeMenuGoalButtonStruct;
        }(fairygui.GButton));
        MainUI.TimeMenuGoalButtonStruct = TimeMenuGoalButtonStruct;
    })(MainUI = fgui.MainUI || (fgui.MainUI = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=TimeMenuGoalButtonStruct.js.map