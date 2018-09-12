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
    var DailySignConfigReaderStruct = /** @class */ (function (_super) {
        __extends(DailySignConfigReaderStruct, _super);
        function DailySignConfigReaderStruct() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.tableName = "DailySign";
            return _this;
        }
        DailySignConfigReaderStruct.prototype.ParseCsv = function (csv) {
            var config = new configs.DailySignConfig();
            config.id = csvGetInt(csv, this.GetHeadIndex("id"));
            config.cycle = csvGetInt(csv, this.GetHeadIndex("cycle"));
            config.day = csvGetInt(csv, this.GetHeadIndex("day"));
            config.reward = configs.DTItemNum.parse(csvGetString(csv, this.GetHeadIndex("reward")));
            config.info = csvGetString(csv, this.GetHeadIndex("info"));
            this.addConfig(config);
        };
        return DailySignConfigReaderStruct;
    }(configs.CsvConfigRender));
    configs.DailySignConfigReaderStruct = DailySignConfigReaderStruct;
})(configs || (configs = {}));
//# sourceMappingURL=DailySignConfigReaderStruct.js.map