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
    var StreetConfigReaderStruct = /** @class */ (function (_super) {
        __extends(StreetConfigReaderStruct, _super);
        function StreetConfigReaderStruct() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.tableName = "Street";
            return _this;
        }
        StreetConfigReaderStruct.prototype.ParseCsv = function (csv) {
            var config = new configs.StreetConfig();
            config.id = csvGetInt(csv, this.GetHeadIndex("id"));
            config.zh_cn_name = csvGetString(csv, this.GetHeadIndex("zh_cn_name"));
            config.en_name = csvGetString(csv, this.GetHeadIndex("en_name"));
            config.city_schedule = csvGetInt(csv, this.GetHeadIndex("city_schedule"));
            config.position = configs.DTVector2.parse(csvGetString(csv, this.GetHeadIndex("position")));
            config.spokesperson_sex = csvGetInt(csv, this.GetHeadIndex("spokesperson_sex"));
            config.spokesperson_Continents = csvGetInt(csv, this.GetHeadIndex("spokesperson_Continents"));
            config.spokesperson_type = csvGetInt(csv, this.GetHeadIndex("spokesperson_type"));
            config.spokesperson_age = csvGetInt(csv, this.GetHeadIndex("spokesperson_age"));
            config.spokesperson_scene = csvGetInt(csv, this.GetHeadIndex("spokesperson_scene"));
            config.spokesperson_performance = csvGetInt(csv, this.GetHeadIndex("spokesperson_performance"));
            config.spokesperson_plot = csvGetInt(csv, this.GetHeadIndex("spokesperson_plot"));
            config.spokesperson_art = csvGetInt(csv, this.GetHeadIndex("spokesperson_art"));
            config.spokesperson_entertainment = csvGetInt(csv, this.GetHeadIndex("spokesperson_entertainment"));
            config.publicize_schedule = csvGetInt(csv, this.GetHeadIndex("publicize_schedule"));
            config.publicize_cost = csvGetInt(csv, this.GetHeadIndex("publicize_cost"));
            config.once_reward = csvGetInt(csv, this.GetHeadIndex("once_reward"));
            config.finale_reward = configs.DTItemNum.parseArray(csvGetString(csv, this.GetHeadIndex("finale_reward")));
            config.expect = csvGetInt(csv, this.GetHeadIndex("expect"));
            config.pre_id = csvGetInt(csv, this.GetHeadIndex("pre_id"));
            config.next_stage = csvGetInt(csv, this.GetHeadIndex("next_stage"));
            config.city = csvGetInt(csv, this.GetHeadIndex("city"));
            this.addConfig(config);
        };
        return StreetConfigReaderStruct;
    }(configs.CsvConfigRender));
    configs.StreetConfigReaderStruct = StreetConfigReaderStruct;
})(configs || (configs = {}));
//# sourceMappingURL=StreetConfigReaderStruct.js.map