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
    var PfSkin;
    (function (PfSkin) {
        var GoodsIcon = /** @class */ (function (_super) {
            __extends(GoodsIcon, _super);
            function GoodsIcon() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            GoodsIcon.prototype.RenderItem = function (data) {
                if (data == null) {
                    return;
                }
                this.itemDate = Games.ItemData.Create(data.itemId, data.itemNum);
                if (this.itemDate.itemType == 7) {
                    this.m_itemType.setSelectedIndex(1);
                    this.m_pactIcon.Render(this.itemDate);
                }
                else {
                    this.m_itemType.setSelectedIndex(0);
                    this.m_labItem.RenderItem(this.itemDate);
                }
            };
            return GoodsIcon;
        }(PfSkin.GoodsIconStruct));
        PfSkin.GoodsIcon = GoodsIcon;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=GoodsIcon.js.map