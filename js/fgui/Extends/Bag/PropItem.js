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
    var Bag;
    (function (Bag) {
        var PropItem = /** @class */ (function (_super) {
            __extends(PropItem, _super);
            function PropItem() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            PropItem.prototype.RenderItem = function (data) {
                this.icon = data.itemIconUrl;
                this.title = data.itemNumTxt;
                this.star = data.itemStar;
                this.Red = data.red;
            };
            Object.defineProperty(PropItem.prototype, "star", {
                set: function (num) {
                    this.m_star.starNum = num;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(PropItem.prototype, "Red", {
                set: function (isShow) {
                    this.m_red.m_num.text = "";
                    this.m_red.visible = isShow;
                },
                enumerable: true,
                configurable: true
            });
            return PropItem;
        }(Bag.PropItemStruct));
        Bag.PropItem = PropItem;
    })(Bag = fgui.Bag || (fgui.Bag = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=PropItem.js.map