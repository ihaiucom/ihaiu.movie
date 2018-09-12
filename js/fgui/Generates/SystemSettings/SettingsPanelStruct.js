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
        var SettingsPanelStruct = /** @class */ (function (_super) {
            __extends(SettingsPanelStruct, _super);
            function SettingsPanelStruct() {
                return _super.call(this) || this;
            }
            SettingsPanelStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("SystemSettings", "SettingsPanel"));
            };
            SettingsPanelStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_title = (this.getChild("title"));
                this.m_idTip = (this.getChild("idTip"));
                this.m_version = (this.getChild("version"));
                this.m_tip = (this.getChild("tip"));
                this.m_setList = (this.getChild("setList"));
                this.m_closeBtn = (this.getChild("closeBtn"));
                this.m_SwitchAccountBtn = (this.getChild("SwitchAccountBtn"));
                this.m_FeedBackBtn = (this.getChild("FeedBackBtn"));
            };
            SettingsPanelStruct.URL = "ui://6ecreso0izhnx3y";
            SettingsPanelStruct.DependPackages = ["SystemSettings", "Common"];
            return SettingsPanelStruct;
        }(fairygui.GComponent));
        SystemSettings.SettingsPanelStruct = SettingsPanelStruct;
    })(SystemSettings = fgui.SystemSettings || (fgui.SystemSettings = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=SettingsPanelStruct.js.map