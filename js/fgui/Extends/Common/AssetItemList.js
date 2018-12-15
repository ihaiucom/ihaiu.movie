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
        var AssetItemList = /** @class */ (function (_super) {
            __extends(AssetItemList, _super);
            function AssetItemList() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            /**
             * 要显示的资产列表
             * @param assetIds
             */
            AssetItemList.prototype.setAssets = function (assetIds) {
                this.m_assetList.removeChildrenToPool();
                this.assetIds = assetIds;
                for (var _i = 0, assetIds_1 = assetIds; _i < assetIds_1.length; _i++) {
                    var assetId = assetIds_1[_i];
                    var assetItem = this.m_assetList.addItemFromPool();
                    assetItem.setItemId(assetId);
                    this.m_assetList.addChild(assetItem);
                }
            };
            //更新资产信息
            AssetItemList.prototype.updateAssets = function () {
                this.setAssets(this.assetIds);
            };
            //销毁
            AssetItemList.prototype.dispose = function () {
                this.assetIds.length = 0;
                this.m_assetList.removeChildrenToPool();
            };
            return AssetItemList;
        }(Common.AssetItemListStruct));
        Common.AssetItemList = AssetItemList;
    })(Common = fgui.Common || (fgui.Common = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=AssetItemList.js.map