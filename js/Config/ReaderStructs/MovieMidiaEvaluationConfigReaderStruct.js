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
    var MovieMidiaEvaluationConfigReaderStruct = /** @class */ (function (_super) {
        __extends(MovieMidiaEvaluationConfigReaderStruct, _super);
        function MovieMidiaEvaluationConfigReaderStruct() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.tableName = "MovieMidiaEvaluation";
            return _this;
        }
        MovieMidiaEvaluationConfigReaderStruct.prototype.ParseCsv = function (csv) {
            var config = new configs.MovieMidiaEvaluationConfig();
            config.id = csvGetInt(csv, this.GetHeadIndex("id"));
            config.media_id = csvGetInt(csv, this.GetHeadIndex("media_id"));
            config.zh_cn_name = csvGetString(csv, this.GetHeadIndex("zh_cn_name"));
            config.zh_cn_commentators = csvGetString(csv, this.GetHeadIndex("zh_cn_commentators"));
            config.min_score = csvGetFloat(csv, this.GetHeadIndex("min_score"));
            config.max_score = csvGetFloat(csv, this.GetHeadIndex("max_score"));
            config.zh_cn_content = csvGetString(csv, this.GetHeadIndex("zh_cn_content"));
            config.praise = toIntArray(csvGetString(csv, this.GetHeadIndex("praise")));
            config.pic = csvGetInt(csv, this.GetHeadIndex("pic"));
            this.addConfig(config);
        };
        return MovieMidiaEvaluationConfigReaderStruct;
    }(configs.CsvConfigRender));
    configs.MovieMidiaEvaluationConfigReaderStruct = MovieMidiaEvaluationConfigReaderStruct;
})(configs || (configs = {}));
//# sourceMappingURL=MovieMidiaEvaluationConfigReaderStruct.js.map