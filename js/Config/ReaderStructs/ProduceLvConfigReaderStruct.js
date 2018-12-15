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
    var ProduceLvConfigReaderStruct = /** @class */ (function (_super) {
        __extends(ProduceLvConfigReaderStruct, _super);
        function ProduceLvConfigReaderStruct() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.tableName = "ProduceLv";
            return _this;
        }
        ProduceLvConfigReaderStruct.prototype.ParseCsv = function (csv) {
            var config = new configs.ProduceLvConfig();
            config.id = csvGetInt(csv, this.GetHeadIndex("id"));
            config.type = csvGetInt(csv, this.GetHeadIndex("type"));
            config.lv = csvGetInt(csv, this.GetHeadIndex("lv"));
            config.effect = toIntArray(csvGetString(csv, this.GetHeadIndex("effect")));
            config.produce_lv = csvGetInt(csv, this.GetHeadIndex("produce_lv"));
            config.tips = csvGetString(csv, this.GetHeadIndex("tips"));
            this.addConfig(config);
        };
        return ProduceLvConfigReaderStruct;
    }(configs.CsvConfigRender));
    configs.ProduceLvConfigReaderStruct = ProduceLvConfigReaderStruct;
})(configs || (configs = {}));
//# sourceMappingURL=ProduceLvConfigReaderStruct.js.map