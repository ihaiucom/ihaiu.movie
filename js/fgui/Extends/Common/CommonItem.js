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
        var CommonItem = /** @class */ (function (_super) {
            __extends(CommonItem, _super);
            function CommonItem() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            CommonItem.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.onClick(this, this.OnClick);
            };
            CommonItem.prototype.OnClick = function () {
                if (this.itemId) {
                    Game.system.showItemInfo(this, this.itemId);
                }
            };
            Object.defineProperty(CommonItem.prototype, "PopupInfo", {
                set: function (id) {
                    this.itemId = id;
                },
                enumerable: true,
                configurable: true
            });
            /**
             * 更新界面 cur/num
             * @param info
             */
            CommonItem.prototype.setInfo = function (info) {
                this.m_icon.url = ItemHelper.getItemIcon(info.itemId);
                this.m_title.text = "[color=#e3b121]" + ItemHelper.getItemNumFormat(info.itemId) + "[/color]/" + formatNumberUnit(info.itemNum);
            };
            /**
             * 更新界面 cur/num
             * @param itemId
             * @param itemNum
             */
            CommonItem.prototype.setItemInfo = function (itemId, itemNum) {
                this.m_icon.url = ItemHelper.getItemIcon(itemId);
                this.m_title.text = "[color=#e3b121]" + ItemHelper.getItemNumFormat(itemId) + "[/color]/" + formatNumberUnit(itemNum);
            };
            /**
             * 更新界面
             * @param id 道具id
             * @param num 数量
             */
            CommonItem.prototype.updateViewByIdNum = function (id, num) {
                var config = Game.config.item.getConfig(id);
                if (config) {
                    this.m_icon.icon = config.iconUrl;
                }
                this.m_title.text = formatNumberUnit(num);
                this.m_star.starNum = Game.config.item.getStarNum(id);
            };
            /**
             * 更新道具
             * @param data DTItemNum
             */
            CommonItem.prototype.updateViewByDTNum = function (data) {
                var id = data.itemId;
                var num = data.itemNum;
                this.updateViewByIdNum(id, num);
            };
            /**
             * 更新道具
             * @param idNum 道具[id,num]
             */
            CommonItem.prototype.updateViewByArray = function (idNum) {
                var id = idNum[0];
                var num = idNum[1];
                this.updateViewByIdNum(id, num);
            };
            /**
             *
             * @param id
             * @param cur
             * @param max
             */
            CommonItem.prototype.updateViewCurMax = function (id, cur, max) {
                var config = Game.config.item.getConfig(id);
                if (config) {
                    this.m_icon.icon = config.iconUrl;
                }
                //
                this.m_title.text = format("{0}/{1}", cur, max);
                this.titleColor = "#114d74";
            };
            CommonItem.prototype.hideBg = function () {
                this.m_c_show_bg.selectedIndex = 1;
            };
            CommonItem.prototype.showBg = function () {
                this.m_c_show_bg.selectedIndex = 0;
            };
            return CommonItem;
        }(Common.CommonItemStruct));
        Common.CommonItem = CommonItem;
    })(Common = fgui.Common || (fgui.Common = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=CommonItem.js.map