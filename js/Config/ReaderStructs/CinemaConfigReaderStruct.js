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
    var CinemaConfigReaderStruct = /** @class */ (function (_super) {
        __extends(CinemaConfigReaderStruct, _super);
        function CinemaConfigReaderStruct() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.tableName = "Cinema";
            return _this;
        }
        CinemaConfigReaderStruct.prototype.ParseCsv = function (csv) {
            var config = new configs.CinemaConfig();
            config.id = csvGetInt(csv, this.GetHeadIndex("id"));
            config.zh_cn_name = csvGetString(csv, this.GetHeadIndex("zh_cn_name"));
            config.level = csvGetInt(csv, this.GetHeadIndex("level"));
            config.sign_level = csvGetInt(csv, this.GetHeadIndex("sign_level"));
            config.pic = csvGetInt(csv, this.GetHeadIndex("pic"));
            config.num = csvGetInt(csv, this.GetHeadIndex("num"));
            config.proportion = csvGetFloat(csv, this.GetHeadIndex("proportion"));
            config.favorite_actor = csvGetInt(csv, this.GetHeadIndex("favorite_actor"));
            config.increase = csvGetInt(csv, this.GetHeadIndex("increase"));
            config.unlock = csvGetInt(csv, this.GetHeadIndex("unlock"));
            this.addConfig(config);
        };
        return CinemaConfigReaderStruct;
    }(configs.CsvConfigRender));
    configs.CinemaConfigReaderStruct = CinemaConfigReaderStruct;
})(configs || (configs = {}));
//# sourceMappingURL=CinemaConfigReaderStruct.js.map