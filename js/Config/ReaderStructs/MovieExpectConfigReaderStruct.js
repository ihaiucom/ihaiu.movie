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
    var MovieExpectConfigReaderStruct = /** @class */ (function (_super) {
        __extends(MovieExpectConfigReaderStruct, _super);
        function MovieExpectConfigReaderStruct() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.tableName = "MovieExpect";
            return _this;
        }
        MovieExpectConfigReaderStruct.prototype.ParseCsv = function (csv) {
            var config = new configs.MovieExpectConfig();
            config.id = csvGetInt(csv, this.GetHeadIndex("id"));
            config.zh_cn_name = csvGetString(csv, this.GetHeadIndex("zh_cn_name"));
            config.tips = csvGetString(csv, this.GetHeadIndex("tips"));
            config.expect_req_min = csvGetInt(csv, this.GetHeadIndex("expect_req_min"));
            config.expect_req_max = csvGetInt(csv, this.GetHeadIndex("expect_req_max"));
            config.pic = csvGetInt(csv, this.GetHeadIndex("pic"));
            config.gain_up = csvGetInt(csv, this.GetHeadIndex("gain_up"));
            config.zh_cn_pic_word = csvGetString(csv, this.GetHeadIndex("zh_cn_pic_word"));
            this.addConfig(config);
        };
        return MovieExpectConfigReaderStruct;
    }(configs.CsvConfigRender));
    configs.MovieExpectConfigReaderStruct = MovieExpectConfigReaderStruct;
})(configs || (configs = {}));
//# sourceMappingURL=MovieExpectConfigReaderStruct.js.map