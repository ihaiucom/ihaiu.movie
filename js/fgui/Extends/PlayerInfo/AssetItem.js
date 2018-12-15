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
    var PlayerInfo;
    (function (PlayerInfo) {
        var AssetItem = /** @class */ (function (_super) {
            __extends(AssetItem, _super);
            function AssetItem() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            AssetItem.prototype.setAsset = function (assetId) {
                var userItem = Game.moduleModel.item.getItem(assetId);
                this.m_assetIcon.url = userItem.itemIconUrl;
                var assetNum = Game.moduleModel.item.getItemNum(assetId);
                this.m_title.text = formatNumberUnit(assetNum);
            };
            return AssetItem;
        }(PlayerInfo.AssetItemStruct));
        PlayerInfo.AssetItem = AssetItem;
    })(PlayerInfo = fgui.PlayerInfo || (fgui.PlayerInfo = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=AssetItem.js.map