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
    var LevelPackage;
    (function (LevelPackage) {
        var LevelPackageMain = /** @class */ (function (_super) {
            __extends(LevelPackageMain, _super);
            function LevelPackageMain() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.canGet = false;
                return _this;
            }
            LevelPackageMain.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                // 关闭按钮
                this.m_dialogPanel.m_closeBtn.onClick(this, this.onClickCloseBtn);
                // 关闭按钮
                this.m_okBtn.onClick(this, this.onClickOkBtn);
                this.m_title.text = TEXT.systemTip;
                this.m_rewardList.itemRenderer = Handler.create(this, this.targetItem, null, false);
                this.m_rewardList.on(fairygui.Events.CLICK_ITEM, this, this.onClickItem);
            };
            LevelPackageMain.prototype.onClickCloseBtn = function () {
                this.moduleWindow.menuBack();
            };
            LevelPackageMain.prototype.onClickOkBtn = function () {
                if (this.canGet) {
                    Game.protosender.smallTarget.LevGift();
                }
                else {
                    Game.system.toastText(TEXT.CantGetReward);
                }
            };
            LevelPackageMain.prototype.onWindowShow = function () {
                this.setData();
                Game.moduleModel.targetPackage.sGetLevelGiftSignal.add(this.sGetLevelGiftSignal, this);
            };
            LevelPackageMain.prototype.onWindowHide = function () {
                Game.moduleModel.targetPackage.sGetLevelGiftSignal.remove(this.sGetLevelGiftSignal, this);
            };
            LevelPackageMain.prototype.setData = function () {
                this.conf = Game.moduleModel.targetPackage.getTargetConfig();
                this.m_tip1.m_title.text = format(TEXT.GiftTipTitle, this.conf.player_level);
                this.m_rewardList.numItems = this.conf.reward.length;
                if (this.conf.next_id === 0) {
                    this.m_isOver.setSelectedIndex(1);
                }
                else {
                    var nextConf = Game.config.levelGiftPackage.getConfig(this.conf.next_id);
                    this.m_tip2.m_title.text = format(TEXT.NextRewardTip, nextConf.player_level);
                    this.m_isOver.setSelectedIndex(0);
                }
                this.m_pic.icon = ImageConfig.getUrl(this.conf.image);
                this.canGet = User.info.level >= this.conf.player_level;
                this.m_okBtn.grayed = !this.canGet;
            };
            // 奖励物品列表
            LevelPackageMain.prototype.targetItem = function (index, obj) {
                var item = obj;
                item.setItemNumDataForData(this.conf.reward[index]);
            };
            LevelPackageMain.prototype.onClickItem = function (obj) {
                var index = this.m_rewardList.getChildIndex(obj);
                var realIndex = this.m_rewardList.childIndexToItemIndex(index);
                Game.system.showItemInfo(obj, this.conf.reward[realIndex].itemId);
            };
            LevelPackageMain.prototype.sGetLevelGiftSignal = function (giftId) {
                var _this = this;
                var rewardConf = Game.config.levelGiftPackage.getConfig(giftId);
                Game.system.getItemText(rewardConf.reward, function () { _this.onClickCloseBtn(); }, false);
            };
            return LevelPackageMain;
        }(LevelPackage.LevelPackageMainStruct));
        LevelPackage.LevelPackageMain = LevelPackageMain;
    })(LevelPackage = fgui.LevelPackage || (fgui.LevelPackage = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=LevelPackageMain.js.map