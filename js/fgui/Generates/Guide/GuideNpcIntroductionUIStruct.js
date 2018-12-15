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
        var GuideNpcIntroductionUIStruct = /** @class */ (function (_super) {
            __extends(GuideNpcIntroductionUIStruct, _super);
            function GuideNpcIntroductionUIStruct() {
                return _super.call(this) || this;
            }
            GuideNpcIntroductionUIStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Guide", "GuideNpcIntroductionUI"));
            };
            GuideNpcIntroductionUIStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_icon = (this.getChild("icon"));
                this.m_name = (this.getChild("name"));
                this.m_closeBtn = (this.getChild("closeBtn"));
                this.m_desc = (this.getChild("desc"));
            };
            GuideNpcIntroductionUIStruct.URL = "ui://toebkrsrs9dx1f";
            GuideNpcIntroductionUIStruct.DependPackages = ["Guide", "Common", "PfSkin"];
            return GuideNpcIntroductionUIStruct;
        }(fairygui.GComponent));
        Guide.GuideNpcIntroductionUIStruct = GuideNpcIntroductionUIStruct;
    })(Guide = fgui.Guide || (fgui.Guide = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=GuideNpcIntroductionUIStruct.js.map