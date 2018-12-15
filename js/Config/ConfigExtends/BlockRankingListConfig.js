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
    var BlockRankingListConfig = /** @class */ (function (_super) {
        __extends(BlockRankingListConfig, _super);
        function BlockRankingListConfig() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Object.defineProperty(BlockRankingListConfig.prototype, "reward", {
            get: function () {
                if (this.type == 1) {
                    var rewards = this.box_office_reward.concat(this.extra_reward);
                    return rewards;
                }
                if (this.type == 2) {
                    return this.movie_reward;
                }
                return [];
            },
            enumerable: true,
            configurable: true
        });
        return BlockRankingListConfig;
    }(configs.BlockRankingListConfigStruct));
    configs.BlockRankingListConfig = BlockRankingListConfig;
})(configs || (configs = {}));
//# sourceMappingURL=BlockRankingListConfig.js.map