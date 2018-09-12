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
    var Guide;
    (function (Guide) {
        var GuideMinDialogStruct = /** @class */ (function (_super) {
            __extends(GuideMinDialogStruct, _super);
            function GuideMinDialogStruct() {
                return _super.call(this) || this;
            }
            GuideMinDialogStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Guide", "GuideMinDialog"));
            };
            GuideMinDialogStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_title = (this.getChild("title"));
                this.m_icon = (this.getChild("icon"));
            };
            GuideMinDialogStruct.URL = "ui://toebkrsrhz3mq";
            GuideMinDialogStruct.DependPackages = ["Guide", "Common"];
            return GuideMinDialogStruct;
        }(fairygui.GButton));
        Guide.GuideMinDialogStruct = GuideMinDialogStruct;
    })(Guide = fgui.Guide || (fgui.Guide = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=GuideMinDialogStruct.js.map