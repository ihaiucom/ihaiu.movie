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
    var CityPopularizeConfigReaderStruct = /** @class */ (function (_super) {
        __extends(CityPopularizeConfigReaderStruct, _super);
        function CityPopularizeConfigReaderStruct() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.tableName = "CityPopularize";
            return _this;
        }
        CityPopularizeConfigReaderStruct.prototype.ParseCsv = function (csv) {
            var config = new configs.CityPopularizeConfig();
            config.id = csvGetInt(csv, this.GetHeadIndex("id"));
            config.zh_cn_name = csvGetString(csv, this.GetHeadIndex("zh_cn_name"));
            config.level_out_3 = csvGetInt(csv, this.GetHeadIndex("level_out_3"));
            config.level_num_3 = csvGetInt(csv, this.GetHeadIndex("level_num_3"));
            config.level_chance_3 = csvGetInt(csv, this.GetHeadIndex("level_chance_3"));
            config.level_out_7 = csvGetInt(csv, this.GetHeadIndex("level_out_7"));
            config.level_num_7 = csvGetInt(csv, this.GetHeadIndex("level_num_7"));
            config.level_chance_7 = csvGetInt(csv, this.GetHeadIndex("level_chance_7"));
            config.level_out_10 = csvGetInt(csv, this.GetHeadIndex("level_out_10"));
            config.level_num_10 = csvGetInt(csv, this.GetHeadIndex("level_num_10"));
            config.level_chance_10 = csvGetInt(csv, this.GetHeadIndex("level_chance_10"));
            config.level_out_15 = csvGetInt(csv, this.GetHeadIndex("level_out_15"));
            config.level_num_15 = csvGetInt(csv, this.GetHeadIndex("level_num_15"));
            config.level_chance_15 = csvGetInt(csv, this.GetHeadIndex("level_chance_15"));
            config.level_out_20 = csvGetInt(csv, this.GetHeadIndex("level_out_20"));
            config.level_num_20 = csvGetInt(csv, this.GetHeadIndex("level_num_20"));
            config.level_chance_20 = csvGetInt(csv, this.GetHeadIndex("level_chance_20"));
            this.addConfig(config);
        };
        return CityPopularizeConfigReaderStruct;
    }(configs.CsvConfigRender));
    configs.CityPopularizeConfigReaderStruct = CityPopularizeConfigReaderStruct;
})(configs || (configs = {}));
//# sourceMappingURL=CityPopularizeConfigReaderStruct.js.map