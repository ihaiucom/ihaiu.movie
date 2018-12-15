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
    var MovieAdaptationMsgConfigReaderStruct = /** @class */ (function (_super) {
        __extends(MovieAdaptationMsgConfigReaderStruct, _super);
        function MovieAdaptationMsgConfigReaderStruct() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.tableName = "MovieAdaptationMsg";
            return _this;
        }
        MovieAdaptationMsgConfigReaderStruct.prototype.ParseCsv = function (csv) {
            var config = new configs.MovieAdaptationMsgConfig();
            config.id = csvGetInt(csv, this.GetHeadIndex("id"));
            config.name = csvGetString(csv, this.GetHeadIndex("name"));
            config.adaptation_min = csvGetInt(csv, this.GetHeadIndex("adaptation_min"));
            config.adaptation_max = csvGetInt(csv, this.GetHeadIndex("adaptation_max"));
            config.zh_cn_msg1 = csvGetString(csv, this.GetHeadIndex("zh_cn_msg1"));
            config.zh_cn_msg2 = csvGetString(csv, this.GetHeadIndex("zh_cn_msg2"));
            config.zh_cn_msg3 = csvGetString(csv, this.GetHeadIndex("zh_cn_msg3"));
            this.addConfig(config);
        };
        return MovieAdaptationMsgConfigReaderStruct;
    }(configs.CsvConfigRender));
    configs.MovieAdaptationMsgConfigReaderStruct = MovieAdaptationMsgConfigReaderStruct;
})(configs || (configs = {}));
//# sourceMappingURL=MovieAdaptationMsgConfigReaderStruct.js.map