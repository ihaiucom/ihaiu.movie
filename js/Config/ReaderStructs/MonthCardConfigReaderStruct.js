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
    var MonthCardConfigReaderStruct = /** @class */ (function (_super) {
        __extends(MonthCardConfigReaderStruct, _super);
        function MonthCardConfigReaderStruct() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.tableName = "MonthCard";
            return _this;
        }
        MonthCardConfigReaderStruct.prototype.ParseCsv = function (csv) {
            var config = new configs.MonthCardConfig();
            config.id = csvGetInt(csv, this.GetHeadIndex("id"));
            config.type = csvGetInt(csv, this.GetHeadIndex("type"));
            config.serial = csvGetInt(csv, this.GetHeadIndex("serial"));
            config.zh_cn_name = csvGetString(csv, this.GetHeadIndex("zh_cn_name"));
            config.icon = csvGetInt(csv, this.GetHeadIndex("icon"));
            config.actor = csvGetInt(csv, this.GetHeadIndex("actor"));
            config.daily_gift_resource = configs.DTItemNum.parse(csvGetString(csv, this.GetHeadIndex("daily_gift_resource")));
            config.daily_gift_contract1 = configs.DTItemNum.parse(csvGetString(csv, this.GetHeadIndex("daily_gift_contract1")));
            config.daily_gift_contract2 = configs.DTItemNum.parse(csvGetString(csv, this.GetHeadIndex("daily_gift_contract2")));
            config.gift_crystal = configs.DTItemNum.parse(csvGetString(csv, this.GetHeadIndex("gift_crystal")));
            config.gift_item = configs.DTItemNum.parse(csvGetString(csv, this.GetHeadIndex("gift_item")));
            config.info = csvGetString(csv, this.GetHeadIndex("info"));
            this.addConfig(config);
        };
        return MonthCardConfigReaderStruct;
    }(configs.CsvConfigRender));
    configs.MonthCardConfigReaderStruct = MonthCardConfigReaderStruct;
})(configs || (configs = {}));
//# sourceMappingURL=MonthCardConfigReaderStruct.js.map