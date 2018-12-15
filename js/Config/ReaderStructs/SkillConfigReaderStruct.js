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
    var SkillConfigReaderStruct = /** @class */ (function (_super) {
        __extends(SkillConfigReaderStruct, _super);
        function SkillConfigReaderStruct() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.tableName = "Skill";
            return _this;
        }
        SkillConfigReaderStruct.prototype.ParseCsv = function (csv) {
            var config = new configs.SkillConfig();
            config.id = csvGetInt(csv, this.GetHeadIndex("id"));
            config.group_id = csvGetInt(csv, this.GetHeadIndex("group_id"));
            config.lv = csvGetInt(csv, this.GetHeadIndex("lv"));
            config.exp = csvGetInt(csv, this.GetHeadIndex("exp"));
            config.en_name = csvGetString(csv, this.GetHeadIndex("en_name"));
            config.cn_name = csvGetString(csv, this.GetHeadIndex("cn_name"));
            config.en_tips = csvGetString(csv, this.GetHeadIndex("en_tips"));
            config.cn_tips = csvGetString(csv, this.GetHeadIndex("cn_tips"));
            config.en_effecttext = csvGetString(csv, this.GetHeadIndex("en_effecttext"));
            config.cn_effecttext = csvGetString(csv, this.GetHeadIndex("cn_effecttext"));
            config.icon = csvGetInt(csv, this.GetHeadIndex("icon"));
            config.trigger = toIntArray(csvGetString(csv, this.GetHeadIndex("trigger")));
            config.effect = csvGetInt(csv, this.GetHeadIndex("effect"));
            config.value = csvGetFloat(csv, this.GetHeadIndex("value"));
            config.stamina = csvGetInt(csv, this.GetHeadIndex("stamina"));
            this.addConfig(config);
        };
        return SkillConfigReaderStruct;
    }(configs.CsvConfigRender));
    configs.SkillConfigReaderStruct = SkillConfigReaderStruct;
})(configs || (configs = {}));
//# sourceMappingURL=SkillConfigReaderStruct.js.map