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
        var ItemIcon100x100 = /** @class */ (function (_super) {
            __extends(ItemIcon100x100, _super);
            function ItemIcon100x100() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            /**
             * 更新界面
             * @param id 道具id
             * @param num 数量
             */
            ItemIcon100x100.prototype.updateViewByIdNum = function (id, num) {
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
            ItemIcon100x100.prototype.updateViewByDTNum = function (data) {
                var id = data.itemId;
                var num = data.itemNum;
                this.updateViewByIdNum(id, num);
            };
            /**
             * 更新道具
             * @param idNum 道具[id,num]
             */
            ItemIcon100x100.prototype.updateViewByArray = function (idNum) {
                var id = idNum[0];
                var num = idNum[1];
                this.updateViewByIdNum(id, num);
            };
            ItemIcon100x100.prototype.setItemNumData = function (data) {
                this.dtItemNum = data;
                this.m_icon.url = data.itemIconUrl;
                this.m_title.text = data.itemNumTxt;
            };
            ItemIcon100x100.prototype.setItemData = function (data) {
                this.itemData = data;
                this.m_icon.url = data.itemIconUrl;
                this.m_title.text = data.itemNumTxt;
            };
            return ItemIcon100x100;
        }(Common.ItemIcon100x100Struct));
        Common.ItemIcon100x100 = ItemIcon100x100;
    })(Common = fgui.Common || (fgui.Common = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=ItemIcon100x100.js.map