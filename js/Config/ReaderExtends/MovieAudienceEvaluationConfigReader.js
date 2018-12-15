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
    var MovieAudienceEvaluationConfigReader = /** @class */ (function (_super) {
        __extends(MovieAudienceEvaluationConfigReader, _super);
        function MovieAudienceEvaluationConfigReader() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        MovieAudienceEvaluationConfigReader.prototype.getMovieAudience = function (val) {
            if (val < 10)
                val = 10;
            if (val > 99)
                val = 99;
            var list = this.getConfigList();
            var result;
            var listResult = Array();
            for (var i = 0; i < list.length; i++) {
                if (val >= list[i].min_score && val < list[i].max_score) {
                    listResult.push(list[i]);
                }
            }
            return listResult[Random.range(0, listResult.length)];
        };
        return MovieAudienceEvaluationConfigReader;
    }(configs.MovieAudienceEvaluationConfigReaderStruct));
    configs.MovieAudienceEvaluationConfigReader = MovieAudienceEvaluationConfigReader;
})(configs || (configs = {}));
//# sourceMappingURL=MovieAudienceEvaluationConfigReader.js.map