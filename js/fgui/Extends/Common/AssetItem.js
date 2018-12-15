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
        var AssetItem = /** @class */ (function (_super) {
            __extends(AssetItem, _super);
            function AssetItem() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            AssetItem.prototype.setItemId = function (itemId) {
                var userItem = Game.moduleModel.item.getItem(itemId);
                var itemNum = Game.moduleModel.item.getItemNum(itemId);
                this.setInfo(userItem.itemIconUrl, itemNum);
            };
            AssetItem.prototype.setInfo = function (iconUrl, value) {
                this.m_assetLoader.url = iconUrl;
                this.m_title.text = formatNumberUnit(value);
            };
            return AssetItem;
        }(Common.AssetItemStruct));
        Common.AssetItem = AssetItem;
    })(Common = fgui.Common || (fgui.Common = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=AssetItem.js.map