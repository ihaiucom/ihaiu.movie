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
    var MovieMidiaEvaluationMsgConfigReaderStruct = /** @class */ (function (_super) {
        __extends(MovieMidiaEvaluationMsgConfigReaderStruct, _super);
        function MovieMidiaEvaluationMsgConfigReaderStruct() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.tableName = "MovieMidiaEvaluationMsg";
            return _this;
        }
        MovieMidiaEvaluationMsgConfigReaderStruct.prototype.ParseCsv = function (csv) {
            var config = new configs.MovieMidiaEvaluationMsgConfig();
            config.id = csvGetInt(csv, this.GetHeadIndex("id"));
            config.name = csvGetString(csv, this.GetHeadIndex("name"));
            config.score_min = csvGetInt(csv, this.GetHeadIndex("score_min"));
            config.scor_max = csvGetInt(csv, this.GetHeadIndex("scor_max"));
            config.zh_cn_msg = csvGetString(csv, this.GetHeadIndex("zh_cn_msg"));
            this.addConfig(config);
        };
        return MovieMidiaEvaluationMsgConfigReaderStruct;
    }(configs.CsvConfigRender));
    configs.MovieMidiaEvaluationMsgConfigReaderStruct = MovieMidiaEvaluationMsgConfigReaderStruct;
})(configs || (configs = {}));
//# sourceMappingURL=MovieMidiaEvaluationMsgConfigReaderStruct.js.map