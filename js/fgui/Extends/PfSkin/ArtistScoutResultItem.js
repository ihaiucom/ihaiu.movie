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
        var ArtistScoutResultItem = /** @class */ (function (_super) {
            __extends(ArtistScoutResultItem, _super);
            function ArtistScoutResultItem() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            ArtistScoutResultItem.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_detailBtn.onClick(this, this.onClickDetailBtn);
                this.m_goBtn.onClick(this, this.onClickBuyBtn);
                this.m_giftBtn.onClick(this, this.onClickGiftBtn);
                this.m_icon.onClick(this, this.onClickDetailBtn);
                this.m_goBtn.title = Games.TEXT.NoseActor;
                this.m_giftBtn.m_red.visible = false;
            };
            /**
             * 点击招募艺人
             */
            ArtistScoutResultItem.prototype.onClickBuyBtn = function () {
                var _this = this;
                if (Game.moduleModel.actor.isRecruiting) {
                    return;
                }
                // Game.menu.open(MenuId.ArtistScoutSuccess, this.actorData);
                if (Game.moduleModel.actor.actorIsMax && Game.moduleModel.actor.hasActor(this.config.id) == false) {
                    Game.moduleModel.actor.toMaxActor();
                }
                else {
                    var cost = [this.config.cost.itemId, this.config.cost.itemNum];
                    var TipMsgs = (Game.moduleModel.actor.hasActor(this.config.id) == true) ? Games.TEXT.SecondBuyArtistMsg : Games.TEXT.AlertNoseActor;
                    Game.system.confirmBuyText(TipMsgs, cost, null, function () {
                        var enough = Games.ItemHelper.checkItemEnough3(cost);
                        if (enough) {
                            Game.moduleModel.actor.isRecruiting = true;
                            //请求探查艺人
                            Game.protosender.Actor.recruitActor(_this.config.id);
                        }
                        else {
                            Game.system.openItemWay(_this.config.cost.itemId, _this.config.cost.itemNum);
                            // Game.system.toastText(format(Games.TEXT.ToastTextItemNotEnough, Game.config.item.getConfig(this.config.cost.itemId).name));
                        }
                    });
                }
            };
            /**
             * 点击艺人详情
             */
            ArtistScoutResultItem.prototype.onClickDetailBtn = function () {
                Game.sound.playSound(SoundKey.MM01_Button);
                Game.menu.open(MenuId.ActorDetail, this.config.id);
            };
            /**
             * 点击礼物
             */
            ArtistScoutResultItem.prototype.onClickGiftBtn = function () {
                if (this.rewardUI == null) {
                    this.rewardUI = fgui.Common.TipReward.createInstance();
                }
                this.rewardUI.setItems(this.config.recruit_reward);
                this.rewardUI.showPopup(this.m_giftBtn);
                // this.showRewardUI(formatNumberUnit(this.config.recruit_reward[1].itemNum), this.m_giftBtn, this.m_giftBtn.width >> 1, 0);
            };
            /**
             * 艺人数据
             * @param data 艺人数据
             */
            ArtistScoutResultItem.prototype.updateView = function (id) {
                var _this = this;
                // this.hideTipUI();
                this.config = Game.config.actor.getConfig(id);
                if (this.config) {
                    this.m_detailBtn.m_name.text = this.config.name;
                    this.m_detailBtn.m_starList.itemRenderer = Handler.create(this, function (index, item) {
                        item.icon = _this.config.starUrl;
                    }, null, false);
                    this.m_detailBtn.m_starList.numItems = this.config.starNum;
                    this.m_need.text = formatNumberUnit(this.config.cost.itemNum);
                    this.m_icon.icon = Game.config.avatar.getConfig(this.config.avatar).bodyIconUrl;
                }
                //是否已经拥有
                if (Game.moduleModel.actor.hasActor(id)) {
                    this.m_giftBtn.visible = true;
                    this.m_already.visible = true;
                    this.m_tAlready.visible = true;
                    this.m_detailBtn.m_name.text = Game.moduleModel.actor.getActor(id).name;
                }
                else {
                    this.m_giftBtn.visible = false;
                    this.m_already.visible = false;
                    this.m_tAlready.visible = false;
                }
            };
            return ArtistScoutResultItem;
        }(PfSkin.ArtistScoutResultItemStruct));
        PfSkin.ArtistScoutResultItem = ArtistScoutResultItem;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=ArtistScoutResultItem.js.map