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
    var OscarConfigReaderStruct = /** @class */ (function (_super) {
        __extends(OscarConfigReaderStruct, _super);
        function OscarConfigReaderStruct() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.tableName = "Oscar";
            return _this;
        }
        OscarConfigReaderStruct.prototype.ParseCsv = function (csv) {
            var config = new configs.OscarConfig();
            config.id = csvGetInt(csv, this.GetHeadIndex("id"));
            config.oscar_type = csvGetInt(csv, this.GetHeadIndex("oscar_type"));
            config.compere_type = csvGetInt(csv, this.GetHeadIndex("compere_type"));
            config.zh_cn_content = csvGetString(csv, this.GetHeadIndex("zh_cn_content"));
            config.content_duration = csvGetInt(csv, this.GetHeadIndex("content_duration"));
            config.act = csvGetString(csv, this.GetHeadIndex("act"));
            config.act_duration = csvGetInt(csv, this.GetHeadIndex("act_duration"));
            this.addConfig(config);
        };
        return OscarConfigReaderStruct;
    }(configs.CsvConfigRender));
    configs.OscarConfigReaderStruct = OscarConfigReaderStruct;
})(configs || (configs = {}));
//# sourceMappingURL=OscarConfigReaderStruct.js.map