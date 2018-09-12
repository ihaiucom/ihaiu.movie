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
    var GuidesystemConfigReaderStruct = /** @class */ (function (_super) {
        __extends(GuidesystemConfigReaderStruct, _super);
        function GuidesystemConfigReaderStruct() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.tableName = "Guidesystem";
            return _this;
        }
        GuidesystemConfigReaderStruct.prototype.ParseCsv = function (csv) {
            var config = new configs.GuidesystemConfig();
            config.id = csvGetInt(csv, this.GetHeadIndex("id"));
            config.group = csvGetInt(csv, this.GetHeadIndex("group"));
            config.order = csvGetInt(csv, this.GetHeadIndex("order"));
            config.finish_type = csvGetInt(csv, this.GetHeadIndex("finish_type"));
            config.finish_value_1 = csvGetInt(csv, this.GetHeadIndex("finish_value_1"));
            config.finish_value_2 = csvGetInt(csv, this.GetHeadIndex("finish_value_2"));
            config.trigger_type = csvGetInt(csv, this.GetHeadIndex("trigger_type"));
            config.trigger_value = csvGetInt(csv, this.GetHeadIndex("trigger_value"));
            config.next_guide = csvGetInt(csv, this.GetHeadIndex("next_guide"));
            config.path_id = csvGetInt(csv, this.GetHeadIndex("path_id"));
            config.path_par1 = csvGetInt(csv, this.GetHeadIndex("path_par1"));
            config.assistant = csvGetBoolean(csv, this.GetHeadIndex("assistant"));
            config.position = configs.DTVector2.parse(csvGetString(csv, this.GetHeadIndex("position")));
            config.cn_content = csvGetString(csv, this.GetHeadIndex("cn_content"));
            config.en_content = csvGetString(csv, this.GetHeadIndex("en_content"));
            config.f_direction = csvGetInt(csv, this.GetHeadIndex("f_direction"));
            config.halo = csvGetBoolean(csv, this.GetHeadIndex("halo"));
            config.radius = csvGetInt(csv, this.GetHeadIndex("radius"));
            config.storyline = csvGetBoolean(csv, this.GetHeadIndex("storyline"));
            config.storyline_id = csvGetInt(csv, this.GetHeadIndex("storyline_id"));
            config.force = csvGetBoolean(csv, this.GetHeadIndex("force"));
            config.tips = csvGetString(csv, this.GetHeadIndex("tips"));
            config.tips2 = csvGetString(csv, this.GetHeadIndex("tips2"));
            this.addConfig(config);
        };
        return GuidesystemConfigReaderStruct;
    }(configs.CsvConfigRender));
    configs.GuidesystemConfigReaderStruct = GuidesystemConfigReaderStruct;
})(configs || (configs = {}));
//# sourceMappingURL=GuidesystemConfigReaderStruct.js.map