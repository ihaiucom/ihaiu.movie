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
    var MovieAudienceEvaluationConfigReaderStruct = /** @class */ (function (_super) {
        __extends(MovieAudienceEvaluationConfigReaderStruct, _super);
        function MovieAudienceEvaluationConfigReaderStruct() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.tableName = "MovieAudienceEvaluation";
            return _this;
        }
        MovieAudienceEvaluationConfigReaderStruct.prototype.ParseCsv = function (csv) {
            var config = new configs.MovieAudienceEvaluationConfig();
            config.id = csvGetInt(csv, this.GetHeadIndex("id"));
            config.zh_cn_name = csvGetString(csv, this.GetHeadIndex("zh_cn_name"));
            config.sex = csvGetInt(csv, this.GetHeadIndex("sex"));
            config.pic = csvGetInt(csv, this.GetHeadIndex("pic"));
            config.tips = csvGetString(csv, this.GetHeadIndex("tips"));
            config.min_score = csvGetFloat(csv, this.GetHeadIndex("min_score"));
            config.max_score = csvGetFloat(csv, this.GetHeadIndex("max_score"));
            config.zh_cn_content = csvGetString(csv, this.GetHeadIndex("zh_cn_content"));
            this.addConfig(config);
        };
        return MovieAudienceEvaluationConfigReaderStruct;
    }(configs.CsvConfigRender));
    configs.MovieAudienceEvaluationConfigReaderStruct = MovieAudienceEvaluationConfigReaderStruct;
})(configs || (configs = {}));
//# sourceMappingURL=MovieAudienceEvaluationConfigReaderStruct.js.map