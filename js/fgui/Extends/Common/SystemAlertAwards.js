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
        var SystemAlertAwards = /** @class */ (function (_super) {
            __extends(SystemAlertAwards, _super);
            function SystemAlertAwards() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.isAddScreenRestSizeListen = false;
                return _this;
            }
            /**
             * 显示获得奖励
             * @param itemList
             * @param title
             */
            SystemAlertAwards.prototype.open = function (itemList, title, confirm, confirmText, hideClose) {
                if (hideClose === void 0) { hideClose = false; }
                this.itemList = itemList;
                this.confirm = confirm;
                this.m_commonPanel.m_closeBtn.onClick(this, this.onClose);
                this.m_confirmBtn.onClick(this, this.onConfirm);
                this.m_confirmBtn.m_title.text = TEXT.ButtonOk;
                if (confirmText) {
                    this.m_confirmBtn.m_title.text = confirmText;
                }
                if (title) {
                    this.m_commonPanel.m_title.text = title;
                }
                this.m_commonPanel.m_closeBtn.visible = !hideClose;
                this.m_assetList.removeChildrenToPool();
                for (var _i = 0, itemList_1 = itemList; _i < itemList_1.length; _i++) {
                    var item = itemList_1[_i];
                    var assetItem = this.m_assetList.addItemFromPool();
                    var cfg = Game.config.item.getConfig(item.itemId);
                    if (cfg) {
                        assetItem.m_icon.url = cfg.iconUrl;
                    }
                    assetItem.m_title.text = formatNumberUnit(item.itemNum);
                }
                //display
                Games.MenuLayer.showDialogModel();
                Games.MenuLayer.dialog.addChild(this);
                this.setScreenSize();
                this.addScreenRestSizeListen();
            };
            //奖励剧本
            SystemAlertAwards.prototype.openRewardStory = function (id, itemNum, title, confirm) {
                this.m_commonPanel.m_closeBtn.onClick(this, this.onClose);
                this.m_confirmBtn.onClick(this, this.onConfirm);
                if (title) {
                    this.m_commonPanel.m_title.text = title;
                }
                this.m_assetList.removeChildrenToPool();
                var assetItem = this.m_assetList.addItemFromPool();
                var cfg = Game.config.story.getConfig(id);
                if (cfg) {
                    assetItem.m_icon.url = Game.config.avatar.getConfig(cfg.poster_name).iconUrl;
                }
                assetItem.m_title.text = itemNum.toString();
                //display
                Games.MenuLayer.showDialogModel();
                Games.MenuLayer.dialog.addChild(this);
                this.setScreenSize();
                this.addScreenRestSizeListen();
            };
            SystemAlertAwards.prototype.onConfirm = function () {
                if (this.confirm) {
                    this.confirm.apply(null, this.itemList);
                }
                this.onClose();
            };
            SystemAlertAwards.prototype.onClose = function () {
                this.removeScreenRestSizeListen();
                Games.MenuLayer.hideDialogModel();
                this.parent.removeChild(this);
            };
            SystemAlertAwards.prototype.addScreenRestSizeListen = function () {
                if (this.isAddScreenRestSizeListen)
                    return;
                this.isAddScreenRestSizeListen = true;
                Laya.stage.on(laya.events.Event.RESIZE, this, this.setScreenSize);
            };
            SystemAlertAwards.prototype.removeScreenRestSizeListen = function () {
                this.isAddScreenRestSizeListen = false;
                Laya.stage.off(laya.events.Event.RESIZE, this, this.setScreenSize);
            };
            SystemAlertAwards.prototype.setScreenSize = function () {
                centerScreen(this);
                Games.MenuLayer.resetDialogModelSize();
            };
            return SystemAlertAwards;
        }(Common.SystemAlertAwardsStruct));
        Common.SystemAlertAwards = SystemAlertAwards;
    })(Common = fgui.Common || (fgui.Common = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=SystemAlertAwards.js.map