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
        var MarketCountryListPanelStruct = /** @class */ (function (_super) {
            __extends(MarketCountryListPanelStruct, _super);
            function MarketCountryListPanelStruct() {
                return _super.call(this) || this;
            }
            MarketCountryListPanelStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("PfSkin", "MarketCountryListPanel"));
            };
            MarketCountryListPanelStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_listCountry = (this.getChild("listCountry"));
                this.m_btnShow = (this.getChild("btnShow"));
            };
            MarketCountryListPanelStruct.URL = "ui://s33x8418mywn1kv";
            MarketCountryListPanelStruct.DependPackages = ["PfSkin", "Common"];
            return MarketCountryListPanelStruct;
        }(fairygui.GComponent));
        PfSkin.MarketCountryListPanelStruct = MarketCountryListPanelStruct;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=MarketCountryListPanelStruct.js.map