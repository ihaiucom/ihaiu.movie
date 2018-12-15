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
        var LevelUpLimitUI = /** @class */ (function (_super) {
            __extends(LevelUpLimitUI, _super);
            function LevelUpLimitUI() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            LevelUpLimitUI.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                setScreenSize(this);
                centerScreen(this);
                this.m_closeBtn.onClick(this, this.onClickCloseBtn);
                this.m_okBtn.title = Games.TEXT.Send;
                this.m_okBtn.onClick(this, this.onClickOkBtn);
            };
            LevelUpLimitUI.prototype.onClickCloseBtn = function () {
                this.removeFromParent();
            };
            /**
             *
             * @param title 标题
             * @param content
             * @param need
             * @param caller
             * @param okFunc
             */
            LevelUpLimitUI.prototype.open = function (title, need, content, level, caller, okFunc) {
                this.m_title.text = title;
                this.m_level.text = level;
                this.m_content.text = content;
                this.m_need.text = need;
                this.caller = caller;
                this.okFunc = okFunc;
                Games.MenuLayer.dialog.addChild(this);
            };
            /**
             * 点击确定按钮
             */
            LevelUpLimitUI.prototype.onClickOkBtn = function () {
                if (this.okFunc) {
                    if (this.caller) {
                        this.okFunc.apply(this.caller);
                    }
                    else {
                        this.okFunc();
                    }
                }
                this.onClickCloseBtn();
            };
            return LevelUpLimitUI;
        }(Common.LevelUpLimitUIStruct));
        Common.LevelUpLimitUI = LevelUpLimitUI;
    })(Common = fgui.Common || (fgui.Common = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=LevelUpLimitUI.js.map