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
        var GuideTaskDialogStruct = /** @class */ (function (_super) {
            __extends(GuideTaskDialogStruct, _super);
            function GuideTaskDialogStruct() {
                return _super.call(this) || this;
            }
            GuideTaskDialogStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("MainUI", "GuideTaskDialog"));
            };
            GuideTaskDialogStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_c1 = this.getController("c1");
                this.m_role = (this.getChild("role"));
                this.m_arrow2 = (this.getChild("arrow2"));
                this.m_roleGetReward = (this.getChild("roleGetReward"));
                this.m_arrow1 = (this.getChild("arrow1"));
                this.m_dialog = (this.getChild("dialog"));
            };
            GuideTaskDialogStruct.URL = "ui://7ecreso0gn0tx4z";
            GuideTaskDialogStruct.DependPackages = ["MainUI", "Guide", "Common"];
            return GuideTaskDialogStruct;
        }(fairygui.GButton));
        MainUI.GuideTaskDialogStruct = GuideTaskDialogStruct;
    })(MainUI = fgui.MainUI || (fgui.MainUI = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=GuideTaskDialogStruct.js.map