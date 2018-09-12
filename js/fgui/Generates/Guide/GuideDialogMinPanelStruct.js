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
        var GuideDialogMinPanelStruct = /** @class */ (function (_super) {
            __extends(GuideDialogMinPanelStruct, _super);
            function GuideDialogMinPanelStruct() {
                return _super.call(this) || this;
            }
            GuideDialogMinPanelStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Guide", "GuideDialogMinPanel"));
            };
            GuideDialogMinPanelStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_dialog = (this.getChild("dialog"));
                this.m_t0 = this.getTransition("t0");
                this.m_t1 = this.getTransition("t1");
            };
            GuideDialogMinPanelStruct.URL = "ui://toebkrsrji9k1p";
            GuideDialogMinPanelStruct.DependPackages = ["Guide"];
            return GuideDialogMinPanelStruct;
        }(fairygui.GComponent));
        Guide.GuideDialogMinPanelStruct = GuideDialogMinPanelStruct;
    })(Guide = fgui.Guide || (fgui.Guide = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=GuideDialogMinPanelStruct.js.map