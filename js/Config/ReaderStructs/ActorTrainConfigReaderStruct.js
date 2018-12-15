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
    var ActorTrainConfigReaderStruct = /** @class */ (function (_super) {
        __extends(ActorTrainConfigReaderStruct, _super);
        function ActorTrainConfigReaderStruct() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.tableName = "ActorTrain";
            return _this;
        }
        ActorTrainConfigReaderStruct.prototype.ParseCsv = function (csv) {
            var config = new configs.ActorTrainConfig();
            config.id = csvGetInt(csv, this.GetHeadIndex("id"));
            config.train_type = csvGetInt(csv, this.GetHeadIndex("train_type"));
            config.en_name = csvGetString(csv, this.GetHeadIndex("en_name"));
            config.cn_name = csvGetString(csv, this.GetHeadIndex("cn_name"));
            config.property = toIntArray(csvGetString(csv, this.GetHeadIndex("property")));
            config.en_scene_name = csvGetString(csv, this.GetHeadIndex("en_scene_name"));
            config.cn_scene_name = csvGetString(csv, this.GetHeadIndex("cn_scene_name"));
            config.action = csvGetInt(csv, this.GetHeadIndex("action"));
            config.tips = csvGetString(csv, this.GetHeadIndex("tips"));
            this.addConfig(config);
        };
        return ActorTrainConfigReaderStruct;
    }(configs.CsvConfigRender));
    configs.ActorTrainConfigReaderStruct = ActorTrainConfigReaderStruct;
})(configs || (configs = {}));
//# sourceMappingURL=ActorTrainConfigReaderStruct.js.map