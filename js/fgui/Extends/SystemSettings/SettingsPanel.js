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
        var SettingsPanel = /** @class */ (function (_super) {
            __extends(SettingsPanel, _super);
            function SettingsPanel() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            SettingsPanel.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.isInit = true;
                this.m_setList.itemRenderer = Laya.Handler.create(this, this.initItem, null, false);
                // 关闭按钮
                this.m_closeBtn.onClick(this, this.onClickCloseBtn);
                this.m_SwitchAccountBtn.title = Games.TEXT.SwitchAccount;
                this.m_FeedBackBtn.title = Games.TEXT.FeedBackSettings;
                this.m_SwitchAccountBtn.onClick(this, this.SwitchAccount);
                this.m_FeedBackBtn.onClick(this, this.OpenFeedBackUI);
            };
            // 关闭
            SettingsPanel.prototype.onClickCloseBtn = function () {
                this.moduleWindow.menuClose();
                // window.location.reload();
            };
            SettingsPanel.prototype.SwitchAccount = function () {
                Game.system.confirmText(TEXT.SureaSwitchAccount, null, this, function () {
                    window.location.reload();
                });
            };
            SettingsPanel.prototype.OpenFeedBackUI = function () {
                Game.system.toastText(Game.config.msg.getConfig(MsgKey.feedback_words).notice + "");
            };
            SettingsPanel.prototype.onWindowShow = function () {
                Game.moduleModel.setting.sCallLanguagePanel.add(this.onShowLanguagePanel, this);
                Game.moduleModel.setting.sCallGiftPanel.add(this.onShowGifPanel, this);
                this.onRefrush();
            };
            SettingsPanel.prototype.onWindowHide = function () {
                Game.moduleModel.setting.sCallLanguagePanel.remove(this.onShowLanguagePanel, this);
                Game.moduleModel.setting.sCallGiftPanel.remove(this.onShowGifPanel, this);
            };
            SettingsPanel.prototype.onRefrush = function () {
                this.setConfList = Game.config.settingDefault.getConfigInList();
                this.m_setList.numItems = this.setConfList.length;
                this.m_title.text = Game.config.msg.getConfig(MsgKey.setting_title).notice + "";
                this.m_idTip.text = format(Game.config.msg.getConfig(MsgKey.player_id).notice, User.info.entityId);
                this.m_version.text = format(Game.config.msg.getConfig(MsgKey.version_num).notice, "1.0.18");
                this.m_tip.text = format(Game.config.msg.getConfig(MsgKey.setting_notice).notice, 10);
                if (this.isInit) {
                    this.isInit = false;
                }
            };
            SettingsPanel.prototype.initItem = function (index, obj) {
                var item = obj;
                item.setData(this.setConfList[index], this.isInit);
            };
            SettingsPanel.prototype.onShowLanguagePanel = function () {
                if (!this.languagePanel || this.languagePanel === null) {
                    this.languagePanel = fgui.SystemSettings.SelectLanguage.createInstance();
                    this.addChild(this.languagePanel);
                    setScreenSize(this.languagePanel);
                }
                this.languagePanel.setData();
            };
            SettingsPanel.prototype.onShowGifPanel = function () {
                if (!this.giftPanel || this.giftPanel === null) {
                    this.giftPanel = fgui.SystemSettings.GiftPackageExchange.createInstance();
                    this.addChild(this.giftPanel);
                    setScreenSize(this.giftPanel);
                }
                this.giftPanel.onShow();
            };
            SettingsPanel.prototype.onshowSwitchPanel = function () {
                this.switchPanel = fgui.System.SystemConfirmMessage.createInstance();
                this.addChild(this.switchPanel);
                setScreenSize(this.switchPanel);
            };
            return SettingsPanel;
        }(SystemSettings.SettingsPanelStruct));
        SystemSettings.SettingsPanel = SettingsPanel;
    })(SystemSettings = fgui.SystemSettings || (fgui.SystemSettings = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=SettingsPanel.js.map