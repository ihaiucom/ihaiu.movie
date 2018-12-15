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
    var ArtistDetail;
    (function (ArtistDetail) {
        var ArtistDetailUI = /** @class */ (function (_super) {
            __extends(ArtistDetailUI, _super);
            function ArtistDetailUI() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.actorId = 0;
                _this.lv = 0;
                _this.floatpos = [
                    new laya.maths.Point(-200, 180),
                    new laya.maths.Point(200, 180),
                    new laya.maths.Point(-200, 300),
                    new laya.maths.Point(200, 300)
                ];
                _this.downTimeoutHandler = -1;
                _this.downIntervalHandler = -1;
                _this.upTimeoutHandler = -1;
                _this.isDowning = false;
                _this.preSkillEnable = false;
                return _this;
            }
            ArtistDetailUI.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.attrlist = new Array();
                this.m_upgradeBtn.text = Games.TEXT.Upgrade;
                this.m_upgradeBtn.sound = "";
                this.preProps = new Dictionary();
                this.m_effect.visible = false;
            };
            ArtistDetailUI.prototype.onUpgradeUp = function () {
                var _this = this;
                if (this.downTimeoutHandler != -1) {
                    clearTimeout(this.downTimeoutHandler);
                    this.downTimeoutHandler = -1;
                }
                if (this.downIntervalHandler != -1) {
                    clearInterval(this.downIntervalHandler);
                    this.downIntervalHandler = -1;
                }
                if (this.isDowning) {
                    this.upTimeoutHandler = setTimeout(function () {
                        _this.isDowning = false;
                    }, 200);
                }
            };
            ArtistDetailUI.prototype.onUpgradeDowm = function () {
                var _this = this;
                if (this.upTimeoutHandler != -1) {
                    clearTimeout(this.upTimeoutHandler);
                    this.upTimeoutHandler = -1;
                }
                this.downTimeoutHandler = setTimeout(function () {
                    _this.isDowning = true;
                    _this.downIntervalHandler = setInterval(function () {
                        _this.onClickUpgradeBtn();
                    }, 200);
                }, 200);
            };
            /**升级 */
            ArtistDetailUI.prototype.onClickUpgradeBtn = function () {
                var _this = this;
                this.isDowning = false;
                var levelLimit = this.actorData.getMaxLv();
                if (levelLimit > this.actorData.level) {
                    if (Games.ItemHelper.checkItemEnough2(this.actorData.levelData.cost.itemId, 1)) {
                        //升级艺人
                        Game.protosender.Actor.upgradeActor(this.actorData.uuid);
                    }
                    else {
                        this.onUpgradeUp();
                        Game.system.openItemWay(this.actorData.levelData.cost.itemId, this.actorData.upgradeCostNum);
                    }
                }
                else {
                    //到达上限
                    if (this.actorData.isMaxLv()) {
                        Game.system.toastText(Games.TEXT.LvUpMax);
                        this.onUpgradeUp();
                    }
                    else {
                        this.onUpgradeUp();
                        if (this.levelupLimit == null) {
                            this.levelupLimit = fgui.Common.LevelUpLimitUI.createInstance();
                        }
                        this.levelupLimit.open(Games.TEXT.UpLvLimit, Games.TEXT.LoyaltyText, format(Games.TEXT.LvUpTo, this.actorData.name, this.actorData.level, this.actorData.getNextLvUpLv()), format(Games.TEXT.BuildLevel, this.actorData.getNextLvUpLoyaltyLv()), null, function () {
                            _this.moduleWindow.effectAsset();
                        });
                    }
                }
            };
            ArtistDetailUI.prototype.toValue = function (data) {
                var _this = this;
                if (this.isPlayLvUp) {
                    return;
                }
                if (this.isCanPlayCross == true) {
                    this.isPlayLvUp = true;
                    Laya.Tween.to(this.m_expbar, { value: data.levelExp }, 200, null, Handler.create(null, function () {
                        //
                        _this.isPlayLvUp = false;
                    }));
                }
                else {
                    this.m_expbar.max = data.upgradeTotalCostNum;
                    this.m_expbar.value = data.levelExp;
                }
            };
            ArtistDetailUI.prototype.crossToValue = function (data) {
                var _this = this;
                if (this.isPlayLvUp) {
                    return;
                }
                this.isPlayLvUp = true;
                Laya.Tween.to(this.m_expbar, { value: this.preCostNum }, 200, null, Handler.create(null, function () {
                    _this.isPlayLvUp = false;
                    _this.m_expbar.value = 0;
                    if (data.levelExp != 0) {
                        _this.toValue(data);
                    }
                    else {
                        _this.m_expbar.max = data.upgradeTotalCostNum;
                    }
                }));
            };
            /**
             * 更新艺人数据
             * @param data 艺人数据
             */
            ArtistDetailUI.prototype.updateView = function (data) {
                var _this = this;
                var lvUp = false;
                if (this.actorId == data.id && this.lv < data.level) {
                    lvUp = true;
                }
                if (this.actorId == data.id) {
                    this.isCanPlayCross = true;
                }
                else {
                    this.isCanPlayCross = false;
                }
                var skill = data.getUnlockSkillByType(Games.SkillTriggerType.upgrade_gold_cost);
                if (lvUp && skill && this.preSkillEnable) {
                    Game.system.playSkillEffect(data.id, Games.SkillTriggerType.upgrade_gold_cost);
                }
                this.preSkillEnable = skill && skill.isEnable;
                if (lvUp) {
                    // 埋点 星探招募
                    Games.Static.Instance.onUserorbit("star", data.star + "&" + data.id, "upgrade");
                    var sub = data.giveAssetsCountLimit - this.preAssetNum;
                    if (sub > 0) {
                        Game.system.toastText(format(TEXT.ActorUpgradeAssetCount, sub));
                    }
                    Game.sound.playSound(SoundKey.MM14_ArtistGradeUp, true);
                    this.m_effect.m_t501.stop(true, true);
                    this.m_effect.visible = true;
                    this.m_effect.m_t501.play(Handler.create(null, function () {
                        _this.m_effect.visible = false;
                    }));
                    if (data.level == data.preMaxLv + 1) {
                        this.onUpgradeUp();
                        Game.system.playBreakEffect(data.id, format(TEXT.ActorBreakToLv, data.curMaxLv));
                    }
                    //
                    this.crossToValue(data);
                }
                else {
                    this.toValue(data);
                }
                this.lv = data.level;
                this.actorData = data;
                this.preAssetNum = data.giveAssetsCountLimit;
                this.m_name.text = this.actorData.name;
                var levelLimit = this.actorData.getMaxLv();
                this.m_level.text = format(Games.TEXT.CurNextLv, this.actorData.level, this.actorData.curMaxLv);
                this.m_gold.text = formatNumberUnit(Game.moduleModel.item.getItemNum(EItemId.gold));
                this.m_icon.icon = Game.config.avatar.getConfig(data.config.avatar).bodyIconUrl;
                this.m_expbar.m_title.visible = false;
                this.m_starList.numItems = this.actorData.star;
                this.m_sex.icon = Game.config.avatar.getConfig(Game.config.property.getConfig(this.actorData.config.sex).icon).iconUrl;
                this.m_contory.icon = Game.config.avatar.getConfig(Game.config.property.getConfig(this.actorData.config.country).icon).iconUrl;
                this.m_biaoqian1.icon = Game.config.avatar.getConfig(Game.config.property.getConfig(this.actorData.config.show_type).icon).iconUrl;
                this.m_biaoqian2.icon = Game.config.avatar.getConfig(Game.config.property.getConfig(this.actorData.config.age_type).icon).iconUrl;
                this.m_tsrcName.text = Games.TEXT.OldName;
                // this.m_srcName.text = format(Games.TEXT.SrcActorName, this.actorData.config.name);
                this.m_srcName.text = "" + this.actorData.config.name;
                //升级
                if (data.levelData) {
                    this.preCostNum = data.upgradeTotalCostNum;
                    // this.m_expbar.max = data.upgradeTotalCostNum;
                    this.m_needGold.text = format(Games.TEXT.UpgradeNeedGold, formatNumberUnit(data.upgradeCostNum));
                }
                else {
                    this.m_needGold.text = format(Games.TEXT.UpgradeNeedGold, formatNumberUnit(data.upgradeCostNum));
                    this.m_upgradeBtn.visible = false;
                }
                var props = data.getProps();
                var pos = 0;
                for (var index = 0; index < props.length; index++) {
                    var id = props[index];
                    var config = Game.config.property.getConfig(id);
                    var field = config.field;
                    var value = data[field];
                    //升级
                    if (this.preProps.hasKey(id) && this.actorId == data.id) {
                        var preValue = this.preProps.getValue(id);
                        if (value > preValue) {
                            var url = Game.config.avatar.getConfig(config.icon).iconUrl;
                            this.floatAddAttrView(value - preValue, url, this.floatpos[pos]);
                            pos++;
                        }
                    }
                    this.preProps.add(id, value);
                }
                this.actorId = data.id;
            };
            /**
             *新增属性 漂浮特效
             */
            ArtistDetailUI.prototype.floatAddAttrView = function (value, url, pos) {
                var _this = this;
                var attr;
                if (this.attrlist.length > 0) {
                    attr = this.attrlist.pop();
                }
                else {
                    attr = fgui.Common.AttrUpView.createInstance();
                    this.addChild(attr);
                }
                if (this.targetPos == null) {
                    this.targetPos = new laya.maths.Point();
                }
                this.targetPos.x = (fairygui.GRoot.inst.width >> 1) + pos.x + (Math.random() > 0.5 ? -1 : 1) * 10;
                this.targetPos.y = pos.y + (Math.random() > 0.5 ? -1 : 1) * 20;
                attr.setXY((fairygui.GRoot.inst.width >> 1) + pos.x, pos.y);
                attr.text = "+" + value;
                attr.visible = true;
                attr.icon = url;
                laya.utils.Tween.to(attr, { y: pos.y - 40 }, 500, Laya.Ease.quadIn, Handler.create(this, function () {
                    _this.attrlist.push(attr);
                    attr.visible = false;
                }));
            };
            //
            ArtistDetailUI.prototype.clearProps = function () {
                this.preProps.clear();
            };
            ArtistDetailUI.prototype.onWindowShow = function () {
                Game.protoOkEvent.add(ProtoEventKey.Actor_GiveActorAssets, this.giveAssetHandler, this);
                this.m_upgradeBtn.onClick(this, this.onClickUpgradeBtn);
                this.m_upgradeBtn.on(Laya.Event.MOUSE_DOWN, this, this.onUpgradeDowm);
                this.m_upgradeBtn.on(Laya.Event.MOUSE_UP, this, this.onUpgradeUp);
                this.m_upgradeBtn.on(Laya.Event.MOUSE_OUT, this, this.onUpgradeUp);
                this.m_upgradeBtn.on(Laya.Event.FOCUS_CHANGE, this, this.onUpgradeUp);
                Laya.stage.on(Laya.Event.MOUSE_UP, this, this.onUpgradeUp);
                Laya.stage.on(Laya.Event.FOCUS_CHANGE, this, this.onUpgradeUp);
                Laya.stage.on(Laya.Event.MOUSE_OUT, this, this.onUpgradeUp);
                gameApplication.sAppPause.add(this.onUpgradeUp, this);
                this.m_starList.itemRenderer = Handler.create(this, this.updateStarRender, null, false);
                this.m_starList.itemProvider = Handler.create(this, this.updateStarProvider, null, false);
                this.m_effect.visible = false;
                this.moduleWindow.openUpdateView();
            };
            ArtistDetailUI.prototype.onWindowHide = function () {
                Game.protoOkEvent.remove(ProtoEventKey.Actor_GiveActorAssets, this.giveAssetHandler, this);
                this.m_upgradeBtn.offClick(this, this.onClickUpgradeBtn);
                this.m_upgradeBtn.off(Laya.Event.MOUSE_DOWN, this, this.onUpgradeDowm);
                this.m_upgradeBtn.off(Laya.Event.MOUSE_UP, this, this.onUpgradeUp);
                this.m_upgradeBtn.off(Laya.Event.MOUSE_OUT, this, this.onUpgradeUp);
                this.m_upgradeBtn.off(Laya.Event.FOCUS_CHANGE, this, this.onUpgradeUp);
                Laya.stage.off(Laya.Event.MOUSE_UP, this, this.onUpgradeUp);
                Laya.stage.off(Laya.Event.MOUSE_OUT, this, this.onUpgradeUp);
                gameApplication.sAppPause.remove(this.onUpgradeUp, this);
                this.m_starList.itemRenderer.recover();
                this.m_starList.itemProvider.recover();
                this.onUpgradeUp();
                this.actorId = 0;
            };
            ArtistDetailUI.prototype.updateStarProvider = function (index) {
                return fgui.Common.StarItem.URL;
            };
            ArtistDetailUI.prototype.updateStarRender = function (index, item) {
                if (item && this.actorData && this.actorData.config) {
                    item.icon = this.actorData.config.starUrl;
                }
            };
            ArtistDetailUI.prototype.giveAssetHandler = function (msg) {
                this.moduleWindow.assetPanel.playUpAsset();
            };
            //
            ArtistDetailUI.prototype.getSelectTab = function (index) {
                return this.m_tablist.getChildAt(index);
            };
            return ArtistDetailUI;
        }(ArtistDetail.ArtistDetailUIStruct));
        ArtistDetail.ArtistDetailUI = ArtistDetailUI;
    })(ArtistDetail = fgui.ArtistDetail || (fgui.ArtistDetail = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=ArtistDetailUI.js.map