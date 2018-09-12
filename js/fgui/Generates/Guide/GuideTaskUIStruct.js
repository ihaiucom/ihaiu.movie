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
        var GuideTaskUIStruct = /** @class */ (function (_super) {
            __extends(GuideTaskUIStruct, _super);
            function GuideTaskUIStruct() {
                return _super.call(this) || this;
            }
            GuideTaskUIStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Guide", "GuideTaskUI"));
            };
            GuideTaskUIStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_c1 = this.getController("c1");
                this.m_title = (this.getChild("title"));
                this.m_desc = (this.getChild("desc"));
                this.m_rewardlist = (this.getChild("rewardlist"));
                this.m_closeBtn = (this.getChild("closeBtn"));
                this.m_recordsBtn = (this.getChild("recordsBtn"));
                this.m_goBtn = (this.getChild("goBtn"));
                this.m_getBtn = (this.getChild("getBtn"));
                this.m_taskDesc = (this.getChild("taskDesc"));
                this.m_recordPanel = (this.getChild("recordPanel"));
            };
            GuideTaskUIStruct.URL = "ui://toebkrsrhz3mz";
            GuideTaskUIStruct.DependPackages = ["Guide", "System", "Common", "PfSkin"];
            return GuideTaskUIStruct;
        }(fairygui.GComponent));
        Guide.GuideTaskUIStruct = GuideTaskUIStruct;
    })(Guide = fgui.Guide || (fgui.Guide = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=GuideTaskUIStruct.js.map