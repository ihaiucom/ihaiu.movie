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
        var MarketOccupyPanelStruct = /** @class */ (function (_super) {
            __extends(MarketOccupyPanelStruct, _super);
            function MarketOccupyPanelStruct() {
                return _super.call(this) || this;
            }
            MarketOccupyPanelStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("PfSkin", "MarketOccupyPanel"));
            };
            MarketOccupyPanelStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_state = this.getController("state");
                this.m_mapCityPoint = (this.getChild("mapCityPoint"));
                this.m_listReward = (this.getChild("listReward"));
                this.m_country = (this.getChild("country"));
                this.m_cityName = (this.getChild("cityName"));
                this.m_progress = (this.getChild("progress"));
                this.m_btnRoadShow = (this.getChild("btnRoadShow"));
                this.m_btnZhanling = (this.getChild("btnZhanling"));
                this.m_labAniCost = (this.getChild("labAniCost"));
                this.m_t1 = this.getTransition("t1");
                this.m_tCostMove = this.getTransition("tCostMove");
            };
            MarketOccupyPanelStruct.URL = "ui://s33x8418mywn1ks";
            MarketOccupyPanelStruct.DependPackages = ["PfSkin"];
            return MarketOccupyPanelStruct;
        }(fairygui.GComponent));
        PfSkin.MarketOccupyPanelStruct = MarketOccupyPanelStruct;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=MarketOccupyPanelStruct.js.map