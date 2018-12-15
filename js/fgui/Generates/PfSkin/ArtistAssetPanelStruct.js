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
        var ArtistAssetPanelStruct = /** @class */ (function (_super) {
            __extends(ArtistAssetPanelStruct, _super);
            function ArtistAssetPanelStruct() {
                return _super.call(this) || this;
            }
            ArtistAssetPanelStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("PfSkin", "ArtistAssetPanel"));
            };
            ArtistAssetPanelStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_list = (this.getChild("list"));
                this.m_tipMsg = (this.getChild("tipMsg"));
                this.m_assetLoyaltyBar = (this.getChild("assetLoyaltyBar"));
                this.m_t0 = this.getTransition("t0");
            };
            ArtistAssetPanelStruct.URL = "ui://s33x8418jazc1l1";
            ArtistAssetPanelStruct.DependPackages = ["PfSkin", "Common"];
            return ArtistAssetPanelStruct;
        }(fairygui.GComponent));
        PfSkin.ArtistAssetPanelStruct = ArtistAssetPanelStruct;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=ArtistAssetPanelStruct.js.map