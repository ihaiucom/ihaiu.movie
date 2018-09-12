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
    var WriterAdaptEffectConfigReaderStruct = /** @class */ (function (_super) {
        __extends(WriterAdaptEffectConfigReaderStruct, _super);
        function WriterAdaptEffectConfigReaderStruct() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.tableName = "WriterAdaptEffect";
            return _this;
        }
        WriterAdaptEffectConfigReaderStruct.prototype.ParseCsv = function (csv) {
            var config = new configs.WriterAdaptEffectConfig();
            config.id = csvGetInt(csv, this.GetHeadIndex("id"));
            config.zh_cn_adapt = csvGetString(csv, this.GetHeadIndex("zh_cn_adapt"));
            config.zh_cn_adapt_des = csvGetString(csv, this.GetHeadIndex("zh_cn_adapt_des"));
            config.effect1 = csvGetInt(csv, this.GetHeadIndex("effect1"));
            config.effect1_weight = csvGetInt(csv, this.GetHeadIndex("effect1_weight"));
            config.effect2 = csvGetInt(csv, this.GetHeadIndex("effect2"));
            config.effect2_weight = csvGetInt(csv, this.GetHeadIndex("effect2_weight"));
            config.effect3 = csvGetInt(csv, this.GetHeadIndex("effect3"));
            config.effect3_weight = csvGetInt(csv, this.GetHeadIndex("effect3_weight"));
            config.effect4 = csvGetInt(csv, this.GetHeadIndex("effect4"));
            config.effect4_weight = csvGetInt(csv, this.GetHeadIndex("effect4_weight"));
            this.addConfig(config);
        };
        return WriterAdaptEffectConfigReaderStruct;
    }(configs.CsvConfigRender));
    configs.WriterAdaptEffectConfigReaderStruct = WriterAdaptEffectConfigReaderStruct;
})(configs || (configs = {}));
//# sourceMappingURL=WriterAdaptEffectConfigReaderStruct.js.map