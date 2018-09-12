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
        var ShopRechargeItemStruct = /** @class */ (function (_super) {
            __extends(ShopRechargeItemStruct, _super);
            function ShopRechargeItemStruct() {
                return _super.call(this) || this;
            }
            ShopRechargeItemStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("PfSkin", "ShopRechargeItem"));
            };
            ShopRechargeItemStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_isFirstDouble = this.getController("isFirstDouble");
                this.m_txtTip = (this.getChild("txtTip"));
                this.m_imgTipFirst = (this.getChild("imgTipFirst"));
                this.m_buyGoods = (this.getChild("buyGoods"));
                this.m_giveGoods = (this.getChild("giveGoods"));
                this.m_btnSelect = (this.getChild("btnSelect"));
            };
            ShopRechargeItemStruct.URL = "ui://s33x8418ap5a1uz";
            ShopRechargeItemStruct.DependPackages = ["PfSkin", "Common"];
            return ShopRechargeItemStruct;
        }(fairygui.GComponent));
        PfSkin.ShopRechargeItemStruct = ShopRechargeItemStruct;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=ShopRechargeItemStruct.js.map