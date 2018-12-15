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
    var CompleteConfigReaderStruct = /** @class */ (function (_super) {
        __extends(CompleteConfigReaderStruct, _super);
        function CompleteConfigReaderStruct() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.tableName = "Complete";
            return _this;
        }
        CompleteConfigReaderStruct.prototype.ParseCsv = function (csv) {
            var config = new configs.CompleteConfig();
            config.id = csvGetInt(csv, this.GetHeadIndex("id"));
            config.module = csvGetString(csv, this.GetHeadIndex("module"));
            config.completion = csvGetInt(csv, this.GetHeadIndex("completion"));
            config.reward = configs.DTItemNum.parseArray(csvGetString(csv, this.GetHeadIndex("reward")));
            this.addConfig(config);
        };
        return CompleteConfigReaderStruct;
    }(configs.CsvConfigRender));
    configs.CompleteConfigReaderStruct = CompleteConfigReaderStruct;
})(configs || (configs = {}));
//# sourceMappingURL=CompleteConfigReaderStruct.js.map