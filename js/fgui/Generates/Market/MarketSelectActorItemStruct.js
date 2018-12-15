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
        var MarketSelectActorItemStruct = /** @class */ (function (_super) {
            __extends(MarketSelectActorItemStruct, _super);
            function MarketSelectActorItemStruct() {
                return _super.call(this) || this;
            }
            MarketSelectActorItemStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Market", "MarketSelectActorItem"));
            };
            MarketSelectActorItemStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_state = this.getController("state");
                this.m_button = this.getController("button");
                this.m_selectType = this.getController("selectType");
                this.m_icon = (this.getChild("icon"));
                this.m_title = (this.getChild("title"));
                this.m_labDemand1 = (this.getChild("labDemand1"));
                this.m_labDemand2 = (this.getChild("labDemand2"));
                this.m_btnSelect = (this.getChild("btnSelect"));
                this.m_btnPromotion = (this.getChild("btnPromotion"));
                this.m_talkBox = (this.getChild("talkBox"));
                this.m_t0 = this.getTransition("t0");
                this.m_t1 = this.getTransition("t1");
            };
            MarketSelectActorItemStruct.URL = "ui://p7g5z54adm31ed";
            MarketSelectActorItemStruct.DependPackages = ["Market", "Common", "WarMovie"];
            return MarketSelectActorItemStruct;
        }(fairygui.GButton));
        Market.MarketSelectActorItemStruct = MarketSelectActorItemStruct;
    })(Market = fgui.Market || (fgui.Market = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=MarketSelectActorItemStruct.js.map