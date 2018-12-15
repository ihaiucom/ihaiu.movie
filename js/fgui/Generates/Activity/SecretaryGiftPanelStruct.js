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
    var Activity;
    (function (Activity) {
        var SecretaryGiftPanelStruct = /** @class */ (function (_super) {
            __extends(SecretaryGiftPanelStruct, _super);
            function SecretaryGiftPanelStruct() {
                return _super.call(this) || this;
            }
            SecretaryGiftPanelStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Activity", "SecretaryGiftPanel"));
            };
            SecretaryGiftPanelStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_title = (this.getChild("title"));
                this.m_des = (this.getChild("des"));
                this.m_list = (this.getChild("list"));
                this.m_closeBtn = (this.getChild("closeBtn"));
                this.m_moneyBtn = (this.getChild("moneyBtn"));
            };
            SecretaryGiftPanelStruct.URL = "ui://9qou8rs7rrsjb";
            SecretaryGiftPanelStruct.DependPackages = ["Activity", "Common"];
            return SecretaryGiftPanelStruct;
        }(fairygui.GComponent));
        Activity.SecretaryGiftPanelStruct = SecretaryGiftPanelStruct;
    })(Activity = fgui.Activity || (fgui.Activity = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=SecretaryGiftPanelStruct.js.map