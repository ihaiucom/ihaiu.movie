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
    var MediaVisitConfigReaderStruct = /** @class */ (function (_super) {
        __extends(MediaVisitConfigReaderStruct, _super);
        function MediaVisitConfigReaderStruct() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.path = "MediaVisit";
            return _this;
        }
        MediaVisitConfigReaderStruct.prototype.ParseCsv = function (csv) {
            var config = new configs.MediaVisitConfig();
            config.id = csvGetInt(csv, this.GetHeadIndex("id"));
            config.name = csvGetString(csv, this.GetHeadIndex("name"));
            config.name_tips = csvGetString(csv, this.GetHeadIndex("name_tips"));
            config.level = csvGetInt(csv, this.GetHeadIndex("level"));
            config.levelup_req = csvGetInt(csv, this.GetHeadIndex("levelup_req"));
            config.cost_id = csvGetInt(csv, this.GetHeadIndex("cost_id"));
            config.cost_num = csvGetInt(csv, this.GetHeadIndex("cost_num"));
            config.min_expection = csvGetInt(csv, this.GetHeadIndex("min_expection"));
            config.max_expection = csvGetInt(csv, this.GetHeadIndex("max_expection"));
            config.pic = csvGetInt(csv, this.GetHeadIndex("pic"));
            config.big_pic = csvGetInt(csv, this.GetHeadIndex("big_pic"));
            this.addConfig(config);
        };
        return MediaVisitConfigReaderStruct;
    }(configs.CsvConfigRender));
    configs.MediaVisitConfigReaderStruct = MediaVisitConfigReaderStruct;
})(configs || (configs = {}));
//# sourceMappingURL=MediaVisitConfigReaderStruct.js.map