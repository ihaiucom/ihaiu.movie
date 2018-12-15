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
        var MarketPublicityPanelStruct = /** @class */ (function (_super) {
            __extends(MarketPublicityPanelStruct, _super);
            function MarketPublicityPanelStruct() {
                return _super.call(this) || this;
            }
            MarketPublicityPanelStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Market", "MarketPublicityPanel"));
            };
            MarketPublicityPanelStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_active = this.getController("active");
                this.m_name = (this.getChild("name"));
                this.m_actorDemand = (this.getChild("actorDemand"));
                this.m_auto = (this.getChild("auto"));
                this.m_tip = (this.getChild("tip"));
                this.m_listReward = (this.getChild("listReward"));
                this.m_topAsset = (this.getChild("topAsset"));
                this.m_btnAddActor = (this.getChild("btnAddActor"));
                this.m_demand = (this.getChild("demand"));
                this.m_progress = (this.getChild("progress"));
                this.m_btnPublicity = (this.getChild("btnPublicity"));
                this.m_tabSelfmotion = (this.getChild("tabSelfmotion"));
                this.m_tweenIcon = (this.getChild("tweenIcon"));
                this.m_frame = (this.getChild("frame"));
                this.m_btnFinish = (this.getChild("btnFinish"));
                this.m_t0 = this.getTransition("t0");
                this.m_soundGoldReward = this.getTransition("soundGoldReward");
            };
            MarketPublicityPanelStruct.URL = "ui://p7g5z54adm319z";
            MarketPublicityPanelStruct.DependPackages = ["Market", "Common", "PfSkin", "Fx"];
            return MarketPublicityPanelStruct;
        }(fairygui.GComponent));
        Market.MarketPublicityPanelStruct = MarketPublicityPanelStruct;
    })(Market = fgui.Market || (fgui.Market = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=MarketPublicityPanelStruct.js.map