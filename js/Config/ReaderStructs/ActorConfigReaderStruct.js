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
    var ActorConfigReaderStruct = /** @class */ (function (_super) {
        __extends(ActorConfigReaderStruct, _super);
        function ActorConfigReaderStruct() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.tableName = "Actor";
            return _this;
        }
        ActorConfigReaderStruct.prototype.ParseCsv = function (csv) {
            var config = new configs.ActorConfig();
            config.id = csvGetInt(csv, this.GetHeadIndex("id"));
            config.en_name = csvGetString(csv, this.GetHeadIndex("en_name"));
            config.cn_name = csvGetString(csv, this.GetHeadIndex("cn_name"));
            config.random_name = csvGetInt(csv, this.GetHeadIndex("random_name"));
            config.star = csvGetInt(csv, this.GetHeadIndex("star"));
            config.sex = csvGetInt(csv, this.GetHeadIndex("sex"));
            config.country = csvGetInt(csv, this.GetHeadIndex("country"));
            config.show_type = csvGetInt(csv, this.GetHeadIndex("show_type"));
            config.age_type = csvGetInt(csv, this.GetHeadIndex("age_type"));
            config.avatar = csvGetInt(csv, this.GetHeadIndex("avatar"));
            config.spectacle = csvGetInt(csv, this.GetHeadIndex("spectacle"));
            config.perform = csvGetInt(csv, this.GetHeadIndex("perform"));
            config.plot = csvGetInt(csv, this.GetHeadIndex("plot"));
            config.art = csvGetInt(csv, this.GetHeadIndex("art"));
            config.entertainment = csvGetInt(csv, this.GetHeadIndex("entertainment"));
            config.main_id = csvGetInt(csv, this.GetHeadIndex("main_id"));
            config.skill = configs.DTActorSkill.parseArray(csvGetString(csv, this.GetHeadIndex("skill")));
            config.story_type = configs.DTActorStory.parseArray(csvGetString(csv, this.GetHeadIndex("story_type")));
            config.story_feature = configs.DTActorFeature.parseArray(csvGetString(csv, this.GetHeadIndex("story_feature")));
            config.character = configs.DTActorCharacter.parseArray(csvGetString(csv, this.GetHeadIndex("character")));
            config.surprise = csvGetInt(csv, this.GetHeadIndex("surprise"));
            config.cost = configs.DTItemNum.parse(csvGetString(csv, this.GetHeadIndex("cost")));
            config.recruit_reward = configs.DTItemNum.parseArray(csvGetString(csv, this.GetHeadIndex("recruit_reward")));
            config.enable_cost = configs.DTItemNum.parse(csvGetString(csv, this.GetHeadIndex("enable_cost")));
            config.random_value = csvGetInt(csv, this.GetHeadIndex("random_value"));
            config.exp = csvGetInt(csv, this.GetHeadIndex("exp"));
            config.paycheck = csvGetInt(csv, this.GetHeadIndex("paycheck"));
            config.stamina = csvGetInt(csv, this.GetHeadIndex("stamina"));
            config.culture = csvGetInt(csv, this.GetHeadIndex("culture"));
            config.assets = csvGetInt(csv, this.GetHeadIndex("assets"));
            config.en_tips = csvGetString(csv, this.GetHeadIndex("en_tips"));
            config.cn_tips = csvGetString(csv, this.GetHeadIndex("cn_tips"));
            config.en_getway = csvGetString(csv, this.GetHeadIndex("en_getway"));
            config.cn_getway = csvGetString(csv, this.GetHeadIndex("cn_getway"));
            this.addConfig(config);
        };
        return ActorConfigReaderStruct;
    }(configs.CsvConfigRender));
    configs.ActorConfigReaderStruct = ActorConfigReaderStruct;
})(configs || (configs = {}));
//# sourceMappingURL=ActorConfigReaderStruct.js.map