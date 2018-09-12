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
            config.item = configs.DTItemNum.parse(csvGetString(csv, this.GetHeadIndex("item")));
            config.gift = configs.DTItemNum.parseArray(csvGetString(csv, this.GetHeadIndex("gift")));
            config.cost_dollar = csvGetInt(csv, this.GetHeadIndex("cost_dollar"));
            config._double = csvGetInt(csv, this.GetHeadIndex("double"));
            config.go = csvGetInt(csv, this.GetHeadIndex("go"));
            config.term = csvGetInt(csv, this.GetHeadIndex("term"));
            this.addConfig(config);
        };
        return RechargeConfigReaderStruct;
    }(configs.CsvConfigRender));
    configs.RechargeConfigReaderStruct = RechargeConfigReaderStruct;
})(configs || (configs = {}));
//# sourceMappingURL=RechargeConfigReaderStruct.js.map