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
        var ButtonItemStruct = /** @class */ (function (_super) {
            __extends(ButtonItemStruct, _super);
            function ButtonItemStruct() {
                return _super.call(this) || this;
            }
            ButtonItemStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("SystemSettings", "ButtonItem"));
            };
            ButtonItemStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_button = this.getController("button");
                this.m_title = (this.getChild("title"));
            };
            ButtonItemStruct.URL = "ui://6ecreso0kl6dx54";
            ButtonItemStruct.DependPackages = ["SystemSettings"];
            return ButtonItemStruct;
        }(fairygui.GButton));
        SystemSettings.ButtonItemStruct = ButtonItemStruct;
    })(SystemSettings = fgui.SystemSettings || (fgui.SystemSettings = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=ButtonItemStruct.js.map