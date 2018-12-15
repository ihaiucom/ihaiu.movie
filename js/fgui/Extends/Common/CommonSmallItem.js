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
        var CommonSmallItem = /** @class */ (function (_super) {
            __extends(CommonSmallItem, _super);
            function CommonSmallItem() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            CommonSmallItem.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.onClick(this, this.OnClick);
            };
            CommonSmallItem.prototype.OnClick = function () {
                if (this.itemId) {
                    Game.system.showItemInfo(this, this.itemId);
                }
            };
            Object.defineProperty(CommonSmallItem.prototype, "PopupInfo", {
                set: function (id) {
                    this.itemId = id;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(CommonSmallItem.prototype, "star", {
                set: function (star) {
                    this.m_starList.numItems = star;
                },
                enumerable: true,
                configurable: true
            });
            /**
             * 更新界面 cur/num
             * @param info
             */
            CommonSmallItem.prototype.setInfo = function (info) {
                this.m_icon.url = ItemHelper.getItemIcon(info.itemId);
                this.m_title.text = "[color=#e3b121]" + ItemHelper.getItemNum(info.itemId) + "[/color]/" + info.itemNum;
                this.star = Game.config.item.getStarNum(info.itemId);
            };
            /**
             * 更新界面 cur/num
             * @param itemId
             * @param itemNum
             */
            CommonSmallItem.prototype.setItemInfo = function (itemId, itemNum) {
                this.m_icon.url = ItemHelper.getItemIcon(itemId);
                this.m_title.text = "[color=#e3b121]" + ItemHelper.getItemNum(itemId) + "[/color]/" + itemNum;
                this.star = Game.config.item.getStarNum(itemId);
            };
            /**
             * 更新界面
             * @param id 道具id
             * @param num 数量
             */
            CommonSmallItem.prototype.updateViewByIdNum = function (id, num) {
                var config = Game.config.item.getConfig(id);
                if (config) {
                    this.m_icon.icon = config.iconUrl;
                }
                this.m_title.text = formatNumberUnit(num);
                this.star = Game.config.item.getStarNum(id);
            };
            /**
             * 更新道具
             * @param data DTItemNum
             */
            CommonSmallItem.prototype.updateViewByDTNum = function (data) {
                var id = data.itemId;
                var num = data.itemNum;
                this.updateViewByIdNum(id, num);
            };
            /**
             * 更新道具
             * @param idNum 道具[id,num]
             */
            CommonSmallItem.prototype.updateViewByArray = function (idNum) {
                var id = idNum[0];
                var num = idNum[1];
                this.updateViewByIdNum(id, num);
            };
            return CommonSmallItem;
        }(Common.CommonSmallItemStruct));
        Common.CommonSmallItem = CommonSmallItem;
    })(Common = fgui.Common || (fgui.Common = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=CommonSmallItem.js.map