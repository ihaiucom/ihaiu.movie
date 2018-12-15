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
    var Common;
    (function (Common) {
        var SkillEffectData = /** @class */ (function () {
            function SkillEffectData() {
            }
            return SkillEffectData;
        }());
        Common.SkillEffectData = SkillEffectData;
        var SkillEffectUI = /** @class */ (function (_super) {
            __extends(SkillEffectUI, _super);
            function SkillEffectUI() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.isPlaying = false;
                _this.isCanClickToComplete = false;
                _this.skills = [];
                _this.pools = [];
                return _this;
            }
            SkillEffectUI.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.onClick(this, this.onClickToNext);
            };
            SkillEffectUI.prototype.onClickToNext = function () {
                if (this.isPlaying && this.isCanClickToComplete) {
                    this.m_panel.m_t0.stop(true, true);
                }
            };
            //播放
            SkillEffectUI.prototype.playNext = function () {
                var _this = this;
                if (this.skills.length > 0) {
                    setTimeout(function () { _this.isPlaying = false; _this.playOneSkill(); }, 200);
                }
                else {
                    this.endPlay();
                }
            };
            /**
             * 显示特效
             * @param acotrId
             * @param skillId
             */
            SkillEffectUI.prototype.playSkillEffect = function (actorId, type, callback) {
                var data;
                if (this.pools.length > 0) {
                    data = this.pools.pop();
                }
                else {
                    data = new SkillEffectData();
                }
                this.skills.push(data);
                data.actorId = actorId;
                data.skillType = type;
                data.callback = callback;
                if (data.skillType == Games.SkillTriggerType.upgrade_gold_cost) {
                    this.isPlaying = false;
                    this.touchable = false;
                    data.isForce = true;
                }
                else {
                    data.isForce = false;
                    this.touchable = true;
                }
                this.playOneSkill();
            };
            //播放技能
            SkillEffectUI.prototype.playOneSkill = function () {
                if (this.isPlaying == false) {
                    this.isPlaying = true;
                    this.isCanClickToComplete = false;
                    var effectData = void 0;
                    if (this.skills.length > 0) {
                        effectData = this.skills.shift();
                    }
                    if (effectData) {
                        this.playCurSkill(effectData);
                    }
                    else {
                        this.playNextNow();
                    }
                }
                else {
                    if (this.skills.length <= 0) {
                        this.endPlay();
                    }
                }
            };
            /**
             *
             * @param effectData
             */
            SkillEffectUI.prototype.playCurSkill = function (effectData) {
                var _this = this;
                var actorId = effectData.actorId;
                var type = effectData.skillType;
                var callback = effectData.callback;
                this.pools.push(effectData);
                var data = Game.moduleModel.actor.getActor(actorId);
                if (data) {
                    var skill = data.getUnlockSkillByType(type);
                    if (skill && (skill.isEnable || effectData.isForce)) {
                        // Games.MenuLayer.floatMsg.addChild(this);
                        // Games.MenuLayer.showDialogModel();
                        setScreenSize(this);
                        centerScreen(this);
                        Games.MenuLayer.floatMsg.addChild(this);
                        //
                        this.m_panel.m_title.text = skill.config.name;
                        //描述
                        this.m_panel.m_desc.text = skill.effectDesc;
                        //技能icon
                        this.m_panel.m_skillIcon.icon = skill.iconUrl;
                        //
                        this.m_panel.m_icon.icon = data.bodyIconUrl;
                        //
                        this.isPlaying = true;
                        //
                        this.m_panel.m_t0.play(Handler.create(this, this.playEnd, [callback]), 1);
                        //延时
                        setTimeout(function () {
                            _this.isCanClickToComplete = true;
                        }, 1000);
                    }
                    else {
                        callback && callback();
                        this.playNextNow();
                    }
                }
                else {
                    callback && callback();
                    this.playNextNow();
                }
            };
            //播放完毕
            SkillEffectUI.prototype.playEnd = function (callback) {
                callback && callback();
                this.playNext();
            };
            //立即播放下一个
            SkillEffectUI.prototype.playNextNow = function () {
                if (this.skills.length > 0) {
                    this.isPlaying = false;
                    this.playOneSkill();
                }
                else {
                    this.endPlay();
                }
            };
            //结束播放
            SkillEffectUI.prototype.endPlay = function () {
                this.isPlaying = false;
                this.close();
            };
            SkillEffectUI.prototype.close = function () {
                this.removeFromParent();
                // Games.MenuLayer.hideDialogModel();
            };
            return SkillEffectUI;
        }(Common.SkillEffectUIStruct));
        Common.SkillEffectUI = SkillEffectUI;
    })(Common = fgui.Common || (fgui.Common = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=SkillEffectUI.js.map