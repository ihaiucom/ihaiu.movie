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
        var GuideRightDialogStruct = /** @class */ (function (_super) {
            __extends(GuideRightDialogStruct, _super);
            function GuideRightDialogStruct() {
                return _super.call(this) || this;
            }
            GuideRightDialogStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Guide", "GuideRightDialog"));
            };
            GuideRightDialogStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_icon = (this.getChild("icon"));
                this.m_name = (this.getChild("name"));
                this.m_dialog = (this.getChild("dialog"));
                this.m_t0 = this.getTransition("t0");
            };
            GuideRightDialogStruct.URL = "ui://toebkrsrgn0t1c";
            GuideRightDialogStruct.DependPackages = ["Guide"];
            return GuideRightDialogStruct;
        }(fairygui.GComponent));
        Guide.GuideRightDialogStruct = GuideRightDialogStruct;
    })(Guide = fgui.Guide || (fgui.Guide = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=GuideRightDialogStruct.js.map