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
    var ProduceLevelConfigReaderStruct = /** @class */ (function (_super) {
        __extends(ProduceLevelConfigReaderStruct, _super);
        function ProduceLevelConfigReaderStruct() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.tableName = "ProduceLevel";
            return _this;
        }
        ProduceLevelConfigReaderStruct.prototype.ParseCsv = function (csv) {
            var config = new configs.ProduceLevelConfig();
            config.id = csvGetInt(csv, this.GetHeadIndex("id"));
            config.line = csvGetInt(csv, this.GetHeadIndex("line"));
            config.save = csvGetInt(csv, this.GetHeadIndex("save"));
            config.time = csvGetInt(csv, this.GetHeadIndex("time"));
            config.output_initial = csvGetInt(csv, this.GetHeadIndex("output_initial"));
            config.time_add = csvGetInt(csv, this.GetHeadIndex("time_add"));
            config.cost = configs.DTItemNum.parse(csvGetString(csv, this.GetHeadIndex("cost")));
            config.limit_grade = toIntArray(csvGetString(csv, this.GetHeadIndex("limit_grade")));
            this.addConfig(config);
        };
        return ProduceLevelConfigReaderStruct;
    }(configs.CsvConfigRender));
    configs.ProduceLevelConfigReaderStruct = ProduceLevelConfigReaderStruct;
})(configs || (configs = {}));
//# sourceMappingURL=ProduceLevelConfigReaderStruct.js.map