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
    var CupPackageConfigReaderStruct = /** @class */ (function (_super) {
        __extends(CupPackageConfigReaderStruct, _super);
        function CupPackageConfigReaderStruct() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.tableName = "CupPackage";
            return _this;
        }
        CupPackageConfigReaderStruct.prototype.ParseCsv = function (csv) {
            var config = new configs.CupPackageConfig();
            config.id = csvGetInt(csv, this.GetHeadIndex("id"));
            config.zh_cn_name = csvGetString(csv, this.GetHeadIndex("zh_cn_name"));
            config.zh_cn_des = csvGetString(csv, this.GetHeadIndex("zh_cn_des"));
            config.target_type = toIntArray(csvGetString(csv, this.GetHeadIndex("target_type")));
            config.target_num = csvGetInt(csv, this.GetHeadIndex("target_num"));
            config.reward = configs.DTItemNum.parseArray(csvGetString(csv, this.GetHeadIndex("reward")));
            config.limit_time = csvGetInt(csv, this.GetHeadIndex("limit_time"));
            config.image = csvGetString(csv, this.GetHeadIndex("image"));
            this.addConfig(config);
        };
        return CupPackageConfigReaderStruct;
    }(configs.CsvConfigRender));
    configs.CupPackageConfigReaderStruct = CupPackageConfigReaderStruct;
})(configs || (configs = {}));
//# sourceMappingURL=CupPackageConfigReaderStruct.js.map