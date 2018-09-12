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
        var ArtistSkillEffectUIStruct = /** @class */ (function (_super) {
            __extends(ArtistSkillEffectUIStruct, _super);
            function ArtistSkillEffectUIStruct() {
                return _super.call(this) || this;
            }
            ArtistSkillEffectUIStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("PfSkin", "ArtistSkillEffectUI"));
            };
            ArtistSkillEffectUIStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_icon = (this.getChild("icon"));
                this.m_title = (this.getChild("title"));
                this.m_desc = (this.getChild("desc"));
                this.m_skillIcon = (this.getChild("skillIcon"));
                this.m_t0 = this.getTransition("t0");
            };
            ArtistSkillEffectUIStruct.URL = "ui://s33x8418u6x3t1x6";
            ArtistSkillEffectUIStruct.DependPackages = ["PfSkin"];
            return ArtistSkillEffectUIStruct;
        }(fairygui.GComponent));
        PfSkin.ArtistSkillEffectUIStruct = ArtistSkillEffectUIStruct;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=ArtistSkillEffectUIStruct.js.map