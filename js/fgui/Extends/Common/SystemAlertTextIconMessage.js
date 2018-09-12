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
        var SystemAlertTextIconMessage = /** @class */ (function (_super) {
            __extends(SystemAlertTextIconMessage, _super);
            function SystemAlertTextIconMessage() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            /**
             * 文本，图标提示
             * @param itemList
             * @param title
             * @param content
             * @param confirm
             * @param confirmText
             */
            SystemAlertTextIconMessage.prototype.open = function (itemList, title, content, confirm, caller, confirmText, isShowClose, isShowCurNum) {
                if (isShowCurNum === void 0) { isShowCurNum = true; }
                this.itemList = itemList;
                this.confirm = confirm;
                this.caller = caller;
                this.m_commonDialog.m_closeBtn.visible = true;
                if (isShowClose != null) {
                    this.m_commonDialog.m_closeBtn.visible = isShowClose;
                }
                this.m_commonDialog.m_closeBtn.onClick(this, this.onClose);
                this.m_confirmBtn.onClick(this, this.onConfirm);
                this.m_commonDialog.m_title.text = "";
                this.m_content.text = "";
                this.m_confirmBtn.m_title.text = TEXT.ButtonOk;
                if (title) {
                    this.m_commonDialog.m_title.text = title;
                }
                if (content) {
                    this.m_content.text = content;
                }
                if (confirmText) {
                    this.m_confirmBtn.m_title.text = confirmText;
                }
                this.m_assetList.removeChildrenToPool();
                for (var _i = 0, itemList_1 = itemList; _i < itemList_1.length; _i++) {
                    var item = itemList_1[_i];
                    var assetItem = this.m_assetList.addItemFromPool();
                    if (isShowCurNum) {
                        assetItem.setInfo(item);
                    }
                    else {
                        assetItem.updateViewByDTNum(item);
                    }
                }
                //display
                Games.MenuLayer.showDialogModel();
                Games.MenuLayer.dialog.addChild(this);
                centerScreen(this);
            };
            SystemAlertTextIconMessage.prototype.onConfirm = function () {
                if (this.confirm) {
                    this.confirm.call(this, this.itemList);
                }
                this.onClose();
            };
            SystemAlertTextIconMessage.prototype.onClose = function () {
                Games.MenuLayer.hideDialogModel();
                this.parent.removeChild(this);
            };
            return SystemAlertTextIconMessage;
        }(Common.SystemAlertTextIconMessageStruct));
        Common.SystemAlertTextIconMessage = SystemAlertTextIconMessage;
    })(Common = fgui.Common || (fgui.Common = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=SystemAlertTextIconMessage.js.map