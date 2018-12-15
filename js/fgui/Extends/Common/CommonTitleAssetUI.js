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
        var CommonTitleAssetUI = /** @class */ (function (_super) {
            __extends(CommonTitleAssetUI, _super);
            function CommonTitleAssetUI() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            /**
             * 要显示的资产列表
             * @param assetIds
             */
            CommonTitleAssetUI.prototype.setAssets = function (assetIds) {
                this.m_assetList.removeChildrenToPool();
                this.assetIds = assetIds;
                for (var i = 0; i < assetIds.length; i++) {
                    var assetId = assetIds[i];
                    var assetItem = this.m_assetList.addItemFromPool();
                    assetItem.setItemId(assetId);
                    this.m_assetList.addChild(assetItem);
                }
            };
            //更新资产信息
            CommonTitleAssetUI.prototype.updateAssets = function () {
                this.setAssets(this.assetIds);
            };
            //获取全局坐标
            CommonTitleAssetUI.prototype.getAssetGloblePos = function (index) {
                var assetItem = this.m_assetList.getChildAt(index);
                var assetIcon = assetItem.m_assetIcon;
                var globalPos = assetItem.m_assetIcon.displayObject.localToGlobal(new Point(assetIcon.width / 2, assetIcon.height / 2));
                return globalPos;
            };
            return CommonTitleAssetUI;
        }(Common.CommonTitleAssetUIStruct));
        Common.CommonTitleAssetUI = CommonTitleAssetUI;
    })(Common = fgui.Common || (fgui.Common = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=CommonTitleAssetUI.js.map