/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////
var fgui;
(function (fgui) {
    var SystemSettings;
    (function (SystemSettings) {
        var SystemSettingsBinder = /** @class */ (function () {
            function SystemSettingsBinder() {
            }
            SystemSettingsBinder.bindAll = function () {
                fairygui.UIObjectFactory.setPackageItemExtension(SystemSettings.SettingsPanel.URL, SystemSettings.SettingsPanel);
                fairygui.UIObjectFactory.setPackageItemExtension(SystemSettings.SettingsItem.URL, SystemSettings.SettingsItem);
                fairygui.UIObjectFactory.setPackageItemExtension(SystemSettings.GiftPackageExchange.URL, SystemSettings.GiftPackageExchange);
                fairygui.UIObjectFactory.setPackageItemExtension(SystemSettings.SelectLanguage.URL, SystemSettings.SelectLanguage);
                fairygui.UIObjectFactory.setPackageItemExtension(SystemSettings.LanguageItem.URL, SystemSettings.LanguageItem);
                fairygui.UIObjectFactory.setPackageItemExtension(SystemSettings.OnC.URL, SystemSettings.OnC);
                fairygui.UIObjectFactory.setPackageItemExtension(SystemSettings.OffC.URL, SystemSettings.OffC);
                fairygui.UIObjectFactory.setPackageItemExtension(SystemSettings.NoneC.URL, SystemSettings.NoneC);
                fairygui.UIObjectFactory.setPackageItemExtension(SystemSettings.ButtonItem.URL, SystemSettings.ButtonItem);
            };
            return SystemSettingsBinder;
        }());
        SystemSettings.SystemSettingsBinder = SystemSettingsBinder;
    })(SystemSettings = fgui.SystemSettings || (fgui.SystemSettings = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=SystemSettingsBinder.js.map