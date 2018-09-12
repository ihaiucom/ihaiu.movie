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
    var ShopConfigReaderStruct = /** @class */ (function (_super) {
        __extends(ShopConfigReaderStruct, _super);
        function ShopConfigReaderStruct() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.tableName = "Shop";
            return _this;
        }
        ShopConfigReaderStruct.prototype.ParseCsv = function (csv) {
            var config = new configs.ShopConfig();
            config.id = csvGetInt(csv, this.GetHeadIndex("id"));
            config.type = csvGetInt(csv, this.GetHeadIndex("type"));
            config.zh_cn_name = csvGetString(csv, this.GetHeadIndex("zh_cn_name"));
            config.item = configs.DTItemNum.parseArray(csvGetString(csv, this.GetHeadIndex("item")));
            config.cost = configs.DTItemNum.parse(csvGetString(csv, this.GetHeadIndex("cost")));
            config.period = csvGetString(csv, this.GetHeadIndex("period"));
            config.limit = configs.DTItemNum.parse(csvGetString(csv, this.GetHeadIndex("limit")));
            config.special = csvGetInt(csv, this.GetHeadIndex("special"));
            this.addConfig(config);
        };
        return ShopConfigReaderStruct;
    }(configs.CsvConfigRender));
    configs.ShopConfigReaderStruct = ShopConfigReaderStruct;
})(configs || (configs = {}));
//# sourceMappingURL=ShopConfigReaderStruct.js.map