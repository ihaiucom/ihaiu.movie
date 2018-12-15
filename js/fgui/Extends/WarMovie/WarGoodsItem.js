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
    var WarMovie;
    (function (WarMovie) {
        var WarGoodsItem = /** @class */ (function (_super) {
            __extends(WarGoodsItem, _super);
            function WarGoodsItem() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            WarGoodsItem.prototype.setData = function (index) {
                var itemDesc = Game.moduleModel.warData.dropList[index];
                this.m_title.text = formatNumberUnit(itemDesc.amount);
                var config = Game.config.item.getConfig(itemDesc.itemId);
                this.m_icon.icon = Game.config.avatar.getConfig(config.icon).iconUrl;
                this.m_colorCon.setSelectedIndex(0);
                this.m_starList.numItems = config.itemStarNum;
            };
            return WarGoodsItem;
        }(WarMovie.WarGoodsItemStruct));
        WarMovie.WarGoodsItem = WarGoodsItem;
    })(WarMovie = fgui.WarMovie || (fgui.WarMovie = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=WarGoodsItem.js.map