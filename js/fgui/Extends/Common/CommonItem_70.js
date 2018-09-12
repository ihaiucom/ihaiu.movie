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
        var CommonItem_70 = /** @class */ (function (_super) {
            __extends(CommonItem_70, _super);
            function CommonItem_70() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            CommonItem_70.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.onClick(this, this.OnClick);
            };
            CommonItem_70.prototype.OnClick = function () {
                if (this.itemId) {
                    Game.system.showItemInfo(this, this.itemId);
                }
            };
            Object.defineProperty(CommonItem_70.prototype, "PopupInfo", {
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
            CommonItem_70.prototype.setInfo = function (info) {
                this.m_icon.url = ItemHelper.getItemIcon(info.itemId);
                this.m_title.text = "[color=#e3b121]" + ItemHelper.getItemNum(info.itemId) + "[/color]/" + info.itemNum;
            };
            /**
             * 更新界面 cur/num
             * @param itemId
             * @param itemNum
             */
            CommonItem_70.prototype.setItemInfo = function (itemId, itemNum) {
                this.m_icon.url = ItemHelper.getItemIcon(itemId);
                this.m_title.text = "[color=#e3b121]" + ItemHelper.getItemNum(itemId) + "[/color]/" + itemNum;
            };
            /**
             * 更新界面
             * @param id 道具id
             * @param num 数量
             */
            CommonItem_70.prototype.updateViewByIdNum = function (id, num) {
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
            CommonItem_70.prototype.updateViewByDTNum = function (data) {
                var id = data.itemId;
                var num = data.itemNum;
                this.updateViewByIdNum(id, num);
            };
            /**
             * 更新道具
             * @param idNum 道具[id,num]
             */
            CommonItem_70.prototype.updateViewByArray = function (idNum) {
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
            CommonItem_70.prototype.updateViewCurMax = function (id, cur, max) {
                var config = Game.config.item.getConfig(id);
                if (config) {
                    this.m_icon.icon = config.iconUrl;
                }
                //
                this.m_title.text = format("{0}/{1}", cur, max);
                this.titleColor = "#114d74";
            };
            CommonItem_70.prototype.hideBg = function () {
                this.m_c_show_bg.selectedIndex = 1;
            };
            CommonItem_70.prototype.showBg = function () {
                this.m_c_show_bg.selectedIndex = 0;
            };
            return CommonItem_70;
        }(Common.CommonItem_70Struct));
        Common.CommonItem_70 = CommonItem_70;
    })(Common = fgui.Common || (fgui.Common = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=CommonItem_70.js.map