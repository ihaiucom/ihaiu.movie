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
    var WheelDropConfigReaderStruct = /** @class */ (function (_super) {
        __extends(WheelDropConfigReaderStruct, _super);
        function WheelDropConfigReaderStruct() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.tableName = "WheelDrop";
            return _this;
        }
        WheelDropConfigReaderStruct.prototype.ParseCsv = function (csv) {
            var config = new configs.WheelDropConfig();
            config.id = csvGetInt(csv, this.GetHeadIndex("id"));
            config.wheel_type = csvGetInt(csv, this.GetHeadIndex("wheel_type"));
            config.priority = csvGetInt(csv, this.GetHeadIndex("priority"));
            config.drop_item = configs.DTItemNum.parse(csvGetString(csv, this.GetHeadIndex("drop_item")));
            config.label_id = csvGetInt(csv, this.GetHeadIndex("label_id"));
            config.weight = csvGetInt(csv, this.GetHeadIndex("weight"));
            this.addConfig(config);
        };
        return WheelDropConfigReaderStruct;
    }(configs.CsvConfigRender));
    configs.WheelDropConfigReaderStruct = WheelDropConfigReaderStruct;
})(configs || (configs = {}));
//# sourceMappingURL=WheelDropConfigReaderStruct.js.map