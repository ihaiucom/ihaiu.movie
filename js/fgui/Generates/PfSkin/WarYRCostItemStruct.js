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
        var WarYRCostItemStruct = /** @class */ (function (_super) {
            __extends(WarYRCostItemStruct, _super);
            function WarYRCostItemStruct() {
                return _super.call(this) || this;
            }
            WarYRCostItemStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("PfSkin", "WarYRCostItem"));
            };
            WarYRCostItemStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_costOrNo = this.getController("costOrNo");
                this.m_bg = (this.getChild("bg"));
                this.m_juese = (this.getChild("juese"));
                this.m_icon = (this.getChild("icon"));
                this.m_costIcon = (this.getChild("costIcon"));
                this.m_costText = (this.getChild("costText"));
                this.m_noCostTip1 = (this.getChild("noCostTip1"));
                this.m_noCostTip2 = (this.getChild("noCostTip2"));
                this.m_name = (this.getChild("name"));
                this.m_iconCom = (this.getChild("iconCom"));
            };
            WarYRCostItemStruct.URL = "ui://s33x84186ve81gb";
            WarYRCostItemStruct.DependPackages = ["PfSkin"];
            return WarYRCostItemStruct;
        }(fairygui.GComponent));
        PfSkin.WarYRCostItemStruct = WarYRCostItemStruct;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=WarYRCostItemStruct.js.map