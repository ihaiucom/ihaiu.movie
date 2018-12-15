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
        var ArtistBasePanelStruct = /** @class */ (function (_super) {
            __extends(ArtistBasePanelStruct, _super);
            function ArtistBasePanelStruct() {
                return _super.call(this) || this;
            }
            ArtistBasePanelStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("ArtistDetail", "ArtistBasePanel"));
            };
            ArtistBasePanelStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_attr = (this.getChild("attr"));
                this.m_attrList = (this.getChild("attrList"));
                this.m_descGroup = (this.getChild("descGroup"));
                this.m_upgradeBtn = (this.getChild("upgradeBtn"));
                this.m_DetailTextCom = (this.getChild("DetailTextCom"));
            };
            ArtistBasePanelStruct.URL = "ui://gif3gjfsjazc1l2";
            ArtistBasePanelStruct.DependPackages = ["ArtistDetail", "Common", "PfSkin"];
            return ArtistBasePanelStruct;
        }(fairygui.GComponent));
        ArtistDetail.ArtistBasePanelStruct = ArtistBasePanelStruct;
    })(ArtistDetail = fgui.ArtistDetail || (fgui.ArtistDetail = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=ArtistBasePanelStruct.js.map