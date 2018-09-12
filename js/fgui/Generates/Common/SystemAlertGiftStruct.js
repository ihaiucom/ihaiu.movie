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
        var SystemAlertGiftStruct = /** @class */ (function (_super) {
            __extends(SystemAlertGiftStruct, _super);
            function SystemAlertGiftStruct() {
                return _super.call(this) || this;
            }
            SystemAlertGiftStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Common", "SystemAlertGift"));
            };
            SystemAlertGiftStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_list = (this.getChild("list"));
                this.m_title = (this.getChild("title"));
                this.m_des = (this.getChild("des"));
                this.m_closeBtn = (this.getChild("closeBtn"));
                this.m_moneyBtn = (this.getChild("moneyBtn"));
            };
            SystemAlertGiftStruct.URL = "ui://txcuvopdcwjyau";
            SystemAlertGiftStruct.DependPackages = ["Common"];
            return SystemAlertGiftStruct;
        }(fairygui.GComponent));
        Common.SystemAlertGiftStruct = SystemAlertGiftStruct;
    })(Common = fgui.Common || (fgui.Common = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=SystemAlertGiftStruct.js.map