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
        var OffCStruct = /** @class */ (function (_super) {
            __extends(OffCStruct, _super);
            function OffCStruct() {
                return _super.call(this) || this;
            }
            OffCStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("SystemSettings", "offC"));
            };
            OffCStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_state = (this.getChild("state"));
            };
            OffCStruct.URL = "ui://6ecreso0kl6dx52";
            OffCStruct.DependPackages = ["SystemSettings"];
            return OffCStruct;
        }(fairygui.GComponent));
        SystemSettings.OffCStruct = OffCStruct;
    })(SystemSettings = fgui.SystemSettings || (fgui.SystemSettings = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=OffCStruct.js.map