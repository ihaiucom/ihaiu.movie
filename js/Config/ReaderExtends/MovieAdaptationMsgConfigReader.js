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
    var MovieAdaptationMsgConfigReader = /** @class */ (function (_super) {
        __extends(MovieAdaptationMsgConfigReader, _super);
        function MovieAdaptationMsgConfigReader() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        MovieAdaptationMsgConfigReader.prototype.getStoryShootTypeTip = function (typeValue) {
            var list = this.getConfigList();
            var result = "";
            for (var i = 0; i < list.length; i++) {
                if (typeValue >= list[i].adaptation_min && typeValue < list[i].adaptation_max) {
                    result = list[i].msg;
                    break;
                }
            }
            return result;
        };
        return MovieAdaptationMsgConfigReader;
    }(configs.MovieAdaptationMsgConfigReaderStruct));
    configs.MovieAdaptationMsgConfigReader = MovieAdaptationMsgConfigReader;
})(configs || (configs = {}));
//# sourceMappingURL=MovieAdaptationMsgConfigReader.js.map