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
        var GuideTaskRoleStruct = /** @class */ (function (_super) {
            __extends(GuideTaskRoleStruct, _super);
            function GuideTaskRoleStruct() {
                return _super.call(this) || this;
            }
            GuideTaskRoleStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("MainUI", "GuideTaskRole"));
            };
            GuideTaskRoleStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_icon = (this.getChild("icon"));
            };
            GuideTaskRoleStruct.URL = "ui://7ecreso0gn0tx50";
            GuideTaskRoleStruct.DependPackages = ["MainUI", "Guide", "Common"];
            return GuideTaskRoleStruct;
        }(fairygui.GButton));
        MainUI.GuideTaskRoleStruct = GuideTaskRoleStruct;
    })(MainUI = fgui.MainUI || (fgui.MainUI = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=GuideTaskRoleStruct.js.map