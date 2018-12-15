/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
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
var configs;
(function (configs) {
    var BlockLevelConfig = /** @class */ (function (_super) {
        __extends(BlockLevelConfig, _super);
        function BlockLevelConfig() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Object.defineProperty(BlockLevelConfig.prototype, "nextMsg", {
            get: function () {
                var value = this.next_msg;
                var msg;
                if (value instanceof Array) {
                    msg = value.join('<br />');
                }
                else {
                    msg = value;
                }
                var nextCfg = Game.config.blockLevel.GetNextSteetCfg(this.id);
                if (nextCfg) {
                    var addMoney = nextCfg.daily_reward.itemNum - this.daily_reward.itemNum;
                    var addGold = nextCfg.movie_daily_reward[0].itemNum - this.movie_daily_reward[0].itemNum;
                    var addReward = nextCfg.movie_daily_reward[1].itemNum - this.movie_daily_reward[1].itemNum;
                    return formatArrayNumberUnit(msg, addMoney, addGold, addReward);
                }
                return msg.format(0, 0, 0);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BlockLevelConfig.prototype, "currentMsg", {
            get: function () {
                var value = this.current_msg;
                var msg;
                if (value instanceof Array) {
                    msg = value.join('<br />');
                }
                else {
                    msg = value;
                }
                var addMoney = this.daily_reward.itemNum;
                var addGold = this.movie_daily_reward[0].itemNum;
                var addReward = this.movie_daily_reward[1].itemNum;
                return formatArrayNumberUnit(msg, addMoney, addGold, addReward);
            },
            enumerable: true,
            configurable: true
        });
        BlockLevelConfig.prototype.GetSellIcon = function (val) {
            if (val >= this.marvel_sell) {
                return 6028;
            }
            else if (val >= this.myth_sell) {
                return 6027;
            }
            else if (val >= this.great_sell) {
                return 6026;
            }
            else if (val >= this.big_sell) {
                return 6025;
            }
            else if (val >= this.good) {
                return 6024;
            }
            else {
                return 6023;
            }
        };
        BlockLevelConfig.prototype.GetSellIconUrl = function (val) {
            var avatarId = this.GetSellIcon(val);
            return Game.config.avatar.GetIconUrl(avatarId);
        };
        Object.defineProperty(BlockLevelConfig.prototype, "UpgradeMenu", {
            get: function () {
                if (this.upgrade_menu && this.upgrade_menu.length > 0 && this.upgrade_menu[0] != 0) {
                    return this.upgrade_menu;
                }
                return [];
            },
            enumerable: true,
            configurable: true
        });
        return BlockLevelConfig;
    }(configs.BlockLevelConfigStruct));
    configs.BlockLevelConfig = BlockLevelConfig;
})(configs || (configs = {}));
//# sourceMappingURL=BlockLevelConfig.js.map