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
    var BuildingLevelConfigReaderStruct = /** @class */ (function (_super) {
        __extends(BuildingLevelConfigReaderStruct, _super);
        function BuildingLevelConfigReaderStruct() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.tableName = "BuildingLevel";
            return _this;
        }
        BuildingLevelConfigReaderStruct.prototype.ParseCsv = function (csv) {
            var config = new configs.BuildingLevelConfig();
            config.id = csvGetInt(csv, this.GetHeadIndex("id"));
            config.zh_cn_name = csvGetString(csv, this.GetHeadIndex("zh_cn_name"));
            config.type = csvGetInt(csv, this.GetHeadIndex("type"));
            config.level = csvGetInt(csv, this.GetHeadIndex("level"));
            config.cost = configs.DTItemNum.parseArray(csvGetString(csv, this.GetHeadIndex("cost")));
            config.level_req = csvGetInt(csv, this.GetHeadIndex("level_req"));
            config.type_level = configs.DTBuildingReq.parseArray(csvGetString(csv, this.GetHeadIndex("type_level")));
            config.block_req = csvGetInt(csv, this.GetHeadIndex("block_req"));
            config.function_open = toIntArray(csvGetString(csv, this.GetHeadIndex("function_open")));
            config.UI = csvGetBoolean(csv, this.GetHeadIndex("UI"));
            config.effect_id = toIntArray(csvGetString(csv, this.GetHeadIndex("effect_id")));
            config.zh_cn_effect_tips = csvGetString(csv, this.GetHeadIndex("zh_cn_effect_tips"));
            config.zh_cn_level_tips = csvGetString(csv, this.GetHeadIndex("zh_cn_level_tips"));
            config.building_small = csvGetInt(csv, this.GetHeadIndex("building_small"));
            this.addConfig(config);
        };
        return BuildingLevelConfigReaderStruct;
    }(configs.CsvConfigRender));
    configs.BuildingLevelConfigReaderStruct = BuildingLevelConfigReaderStruct;
})(configs || (configs = {}));
//# sourceMappingURL=BuildingLevelConfigReaderStruct.js.map