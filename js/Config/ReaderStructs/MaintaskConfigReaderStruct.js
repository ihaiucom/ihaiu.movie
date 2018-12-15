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
    var MaintaskConfigReaderStruct = /** @class */ (function (_super) {
        __extends(MaintaskConfigReaderStruct, _super);
        function MaintaskConfigReaderStruct() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.tableName = "Maintask";
            return _this;
        }
        MaintaskConfigReaderStruct.prototype.ParseCsv = function (csv) {
            var config = new configs.MaintaskConfig();
            config.id = csvGetInt(csv, this.GetHeadIndex("id"));
            config.cn_name = csvGetString(csv, this.GetHeadIndex("cn_name"));
            config.en_name = csvGetString(csv, this.GetHeadIndex("en_name"));
            config.trigger = csvGetInt(csv, this.GetHeadIndex("trigger"));
            config.t_value = csvGetInt(csv, this.GetHeadIndex("t_value"));
            config.require = csvGetInt(csv, this.GetHeadIndex("require"));
            config.r_value = csvGetInt(csv, this.GetHeadIndex("r_value"));
            config.s_r_value = csvGetInt(csv, this.GetHeadIndex("s_r_value"));
            config.goal = csvGetInt(csv, this.GetHeadIndex("goal"));
            config.cn_info = csvGetString(csv, this.GetHeadIndex("cn_info"));
            config.en_info = csvGetString(csv, this.GetHeadIndex("en_info"));
            config.cn_cinfo = csvGetString(csv, this.GetHeadIndex("cn_cinfo"));
            config.en_cinfo = csvGetString(csv, this.GetHeadIndex("en_cinfo"));
            config.cn_content = csvGetString(csv, this.GetHeadIndex("cn_content"));
            config.en_content = csvGetString(csv, this.GetHeadIndex("en_content"));
            config.reward = configs.DTItemNum.parseArray(csvGetString(csv, this.GetHeadIndex("reward")));
            config.pre_quest = csvGetInt(csv, this.GetHeadIndex("pre_quest"));
            config.guide = csvGetBoolean(csv, this.GetHeadIndex("guide"));
            config.guide_id = csvGetInt(csv, this.GetHeadIndex("guide_id"));
            this.addConfig(config);
        };
        return MaintaskConfigReaderStruct;
    }(configs.CsvConfigRender));
    configs.MaintaskConfigReaderStruct = MaintaskConfigReaderStruct;
})(configs || (configs = {}));
//# sourceMappingURL=MaintaskConfigReaderStruct.js.map