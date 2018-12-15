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
    var LanguageTypeConfigReaderStruct = /** @class */ (function (_super) {
        __extends(LanguageTypeConfigReaderStruct, _super);
        function LanguageTypeConfigReaderStruct() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.tableName = "LanguageType";
            return _this;
        }
        LanguageTypeConfigReaderStruct.prototype.ParseCsv = function (csv) {
            var config = new configs.LanguageTypeConfig();
            config.id = csvGetInt(csv, this.GetHeadIndex("id"));
            config.type = csvGetString(csv, this.GetHeadIndex("type"));
            config.info = csvGetString(csv, this.GetHeadIndex("info"));
            config.value = csvGetString(csv, this.GetHeadIndex("value"));
            config.languageswitch = csvGetInt(csv, this.GetHeadIndex("languageswitch"));
            this.addConfig(config);
        };
        return LanguageTypeConfigReaderStruct;
    }(configs.CsvConfigRender));
    configs.LanguageTypeConfigReaderStruct = LanguageTypeConfigReaderStruct;
})(configs || (configs = {}));
//# sourceMappingURL=LanguageTypeConfigReaderStruct.js.map