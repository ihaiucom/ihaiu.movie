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
    var ArtistDetail;
    (function (ArtistDetail) {
        var ArtistAssistantPanelStruct = /** @class */ (function (_super) {
            __extends(ArtistAssistantPanelStruct, _super);
            function ArtistAssistantPanelStruct() {
                return _super.call(this) || this;
            }
            ArtistAssistantPanelStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("ArtistDetail", "ArtistAssistantPanel"));
            };
            ArtistAssistantPanelStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_attrList = (this.getChild("attrList"));
                this.m_desc = (this.getChild("desc"));
                this.m_icon = (this.getChild("icon"));
                this.m_lvIcon = (this.getChild("lvIcon"));
                this.m_lessonList = (this.getChild("lessonList"));
                this.m_courseTitle = (this.getChild("courseTitle"));
                this.m_attributeTitle = (this.getChild("attributeTitle"));
                this.m_pactIcon = (this.getChild("pactIcon"));
                this.m_energyBar = (this.getChild("energyBar"));
                this.m_contractTitle = (this.getChild("contractTitle"));
            };
            ArtistAssistantPanelStruct.URL = "ui://gif3gjfsjd831";
            ArtistAssistantPanelStruct.DependPackages = ["ArtistDetail", "Common"];
            return ArtistAssistantPanelStruct;
        }(fairygui.GComponent));
        ArtistDetail.ArtistAssistantPanelStruct = ArtistAssistantPanelStruct;
    })(ArtistDetail = fgui.ArtistDetail || (fgui.ArtistDetail = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=ArtistAssistantPanelStruct.js.map