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
        var SettingsItem = /** @class */ (function (_super) {
            __extends(SettingsItem, _super);
            function SettingsItem() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            SettingsItem.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                // 关闭按钮
                this.onClick(this, this.onClickBtn);
            };
            Object.defineProperty(SettingsItem.prototype, "OnOff", {
                get: function () {
                    return this.m_onTip.visible;
                },
                set: function (value) {
                    this.m_offTip.visible = !value;
                    this.m_onTip.visible = value;
                },
                enumerable: true,
                configurable: true
            });
            SettingsItem.prototype.setData = function (data, isInit) {
                if (isInit === void 0) { isInit = false; }
                this.curData = data;
                this.m_title.text = this.curData.name + "";
                this.m_icon.icon = Games.WarLoadPic.getAvatarIcon(this.curData.icon);
                if (this.curData._default === 2) {
                    this.m_offTip.visible = false;
                    this.m_onTip.visible = false;
                }
                else {
                    this.OnOff = Game.moduleModel.setting.getBoolean(this.curData.key);
                }
            };
            SettingsItem.prototype.onClickBtn = function () {
                if (!this.curData._switch) {
                    Game.system.toastText(TEXT.FunNoOpen);
                }
                else {
                    if (this.curData._default === 2) {
                        if (this.curData.popup === "language_setting") {
                            Game.moduleModel.setting.sCallLanguagePanel.dispatch();
                        }
                        else if (this.curData.popup === "advice_feedback") {
                            Game.system.toastText(Game.config.msg.getConfig(MsgKey.feedback_words).notice + "");
                        }
                        else if (this.curData.popup === "gift_exchange") {
                            Game.moduleModel.setting.sCallGiftPanel.dispatch();
                        }
                    }
                    else {
                        var onOff = Game.moduleModel.setting.getBoolean(this.curData.key);
                        onOff = !onOff;
                        Game.moduleModel.setting.setBoolean(this.curData.key, onOff);
                        this.OnOff = onOff;
                    }
                }
            };
            return SettingsItem;
        }(SystemSettings.SettingsItemStruct));
        SystemSettings.SettingsItem = SettingsItem;
    })(SystemSettings = fgui.SystemSettings || (fgui.SystemSettings = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=SettingsItem.js.map