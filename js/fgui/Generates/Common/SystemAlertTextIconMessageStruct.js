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
    var Common;
    (function (Common) {
        var SystemAlertTextIconMessageStruct = /** @class */ (function (_super) {
            __extends(SystemAlertTextIconMessageStruct, _super);
            function SystemAlertTextIconMessageStruct() {
                return _super.call(this) || this;
            }
            SystemAlertTextIconMessageStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Common", "SystemAlertTextIconMessage"));
            };
            SystemAlertTextIconMessageStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_content = (this.getChild("content"));
                this.m_assetList = (this.getChild("assetList"));
                this.m_commonDialog = (this.getChild("commonDialog"));
                this.m_confirmBtn = (this.getChild("confirmBtn"));
            };
            SystemAlertTextIconMessageStruct.URL = "ui://txcuvopdib9zb4";
            SystemAlertTextIconMessageStruct.DependPackages = ["Common"];
            return SystemAlertTextIconMessageStruct;
        }(fairygui.GComponent));
        Common.SystemAlertTextIconMessageStruct = SystemAlertTextIconMessageStruct;
    })(Common = fgui.Common || (fgui.Common = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=SystemAlertTextIconMessageStruct.js.map