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
        var MarketRoadShowPanelStruct = /** @class */ (function (_super) {
            __extends(MarketRoadShowPanelStruct, _super);
            function MarketRoadShowPanelStruct() {
                return _super.call(this) || this;
            }
            MarketRoadShowPanelStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Market", "MarketRoadShowPanel"));
            };
            MarketRoadShowPanelStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_state = this.getController("state");
                this.m_listActor = (this.getChild("listActor"));
                this.m_aniAixin_red = (this.getChild("aniAixin_red"));
                this.m_roadshowContainer = (this.getChild("roadshowContainer"));
                this.m_progress = (this.getChild("progress"));
                this.m_btnSkip = (this.getChild("btnSkip"));
                this.m_fxAixin = (this.getChild("fxAixin"));
                this.m_btnFinish = (this.getChild("btnFinish"));
                this.m_soundSuccess = this.getTransition("soundSuccess");
                this.m_soundFail = this.getTransition("soundFail");
            };
            MarketRoadShowPanelStruct.URL = "ui://p7g5z54adm31a6";
            MarketRoadShowPanelStruct.DependPackages = ["Market", "PfSkin", "Common", "Fx"];
            return MarketRoadShowPanelStruct;
        }(fairygui.GComponent));
        Market.MarketRoadShowPanelStruct = MarketRoadShowPanelStruct;
    })(Market = fgui.Market || (fgui.Market = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=MarketRoadShowPanelStruct.js.map