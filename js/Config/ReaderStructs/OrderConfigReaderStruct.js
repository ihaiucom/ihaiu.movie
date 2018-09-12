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
    var OrderConfigReaderStruct = /** @class */ (function (_super) {
        __extends(OrderConfigReaderStruct, _super);
        function OrderConfigReaderStruct() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.tableName = "Order";
            return _this;
        }
        OrderConfigReaderStruct.prototype.ParseCsv = function (csv) {
            var config = new configs.OrderConfig();
            config.id = csvGetInt(csv, this.GetHeadIndex("id"));
            config.zh_cn_name1 = csvGetString(csv, this.GetHeadIndex("zh_cn_name1"));
            config.zh_cn_name2 = csvGetString(csv, this.GetHeadIndex("zh_cn_name2"));
            config.icon = csvGetInt(csv, this.GetHeadIndex("icon"));
            config.block = csvGetInt(csv, this.GetHeadIndex("block"));
            config.need = configs.DTItemNum.parseArray(csvGetString(csv, this.GetHeadIndex("need")));
            config.quality = csvGetInt(csv, this.GetHeadIndex("quality"));
            config.reward = configs.DTItemNum.parse(csvGetString(csv, this.GetHeadIndex("reward")));
            config.expect = csvGetInt(csv, this.GetHeadIndex("expect"));
            this.addConfig(config);
        };
        return OrderConfigReaderStruct;
    }(configs.CsvConfigRender));
    configs.OrderConfigReaderStruct = OrderConfigReaderStruct;
})(configs || (configs = {}));
//# sourceMappingURL=OrderConfigReaderStruct.js.map