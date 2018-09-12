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
    var WarMovie;
    (function (WarMovie) {
        var WarYRCostItem = /** @class */ (function (_super) {
            __extends(WarYRCostItem, _super);
            function WarYRCostItem() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            WarYRCostItem.prototype.setData = function (data, conf) {
                this.m_costText.text = formatNumberUnit(data.PayForFilming(conf.type), 1);
                this.m_juese.text = conf.getType;
                this.m_star.m_starList.numItems = data.star;
                this.m_icon.setIcon(Game.config.avatar.getConfig(data.config.avatar).bodyIconUrl);
                this.m_name.text = data.name;
                //技能
                Game.system.playSkillEffect(data.id, Games.SkillTriggerType.actor_paycheck);
            };
            return WarYRCostItem;
        }(WarMovie.WarYRCostItemStruct));
        WarMovie.WarYRCostItem = WarYRCostItem;
    })(WarMovie = fgui.WarMovie || (fgui.WarMovie = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=WarYRCostItem.js.map