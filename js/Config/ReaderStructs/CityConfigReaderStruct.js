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
    var CityConfigReaderStruct = /** @class */ (function (_super) {
        __extends(CityConfigReaderStruct, _super);
        function CityConfigReaderStruct() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.tableName = "City";
            return _this;
        }
        CityConfigReaderStruct.prototype.ParseCsv = function (csv) {
            var config = new configs.CityConfig();
            config.id = csvGetInt(csv, this.GetHeadIndex("id"));
            config.city_num = csvGetInt(csv, this.GetHeadIndex("city_num"));
            config.zh_cn_name = csvGetString(csv, this.GetHeadIndex("zh_cn_name"));
            config.en_name = csvGetString(csv, this.GetHeadIndex("en_name"));
            config.street_num = csvGetInt(csv, this.GetHeadIndex("street_num"));
            config.street_id = toIntArray(csvGetString(csv, this.GetHeadIndex("street_id")));
            config.show_cost = csvGetInt(csv, this.GetHeadIndex("show_cost"));
            config.show_need = csvGetInt(csv, this.GetHeadIndex("show_need"));
            config.hold_reward = configs.DTItemNum.parseArray(csvGetString(csv, this.GetHeadIndex("hold_reward")));
            config.envoy1_sex = csvGetInt(csv, this.GetHeadIndex("envoy1_sex"));
            config.envoy1_Continents = csvGetInt(csv, this.GetHeadIndex("envoy1_Continents"));
            config.envoy1_type = csvGetInt(csv, this.GetHeadIndex("envoy1_type"));
            config.envoy1_age = csvGetInt(csv, this.GetHeadIndex("envoy1_age"));
            config.envoy1_scene = csvGetInt(csv, this.GetHeadIndex("envoy1_scene"));
            config.envoy1_performance = csvGetInt(csv, this.GetHeadIndex("envoy1_performance"));
            config.envoy1_plot = csvGetInt(csv, this.GetHeadIndex("envoy1_plot"));
            config.envoy1_art = csvGetInt(csv, this.GetHeadIndex("envoy1_art"));
            config.envoy1_entertainment = csvGetInt(csv, this.GetHeadIndex("envoy1_entertainment"));
            config.envoy2_sex = csvGetInt(csv, this.GetHeadIndex("envoy2_sex"));
            config.envoy2_Continents = csvGetInt(csv, this.GetHeadIndex("envoy2_Continents"));
            config.envoy2_type = csvGetInt(csv, this.GetHeadIndex("envoy2_type"));
            config.envoy2_age = csvGetInt(csv, this.GetHeadIndex("envoy2_age"));
            config.envoy2_scene = csvGetInt(csv, this.GetHeadIndex("envoy2_scene"));
            config.envoy2_performance = csvGetInt(csv, this.GetHeadIndex("envoy2_performance"));
            config.envoy2_plot = csvGetInt(csv, this.GetHeadIndex("envoy2_plot"));
            config.envoy2_art = csvGetInt(csv, this.GetHeadIndex("envoy2_art"));
            config.envoy2_entertainment = csvGetInt(csv, this.GetHeadIndex("envoy2_entertainment"));
            config.envoy3_sex = csvGetInt(csv, this.GetHeadIndex("envoy3_sex"));
            config.envoy3_Continents = csvGetInt(csv, this.GetHeadIndex("envoy3_Continents"));
            config.envoy3_type = csvGetInt(csv, this.GetHeadIndex("envoy3_type"));
            config.envoy3_age = csvGetInt(csv, this.GetHeadIndex("envoy3_age"));
            config.envoy3_scene = csvGetInt(csv, this.GetHeadIndex("envoy3_scene"));
            config.envoy3_performance = csvGetInt(csv, this.GetHeadIndex("envoy3_performance"));
            config.envoy3_plot = csvGetInt(csv, this.GetHeadIndex("envoy3_plot"));
            config.envoy3_art = csvGetInt(csv, this.GetHeadIndex("envoy3_art"));
            config.envoy3_entertainment = csvGetInt(csv, this.GetHeadIndex("envoy3_entertainment"));
            config.envoy4_sex = csvGetInt(csv, this.GetHeadIndex("envoy4_sex"));
            config.envoy4_Continents = csvGetInt(csv, this.GetHeadIndex("envoy4_Continents"));
            config.envoy4_type = csvGetInt(csv, this.GetHeadIndex("envoy4_type"));
            config.envoy4_age = csvGetInt(csv, this.GetHeadIndex("envoy4_age"));
            config.envoy4_scene = csvGetInt(csv, this.GetHeadIndex("envoy4_scene"));
            config.envoy4_performance = csvGetInt(csv, this.GetHeadIndex("envoy4_performance"));
            config.envoy4_plot = csvGetInt(csv, this.GetHeadIndex("envoy4_plot"));
            config.envoy4_art = csvGetInt(csv, this.GetHeadIndex("envoy4_art"));
            config.envoy4_entertainment = csvGetInt(csv, this.GetHeadIndex("envoy4_entertainment"));
            config.envoy5_sex = csvGetInt(csv, this.GetHeadIndex("envoy5_sex"));
            config.envoy5_Continents = csvGetInt(csv, this.GetHeadIndex("envoy5_Continents"));
            config.envoy5_type = csvGetInt(csv, this.GetHeadIndex("envoy5_type"));
            config.envoy5_age = csvGetInt(csv, this.GetHeadIndex("envoy5_age"));
            config.envoy5_scene = csvGetInt(csv, this.GetHeadIndex("envoy5_scene"));
            config.envoy5_performance = csvGetInt(csv, this.GetHeadIndex("envoy5_performance"));
            config.envoy5_plot = csvGetInt(csv, this.GetHeadIndex("envoy5_plot"));
            config.envoy5_art = csvGetInt(csv, this.GetHeadIndex("envoy5_art"));
            config.envoy5_entertainment = csvGetInt(csv, this.GetHeadIndex("envoy5_entertainment"));
            config.drop_out = toIntArray(csvGetString(csv, this.GetHeadIndex("drop_out")));
            config.random_out = toIntArray(csvGetString(csv, this.GetHeadIndex("random_out")));
            config.order_qua = toIntArray(csvGetString(csv, this.GetHeadIndex("order_qua")));
            config.order_num = csvGetInt(csv, this.GetHeadIndex("order_num"));
            config.expect = csvGetInt(csv, this.GetHeadIndex("expect"));
            config.pre_id = csvGetInt(csv, this.GetHeadIndex("pre_id"));
            config.next_city = csvGetInt(csv, this.GetHeadIndex("next_city"));
            config.cut_scene = csvGetInt(csv, this.GetHeadIndex("cut_scene"));
            config.new_user_guide = csvGetInt(csv, this.GetHeadIndex("new_user_guide"));
            config.country = csvGetInt(csv, this.GetHeadIndex("country"));
            config.popularize_id = csvGetInt(csv, this.GetHeadIndex("popularize_id"));
            this.addConfig(config);
        };
        return CityConfigReaderStruct;
    }(configs.CsvConfigRender));
    configs.CityConfigReaderStruct = CityConfigReaderStruct;
})(configs || (configs = {}));
//# sourceMappingURL=CityConfigReaderStruct.js.map