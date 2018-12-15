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
    var SkillTriggerConfigReaderStruct = /** @class */ (function (_super) {
        __extends(SkillTriggerConfigReaderStruct, _super);
        function SkillTriggerConfigReaderStruct() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.tableName = "SkillTrigger";
            return _this;
        }
        SkillTriggerConfigReaderStruct.prototype.ParseCsv = function (csv) {
            var config = new configs.SkillTriggerConfig();
            config.id = csvGetInt(csv, this.GetHeadIndex("id"));
            config.trigger = csvGetInt(csv, this.GetHeadIndex("trigger"));
            config.value = csvGetInt(csv, this.GetHeadIndex("value"));
            config.tips = csvGetString(csv, this.GetHeadIndex("tips"));
            this.addConfig(config);
        };
        return SkillTriggerConfigReaderStruct;
    }(configs.CsvConfigRender));
    configs.SkillTriggerConfigReaderStruct = SkillTriggerConfigReaderStruct;
})(configs || (configs = {}));
//# sourceMappingURL=SkillTriggerConfigReaderStruct.js.map