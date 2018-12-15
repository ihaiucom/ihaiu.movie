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
        var ShopSpecialItem = /** @class */ (function (_super) {
            __extends(ShopSpecialItem, _super);
            function ShopSpecialItem() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            ShopSpecialItem.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_btnSelect.onClick(this, this.OnSelect);
                this.m_listItem.itemRenderer = new Handler(this, this.RenderGoodsItem, null, false);
            };
            ShopSpecialItem.prototype.RenderItem = function (data) {
                this.goodsData = data;
                if (this.goodsData && this.goodsData.Config) {
                    this.m_name.text = data.Config.name;
                    this.m_btnSelect.title = null;
                    this.m_tip.text = data.saleNums.toString();
                    this.m_tipTitle.text = data.LimitString;
                    var cost = data.Config.cost;
                    this.m_labCost.m_number.text = cost.itemNumTxt;
                    this.m_labCost.icon = Games.ItemData.GetIconUrl(cost.itemId);
                    var itemList = data.Items;
                    this.m_listItem.numItems = itemList.length;
                    this.m_hasSallUp.setSelectedIndex(this.goodsData.saleNums == 0 ? 1 : 0);
                    this.UpdateAfterTime();
                    Laya.timer.loop(1000, this, this.UpdateAfterTime);
                }
            };
            ShopSpecialItem.prototype.UpdateAfterTime = function () {
                if (this.goodsData.isAfterTime) {
                    if (this.goodsData.Config.hasPeriodTime && (!this.goodsData.isPeriodTime)) {
                        this.m_hasPeriodTime.setSelectedIndex(1);
                    }
                    else {
                        this.m_hasPeriodTime.setSelectedIndex(0);
                    }
                }
                else {
                    this.m_hasPeriodTime.setSelectedIndex(2);
                    this.m_timeAfterBuy.text = Game.config.msg.getTxtFormat(MsgKey.purchase_delay, this.goodsData.afterTimeTxt);
                }
            };
            ShopSpecialItem.prototype.RenderGoodsItem = function (index, item) {
                if (this.goodsData && this.goodsData.Config) {
                    var itemList = this.goodsData.Items;
                    if (itemList) {
                        var itemData = itemList[index];
                        item.RenderItem(itemData);
                    }
                }
            };
            ShopSpecialItem.prototype.OnSelect = function () {
                if (this.goodsData && this.goodsData.Config) {
                    if (this.goodsData.saleNums > 0) {
                        if (!this.goodsData.isAfterTime) {
                            Game.system.toastMsg(MsgKey.purchase_delay_msg);
                            return;
                        }
                        if (!this.goodsData.isPeriodTime) {
                            Game.system.toastMsg(MsgKey.shop_period, this.goodsData.Config.period);
                            return;
                        }
                        var cost = this.goodsData.Config.cost;
                        if (Game.moduleModel.item.hasItemNum(cost.itemId, cost.itemNum)) {
                            if (this.buyHandler) {
                                console.log(this.x, this.y, this.width, this.height);
                                var pos = this.parent.localToGlobal(this.x + this.width / 2, this.y + this.height / 2);
                                console.log(pos.x, pos.y);
                                console.log(this.parent.x, this.parent.y);
                                this.buyHandler.runWith([this.goodsData.Items, this.localToGlobal(this.m_btnSelect.x + this.m_btnSelect.width / 2, this.m_btnSelect.y + this.m_btnSelect.height / 2)]);
                            }
                            Game.protosender.mall.buy(this.goodsData.id, 1, cost.itemId);
                            Games.Static.Instance.onUseGold(this.goodsData.id.toString(), cost.itemNum, "shopBuy&");
                        }
                        else {
                            Game.system.openItemWay(cost.itemId, cost.itemNum);
                        }
                    }
                }
            };
            return ShopSpecialItem;
        }(PfSkin.ShopSpecialItemStruct));
        PfSkin.ShopSpecialItem = ShopSpecialItem;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=ShopSpecialItem.js.map