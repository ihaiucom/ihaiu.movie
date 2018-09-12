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
        var ShopRechargeItem = /** @class */ (function (_super) {
            __extends(ShopRechargeItem, _super);
            function ShopRechargeItem() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            ShopRechargeItem.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_btnSelect.onClick(this, this.OnSelect);
            };
            ShopRechargeItem.prototype.RenderItem = function (data) {
                this.data = data;
                var buyGoods = this.data.item;
                var giveGoods = this.data.gift;
                this.m_txtTip.text = Games.TEXT.ShopAvailable.format(this.data.term);
                this.m_buyGoods.RenderItem(buyGoods);
                this.m_buyGoods.title = this.data.name;
                this.m_giveGoods.RenderItem(giveGoods);
                this.m_giveGoods.title = Games.TEXT.ShopGive;
                this.m_btnSelect.title = this.data.cost_dollar.toString();
            };
            ShopRechargeItem.prototype.OnSelect = function () {
                Game.system.toastText("功能未开放");
            };
            return ShopRechargeItem;
        }(PfSkin.ShopRechargeItemStruct));
        PfSkin.ShopRechargeItem = ShopRechargeItem;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=ShopRechargeItem.js.map