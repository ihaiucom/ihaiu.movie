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
        var SystemSetNumMessage = /** @class */ (function (_super) {
            __extends(SystemSetNumMessage, _super);
            function SystemSetNumMessage() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            /**
             * 对话框消息,一个按钮
             * @param limit 数量选择上限
             * @param txt 消息内容
             * @param title 标题
             * @param caller 点击按钮回调对象
             * @param yesFun 点击yes按钮回调函数
             * @param yesObj 点击yes按钮回调对象
             * @param noFun 点击no按钮回调函数
             * @param noFun 点击no按钮回调对象
             * @param yesTxt yes按钮 文本
             * @param closeButtonVisiable 是否显示关闭按钮
             * @param isClickButtonAutoClose 点击按钮后是否自动关闭
             */
            SystemSetNumMessage.prototype.open = function (limit, txt, title, caller, yesFun, noFun, yesTxt, closeButtonVisiable, isClickButtonAutoClose) {
                if (txt === void 0) { txt = ""; }
                if (title === void 0) { title = ""; }
                if (caller === void 0) { caller = null; }
                if (yesFun === void 0) { yesFun = null; }
                if (noFun === void 0) { noFun = null; }
                if (yesTxt === void 0) { yesTxt = null; }
                if (closeButtonVisiable === void 0) { closeButtonVisiable = true; }
                if (isClickButtonAutoClose === void 0) { isClickButtonAutoClose = true; }
                this.m_progress.max = limit;
                this.m_progress.num = limit >= 1 ? 1 : 0;
                if (isNullOrEmpty(title)) {
                    this.m_title.text = "";
                }
                if (isNullOrEmpty(txt)) {
                    this.m_content.text = Games.TEXT.BagSelectNum;
                }
                this.caller = caller;
                this.yesFun = yesFun;
                this.noFun = noFun;
                this.isClickButtonAutoClose = isClickButtonAutoClose;
                this.m_content.text = txt;
                this.m_title.text = title;
                this.m_okBtn.m_title.text = yesTxt;
                this.m_bgCom.m_closeBtn.visible = closeButtonVisiable;
                this.m_okBtn.onClick(this, this.onClickYes);
                this.m_bgCom.m_closeBtn.onClick(this, this.onClickNo);
                this.m_t1.stop();
                Games.MenuLayer.showDialogModel();
                Games.MenuLayer.dialog.addChild(this);
                centerScreen(this);
                this.m_t0.play();
            };
            SystemSetNumMessage.prototype.close = function () {
                Games.MenuLayer.hideDialogModel();
                this.m_t1.play(Handler.create(this, this.onHide));
            };
            SystemSetNumMessage.prototype.onHide = function () {
                this.removeFromParent();
            };
            SystemSetNumMessage.prototype.onClickYes = function () {
                if (this.isClickButtonAutoClose) {
                    this.close();
                }
                if (this.yesFun) {
                    if (this.caller) {
                        this.yesFun.apply(this.caller, [this.m_progress.num]);
                    }
                    else {
                        this.yesFun(this.m_progress.num);
                    }
                }
            };
            SystemSetNumMessage.prototype.onClickNo = function () {
                if (this.isClickButtonAutoClose) {
                    this.close();
                }
                if (this.noFun) {
                    if (this.caller) {
                        this.noFun.apply(this.caller);
                    }
                    else {
                        this.noFun();
                    }
                }
            };
            return SystemSetNumMessage;
        }(Common.SystemSetNumMessageStruct));
        Common.SystemSetNumMessage = SystemSetNumMessage;
    })(Common = fgui.Common || (fgui.Common = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=SystemSetNumMessage.js.map