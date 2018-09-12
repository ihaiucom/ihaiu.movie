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
        var SystemAlertAwardsStruct = /** @class */ (function (_super) {
            __extends(SystemAlertAwardsStruct, _super);
            function SystemAlertAwardsStruct() {
                return _super.call(this) || this;
            }
            SystemAlertAwardsStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Common", "SystemAlertAwards"));
            };
            SystemAlertAwardsStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_assetList = (this.getChild("assetList"));
                this.m_bgmodel = (this.getChild("bgmodel"));
                this.m_commonPanel = (this.getChild("commonPanel"));
                this.m_confirmBtn = (this.getChild("confirmBtn"));
            };
            SystemAlertAwardsStruct.URL = "ui://txcuvopdsc1s2z";
            SystemAlertAwardsStruct.DependPackages = ["Common", "System"];
            return SystemAlertAwardsStruct;
        }(fairygui.GComponent));
        Common.SystemAlertAwardsStruct = SystemAlertAwardsStruct;
    })(Common = fgui.Common || (fgui.Common = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=SystemAlertAwardsStruct.js.map