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
        var CommonAssetItem_little = /** @class */ (function (_super) {
            __extends(CommonAssetItem_little, _super);
            function CommonAssetItem_little() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            CommonAssetItem_little.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.onClick(this, this.OnClick);
            };
            CommonAssetItem_little.prototype.OnClick = function () {
                if (this.itemId) {
                    Game.system.showItemInfo(this, this.itemId);
                }
            };
            Object.defineProperty(CommonAssetItem_little.prototype, "PopupInfo", {
                set: function (id) {
                    this.itemId = id;
                },
                enumerable: true,
                configurable: true
            });
            return CommonAssetItem_little;
        }(Common.CommonAssetItem_littleStruct));
        Common.CommonAssetItem_little = CommonAssetItem_little;
    })(Common = fgui.Common || (fgui.Common = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=CommonAssetItem_little.js.map