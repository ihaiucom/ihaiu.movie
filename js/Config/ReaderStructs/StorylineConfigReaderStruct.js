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
    var StorylineConfigReaderStruct = /** @class */ (function (_super) {
        __extends(StorylineConfigReaderStruct, _super);
        function StorylineConfigReaderStruct() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.tableName = "Storyline";
            return _this;
        }
        StorylineConfigReaderStruct.prototype.ParseCsv = function (csv) {
            var config = new configs.StorylineConfig();
            config.id = csvGetInt(csv, this.GetHeadIndex("id"));
            config.trigger = csvGetInt(csv, this.GetHeadIndex("trigger"));
            config.value = csvGetInt(csv, this.GetHeadIndex("value"));
            config.guide_type = csvGetInt(csv, this.GetHeadIndex("guide_type"));
            config.guide_id = csvGetInt(csv, this.GetHeadIndex("guide_id"));
            config.group = csvGetInt(csv, this.GetHeadIndex("group"));
            config.order = csvGetInt(csv, this.GetHeadIndex("order"));
            config.type_id = csvGetString(csv, this.GetHeadIndex("type_id"));
            config.ui_type = csvGetInt(csv, this.GetHeadIndex("ui_type"));
            config.cn_ui_content = csvGetString(csv, this.GetHeadIndex("cn_ui_content"));
            config.en_ui_content = csvGetString(csv, this.GetHeadIndex("en_ui_content"));
            config.cn_content = csvGetString(csv, this.GetHeadIndex("cn_content"));
            config.en_content = csvGetString(csv, this.GetHeadIndex("en_content"));
            config.cn_name = csvGetString(csv, this.GetHeadIndex("cn_name"));
            config.en_name = csvGetString(csv, this.GetHeadIndex("en_name"));
            config.anchor = csvGetInt(csv, this.GetHeadIndex("anchor"));
            config.reward = configs.DTItemNum.parseArray(csvGetString(csv, this.GetHeadIndex("reward")));
            this.addConfig(config);
        };
        return StorylineConfigReaderStruct;
    }(configs.CsvConfigRender));
    configs.StorylineConfigReaderStruct = StorylineConfigReaderStruct;
})(configs || (configs = {}));
//# sourceMappingURL=StorylineConfigReaderStruct.js.map