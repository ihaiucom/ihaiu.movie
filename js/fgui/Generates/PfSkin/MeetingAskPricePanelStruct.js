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
    var PfSkin;
    (function (PfSkin) {
        var MeetingAskPricePanelStruct = /** @class */ (function (_super) {
            __extends(MeetingAskPricePanelStruct, _super);
            function MeetingAskPricePanelStruct() {
                return _super.call(this) || this;
            }
            MeetingAskPricePanelStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("PfSkin", "MeetingAskPricePanel"));
            };
            MeetingAskPricePanelStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_tip = (this.getChild("tip"));
                this.m_needPay = (this.getChild("needPay"));
                this.m_paylist = (this.getChild("paylist"));
                this.m_pay1Btn = (this.getChild("pay1Btn"));
                this.m_pay2Btn = (this.getChild("pay2Btn"));
                this.m_okBtn = (this.getChild("okBtn"));
                this.m_head = (this.getChild("head"));
                this.m_dialog = (this.getChild("dialog"));
                this.m_refuse = (this.getChild("refuse"));
            };
            MeetingAskPricePanelStruct.URL = "ui://s33x8418jzhf1vm";
            MeetingAskPricePanelStruct.DependPackages = ["PfSkin", "Common"];
            return MeetingAskPricePanelStruct;
        }(fairygui.GComponent));
        PfSkin.MeetingAskPricePanelStruct = MeetingAskPricePanelStruct;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=MeetingAskPricePanelStruct.js.map