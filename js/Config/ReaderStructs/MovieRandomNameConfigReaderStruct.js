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
    var MovieRandomNameConfigReaderStruct = /** @class */ (function (_super) {
        __extends(MovieRandomNameConfigReaderStruct, _super);
        function MovieRandomNameConfigReaderStruct() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.path = "MovieRandomName";
            return _this;
        }
        MovieRandomNameConfigReaderStruct.prototype.ParseCsv = function (csv) {
            var config = new configs.MovieRandomNameConfig();
            config.id = csvGetInt(csv, this.GetHeadIndex("id"));
            config.names = toStringArray(csvGetString(csv, this.GetHeadIndex("names")));
            config.tips = csvGetString(csv, this.GetHeadIndex("tips"));
            this.addConfig(config);
        };
        return MovieRandomNameConfigReaderStruct;
    }(configs.CsvConfigRender));
    configs.MovieRandomNameConfigReaderStruct = MovieRandomNameConfigReaderStruct;
})(configs || (configs = {}));
//# sourceMappingURL=MovieRandomNameConfigReaderStruct.js.map