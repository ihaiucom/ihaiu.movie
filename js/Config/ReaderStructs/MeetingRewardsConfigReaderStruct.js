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
    var MeetingRewardsConfigReaderStruct = /** @class */ (function (_super) {
        __extends(MeetingRewardsConfigReaderStruct, _super);
        function MeetingRewardsConfigReaderStruct() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.tableName = "MeetingRewards";
            return _this;
        }
        MeetingRewardsConfigReaderStruct.prototype.ParseCsv = function (csv) {
            var config = new configs.MeetingRewardsConfig();
            config.id = csvGetInt(csv, this.GetHeadIndex("id"));
            config.rewards = configs.DTItemNum.parse(csvGetString(csv, this.GetHeadIndex("rewards")));
            config.expect = csvGetInt(csv, this.GetHeadIndex("expect"));
            config.rate = csvGetInt(csv, this.GetHeadIndex("rate"));
            config.info = csvGetString(csv, this.GetHeadIndex("info"));
            this.addConfig(config);
        };
        return MeetingRewardsConfigReaderStruct;
    }(configs.CsvConfigRender));
    configs.MeetingRewardsConfigReaderStruct = MeetingRewardsConfigReaderStruct;
})(configs || (configs = {}));
//# sourceMappingURL=MeetingRewardsConfigReaderStruct.js.map