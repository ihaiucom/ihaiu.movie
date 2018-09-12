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
        var SplashAssetItem = /** @class */ (function (_super) {
            __extends(SplashAssetItem, _super);
            function SplashAssetItem() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            Object.defineProperty(SplashAssetItem.prototype, "itemId", {
                set: function (id) {
                    this.m_iconLoad.url = ItemHelper.getItemIcon(id);
                    this.scaleXY = 0.8;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(SplashAssetItem.prototype, "scaleXY", {
                set: function (val) {
                    this.setScale(val, val);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(SplashAssetItem.prototype, "avatarId", {
                set: function (id) {
                    this.m_iconLoad.url = Game.config.avatar.GetIconUrl(id);
                },
                enumerable: true,
                configurable: true
            });
            return SplashAssetItem;
        }(Common.SplashAssetItemStruct));
        Common.SplashAssetItem = SplashAssetItem;
    })(Common = fgui.Common || (fgui.Common = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=SplashAssetItem.js.map