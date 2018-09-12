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
    var StoryTaskConfigReaderStruct = /** @class */ (function (_super) {
        __extends(StoryTaskConfigReaderStruct, _super);
        function StoryTaskConfigReaderStruct() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.path = "StoryTask";
            return _this;
        }
        StoryTaskConfigReaderStruct.prototype.ParseCsv = function (csv) {
            var config = new configs.StoryTaskConfig();
            config.id = csvGetInt(csv, this.GetHeadIndex("id"));
            config.task = csvGetInt(csv, this.GetHeadIndex("task"));
            config.value = csvGetInt(csv, this.GetHeadIndex("value"));
            config.zh_cn_description = csvGetString(csv, this.GetHeadIndex("zh_cn_description"));
            config.pre_id = csvGetInt(csv, this.GetHeadIndex("pre_id"));
            config.reward = configs.DTItemNum.parseArray(csvGetString(csv, this.GetHeadIndex("reward")));
            this.addConfig(config);
        };
        return StoryTaskConfigReaderStruct;
    }(configs.CsvConfigRender));
    configs.StoryTaskConfigReaderStruct = StoryTaskConfigReaderStruct;
})(configs || (configs = {}));
//# sourceMappingURL=StoryTaskConfigReaderStruct.js.map