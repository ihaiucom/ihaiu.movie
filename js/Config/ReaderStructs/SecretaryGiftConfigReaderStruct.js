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
    var SecretaryGiftConfigReaderStruct = /** @class */ (function (_super) {
        __extends(SecretaryGiftConfigReaderStruct, _super);
        function SecretaryGiftConfigReaderStruct() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.tableName = "SecretaryGift";
            return _this;
        }
        SecretaryGiftConfigReaderStruct.prototype.ParseCsv = function (csv) {
            var config = new configs.SecretaryGiftConfig();
            config.id = csvGetInt(csv, this.GetHeadIndex("id"));
            config.type = csvGetInt(csv, this.GetHeadIndex("type"));
            config.items = configs.DTItemNum.parseArray(csvGetString(csv, this.GetHeadIndex("items")));
            config.info = csvGetString(csv, this.GetHeadIndex("info"));
            this.addConfig(config);
        };
        return SecretaryGiftConfigReaderStruct;
    }(configs.CsvConfigRender));
    configs.SecretaryGiftConfigReaderStruct = SecretaryGiftConfigReaderStruct;
})(configs || (configs = {}));
//# sourceMappingURL=SecretaryGiftConfigReaderStruct.js.map