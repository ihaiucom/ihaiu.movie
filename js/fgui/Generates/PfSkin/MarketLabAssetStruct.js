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
        var MarketLabAssetStruct = /** @class */ (function (_super) {
            __extends(MarketLabAssetStruct, _super);
            function MarketLabAssetStruct() {
                return _super.call(this) || this;
            }
            MarketLabAssetStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("PfSkin", "MarketLabAsset"));
            };
            MarketLabAssetStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_trColor = this.getController("trColor");
                this.m_icon = (this.getChild("icon"));
                this.m_title = (this.getChild("title"));
            };
            MarketLabAssetStruct.URL = "ui://s33x8418p9t7t1x4";
            MarketLabAssetStruct.DependPackages = ["PfSkin", "Common"];
            return MarketLabAssetStruct;
        }(fairygui.GLabel));
        PfSkin.MarketLabAssetStruct = MarketLabAssetStruct;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=MarketLabAssetStruct.js.map