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
    var PlayerLevelConfig = /** @class */ (function (_super) {
        __extends(PlayerLevelConfig, _super);
        function PlayerLevelConfig() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        PlayerLevelConfig.prototype.setLevelData = function (level) {
            this.dtLevel = level;
        };
        Object.defineProperty(PlayerLevelConfig.prototype, "ShopGold", {
            get: function () {
                return this.shop_1003;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PlayerLevelConfig.prototype, "ShopMoney", {
            get: function () {
                return this.shop_1004;
            },
            enumerable: true,
            configurable: true
        });
        return PlayerLevelConfig;
    }(configs.PlayerLevelConfigStruct));
    configs.PlayerLevelConfig = PlayerLevelConfig;
})(configs || (configs = {}));
//# sourceMappingURL=PlayerLevelConfig.js.map