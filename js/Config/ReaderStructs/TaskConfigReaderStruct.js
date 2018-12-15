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
    var TaskConfigReaderStruct = /** @class */ (function (_super) {
        __extends(TaskConfigReaderStruct, _super);
        function TaskConfigReaderStruct() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.tableName = "Task";
            return _this;
        }
        TaskConfigReaderStruct.prototype.ParseCsv = function (csv) {
            var config = new configs.TaskConfig();
            config.id = csvGetInt(csv, this.GetHeadIndex("id"));
            config.zh_cn_name = csvGetString(csv, this.GetHeadIndex("zh_cn_name"));
            config.unlock = csvGetInt(csv, this.GetHeadIndex("unlock"));
            config.require = csvGetInt(csv, this.GetHeadIndex("require"));
            config.goal = csvGetInt(csv, this.GetHeadIndex("goal"));
            config.s_goal = csvGetInt(csv, this.GetHeadIndex("s_goal"));
            config.type = csvGetInt(csv, this.GetHeadIndex("type"));
            config.reward = configs.DTItemNum.parseArray(csvGetString(csv, this.GetHeadIndex("reward")));
            config.Complete = csvGetInt(csv, this.GetHeadIndex("Complete"));
            config.pre_id = csvGetInt(csv, this.GetHeadIndex("pre_id"));
            config.guide = csvGetInt(csv, this.GetHeadIndex("guide"));
            this.addConfig(config);
        };
        return TaskConfigReaderStruct;
    }(configs.CsvConfigRender));
    configs.TaskConfigReaderStruct = TaskConfigReaderStruct;
})(configs || (configs = {}));
//# sourceMappingURL=TaskConfigReaderStruct.js.map