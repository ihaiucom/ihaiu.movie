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
    var ServerRankingListConfigReaderStruct = /** @class */ (function (_super) {
        __extends(ServerRankingListConfigReaderStruct, _super);
        function ServerRankingListConfigReaderStruct() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.tableName = "ServerRankingList";
            return _this;
        }
        ServerRankingListConfigReaderStruct.prototype.ParseCsv = function (csv) {
            var config = new configs.ServerRankingListConfig();
            config.id = csvGetInt(csv, this.GetHeadIndex("id"));
            config.name = csvGetString(csv, this.GetHeadIndex("name"));
            config.rank = toIntArray(csvGetString(csv, this.GetHeadIndex("rank")));
            config.normal_reward = configs.DTItemNum.parseArray(csvGetString(csv, this.GetHeadIndex("normal_reward")));
            config.spec_reward = configs.DTItemNum.parseArray(csvGetString(csv, this.GetHeadIndex("spec_reward")));
            this.addConfig(config);
        };
        return ServerRankingListConfigReaderStruct;
    }(configs.CsvConfigRender));
    configs.ServerRankingListConfigReaderStruct = ServerRankingListConfigReaderStruct;
})(configs || (configs = {}));
//# sourceMappingURL=ServerRankingListConfigReaderStruct.js.map