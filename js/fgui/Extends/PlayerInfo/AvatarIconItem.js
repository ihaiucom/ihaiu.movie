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
        var AvatarIconItem = /** @class */ (function (_super) {
            __extends(AvatarIconItem, _super);
            function AvatarIconItem() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            AvatarIconItem.prototype.setInfo = function (cfg) {
                this.cfg = cfg;
                this.m_flag_inuse.visible = false;
                this.m_g_lock.visible = false;
                this.m_btn_choose.visible = true;
                if (cfg.id == User.info.portrait || this.isDefaultPortrait(cfg.id) && User.info.portrait == 0) {
                    this.m_flag_inuse.visible = true;
                    this.m_btn_choose.visible = false;
                }
                var avatarConfig = Game.config.avatar.getConfig(cfg.icon);
                if (avatarConfig) {
                    this.m_avatarLoader.url = avatarConfig.iconUrl;
                }
                if (!this.isFree) {
                    if (!this.isGetPortrait(cfg.id)) {
                        this.showLock();
                    }
                }
            };
            AvatarIconItem.prototype.showUnlock = function () {
                this.m_btn_choose.visible = true;
                this.m_g_lock.visible = false;
            };
            Object.defineProperty(AvatarIconItem.prototype, "isFree", {
                //是否免费头像
                get: function () {
                    return this.cfg.unlock.itemId == 0;
                },
                enumerable: true,
                configurable: true
            });
            //是否已获得头像
            AvatarIconItem.prototype.isGetPortrait = function (portraitId) {
                return User.infoExt.portraitList.indexOf(portraitId) != -1;
            };
            //是否默认头像
            AvatarIconItem.prototype.isDefaultPortrait = function (portraitId) {
                var portraitCfgList = Game.config.headPortrait.getConfigList();
                var portraitSexList = portraitCfgList.filter(function (value, index, array) {
                    return value.sex == User.info.sex;
                });
                for (var _i = 0, portraitSexList_1 = portraitSexList; _i < portraitSexList_1.length; _i++) {
                    var portrait = portraitSexList_1[_i];
                    if (portrait.unlock.itemId == 0 && portrait.unlock.itemNum == 0) {
                        return portrait.id == portraitId;
                    }
                }
                return false;
            };
            AvatarIconItem.prototype.showLock = function () {
                this.m_btn_choose.visible = false;
                this.m_g_lock.visible = true;
                var costItem = Game.moduleModel.item.getItem(this.cfg.unlock.itemId);
                this.m_btn_itemBuy.getChild("itemIcon").url = costItem.itemIconUrl;
                this.m_btn_itemBuy.getChild("itemCount").text = this.cfg.unlock.itemNum.toString();
            };
            return AvatarIconItem;
        }(PlayerInfo.AvatarIconItemStruct));
        PlayerInfo.AvatarIconItem = AvatarIconItem;
    })(PlayerInfo = fgui.PlayerInfo || (fgui.PlayerInfo = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=AvatarIconItem.js.map