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
    var System;
    (function (System) {
        var SystemAlertMessage = /** @class */ (function (_super) {
            __extends(SystemAlertMessage, _super);
            function SystemAlertMessage() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            /**
             * 对话框消息,一个按钮
             * @param txt 消息内容
             * @param title 标题
             * @param yesObj 点击yes按钮回调对象
             * @param yesFun 点击yes按钮回调函数
             * @param yesTxt yes按钮 文本
             * @param closeButtonVisiable 是否显示关闭按钮
             * @param buttonEnable 按钮是否可以点击
             * @param isClickButtonAutoClose 点击按钮后是否自动关闭
             */
            SystemAlertMessage.prototype.open = function (txt, title, yesObj, yesFun, yesTxt, closeButtonVisiable, buttonEnable, isClickButtonAutoClose) {
                if (title === void 0) { title = ""; }
                if (yesObj === void 0) { yesObj = null; }
                if (yesFun === void 0) { yesFun = null; }
                if (yesTxt === void 0) { yesTxt = null; }
                if (closeButtonVisiable === void 0) { closeButtonVisiable = true; }
                if (buttonEnable === void 0) { buttonEnable = true; }
                if (isClickButtonAutoClose === void 0) { isClickButtonAutoClose = true; }
                if (isNullOrEmpty(title)) {
                    title = "";
                }
                this.yesFun = yesFun;
                this.yesObj = yesObj;
                this.isClickButtonAutoClose = isClickButtonAutoClose;
                this.m_content.text = txt;
                this.m_title.text = title;
                this.m_okBtn.m_title.text = yesTxt;
                this.m_okBtn.enabled = buttonEnable;
                this.m_bgCom.m_closeBtn.enabled = buttonEnable;
                this.m_bgCom.m_closeBtn.visible = closeButtonVisiable;
                this.m_okBtn.onClick(this, this.onClickYes);
                this.m_bgCom.m_closeBtn.onClick(this, this.onClickYes);
                Games.MenuLayer.showDialogModel();
                Games.MenuLayer.floatMsg.addChild(this);
                centerScreen(this);
                this.m_t0.play();
            };
            SystemAlertMessage.prototype.close = function () {
                Games.MenuLayer.hideDialogModel();
                this.m_t1.play(Handler.create(this, this.onHide));
            };
            SystemAlertMessage.prototype.onHide = function () {
                this.removeFromParent();
            };
            SystemAlertMessage.prototype.onClickYes = function () {
                if (this.isClickButtonAutoClose) {
                    this.close();
                }
                if (this.yesFun) {
                    if (this.yesObj) {
                        this.yesFun.apply(this.yesObj);
                    }
                    else {
                        this.yesFun();
                    }
                }
            };
            return SystemAlertMessage;
        }(System.SystemAlertMessageStruct));
        System.SystemAlertMessage = SystemAlertMessage;
    })(System = fgui.System || (fgui.System = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=SystemAlertMessage.js.map