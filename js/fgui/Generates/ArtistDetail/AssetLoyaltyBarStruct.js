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
    var ArtistDetail;
    (function (ArtistDetail) {
        var AssetLoyaltyBarStruct = /** @class */ (function (_super) {
            __extends(AssetLoyaltyBarStruct, _super);
            function AssetLoyaltyBarStruct() {
                return _super.call(this) || this;
            }
            AssetLoyaltyBarStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("ArtistDetail", "AssetLoyaltyBar"));
            };
            AssetLoyaltyBarStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_love = (this.getChild("love"));
                this.m_title = (this.getChild("title"));
                this.m_assetBar = (this.getChild("assetBar"));
            };
            AssetLoyaltyBarStruct.URL = "ui://gif3gjfsjs171nu";
            AssetLoyaltyBarStruct.DependPackages = ["ArtistDetail", "Common"];
            return AssetLoyaltyBarStruct;
        }(fairygui.GLabel));
        ArtistDetail.AssetLoyaltyBarStruct = AssetLoyaltyBarStruct;
    })(ArtistDetail = fgui.ArtistDetail || (fgui.ArtistDetail = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=AssetLoyaltyBarStruct.js.map