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
    var FloorConfigReaderStruct = /** @class */ (function (_super) {
        __extends(FloorConfigReaderStruct, _super);
        function FloorConfigReaderStruct() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.tableName = "Floor";
            return _this;
        }
        FloorConfigReaderStruct.prototype.ParseCsv = function (csv) {
            var config = new configs.FloorConfig();
            config.id = csvGetInt(csv, this.GetHeadIndex("id"));
            config.zh_cn_name = csvGetString(csv, this.GetHeadIndex("zh_cn_name"));
            config.cost = configs.DTItemNum.parse(csvGetString(csv, this.GetHeadIndex("cost")));
            config.level_req = csvGetInt(csv, this.GetHeadIndex("level_req"));
            config.city_req = csvGetInt(csv, this.GetHeadIndex("city_req"));
            this.addConfig(config);
        };
        return FloorConfigReaderStruct;
    }(configs.CsvConfigRender));
    configs.FloorConfigReaderStruct = FloorConfigReaderStruct;
})(configs || (configs = {}));
//# sourceMappingURL=FloorConfigReaderStruct.js.map