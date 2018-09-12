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
        var SystemAddFansMessage = /** @class */ (function (_super) {
            __extends(SystemAddFansMessage, _super);
            function SystemAddFansMessage() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            /**
             * 获得物品消息,一个按钮
             * @param addFans 增加的粉丝
             * @param closeHandler 界面返回回调
             * @param title 目标进度值
             * @param autoCloseTime 目标进度值
             */
            SystemAddFansMessage.prototype.open = function (
            // fromValue: number,
            // toValue: number,
            // lv: number,
            addFans, closeHandler, title, autoCloseTime) {
                if (autoCloseTime === void 0) { autoCloseTime = 3; }
                this.addFans = addFans;
                this.closeHandler = closeHandler;
                if (isNullOrEmpty(title)) {
                    title = Games.TEXT.MarketAddFansTip;
                }
                this.InitValue(addFans);
                this.autoCloseTime = autoCloseTime;
                this.m_progress.max = this.maxValue;
                this.m_progress.value = this.fromValue;
                this.m_title.text = title;
                var str = Games.TEXT.MarketAddFansInfo;
                this.m_content.text = str.format(User.info.name, formatNumberUnit(addFans));
                this.m_btnClose.onClick(this, this.close);
                Games.MenuLayer.showDialogModel();
                Games.MenuLayer.dialog.addChild(this);
                centerScreen(this);
                // this.m_tip.visible = false;
                this.m_t0.play(new Handler(this, this.OnOpen));
            };
            SystemAddFansMessage.prototype.OnOpen = function () {
                if (User.info.level > this.lv) {
                    Laya.Tween.to(this.m_progress, { value: this.maxValue }, 1000, Laya.Ease.linearIn, Handler.create(this, this.ShowLevelUp), 0, true, true);
                }
                else {
                    Laya.Tween.to(this.m_progress, { value: this.toValue }, 1000, Laya.Ease.linearIn, Handler.create(this, this.ShowTip), 0, true, true);
                }
            };
            SystemAddFansMessage.prototype.ShowLevelUp = function () {
                this.fromValue = 0;
                this.lv++;
                this.maxValue = Game.config.playerLevel.getConfig(this.lv).fans;
                this.m_progress.value = this.fromValue;
                this.m_progress.max = this.maxValue;
                // Laya.Tween.to(this.m_progress, { value: this.toValue }, 1000, Laya.Ease.linearIn, Handler.create(this, this.ShowTip), 0, true, true);
                this.OnOpen();
            };
            SystemAddFansMessage.prototype.ShowTip = function () {
                // let str = Games.TEXT.MarketLvUpNeedFans;
                // let tip = str.format(formatNumberUnit(this.maxValue - this.toValue));
                // this.m_tip.text = tip;
                // this.m_tip.visible = true;
                var _this = this;
                if (this.autoCloseTime > 0) {
                    setTimeout(function () { _this.close(); }, this.autoCloseTime * 1000);
                }
            };
            SystemAddFansMessage.prototype.close = function () {
                Games.MenuLayer.hideDialogModel();
                if (this.closeHandler) {
                    this.closeHandler.run();
                }
                this.onHide();
                // this.m_t1.play(Handler.create(this, this.onHide));
            };
            SystemAddFansMessage.prototype.onHide = function () {
                if (this.addFans > this.toValue) {
                    Game.system.tryAlertLevelUp();
                }
                this.removeFromParent();
            };
            SystemAddFansMessage.prototype.InitValue = function (addFans) {
                var lastLv = User.info.level;
                var fansLimit = User.info.fans;
                var fromValue;
                while (addFans > fansLimit) {
                    lastLv--;
                    addFans -= fansLimit;
                    fansLimit = Game.config.playerLevel.GetFansLimit(lastLv);
                }
                fromValue = fansLimit - addFans;
                this.lv = lastLv;
                this.fromValue = fromValue;
                this.toValue = User.info.fans;
                this.maxValue = Game.config.playerLevel.GetFansLimit(this.lv);
            };
            return SystemAddFansMessage;
        }(Common.SystemAddFansMessageStruct));
        Common.SystemAddFansMessage = SystemAddFansMessage;
    })(Common = fgui.Common || (fgui.Common = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=SystemAddFansMessage.js.map