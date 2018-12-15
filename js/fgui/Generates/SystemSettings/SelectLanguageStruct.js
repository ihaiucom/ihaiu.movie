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
        var SelectLanguageStruct = /** @class */ (function (_super) {
            __extends(SelectLanguageStruct, _super);
            function SelectLanguageStruct() {
                return _super.call(this) || this;
            }
            SelectLanguageStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("SystemSettings", "SelectLanguage"));
            };
            SelectLanguageStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_bg = (this.getChild("bg"));
                this.m_title = (this.getChild("title"));
                this.m_languageList = (this.getChild("languageList"));
                this.m_okBtn = (this.getChild("okBtn"));
                this.m_closeBtn = (this.getChild("closeBtn"));
            };
            SelectLanguageStruct.URL = "ui://6ecreso0izhnx42";
            SelectLanguageStruct.DependPackages = ["SystemSettings", "Common"];
            return SelectLanguageStruct;
        }(fairygui.GComponent));
        SystemSettings.SelectLanguageStruct = SelectLanguageStruct;
    })(SystemSettings = fgui.SystemSettings || (fgui.SystemSettings = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=SelectLanguageStruct.js.map