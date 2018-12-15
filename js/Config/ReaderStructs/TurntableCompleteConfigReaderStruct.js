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
    var TurntableCompleteConfigReaderStruct = /** @class */ (function (_super) {
        __extends(TurntableCompleteConfigReaderStruct, _super);
        function TurntableCompleteConfigReaderStruct() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.tableName = "TurntableComplete";
            return _this;
        }
        TurntableCompleteConfigReaderStruct.prototype.ParseCsv = function (csv) {
            var config = new configs.TurntableCompleteConfig();
            config.id = csvGetInt(csv, this.GetHeadIndex("id"));
            config.start = toIntArray(csvGetString(csv, this.GetHeadIndex("start")));
            config.end = toIntArray(csvGetString(csv, this.GetHeadIndex("end")));
            config.Reception = csvGetInt(csv, this.GetHeadIndex("Reception"));
            config.actor1 = toIntArray(csvGetString(csv, this.GetHeadIndex("actor1")));
            config.actor2 = toIntArray(csvGetString(csv, this.GetHeadIndex("actor2")));
            config.integral = csvGetInt(csv, this.GetHeadIndex("integral"));
            config.reward = configs.DTItemNum.parse(csvGetString(csv, this.GetHeadIndex("reward")));
            this.addConfig(config);
        };
        return TurntableCompleteConfigReaderStruct;
    }(configs.CsvConfigRender));
    configs.TurntableCompleteConfigReaderStruct = TurntableCompleteConfigReaderStruct;
})(configs || (configs = {}));
//# sourceMappingURL=TurntableCompleteConfigReaderStruct.js.map