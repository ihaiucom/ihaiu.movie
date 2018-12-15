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
        var AssistantTopPanelStruct = /** @class */ (function (_super) {
            __extends(AssistantTopPanelStruct, _super);
            function AssistantTopPanelStruct() {
                return _super.call(this) || this;
            }
            AssistantTopPanelStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("ArtistDetail", "AssistantTopPanel"));
            };
            AssistantTopPanelStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_bg = (this.getChild("bg"));
                this.m_icon = (this.getChild("icon"));
                this.m_selfId = (this.getChild("selfId"));
                this.m_lessonItem = (this.getChild("lessonItem"));
            };
            AssistantTopPanelStruct.URL = "ui://gif3gjfsep0gt27r";
            AssistantTopPanelStruct.DependPackages = ["ArtistDetail", "Common", "PfSkin"];
            return AssistantTopPanelStruct;
        }(fairygui.GComponent));
        ArtistDetail.AssistantTopPanelStruct = AssistantTopPanelStruct;
    })(ArtistDetail = fgui.ArtistDetail || (fgui.ArtistDetail = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=AssistantTopPanelStruct.js.map