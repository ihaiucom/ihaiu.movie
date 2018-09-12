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
    var MovieMidiaEvaluationConfigReader = /** @class */ (function (_super) {
        __extends(MovieMidiaEvaluationConfigReader, _super);
        function MovieMidiaEvaluationConfigReader() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        MovieMidiaEvaluationConfigReader.prototype.getMovieMidiaEva = function (val, mediaId) {
            var list = this.getConfigList();
            var result;
            for (var i = 0; i < list.length; i++) {
                if (mediaId === list[i].media_id && val >= list[i].min_score && val < list[i].max_score) {
                    result = list[i];
                    break;
                }
            }
            return result;
        };
        return MovieMidiaEvaluationConfigReader;
    }(configs.MovieMidiaEvaluationConfigReaderStruct));
    configs.MovieMidiaEvaluationConfigReader = MovieMidiaEvaluationConfigReader;
})(configs || (configs = {}));
//# sourceMappingURL=MovieMidiaEvaluationConfigReader.js.map