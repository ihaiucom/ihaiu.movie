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
                if (buyGoods) {
                    this.m_buyGoods.visible = true;
                    this.m_buyGoods.RenderItem(buyGoods);
                    this.m_buyGoods.title = this.data.name;
                }
                else {
                    this.m_buyGoods.visible = false;
                }
                if (giveGoods && giveGoods.length > 0) {
                    this.m_giveGoods.visible = true;
                    this.m_giveGoods.RenderItem(giveGoods);
                    this.m_giveGoods.title = Games.TEXT.ShopGive;
                }
                else {
                    this.m_giveGoods.visible = false;
                }
                this.m_btnSelect.title = this.data.rechangeDesc;
                if (this.data.limit.itemId == 3) {
                    this.m_btnSelect.enabled = !Game.moduleModel.secretary.isForever;
                }
            };
            ShopRechargeItem.prototype.OnSelect = function () {
                // Game.system.toastText("功能未开放 " + this.data.product_id);
                Game.protosender.pay.StartOrder(this.data.id, 1);
            };
            return ShopRechargeItem;
        }(PfSkin.ShopRechargeItemStruct));
        PfSkin.ShopRechargeItem = ShopRechargeItem;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=ShopRechargeItem.js.map