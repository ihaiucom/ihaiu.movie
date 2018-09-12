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
        var WarYRItemStruct = /** @class */ (function (_super) {
            __extends(WarYRItemStruct, _super);
            function WarYRItemStruct() {
                return _super.call(this) || this;
            }
            WarYRItemStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("PfSkin", "WarYRItem"));
            };
            WarYRItemStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_button = this.getController("button");
                this.m_YRHave = this.getController("YRHave");
                this.m_bg = (this.getChild("bg"));
                this.m_iconPos = (this.getChild("iconPos"));
                this.m_AttributeTip = (this.getChild("AttributeTip"));
                this.m_temName = (this.getChild("temName"));
                this.m_icon = (this.getChild("icon"));
                this.m_tip = (this.getChild("tip"));
                this.m_lv = (this.getChild("lv"));
                this.m_yrName = (this.getChild("yrName"));
                this.m_selectAni = (this.getChild("selectAni"));
                this.m_star = (this.getChild("star"));
                this.m_attribute1 = (this.getChild("attribute1"));
                this.m_attribute2 = (this.getChild("attribute2"));
                this.m_ready = (this.getChild("ready"));
                this.m_okBtn = (this.getChild("okBtn"));
                this.m_infBtn = (this.getChild("infBtn"));
                this.m_t0 = this.getTransition("t0");
            };
            WarYRItemStruct.URL = "ui://s33x84186ve81g3";
            WarYRItemStruct.DependPackages = ["PfSkin"];
            return WarYRItemStruct;
        }(fairygui.GButton));
        PfSkin.WarYRItemStruct = WarYRItemStruct;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=WarYRItemStruct.js.map