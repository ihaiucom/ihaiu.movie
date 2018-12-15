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
    var PerformConfigReaderStruct = /** @class */ (function (_super) {
        __extends(PerformConfigReaderStruct, _super);
        function PerformConfigReaderStruct() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.tableName = "Perform";
            return _this;
        }
        PerformConfigReaderStruct.prototype.ParseCsv = function (csv) {
            var config = new configs.PerformConfig();
            config.id = csvGetInt(csv, this.GetHeadIndex("id"));
            config.building = csvGetInt(csv, this.GetHeadIndex("building"));
            config.weight = csvGetInt(csv, this.GetHeadIndex("weight"));
            config.event = toIntArray(csvGetString(csv, this.GetHeadIndex("event")));
            config.tips = csvGetString(csv, this.GetHeadIndex("tips"));
            this.addConfig(config);
        };
        return PerformConfigReaderStruct;
    }(configs.CsvConfigRender));
    configs.PerformConfigReaderStruct = PerformConfigReaderStruct;
})(configs || (configs = {}));
//# sourceMappingURL=PerformConfigReaderStruct.js.map