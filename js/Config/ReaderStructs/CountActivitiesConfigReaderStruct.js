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
    var CountActivitiesConfigReaderStruct = /** @class */ (function (_super) {
        __extends(CountActivitiesConfigReaderStruct, _super);
        function CountActivitiesConfigReaderStruct() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.tableName = "CountActivities";
            return _this;
        }
        CountActivitiesConfigReaderStruct.prototype.ParseCsv = function (csv) {
            var config = new configs.CountActivitiesConfig();
            config.id = csvGetInt(csv, this.GetHeadIndex("id"));
            config.type = csvGetInt(csv, this.GetHeadIndex("type"));
            config.count = csvGetInt(csv, this.GetHeadIndex("count"));
            config.special_reward = configs.DTItemNum.parseArray(csvGetString(csv, this.GetHeadIndex("special_reward")));
            config.image = csvGetString(csv, this.GetHeadIndex("image"));
            config.reward = configs.DTItemNum.parseArray(csvGetString(csv, this.GetHeadIndex("reward")));
            config.info = csvGetString(csv, this.GetHeadIndex("info"));
            this.addConfig(config);
        };
        return CountActivitiesConfigReaderStruct;
    }(configs.CsvConfigRender));
    configs.CountActivitiesConfigReaderStruct = CountActivitiesConfigReaderStruct;
})(configs || (configs = {}));
//# sourceMappingURL=CountActivitiesConfigReaderStruct.js.map