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
    var WriterStationConfigReaderStruct = /** @class */ (function (_super) {
        __extends(WriterStationConfigReaderStruct, _super);
        function WriterStationConfigReaderStruct() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.tableName = "WriterStation";
            return _this;
        }
        WriterStationConfigReaderStruct.prototype.ParseCsv = function (csv) {
            var config = new configs.WriterStationConfig();
            config.id = csvGetInt(csv, this.GetHeadIndex("id"));
            config.tips = csvGetString(csv, this.GetHeadIndex("tips"));
            config.cost = configs.DTItemNum.parse(csvGetString(csv, this.GetHeadIndex("cost")));
            config.req_block = csvGetInt(csv, this.GetHeadIndex("req_block"));
            this.addConfig(config);
        };
        return WriterStationConfigReaderStruct;
    }(configs.CsvConfigRender));
    configs.WriterStationConfigReaderStruct = WriterStationConfigReaderStruct;
})(configs || (configs = {}));
//# sourceMappingURL=WriterStationConfigReaderStruct.js.map