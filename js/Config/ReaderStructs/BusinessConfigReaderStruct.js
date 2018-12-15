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
    var BusinessConfigReaderStruct = /** @class */ (function (_super) {
        __extends(BusinessConfigReaderStruct, _super);
        function BusinessConfigReaderStruct() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.tableName = "Business";
            return _this;
        }
        BusinessConfigReaderStruct.prototype.ParseCsv = function (csv) {
            var config = new configs.BusinessConfig();
            config.id = csvGetInt(csv, this.GetHeadIndex("id"));
            config.zh_cn_from = csvGetString(csv, this.GetHeadIndex("zh_cn_from"));
            config.zh_cn_name = csvGetString(csv, this.GetHeadIndex("zh_cn_name"));
            config.zh_cn_description = csvGetString(csv, this.GetHeadIndex("zh_cn_description"));
            config.icon = csvGetInt(csv, this.GetHeadIndex("icon"));
            config.reward = configs.DTItemNum.parseArray(csvGetString(csv, this.GetHeadIndex("reward")));
            config.expect = csvGetInt(csv, this.GetHeadIndex("expect"));
            this.addConfig(config);
        };
        return BusinessConfigReaderStruct;
    }(configs.CsvConfigRender));
    configs.BusinessConfigReaderStruct = BusinessConfigReaderStruct;
})(configs || (configs = {}));
//# sourceMappingURL=BusinessConfigReaderStruct.js.map