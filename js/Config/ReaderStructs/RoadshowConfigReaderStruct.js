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
    var RoadshowConfigReaderStruct = /** @class */ (function (_super) {
        __extends(RoadshowConfigReaderStruct, _super);
        function RoadshowConfigReaderStruct() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.tableName = "Roadshow";
            return _this;
        }
        RoadshowConfigReaderStruct.prototype.ParseCsv = function (csv) {
            var config = new configs.RoadshowConfig();
            config.id = csvGetInt(csv, this.GetHeadIndex("id"));
            config.compere_type = csvGetInt(csv, this.GetHeadIndex("compere_type"));
            config.content = csvGetString(csv, this.GetHeadIndex("content"));
            config.remaks = csvGetString(csv, this.GetHeadIndex("remaks"));
            config.content_duration = csvGetInt(csv, this.GetHeadIndex("content_duration"));
            config.act = csvGetString(csv, this.GetHeadIndex("act"));
            config.act_duration = csvGetInt(csv, this.GetHeadIndex("act_duration"));
            this.addConfig(config);
        };
        return RoadshowConfigReaderStruct;
    }(configs.CsvConfigRender));
    configs.RoadshowConfigReaderStruct = RoadshowConfigReaderStruct;
})(configs || (configs = {}));
//# sourceMappingURL=RoadshowConfigReaderStruct.js.map