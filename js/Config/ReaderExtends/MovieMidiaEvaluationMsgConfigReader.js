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
    var MovieMidiaEvaluationMsgConfigReader = /** @class */ (function (_super) {
        __extends(MovieMidiaEvaluationMsgConfigReader, _super);
        function MovieMidiaEvaluationMsgConfigReader() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        MovieMidiaEvaluationMsgConfigReader.prototype.getMsgFoNotice = function (score) {
            var list = this.getConfigList();
            var result;
            for (var i = 0; i < list.length; i++) {
                if (score >= list[i].score_min && score < list[i].scor_max) {
                    result = list[i];
                    break;
                }
            }
            return result;
        };
        return MovieMidiaEvaluationMsgConfigReader;
    }(configs.MovieMidiaEvaluationMsgConfigReaderStruct));
    configs.MovieMidiaEvaluationMsgConfigReader = MovieMidiaEvaluationMsgConfigReader;
})(configs || (configs = {}));
//# sourceMappingURL=MovieMidiaEvaluationMsgConfigReader.js.map