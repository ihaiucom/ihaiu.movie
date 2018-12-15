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
        var GoalPanelStruct = /** @class */ (function (_super) {
            __extends(GoalPanelStruct, _super);
            function GoalPanelStruct() {
                return _super.call(this) || this;
            }
            GoalPanelStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("MainUI", "GoalPanel"));
            };
            GoalPanelStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_list = (this.getChild("list"));
            };
            GoalPanelStruct.URL = "ui://7ecreso0o5f5x5q";
            GoalPanelStruct.DependPackages = ["MainUI"];
            return GoalPanelStruct;
        }(fairygui.GComponent));
        MainUI.GoalPanelStruct = GoalPanelStruct;
    })(MainUI = fgui.MainUI || (fgui.MainUI = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=GoalPanelStruct.js.map