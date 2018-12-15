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
    var Bag;
    (function (Bag) {
        var BagType;
        (function (BagType) {
        })(BagType || (BagType = {}));
        var BagMainPanel = /** @class */ (function (_super) {
            __extends(BagMainPanel, _super);
            function BagMainPanel() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.bagTab = [
                    [4], [5, 8, 9, 17], [6], [7, 16],
                ];
                return _this;
            }
            BagMainPanel.prototype.onWindowInited = function () {
                this.m_btnClose.onClick(this, this.OnCloseClick);
                this.m_listBagItem.itemRenderer = new Handler(this, this.RenderItem, null, false);
                this.m_listBagItem.setVirtual();
                this.m_listBagItem.on(fairygui.Events.CLICK_ITEM, this, this.OnItemClick);
                this.m_listBagItem.itemProvider = new Handler(this, this.GetListItemResource, null, false);
                this.m_listTab.on(fairygui.Events.CLICK_ITEM, this, this.OnTabClick);
                this.m_btnLv.onClick(this, this.OnBtnLvClick);
                this.m_itemInfo.InitView();
            };
            BagMainPanel.prototype.onWindowShow = function () {
                this.AddProtoHandler();
                this.UpdateView();
            };
            BagMainPanel.prototype.onWindowHide = function () {
                this.RemoveProtoHandler();
            };
            BagMainPanel.prototype.UpdateView = function () {
                if (this.selectTab == null) {
                    this.selectTab = 0;
                }
                this.m_listTab.selectedIndex = this.selectTab;
                this.UpdateBagItemList();
                this.UpdateItemInfo();
                if (this.m_listTab.selectedIndex == 0) {
                    this.m_txtCapacity.text = Game.moduleModel.bag.GetItemNumByType(4) + "/" + Game.moduleModel.bag.GetBagVolume();
                }
                this.UpdateRed();
            };
            BagMainPanel.prototype.UpdateRed = function () {
                var objGift = this.m_listTab.getChildAt(1);
                var objPact = this.m_listTab.getChildAt(3);
                objGift.Red = Game.moduleModel.bag.RedGift;
                objPact.Red = Game.moduleModel.bag.RedPact;
            };
            BagMainPanel.prototype.UpdateBagItemList = function () {
                var itemTypes = this.GetItemTypes();
                this.itemList = Game.moduleModel.item.GetItemListByType(itemTypes);
                if (this.m_listTab.selectedIndex == 3) {
                    this.itemList = this.itemList.sort(function (a, b) {
                        if (b.itemStar == a.itemStar) {
                            return a.itemId - b.itemId;
                        }
                        return b.itemStar - a.itemStar;
                    });
                }
                this.m_listBagItem.numItems = this.itemList.length;
                var selectIndex = this.GetSelectIndex();
                this.m_listBagItem.selectedIndex = this.GetSelectIndex();
                var scrollIndex = selectIndex - this.m_listBagItem.columnCount > 0 ? selectIndex - this.m_listBagItem.columnCount : 0;
                this.m_listBagItem.scrollToView(scrollIndex, true, true);
            };
            BagMainPanel.prototype.GetItemTypes = function () {
                if (this.m_listTab.selectedIndex >= 0 && this.m_listTab.selectedIndex < this.bagTab.length) {
                    return this.bagTab[this.m_listTab.selectedIndex];
                }
                return [];
            };
            BagMainPanel.prototype.GetSelectIndex = function () {
                if (this.selectItem == null) {
                    return -1;
                }
                var itemType = this.selectItem.itemType;
                var itemTypes = this.GetItemTypes();
                if (itemTypes.indexOf(itemType) >= 0) {
                    for (var index = 0; index < this.itemList.length; index++) {
                        var item = this.itemList[index];
                        if (item.itemId == this.selectItem.itemId) {
                            return index;
                        }
                    }
                }
                return -1;
            };
            BagMainPanel.prototype.UpdateItemInfo = function () {
                var itemData = this.selectItem;
                if (itemData == null || itemData.itemNum == 0) {
                    this.m_isShowInfo.setSelectedIndex(0);
                    this.m_itemInfo.Hide();
                    return;
                }
                this.m_isShowInfo.setSelectedIndex(1);
                this.m_itemInfo.UpdateView(itemData.itemId);
                this.m_itemInfo.Show();
            };
            BagMainPanel.prototype.OnCloseClick = function () {
                this.selectItem = null;
                this.selectTab = null;
                this.moduleWindow.menuClose();
            };
            BagMainPanel.prototype.RenderItem = function (index, obj) {
                if (this.m_listTab.selectedIndex == 3) {
                    var itemObj = obj;
                    var data = this.itemList[index];
                    itemObj.RenderItem(data);
                }
                else {
                    var itemObj = obj;
                    var data = this.itemList[index];
                    itemObj.RenderItem(data);
                }
            };
            BagMainPanel.prototype.OnItemClick = function (obj) {
                this.selectItem = this.itemList[this.m_listBagItem.selectedIndex];
                this.m_isShowInfo.setSelectedIndex(1);
                this.UpdateItemInfo();
            };
            BagMainPanel.prototype.OnTabClick = function (obj) {
                this.selectTab = this.m_listTab.selectedIndex;
                this.UpdateView();
            };
            BagMainPanel.prototype.GetListItemResource = function (index) {
                if (this.m_listTab.selectedIndex == 3)
                    return fgui.Bag.PactItem.URL;
                else
                    return fgui.Bag.PropItem.URL;
            };
            BagMainPanel.prototype.OnBtnLvClick = function () {
                var roomInfo = Game.moduleModel.building.getRoomByType(6);
                if (roomInfo) {
                    Game.menu.open(MenuId.BuildRoomUpgrade, roomInfo);
                }
            };
            BagMainPanel.prototype.AddProtoHandler = function () {
                Game.protoOkEvent.add(ProtoEventKey.item_SellOut, this.OnSellOutResponse, this);
                Game.protoOkEvent.add(ProtoEventKey.item_Compound, this.OnCompoundResponse, this);
                Game.protoOkEvent.add(ProtoEventKey.item_CompoundActor, this.OnCompoundActorResponse, this);
                Game.protoOkEvent.add(ProtoEventKey.item_Split, this.OnSplitResponse, this);
                Game.protoOkEvent.add(ProtoEventKey.item_Use, this.OnUseResponse, this);
                Game.protoOkEvent.add(ProtoEventKey.ItemData, this.OnItemDataResponse, this);
                Game.protoOkEvent.add(ProtoEventKey.CinemaBuild_UpgradeRoom, this.OnCinemaBuildUpgradeRoomResponse, this);
                Game.protoOkEvent.add(ProtoEventKey.CinemaBuild_BuildRoom, this.OnCinemaBuildUpgradeRoomResponse, this);
                Game.moduleModel.actor.sAddActorList.add(this.onAddActorHandler, this);
            };
            BagMainPanel.prototype.RemoveProtoHandler = function () {
                Game.protoOkEvent.remove(ProtoEventKey.item_SellOut, this.OnSellOutResponse, this);
                Game.protoOkEvent.remove(ProtoEventKey.item_Compound, this.OnCompoundResponse, this);
                Game.protoOkEvent.remove(ProtoEventKey.item_CompoundActor, this.OnCompoundActorResponse, this);
                Game.protoOkEvent.remove(ProtoEventKey.item_Split, this.OnSplitResponse, this);
                Game.protoOkEvent.remove(ProtoEventKey.item_Use, this.OnUseResponse, this);
                Game.protoOkEvent.remove(ProtoEventKey.ItemData, this.OnItemDataResponse, this);
                Game.protoOkEvent.remove(ProtoEventKey.CinemaBuild_UpgradeRoom, this.OnCinemaBuildUpgradeRoomResponse, this);
                Game.protoOkEvent.remove(ProtoEventKey.CinemaBuild_BuildRoom, this.OnCinemaBuildUpgradeRoomResponse, this);
                Game.moduleModel.actor.sAddActorList.remove(this.onAddActorHandler, this);
            };
            BagMainPanel.prototype.OnCinemaBuildUpgradeRoomResponse = function () {
                this.UpdateView();
            };
            BagMainPanel.prototype.OnItemDataResponse = function () {
                this.m_itemInfo.OnItemDataResponse();
                this.UpdateView();
            };
            BagMainPanel.prototype.OnSellOutResponse = function () {
                this.m_itemInfo.OnSellOutResponse();
                this.UpdateView();
            };
            BagMainPanel.prototype.OnCompoundResponse = function () {
                this.m_itemInfo.OnCompoundResponse();
                this.UpdateView();
            };
            BagMainPanel.prototype.OnSplitResponse = function () {
                this.m_itemInfo.OnSplitResponse();
                this.UpdateView();
            };
            BagMainPanel.prototype.OnUseResponse = function () {
                this.m_itemInfo.OnUseResponse();
                this.UpdateView();
            };
            BagMainPanel.prototype.OnCompoundActorResponse = function () {
                this.m_itemInfo.OnCompoundActorResponse();
                this.UpdateView();
            };
            BagMainPanel.prototype.onAddActorHandler = function (data) {
                Game.menu.open(MenuId.ArtistScoutSuccess, data);
            };
            return BagMainPanel;
        }(Bag.BagMainPanelStruct));
        Bag.BagMainPanel = BagMainPanel;
    })(Bag = fgui.Bag || (fgui.Bag = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=BagMainPanel.js.map