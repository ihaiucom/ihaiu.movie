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
        var WarYirenSelectItemStruct = /** @class */ (function (_super) {
            __extends(WarYirenSelectItemStruct, _super);
            function WarYirenSelectItemStruct() {
                return _super.call(this) || this;
            }
            WarYirenSelectItemStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("PfSkin", "WarYirenSelectItem"));
            };
            WarYirenSelectItemStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_button = this.getController("button");
                this.m_bg = (this.getChild("bg"));
                this.m_bgOk = (this.getChild("bgOk"));
                this.m_bgJiaobiao = (this.getChild("bgJiaobiao"));
                this.m_sex = (this.getChild("sex"));
                this.m_role = (this.getChild("role"));
                this.m_roleTip = (this.getChild("roleTip"));
                this.m_addIcon = (this.getChild("addIcon"));
                this.m_nation = (this.getChild("nation"));
                this.m_iconOk = (this.getChild("iconOk"));
                this.m_selectAni = (this.getChild("selectAni"));
                this.m_kuangOk = (this.getChild("kuangOk"));
                this.m_nameOk = (this.getChild("nameOk"));
                this.m_yirenType1 = (this.getChild("yirenType1"));
                this.m_yirenType2 = (this.getChild("yirenType2"));
                this.m_ani = this.getTransition("ani");
            };
            WarYirenSelectItemStruct.URL = "ui://s33x84186ve81fz";
            WarYirenSelectItemStruct.DependPackages = ["PfSkin"];
            return WarYirenSelectItemStruct;
        }(fairygui.GButton));
        PfSkin.WarYirenSelectItemStruct = WarYirenSelectItemStruct;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=WarYirenSelectItemStruct.js.map