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
    var SevenDaysConfigReaderStruct = /** @class */ (function (_super) {
        __extends(SevenDaysConfigReaderStruct, _super);
        function SevenDaysConfigReaderStruct() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.path = "SevenDays";
            return _this;
        }
        SevenDaysConfigReaderStruct.prototype.ParseCsv = function (csv) {
            var config = new configs.SevenDaysConfig();
            config.id = csvGetInt(csv, this.GetHeadIndex("id"));
            config.day = csvGetInt(csv, this.GetHeadIndex("day"));
            config.reward = configs.DTItemNum.parseArray(csvGetString(csv, this.GetHeadIndex("reward")));
            config.cn = csvGetString(csv, this.GetHeadIndex("cn"));
            this.addConfig(config);
        };
        return SevenDaysConfigReaderStruct;
    }(configs.CsvConfigRender));
    configs.SevenDaysConfigReaderStruct = SevenDaysConfigReaderStruct;
})(configs || (configs = {}));
//# sourceMappingURL=SevenDaysConfigReaderStruct.js.map