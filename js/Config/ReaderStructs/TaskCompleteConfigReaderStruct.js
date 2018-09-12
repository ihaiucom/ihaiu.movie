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
    var TaskCompleteConfigReaderStruct = /** @class */ (function (_super) {
        __extends(TaskCompleteConfigReaderStruct, _super);
        function TaskCompleteConfigReaderStruct() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.path = "TaskComplete";
            return _this;
        }
        TaskCompleteConfigReaderStruct.prototype.ParseCsv = function (csv) {
            var config = new configs.TaskCompleteConfig();
            config.completion = csvGetInt(csv, this.GetHeadIndex("completion"));
            config.reward = configs.DTItemNum.parseArray(csvGetString(csv, this.GetHeadIndex("reward")));
            this.addConfig(config);
        };
        return TaskCompleteConfigReaderStruct;
    }(configs.CsvConfigRender));
    configs.TaskCompleteConfigReaderStruct = TaskCompleteConfigReaderStruct;
})(configs || (configs = {}));
//# sourceMappingURL=TaskCompleteConfigReaderStruct.js.map