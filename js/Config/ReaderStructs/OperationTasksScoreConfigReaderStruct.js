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
    var OperationTasksScoreConfigReaderStruct = /** @class */ (function (_super) {
        __extends(OperationTasksScoreConfigReaderStruct, _super);
        function OperationTasksScoreConfigReaderStruct() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.tableName = "OperationTasksScore";
            return _this;
        }
        OperationTasksScoreConfigReaderStruct.prototype.ParseCsv = function (csv) {
            var config = new configs.OperationTasksScoreConfig();
            config.id = csvGetInt(csv, this.GetHeadIndex("id"));
            config.type = csvGetInt(csv, this.GetHeadIndex("type"));
            config.score = csvGetInt(csv, this.GetHeadIndex("score"));
            config.rewards = configs.DTItemNum.parseArray(csvGetString(csv, this.GetHeadIndex("rewards")));
            config.icon = csvGetInt(csv, this.GetHeadIndex("icon"));
            config.info = csvGetString(csv, this.GetHeadIndex("info"));
            this.addConfig(config);
        };
        return OperationTasksScoreConfigReaderStruct;
    }(configs.CsvConfigRender));
    configs.OperationTasksScoreConfigReaderStruct = OperationTasksScoreConfigReaderStruct;
})(configs || (configs = {}));
//# sourceMappingURL=OperationTasksScoreConfigReaderStruct.js.map