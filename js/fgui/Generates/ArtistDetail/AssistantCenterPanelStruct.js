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
        var AssistantCenterPanelStruct = /** @class */ (function (_super) {
            __extends(AssistantCenterPanelStruct, _super);
            function AssistantCenterPanelStruct() {
                return _super.call(this) || this;
            }
            AssistantCenterPanelStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("ArtistDetail", "AssistantCenterPanel"));
            };
            AssistantCenterPanelStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_c_visible_max = this.getController("c_visible_max");
                this.m_icon = (this.getChild("icon"));
                this.m_attrLabel = (this.getChild("attrLabel"));
                this.m_nextAddLabel = (this.getChild("nextAddLabel"));
                this.m_nextAddNum = (this.getChild("nextAddNum"));
                this.m_trainTimes = (this.getChild("trainTimes"));
                this.m_trainTimesNum = (this.getChild("trainTimesNum"));
                this.m_trainTimesUnlockTip = (this.getChild("trainTimesUnlockTip"));
                this.m_unlockTagTip = (this.getChild("unlockTagTip"));
                this.m_curTag = (this.getChild("curTag"));
                this.m_nextTag = (this.getChild("nextTag"));
                this.m_attrTitle = (this.getChild("attrTitle"));
                this.m_tagTitle = (this.getChild("tagTitle"));
            };
            AssistantCenterPanelStruct.URL = "ui://gif3gjfsep0gt27t";
            AssistantCenterPanelStruct.DependPackages = ["ArtistDetail", "PfSkin", "Common"];
            return AssistantCenterPanelStruct;
        }(fairygui.GComponent));
        ArtistDetail.AssistantCenterPanelStruct = AssistantCenterPanelStruct;
    })(ArtistDetail = fgui.ArtistDetail || (fgui.ArtistDetail = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=AssistantCenterPanelStruct.js.map