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
    var WriterAbilityConfigReaderStruct = /** @class */ (function (_super) {
        __extends(WriterAbilityConfigReaderStruct, _super);
        function WriterAbilityConfigReaderStruct() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.tableName = "WriterAbility";
            return _this;
        }
        WriterAbilityConfigReaderStruct.prototype.ParseCsv = function (csv) {
            var config = new configs.WriterAbilityConfig();
            config.id = csvGetInt(csv, this.GetHeadIndex("id"));
            config.name = csvGetString(csv, this.GetHeadIndex("name"));
            config.advanced_level = csvGetInt(csv, this.GetHeadIndex("advanced_level"));
            config.increase = csvGetInt(csv, this.GetHeadIndex("increase"));
            config.train_time = csvGetInt(csv, this.GetHeadIndex("train_time"));
            config.train_cost = configs.DTItemNum.parse(csvGetString(csv, this.GetHeadIndex("train_cost")));
            this.addConfig(config);
        };
        return WriterAbilityConfigReaderStruct;
    }(configs.CsvConfigRender));
    configs.WriterAbilityConfigReaderStruct = WriterAbilityConfigReaderStruct;
})(configs || (configs = {}));
//# sourceMappingURL=WriterAbilityConfigReaderStruct.js.map