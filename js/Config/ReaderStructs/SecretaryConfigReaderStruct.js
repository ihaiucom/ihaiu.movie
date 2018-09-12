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
    var SecretaryConfigReaderStruct = /** @class */ (function (_super) {
        __extends(SecretaryConfigReaderStruct, _super);
        function SecretaryConfigReaderStruct() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.tableName = "Secretary";
            return _this;
        }
        SecretaryConfigReaderStruct.prototype.ParseCsv = function (csv) {
            var config = new configs.SecretaryConfig();
            config.id = csvGetInt(csv, this.GetHeadIndex("id"));
            config.key = csvGetString(csv, this.GetHeadIndex("key"));
            config.zh_cn_info = csvGetString(csv, this.GetHeadIndex("zh_cn_info"));
            config.par = csvGetInt(csv, this.GetHeadIndex("par"));
            config.description = csvGetString(csv, this.GetHeadIndex("description"));
            this.addConfig(config);
        };
        return SecretaryConfigReaderStruct;
    }(configs.CsvConfigRender));
    configs.SecretaryConfigReaderStruct = SecretaryConfigReaderStruct;
})(configs || (configs = {}));
//# sourceMappingURL=SecretaryConfigReaderStruct.js.map