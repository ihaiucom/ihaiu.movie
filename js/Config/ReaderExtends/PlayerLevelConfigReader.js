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
    var PlayerLevelConfigReader = /** @class */ (function (_super) {
        __extends(PlayerLevelConfigReader, _super);
        function PlayerLevelConfigReader() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.maxLevel = 1;
            _this.level = 1;
            return _this;
        }
        // 添加配置
        PlayerLevelConfigReader.prototype.addConfig = function (config) {
            _super.prototype.addConfig.call(this, config);
            this.maxLevel = Math.max(this.maxLevel, config.id);
            //	this.level = config.id;
            this.level = 1;
        };
        // 获取配置
        PlayerLevelConfigReader.prototype.getConfig = function (id) {
            id = Math.min(id, this.maxLevel);
            return _super.prototype.getConfig.call(this, id);
        };
        PlayerLevelConfigReader.prototype.GetShopGold = function (playerLv) {
            var cfg = this.getConfig(playerLv);
            if (cfg) {
                return cfg.ShopGold;
            }
            return 0;
        };
        PlayerLevelConfigReader.prototype.GetShopMoney = function (playerLv) {
            var cfg = this.getConfig(playerLv);
            if (cfg) {
                return cfg.ShopMoney;
            }
            return 0;
        };
        PlayerLevelConfigReader.prototype.GetFansLimit = function (playerLv) {
            var cfg = this.getConfig(playerLv);
            if (cfg) {
                return cfg.fans;
            }
            return 0;
        };
        return PlayerLevelConfigReader;
    }(configs.PlayerLevelConfigReaderStruct));
    configs.PlayerLevelConfigReader = PlayerLevelConfigReader;
})(configs || (configs = {}));
//# sourceMappingURL=PlayerLevelConfigReader.js.map