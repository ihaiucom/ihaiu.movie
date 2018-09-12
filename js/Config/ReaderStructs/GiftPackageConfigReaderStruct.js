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
    var GiftPackageConfigReaderStruct = /** @class */ (function (_super) {
        __extends(GiftPackageConfigReaderStruct, _super);
        function GiftPackageConfigReaderStruct() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.tableName = "GiftPackage";
            return _this;
        }
        GiftPackageConfigReaderStruct.prototype.ParseCsv = function (csv) {
            var config = new configs.GiftPackageConfig();
            config.id = csvGetInt(csv, this.GetHeadIndex("id"));
            config.plat = csvGetInt(csv, this.GetHeadIndex("plat"));
            config.country = csvGetInt(csv, this.GetHeadIndex("country"));
            config.gift = configs.DTItemNum.parse(csvGetString(csv, this.GetHeadIndex("gift")));
            config.cn = csvGetString(csv, this.GetHeadIndex("cn"));
            this.addConfig(config);
        };
        return GiftPackageConfigReaderStruct;
    }(configs.CsvConfigRender));
    configs.GiftPackageConfigReaderStruct = GiftPackageConfigReaderStruct;
})(configs || (configs = {}));
//# sourceMappingURL=GiftPackageConfigReaderStruct.js.map