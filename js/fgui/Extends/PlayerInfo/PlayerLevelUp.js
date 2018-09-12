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
    var PlayerInfo;
    (function (PlayerInfo) {
        var PlayerLevelUp = /** @class */ (function (_super) {
            __extends(PlayerLevelUp, _super);
            function PlayerLevelUp() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.oldLevel = 1;
                _this.nowLevel = 1;
                return _this;
            }
            PlayerLevelUp.prototype.show = function (oldLevel, nowLevel, stroys) {
                this.oldLevel = oldLevel;
                this.nowLevel = nowLevel;
                this.stroys = stroys;
                Games.MenuLayer.dialog.addChild(this);
                //init	
                this.setLevelNum();
                this.m_btnGetAward.m_title.text = TEXT.PlayerUpgradeGetAward;
                this.m_btnGetAward.onClick(this, this.onClose);
            };
            PlayerLevelUp.prototype.onClose = function () {
                this.removeFromParent();
            };
            PlayerLevelUp.prototype.setLevelNum = function () {
                var strlevel = this.nowLevel.toString();
                this.m_levelNumList.removeChildrenToPool();
                for (var i = 0; i < strlevel.length; i++) {
                    var n = strlevel.charAt(i);
                    var nItem = this.m_levelNumList.addItemFromPool();
                    nItem.m_c1.selectedIndex = Number(n);
                    this.m_levelNumList.addChild(nItem);
                }
                //exp
                var curExp = User.info.fans;
                var cfg = Game.config.playerLevel.getConfig(this.nowLevel);
                var upgradeExp = cfg.fans;
                this.m_progressBar.value = ((curExp * 100) / upgradeExp);
                //stroy
                this.m_group1.visible = false;
                if (this.stroys.length > 0) {
                    this.m_group1.visible = true;
                    var stroyId = this.stroys[0];
                    var stroyCfg = Game.config.story.getConfig(stroyId);
                    if (stroyCfg) {
                        var avatarCfg = Game.config.avatar.getConfig(stroyCfg.poster_name);
                        this.m_stroyIcon.url = avatarCfg.iconUrl;
                        this.m_starList.removeChildrenToPool();
                        for (var i = 0; i < stroyCfg.starNumber; i++) {
                            this.m_starList.addItemFromPool();
                        }
                    }
                }
                //actor number
                var oldCfg = Game.config.playerLevel.getConfig(this.oldLevel);
                this.m_actorNum.text = oldCfg.actor_count.toString();
                this.m_actorNumUpgrade.text = cfg.actor_count.toString();
                //awards
                var rewards = oldCfg.reward;
                this.m_awardList.removeChildrenToPool();
                for (var _i = 0, rewards_1 = rewards; _i < rewards_1.length; _i++) {
                    var reward = rewards_1[_i];
                    var item = this.m_awardList.addItemFromPool();
                    item.setInfo(reward);
                    this.m_awardList.addChild(item);
                }
            };
            return PlayerLevelUp;
        }(PlayerInfo.PlayerLevelUpStruct));
        PlayerInfo.PlayerLevelUp = PlayerLevelUp;
    })(PlayerInfo = fgui.PlayerInfo || (fgui.PlayerInfo = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=PlayerLevelUp.js.map