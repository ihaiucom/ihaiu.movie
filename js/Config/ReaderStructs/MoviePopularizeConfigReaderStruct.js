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
    var MoviePopularizeConfigReaderStruct = /** @class */ (function (_super) {
        __extends(MoviePopularizeConfigReaderStruct, _super);
        function MoviePopularizeConfigReaderStruct() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.tableName = "MoviePopularize";
            return _this;
        }
        MoviePopularizeConfigReaderStruct.prototype.ParseCsv = function (csv) {
            var config = new configs.MoviePopularizeConfig();
            config.id = csvGetInt(csv, this.GetHeadIndex("id"));
            config.tips = csvGetString(csv, this.GetHeadIndex("tips"));
            config.cost_id = csvGetInt(csv, this.GetHeadIndex("cost_id"));
            config.cost_num = csvGetInt(csv, this.GetHeadIndex("cost_num"));
            config.increase = csvGetFloat(csv, this.GetHeadIndex("increase"));
            this.addConfig(config);
        };
        return MoviePopularizeConfigReaderStruct;
    }(configs.CsvConfigRender));
    configs.MoviePopularizeConfigReaderStruct = MoviePopularizeConfigReaderStruct;
})(configs || (configs = {}));
//# sourceMappingURL=MoviePopularizeConfigReaderStruct.js.map