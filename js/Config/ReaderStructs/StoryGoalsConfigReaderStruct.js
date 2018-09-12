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
    var StoryGoalsConfigReaderStruct = /** @class */ (function (_super) {
        __extends(StoryGoalsConfigReaderStruct, _super);
        function StoryGoalsConfigReaderStruct() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.tableName = "StoryGoals";
            return _this;
        }
        StoryGoalsConfigReaderStruct.prototype.ParseCsv = function (csv) {
            var config = new configs.StoryGoalsConfig();
            config.id = csvGetInt(csv, this.GetHeadIndex("id"));
            config.storyid = csvGetInt(csv, this.GetHeadIndex("storyid"));
            config.rank = csvGetInt(csv, this.GetHeadIndex("rank"));
            config.property1 = csvGetInt(csv, this.GetHeadIndex("property1"));
            config.value1 = csvGetInt(csv, this.GetHeadIndex("value1"));
            config.property2 = csvGetInt(csv, this.GetHeadIndex("property2"));
            config.value2 = csvGetInt(csv, this.GetHeadIndex("value2"));
            config.reward = configs.DTItemNum.parseArray(csvGetString(csv, this.GetHeadIndex("reward")));
            config.info = csvGetString(csv, this.GetHeadIndex("info"));
            this.addConfig(config);
        };
        return StoryGoalsConfigReaderStruct;
    }(configs.CsvConfigRender));
    configs.StoryGoalsConfigReaderStruct = StoryGoalsConfigReaderStruct;
})(configs || (configs = {}));
//# sourceMappingURL=StoryGoalsConfigReaderStruct.js.map