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
    var WriterLevelConfigReaderStruct = /** @class */ (function (_super) {
        __extends(WriterLevelConfigReaderStruct, _super);
        function WriterLevelConfigReaderStruct() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.tableName = "WriterLevel";
            return _this;
        }
        WriterLevelConfigReaderStruct.prototype.ParseCsv = function (csv) {
            var config = new configs.WriterLevelConfig();
            config.id = csvGetInt(csv, this.GetHeadIndex("id"));
            config.zh_cn_name = csvGetString(csv, this.GetHeadIndex("zh_cn_name"));
            config.level = csvGetInt(csv, this.GetHeadIndex("level"));
            config.ability = csvGetInt(csv, this.GetHeadIndex("ability"));
            config.levelup_cost = configs.DTItemNum.parseArray(csvGetString(csv, this.GetHeadIndex("levelup_cost")));
            this.addConfig(config);
        };
        return WriterLevelConfigReaderStruct;
    }(configs.CsvConfigRender));
    configs.WriterLevelConfigReaderStruct = WriterLevelConfigReaderStruct;
})(configs || (configs = {}));
//# sourceMappingURL=WriterLevelConfigReaderStruct.js.map