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
    var PfSkin;
    (function (PfSkin) {
        var ArtistBasePanelStruct = /** @class */ (function (_super) {
            __extends(ArtistBasePanelStruct, _super);
            function ArtistBasePanelStruct() {
                return _super.call(this) || this;
            }
            ArtistBasePanelStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("PfSkin", "ArtistBasePanel"));
            };
            ArtistBasePanelStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_attrIcon1 = (this.getChild("attrIcon1"));
                this.m_attTitle1 = (this.getChild("attTitle1"));
                this.m_attLabel1 = (this.getChild("attLabel1"));
                this.m_attrIcon2 = (this.getChild("attrIcon2"));
                this.m_attTitle2 = (this.getChild("attTitle2"));
                this.m_attLabel2 = (this.getChild("attLabel2"));
                this.m_attrIcon3 = (this.getChild("attrIcon3"));
                this.m_attTitle3 = (this.getChild("attTitle3"));
                this.m_attLabel3 = (this.getChild("attLabel3"));
                this.m_attrIcon4 = (this.getChild("attrIcon4"));
                this.m_attTitle4 = (this.getChild("attTitle4"));
                this.m_attLabel4 = (this.getChild("attLabel4"));
                this.m_attrGroup = (this.getChild("attrGroup"));
                this.m_descGroup = (this.getChild("descGroup"));
                this.m_upgradeBtn = (this.getChild("upgradeBtn"));
                this.m_DetailTextCom = (this.getChild("DetailTextCom"));
            };
            ArtistBasePanelStruct.URL = "ui://s33x8418jazc1l2";
            ArtistBasePanelStruct.DependPackages = ["PfSkin", "Common"];
            return ArtistBasePanelStruct;
        }(fairygui.GComponent));
        PfSkin.ArtistBasePanelStruct = ArtistBasePanelStruct;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=ArtistBasePanelStruct.js.map