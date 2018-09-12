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
        var RightMiddleMenuBarStruct = /** @class */ (function (_super) {
            __extends(RightMiddleMenuBarStruct, _super);
            function RightMiddleMenuBarStruct() {
                return _super.call(this) || this;
            }
            RightMiddleMenuBarStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("MainUI", "RightMiddleMenuBar"));
            };
            RightMiddleMenuBarStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_awards = (this.getChild("awards"));
                this.m_goal = (this.getChild("goal"));
            };
            RightMiddleMenuBarStruct.URL = "ui://7ecreso0tf2bx4l";
            RightMiddleMenuBarStruct.DependPackages = ["MainUI"];
            return RightMiddleMenuBarStruct;
        }(fairygui.GComponent));
        MainUI.RightMiddleMenuBarStruct = RightMiddleMenuBarStruct;
    })(MainUI = fgui.MainUI || (fgui.MainUI = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=RightMiddleMenuBarStruct.js.map