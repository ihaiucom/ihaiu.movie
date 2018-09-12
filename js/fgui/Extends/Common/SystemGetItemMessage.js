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
        var SystemGetItemMessage = /** @class */ (function (_super) {
            __extends(SystemGetItemMessage, _super);
            function SystemGetItemMessage() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.showIndex = 0;
                _this.MaxShowNum = 10;
                return _this;
            }
            /**
             * 获得物品消息,一个按钮
             * @param itemList 物品列表 :Games.ItemData[];
             * @param title 标题
             * @param closeFun
             * @param isAutoClose 是否自动关闭
             * @param closeButtonVisiable 是否显示关闭按钮
             * @param buttonEnable 按钮是否可以点击
             * @param isClickButtonAutoClose 点击按钮后是否自动关闭
             */
            SystemGetItemMessage.prototype.open = function (itemList, closeFun, isAutoClose, closeButtonVisiable, buttonEnable, isClickButtonAutoClose) {
                if (closeFun === void 0) { closeFun = null; }
                if (isAutoClose === void 0) { isAutoClose = false; }
                if (closeButtonVisiable === void 0) { closeButtonVisiable = true; }
                if (buttonEnable === void 0) { buttonEnable = true; }
                if (isClickButtonAutoClose === void 0) { isClickButtonAutoClose = true; }
                if (itemList.length > 0)
                    console.log(getClassName(itemList[0]));
                this.items = itemList;
                this.isClickButtonAutoClose = isClickButtonAutoClose;
                this.closeFun = closeFun;
                this.m_listItem.itemRenderer = new Handler(this, this.RenderItem, null, false);
                this.m_btnClose.enabled = buttonEnable;
                this.m_btnClose.visible = closeButtonVisiable;
                this.m_btnClose.onClick(this, this.close);
                this.isAutoClose = isAutoClose;
                Games.MenuLayer.showDialogModel();
                Games.MenuLayer.dialog.addChild(this);
                centerScreen(this);
                this.showIndex = 0;
                this.Show();
            };
            SystemGetItemMessage.prototype.Show = function () {
                var _this = this;
                this.UpdateRewardList();
                if (this.isAutoClose) {
                    this.autoCloseTimeout = setTimeout(function () {
                        _this.close();
                    }, 500);
                }
                this.m_t0.play();
            };
            SystemGetItemMessage.prototype.UpdateRewardList = function () {
                this.m_listItem.numItems = Math.min(this.MaxShowNum, this.items.length - this.showIndex);
            };
            SystemGetItemMessage.prototype.RenderItem = function (index, obj) {
                var data = this.items[index + this.showIndex];
                obj.m_num.text = data.itemNumTxt;
                obj.m_star.starNum = data.itemStar;
                obj.icon = Game.moduleModel.item.getItem(data.itemId).itemIconUrl;
                obj.PopupInfo = data.itemId;
            };
            SystemGetItemMessage.prototype.close = function () {
                clearTimeout(this.autoCloseTimeout);
                this.m_t2.play(Handler.create(this, this.onHide));
            };
            SystemGetItemMessage.prototype.onHide = function () {
                if (this.items.length > this.showIndex + this.MaxShowNum) {
                    this.showIndex += this.MaxShowNum;
                    this.Show();
                    return;
                }
                Games.MenuLayer.hideDialogModel();
                if (this.closeFun) {
                    this.closeFun();
                }
                this.removeFromParent();
            };
            return SystemGetItemMessage;
        }(Common.SystemGetItemMessageStruct));
        Common.SystemGetItemMessage = SystemGetItemMessage;
    })(Common = fgui.Common || (fgui.Common = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=SystemGetItemMessage.js.map