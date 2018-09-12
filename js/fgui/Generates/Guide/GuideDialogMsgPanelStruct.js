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
        var GuideDialogMsgPanelStruct = /** @class */ (function (_super) {
            __extends(GuideDialogMsgPanelStruct, _super);
            function GuideDialogMsgPanelStruct() {
                return _super.call(this) || this;
            }
            GuideDialogMsgPanelStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Guide", "GuideDialogMsgPanel"));
            };
            GuideDialogMsgPanelStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_dir = this.getController("dir");
                this.m_bg = (this.getChild("bg"));
                this.m_bgShadow = (this.getChild("bgShadow"));
                this.m_title = (this.getChild("title"));
                this.m_arrowRight = (this.getChild("arrowRight"));
                this.m_arrowLeft = (this.getChild("arrowLeft"));
            };
            GuideDialogMsgPanelStruct.URL = "ui://toebkrsr9wvb1o";
            GuideDialogMsgPanelStruct.DependPackages = ["Guide", "Common"];
            return GuideDialogMsgPanelStruct;
        }(fairygui.GLabel));
        Guide.GuideDialogMsgPanelStruct = GuideDialogMsgPanelStruct;
    })(Guide = fgui.Guide || (fgui.Guide = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=GuideDialogMsgPanelStruct.js.map