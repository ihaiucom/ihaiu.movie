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
        var PactIcon_80 = /** @class */ (function (_super) {
            __extends(PactIcon_80, _super);
            function PactIcon_80() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            PactIcon_80.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.onClick(this, this.OnClick);
            };
            PactIcon_80.prototype.OnClick = function () {
                if (this.itemData != null) {
                    Game.system.showItemInfo(this, this.itemData.itemId);
                }
            };
            PactIcon_80.prototype.Render = function (itemData) {
                this.itemData = itemData;
                if (itemData) {
                    this.title = itemData.itemNumTxt;
                    this.m_star.starNum = itemData.itemStar;
                    this.m_icon.m_icon.url = itemData.itemBodyIconUrl;
                }
            };
            Object.defineProperty(PactIcon_80.prototype, "ItemId", {
                set: function (itemId) {
                    this.m_icon.m_icon.url = Game.config.item.getItemIcon(itemId);
                    this.m_star.starNum = Game.config.item.getStarNum(itemId);
                },
                enumerable: true,
                configurable: true
            });
            /**
             * 更新合同显示
             * @param actorId 艺人id
             */
            PactIcon_80.prototype.updateContractByActorId = function (actorId) {
                var itemConfig = Game.config.item.getItemByActorId(actorId);
                this.ItemId = itemConfig.id;
                this.m_title.text = formatNumberUnit(Game.moduleModel.item.getItemNum(itemConfig.id));
            };
            /**
             *
             * @param cost 设置合同消耗
             */
            PactIcon_80.prototype.setCost = function (cost) {
                this.m_title.text = cost.itemNumTxt;
                this.ItemId = cost.itemId;
                var enough = ItemHelper.checkItemEnough(cost);
                if (enough) {
                    this.m_c_title_color.selectedIndex = 1;
                }
                else {
                    this.m_c_title_color.selectedIndex = 2;
                }
            };
            return PactIcon_80;
        }(Common.PactIcon_80Struct));
        Common.PactIcon_80 = PactIcon_80;
    })(Common = fgui.Common || (fgui.Common = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=PactIcon_80.js.map