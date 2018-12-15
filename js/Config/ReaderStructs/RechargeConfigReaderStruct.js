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
    var RechargeConfigReaderStruct = /** @class */ (function (_super) {
        __extends(RechargeConfigReaderStruct, _super);
        function RechargeConfigReaderStruct() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.tableName = "Recharge";
            return _this;
        }
        RechargeConfigReaderStruct.prototype.ParseCsv = function (csv) {
            var config = new configs.RechargeConfig();
            config.id = csvGetInt(csv, this.GetHeadIndex("id"));
            config.zh_cn_name = csvGetString(csv, this.GetHeadIndex("zh_cn_name"));
            config.product_name = csvGetString(csv, this.GetHeadIndex("product_name"));
            config.product_id = csvGetString(csv, this.GetHeadIndex("product_id"));
            config.cost_dollar = csvGetFloat(csv, this.GetHeadIndex("cost_dollar"));
            config.item = configs.DTItemNum.parse(csvGetString(csv, this.GetHeadIndex("item")));
            config.gift = configs.DTItemNum.parseArray(csvGetString(csv, this.GetHeadIndex("gift")));
            config._double = csvGetInt(csv, this.GetHeadIndex("double"));
            config.go = csvGetInt(csv, this.GetHeadIndex("go"));
            config.term = csvGetInt(csv, this.GetHeadIndex("term"));
            config.is_show = csvGetBoolean(csv, this.GetHeadIndex("is_show"));
            config.limit = configs.DTItemNum.parse(csvGetString(csv, this.GetHeadIndex("limit")));
            this.addConfig(config);
        };
        return RechargeConfigReaderStruct;
    }(configs.CsvConfigRender));
    configs.RechargeConfigReaderStruct = RechargeConfigReaderStruct;
})(configs || (configs = {}));
//# sourceMappingURL=RechargeConfigReaderStruct.js.map