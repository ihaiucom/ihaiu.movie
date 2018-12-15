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
    var BuildingEffectConfigReaderStruct = /** @class */ (function (_super) {
        __extends(BuildingEffectConfigReaderStruct, _super);
        function BuildingEffectConfigReaderStruct() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.tableName = "BuildingEffect";
            return _this;
        }
        BuildingEffectConfigReaderStruct.prototype.ParseCsv = function (csv) {
            var config = new configs.BuildingEffectConfig();
            config.id = csvGetInt(csv, this.GetHeadIndex("id"));
            config.tips = csvGetString(csv, this.GetHeadIndex("tips"));
            config.level = csvGetInt(csv, this.GetHeadIndex("level"));
            config.zh_cn_effect_des = csvGetString(csv, this.GetHeadIndex("zh_cn_effect_des"));
            config.effect = csvGetInt(csv, this.GetHeadIndex("effect"));
            config.par1 = csvGetFloat(csv, this.GetHeadIndex("par1"));
            config.par2 = csvGetFloat(csv, this.GetHeadIndex("par2"));
            config.par3 = csvGetFloat(csv, this.GetHeadIndex("par3"));
            config.par4 = csvGetFloat(csv, this.GetHeadIndex("par4"));
            config.par5 = csvGetFloat(csv, this.GetHeadIndex("par5"));
            this.addConfig(config);
        };
        return BuildingEffectConfigReaderStruct;
    }(configs.CsvConfigRender));
    configs.BuildingEffectConfigReaderStruct = BuildingEffectConfigReaderStruct;
})(configs || (configs = {}));
//# sourceMappingURL=BuildingEffectConfigReaderStruct.js.map