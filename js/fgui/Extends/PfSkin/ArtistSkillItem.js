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
        var ArtistSkillItem = /** @class */ (function (_super) {
            __extends(ArtistSkillItem, _super);
            function ArtistSkillItem() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            ArtistSkillItem.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_desc.ubbEnabled = true;
                this.m_upgradeBtn.onClick(this, this.onClickUpgradeBtn);
            };
            /**
             * 升级按钮点击
             */
            ArtistSkillItem.prototype.onClickUpgradeBtn = function () {
                if (this.isHasNextLv) {
                    if (this.actorData.skillExp >= this.config.exp) {
                        Game.protosender.Actor.upgradeActorSkill(this.actorData.uuid, this.config.id);
                    }
                    else {
                        Game.system.openGoOtherFunc(Games.OtherFunctionType.ActorSkillExp);
                        //Game.system.toastText(Games.TEXT.SkillExpNotEnough)
                    }
                }
                else {
                    Game.system.toastText(Games.TEXT.SkillLvMaxTip);
                }
            };
            ArtistSkillItem.prototype.updateView = function (data, index) {
                this.actorData = data;
                var skill = data.skills[index];
                if (skill) {
                    this.config = skill.config;
                    if (skill.dtActor.lv > data.level) {
                        //未解锁
                        this.m_unLockGroup.visible = false;
                        this.m_lockGroup.visible = true;
                        //条件
                        this.m_condition.text = format(Games.TEXT.UnlockSkill, skill.dtActor.lv);
                    }
                    else {
                        //解锁
                        this.m_unLockGroup.visible = true;
                        this.m_lockGroup.visible = false;
                        //技能名字
                        this.m_skillName.text = this.config.name;
                        //描述
                        this.m_desc.text = skill.desc;
                        //等级
                        this.m_lv.text = Games.TEXT.Level + this.config.lv;
                        //经验
                        this.m_cost.text = this.config.exp + "";
                        // this.m_cost.text = (this.config.lv = 20) ? Games.TEXT.MaxLevel : this.config.exp + "";
                        //是否有下级数据
                        var nextConfig = Game.config.skill.getConfigByGroupIdAndLv(this.config.group_id, this.config.lv + 1);
                        //
                        if (nextConfig) {
                            this.isHasNextLv = true;
                            this.m_cost.text = this.config.exp + "";
                        }
                        else {
                            this.isHasNextLv = false;
                            this.m_cost.text = Games.TEXT.MaxLevel;
                        }
                        //技能icon
                        this.m_skill.icon = skill.iconUrl;
                    }
                }
            };
            return ArtistSkillItem;
        }(PfSkin.ArtistSkillItemStruct));
        PfSkin.ArtistSkillItem = ArtistSkillItem;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=ArtistSkillItem.js.map