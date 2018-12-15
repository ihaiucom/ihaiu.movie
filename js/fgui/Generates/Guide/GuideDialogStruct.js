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
        var GuideDialogStruct = /** @class */ (function (_super) {
            __extends(GuideDialogStruct, _super);
            function GuideDialogStruct() {
                return _super.call(this) || this;
            }
            GuideDialogStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Guide", "GuideDialog"));
            };
            GuideDialogStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_dir = this.getController("dir");
                this.m_bg = (this.getChild("bg"));
                this.m_bgShadow = (this.getChild("bgShadow"));
                this.m_title = (this.getChild("title"));
                this.m_arrowRight = (this.getChild("arrowRight"));
                this.m_arrowLeft = (this.getChild("arrowLeft"));
            };
            GuideDialogStruct.URL = "ui://toebkrsrhz3ms";
            GuideDialogStruct.DependPackages = ["Guide", "Common"];
            return GuideDialogStruct;
        }(fairygui.GLabel));
        Guide.GuideDialogStruct = GuideDialogStruct;
    })(Guide = fgui.Guide || (fgui.Guide = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=GuideDialogStruct.js.map