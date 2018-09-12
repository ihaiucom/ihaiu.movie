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
    var MovieDropConfigReaderStruct = /** @class */ (function (_super) {
        __extends(MovieDropConfigReaderStruct, _super);
        function MovieDropConfigReaderStruct() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.tableName = "MovieDrop";
            return _this;
        }
        MovieDropConfigReaderStruct.prototype.ParseCsv = function (csv) {
            var config = new configs.MovieDropConfig();
            config.id = csvGetInt(csv, this.GetHeadIndex("id"));
            config.gain_level = csvGetInt(csv, this.GetHeadIndex("gain_level"));
            config.zh_cn_gain_name = csvGetString(csv, this.GetHeadIndex("zh_cn_gain_name"));
            config.gain_pic = csvGetInt(csv, this.GetHeadIndex("gain_pic"));
            config.zh_cn_name = csvGetString(csv, this.GetHeadIndex("zh_cn_name"));
            config.order_num = csvGetInt(csv, this.GetHeadIndex("order_num"));
            config.oreder_qua = toIntArray(csvGetString(csv, this.GetHeadIndex("oreder_qua")));
            config.expect = csvGetInt(csv, this.GetHeadIndex("expect"));
            config.fixed_drop = configs.DTItemNum.parseArray(csvGetString(csv, this.GetHeadIndex("fixed_drop")));
            config.drop_num = csvGetInt(csv, this.GetHeadIndex("drop_num"));
            config.drop_item = toIntArray(csvGetString(csv, this.GetHeadIndex("drop_item")));
            config.item_num = toIntArray(csvGetString(csv, this.GetHeadIndex("item_num")));
            config.base_fans = csvGetInt(csv, this.GetHeadIndex("base_fans"));
            this.addConfig(config);
        };
        return MovieDropConfigReaderStruct;
    }(configs.CsvConfigRender));
    configs.MovieDropConfigReaderStruct = MovieDropConfigReaderStruct;
})(configs || (configs = {}));
//# sourceMappingURL=MovieDropConfigReaderStruct.js.map