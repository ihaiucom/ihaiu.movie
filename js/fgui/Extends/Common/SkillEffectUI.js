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
                // private isCanClosed: boolean = false;
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.isPlaying = false;
                _this.skills = [];
                _this.pools = [];
                return _this;
            }
            SkillEffectUI.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                // this.onClick(this, this.onClickClose);
            };
            // //关闭界面
            // private onClickClose(): void
            // {
            // 	if (this.isCanClosed)
            // 	{
            // 		this.removeFromParent();
            // 		this.playNext();
            // 	}
            // }
            //播放
            SkillEffectUI.prototype.playNext = function () {
                var _this = this;
                this.removeFromParent();
                if (this.skills.length > 0) {
                    setTimeout(function () { _this.isPlaying = false; _this.playOneSkill(); }, 200);
                }
                else {
                    this.isPlaying = false;
                    this.removeFromParent();
                }
            };
            /**
             * 显示特效
             * @param acotrId
             * @param skillId
             */
            SkillEffectUI.prototype.playSkillEffect = function (actorId, type) {
                var data;
                if (this.pools.length > 0) {
                    data = this.pools[0];
                    this.pools.splice(0, 1);
                }
                else {
                    data = new SkillEffectData();
                }
                this.skills.push(data);
                data.actorId = actorId;
                data.skillType = type;
                if (this.isPlaying == false) {
                    this.playOneSkill();
                }
            };
            //播放技能
            SkillEffectUI.prototype.playOneSkill = function () {
                var effectData;
                if (this.skills.length > 0) {
                    effectData = this.skills[0];
                    this.skills.splice(0, 1);
                    this.pools.push(effectData);
                }
                else {
                    return;
                }
                var actorId = effectData.actorId;
                var type = effectData.skillType;
                var data = Game.moduleModel.actor.getActor(actorId);
                if (data) {
                    var skill = data.getUnlockSkillByType(type);
                    if (skill) {
                        if (skill.isUnlock) {
                            Games.MenuLayer.floatMsg.addChild(this);
                            //
                            this.m_title.text = skill.config.name;
                            //描述
                            this.m_desc.text = skill.effectDesc;
                            //技能icon
                            this.m_skillIcon.icon = skill.iconUrl;
                            //
                            this.m_icon.icon = data.bodyIconUrl;
                            //
                            this.isPlaying = true;
                            //
                            this.m_t0.play(Handler.create(this, this.playEnd), 1);
                        }
                        else {
                            this.playOneSkill();
                        }
                    }
                }
                else {
                    this.playOneSkill();
                }
            };
            //播放完毕
            SkillEffectUI.prototype.playEnd = function () {
                // setTimeout(() => { this.playNext(); }, 1500);
                this.playNext();
            };
            return SkillEffectUI;
        }(Common.SkillEffectUIStruct));
        Common.SkillEffectUI = SkillEffectUI;
    })(Common = fgui.Common || (fgui.Common = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=SkillEffectUI.js.map