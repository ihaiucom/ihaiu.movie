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
    var Market;
    (function (Market) {
        var MarketPublicityPanel = /** @class */ (function (_super) {
            __extends(MarketPublicityPanel, _super);
            function MarketPublicityPanel() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.isShow = false;
                _this.publicRewards = [];
                return _this;
            }
            MarketPublicityPanel.prototype.onWindowInited = function () {
                this.m_topAsset.InitView(this, this.OnCloseClick, [3]);
                this.m_btnAddActor.onClick(this, this.OnBtnAddActorClick);
                this.m_btnPublicity.onClick(this, this.OnBtnPublicityClick);
                this.m_btnFinish.onClick(this, this.OnPublicityFinish);
                this.m_tabSelfmotion.onClick(this, this.OnTabSelfmotionChangState);
                this.m_listReward.itemRenderer = new Handler(this, this.RenderRewardsItem, null, false);
            };
            MarketPublicityPanel.prototype.onWindowDestory = function () {
                this.m_topAsset.onWindowDestory();
                this.m_btnAddActor.onClick(null, null);
                this.m_btnPublicity.onClick(null, null);
                this.m_btnFinish.onClick(null, null);
                this.m_tabSelfmotion.onClick(null, null);
            };
            MarketPublicityPanel.prototype.onWindowShow = function () {
                this.isShow = true;
                Game.sound.playMusic(SoundKey.MM_BGM_Propaganda, 0);
                Game.protoOkEvent.add(ProtoEventKey.city_Propaganda, this.OnsPropaganda, this);
                Game.protoOkEvent.add(ProtoEventKey.city_SetPropagandaActor, this.OnsSetPropagandaActor, this);
                Game.protoOkEvent.add(ProtoEventKey.ItemData, this.m_topAsset.updateAsset, this.m_topAsset);
                this.m_btnPublicity.enabled = true;
                this.m_btnAddActor.enabled = true;
                this.UpdateView();
                this.m_topAsset.updateAsset();
            };
            MarketPublicityPanel.prototype.onWindowHide = function () {
                this.isShow = false;
                Game.sound.stopMusic();
                Game.sound.playMusic(SoundKey.MM_BGM_Cinema);
                Game.protoOkEvent.remove(ProtoEventKey.city_Propaganda, this.OnsPropaganda, this);
                Game.protoOkEvent.remove(ProtoEventKey.city_SetPropagandaActor, this.OnsSetPropagandaActor, this);
                Game.protoOkEvent.remove(ProtoEventKey.ItemData, this.m_topAsset.updateAsset, this.m_topAsset);
            };
            MarketPublicityPanel.prototype.UpdateView = function () {
                this.pointData = Game.moduleModel.market.GetLastStreet();
                this.rewardList = this.pointData.reward;
                this.m_listReward.numItems = this.rewardList.length;
                this.selectActor = Game.moduleModel.market.Info.propagandaActor;
                this.m_progress.value = this.pointData.progress;
                this.m_active.setSelectedIndex(0);
                this.m_demand.text = Game.moduleModel.market.GetPublicityDemandText();
                this.m_actorDemand.text = Game.moduleModel.market.GetStreetDemandText();
                this.m_name.text = this.pointData.numName;
                if (this.selectActor != null && this.selectActor != 0) {
                    this.m_btnAddActor.State = 1;
                    this.m_btnAddActor.Icon = Game.moduleModel.market.GetActorIcon(this.selectActor);
                }
                else {
                    this.m_btnAddActor.State = 0;
                }
                //临时秘书 不属于永久
                if (Game.moduleModel.secretary.isTempSecretary) {
                    var remainTimes = Game.moduleModel.secretary.autoPublicizeNum;
                    if (remainTimes <= 0) {
                        Game.moduleModel.secretary.isAutoPublicize = false;
                        this.m_tip.text = Games.TEXT.HaveAgentCanAutoPublicize;
                    }
                    else {
                        this.m_tip.text = format(TEXT.SecretaryRemainAutoPublicizeNum, remainTimes);
                    }
                }
                else {
                    this.m_tip.text = Games.TEXT.HaveAgentCanAutoRead;
                }
                this.m_tabSelfmotion.selected = Game.moduleModel.secretary.isAutoPublicize;
            };
            MarketPublicityPanel.prototype.OnTabSelfmotionChangState = function () {
                if (this.m_tabSelfmotion.selected) {
                    if (Game.moduleModel.secretary.autoPublicizeNum > 0) {
                        Game.moduleModel.secretary.isAutoPublicize = this.m_tabSelfmotion.selected;
                    }
                    else {
                        if (Game.moduleModel.secretary.isTempSecretary) {
                            //免费次数已经用完
                            Game.system.confirmText(Game.config.msg.getTxtFormat(MsgKey.secretary_experience, Game.config.msg.getTxt(MsgKey.secretary_auto1)), TEXT.SecretaryForeverAgent, null, function () {
                                Game.menu.open(MenuId.Weal, 1);
                            }, null, Game.config.msg.getTxt(MsgKey.go_to_hire), TEXT.ButtonCannel, false);
                        }
                        else {
                            //没有秘书购买
                            Game.system.confirmText(Game.config.msg.getTxtFormat(MsgKey.secretary_not_owned, Game.config.msg.getTxt(MsgKey.secretary_auto1)), TEXT.SecretaryForeverAgent, null, function () {
                                Game.menu.open(MenuId.Weal, 1);
                            }, null, Game.config.msg.getTxt(MsgKey.go_to_hire), TEXT.ButtonCannel, false);
                        }
                        this.m_tabSelfmotion.selected = false;
                    }
                }
                else {
                    Game.moduleModel.secretary.isAutoPublicize = this.m_tabSelfmotion.selected;
                }
            };
            MarketPublicityPanel.prototype.RenderRewardsItem = function (index, obj) {
                var data = this.rewardList[index];
                var item = obj;
                item.icon = Game.moduleModel.item.getItem(data.itemId).itemIconUrl;
                item.m_num.text = data.itemNumTxt;
                item.m_star.starNum = data.itemStar;
                item.PopupInfo = data.itemId;
            };
            MarketPublicityPanel.prototype.OnCloseClick = function () {
                this.isShow = false;
                this.moduleWindow.backToMainWindow();
            };
            MarketPublicityPanel.prototype.OnBtnAddActorClick = function () {
                var _this = this;
                var demandList = Game.moduleModel.market.GetStreetDemand();
                var dispatch = Game.moduleModel.market.GetPropagandaActor();
                var dispatchList = dispatch == 0 ? [] : [dispatch];
                var mainWindow = (this.moduleWindow.mainWindow);
                mainWindow.openSubwindowByIndex(Games.MarketSubEnum.SelectActor, true, function (actor, tweenRect) {
                    _this.OnActorSelect(actor, tweenRect);
                }, demandList, dispatchList, Games.TEXT.MarketSelectActor.format(this.pointData.numName));
            };
            MarketPublicityPanel.prototype.OnActorSelect = function (actor, tweenRect) {
                if (actor == null) {
                    return;
                }
                this.animSelectActorStruct = { actor: actor, tweenRect: tweenRect };
                Game.protosender.city.SetPropagandaActor("", this.pointData.city, this.pointData.id, actor);
            };
            MarketPublicityPanel.prototype.OnsSetPropagandaActor = function (msg) {
                // let mainWindow = <Games.MarketWindow>(this.moduleWindow.mainWindow);
                // mainWindow.selectActorSubwindow.closeSelf();
                this.UpdateView();
                this.PlaySelectAnim();
            };
            MarketPublicityPanel.prototype.PlaySelectAnim = function () {
                var _this = this;
                var actor = this.animSelectActorStruct.actor;
                var tweenRect = this.animSelectActorStruct.tweenRect;
                var mIcon = this.m_btnAddActor.m_icon;
                var fromRect = this.globalToLocalRect(tweenRect.x, tweenRect.y, tweenRect.width, tweenRect.height);
                var iconGlobalRect = this.m_btnAddActor.localToGlobalRect(mIcon.x, mIcon.y, mIcon.width, mIcon.height);
                var toRect = this.globalToLocalRect(iconGlobalRect.x, iconGlobalRect.y, mIcon.width, iconGlobalRect.height);
                // mIcon.visible = false;
                this.m_tweenIcon.visible = true;
                this.m_tweenIcon.m_icon.url = Game.moduleModel.market.GetActorIcon(actor);
                DoTween.TweenRect(this.m_tweenIcon, fromRect, toRect, 300, null, Handler.create(this, function () {
                    // mIcon.visible = true;
                    _this.m_tweenIcon.visible = false;
                }));
            };
            MarketPublicityPanel.prototype.OnBtnPublicityClick = function () {
                this.PublicityOnce();
            };
            MarketPublicityPanel.prototype.PublicityOnce = function () {
                if (this.isShow == false) {
                    return;
                }
                var cost = this.pointData.cfg.publicize_cost;
                if (Game.moduleModel.item.hasItemNum(3, cost)) {
                    this.m_btnAddActor.enabled = true;
                    this.m_btnPublicity.enabled = false;
                    this.publicRewards = Game.moduleModel.market.GetPublicRewards(this.pointData);
                    Game.protosender.city.Propaganda("", this.pointData.city, this.pointData.id);
                }
                else {
                    Game.system.openItemWay(3, cost);
                }
            };
            MarketPublicityPanel.prototype.OnsPropaganda = function (msg) {
                if (Game.moduleModel.market.Info.lastArea == this.pointData.id) {
                    this.UpdateView();
                }
                else {
                    this.m_progress.value = 100;
                }
                // Game.sound.playSound(SoundKey.MM10_PayMent);
                this.m_t0.play(Handler.create(this, this.OnPublicityTransFinish));
            };
            MarketPublicityPanel.prototype.OnPublicityTransFinish = function () {
                Game.system.getRewardText(this.publicRewards, Games.TEXT.MarketReward, Game.moduleModel.secretary.isAutoPublicize ? 0.3 : 0);
                this.m_btnAddActor.enabled = true;
                this.m_btnPublicity.enabled = true;
                if (Game.moduleModel.market.Info.lastArea != this.pointData.id || Game.moduleModel.market.Info.lastAreaProgress == 100) {
                    this.ShowFinishView();
                }
                else {
                    var isAuto = Game.moduleModel.secretary.isAutoPublicize;
                    if (this.m_tabSelfmotion.selected) {
                        this.UpdateView();
                        this.PublicityOnce();
                    }
                    else {
                        if (this.m_tabSelfmotion.selected && Game.moduleModel.secretary.isTempSecretary) {
                            //免费次数已经用完
                            Game.system.confirmText(Game.config.msg.getTxtFormat(MsgKey.secretary_experience, Game.config.msg.getTxt(MsgKey.secretary_auto1)), TEXT.SecretaryForeverAgent, null, function () {
                                Game.menu.open(MenuId.Weal, 1);
                            }, null, Game.config.msg.getTxt(MsgKey.go_to_hire), TEXT.ButtonCannel, false);
                        }
                        this.UpdateView();
                    }
                }
            };
            MarketPublicityPanel.prototype.ShowFinishView = function () {
                this.m_active.setSelectedIndex(1);
            };
            MarketPublicityPanel.prototype.OnPublicityFinish = function () {
                // this.Hide();
                // this.window.OnPublicityFinish();
                Game.guide.checkPlayStoryByType(Games.StoryTriggerType.FinishStreet);
                var mainWindow = (this.moduleWindow.mainWindow);
                mainWindow.conent.UpdateView();
                this.moduleWindow.closeSelf();
            };
            return MarketPublicityPanel;
        }(Market.MarketPublicityPanelStruct));
        Market.MarketPublicityPanel = MarketPublicityPanel;
    })(Market = fgui.Market || (fgui.Market = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=MarketPublicityPanel.js.map