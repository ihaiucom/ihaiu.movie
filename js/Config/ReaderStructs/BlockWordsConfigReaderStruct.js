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
    var BlockWordsConfigReaderStruct = /** @class */ (function (_super) {
        __extends(BlockWordsConfigReaderStruct, _super);
        function BlockWordsConfigReaderStruct() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.tableName = "BlockWords";
            return _this;
        }
        BlockWordsConfigReaderStruct.prototype.ParseCsv = function (csv) {
            var config = new configs.BlockWordsConfig();
            config.id = csvGetInt(csv, this.GetHeadIndex("id"));
            config.text = csvGetString(csv, this.GetHeadIndex("text"));
            this.addConfig(config);
        };
        return BlockWordsConfigReaderStruct;
    }(configs.CsvConfigRender));
    configs.BlockWordsConfigReaderStruct = BlockWordsConfigReaderStruct;
})(configs || (configs = {}));
//# sourceMappingURL=BlockWordsConfigReaderStruct.js.map