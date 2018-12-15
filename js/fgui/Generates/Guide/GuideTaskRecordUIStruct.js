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
        var GuideTaskRecordUIStruct = /** @class */ (function (_super) {
            __extends(GuideTaskRecordUIStruct, _super);
            function GuideTaskRecordUIStruct() {
                return _super.call(this) || this;
            }
            GuideTaskRecordUIStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Guide", "GuideTaskRecordUI"));
            };
            GuideTaskRecordUIStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_title = (this.getChild("title"));
                this.m_list = (this.getChild("list"));
                this.m_closeBtn = (this.getChild("closeBtn"));
            };
            GuideTaskRecordUIStruct.URL = "ui://toebkrsrhz3m15";
            GuideTaskRecordUIStruct.DependPackages = ["Guide", "Common", "System"];
            return GuideTaskRecordUIStruct;
        }(fairygui.GComponent));
        Guide.GuideTaskRecordUIStruct = GuideTaskRecordUIStruct;
    })(Guide = fgui.Guide || (fgui.Guide = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=GuideTaskRecordUIStruct.js.map