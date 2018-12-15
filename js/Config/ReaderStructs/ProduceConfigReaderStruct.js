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
    var ProduceConfigReaderStruct = /** @class */ (function (_super) {
        __extends(ProduceConfigReaderStruct, _super);
        function ProduceConfigReaderStruct() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.tableName = "Produce";
            return _this;
        }
        ProduceConfigReaderStruct.prototype.ParseCsv = function (csv) {
            var config = new configs.ProduceConfig();
            config.id = csvGetInt(csv, this.GetHeadIndex("id"));
            config.zh_cn_name = csvGetString(csv, this.GetHeadIndex("zh_cn_name"));
            config.item = csvGetInt(csv, this.GetHeadIndex("item"));
            config.zh_cn_tip = csvGetString(csv, this.GetHeadIndex("zh_cn_tip"));
            config.grade = csvGetInt(csv, this.GetHeadIndex("grade"));
            config.unlock_level = csvGetInt(csv, this.GetHeadIndex("unlock_level"));
            config.unlock_building = csvGetInt(csv, this.GetHeadIndex("unlock_building"));
            config.unlock_gold = configs.DTItemNum.parse(csvGetString(csv, this.GetHeadIndex("unlock_gold")));
            config.unlock_reward = configs.DTItemNum.parse(csvGetString(csv, this.GetHeadIndex("unlock_reward")));
            config.cd = csvGetInt(csv, this.GetHeadIndex("cd"));
            config.icon = csvGetInt(csv, this.GetHeadIndex("icon"));
            config.cheer_sex = csvGetInt(csv, this.GetHeadIndex("cheer_sex"));
            config.cheer_continents = csvGetInt(csv, this.GetHeadIndex("cheer_continents"));
            config.cheer_type = csvGetInt(csv, this.GetHeadIndex("cheer_type"));
            config.cheer_age = csvGetInt(csv, this.GetHeadIndex("cheer_age"));
            config.pre_id = csvGetInt(csv, this.GetHeadIndex("pre_id"));
            config.next_line = csvGetInt(csv, this.GetHeadIndex("next_line"));
            this.addConfig(config);
        };
        return ProduceConfigReaderStruct;
    }(configs.CsvConfigRender));
    configs.ProduceConfigReaderStruct = ProduceConfigReaderStruct;
})(configs || (configs = {}));
//# sourceMappingURL=ProduceConfigReaderStruct.js.map