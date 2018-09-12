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
    var BlockRankingListConfigReaderStruct = /** @class */ (function (_super) {
        __extends(BlockRankingListConfigReaderStruct, _super);
        function BlockRankingListConfigReaderStruct() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.tableName = "BlockRankingList";
            return _this;
        }
        BlockRankingListConfigReaderStruct.prototype.ParseCsv = function (csv) {
            var config = new configs.BlockRankingListConfig();
            config.id = csvGetInt(csv, this.GetHeadIndex("id"));
            config.name = csvGetString(csv, this.GetHeadIndex("name"));
            config.type = csvGetInt(csv, this.GetHeadIndex("type"));
            config.rank = csvGetInt(csv, this.GetHeadIndex("rank"));
            config.movie_reward = configs.DTItemNum.parseArray(csvGetString(csv, this.GetHeadIndex("movie_reward")));
            config.box_office_reward = configs.DTItemNum.parseArray(csvGetString(csv, this.GetHeadIndex("box_office_reward")));
            config.extra_reward = configs.DTItemNum.parseArray(csvGetString(csv, this.GetHeadIndex("extra_reward")));
            config.congratulate_switch = csvGetBoolean(csv, this.GetHeadIndex("congratulate_switch"));
            config.congratulate_reward = configs.DTItemNum.parse(csvGetString(csv, this.GetHeadIndex("congratulate_reward")));
            this.addConfig(config);
        };
        return BlockRankingListConfigReaderStruct;
    }(configs.CsvConfigRender));
    configs.BlockRankingListConfigReaderStruct = BlockRankingListConfigReaderStruct;
})(configs || (configs = {}));
//# sourceMappingURL=BlockRankingListConfigReaderStruct.js.map