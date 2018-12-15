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
        var ShopMainPanel = /** @class */ (function (_super) {
            __extends(ShopMainPanel, _super);
            function ShopMainPanel() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.assetTypes = [1, 6];
                return _this;
            }
            ShopMainPanel.prototype.onWindowInited = function () {
                //todo asset
                this.m_listAsset.itemRenderer = new Handler(this, this.RenderAsset, null, false);
                //todo close
                this.m_btnClose.onClick(this, this.OnCloseClick);
                this.m_listTab.itemRenderer = new Handler(this, this.RenderTab, null, false);
                this.m_listTab.on(fairygui.Events.CLICK_ITEM, this, this.OnTabSelect);
                this.m_listSingleItem.itemRenderer = new Handler(this, this.RenderSignalItem, null, false);
                this.m_listSpecialItem.itemRenderer = new Handler(this, this.RenderSpecialItem, null, false);
            };
            ShopMainPanel.prototype.onWindowOpen = function () {
                var arg = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    arg[_i] = arguments[_i];
                }
                // Game.moduleModel.shop.InitLocalData();
                Game.localStorage.lastOpenShopSingleTime = Game.time.serverMilliseconds;
                this.shopType = 1;
                this.m_listTab.selectedIndex = 0;
            };
            ShopMainPanel.prototype.UpdateView = function () {
                this.GoodsList = Game.moduleModel.shop.GetGoodsByShopType(this.shopType);
                switch (this.shopType) {
                    case 1:
                        this.m_listSingleItem.numItems = Math.ceil(this.GoodsList.length / 3.0);
                        break;
                    case 2:
                        this.m_listSpecialItem.numItems = this.GoodsList.length;
                        break;
                    case 3:
                        break;
                    default:
                        break;
                }
                this.m_listTab.numItems = 2;
            };
            ShopMainPanel.prototype.UpdateAsset = function () {
                this.m_listAsset.numItems = this.assetTypes.length;
            };
            ShopMainPanel.prototype.RenderAsset = function (index, item) {
                var id = this.assetTypes[index];
                item.setItemId(id);
            };
            ShopMainPanel.prototype.RenderTab = function (index, item) {
                item.Red = Game.moduleModel.shop.GetRedNumByType(index + 1);
            };
            ShopMainPanel.prototype.OnTabSelect = function (item) {
                switch (this.m_listTab.selectedIndex) {
                    case 0:
                        Game.localStorage.lastOpenShopSingleTime = Game.time.serverMilliseconds;
                        this.shopType = 1;
                        break;
                    case 1:
                        Game.localStorage.lastOpenShopSpecialTime = Game.time.serverMilliseconds;
                        this.shopType = 2;
                        break;
                    case 2:
                        this.shopType = 3;
                        break;
                    default:
                        break;
                }
                this.UpdateView();
            };
            ShopMainPanel.prototype.RenderSignalItem = function (index, item) {
                var goodsLine = this.GoodsList.slice(index * 3, index * 3 + 3);
                var handler = new Handler(this, this.OnBuy, null, false);
                item.RenderItem(goodsLine, handler);
            };
            ShopMainPanel.prototype.OnBuy = function (items, pos) {
                this.buyItems = items;
                this.buyPos = pos;
            };
            ShopMainPanel.prototype.RenderSpecialItem = function (index, item) {
                var goods = this.GoodsList[index];
                item.RenderItem(goods);
                item.buyHandler = new Handler(this, this.OnBuy, null, false);
            };
            ShopMainPanel.prototype.onWindowShow = function () {
                Game.protoOkEvent.add(ProtoEventKey.mall_buy, this.OnMallBuyResponse, this);
                Game.protoOkEvent.add(ProtoEventKey.MallItemLimitData, this.UpdateView, this);
                Game.protoOkEvent.add(ProtoEventKey.ItemData, this.UpdateAsset, this);
                Game.event.add(GameEventKey.GameEventKey_TimeLimitRemind, this.GameEventKey_TimeLimitRemind, this);
                this.UpdateAsset();
                this.UpdateView();
            };
            ShopMainPanel.prototype.onWindowHide = function () {
                Game.protoOkEvent.remove(ProtoEventKey.mall_buy, this.OnMallBuyResponse, this);
                Game.protoOkEvent.remove(ProtoEventKey.MallItemLimitData, this.UpdateView, this);
                Game.protoOkEvent.remove(ProtoEventKey.ItemData, this.UpdateAsset, this);
                Game.event.remove(GameEventKey.GameEventKey_TimeLimitRemind, this.GameEventKey_TimeLimitRemind, this);
            };
            ShopMainPanel.prototype.GameEventKey_TimeLimitRemind = function (timeLimit) {
                switch (timeLimit) {
                    case Games.TimeLimitType.Zero:
                        {
                            if (User.isTenTime) {
                                Game.moduleModel.shop.ClearGoodsLimit();
                                this.UpdateView();
                            }
                        }
                        break;
                }
            };
            ShopMainPanel.prototype.OnCloseClick = function () {
                this.moduleWindow.menuClose();
            };
            ShopMainPanel.prototype.OnMallBuyResponse = function () {
                if (this.buyItems) {
                    // let root = Game.system.getItemText(this.buyItems);
                    Game.system.showAssetFx(Games.ItemData.BinningItemList(this.buyItems), this, this.buyPos);
                }
                // Game.sound.playSound(SoundKey.MM10_PayMent);
                this.UpdateView();
            };
            return ShopMainPanel;
        }(PfSkin.ShopMainPanelStruct));
        PfSkin.ShopMainPanel = ShopMainPanel;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=ShopMainPanel.js.map