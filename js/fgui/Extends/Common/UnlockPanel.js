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
        var UnlockPanel = /** @class */ (function (_super) {
            __extends(UnlockPanel, _super);
            function UnlockPanel() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            UnlockPanel.prototype.openUnlockLessonFunc = function (url, txt) {
                var _this = this;
                this.show();
                if (this._unlockBtn == null) {
                    this._unlockBtn = fgui.MainUI.MenuBButton.createInstance();
                }
                this._unlockBtn.x = this.m_effect.x + (this.m_effect.width >> 1) - (this._unlockBtn.width >> 1);
                this._unlockBtn.y = this.m_effect.y + (this.m_effect.height >> 1) - (this._unlockBtn.height >> 1);
                this.addChild(this._unlockBtn);
                this._unlockBtn.visible = true;
                this._unlockBtn.m_icon.url = url;
                this._unlockBtn.m_lock.visible = false;
                this._unlockBtn.m_red.visible = false;
                this._unlockBtn.setScale(0, 0);
                this._unlockBtn.text = txt;
                Laya.Tween.to(this._unlockBtn, { scaleX: 1.5, scaleY: 1.5 }, 300, Laya.Ease.linearNone);
                this.m_effect.m_t1.play(Handler.create(null, function () {
                    _this._unlockBtn.visible = false;
                    _this._unlockBtn.removeFromParent();
                    Games.MenuLayer.hideDialogModel();
                    _this.hide();
                }));
            };
            /**
             *
             * @param unlockId
             */
            UnlockPanel.prototype.openUnlock = function (unlockId) {
                var _this = this;
                this.show();
                if (this._unlockCtrl == null) {
                    this._unlockCtrl = new fgui.MainUI.MenuButtonCtl(unlockId, this, false);
                }
                else {
                    this._unlockCtrl.setUnlockConfig(unlockId);
                }
                this.addChild(this._unlockCtrl.button);
                Laya.Tween.clearAll(this._unlockCtrl);
                this._unlockCtrl.button.x = this.m_effect.x + (this.m_effect.width >> 1) - (this._unlockCtrl.button.width >> 1);
                this._unlockCtrl.button.y = this.m_effect.y + (this.m_effect.height >> 1) - (this._unlockCtrl.button.height >> 1);
                this._unlockCtrl.button.setScale(0, 0);
                this._unlockCtrl.button.enabled = false;
                this._unlockCtrl.refreshUnlock();
                this._unlockCtrl.hideRedPoint();
                Laya.Tween.to(this._unlockCtrl.button, { scaleX: this._unlockCtrl.unlockScale, scaleY: this._unlockCtrl.unlockScale }, 300, Laya.Ease.linearNone);
                this.m_effect.m_t1.play(Handler.create(null, function () {
                    var endX = 0;
                    var endY = 0;
                    Game.event.dispatch(GameEventKey.GameEventKey_UnlockChange, unlockId);
                    var ctrl = Game.moduleModel.func.getMenuCtrl(unlockId);
                    if (ctrl) {
                        var point = ctrl.getGlobalPos();
                        endX = point.x;
                        endY = point.y;
                        Games.MenuLayer.hideDialogModel();
                        Laya.Tween.to(_this._unlockCtrl.button, { x: endX, y: endY, scaleX: 1, scaleY: 1 }, ctrl.moveDuration, Laya.Ease.linearNone, Handler.create(_this, _this.playNext));
                    }
                    else {
                        _this.playNext();
                    }
                }));
            };
            UnlockPanel.prototype.closeUnlock = function () {
                this.hide();
            };
            //播放下一个
            UnlockPanel.prototype.playNext = function () {
                this._unlockCtrl.hideButton();
                if (Game.moduleModel.func.playUnlock() == false) {
                    this.hide();
                }
            };
            //移除
            UnlockPanel.prototype.hide = function () {
                this.removeFromParent();
            };
            //显示
            UnlockPanel.prototype.show = function () {
                //display
                Games.MenuLayer.showDialogModel();
                setScreenSize(this);
                centerScreen(this);
                Games.MenuLayer.dialog.addChild(this);
            };
            return UnlockPanel;
        }(Common.UnlockPanelStruct));
        Common.UnlockPanel = UnlockPanel;
    })(Common = fgui.Common || (fgui.Common = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=UnlockPanel.js.map