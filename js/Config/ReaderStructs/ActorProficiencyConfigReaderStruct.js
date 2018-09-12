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
    var ActorProficiencyConfigReaderStruct = /** @class */ (function (_super) {
        __extends(ActorProficiencyConfigReaderStruct, _super);
        function ActorProficiencyConfigReaderStruct() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.tableName = "ActorProficiency";
            return _this;
        }
        ActorProficiencyConfigReaderStruct.prototype.ParseCsv = function (csv) {
            var config = new configs.ActorProficiencyConfig();
            config.id = csvGetInt(csv, this.GetHeadIndex("id"));
            config.shoot_type = csvGetInt(csv, this.GetHeadIndex("shoot_type"));
            config.lv = csvGetInt(csv, this.GetHeadIndex("lv"));
            config.shoot_exp = csvGetInt(csv, this.GetHeadIndex("shoot_exp"));
            config.exp = csvGetInt(csv, this.GetHeadIndex("exp"));
            config.proficiency = configs.DTProficiency.parse(csvGetString(csv, this.GetHeadIndex("proficiency")));
            this.addConfig(config);
        };
        return ActorProficiencyConfigReaderStruct;
    }(configs.CsvConfigRender));
    configs.ActorProficiencyConfigReaderStruct = ActorProficiencyConfigReaderStruct;
})(configs || (configs = {}));
//# sourceMappingURL=ActorProficiencyConfigReaderStruct.js.map