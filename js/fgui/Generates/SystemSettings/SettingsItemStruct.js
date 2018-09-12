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
        var SettingsItemStruct = /** @class */ (function (_super) {
            __extends(SettingsItemStruct, _super);
            function SettingsItemStruct() {
                return _super.call(this) || this;
            }
            SettingsItemStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("SystemSettings", "SettingsItem"));
            };
            SettingsItemStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_button = this.getController("button");
                this.m_icon = (this.getChild("icon"));
                this.m_title = (this.getChild("title"));
                this.m_onTip1 = (this.getChild("onTip1"));
                this.m_offTip1 = (this.getChild("offTip1"));
                this.m_noneTip = (this.getChild("noneTip"));
                this.m_onTip = (this.getChild("onTip"));
                this.m_offTip = (this.getChild("offTip"));
            };
            SettingsItemStruct.URL = "ui://6ecreso0izhnx40";
            SettingsItemStruct.DependPackages = ["SystemSettings"];
            return SettingsItemStruct;
        }(fairygui.GButton));
        SystemSettings.SettingsItemStruct = SettingsItemStruct;
    })(SystemSettings = fgui.SystemSettings || (fgui.SystemSettings = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=SettingsItemStruct.js.map