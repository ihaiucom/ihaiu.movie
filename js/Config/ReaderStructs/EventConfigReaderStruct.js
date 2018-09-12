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
    var EventConfigReaderStruct = /** @class */ (function (_super) {
        __extends(EventConfigReaderStruct, _super);
        function EventConfigReaderStruct() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.tableName = "Event";
            return _this;
        }
        EventConfigReaderStruct.prototype.ParseCsv = function (csv) {
            var config = new configs.EventConfig();
            config.id = csvGetInt(csv, this.GetHeadIndex("id"));
            config.model = csvGetInt(csv, this.GetHeadIndex("model"));
            config.type = csvGetInt(csv, this.GetHeadIndex("type"));
            config.action = configs.DTPerformActoin.parseArray(csvGetString(csv, this.GetHeadIndex("action")));
            config.speak = configs.DTPerformSpeak.parseArray(csvGetString(csv, this.GetHeadIndex("speak")));
            config.tips = csvGetString(csv, this.GetHeadIndex("tips"));
            this.addConfig(config);
        };
        return EventConfigReaderStruct;
    }(configs.CsvConfigRender));
    configs.EventConfigReaderStruct = EventConfigReaderStruct;
})(configs || (configs = {}));
//# sourceMappingURL=EventConfigReaderStruct.js.map