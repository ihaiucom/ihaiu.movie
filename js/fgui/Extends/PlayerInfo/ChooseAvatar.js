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
        var ChooseAvatar = /** @class */ (function (_super) {
            __extends(ChooseAvatar, _super);
            function ChooseAvatar() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.isRemoveFromParent = false;
                return _this;
            }
            ChooseAvatar.prototype.showForParent = function (parent) {
                this.isRemoveFromParent = false;
                parent.addChild(this);
                //aspect
                this.setSize(fairygui.GRoot.inst.width, fairygui.GRoot.inst.height);
                this.addRelation(parent, fairygui.RelationType.Size);
                Game.protoOkEvent.add(ProtoEventKey.GameData_RePortraitGameData, this.onServerChangeHeadAvatar, this);
            };
            ChooseAvatar.prototype.setInfo = function () {
                var _this = this;
                this.avatarList = this.GetAvatarList();
                this.avatarList.sort(function (A, B) {
                    var isGetPortraitA = _this.isGetPortrait(A.id);
                    var isGetPortraitB = _this.isGetPortrait(B.id);
                    if (isGetPortraitA && !isGetPortraitB) {
                        return -1;
                    }
                    if (!isGetPortraitA && isGetPortraitB) {
                        return 1;
                    }
                    return 0;
                });
                this.updateList();
                this.m_btn_close.onClick(this, this.onClose);
            };
            ChooseAvatar.prototype.updateList = function () {
                this.m_avatarList.removeChildrenToPool();
                for (var _i = 0, _a = this.avatarList; _i < _a.length; _i++) {
                    var avatarCfg = _a[_i];
                    var avatarIconItem = this.m_avatarList.addItemFromPool();
                    avatarIconItem.setInfo(avatarCfg);
                    avatarIconItem.m_btn_choose.onClick(this, this.onPortraitSelect, [avatarCfg.id]);
                    avatarIconItem.m_btn_itemBuy.onClick(this, this.onPortraitUnlock, [avatarCfg.id]);
                    this.m_avatarList.addChild(avatarIconItem);
                }
            };
            //是否已获得头像
            ChooseAvatar.prototype.isGetPortrait = function (portraitId) {
                if (this.isDefaultPortrait(portraitId))
                    return true;
                return User.infoExt.portraitList.indexOf(portraitId) != -1;
            };
            //是否默认头像
            ChooseAvatar.prototype.isDefaultPortrait = function (portraitId) {
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
            //选中单项
            ChooseAvatar.prototype.onPortraitSelect = function (portraitId) {
                Game.moduleModel.playerInfo.portraitType = Games.PortraitType.Dress;
                Game.moduleModel.playerInfo.portraitId = portraitId;
                Game.protosender.GameData.RePortraitGameData(Games.PortraitType.Dress, portraitId);
                this.onClose();
            };
            //解锁头像
            ChooseAvatar.prototype.onPortraitUnlock = function (portraitId) {
                var itemCfg = Game.config.headPortrait.getConfig(portraitId);
                var itemCostCfg = Game.config.item.getConfig(itemCfg.unlock.itemId);
                var ownerItemNum = Game.moduleModel.item.getItemNum(itemCfg.unlock.itemId);
                if (ownerItemNum < itemCfg.unlock.itemNum) {
                    // let msg = Game.config.msg.getTxtFormat(MsgKey.build_non_material, itemCostCfg.name);
                    // Game.system.toastText(msg);
                    Game.system.openItemWay(itemCfg.unlock.itemId, itemCfg.unlock.itemNum);
                }
                else {
                    Game.moduleModel.playerInfo.portraitType = Games.PortraitType.Buy;
                    Game.moduleModel.playerInfo.portraitId = portraitId;
                    Game.protosender.GameData.RePortraitGameData(Games.PortraitType.Buy, portraitId);
                }
            };
            ChooseAvatar.prototype.GetAvatarList = function () {
                var i = User.info;
                var headPortrait = Game.config.headPortrait.getConfigList();
                return headPortrait.filter(function (value, index, array) {
                    return value.sex == User.info.sex;
                });
            };
            ChooseAvatar.prototype.onServerChangeHeadAvatar = function (proto) {
                if (proto.result == 0) {
                    if (Game.moduleModel.playerInfo.portraitType == Games.PortraitType.Buy) {
                        this.updateList();
                    }
                }
            };
            ChooseAvatar.prototype.onClose = function () {
                Game.protoOkEvent.remove(ProtoEventKey.GameData_RePortraitGameData, this.onServerChangeHeadAvatar, this);
                this.parent.removeChild(this);
                this.isRemoveFromParent = true;
            };
            return ChooseAvatar;
        }(PlayerInfo.ChooseAvatarStruct));
        PlayerInfo.ChooseAvatar = ChooseAvatar;
    })(PlayerInfo = fgui.PlayerInfo || (fgui.PlayerInfo = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=ChooseAvatar.js.map