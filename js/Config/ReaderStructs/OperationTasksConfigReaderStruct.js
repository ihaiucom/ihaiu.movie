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
    var OperationTasksConfigReaderStruct = /** @class */ (function (_super) {
        __extends(OperationTasksConfigReaderStruct, _super);
        function OperationTasksConfigReaderStruct() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.tableName = "OperationTasks";
            return _this;
        }
        OperationTasksConfigReaderStruct.prototype.ParseCsv = function (csv) {
            var config = new configs.OperationTasksConfig();
            config.id = csvGetInt(csv, this.GetHeadIndex("id"));
            config.type = csvGetInt(csv, this.GetHeadIndex("type"));
            config.starttime = csvGetInt(csv, this.GetHeadIndex("starttime"));
            config.endtime = csvGetInt(csv, this.GetHeadIndex("endtime"));
            config.country = csvGetInt(csv, this.GetHeadIndex("country"));
            config.plate = csvGetInt(csv, this.GetHeadIndex("plate"));
            config.functionid = csvGetInt(csv, this.GetHeadIndex("functionid"));
            config.parameter = csvGetInt(csv, this.GetHeadIndex("parameter"));
            config.typename = csvGetInt(csv, this.GetHeadIndex("typename"));
            config.counts = csvGetInt(csv, this.GetHeadIndex("counts"));
            config.actors = csvGetInt(csv, this.GetHeadIndex("actors"));
            config.actor_nation = csvGetInt(csv, this.GetHeadIndex("actor_nation"));
            config.actor_sex = csvGetInt(csv, this.GetHeadIndex("actor_sex"));
            config.actor_type = csvGetInt(csv, this.GetHeadIndex("actor_type"));
            config.box_level = csvGetInt(csv, this.GetHeadIndex("box_level"));
            config.movie_type = csvGetInt(csv, this.GetHeadIndex("movie_type"));
            config.reward = configs.DTItemNum.parseArray(csvGetString(csv, this.GetHeadIndex("reward")));
            config.zh_cn_classname = csvGetString(csv, this.GetHeadIndex("zh_cn_classname"));
            config.zh_cn_description = csvGetString(csv, this.GetHeadIndex("zh_cn_description"));
            this.addConfig(config);
        };
        return OperationTasksConfigReaderStruct;
    }(configs.CsvConfigRender));
    configs.OperationTasksConfigReaderStruct = OperationTasksConfigReaderStruct;
})(configs || (configs = {}));
//# sourceMappingURL=OperationTasksConfigReaderStruct.js.map