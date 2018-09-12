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
    var PropertyConfigReaderStruct = /** @class */ (function (_super) {
        __extends(PropertyConfigReaderStruct, _super);
        function PropertyConfigReaderStruct() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.tableName = "Property";
            return _this;
        }
        PropertyConfigReaderStruct.prototype.ParseCsv = function (csv) {
            var config = new configs.PropertyConfig();
            config.id = csvGetInt(csv, this.GetHeadIndex("id"));
            config.type = csvGetInt(csv, this.GetHeadIndex("type"));
            config.field = csvGetString(csv, this.GetHeadIndex("field"));
            config.enName = csvGetString(csv, this.GetHeadIndex("enName"));
            config.zh_cn_name = csvGetString(csv, this.GetHeadIndex("zh_cn_name"));
            config.icon = csvGetInt(csv, this.GetHeadIndex("icon"));
            config.tip = csvGetString(csv, this.GetHeadIndex("tip"));
            this.addConfig(config);
        };
        return PropertyConfigReaderStruct;
    }(configs.CsvConfigRender));
    configs.PropertyConfigReaderStruct = PropertyConfigReaderStruct;
})(configs || (configs = {}));
//# sourceMappingURL=PropertyConfigReaderStruct.js.map