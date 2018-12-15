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
        var SystemAlertGift = /** @class */ (function (_super) {
            __extends(SystemAlertGift, _super);
            function SystemAlertGift() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            SystemAlertGift.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_closeBtn.onClick(this, this.onClose);
                this.m_moneyBtn.onClick(this, this.onConfirm);
            };
            /**
             *
             * @param itemList
             * @param title
             * @param desc
             * @param btnTxt
             * @param btnEnabled
             * @param confirm
             * @param confirmText
             */
            SystemAlertGift.prototype.open = function (itemList, title, desc, btnTxt, btnEnabled, confirm, confirmText) {
                this.itemList = itemList;
                this.confirm = confirm;
                if (title) {
                    this.m_title.text = title;
                }
                if (desc) {
                    this.m_des.text = desc;
                }
                else {
                    this.m_des.text = "";
                }
                this.m_moneyBtn.enabled = btnEnabled;
                this.m_moneyBtn.grayed = !btnEnabled;
                this.m_moneyBtn.text = btnTxt;
                this.m_list.removeChildrenToPool();
                for (var _i = 0, itemList_1 = itemList; _i < itemList_1.length; _i++) {
                    var item = itemList_1[_i];
                    var assetItem = this.m_list.addItemFromPool();
                    var cfg = Game.config.item.getConfig(item.itemId);
                    if (cfg) {
                        assetItem.m_icon.icon = cfg.iconUrl;
                    }
                    assetItem.m_title.text = item.itemNum.toString();
                }
                //display
                Games.MenuLayer.showDialogModel();
                Games.MenuLayer.dialog.addChild(this);
                centerScreen(this);
            };
            SystemAlertGift.prototype.onConfirm = function () {
                if (this.confirm) {
                    this.confirm.apply(null, this.itemList);
                }
                this.onClose();
            };
            SystemAlertGift.prototype.onClose = function () {
                Games.MenuLayer.hideDialogModel();
                this.parent.removeChild(this);
            };
            return SystemAlertGift;
        }(Common.SystemAlertGiftStruct));
        Common.SystemAlertGift = SystemAlertGift;
    })(Common = fgui.Common || (fgui.Common = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=SystemAlertGift.js.map