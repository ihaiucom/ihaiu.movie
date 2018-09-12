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
        var WarYRNoticeItemStruct = /** @class */ (function (_super) {
            __extends(WarYRNoticeItemStruct, _super);
            function WarYRNoticeItemStruct() {
                return _super.call(this) || this;
            }
            WarYRNoticeItemStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("PfSkin", "WarYRNoticeItem"));
            };
            WarYRNoticeItemStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_c1 = this.getController("c1");
                this.m_bg = (this.getChild("bg"));
                this.m_bgXZ = (this.getChild("bgXZ"));
                this.m_luxiang1 = (this.getChild("luxiang1"));
                this.m_luxiang2 = (this.getChild("luxiang2"));
                this.m_luxiang3 = (this.getChild("luxiang3"));
                this.m_luxiang4 = (this.getChild("luxiang4"));
                this.m_luxiang5 = (this.getChild("luxiang5"));
                this.m_luxiang6 = (this.getChild("luxiang6"));
                this.m_luxiang7 = (this.getChild("luxiang7"));
                this.m_luxiang8 = (this.getChild("luxiang8"));
                this.m_titleBg = (this.getChild("titleBg"));
                this.m_bgKuang = (this.getChild("bgKuang"));
                this.m_lv = (this.getChild("lv"));
                this.m_title = (this.getChild("title"));
                this.m_yr1 = (this.getChild("yr1"));
                this.m_yr2 = (this.getChild("yr2"));
                this.m_okTip = (this.getChild("okTip"));
                this.m_bg1 = (this.getChild("bg1"));
                this.m_nvIcon = (this.getChild("nvIcon"));
                this.m_tipBg = (this.getChild("tipBg"));
                this.m_tipArrow = (this.getChild("tipArrow"));
                this.m_tipDes = (this.getChild("tipDes"));
                this.m_tipCom = (this.getChild("tipCom"));
                this.m_selectBtn = (this.getChild("selectBtn"));
            };
            WarYRNoticeItemStruct.URL = "ui://s33x8418k8js1h7";
            WarYRNoticeItemStruct.DependPackages = ["PfSkin"];
            return WarYRNoticeItemStruct;
        }(fairygui.GComponent));
        PfSkin.WarYRNoticeItemStruct = WarYRNoticeItemStruct;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=WarYRNoticeItemStruct.js.map