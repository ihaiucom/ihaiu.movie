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
        var BagItemInfo = /** @class */ (function (_super) {
            __extends(BagItemInfo, _super);
            function BagItemInfo() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.GetItems = [];
                return _this;
            }
            BagItemInfo.prototype.InitView = function () {
                this.m_btnCompound.onClick(this, this.OnBtnCompoundClick);
                this.m_btnGive.onClick(this, this.OnBtnGiveClick);
                this.m_btnResolve.onClick(this, this.OnBtnResolveClick);
                this.m_btnSale.onClick(this, this.OnBtnSaleClick);
                this.m_btnUse.onClick(this, this.OnBtnUseClick);
                this.m_btnInfo.onClick(this, this.OnBtnInfo);
            };
            BagItemInfo.prototype.UpdateView = function (id) {
                this.itemData = Game.moduleModel.item.getItem(id);
                if (this.itemData.itemType == 7) {
                    this.m_labActor.m_actor.m_icon.url = this.itemData.itemBodyIconUrl;
                    this.m_labActor.title = this.itemData.itemNumTxt; // Math.min(this.itemData.itemNum, 9999).toString();
                    this.m_labActor.star = this.itemData.itemStar;
                    this.m_labActor.visible = true;
                    this.m_labItem.visible = false;
                }
                else {
                    this.m_labItem.icon = this.itemData.itemIconUrl;
                    this.m_labItem.title = this.itemData.itemNumTxt; // Math.min(this.itemData.itemNum, 9999).toString();
                    this.m_labItem.star = this.itemData.itemStar;
                    this.m_labActor.visible = false;
                    this.m_labItem.visible = true;
                }
                this.m_txtName.text = this.itemData.itemName;
                this.m_labPrice.icon = Game.moduleModel.item.getItem(3).itemIconUrl;
                this.m_labPrice.title = formatNumberUnit(this.itemData.itemConfig.price).toString();
                this.m_txtInfo.text = this.itemData.itemDes;
                this.UpdateButtonType();
            };
            BagItemInfo.prototype.UpdateButtonType = function () {
                if (this.itemData.itemType == 6) {
                    if (this.itemData.splitItem.length == 0) {
                        this.m_buttonType.setSelectedIndex(4);
                    }
                    else if (this.itemData.compoundItem == null) {
                        this.m_buttonType.setSelectedIndex(5);
                    }
                    else {
                        this.m_buttonType.setSelectedIndex(6);
                    }
                }
                else {
                    var cfg = this.itemData.itemConfig;
                    if (cfg.can_use && cfg.can_sell) {
                        this.m_buttonType.setSelectedIndex(3);
                    }
                    else if (cfg.can_sell) {
                        this.m_buttonType.setSelectedIndex(2);
                    }
                    else if (cfg.can_use) {
                        this.m_buttonType.setSelectedIndex(1);
                    }
                    else {
                        this.m_buttonType.setSelectedIndex(0);
                    }
                }
                this.m_btnInfo.visible = this.itemData.itemType == 7;
            };
            BagItemInfo.prototype.OnBtnCompoundClick = function () {
                this.GetItems = [];
                var limit = this.itemData.compoundNum;
                if (limit == 0) {
                    var needNum = this.itemData.compoundItem.itemNum - this.itemData.itemNum;
                    Game.system.toastMsg(MsgKey.bag_no_compound_tips, needNum);
                    return;
                }
                Game.system.setNumText(limit, Games.TEXT.BagSelectCompoundNum, Games.TEXT.BagCompound, this, this.OnConfirmCompound);
            };
            BagItemInfo.prototype.OnConfirmCompound = function (itemNum) {
                var item = new DTItemNum();
                item.itemId = this.itemData.compoundItem.itemId;
                item.itemNum = itemNum;
                this.GetItems.push(item);
                Game.protosender.item.Compound(this.itemData.uuid, this.itemData.itemId, itemNum);
            };
            BagItemInfo.prototype.OnBtnGiveClick = function () {
                var actorList = this.GetActorListByAsset();
                Game.system.selectActor(actorList, this.OnConfirmGiveActor, this, Games.TEXT.BagSelectGive);
            };
            BagItemInfo.prototype.GetActorListByAsset = function () {
                var list = [];
                var actorList = Game.moduleModel.actor.getActors();
                for (var i = 0; i < actorList.length; i++) {
                    var actor = actorList[i];
                    var assetList = actor.assets;
                    for (var j = 0; j < assetList.length; j++) {
                        var asset = assetList[j];
                        var itemId = asset.item;
                        if (itemId == this.itemData.itemId) {
                            list.push(actor);
                            break;
                        }
                    }
                }
                return list;
            };
            BagItemInfo.prototype.OnConfirmGiveActor = function (actorId) {
                Game.menu.open(MenuId.ArtistDetail, actorId, Games.ArtistDetailTabType.Asset);
                // this.protoGiveData = { actorId: actorId };
                // let actor = Game.moduleModel.actor.getActor(actorId);
                // this.UpdateActorAssetTypeAndLv(actor);
                // // TODO 获得数量
                // let limit = Math.min(this.itemData.itemNum, actor.giveAssetsCountLimit - actor.giveAssetsCount);
                // Game.system.setNumText(limit, Games.TEXT.BagSelectGiveNum, Games.TEXT.BagGive, this, this.OnConfirmGiveNum);
            };
            // 更新protoGiveData里的actorType和actorLv
            BagItemInfo.prototype.UpdateActorAssetTypeAndLv = function (actor) {
                var assetList = actor.giveAssetsList;
                for (var j = 0; j < assetList.length; j++) {
                    var asset = assetList[j];
                    for (var k = 0; k < asset.giveItemList.length; k++) {
                        var item = asset.giveItemList[k];
                        if (item.itemId == this.itemData.itemId) {
                            this.protoGiveData.actorLv = asset.giveLevel;
                            this.protoGiveData.actorType = asset.giveType;
                            return;
                        }
                    }
                }
            };
            BagItemInfo.prototype.OnConfirmGiveNum = function (itemNum) {
                var uuid = Game.moduleModel.actor.getActor(this.protoGiveData.actorId).uuid;
                var actorType = this.protoGiveData.actorType;
                var actorLv = this.protoGiveData.actorLv;
                Game.protosender.Actor.giveActorAssets(uuid, actorType, actorLv, itemNum);
            };
            BagItemInfo.prototype.OnBtnResolveClick = function () {
                this.GetItems = [];
                var limit = this.itemData.itemNum;
                Game.system.setNumText(limit, Games.TEXT.BagSelectResolveNum, Games.TEXT.BagResolve, this, this.OnConfirmResolve);
            };
            BagItemInfo.prototype.OnConfirmResolve = function (itemNum) {
                for (var index = 0; index < this.itemData.splitItem.length; index++) {
                    var item = new DTItemNum();
                    item.itemId = this.itemData.splitItem[index].itemId;
                    item.itemNum = this.itemData.splitItem[index].itemNum * itemNum;
                    this.GetItems.push(item);
                }
                Game.protosender.item.Split(this.itemData.uuid, this.itemData.itemId, itemNum);
            };
            BagItemInfo.prototype.OnBtnSaleClick = function () {
                // TODO 获得数量
                var limit = this.itemData.itemNum;
                Game.system.setNumText(limit, Games.TEXT.BagSelectSaleNum, Games.TEXT.BagSale, this, this.OnConfirmSale);
            };
            BagItemInfo.prototype.OnConfirmSale = function (num) {
                var item = new DTItemNum();
                item.itemId = 3;
                item.itemNum = num * this.itemData.itemConfig.price;
                this.GetItems = [item];
                Game.protosender.item.SellOut(this.itemData.uuid, this.itemData.itemId, num);
            };
            BagItemInfo.prototype.OnBtnUseClick = function () {
                this.GetItems = [];
                if (this.itemData.itemType == 7) {
                    if (Game.moduleModel.actor.actorIsMax) {
                        Game.system.confirmBuyText(Games.TEXT.AlertTextBuyActor, GlobalConfig.getValue1(GlobalKey.KEY_1009_ZuanDanZengJia__ShuLiangXiaoHao), null, function () {
                            Game.protosender.Actor.addActorSlot();
                        });
                        return;
                    }
                    if (this.itemData.compoundActor) {
                        var actorId = this.itemData.compoundActor.itemId;
                        if (Game.moduleModel.actor.getActor(actorId) != null) {
                            Game.system.toastMsg(MsgKey.bag_own_actor_tips);
                            return;
                        }
                        var limit = this.itemData.compoundActorNum;
                        if (limit == 0) {
                            var needNum = this.itemData.compoundActor.itemNum - this.itemData.itemNum;
                            Game.system.toastMsg(MsgKey.bag_no_compound_tips, needNum);
                            return;
                        }
                        Game.protosender.item.CompoundActor(this.itemData.uuid, this.itemData.itemId);
                    }
                    else {
                        Game.system.setNumText(this.itemData.itemNum, Games.TEXT.BagSelectUseNum, Games.TEXT.BagUse, this, this.OnConfirmUse);
                    }
                }
                else {
                    this.GetItems = [];
                    Game.system.setNumText(this.itemData.itemNum, Games.TEXT.BagSelectUseNum, Games.TEXT.BagUse, this, this.OnConfirmUse);
                }
            };
            BagItemInfo.prototype.OnConfirmUse = function (itemNum) {
                Game.protosender.item.Use(this.itemData.uuid, this.itemData.itemId, itemNum);
            };
            BagItemInfo.prototype.OnBtnInfo = function () {
                var actorId = this.itemData.compoundActor.itemId;
                Game.menu.open(MenuId.ActorDetail, actorId);
            };
            BagItemInfo.prototype.OnItemDataResponse = function () {
            };
            BagItemInfo.prototype.OnSellOutResponse = function () {
                Game.system.getItemText(this.GetItems);
            };
            BagItemInfo.prototype.OnCompoundResponse = function () {
                Game.system.getItemText(this.GetItems);
            };
            BagItemInfo.prototype.OnSplitResponse = function () {
                Game.system.getItemText(this.GetItems);
            };
            BagItemInfo.prototype.OnUseResponse = function () {
                // Game.system.getItemText(this.GetItems);
            };
            BagItemInfo.prototype.OnCompoundActorResponse = function () {
            };
            BagItemInfo.prototype.Show = function () {
                this.visible = true;
            };
            BagItemInfo.prototype.Hide = function () {
                this.visible = false;
            };
            return BagItemInfo;
        }(Bag.BagItemInfoStruct));
        Bag.BagItemInfo = BagItemInfo;
    })(Bag = fgui.Bag || (fgui.Bag = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=BagItemInfo.js.map