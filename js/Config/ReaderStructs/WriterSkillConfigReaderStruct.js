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
    var WriterSkillConfigReaderStruct = /** @class */ (function (_super) {
        __extends(WriterSkillConfigReaderStruct, _super);
        function WriterSkillConfigReaderStruct() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.tableName = "WriterSkill";
            return _this;
        }
        WriterSkillConfigReaderStruct.prototype.ParseCsv = function (csv) {
            var config = new configs.WriterSkillConfig();
            config.id = csvGetInt(csv, this.GetHeadIndex("id"));
            config.name = csvGetString(csv, this.GetHeadIndex("name"));
            config.skill_level = csvGetInt(csv, this.GetHeadIndex("skill_level"));
            config.cost = configs.DTItemNum.parse(csvGetString(csv, this.GetHeadIndex("cost")));
            config.req_level = csvGetInt(csv, this.GetHeadIndex("req_level"));
            config.label = toIntArray(csvGetString(csv, this.GetHeadIndex("label")));
            this.addConfig(config);
        };
        return WriterSkillConfigReaderStruct;
    }(configs.CsvConfigRender));
    configs.WriterSkillConfigReaderStruct = WriterSkillConfigReaderStruct;
})(configs || (configs = {}));
//# sourceMappingURL=WriterSkillConfigReaderStruct.js.map