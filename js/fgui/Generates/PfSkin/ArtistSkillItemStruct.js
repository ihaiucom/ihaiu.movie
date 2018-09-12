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
        var ArtistSkillItemStruct = /** @class */ (function (_super) {
            __extends(ArtistSkillItemStruct, _super);
            function ArtistSkillItemStruct() {
                return _super.call(this) || this;
            }
            ArtistSkillItemStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("PfSkin", "ArtistSkillItem"));
            };
            ArtistSkillItemStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_skillName = (this.getChild("skillName"));
                this.m_desc = (this.getChild("desc"));
                this.m_lv = (this.getChild("lv"));
                this.m_cost = (this.getChild("cost"));
                this.m_unLockGroup = (this.getChild("unLockGroup"));
                this.m_lock = (this.getChild("lock"));
                this.m_condition = (this.getChild("condition"));
                this.m_lockGroup = (this.getChild("lockGroup"));
                this.m_skill = (this.getChild("skill"));
                this.m_upgradeBtn = (this.getChild("upgradeBtn"));
            };
            ArtistSkillItemStruct.URL = "ui://s33x8418jazc1m2";
            ArtistSkillItemStruct.DependPackages = ["PfSkin", "Common"];
            return ArtistSkillItemStruct;
        }(fairygui.GComponent));
        PfSkin.ArtistSkillItemStruct = ArtistSkillItemStruct;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=ArtistSkillItemStruct.js.map