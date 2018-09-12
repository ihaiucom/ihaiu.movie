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
        var ProduceUpgrade = /** @class */ (function (_super) {
            __extends(ProduceUpgrade, _super);
            function ProduceUpgrade() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            ProduceUpgrade.prototype.showForParent = function (produceId, grade, onUpgradeCaller, thisArgs, parent) {
                this.produceId = produceId;
                this.grade = grade;
                this.onUpgradeCaller = onUpgradeCaller;
                this.thisArgs = thisArgs;
                this.data = Game.moduleModel.produce.getProduce(produceId);
                this.cfg = Game.config.produce.getConfig(this.produceId);
                if (parent == null) {
                    parent = Games.MenuLayer.module;
                }
                parent.addChild(this);
                var pLevelCfg = Game.config.produceLevel.getConfig(this.data.level);
                this.m_itemNum.text = formatNumberUnit(pLevelCfg.cost.itemNum);
                this.m_itemIcon.url = ItemHelper.getItemIcon(pLevelCfg.cost.itemId);
                //Event
                this.m_commonPanel.m_closeBtn.onClick(this, this.onClose);
                Game.protoOkEvent.add(ProtoEventKey.manageProduce_Uplevel, this.onServerUplevel, this);
                this.update();
            };
            ProduceUpgrade.prototype.update = function () {
                this.data = Game.moduleModel.produce.getProduce(this.produceId);
                var pLevelCfg = Game.config.produceLevel.getConfig(this.data.level);
                this.m_itemNum.text = formatNumberUnit(pLevelCfg.cost.itemNum);
                this.m_commonPanel.m_title.text = this.cfg.name + "[color=#33ff33]  " + format(TEXT.Lv, this.data.level) + "[/color]";
                this.setList();
            };
            ProduceUpgrade.prototype.setList = function () {
                this.m_assetList.removeChildrenToPool();
                for (var i = 0; i < this.data.produceSkillList.length; i++) {
                    var skill = this.data.produceSkillList[i];
                    var pSkillItem = this.m_assetList.addItemFromPool();
                    pSkillItem.setInfo(skill);
                    pSkillItem.m_btnUpgradeSelect.onClick(this, this.onUpgradeClick, [skill]);
                    this.m_assetList.addChild(pSkillItem);
                }
            };
            ProduceUpgrade.prototype.onServerUplevel = function (proto) {
                this.update();
            };
            //升级单项
            ProduceUpgrade.prototype.onUpgradeClick = function (skill) {
                if (!this.checkCostEnough()) {
                    Game.system.toastText(Game.config.msg.getTxt(MsgKey.produce_gold_less));
                    return;
                }
                if (!this.checkhasBuild()) {
                    var pLevelCfg = Game.config.produceLevel.getConfig(this.data.level);
                    var buildId = pLevelCfg.limit_grade[this.grade];
                    var cfg = Game.config.buildingLevel.getConfig(buildId);
                    Game.system.toastText(Game.config.msg.getTxtFormat(MsgKey.produce_produce_limit, cfg.name, cfg.level));
                    return;
                }
                Game.protosender.manageProduce.Uplevel(this.produceId, skill.id);
            };
            ProduceUpgrade.prototype.checkCostEnough = function () {
                var pLevelCfg = Game.config.produceLevel.getConfig(this.data.level);
                return ItemHelper.getItemNum(pLevelCfg.cost.itemId) >= pLevelCfg.cost.itemNum;
            };
            ProduceUpgrade.prototype.checkhasBuild = function () {
                var pLevelCfg = Game.config.produceLevel.getConfig(this.data.level);
                if (pLevelCfg) {
                    var buildId = pLevelCfg.limit_grade[this.grade];
                    if (buildId == 0) {
                        return true;
                    }
                    return Game.moduleModel.building.validataBuildLevel(buildId);
                }
                return true;
            };
            ProduceUpgrade.prototype.onClose = function () {
                Game.protoOkEvent.remove(ProtoEventKey.manageProduce_Uplevel, this.onServerUplevel, this);
                this.removeFromParent();
            };
            return ProduceUpgrade;
        }(Produce.ProduceUpgradeStruct));
        Produce.ProduceUpgrade = ProduceUpgrade;
    })(Produce = fgui.Produce || (fgui.Produce = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=ProduceUpgrade.js.map