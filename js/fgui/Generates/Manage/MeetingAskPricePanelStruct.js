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
    var Manage;
    (function (Manage) {
        var MeetingAskPricePanelStruct = /** @class */ (function (_super) {
            __extends(MeetingAskPricePanelStruct, _super);
            function MeetingAskPricePanelStruct() {
                return _super.call(this) || this;
            }
            MeetingAskPricePanelStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Manage", "MeetingAskPricePanel"));
            };
            MeetingAskPricePanelStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_tip = (this.getChild("tip"));
                this.m_title = (this.getChild("title"));
                this.m_pay1Btn = (this.getChild("pay1Btn"));
                this.m_pay2Btn = (this.getChild("pay2Btn"));
                this.m_refuse = (this.getChild("refuse"));
                this.m_dialog = (this.getChild("dialog"));
                this.m_okBtn = (this.getChild("okBtn"));
                this.m_head = (this.getChild("head"));
            };
            MeetingAskPricePanelStruct.URL = "ui://y3jchkngtpm81l";
            MeetingAskPricePanelStruct.DependPackages = ["Manage", "Common"];
            return MeetingAskPricePanelStruct;
        }(fairygui.GComponent));
        Manage.MeetingAskPricePanelStruct = MeetingAskPricePanelStruct;
    })(Manage = fgui.Manage || (fgui.Manage = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=MeetingAskPricePanelStruct.js.map