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
        var ItemIcon50x50 = /** @class */ (function (_super) {
            __extends(ItemIcon50x50, _super);
            function ItemIcon50x50() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            ItemIcon50x50.prototype.setItemNumData = function (data) {
                this.dtItemNum = data;
                this.m_icon.url = data.itemIconUrl;
                var level = User.info.level;
                var titleNum = Math.floor((level / 10) + 1) * level * 10 + 500;
                this.m_title.text = formatNumberUnit(titleNum);
            };
            ItemIcon50x50.prototype.setItemData = function (data) {
                this.itemData = data;
                this.m_icon.url = data.itemIconUrl;
                this.m_title.text = data.itemNumTxt;
            };
            return ItemIcon50x50;
        }(Common.ItemIcon50x50Struct));
        Common.ItemIcon50x50 = ItemIcon50x50;
    })(Common = fgui.Common || (fgui.Common = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=ItemIcon50x50.js.map