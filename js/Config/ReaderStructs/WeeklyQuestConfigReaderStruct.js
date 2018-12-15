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
    var WeeklyQuestConfigReaderStruct = /** @class */ (function (_super) {
        __extends(WeeklyQuestConfigReaderStruct, _super);
        function WeeklyQuestConfigReaderStruct() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.tableName = "WeeklyQuest";
            return _this;
        }
        WeeklyQuestConfigReaderStruct.prototype.ParseCsv = function (csv) {
            var config = new configs.WeeklyQuestConfig();
            config.id = csvGetInt(csv, this.GetHeadIndex("id"));
            config.zh_cn_name = csvGetString(csv, this.GetHeadIndex("zh_cn_name"));
            config.zh_cn_des = csvGetString(csv, this.GetHeadIndex("zh_cn_des"));
            config.target_score = csvGetInt(csv, this.GetHeadIndex("target_score"));
            config.target_days = csvGetInt(csv, this.GetHeadIndex("target_days"));
            config.reward = configs.DTItemNum.parseArray(csvGetString(csv, this.GetHeadIndex("reward")));
            this.addConfig(config);
        };
        return WeeklyQuestConfigReaderStruct;
    }(configs.CsvConfigRender));
    configs.WeeklyQuestConfigReaderStruct = WeeklyQuestConfigReaderStruct;
})(configs || (configs = {}));
//# sourceMappingURL=WeeklyQuestConfigReaderStruct.js.map