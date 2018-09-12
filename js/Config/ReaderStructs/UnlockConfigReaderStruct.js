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
    var UnlockConfigReaderStruct = /** @class */ (function (_super) {
        __extends(UnlockConfigReaderStruct, _super);
        function UnlockConfigReaderStruct() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.tableName = "Unlock";
            return _this;
        }
        UnlockConfigReaderStruct.prototype.ParseCsv = function (csv) {
            var config = new configs.UnlockConfig();
            config.id = csvGetInt(csv, this.GetHeadIndex("id"));
            config.zh_cn_name = csvGetString(csv, this.GetHeadIndex("zh_cn_name"));
            config.icon_type = csvGetInt(csv, this.GetHeadIndex("icon_type"));
            config.open_type = csvGetInt(csv, this.GetHeadIndex("open_type"));
            config.open_data = csvGetInt(csv, this.GetHeadIndex("open_data"));
            config.plot = csvGetInt(csv, this.GetHeadIndex("plot"));
            config.time = csvGetInt(csv, this.GetHeadIndex("time"));
            config.close_type = csvGetInt(csv, this.GetHeadIndex("close_type"));
            config._continue = csvGetInt(csv, this.GetHeadIndex("continue"));
            config.zh_cn_touch_txt = csvGetString(csv, this.GetHeadIndex("zh_cn_touch_txt"));
            config.tips = csvGetString(csv, this.GetHeadIndex("tips"));
            this.addConfig(config);
        };
        return UnlockConfigReaderStruct;
    }(configs.CsvConfigRender));
    configs.UnlockConfigReaderStruct = UnlockConfigReaderStruct;
})(configs || (configs = {}));
//# sourceMappingURL=UnlockConfigReaderStruct.js.map