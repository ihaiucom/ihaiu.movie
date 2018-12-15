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
    var WriterConfigReaderStruct = /** @class */ (function (_super) {
        __extends(WriterConfigReaderStruct, _super);
        function WriterConfigReaderStruct() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.tableName = "Writer";
            return _this;
        }
        WriterConfigReaderStruct.prototype.ParseCsv = function (csv) {
            var config = new configs.WriterConfig();
            config.id = csvGetInt(csv, this.GetHeadIndex("id"));
            config.zh_cn_name = csvGetString(csv, this.GetHeadIndex("zh_cn_name"));
            config.quality = csvGetInt(csv, this.GetHeadIndex("quality"));
            config.head = csvGetInt(csv, this.GetHeadIndex("head"));
            config.advanced_ability = csvGetInt(csv, this.GetHeadIndex("advanced_ability"));
            config.special_skill = toIntArray(csvGetString(csv, this.GetHeadIndex("special_skill")));
            config.skill_level = toIntArray(csvGetString(csv, this.GetHeadIndex("skill_level")));
            config.employee_cost = configs.DTItemNum.parse(csvGetString(csv, this.GetHeadIndex("employee_cost")));
            this.addConfig(config);
        };
        return WriterConfigReaderStruct;
    }(configs.CsvConfigRender));
    configs.WriterConfigReaderStruct = WriterConfigReaderStruct;
})(configs || (configs = {}));
//# sourceMappingURL=WriterConfigReaderStruct.js.map