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
        var MarketPublicityPeopleAnimStruct = /** @class */ (function (_super) {
            __extends(MarketPublicityPeopleAnimStruct, _super);
            function MarketPublicityPeopleAnimStruct() {
                return _super.call(this) || this;
            }
            MarketPublicityPeopleAnimStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Market", "MarketPublicityPeopleAnim"));
            };
            MarketPublicityPeopleAnimStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_t0 = this.getTransition("t0");
            };
            MarketPublicityPeopleAnimStruct.URL = "ui://p7g5z54anu0ufs";
            MarketPublicityPeopleAnimStruct.DependPackages = ["Market", "Common"];
            return MarketPublicityPeopleAnimStruct;
        }(fairygui.GComponent));
        Market.MarketPublicityPeopleAnimStruct = MarketPublicityPeopleAnimStruct;
    })(Market = fgui.Market || (fgui.Market = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=MarketPublicityPeopleAnimStruct.js.map