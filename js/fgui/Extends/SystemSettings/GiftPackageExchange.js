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
    var SystemSettings;
    (function (SystemSettings) {
        var GiftPackageExchange = /** @class */ (function (_super) {
            __extends(GiftPackageExchange, _super);
            function GiftPackageExchange() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            GiftPackageExchange.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_title.text = Game.config.msg.getConfig(MsgKey.exchange_title).notice;
                this.m_okBtn.m_title.text = Game.config.msg.getConfig(MsgKey.exhange_button).notice;
                this.m_inputText.promptText = Game.config.msg.getConfig(MsgKey.exchange_input).notice;
                // 关闭按钮
                this.m_okBtn.onClick(this, this.onClickOkBtn);
                this.m_bg.onClick(this, this.onClickCloseBtn);
                this.m_closeBtn.onClick(this, this.onClickCloseBtn);
            };
            GiftPackageExchange.prototype.onClickOkBtn = function () {
                Game.moduleModel.setting.exchange(this.m_inputText.text);
            };
            GiftPackageExchange.prototype.onClickCloseBtn = function () {
                this.visible = false;
                Game.moduleModel.setting.sCallGiftGetOk.remove(this.giftGetOk, this);
            };
            GiftPackageExchange.prototype.onShow = function () {
                this.visible = true;
                this.m_inputText.text = "";
                Game.moduleModel.setting.sCallGiftGetOk.add(this.giftGetOk, this);
            };
            GiftPackageExchange.prototype.giftGetOk = function () {
                Game.system.toastText(Game.config.msg.getConfig(MsgKey.gift_success).notice);
            };
            return GiftPackageExchange;
        }(SystemSettings.GiftPackageExchangeStruct));
        SystemSettings.GiftPackageExchange = GiftPackageExchange;
    })(SystemSettings = fgui.SystemSettings || (fgui.SystemSettings = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=GiftPackageExchange.js.map