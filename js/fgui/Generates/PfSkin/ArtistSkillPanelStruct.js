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
        var ArtistSkillPanelStruct = /** @class */ (function (_super) {
            __extends(ArtistSkillPanelStruct, _super);
            function ArtistSkillPanelStruct() {
                return _super.call(this) || this;
            }
            ArtistSkillPanelStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("PfSkin", "ArtistSkillPanel"));
            };
            ArtistSkillPanelStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_skillexp = (this.getChild("skillexp"));
                this.m_exp = (this.getChild("exp"));
                this.m_energy2 = (this.getChild("energy2"));
                this.m_list = (this.getChild("list"));
                this.m_energyBar = (this.getChild("energyBar"));
            };
            ArtistSkillPanelStruct.URL = "ui://s33x8418jazc1lb";
            ArtistSkillPanelStruct.DependPackages = ["PfSkin", "Common"];
            return ArtistSkillPanelStruct;
        }(fairygui.GComponent));
        PfSkin.ArtistSkillPanelStruct = ArtistSkillPanelStruct;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=ArtistSkillPanelStruct.js.map