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
    var CooperateTaskConfigReaderStruct = /** @class */ (function (_super) {
        __extends(CooperateTaskConfigReaderStruct, _super);
        function CooperateTaskConfigReaderStruct() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.tableName = "CooperateTask";
            return _this;
        }
        CooperateTaskConfigReaderStruct.prototype.ParseCsv = function (csv) {
            var config = new configs.CooperateTaskConfig();
            config.id = csvGetInt(csv, this.GetHeadIndex("id"));
            config.task_name = csvGetString(csv, this.GetHeadIndex("task_name"));
            config.task_star = csvGetInt(csv, this.GetHeadIndex("task_star"));
            config.task_type = csvGetInt(csv, this.GetHeadIndex("task_type"));
            config.parameter1 = toIntArray(csvGetString(csv, this.GetHeadIndex("parameter1")));
            config.parameter2 = toIntArray(csvGetString(csv, this.GetHeadIndex("parameter2")));
            config.parameter3 = toIntArray(csvGetString(csv, this.GetHeadIndex("parameter3")));
            config.parameter4 = toIntArray(csvGetString(csv, this.GetHeadIndex("parameter4")));
            config.parameter5 = toIntArray(csvGetString(csv, this.GetHeadIndex("parameter5")));
            config.reward_id = configs.DTItemNum.parseArray(csvGetString(csv, this.GetHeadIndex("reward_id")));
            this.addConfig(config);
        };
        return CooperateTaskConfigReaderStruct;
    }(configs.CsvConfigRender));
    configs.CooperateTaskConfigReaderStruct = CooperateTaskConfigReaderStruct;
})(configs || (configs = {}));
//# sourceMappingURL=CooperateTaskConfigReaderStruct.js.map