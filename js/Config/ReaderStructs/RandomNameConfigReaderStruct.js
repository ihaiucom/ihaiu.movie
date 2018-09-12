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
    var RandomNameConfigReaderStruct = /** @class */ (function (_super) {
        __extends(RandomNameConfigReaderStruct, _super);
        function RandomNameConfigReaderStruct() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.tableName = "RandomName";
            return _this;
        }
        RandomNameConfigReaderStruct.prototype.ParseCsv = function (csv) {
            var config = new configs.RandomNameConfig();
            config.id = csvGetInt(csv, this.GetHeadIndex("id"));
            config.text = csvGetString(csv, this.GetHeadIndex("text"));
            this.addConfig(config);
        };
        return RandomNameConfigReaderStruct;
    }(configs.CsvConfigRender));
    configs.RandomNameConfigReaderStruct = RandomNameConfigReaderStruct;
})(configs || (configs = {}));
//# sourceMappingURL=RandomNameConfigReaderStruct.js.map