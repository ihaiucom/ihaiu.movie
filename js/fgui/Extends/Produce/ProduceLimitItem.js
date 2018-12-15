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
        var ProduceLimitItem = /** @class */ (function (_super) {
            __extends(ProduceLimitItem, _super);
            function ProduceLimitItem() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            ProduceLimitItem.prototype.setInfo = function (produceId, grade) {
                this.produceId = produceId;
                this.grade = grade;
                this.cfg = Game.config.produce.getConfig(produceId);
                //
                this.m_nameText.text = this.cfg.name;
                this.m_descText.text = this.cfg.tip;
                this.m_itemIcon.url = ItemHelper.getItemIcon(this.cfg.unlock_reward.itemId);
                this.m_itemNum.text = this.cfg.unlock_reward.itemNum.toString();
                this.m_timeText.text = format(TEXT.ProduceTime, TimeHelper.TimeFormat3(this.cfg.cd));
                this.m_btnUnlock.m_icon.url = ItemHelper.getItemIcon(this.cfg.unlock_gold.itemId);
                var isReadyUnlock = this.checkCanUnlock();
                if (!isReadyUnlock) {
                    FguiHelper.setGray(this.m_btnUnlock);
                }
                else {
                    FguiHelper.clearFilters(this.m_btnUnlock);
                }
                if (this.checkPrevProduce()) {
                    this.m_btnUnlock.m_title.text = TEXT.ProduceUnlock;
                }
                else {
                    this.m_btnUnlock.m_title.text = TEXT.ProduceUnlock; //Game.config.msg.getTxt(MsgKey.produce_pre_unlock);
                }
                this.m_btnUnlock.m_num.text = formatNumberUnit(this.cfg.unlock_gold.itemNum);
                //Event
                this.m_btnUnlock.onClick(this, this.onProduceUnlock);
            };
            ProduceLimitItem.prototype.onProduceUnlock = function () {
                if (!this.checkLevel() || !this.checkBuild()) {
                    var buildCfg = Game.config.buildingLevel.getConfig(this.cfg.unlock_building);
                    Game.system.toastText(Game.config.msg.getTxtFormat(MsgKey.produce_lock, this.cfg.unlock_level, buildCfg.name));
                    return;
                }
                if (!this.checkPrevProduce()) {
                    Game.system.toastText(Game.config.msg.getTxt(MsgKey.produce_pre_unlock));
                    return;
                }
                if (!this.checkCostEnough()) {
                    Game.system.openItemWay(this.cfg.unlock_gold.itemId, this.cfg.unlock_gold.itemNum);
                    // Game.system.toastText(Game.config.msg.getTxt(MsgKey.produce_gold_less));
                    return;
                }
                //request
                Game.protosender.manageProduce.Deblocking(this.produceId);
            };
            ProduceLimitItem.prototype.checkCanUnlock = function () {
                if (!this.checkLevel() || !this.checkBuild() || !this.checkPrevProduce()) {
                    return false;
                }
                return this.checkCostEnough();
            };
            //等级检查
            ProduceLimitItem.prototype.checkLevel = function () {
                return User.info.level >= Game.config.produce.getConfig(this.produceId).unlock_level;
            };
            //前置生产是否解锁
            ProduceLimitItem.prototype.checkPrevProduce = function () {
                if (this.cfg.pre_id == 0)
                    return true;
                return Game.moduleModel.produce.hasProduce(this.cfg.pre_id);
            };
            //检查消耗是否足够
            ProduceLimitItem.prototype.checkCostEnough = function () {
                return ItemHelper.getItemNum(this.cfg.unlock_gold.itemId) >= this.cfg.unlock_gold.itemNum;
            };
            //检查是否建造某房间
            ProduceLimitItem.prototype.checkBuild = function () {
                return Game.moduleModel.building.validataBuildLevel(this.cfg.unlock_building);
            };
            return ProduceLimitItem;
        }(Produce.ProduceLimitItemStruct));
        Produce.ProduceLimitItem = ProduceLimitItem;
    })(Produce = fgui.Produce || (fgui.Produce = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=ProduceLimitItem.js.map