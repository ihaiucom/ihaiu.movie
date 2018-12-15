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
        var NoneCStruct = /** @class */ (function (_super) {
            __extends(NoneCStruct, _super);
            function NoneCStruct() {
                return _super.call(this) || this;
            }
            NoneCStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("SystemSettings", "NoneC"));
            };
            NoneCStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_state = (this.getChild("state"));
            };
            NoneCStruct.URL = "ui://6ecreso0kl6dx53";
            NoneCStruct.DependPackages = ["SystemSettings"];
            return NoneCStruct;
        }(fairygui.GComponent));
        SystemSettings.NoneCStruct = NoneCStruct;
    })(SystemSettings = fgui.SystemSettings || (fgui.SystemSettings = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=NoneCStruct.js.map