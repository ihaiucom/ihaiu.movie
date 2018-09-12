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
    var BlockRankingListConfigReader = /** @class */ (function (_super) {
        __extends(BlockRankingListConfigReader, _super);
        function BlockRankingListConfigReader() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        BlockRankingListConfigReader.prototype.GetReward = function (type, rank) {
            var id = type * 1000 + rank;
            var cfg = this.getConfig(id);
            if (cfg) {
                return cfg.reward;
            }
            return [];
        };
        return BlockRankingListConfigReader;
    }(configs.BlockRankingListConfigReaderStruct));
    configs.BlockRankingListConfigReader = BlockRankingListConfigReader;
})(configs || (configs = {}));
//# sourceMappingURL=BlockRankingListConfigReader.js.map