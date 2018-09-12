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
        var ShopItem = /** @class */ (function (_super) {
            __extends(ShopItem, _super);
            function ShopItem() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            ShopItem.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_btnSelect.onClick(this, this.OnSelect);
                this.m_btnSelect.title = null;
            };
            ShopItem.prototype.RenderItem = function (data) {
                this.goodsData = data;
                if (data && data.Config) {
                    this.m_tip.text = data.Limit.toString();
                    this.m_tiptitle.text = data.LimitString;
                    this.m_name.text = data.Config.name;
                    if (data.Items && data.Items[0]) {
                        var item = data.Items[0];
                        this.m_labItem.title = item.itemNumTxt;
                        this.m_labItem.icon = Games.ItemData.GetIconUrl(item.itemId);
                    }
                    if (data.Config.cost) {
                        var cost = data.Config.cost;
                        this.m_labCost.m_number.text = cost.itemNumTxt;
                        this.m_labCost.m_icon.url = Games.ItemData.GetIconUrl(cost.itemId);
                        ;
                    }
                    this.m_hasPeriodTime.setSelectedIndex(this.goodsData.Config.hasPeriodTime ? 1 : 0);
                    this.m_hasSallUp.setSelectedIndex(this.goodsData.saleNums == 0 ? 1 : 0);
                    if (this.m_hasSallUp[1]) {
                        this.m_labItem.m_icon.grayed = true;
                        this.m_labItem.grayed = true;
                    }
                    else {
                        this.m_labItem.m_icon.grayed = false;
                    }
                }
            };
            ShopItem.prototype.OnSelect = function () {
                if (this.goodsData && this.goodsData.Config) {
                    if (this.goodsData.saleNums > 0) {
                        if (!this.goodsData.isPeriodTime) {
                            Game.system.toastMsg(MsgKey.shop_period, this.goodsData.Config.period);
                            return;
                        }
                        var cost = this.goodsData.Config.cost;
                        if (Game.moduleModel.item.hasItemNum(cost.itemId, cost.itemNum)) {
                            if (this.buyHandler) {
                                this.buyHandler.runWith([this.goodsData.Items]);
                            }
                            Game.protosender.mall.buy(this.goodsData.id, 1, cost.itemId);
                        }
                        else {
                            Game.system.openItemWay(cost.itemId, cost.itemNum);
                        }
                    }
                }
            };
            return ShopItem;
        }(PfSkin.ShopItemStruct));
        PfSkin.ShopItem = ShopItem;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=ShopItem.js.map