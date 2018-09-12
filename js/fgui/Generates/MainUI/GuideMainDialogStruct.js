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
        var GuideMainDialogStruct = /** @class */ (function (_super) {
            __extends(GuideMainDialogStruct, _super);
            function GuideMainDialogStruct() {
                return _super.call(this) || this;
            }
            GuideMainDialogStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("MainUI", "GuideMainDialog"));
            };
            GuideMainDialogStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_title = (this.getChild("title"));
            };
            GuideMainDialogStruct.URL = "ui://7ecreso0gn0tx53";
            GuideMainDialogStruct.DependPackages = ["MainUI", "Common"];
            return GuideMainDialogStruct;
        }(fairygui.GLabel));
        MainUI.GuideMainDialogStruct = GuideMainDialogStruct;
    })(MainUI = fgui.MainUI || (fgui.MainUI = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=GuideMainDialogStruct.js.map