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
    var Building;
    (function (Building) {
        var BtnNpcTips = /** @class */ (function (_super) {
            __extends(BtnNpcTips, _super);
            function BtnNpcTips() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            BtnNpcTips.prototype.setInfo = function (iconId, title) {
                this.m_icon.url = Game.config.avatar.GetIconUrl(iconId);
                this.m_title.text = title;
            };
            BtnNpcTips.prototype.setItemInfo = function (itemId, title) {
                this.m_icon.url = Game.config.item.getItemIcon(itemId);
                this.m_title.text = title;
            };
            Object.defineProperty(BtnNpcTips.prototype, "scaleXY", {
                set: function (val) {
                    this.setScale(val, val);
                },
                enumerable: true,
                configurable: true
            });
            return BtnNpcTips;
        }(Building.BtnNpcTipsStruct));
        Building.BtnNpcTips = BtnNpcTips;
    })(Building = fgui.Building || (fgui.Building = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=BtnNpcTips.js.map