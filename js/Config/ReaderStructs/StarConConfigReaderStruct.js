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
    var StarConConfigReaderStruct = /** @class */ (function (_super) {
        __extends(StarConConfigReaderStruct, _super);
        function StarConConfigReaderStruct() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.tableName = "StarCon";
            return _this;
        }
        StarConConfigReaderStruct.prototype.ParseCsv = function (csv) {
            var config = new configs.StarConConfig();
            config.id = csvGetInt(csv, this.GetHeadIndex("id"));
            config.story_star_con = csvGetInt(csv, this.GetHeadIndex("story_star_con"));
            config.att_con = csvGetInt(csv, this.GetHeadIndex("att_con"));
            config.count = csvGetInt(csv, this.GetHeadIndex("count"));
            config.evaluate_protect = csvGetInt(csv, this.GetHeadIndex("evaluate_protect"));
            config.opinions_protect = csvGetInt(csv, this.GetHeadIndex("opinions_protect"));
            this.addConfig(config);
        };
        return StarConConfigReaderStruct;
    }(configs.CsvConfigRender));
    configs.StarConConfigReaderStruct = StarConConfigReaderStruct;
})(configs || (configs = {}));
//# sourceMappingURL=StarConConfigReaderStruct.js.map