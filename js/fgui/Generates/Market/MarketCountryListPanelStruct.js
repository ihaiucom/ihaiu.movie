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
    var Market;
    (function (Market) {
        var MarketCountryListPanelStruct = /** @class */ (function (_super) {
            __extends(MarketCountryListPanelStruct, _super);
            function MarketCountryListPanelStruct() {
                return _super.call(this) || this;
            }
            MarketCountryListPanelStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Market", "MarketCountryListPanel"));
            };
            MarketCountryListPanelStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_listCountry = (this.getChild("listCountry"));
                this.m_title = (this.getChild("title"));
                this.m_btnShow = (this.getChild("btnShow"));
                this.m_btnClose = (this.getChild("btnClose"));
            };
            MarketCountryListPanelStruct.URL = "ui://p7g5z54adm319s";
            MarketCountryListPanelStruct.DependPackages = ["Market", "Common"];
            return MarketCountryListPanelStruct;
        }(fairygui.GComponent));
        Market.MarketCountryListPanelStruct = MarketCountryListPanelStruct;
    })(Market = fgui.Market || (fgui.Market = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=MarketCountryListPanelStruct.js.map