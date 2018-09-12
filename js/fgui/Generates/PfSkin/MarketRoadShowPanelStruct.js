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
        var MarketRoadShowPanelStruct = /** @class */ (function (_super) {
            __extends(MarketRoadShowPanelStruct, _super);
            function MarketRoadShowPanelStruct() {
                return _super.call(this) || this;
            }
            MarketRoadShowPanelStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("PfSkin", "MarketRoadShowPanel"));
            };
            MarketRoadShowPanelStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_state = this.getController("state");
                this.m_listActor = (this.getChild("listActor"));
                this.m_aniAixin = (this.getChild("aniAixin"));
                this.m_loadCurrentActor = (this.getChild("loadCurrentActor"));
                this.m_roadshowContainer = (this.getChild("roadshowContainer"));
                this.m_progress = (this.getChild("progress"));
                this.m_btnSkip = (this.getChild("btnSkip"));
                this.m_labTalk = (this.getChild("labTalk"));
                this.m_tweenItem = (this.getChild("tweenItem"));
                this.m_btnFinish = (this.getChild("btnFinish"));
                this.m_aniIcon = this.getTransition("aniIcon");
            };
            MarketRoadShowPanelStruct.URL = "ui://s33x8418mywn1kw";
            MarketRoadShowPanelStruct.DependPackages = ["PfSkin", "Market"];
            return MarketRoadShowPanelStruct;
        }(fairygui.GComponent));
        PfSkin.MarketRoadShowPanelStruct = MarketRoadShowPanelStruct;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=MarketRoadShowPanelStruct.js.map