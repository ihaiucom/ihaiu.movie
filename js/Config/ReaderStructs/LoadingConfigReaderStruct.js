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
    var LoadingConfigReaderStruct = /** @class */ (function (_super) {
        __extends(LoadingConfigReaderStruct, _super);
        function LoadingConfigReaderStruct() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.tableName = "Loading";
            return _this;
        }
        LoadingConfigReaderStruct.prototype.ParseCsv = function (csv) {
            var config = new configs.LoadingConfig();
            config.id = csvGetInt(csv, this.GetHeadIndex("id"));
            config.text = csvGetString(csv, this.GetHeadIndex("text"));
            this.addConfig(config);
        };
        return LoadingConfigReaderStruct;
    }(configs.CsvConfigRender));
    configs.LoadingConfigReaderStruct = LoadingConfigReaderStruct;
})(configs || (configs = {}));
//# sourceMappingURL=LoadingConfigReaderStruct.js.map