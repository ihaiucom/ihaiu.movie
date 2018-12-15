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
    var ActorAideConfigReaderStruct = /** @class */ (function (_super) {
        __extends(ActorAideConfigReaderStruct, _super);
        function ActorAideConfigReaderStruct() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.tableName = "ActorAide";
            return _this;
        }
        ActorAideConfigReaderStruct.prototype.ParseCsv = function (csv) {
            var config = new configs.ActorAideConfig();
            config.id = csvGetInt(csv, this.GetHeadIndex("id"));
            config.star = csvGetInt(csv, this.GetHeadIndex("star"));
            config.aide_type = csvGetInt(csv, this.GetHeadIndex("aide_type"));
            config.number = csvGetInt(csv, this.GetHeadIndex("number"));
            config.lv = csvGetInt(csv, this.GetHeadIndex("lv"));
            config.cost = csvGetInt(csv, this.GetHeadIndex("cost"));
            config.introduction = configs.DTItemNum.parse(csvGetString(csv, this.GetHeadIndex("introduction")));
            config.en_name = csvGetString(csv, this.GetHeadIndex("en_name"));
            config.cn_name = csvGetString(csv, this.GetHeadIndex("cn_name"));
            config.avatar = csvGetInt(csv, this.GetHeadIndex("avatar"));
            config.secondary_property = csvGetInt(csv, this.GetHeadIndex("secondary_property"));
            config.main_property = csvGetInt(csv, this.GetHeadIndex("main_property"));
            config.tips = csvGetString(csv, this.GetHeadIndex("tips"));
            this.addConfig(config);
        };
        return ActorAideConfigReaderStruct;
    }(configs.CsvConfigRender));
    configs.ActorAideConfigReaderStruct = ActorAideConfigReaderStruct;
})(configs || (configs = {}));
//# sourceMappingURL=ActorAideConfigReaderStruct.js.map