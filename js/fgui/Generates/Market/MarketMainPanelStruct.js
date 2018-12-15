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
        var MarketMainPanelStruct = /** @class */ (function (_super) {
            __extends(MarketMainPanelStruct, _super);
            function MarketMainPanelStruct() {
                return _super.call(this) || this;
            }
            MarketMainPanelStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Market", "MarketMainPanel"));
            };
            MarketMainPanelStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_list = (this.getChild("list"));
                this.m_txtCountry = (this.getChild("txtCountry"));
                this.m_occupyPanel = (this.getChild("occupyPanel"));
                this.m_cityInfoPanel = (this.getChild("cityInfoPanel"));
                this.m_btnCountry = (this.getChild("btnCountry"));
                this.m_topAsset = (this.getChild("topAsset"));
                this.m_btnLeft = (this.getChild("btnLeft"));
                this.m_btnRight = (this.getChild("btnRight"));
            };
            MarketMainPanelStruct.URL = "ui://p7g5z54adm319t";
            MarketMainPanelStruct.DependPackages = ["Market", "Common", "Fx", "MainUI"];
            return MarketMainPanelStruct;
        }(fairygui.GComponent));
        Market.MarketMainPanelStruct = MarketMainPanelStruct;
    })(Market = fgui.Market || (fgui.Market = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=MarketMainPanelStruct.js.map