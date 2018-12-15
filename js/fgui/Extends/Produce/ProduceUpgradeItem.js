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
    var Produce;
    (function (Produce) {
        var ProduceUpgradeItem = /** @class */ (function (_super) {
            __extends(ProduceUpgradeItem, _super);
            function ProduceUpgradeItem() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            ProduceUpgradeItem.prototype.setInfo = function (produceLevel, skill) {
                this.m_title.text = Game.moduleModel.produce.getProduceSkillName[skill.id];
                this.m_num.text = this.getTypeNum(skill).toString();
                this.m_c1.setSelectedIndex(skill.id - 1); //从0开始
                //
                var isOnLimit = Game.moduleModel.produce.checkProduceLvLimit(produceLevel, skill);
                if (isOnLimit) {
                    this.m_btnUpgradeLock.visible = true;
                    this.m_btnUpgradeSelect.visible = false;
                }
                else {
                    this.m_btnUpgradeLock.visible = false;
                    this.m_btnUpgradeSelect.visible = true;
                }
            };
            ProduceUpgradeItem.prototype.getTypeNum = function (skill) {
                var configId = skill.id * 1000 + skill.level;
                var cfg = Game.config.produceLv.getConfig(configId);
                if (cfg) {
                    return cfg.effect[0];
                }
            };
            return ProduceUpgradeItem;
        }(Produce.ProduceUpgradeItemStruct));
        Produce.ProduceUpgradeItem = ProduceUpgradeItem;
    })(Produce = fgui.Produce || (fgui.Produce = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=ProduceUpgradeItem.js.map