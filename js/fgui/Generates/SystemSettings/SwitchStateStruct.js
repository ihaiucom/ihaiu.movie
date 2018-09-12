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
        var SwitchStateStruct = /** @class */ (function (_super) {
            __extends(SwitchStateStruct, _super);
            function SwitchStateStruct() {
                return _super.call(this) || this;
            }
            SwitchStateStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("SystemSettings", "SwitchState"));
            };
            SwitchStateStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_button = this.getController("button");
                this.m_state = (this.getChild("state"));
            };
            SwitchStateStruct.URL = "ui://6ecreso0kl6dx4y";
            SwitchStateStruct.DependPackages = ["SystemSettings"];
            return SwitchStateStruct;
        }(fairygui.GButton));
        SystemSettings.SwitchStateStruct = SwitchStateStruct;
    })(SystemSettings = fgui.SystemSettings || (fgui.SystemSettings = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=SwitchStateStruct.js.map