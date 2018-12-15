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
    var DailySignTrailerConfigReaderStruct = /** @class */ (function (_super) {
        __extends(DailySignTrailerConfigReaderStruct, _super);
        function DailySignTrailerConfigReaderStruct() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.tableName = "DailySignTrailer";
            return _this;
        }
        DailySignTrailerConfigReaderStruct.prototype.ParseCsv = function (csv) {
            var config = new configs.DailySignTrailerConfig();
            config.id = csvGetInt(csv, this.GetHeadIndex("id"));
            config.day = csvGetInt(csv, this.GetHeadIndex("day"));
            config.reward = configs.DTItemNum.parse(csvGetString(csv, this.GetHeadIndex("reward")));
            config.zh_cn_info = csvGetString(csv, this.GetHeadIndex("zh_cn_info"));
            this.addConfig(config);
        };
        return DailySignTrailerConfigReaderStruct;
    }(configs.CsvConfigRender));
    configs.DailySignTrailerConfigReaderStruct = DailySignTrailerConfigReaderStruct;
})(configs || (configs = {}));
//# sourceMappingURL=DailySignTrailerConfigReaderStruct.js.map