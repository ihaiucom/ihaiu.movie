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
    var SkillEffectConfigReaderStruct = /** @class */ (function (_super) {
        __extends(SkillEffectConfigReaderStruct, _super);
        function SkillEffectConfigReaderStruct() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.tableName = "SkillEffect";
            return _this;
        }
        SkillEffectConfigReaderStruct.prototype.ParseCsv = function (csv) {
            var config = new configs.SkillEffectConfig();
            config.id = csvGetInt(csv, this.GetHeadIndex("id"));
            config.effect = csvGetInt(csv, this.GetHeadIndex("effect"));
            config.tips = csvGetString(csv, this.GetHeadIndex("tips"));
            this.addConfig(config);
        };
        return SkillEffectConfigReaderStruct;
    }(configs.CsvConfigRender));
    configs.SkillEffectConfigReaderStruct = SkillEffectConfigReaderStruct;
})(configs || (configs = {}));
//# sourceMappingURL=SkillEffectConfigReaderStruct.js.map