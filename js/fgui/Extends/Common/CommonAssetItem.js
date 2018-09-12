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
        var CommonAssetItem = /** @class */ (function (_super) {
            __extends(CommonAssetItem, _super);
            function CommonAssetItem() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            CommonAssetItem.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.onClick(this, this.OnClick);
            };
            CommonAssetItem.prototype.OnClick = function () {
                if (this.itemId != null) {
                    Game.system.showItemInfo(this, this.itemId);
                }
            };
            Object.defineProperty(CommonAssetItem.prototype, "PopupInfo", {
                set: function (id) {
                    this.itemId = id;
                },
                enumerable: true,
                configurable: true
            });
            CommonAssetItem.prototype.setInfo = function (info) {
                this.m_icon.url = ItemHelper.getItemIcon(info.itemId);
                this.m_num.text = "[color=#e3b121]" + ItemHelper.getItemNum(info.itemId) + "[/color]/" + info.itemNum;
                this.starNum = Game.config.item.getStarNum(info.itemId);
                this.PopupInfo = info.itemId;
            };
            CommonAssetItem.prototype.setItemInfo = function (itemId, itemNum) {
                this.m_icon.url = ItemHelper.getItemIcon(itemId);
                this.m_num.text = "[color=#e3b121]" + ItemHelper.getItemNum(itemId) + "[/color]/" + itemNum;
                this.PopupInfo = itemId;
                this.starNum = Game.config.item.getStarNum(itemId);
            };
            Object.defineProperty(CommonAssetItem.prototype, "starNum", {
                set: function (num) {
                    this.m_star.starNum = num;
                },
                enumerable: true,
                configurable: true
            });
            return CommonAssetItem;
        }(Common.CommonAssetItemStruct));
        Common.CommonAssetItem = CommonAssetItem;
    })(Common = fgui.Common || (fgui.Common = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=CommonAssetItem.js.map