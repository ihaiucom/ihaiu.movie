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
        var ArtistDetailUIStruct = /** @class */ (function (_super) {
            __extends(ArtistDetailUIStruct, _super);
            function ArtistDetailUIStruct() {
                return _super.call(this) || this;
            }
            ArtistDetailUIStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("PfSkin", "ArtistDetailUI"));
            };
            ArtistDetailUIStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_name = (this.getChild("name"));
                this.m_icon = (this.getChild("icon"));
                this.m_sex = (this.getChild("sex"));
                this.m_contory = (this.getChild("contory"));
                this.m_biaoqian1 = (this.getChild("biaoqian1"));
                this.m_biaoqian2 = (this.getChild("biaoqian2"));
                this.m_starList = (this.getChild("starList"));
                this.m_renqizhi = (this.getChild("renqizhi"));
                this.m_renqiLabel = (this.getChild("renqiLabel"));
                this.m_renqizhiGroup = (this.getChild("renqizhiGroup"));
                this.m_tablist = (this.getChild("tablist"));
                this.m_gold = (this.getChild("gold"));
                this.m_needGold = (this.getChild("needGold"));
                this.m_srcName = (this.getChild("srcName"));
                this.m_tsrcName = (this.getChild("tsrcName"));
                this.m_level = (this.getChild("level"));
                this.m_closeBtn = (this.getChild("closeBtn"));
                this.m_frozenBtn = (this.getChild("frozenBtn"));
                this.m_renameBtn = (this.getChild("renameBtn"));
                this.m_sendFloorBtn = (this.getChild("sendFloorBtn"));
                this.m_upgradeBtn = (this.getChild("upgradeBtn"));
                this.m_content = (this.getChild("content"));
                this.m_expbar = (this.getChild("expbar"));
                this.m_effect = (this.getChild("effect"));
            };
            ArtistDetailUIStruct.URL = "ui://s33x8418jazc1l3";
            ArtistDetailUIStruct.DependPackages = ["PfSkin", "Common", "Fx"];
            return ArtistDetailUIStruct;
        }(fairygui.GComponent));
        PfSkin.ArtistDetailUIStruct = ArtistDetailUIStruct;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=ArtistDetailUIStruct.js.map