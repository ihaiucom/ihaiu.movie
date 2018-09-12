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
        var ItemCellView = /** @class */ (function (_super) {
            __extends(ItemCellView, _super);
            function ItemCellView() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            /**
             * 更新界面
             * @param id 道具id
             * @param num 数量
             */
            ItemCellView.prototype.updateViewByIdNum = function (id, num) {
                var config = Game.config.item.getConfig(id);
                if (config) {
                    this.m_icon.icon = config.iconUrl;
                }
                this.m_title.text = formatNumberUnit(num);
            };
            /**
             * 更新道具
             * @param data DTItemNum
             */
            ItemCellView.prototype.updateViewByDTNum = function (data) {
                var id = data.itemId;
                var num = data.itemNum;
                this.updateViewByIdNum(id, num);
            };
            /**
             * 更新道具
             * @param idNum 道具[id,num]
             */
            ItemCellView.prototype.updateViewByArray = function (idNum) {
                var id = idNum[0];
                var num = idNum[1];
                this.updateViewByIdNum(id, num);
            };
            return ItemCellView;
        }(Common.ItemCellViewStruct));
        Common.ItemCellView = ItemCellView;
    })(Common = fgui.Common || (fgui.Common = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=ItemCellView.js.map