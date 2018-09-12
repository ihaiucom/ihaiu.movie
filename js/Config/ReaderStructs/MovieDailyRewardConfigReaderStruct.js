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
    var MovieDailyRewardConfigReaderStruct = /** @class */ (function (_super) {
        __extends(MovieDailyRewardConfigReaderStruct, _super);
        function MovieDailyRewardConfigReaderStruct() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.path = "MovieDailyReward";
            return _this;
        }
        MovieDailyRewardConfigReaderStruct.prototype.ParseCsv = function (csv) {
            var config = new configs.MovieDailyRewardConfig();
            config.id = csvGetInt(csv, this.GetHeadIndex("id"));
            config.num = csvGetInt(csv, this.GetHeadIndex("num"));
            config.tips = csvGetString(csv, this.GetHeadIndex("tips"));
            config.item = toIntArray(csvGetString(csv, this.GetHeadIndex("item")));
            config.block1_num = toIntArray(csvGetString(csv, this.GetHeadIndex("block1_num")));
            config.block2_num = toIntArray(csvGetString(csv, this.GetHeadIndex("block2_num")));
            config.block3_num = toIntArray(csvGetString(csv, this.GetHeadIndex("block3_num")));
            config.block4_num = toIntArray(csvGetString(csv, this.GetHeadIndex("block4_num")));
            config.block5_num = toIntArray(csvGetString(csv, this.GetHeadIndex("block5_num")));
            config.block6_num = toIntArray(csvGetString(csv, this.GetHeadIndex("block6_num")));
            config.block7_num = toIntArray(csvGetString(csv, this.GetHeadIndex("block7_num")));
            config.block8_num = toIntArray(csvGetString(csv, this.GetHeadIndex("block8_num")));
            config.block9_num = toIntArray(csvGetString(csv, this.GetHeadIndex("block9_num")));
            config.block10_num = toIntArray(csvGetString(csv, this.GetHeadIndex("block10_num")));
            config.city1_num = toIntArray(csvGetString(csv, this.GetHeadIndex("city1_num")));
            config.city2_num = toIntArray(csvGetString(csv, this.GetHeadIndex("city2_num")));
            config.city3_num = toIntArray(csvGetString(csv, this.GetHeadIndex("city3_num")));
            config.city4_num = toIntArray(csvGetString(csv, this.GetHeadIndex("city4_num")));
            config.city5_num = toIntArray(csvGetString(csv, this.GetHeadIndex("city5_num")));
            config.city6_num = toIntArray(csvGetString(csv, this.GetHeadIndex("city6_num")));
            config.city7_num = toIntArray(csvGetString(csv, this.GetHeadIndex("city7_num")));
            config.city8_num = toIntArray(csvGetString(csv, this.GetHeadIndex("city8_num")));
            config.city9_num = toIntArray(csvGetString(csv, this.GetHeadIndex("city9_num")));
            config.city10_num = toIntArray(csvGetString(csv, this.GetHeadIndex("city10_num")));
            config.county1_num = toIntArray(csvGetString(csv, this.GetHeadIndex("county1_num")));
            config.county2_num = toIntArray(csvGetString(csv, this.GetHeadIndex("county2_num")));
            config.county3_num = toIntArray(csvGetString(csv, this.GetHeadIndex("county3_num")));
            config.county4_num = toIntArray(csvGetString(csv, this.GetHeadIndex("county4_num")));
            config.county5_num = toIntArray(csvGetString(csv, this.GetHeadIndex("county5_num")));
            config.county6_num = toIntArray(csvGetString(csv, this.GetHeadIndex("county6_num")));
            config.county7_num = toIntArray(csvGetString(csv, this.GetHeadIndex("county7_num")));
            config.county8_num = toIntArray(csvGetString(csv, this.GetHeadIndex("county8_num")));
            config.county9_num = toIntArray(csvGetString(csv, this.GetHeadIndex("county9_num")));
            config.county10_num = toIntArray(csvGetString(csv, this.GetHeadIndex("county10_num")));
            config.world1_num = toIntArray(csvGetString(csv, this.GetHeadIndex("world1_num")));
            config.world2_num = toIntArray(csvGetString(csv, this.GetHeadIndex("world2_num")));
            config.world3_num = toIntArray(csvGetString(csv, this.GetHeadIndex("world3_num")));
            config.world4_num = toIntArray(csvGetString(csv, this.GetHeadIndex("world4_num")));
            config.world5_num = toIntArray(csvGetString(csv, this.GetHeadIndex("world5_num")));
            config.world6_num = toIntArray(csvGetString(csv, this.GetHeadIndex("world6_num")));
            config.world7_num = toIntArray(csvGetString(csv, this.GetHeadIndex("world7_num")));
            config.world8_num = toIntArray(csvGetString(csv, this.GetHeadIndex("world8_num")));
            config.world9_num = toIntArray(csvGetString(csv, this.GetHeadIndex("world9_num")));
            config.world10_num = toIntArray(csvGetString(csv, this.GetHeadIndex("world10_num")));
            this.addConfig(config);
        };
        return MovieDailyRewardConfigReaderStruct;
    }(configs.CsvConfigRender));
    configs.MovieDailyRewardConfigReaderStruct = MovieDailyRewardConfigReaderStruct;
})(configs || (configs = {}));
//# sourceMappingURL=MovieDailyRewardConfigReaderStruct.js.map