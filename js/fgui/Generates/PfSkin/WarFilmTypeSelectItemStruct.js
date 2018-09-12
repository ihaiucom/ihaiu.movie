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
        var WarFilmTypeSelectItemStruct = /** @class */ (function (_super) {
            __extends(WarFilmTypeSelectItemStruct, _super);
            function WarFilmTypeSelectItemStruct() {
                return _super.call(this) || this;
            }
            WarFilmTypeSelectItemStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("PfSkin", "WarFilmTypeSelectItem"));
            };
            WarFilmTypeSelectItemStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_button = this.getController("button");
                this.m_bg = (this.getChild("bg"));
                this.m_selectBg = (this.getChild("selectBg"));
                this.m_filmIcon = (this.getChild("filmIcon"));
                this.m_typeBg = (this.getChild("typeBg"));
                this.m_filmType = (this.getChild("filmType"));
                this.m_tip1 = (this.getChild("tip1"));
                this.m_proficiency = (this.getChild("proficiency"));
                this.m_lovePeople = (this.getChild("lovePeople"));
                this.m_tip3 = (this.getChild("tip3"));
                this.m_rewardIcon = (this.getChild("rewardIcon"));
                this.m_tip4 = (this.getChild("tip4"));
                this.m_proficiencyList = (this.getChild("proficiencyList"));
            };
            WarFilmTypeSelectItemStruct.URL = "ui://s33x84186ve81gw";
            WarFilmTypeSelectItemStruct.DependPackages = ["PfSkin"];
            return WarFilmTypeSelectItemStruct;
        }(fairygui.GButton));
        PfSkin.WarFilmTypeSelectItemStruct = WarFilmTypeSelectItemStruct;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=WarFilmTypeSelectItemStruct.js.map