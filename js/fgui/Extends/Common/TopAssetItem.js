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
    var Common;
    (function (Common) {
        var TopAssetItem = /** @class */ (function (_super) {
            __extends(TopAssetItem, _super);
            function TopAssetItem() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            TopAssetItem.prototype.setItemId = function (itemId) {
                var userItem = Game.moduleModel.item.getItem(itemId);
                var itemNum = Game.moduleModel.item.getItemNum(itemId);
                this.setInfo(userItem.itemIconUrl, itemNum);
            };
            TopAssetItem.prototype.setInfo = function (iconUrl, value) {
                this.m_assetIcon.url = iconUrl;
                this.m_title.text = formatNumberUnit(value);
            };
            return TopAssetItem;
        }(Common.TopAssetItemStruct));
        Common.TopAssetItem = TopAssetItem;
    })(Common = fgui.Common || (fgui.Common = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=TopAssetItem.js.map