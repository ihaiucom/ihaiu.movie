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
    var SecretaryTypeConfigReaderStruct = /** @class */ (function (_super) {
        __extends(SecretaryTypeConfigReaderStruct, _super);
        function SecretaryTypeConfigReaderStruct() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.tableName = "SecretaryType";
            return _this;
        }
        SecretaryTypeConfigReaderStruct.prototype.ParseCsv = function (csv) {
            var config = new configs.SecretaryTypeConfig();
            config.id = csvGetInt(csv, this.GetHeadIndex("id"));
            config.sex = csvGetString(csv, this.GetHeadIndex("sex"));
            config.pic = csvGetString(csv, this.GetHeadIndex("pic"));
            config.picid = csvGetInt(csv, this.GetHeadIndex("picid"));
            config.zh_cn_name = csvGetString(csv, this.GetHeadIndex("zh_cn_name"));
            this.addConfig(config);
        };
        return SecretaryTypeConfigReaderStruct;
    }(configs.CsvConfigRender));
    configs.SecretaryTypeConfigReaderStruct = SecretaryTypeConfigReaderStruct;
})(configs || (configs = {}));
//# sourceMappingURL=SecretaryTypeConfigReaderStruct.js.map