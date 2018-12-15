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
        var LabItem_big = /** @class */ (function (_super) {
            __extends(LabItem_big, _super);
            function LabItem_big() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            LabItem_big.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.onClick(this, this.OnClick);
            };
            LabItem_big.prototype.OnClick = function () {
                if (this.itemData != null) {
                    Game.system.showItemInfo(this, this.itemData.itemId);
                }
            };
            LabItem_big.prototype.RenderItem = function (data) {
                if (data == null) {
                    return;
                }
                if (data.itemIconUrl) {
                    this.itemData = data;
                }
                else {
                    this.itemData = Games.ItemData.Create(data.itemId, data.itemNum);
                }
                this.title = this.itemData.itemNumTxt;
                this.icon = this.itemData.itemIconUrl;
                this.m_star.starNum = this.itemData.itemStar;
            };
            Object.defineProperty(LabItem_big.prototype, "ItemId", {
                set: function (itemId) {
                    this.m_icon.url = Game.config.item.getItemIcon(itemId);
                    this.m_star.starNum = Game.config.item.getStarNum(itemId);
                },
                enumerable: true,
                configurable: true
            });
            return LabItem_big;
        }(PfSkin.LabItem_bigStruct));
        PfSkin.LabItem_big = LabItem_big;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=LabItem_big.js.map