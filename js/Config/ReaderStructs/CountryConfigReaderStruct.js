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
    var CountryConfigReaderStruct = /** @class */ (function (_super) {
        __extends(CountryConfigReaderStruct, _super);
        function CountryConfigReaderStruct() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.tableName = "Country";
            return _this;
        }
        CountryConfigReaderStruct.prototype.ParseCsv = function (csv) {
            var config = new configs.CountryConfig();
            config.id = csvGetInt(csv, this.GetHeadIndex("id"));
            config.number = csvGetInt(csv, this.GetHeadIndex("number"));
            config.zh_cn_name = csvGetString(csv, this.GetHeadIndex("zh_cn_name"));
            config.en_name = csvGetString(csv, this.GetHeadIndex("en_name"));
            config.city_num = csvGetInt(csv, this.GetHeadIndex("city_num"));
            config.icon = csvGetInt(csv, this.GetHeadIndex("icon"));
            config.flag = csvGetInt(csv, this.GetHeadIndex("flag"));
            config.reward = configs.DTItemNum.parseArray(csvGetString(csv, this.GetHeadIndex("reward")));
            config.pre_id = csvGetInt(csv, this.GetHeadIndex("pre_id"));
            config.next_country = csvGetInt(csv, this.GetHeadIndex("next_country"));
            this.addConfig(config);
        };
        return CountryConfigReaderStruct;
    }(configs.CsvConfigRender));
    configs.CountryConfigReaderStruct = CountryConfigReaderStruct;
})(configs || (configs = {}));
//# sourceMappingURL=CountryConfigReaderStruct.js.map