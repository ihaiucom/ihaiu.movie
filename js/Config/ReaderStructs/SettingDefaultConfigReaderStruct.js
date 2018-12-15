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
    var SettingDefaultConfigReaderStruct = /** @class */ (function (_super) {
        __extends(SettingDefaultConfigReaderStruct, _super);
        function SettingDefaultConfigReaderStruct() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.tableName = "SettingDefault";
            return _this;
        }
        SettingDefaultConfigReaderStruct.prototype.ParseCsv = function (csv) {
            var config = new configs.SettingDefaultConfig();
            config.id = csvGetInt(csv, this.GetHeadIndex("id"));
            config.key = csvGetString(csv, this.GetHeadIndex("key"));
            config.zh_cn_name = csvGetString(csv, this.GetHeadIndex("zh_cn_name"));
            config.icon = csvGetInt(csv, this.GetHeadIndex("icon"));
            config._default = csvGetInt(csv, this.GetHeadIndex("default"));
            config._switch = csvGetBoolean(csv, this.GetHeadIndex("switch"));
            config.popup = csvGetString(csv, this.GetHeadIndex("popup"));
            this.addConfig(config);
        };
        return SettingDefaultConfigReaderStruct;
    }(configs.CsvConfigRender));
    configs.SettingDefaultConfigReaderStruct = SettingDefaultConfigReaderStruct;
})(configs || (configs = {}));
//# sourceMappingURL=SettingDefaultConfigReaderStruct.js.map