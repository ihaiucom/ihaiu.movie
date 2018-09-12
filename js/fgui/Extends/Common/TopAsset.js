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
        var TopAsset = /** @class */ (function (_super) {
            __extends(TopAsset, _super);
            function TopAsset() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            TopAsset.prototype.InitView = function (thisObj, closeHandler, assetList) {
                if (assetList === void 0) { assetList = []; }
                this.m_btn_topClose.onClick(thisObj, closeHandler);
                this.m_assetList.itemRenderer = new Handler(this, this.RenderAssetItem, null, false);
                this.assetList = assetList;
            };
            TopAsset.prototype.onWindowDestory = function () {
                this.m_assetList.itemRenderer = null;
                this.m_btn_topClose.onClick(null, null);
            };
            TopAsset.prototype.updateAsset = function () {
                this.m_assetList.numItems = this.assetList.length;
            };
            TopAsset.prototype.RenderAssetItem = function (index, obj) {
                var itemId = this.assetList[index];
                var item = Game.moduleModel.item.getItem(itemId);
                obj.m_assetIcon.url = item.itemIconUrl;
                obj.m_title.text = item.itemNumTxt;
                // obj.m_trColor.setSelectedIndex(item.itemNum > 10000 ? 1 : 0);
            };
            return TopAsset;
        }(Common.TopAssetStruct));
        Common.TopAsset = TopAsset;
    })(Common = fgui.Common || (fgui.Common = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=TopAsset.js.map