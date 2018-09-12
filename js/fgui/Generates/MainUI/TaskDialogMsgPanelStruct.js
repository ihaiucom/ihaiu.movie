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
        var TaskDialogMsgPanelStruct = /** @class */ (function (_super) {
            __extends(TaskDialogMsgPanelStruct, _super);
            function TaskDialogMsgPanelStruct() {
                return _super.call(this) || this;
            }
            TaskDialogMsgPanelStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("MainUI", "TaskDialogMsgPanel"));
            };
            TaskDialogMsgPanelStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_talkBg = (this.getChild("talkBg"));
                this.m_title = (this.getChild("title"));
            };
            TaskDialogMsgPanelStruct.URL = "ui://7ecreso0olpux5f";
            TaskDialogMsgPanelStruct.DependPackages = ["MainUI", "Common"];
            return TaskDialogMsgPanelStruct;
        }(fairygui.GLabel));
        MainUI.TaskDialogMsgPanelStruct = TaskDialogMsgPanelStruct;
    })(MainUI = fgui.MainUI || (fgui.MainUI = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=TaskDialogMsgPanelStruct.js.map