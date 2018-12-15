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
        var ArtistTrainUI = /** @class */ (function (_super) {
            __extends(ArtistTrainUI, _super);
            function ArtistTrainUI() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            ArtistTrainUI.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.attrLabels = [this.m_attrLabel1, this.m_attrLabel2, this.m_attrLabel3, this.m_attrLabel4];
                this.attrIcons = [this.m_attrIcon1, this.m_attrIcon2, this.m_attrIcon3, this.m_attrIcon4];
                this.m_list.itemRenderer = Handler.create(this, this.onUpdateItem, null, false);
                this.m_actorList.itemRenderer = Handler.create(this, this.onUpdateActorItem, null, false);
                this.m_actorList.on(fairygui.Events.CLICK_ITEM, this, this.onClickActorItem);
                this.m_checkbox.on(fairygui.Events.STATE_CHANGED, this, this.onChangedState);
                this.m_costTrain.text = Games.TEXT.DiamondTrain;
                this.m_trainToGetMax.text = Games.TEXT.DiamondMustBeMax;
                this.m_actorList.setVirtual();
                this.m_list.setVirtual();
            };
            ArtistTrainUI.prototype.onChangedState = function () {
                this.m_list.refreshVirtualList();
            };
            ArtistTrainUI.prototype.onClickActorItem = function (item) {
                var index = this.m_actorList.getChildIndex(item);
                var realIndex = this.m_actorList.childIndexToItemIndex(index);
                this.currentActor = this.actors[realIndex];
                this.refreshView();
            };
            /**
             * 刷新界面
             */
            ArtistTrainUI.prototype.refreshView = function () {
                this.m_list.numItems = 4;
                var props = this.currentActor.getProps();
                for (var index = 0; index < props.length; index++) {
                    var id = props[index];
                    var config = Game.config.property.getConfig(id);
                    var field = config.field;
                    var value = this.currentActor[field];
                    this.attrIcons[index].icon = Game.config.avatar.getConfig(config.icon).iconUrl;
                    this.attrLabels[index].text = value;
                }
                //培养次数
                this.m_artistTrainTimes.text = Games.TEXT.ActorCanUseTrain;
                this.m_trainTimes.text = format("{0}/{1}", this.currentActor.cultivateCount, this.currentActor.cultivateCountLimit);
                //
                var dtItem = this.currentActor.getNextTrainDataByType(1).diamondsCost;
                this.m_superTrainCost.text = dtItem.itemNum + "";
                this.m_superTrainIcon.icon = dtItem.itemIconUrl;
                this.updateCompany();
                //
                this.updateCard();
                //随机增加2种属性文字提示
                this.m_desc.text = Games.TEXT.GetRandomTrainAttr;
            };
            ArtistTrainUI.prototype.updateCompany = function () {
                //公司限制
                this.m_companyTrainTimes.text = Games.TEXT.CompanyTodayTrain;
                this.m_companyTimes.text = format("{0}/{1}", User.info.daysCultivateCount, User.trainNumCount);
            };
            /**
             * 更新道具显示
             */
            ArtistTrainUI.prototype.updateCard = function () {
                //进修卡icon
                this.m_cardIcon.icon = Game.config.item.getConfig(5004).iconUrl;
                //进修卡数量
                this.m_cardNum.text = formatNumberUnit(Game.moduleModel.item.getItemNum(5004));
                //金币
                this.m_gold.setItemId(EItemId.gold);
                //钻石
                this.m_diamand.setItemId(EItemId.diamond);
            };
            /**
             * 更新演员培养属性
             * @param index
             * @param item
             */
            ArtistTrainUI.prototype.onUpdateItem = function (index, item) {
                var item2 = item;
                item2.updateView(this.currentActor, index, this.m_checkbox.selected);
            };
            /**
             * 更新演员
             * @param index
             * @param item
             */
            ArtistTrainUI.prototype.onUpdateActorItem = function (index, item) {
                var item2 = item;
                item2.updateView(this.actors[index]);
            };
            /**
             * 更新界面
             * @param id
             */
            ArtistTrainUI.prototype.updateView = function (id) {
                this.selectedIndex = 0;
                this.actors = Game.moduleModel.actor.getActors();
                if (id != null) {
                    var actorData = Game.moduleModel.actor.getActor(id);
                    this.selectedIndex = this.actors.indexOf(actorData);
                }
                this.m_actorList.numItems = this.actors.length;
                this.m_actorList.addSelection(this.selectedIndex, true);
                this.currentActor = this.actors[this.selectedIndex];
                this.refreshView();
            };
            ArtistTrainUI.prototype.onWindowShow = function () {
                console.log("show");
                Game.protoOkEvent.add(ProtoEventKey.ActorData, this.updateActorInfo, this);
                Game.protoOkEvent.add(ProtoEventKey.ItemData, this.updateItemInfo, this);
                Game.protoOkEvent.add(ProtoEventKey.GameInfo, this.updateCompany, this);
            };
            /**
             * 更新艺人数据
             */
            ArtistTrainUI.prototype.updateActorInfo = function () {
                this.refreshView();
            };
            /**
             * 更新道具信息
             */
            ArtistTrainUI.prototype.updateItemInfo = function () {
                this.updateCard();
            };
            ArtistTrainUI.prototype.onWindowHide = function () {
                console.log("hide");
                Game.protoOkEvent.remove(ProtoEventKey.ActorData, this.updateActorInfo, this);
                Game.protoOkEvent.remove(ProtoEventKey.ItemData, this.updateItemInfo, this);
                Game.protoOkEvent.remove(ProtoEventKey.GameInfo, this.updateCompany, this);
            };
            return ArtistTrainUI;
        }(PfSkin.ArtistTrainUIStruct));
        PfSkin.ArtistTrainUI = ArtistTrainUI;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=ArtistTrainUI.js.map