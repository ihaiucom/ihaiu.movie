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
    var LoaderConfigReaderStruct = /** @class */ (function (_super) {
        __extends(LoaderConfigReaderStruct, _super);
        function LoaderConfigReaderStruct() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.tableName = "Loader";
            return _this;
        }
        LoaderConfigReaderStruct.prototype.ParseCsv = function (csv) {
            var config = new configs.LoaderConfig();
            config.id = csvGetInt(csv, this.GetHeadIndex("id"));
            config.name = csvGetString(csv, this.GetHeadIndex("name"));
            config.isShowCircle = csvGetBoolean(csv, this.GetHeadIndex("isShowCircle"));
            this.addConfig(config);
        };
        return LoaderConfigReaderStruct;
    }(configs.CsvConfigRender));
    configs.LoaderConfigReaderStruct = LoaderConfigReaderStruct;
})(configs || (configs = {}));
//# sourceMappingURL=LoaderConfigReaderStruct.js.map