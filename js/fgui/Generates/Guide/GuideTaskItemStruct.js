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
        var GuideTaskItemStruct = /** @class */ (function (_super) {
            __extends(GuideTaskItemStruct, _super);
            function GuideTaskItemStruct() {
                return _super.call(this) || this;
            }
            GuideTaskItemStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Guide", "GuideTaskItem"));
            };
            GuideTaskItemStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_finished = this.getController("finished");
                this.m_title = (this.getChild("title"));
                this.m_right = (this.getChild("right"));
            };
            GuideTaskItemStruct.URL = "ui://toebkrsrhz3m16";
            GuideTaskItemStruct.DependPackages = ["Guide", "Common"];
            return GuideTaskItemStruct;
        }(fairygui.GLabel));
        Guide.GuideTaskItemStruct = GuideTaskItemStruct;
    })(Guide = fgui.Guide || (fgui.Guide = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=GuideTaskItemStruct.js.map