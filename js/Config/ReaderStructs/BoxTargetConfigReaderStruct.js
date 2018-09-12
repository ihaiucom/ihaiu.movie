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
    var BoxTargetConfigReaderStruct = /** @class */ (function (_super) {
        __extends(BoxTargetConfigReaderStruct, _super);
        function BoxTargetConfigReaderStruct() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.tableName = "BoxTarget";
            return _this;
        }
        BoxTargetConfigReaderStruct.prototype.ParseCsv = function (csv) {
            var config = new configs.BoxTargetConfig();
            config.id = csvGetInt(csv, this.GetHeadIndex("id"));
            config.target = csvGetInt(csv, this.GetHeadIndex("target"));
            config.zh_cn_dialog = csvGetString(csv, this.GetHeadIndex("zh_cn_dialog"));
            config.zh_cn_title = csvGetString(csv, this.GetHeadIndex("zh_cn_title"));
            config.zh_cn_targettext = csvGetString(csv, this.GetHeadIndex("zh_cn_targettext"));
            config.zh_cn_timetext = csvGetString(csv, this.GetHeadIndex("zh_cn_timetext"));
            config.time = csvGetInt(csv, this.GetHeadIndex("time"));
            config.zh_cn_reward = csvGetString(csv, this.GetHeadIndex("zh_cn_reward"));
            config.zh_cn__final = csvGetString(csv, this.GetHeadIndex("zh_cn_final"));
            config.zh_cn_button = csvGetString(csv, this.GetHeadIndex("zh_cn_button"));
            this.addConfig(config);
        };
        return BoxTargetConfigReaderStruct;
    }(configs.CsvConfigRender));
    configs.BoxTargetConfigReaderStruct = BoxTargetConfigReaderStruct;
})(configs || (configs = {}));
//# sourceMappingURL=BoxTargetConfigReaderStruct.js.map