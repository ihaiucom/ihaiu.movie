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
    var PositionConfigReaderStruct = /** @class */ (function (_super) {
        __extends(PositionConfigReaderStruct, _super);
        function PositionConfigReaderStruct() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.tableName = "Position";
            return _this;
        }
        PositionConfigReaderStruct.prototype.ParseCsv = function (csv) {
            var config = new configs.PositionConfig();
            config.id = csvGetInt(csv, this.GetHeadIndex("id"));
            config.name = csvGetString(csv, this.GetHeadIndex("name"));
            config.position_cost_con = csvGetInt(csv, this.GetHeadIndex("position_cost_con"));
            config.position_con = csvGetInt(csv, this.GetHeadIndex("position_con"));
            this.addConfig(config);
        };
        return PositionConfigReaderStruct;
    }(configs.CsvConfigRender));
    configs.PositionConfigReaderStruct = PositionConfigReaderStruct;
})(configs || (configs = {}));
//# sourceMappingURL=PositionConfigReaderStruct.js.map