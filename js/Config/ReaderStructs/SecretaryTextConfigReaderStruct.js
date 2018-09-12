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
    var SecretaryTextConfigReaderStruct = /** @class */ (function (_super) {
        __extends(SecretaryTextConfigReaderStruct, _super);
        function SecretaryTextConfigReaderStruct() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.tableName = "SecretaryText";
            return _this;
        }
        SecretaryTextConfigReaderStruct.prototype.ParseCsv = function (csv) {
            var config = new configs.SecretaryTextConfig();
            config.id = csvGetInt(csv, this.GetHeadIndex("id"));
            config.key = csvGetString(csv, this.GetHeadIndex("key"));
            config.zh_cn_text = csvGetString(csv, this.GetHeadIndex("zh_cn_text"));
            config.info = csvGetString(csv, this.GetHeadIndex("info"));
            this.addConfig(config);
        };
        return SecretaryTextConfigReaderStruct;
    }(configs.CsvConfigRender));
    configs.SecretaryTextConfigReaderStruct = SecretaryTextConfigReaderStruct;
})(configs || (configs = {}));
//# sourceMappingURL=SecretaryTextConfigReaderStruct.js.map