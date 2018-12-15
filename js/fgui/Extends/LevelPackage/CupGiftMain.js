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
        var CupGiftMain = /** @class */ (function (_super) {
            __extends(CupGiftMain, _super);
            function CupGiftMain() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.canGet = false;
                return _this;
            }
            CupGiftMain.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                // 关闭按钮
                this.m_dialogPanel.m_closeBtn.onClick(this, this.onClickCloseBtn);
                // 关闭按钮
                this.m_okBtn.onClick(this, this.onClickOkBtn);
                this.m_title.text = TEXT.systemTip;
            };
            CupGiftMain.prototype.onClickCloseBtn = function () {
                this.moduleWindow.menuBack();
            };
            CupGiftMain.prototype.onClickOkBtn = function () {
                if (this.canGet) {
                    Game.protosender.smallTarget.CupGift();
                }
                else {
                    Game.system.toastText(TEXT.CantGetReward);
                }
            };
            CupGiftMain.prototype.onWindowShow = function () {
                this.setData();
                Game.moduleModel.targetPackage.sGetCupGiftSignal.add(this.sGetLevelGiftSignal, this);
                Game.moduleModel.targetPackage.sCupSignalUpdate.add(this.sCupSignalUpdate, this);
            };
            CupGiftMain.prototype.onWindowHide = function () {
                Game.moduleModel.targetPackage.sGetCupGiftSignal.remove(this.sGetLevelGiftSignal, this);
                Game.moduleModel.targetPackage.sCupSignalUpdate.remove(this.sCupSignalUpdate, this);
            };
            CupGiftMain.prototype.setData = function () {
                this.conf = Game.moduleModel.targetPackage.getCupConfig();
                this.m_pic.icon = ImageConfig.getUrl(this.conf.image);
                this.canGet = Game.moduleModel.targetPackage.cupGiftData.process >= this.conf.target_num;
                this.m_okBtn.grayed = !this.canGet;
            };
            CupGiftMain.prototype.sGetLevelGiftSignal = function (giftId) {
                var _this = this;
                var rewardConf = Game.config.cupPackage.getConfig(giftId);
                Game.system.getItemText(rewardConf.reward, function () { _this.onClickCloseBtn(); }, false);
            };
            CupGiftMain.prototype.sCupSignalUpdate = function (str) {
                this.m_delayTime.text = str;
            };
            return CupGiftMain;
        }(LevelPackage.CupGiftMainStruct));
        LevelPackage.CupGiftMain = CupGiftMain;
    })(LevelPackage = fgui.LevelPackage || (fgui.LevelPackage = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=CupGiftMain.js.map