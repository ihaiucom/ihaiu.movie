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
        var MarketCityInfoPanelStruct = /** @class */ (function (_super) {
            __extends(MarketCityInfoPanelStruct, _super);
            function MarketCityInfoPanelStruct() {
                return _super.call(this) || this;
            }
            MarketCityInfoPanelStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("PfSkin", "MarketCityInfoPanel"));
            };
            MarketCityInfoPanelStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_isHome = this.getController("isHome");
                this.m_listActor = (this.getChild("listActor"));
                this.m_cityName = (this.getChild("cityName"));
                this.m_listAssetSpeed = (this.getChild("listAssetSpeed"));
                this.m_listReward = (this.getChild("listReward"));
                this.m_listAsset = (this.getChild("listAsset"));
                this.m_posJinbi = (this.getChild("posJinbi"));
                this.m_tweenIcon = (this.getChild("tweenIcon"));
                this.m_btnGet = (this.getChild("btnGet"));
                this.m_labAniGold = (this.getChild("labAniGold"));
                this.m_labAniFans = (this.getChild("labAniFans"));
                this.m_trAddAsset = this.getTransition("trAddAsset");
            };
            MarketCityInfoPanelStruct.URL = "ui://s33x8418mywn1kq";
            MarketCityInfoPanelStruct.DependPackages = ["PfSkin", "Common"];
            return MarketCityInfoPanelStruct;
        }(fairygui.GComponent));
        PfSkin.MarketCityInfoPanelStruct = MarketCityInfoPanelStruct;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=MarketCityInfoPanelStruct.js.map