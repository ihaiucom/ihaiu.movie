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
        var ArtistListPanel = /** @class */ (function (_super) {
            __extends(ArtistListPanel, _super);
            function ArtistListPanel() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            ArtistListPanel.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_list.setVirtual();
                this.m_list.setVirtualAndLoop();
                this.m_list.itemRenderer = Handler.create(this, this.onUpdateItemList, null, false);
                this.m_list.scrollItemToViewOnClick = false;
                this.m_xingtanBtn.m_red.visible = false;
                this.m_name1.text = Games.TEXT.TalentText;
                this.m_name2.text = Games.TEXT.HiddenText;
            };
            /**
             * 更新艺人单条内容
             * @param index
             * @param obj
             */
            ArtistListPanel.prototype.onUpdateItemList = function (index, obj) {
                var item = obj;
                item.updateView(this.actors[index]);
            };
            ArtistListPanel.prototype.onWindowHide = function () {
                this.m_frozenBtn.offClick(this, this.onClickFrozenBtn);
                this.m_xingtanBtn.offClick(this, this.onClickXingTanBtn);
                this.m_add.offClick(this, this.onClickAddBtn);
                this.m_list.off(fairygui.Events.CLICK_ITEM, this, this.onClickArtistItem);
                Game.event.remove(ProtoEventKey.ActorData, this.updateView, this);
                Game.event.remove(ProtoEventKey.Actor_HideActor, this.updateView, this);
                User.sGameInfoUpdate.remove(this.updateView, this);
                // Game.moduleModel.actor.sAddActorList.add(this.onAddActorHandler, this);
                Game.moduleModel.actor.sUpdateActorInfo.remove(this.updateView, this);
            };
            ArtistListPanel.prototype.onWindowShow = function () {
                this.m_frozenBtn.onClick(this, this.onClickFrozenBtn);
                this.m_xingtanBtn.onClick(this, this.onClickXingTanBtn);
                this.m_add.onClick(this, this.onClickAddBtn);
                this.m_list.on(fairygui.Events.CLICK_ITEM, this, this.onClickArtistItem);
                Game.event.add(ProtoEventKey.ActorData, this.updateView, this);
                Game.event.add(ProtoEventKey.Actor_HideActor, this.updateView, this);
                User.sGameInfoUpdate.add(this.updateView, this);
                // Game.moduleModel.actor.sAddActorList.add(this.onAddActorHandler, this);
                Game.moduleModel.actor.sUpdateActorInfo.add(this.updateView, this);
            };
            //  点击艺人
            ArtistListPanel.prototype.onClickArtistItem = function (itemObject) {
                var index = this.m_list.getChildIndex(itemObject);
                var realIndex = this.m_list.childIndexToItemIndex(index);
                Game.sound.playSound(SoundKey.MM01_Button);
                Game.menu.open(MenuId.ArtistDetail, itemObject.actorData.id);
            };
            //增加槽位
            ArtistListPanel.prototype.onClickAddBtn = function () {
                Game.system.confirmBuyText(Games.TEXT.AlertTextBuyActor, GlobalConfig.getValue1(GlobalKey.KEY_1009_ZuanDanZengJia__ShuLiangXiaoHao), null, function () {
                    Game.protosender.Actor.addActorSlot();
                });
            };
            //点击雪藏艺人
            ArtistListPanel.prototype.onClickFrozenBtn = function () {
                Game.menu.open(MenuId.ArtistFrozen);
            };
            //点击星探按钮
            ArtistListPanel.prototype.onClickXingTanBtn = function () {
                if (Game.moduleModel.actor.noseActorIsWaiting && User.info.noseIntoActorList.length > 0) {
                    //有探查艺人
                    Game.menu.open(MenuId.ArtistScoutResult);
                }
                else {
                    //没有探查艺人
                    this.moduleWindow.conent.showFindPanel();
                }
            };
            //更新界面
            ArtistListPanel.prototype.updateView = function () {
                this.actors = Game.moduleModel.actor.getActors();
                this.m_canScountTitle.text = TEXT.CanScountActor;
                this.m_canScount.text = format("{0}/{1}", this.actors.length, User.info.maxActor);
                this.m_list.numItems = this.actors.length;
                //星探卡
                this.m_xingtanBtn.m_red.visible = Game.moduleModel.actor.isCanNoseActor;
            };
            //返回选择条件的艺人
            ArtistListPanel.prototype.selectActor = function (lv) {
                for (var index = 0; index < this.actors.length; index++) {
                    var data = this.actors[index];
                    if (data.level < lv && index < this.m_list.numItems) {
                        var real = this.m_list.itemIndexToChildIndex(index);
                        this.m_list.scrollToView(index);
                        return this.m_list.getChildAt(real);
                    }
                }
                return null;
            };
            return ArtistListPanel;
        }(PfSkin.ArtistListPanelStruct));
        PfSkin.ArtistListPanel = ArtistListPanel;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=ArtistListPanel.js.map