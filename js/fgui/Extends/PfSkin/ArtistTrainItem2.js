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
        var ArtistTrainItem2 = /** @class */ (function (_super) {
            __extends(ArtistTrainItem2, _super);
            function ArtistTrainItem2() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            /**
             *
             * @param data
             * @param index
             */
            ArtistTrainItem2.prototype.updateView = function (data, index, isMax) {
                if (isMax === void 0) { isMax = false; }
                this.actorData = data;
                this.isMax = isMax;
                this.type = index + 1;
                this.trainData = this.actorData.getNextTrainDataByType(index);
                this.m_desc.text = Games.TEXT.GetRandomTrainAttr;
                this.m_desc.visible = false;
                this.m_title.text = this.trainData.name;
                this.m_attrList.numItems = this.trainData.property.length;
                this.m_upgradeBtn.m_goldIcon.icon = Game.config.item.getConfig(this.trainData.cost[0].itemId).iconUrl;
                this.m_upgradeBtn.m_cardIcon.icon = Game.config.item.getConfig(this.trainData.cost[1].itemId).iconUrl;
                this.m_upgradeBtn.m_gold.text = data.upgradeTrainCostGoldNum(this.type) + "";
                this.m_upgradeBtn.m_page.text = formatNumberUnit(this.trainData.cost[1].itemNum);
            };
            ArtistTrainItem2.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_lockGroup.visible = false;
                this.m_attrList.itemRenderer = Handler.create(this, this.onUpdateAttrItem, null, false);
                this.m_upgradeBtn.onClick(this, this.onClickUpdateBtn);
            };
            /**
             * 点击培养
             */
            ArtistTrainItem2.prototype.onClickUpdateBtn = function () {
                if (User.info.daysCultivateCount < User.trainNumCount) {
                    if (this.actorData.cultivateCount < this.actorData.cultivateCountLimit) {
                        this.checkItemEnough();
                    }
                    else {
                        Game.system.toastText(Games.TEXT.ActorTrainMax);
                    }
                }
                else {
                    Game.system.toastText(Games.TEXT.CompanyTodayTrainMax);
                }
            };
            ArtistTrainItem2.prototype.checkItemEnough = function () {
                if (this.isMax) {
                    var enough = Games.ItemHelper.checkItemEnough3(GlobalConfig.getValue1(GlobalKey.KEY_1012_ZuanDanPeiYang__YiRenXiaoHao));
                    if (enough) {
                        this.upgrade();
                    }
                }
                else {
                    this.upgrade();
                }
            };
            ArtistTrainItem2.prototype.upgrade = function () {
                var goldCost = new DTItemNum();
                goldCost.itemId = this.trainData.cost[0].itemId;
                goldCost.itemNum = this.actorData.upgradeTrainCostGoldNum(this.type);
                var cost = [goldCost, this.trainData.cost[1]];
                var enough = Games.ItemHelper.checkItemsEnough(cost);
                if (enough) {
                    Game.protosender.Actor.actorTrain(this.actorData.uuid, this.type, this.isMax);
                }
                else {
                    var notEnoughItem = Games.ItemHelper.getItemNotEnough(cost);
                    Game.system.openItemWay(notEnoughItem.itemId, notEnoughItem.itemNum);
                    // Game.system.toastItemNotEnough(Games.ItemHelper.getItemNotEnoughId(this.config.cost));
                }
            };
            /**
             * 属性
             * @param index
             * @param item
             */
            ArtistTrainItem2.prototype.onUpdateAttrItem = function (index, item) {
                var item1 = item;
                var dtRandom = this.trainData.property_interval[index];
                var min = dtRandom[0];
                var max = dtRandom[1];
                if (this.isMax) {
                    item1.title = format("+ {0} ~ {1}", max, max);
                }
                else {
                    item1.title = format("+ {0} ~ {1}", min, max);
                }
                var propConfig = Game.config.property.getConfig(this.trainData.property[index]);
                item1.icon = Game.config.avatar.getConfig(propConfig.icon).iconUrl;
            };
            return ArtistTrainItem2;
        }(PfSkin.ArtistTrainItem2Struct));
        PfSkin.ArtistTrainItem2 = ArtistTrainItem2;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=ArtistTrainItem2.js.map