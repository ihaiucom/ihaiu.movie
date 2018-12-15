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
    var SysTimeConfigReaderStruct = /** @class */ (function (_super) {
        __extends(SysTimeConfigReaderStruct, _super);
        function SysTimeConfigReaderStruct() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.tableName = "SysTime";
            return _this;
        }
        SysTimeConfigReaderStruct.prototype.ParseCsv = function (csv) {
            var config = new configs.SysTimeConfig();
            config.id = csvGetInt(csv, this.GetHeadIndex("id"));
            config.tips = csvGetString(csv, this.GetHeadIndex("tips"));
            config.hour = csvGetInt(csv, this.GetHeadIndex("hour"));
            config.min = csvGetInt(csv, this.GetHeadIndex("min"));
            config.sec = csvGetInt(csv, this.GetHeadIndex("sec"));
            this.addConfig(config);
        };
        return SysTimeConfigReaderStruct;
    }(configs.CsvConfigRender));
    configs.SysTimeConfigReaderStruct = SysTimeConfigReaderStruct;
})(configs || (configs = {}));
//# sourceMappingURL=SysTimeConfigReaderStruct.js.map