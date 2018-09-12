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
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.skillNames = [TEXT.ProduceSkillType1, TEXT.ProduceSkillType2, TEXT.ProduceSkillType3, TEXT.ProduceSkillType4];
                return _this;
            }
            ProduceUpgradeItem.prototype.setInfo = function (skill) {
                this.m_title.text = this.skillNames[skill.id];
                this.m_num.text = this.getTypeNum(skill).toString();
                this.m_c1.setSelectedIndex(skill.id);
            };
            ProduceUpgradeItem.prototype.getTypeNum = function (skill) {
                var cfg = Game.config.produceLevel.getConfig(skill.level);
                switch (skill.id) {
                    case 0:
                        return cfg.line;
                    case 1:
                        return cfg.save;
                    case 2:
                        return cfg.time;
                    case 3:
                        return cfg.output_initial;
                    default:
                        return 0;
                }
            };
            return ProduceUpgradeItem;
        }(Produce.ProduceUpgradeItemStruct));
        Produce.ProduceUpgradeItem = ProduceUpgradeItem;
    })(Produce = fgui.Produce || (fgui.Produce = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=ProduceUpgradeItem.js.map