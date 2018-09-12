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
    var MovieShootTypeConfigReaderStruct = /** @class */ (function (_super) {
        __extends(MovieShootTypeConfigReaderStruct, _super);
        function MovieShootTypeConfigReaderStruct() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.tableName = "MovieShootType";
            return _this;
        }
        MovieShootTypeConfigReaderStruct.prototype.ParseCsv = function (csv) {
            var config = new configs.MovieShootTypeConfig();
            config.id = csvGetInt(csv, this.GetHeadIndex("id"));
            config.zh_cn_name = csvGetString(csv, this.GetHeadIndex("zh_cn_name"));
            config.zh_cn_type_des = csvGetString(csv, this.GetHeadIndex("zh_cn_type_des"));
            config.item_id = csvGetInt(csv, this.GetHeadIndex("item_id"));
            config.item_num = csvGetInt(csv, this.GetHeadIndex("item_num"));
            config.pic = csvGetInt(csv, this.GetHeadIndex("pic"));
            this.addConfig(config);
        };
        return MovieShootTypeConfigReaderStruct;
    }(configs.CsvConfigRender));
    configs.MovieShootTypeConfigReaderStruct = MovieShootTypeConfigReaderStruct;
})(configs || (configs = {}));
//# sourceMappingURL=MovieShootTypeConfigReaderStruct.js.map