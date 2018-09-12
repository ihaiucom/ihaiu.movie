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
                    this.avatar.removeSelf();
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
                var _this = this;
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
                this.checkVipShow();
                //艺人数据
                this.actorData = Game.moduleModel.actor.getActorByUUid(uuid);
                this.m_list.numItems = attrChangeInfo.length;
                if (this.actorData) {
                    //触发技能
                    Game.system.playSkillEffect(this.actorData.id, Games.SkillTriggerType.upgrade_gold_cost);
                    var trainData_1 = this.actorData.getTrainDataByType(trainType);
                    var max = 0;
                    for (var index = 0; index < trainData_1.property.length; index++) {
                        var prop = trainData_1.property[index];
                        for (var j = 0; j < attrChangeInfo.length; j++) {
                            var element = attrChangeInfo[j];
                            if (element.attrId == prop) {
                                max += trainData_1.property_interval[index][1];
                            }
                        }
                    }
                    this.m_title.text = trainData_1.scene_name;
                    //
                    // if (this.avatar == null)
                    // {
                    var aInfo = Games.AvatarInfo.creatByAvatarId(this.actorData.id);
                    this.avatar = Games.Avatar.Creat(aInfo, function (AvatarInfo) {
                        var bounds = _this.avatar.getBounds();
                        _this.m_container.displayObject.addChild(_this.avatar);
                        _this.avatar.pos((_this.m_container.width) * 0.5, bounds.height);
                        _this.avatar.scale(0.4, 0.4);
                        //this.refRoom.addAvatar(avatar, this.refRoom.m_buildScene.m_avatarContainer0);
                        //avatar.enterTo(Laya.stage.width - 150, avatar.y, DirtionType.Left);
                        //avatar.setTalk(TEXT.ActorExperciser, true);
                        _this.avatar.openShadow();
                        _this.avatar.playAction(trainData_1.action);
                        // setTimeout(() =>
                        // {
                        // 	avatar.playAction(1026);
                        // }, 3000);
                    });
                    // }
                    // if (config.action == 1017)
                    // {
                    // 	// this.pos.x = this.m_pos.x;
                    // 	// this.pos.y = this.m_pos.y
                    // }
                    // else
                    // {
                    // 	this.pos.x = this.m_pos2.x;
                    // 	this.pos.y = this.m_pos2.y;
                    // }
                    this.m_c_action.selectedIndex = trainData_1.action == 1017 ? 1 : 0;
                    //
                    var precent = Math.floor(curMax / max * 100);
                    if (precent >= 0 && precent <= 25) {
                        this.m_c1.selectedIndex = 0;
                    }
                    else if (precent > 25 && precent <= 50) {
                        this.m_c1.selectedIndex = 1;
                    }
                    else if (precent > 50 && precent <= 75) {
                        this.m_c1.selectedIndex = 2;
                    }
                    else if (precent > 75 && precent <= 100) {
                        this.m_c1.selectedIndex = 3;
                    }
                }
            };
            ArtistTrainResultUI.prototype.checkVipShow = function () {
                Laya.timer.clear(this, this.showAll);
                var isAtOnceShow = Game.moduleModel.secretary.isAutoActorTrain;
                if (isAtOnceShow) {
                    this.isShowAll = true;
                }
                else {
                    var delay = 0;
                    switch (this.trainType) {
                        case 1:
                            delay = GlobalConfig.getValue(GlobalKey.KEY_1027_YiRenPeiYang__ShiJianHaoMiao);
                            this.effect = this.m_effect1.m_t0;
                            break;
                        case 2:
                            delay = GlobalConfig.getValue(GlobalKey.KEY_1028_YiRenPeiYang__ShiJianHaoMiao);
                            this.effect = this.m_effect2.m_t0;
                            break;
                        case 3:
                            delay = GlobalConfig.getValue(GlobalKey.KEY_1029_YiRenPeiYang__ShiJianHaoMiao);
                            this.effect = this.m_effect3.m_t0;
                            break;
                        case 4:
                            delay = GlobalConfig.getValue(GlobalKey.KEY_1030_YiRenPeiYang__ShiJianHaoMiao);
                            this.effect = this.m_effect4.m_t0;
                            break;
                        default:
                            delay = GlobalConfig.getValue(GlobalKey.KEY_1030_YiRenPeiYang__ShiJianHaoMiao);
                            this.effect = this.m_effect3.m_t0;
                            break;
                    }
                    this.isShowAll = false;
                    Laya.timer.once(delay, this, this.showAll);
                }
            };
            ArtistTrainResultUI.prototype.showAll = function () {
                this.isShowAll = true;
                this.effect.play();
            };
            Object.defineProperty(ArtistTrainResultUI.prototype, "isShowAll", {
                set: function (value) {
                    this.m_group.visible = value;
                    this.m_list.visible = value;
                    this.m_okBtn.visible = value;
                    this.m_closeBtn.visible = value;
                    if (value) {
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