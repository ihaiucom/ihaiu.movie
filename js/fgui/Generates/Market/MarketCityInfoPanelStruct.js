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
        var MarketCityInfoPanelStruct = /** @class */ (function (_super) {
            __extends(MarketCityInfoPanelStruct, _super);
            function MarketCityInfoPanelStruct() {
                return _super.call(this) || this;
            }
            MarketCityInfoPanelStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Market", "MarketCityInfoPanel"));
            };
            MarketCityInfoPanelStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_isHome = this.getController("isHome");
                this.m_cityName = (this.getChild("cityName"));
                this.m_listAssetSpeed = (this.getChild("listAssetSpeed"));
                this.m_listActor = (this.getChild("listActor"));
                this.m_listReward = (this.getChild("listReward"));
                this.m_listAsset = (this.getChild("listAsset"));
                this.m_tweenIcon = (this.getChild("tweenIcon"));
                this.m_marquee = (this.getChild("marquee"));
                this.m_btnGet = (this.getChild("btnGet"));
                this.m_red = (this.getChild("red"));
                this.m_trAddAsset = this.getTransition("trAddAsset");
            };
            MarketCityInfoPanelStruct.URL = "ui://p7g5z54adm319m";
            MarketCityInfoPanelStruct.DependPackages = ["Market", "Fx", "Common", "MainUI"];
            return MarketCityInfoPanelStruct;
        }(fairygui.GComponent));
        Market.MarketCityInfoPanelStruct = MarketCityInfoPanelStruct;
    })(Market = fgui.Market || (fgui.Market = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=MarketCityInfoPanelStruct.js.map