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
    var GlobalConfigReaderStruct = /** @class */ (function (_super) {
        __extends(GlobalConfigReaderStruct, _super);
        function GlobalConfigReaderStruct() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.tableName = "Global";
            return _this;
        }
        GlobalConfigReaderStruct.prototype.ParseCsv = function (csv) {
            var config = new configs.GlobalConfig();
            config.id = csvGetInt(csv, this.GetHeadIndex("id"));
            config.key = csvGetString(csv, this.GetHeadIndex("key"));
            config.name = csvGetString(csv, this.GetHeadIndex("name"));
            config.value = csvGetInt(csv, this.GetHeadIndex("value"));
            config.value4 = csvGetString(csv, this.GetHeadIndex("value4"));
            config.value1 = toIntArray(csvGetString(csv, this.GetHeadIndex("value1")));
            config.value2 = configs.DTlValue2.parseArray(csvGetString(csv, this.GetHeadIndex("value2")));
            config.value3 = configs.DTlValue3.parseArray(csvGetString(csv, this.GetHeadIndex("value3")));
            config.value5 = configs.DTPerformActoin.parseArray(csvGetString(csv, this.GetHeadIndex("value5")));
            config.tips = csvGetString(csv, this.GetHeadIndex("tips"));
            this.addConfig(config);
        };
        return GlobalConfigReaderStruct;
    }(configs.CsvConfigRender));
    configs.GlobalConfigReaderStruct = GlobalConfigReaderStruct;
})(configs || (configs = {}));
//# sourceMappingURL=GlobalConfigReaderStruct.js.map