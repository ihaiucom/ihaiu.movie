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
        var SecretaryPanelStruct = /** @class */ (function (_super) {
            __extends(SecretaryPanelStruct, _super);
            function SecretaryPanelStruct() {
                return _super.call(this) || this;
            }
            SecretaryPanelStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Activity", "SecretaryPanel"));
            };
            SecretaryPanelStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_bodyIcon = (this.getChild("bodyIcon"));
                this.m_talkBg = (this.getChild("talkBg"));
                this.m_bgShadow = (this.getChild("bgShadow"));
                this.m_talkMsg = (this.getChild("talkMsg"));
                this.m_msgTitle = (this.getChild("msgTitle"));
                this.m_tipmsg = (this.getChild("tipmsg"));
                this.m_ownedGroup = (this.getChild("ownedGroup"));
                this.m_dailyBtn = (this.getChild("dailyBtn"));
                this.m_moneyBtn = (this.getChild("moneyBtn"));
                this.m_welfareBtn = (this.getChild("welfareBtn"));
                this.m_msgPanel = (this.getChild("msgPanel"));
            };
            SecretaryPanelStruct.URL = "ui://9qou8rs7rrsjc";
            SecretaryPanelStruct.DependPackages = ["Activity", "Common"];
            return SecretaryPanelStruct;
        }(fairygui.GComponent));
        Activity.SecretaryPanelStruct = SecretaryPanelStruct;
    })(Activity = fgui.Activity || (fgui.Activity = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=SecretaryPanelStruct.js.map