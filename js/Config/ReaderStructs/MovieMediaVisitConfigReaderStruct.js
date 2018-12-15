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
    var MovieMediaVisitConfigReaderStruct = /** @class */ (function (_super) {
        __extends(MovieMediaVisitConfigReaderStruct, _super);
        function MovieMediaVisitConfigReaderStruct() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.tableName = "MovieMediaVisit";
            return _this;
        }
        MovieMediaVisitConfigReaderStruct.prototype.ParseCsv = function (csv) {
            var config = new configs.MovieMediaVisitConfig();
            config.id = csvGetInt(csv, this.GetHeadIndex("id"));
            config.mediaId = csvGetInt(csv, this.GetHeadIndex("mediaId"));
            config.level = csvGetInt(csv, this.GetHeadIndex("level"));
            config.zh_cn_name = csvGetString(csv, this.GetHeadIndex("zh_cn_name"));
            config.levelup_req = csvGetInt(csv, this.GetHeadIndex("levelup_req"));
            config.cost_id = csvGetInt(csv, this.GetHeadIndex("cost_id"));
            config.cost_num = csvGetInt(csv, this.GetHeadIndex("cost_num"));
            config.min_expection = csvGetInt(csv, this.GetHeadIndex("min_expection"));
            config.max_expection = csvGetInt(csv, this.GetHeadIndex("max_expection"));
            config.pic = csvGetInt(csv, this.GetHeadIndex("pic"));
            this.addConfig(config);
        };
        return MovieMediaVisitConfigReaderStruct;
    }(configs.CsvConfigRender));
    configs.MovieMediaVisitConfigReaderStruct = MovieMediaVisitConfigReaderStruct;
})(configs || (configs = {}));
//# sourceMappingURL=MovieMediaVisitConfigReaderStruct.js.map