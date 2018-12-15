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
    var OperationTasksTermsConfigReaderStruct = /** @class */ (function (_super) {
        __extends(OperationTasksTermsConfigReaderStruct, _super);
        function OperationTasksTermsConfigReaderStruct() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.tableName = "OperationTasksTerms";
            return _this;
        }
        OperationTasksTermsConfigReaderStruct.prototype.ParseCsv = function (csv) {
            var config = new configs.OperationTasksTermsConfig();
            config.id = csvGetInt(csv, this.GetHeadIndex("id"));
            config.type = csvGetInt(csv, this.GetHeadIndex("type"));
            config.counts = csvGetInt(csv, this.GetHeadIndex("counts"));
            config.actors = csvGetInt(csv, this.GetHeadIndex("actors"));
            config.actor_nation = csvGetInt(csv, this.GetHeadIndex("actor_nation"));
            config.actor_sex = csvGetInt(csv, this.GetHeadIndex("actor_sex"));
            config.actor_type = csvGetInt(csv, this.GetHeadIndex("actor_type"));
            config.box_level = csvGetInt(csv, this.GetHeadIndex("box_level"));
            config.movie_type = csvGetInt(csv, this.GetHeadIndex("movie_type"));
            config.info = csvGetString(csv, this.GetHeadIndex("info"));
            this.addConfig(config);
        };
        return OperationTasksTermsConfigReaderStruct;
    }(configs.CsvConfigRender));
    configs.OperationTasksTermsConfigReaderStruct = OperationTasksTermsConfigReaderStruct;
})(configs || (configs = {}));
//# sourceMappingURL=OperationTasksTermsConfigReaderStruct.js.map