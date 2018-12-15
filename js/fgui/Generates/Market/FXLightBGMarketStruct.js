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
        var FXLightBGMarketStruct = /** @class */ (function (_super) {
            __extends(FXLightBGMarketStruct, _super);
            function FXLightBGMarketStruct() {
                return _super.call(this) || this;
            }
            FXLightBGMarketStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Market", "FXLightBGMarket"));
            };
            FXLightBGMarketStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_t0 = this.getTransition("t0");
            };
            FXLightBGMarketStruct.URL = "ui://p7g5z54ae70xfu";
            FXLightBGMarketStruct.DependPackages = ["Market", "PlayerInfo"];
            return FXLightBGMarketStruct;
        }(fairygui.GComponent));
        Market.FXLightBGMarketStruct = FXLightBGMarketStruct;
    })(Market = fgui.Market || (fgui.Market = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=FXLightBGMarketStruct.js.map