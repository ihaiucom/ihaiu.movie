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
        var GuideUIStruct = /** @class */ (function (_super) {
            __extends(GuideUIStruct, _super);
            function GuideUIStruct() {
                return _super.call(this) || this;
            }
            GuideUIStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Guide", "GuideUI"));
            };
            GuideUIStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_visible = this.getController("visible");
                this.m_c_anima = this.getController("c_anima");
                this.m_bg = (this.getChild("bg"));
                this.m_container = (this.getChild("container"));
                this.m_hand = (this.getChild("hand"));
                this.m_dialog = (this.getChild("dialog"));
                this.m_right = (this.getChild("right"));
                this.m_left = (this.getChild("left"));
                this.m_npcIntroPanel = (this.getChild("npcIntroPanel"));
                this.m_haibao = (this.getChild("haibao"));
            };
            GuideUIStruct.URL = "ui://toebkrsrgn0t1a";
            GuideUIStruct.DependPackages = ["Guide", "Common"];
            return GuideUIStruct;
        }(fairygui.GComponent));
        Guide.GuideUIStruct = GuideUIStruct;
    })(Guide = fgui.Guide || (fgui.Guide = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=GuideUIStruct.js.map