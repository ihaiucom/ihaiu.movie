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
        var ArtistTrainResultUI = /** @class */ (function (_super) {
            __extends(ArtistTrainResultUI, _super);
            function ArtistTrainResultUI() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.pos = new Point();
                _this.pingjia = 0;
                return _this;
            }
            ArtistTrainResultUI.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_list.itemRenderer = Handler.create(this, this.onUpdateItem, null, false);
                this.m_checktip1.text = Games.TEXT.TrainCompleteRightNow;
                this.m_checktip2.text = Games.TEXT.HaveAgentCanComplete;
                this.m_okBtn.text = Games.TEXT.Sure;
            };
            ArtistTrainResultUI.prototype.onWindowHide = function () {
                this.m_okBtn.offClick(this, this.onClickOkBtn);
                this.m_closeBtn.offClick(this, this.onClickCloseBtn);
                this.m_vipCheckBox.offClick(this, this.onChangedState);
                if (this.avatar) {
                    this.avatar.dispose();
                    this.avatar = null;
                }
            };
            ArtistTrainResultUI.prototype.onWindowShow = function () {
                this.m_okBtn.onClick(this, this.onClickOkBtn);
                this.m_closeBtn.onClick(this, this.onClickCloseBtn);
                this.m_vipCheckBox.onClick(this, this.onChangedState);
                this.m_d1.visible = this.m_d2.visible = this.m_d3.visible = this.m_d4.visible = false;
            };
            //后续需要增加
            ArtistTrainResultUI.prototype.onChangedState = function () {
                if (this.m_vipCheckBox.selected) {
                    this.setAutoTrain();
                }
                else {
                    Game.moduleModel.secretary.isAutoActorTrain = this.m_vipCheckBox.selected;
                }
            };
            //自动
            ArtistTrainResultUI.prototype.setAutoTrain = function () {
                if (Game.moduleModel.secretary.isForever) {
                    Game.moduleModel.secretary.isAutoActorTrain = this.m_vipCheckBox.selected;
                }
                else {
                    //没有秘书购买
                    Game.system.confirmText(Game.config.msg.getTxtFormat(MsgKey.secretary_not_owned, Game.config.msg.getTxt(MsgKey.secretary_auto3)), TEXT.SecretaryForeverAgent, null, function () {
                        Game.menu.open(MenuId.Weal, 1);
                    }, null, Game.config.msg.getTxt(MsgKey.go_to_hire), TEXT.ButtonCannel, false);
                    this.m_vipCheckBox.selected = false;
                }
            };
            ArtistTrainResultUI.prototype.onClickCloseBtn = function () {
                this.moduleWindow.menuClose();
            };
            ArtistTrainResultUI.prototype.onClickOkBtn = function () {
                this.moduleWindow.menuClose();
            };
            ArtistTrainResultUI.prototype.onUpdateItem = function (index, item) {
                var item1 = item;
                item1.updateView(this.actorData, this.attrchangeInfo[index]);
            };
            ArtistTrainResultUI.prototype.updateView = function (arg) {
                var uuid = arg[0];
                var attrChangeInfo = arg[1];
                this.attrchangeInfo = attrChangeInfo;
                var trainType = arg[2];
                if (this.attrChangeDic == null) {
                    this.attrChangeDic = new Dictionary();
                }
                this.attrChangeDic.clear();
                var curMax = 0;
                for (var index = 0; index < attrChangeInfo.length; index++) {
                    var element = attrChangeInfo[index];
                    curMax += element.value;
                    this.attrChangeDic.add(element.attrId, element.value);
                }
                this.trainType = trainType;
                this.m_vipCheckBox.selected = Game.moduleModel.secretary.isAutoActorTrain;
                //艺人数据
                this.actorData = Game.moduleModel.actor.getActorByUUid(uuid);
                this.m_list.numItems = attrChangeInfo.length;
                if (this.actorData) {
                    var attrAdds = [];
                    for (var index = 0; index < attrChangeInfo.length; index++) {
                        var element = attrChangeInfo[index];
                        var dtItem = new DTItemNum();
                        dtItem.itemId = element.attrId;
                        dtItem.itemNum = element.value;
                        attrAdds.push(dtItem);
                    }
                    Games.Static.Instance.onResourceoutput(attrAdds, "star&Pro&" + this.actorData.id, format("{0}&{1}&{2}&{3}&{4}", this.actorData.spectacle, this.actorData.perform, this.actorData.plot, this.actorData.art, this.actorData.entertainment));
                    //触发技能
                    Game.system.playSkillEffect(this.actorData.id, Games.SkillTriggerType.upgrade_gold_cost);
                    var trainData = this.actorData.getTrainDataByType(trainType);
                    var max = 0;
                    for (var index = 0; index < trainData.property.length; index++) {
                        var prop = trainData.property[index];
                        for (var j = 0; j < attrChangeInfo.length; j++) {
                            var element = attrChangeInfo[j];
                            if (element.attrId == prop) {
                                max += trainData.property_interval[index][1];
                            }
                        }
                    }
                    this.m_title.text = trainData.scene_name;
                    var aInfo = Games.AvatarInfo.creatByAvatarId(this.actorData.id);
                    this.avatar = Game.creator.creatEUnit(aInfo);
                    this.avatar.showOn(this.m_container);
                    var bounds = this.avatar.getBounds();
                    this.avatar.pos((this.m_container.width) * 0.5, bounds.height);
                    this.avatar.setScale(0.4);
                    this.avatar.openShadow();
                    if (trainData) {
                        this.avatar.playAction(trainData.action);
                    }
                    this.m_c_action.selectedIndex = trainData.action == 1017 ? 1 : 0;
                    var precent = Math.floor(curMax / max * 100);
                    if (precent >= 0 && precent <= 25) {
                        this.pingjia = 1;
                    }
                    else if (precent > 25 && precent <= 50) {
                        this.pingjia = 2;
                    }
                    else if (precent > 50 && precent <= 75) {
                        this.pingjia = 3;
                    }
                    else if (precent > 75 && precent <= 100) {
                        this.pingjia = 4;
                    }
                }
                this.checkVipShow();
            };
            ArtistTrainResultUI.prototype.checkVipShow = function () {
                Laya.timer.clear(this, this.showAll);
                var isAtOnceShow = Game.moduleModel.secretary.isAutoActorTrain;
                var delay = 0;
                switch (this.trainType) {
                    case 1:
                        delay = GlobalConfig.getValue(GlobalKey.KEY_1027_YiRenPeiYang__ShiJianHaoMiao);
                        this.effect1 = this.m_effect1.m_t0;
                        break;
                    case 2:
                        delay = GlobalConfig.getValue(GlobalKey.KEY_1028_YiRenPeiYang__ShiJianHaoMiao);
                        this.effect1 = this.m_effect2.m_t0;
                        break;
                    case 3:
                        delay = GlobalConfig.getValue(GlobalKey.KEY_1029_YiRenPeiYang__ShiJianHaoMiao);
                        this.effect1 = this.m_effect3.m_t0;
                        break;
                    case 4:
                        delay = GlobalConfig.getValue(GlobalKey.KEY_1030_YiRenPeiYang__ShiJianHaoMiao);
                        this.effect1 = this.m_effect4.m_t0;
                        break;
                }
                if (isAtOnceShow) {
                    this.isShowAll = true;
                }
                else {
                    this.isShowAll = false;
                    Laya.timer.once(delay, this, this.showAll);
                }
            };
            ArtistTrainResultUI.prototype.showAll = function () {
                this.isShowAll = true;
            };
            Object.defineProperty(ArtistTrainResultUI.prototype, "isShowAll", {
                set: function (value) {
                    this.m_group.visible = value;
                    this.m_list.visible = value;
                    this.m_okBtn.visible = value;
                    this.m_closeBtn.visible = value;
                    if (value) {
                        this.m_c_visible.selectedIndex = this.pingjia;
                        this.effect1.play(null, 1);
                        Game.sound.playSound(SoundKey.MM34_CultrueArtist);
                    }
                },
                enumerable: true,
                configurable: true
            });
            return ArtistTrainResultUI;
        }(PfSkin.ArtistTrainResultUIStruct));
        PfSkin.ArtistTrainResultUI = ArtistTrainResultUI;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=ArtistTrainResultUI.js.map