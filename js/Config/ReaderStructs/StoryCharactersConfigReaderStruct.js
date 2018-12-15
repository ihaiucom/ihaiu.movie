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
    var StoryCharactersConfigReaderStruct = /** @class */ (function (_super) {
        __extends(StoryCharactersConfigReaderStruct, _super);
        function StoryCharactersConfigReaderStruct() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.tableName = "StoryCharacters";
            return _this;
        }
        StoryCharactersConfigReaderStruct.prototype.ParseCsv = function (csv) {
            var config = new configs.StoryCharactersConfig();
            config.id = csvGetInt(csv, this.GetHeadIndex("id"));
            config.story_id = csvGetInt(csv, this.GetHeadIndex("story_id"));
            config.character_num = csvGetInt(csv, this.GetHeadIndex("character_num"));
            config.zh_cn_name = csvGetString(csv, this.GetHeadIndex("zh_cn_name"));
            config.type = csvGetInt(csv, this.GetHeadIndex("type"));
            config.type_pic = csvGetInt(csv, this.GetHeadIndex("type_pic"));
            config.sex = csvGetInt(csv, this.GetHeadIndex("sex"));
            config.country = csvGetInt(csv, this.GetHeadIndex("country"));
            config.show_type = csvGetInt(csv, this.GetHeadIndex("show_type"));
            config.age_type = csvGetInt(csv, this.GetHeadIndex("age_type"));
            config.tags = toIntArray(csvGetString(csv, this.GetHeadIndex("tags")));
            config.effect = toIntArray(csvGetString(csv, this.GetHeadIndex("effect")));
            config.zh_cn_introduction = csvGetString(csv, this.GetHeadIndex("zh_cn_introduction"));
            this.addConfig(config);
        };
        return StoryCharactersConfigReaderStruct;
    }(configs.CsvConfigRender));
    configs.StoryCharactersConfigReaderStruct = StoryCharactersConfigReaderStruct;
})(configs || (configs = {}));
//# sourceMappingURL=StoryCharactersConfigReaderStruct.js.map