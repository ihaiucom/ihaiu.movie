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
    var ActivitiesConfigReaderStruct = /** @class */ (function (_super) {
        __extends(ActivitiesConfigReaderStruct, _super);
        function ActivitiesConfigReaderStruct() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.tableName = "Activities";
            return _this;
        }
        ActivitiesConfigReaderStruct.prototype.ParseCsv = function (csv) {
            var config = new configs.ActivitiesConfig();
            config.id = csvGetInt(csv, this.GetHeadIndex("id"));
            config.start_type = csvGetInt(csv, this.GetHeadIndex("start_type"));
            config.start = csvGetInt(csv, this.GetHeadIndex("start"));
            config.duration = csvGetInt(csv, this.GetHeadIndex("duration"));
            config.icon = csvGetInt(csv, this.GetHeadIndex("icon"));
            config.icon_chosen = csvGetInt(csv, this.GetHeadIndex("icon_chosen"));
            config.zh_cn_activities_name = csvGetString(csv, this.GetHeadIndex("zh_cn_activities_name"));
            config.zh_cn_activities_info = csvGetString(csv, this.GetHeadIndex("zh_cn_activities_info"));
            config.info = csvGetString(csv, this.GetHeadIndex("info"));
            this.addConfig(config);
        };
        return ActivitiesConfigReaderStruct;
    }(configs.CsvConfigRender));
    configs.ActivitiesConfigReaderStruct = ActivitiesConfigReaderStruct;
})(configs || (configs = {}));
//# sourceMappingURL=ActivitiesConfigReaderStruct.js.map