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
        var ApplyLicensePanelStruct = /** @class */ (function (_super) {
            __extends(ApplyLicensePanelStruct, _super);
            function ApplyLicensePanelStruct() {
                return _super.call(this) || this;
            }
            ApplyLicensePanelStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Activity", "ApplyLicensePanel"));
            };
            ApplyLicensePanelStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_bodyIcon = (this.getChild("bodyIcon"));
                this.m_talkBg = (this.getChild("talkBg"));
                this.m_talkMsg = (this.getChild("talkMsg"));
                this.m_msgTitle = (this.getChild("msgTitle"));
                this.m_moneyBtn = (this.getChild("moneyBtn"));
            };
            ApplyLicensePanelStruct.URL = "ui://9qou8rs7vuzmf";
            ApplyLicensePanelStruct.DependPackages = ["Activity", "Common", "PfSkin"];
            return ApplyLicensePanelStruct;
        }(fairygui.GComponent));
        Activity.ApplyLicensePanelStruct = ApplyLicensePanelStruct;
    })(Activity = fgui.Activity || (fgui.Activity = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=ApplyLicensePanelStruct.js.map