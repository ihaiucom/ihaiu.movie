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
    var StoryRefreshPriceConfigReaderStruct = /** @class */ (function (_super) {
        __extends(StoryRefreshPriceConfigReaderStruct, _super);
        function StoryRefreshPriceConfigReaderStruct() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.tableName = "StoryRefreshPrice";
            return _this;
        }
        StoryRefreshPriceConfigReaderStruct.prototype.ParseCsv = function (csv) {
            var config = new configs.StoryRefreshPriceConfig();
            config.id = csvGetInt(csv, this.GetHeadIndex("id"));
            config.price = configs.DTItemNum.parse(csvGetString(csv, this.GetHeadIndex("price")));
            this.addConfig(config);
        };
        return StoryRefreshPriceConfigReaderStruct;
    }(configs.CsvConfigRender));
    configs.StoryRefreshPriceConfigReaderStruct = StoryRefreshPriceConfigReaderStruct;
})(configs || (configs = {}));
//# sourceMappingURL=StoryRefreshPriceConfigReaderStruct.js.map