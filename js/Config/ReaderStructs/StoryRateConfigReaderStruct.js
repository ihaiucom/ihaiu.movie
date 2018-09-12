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
    var StoryRateConfigReaderStruct = /** @class */ (function (_super) {
        __extends(StoryRateConfigReaderStruct, _super);
        function StoryRateConfigReaderStruct() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.tableName = "StoryRate";
            return _this;
        }
        StoryRateConfigReaderStruct.prototype.ParseCsv = function (csv) {
            var config = new configs.StoryRateConfig();
            config.id = csvGetInt(csv, this.GetHeadIndex("id"));
            config.name = csvGetString(csv, this.GetHeadIndex("name"));
            config.rate = csvGetInt(csv, this.GetHeadIndex("rate"));
            this.addConfig(config);
        };
        return StoryRateConfigReaderStruct;
    }(configs.CsvConfigRender));
    configs.StoryRateConfigReaderStruct = StoryRateConfigReaderStruct;
})(configs || (configs = {}));
//# sourceMappingURL=StoryRateConfigReaderStruct.js.map