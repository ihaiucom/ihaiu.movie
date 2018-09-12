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
    var PlayerLevelConfigReaderStruct = /** @class */ (function (_super) {
        __extends(PlayerLevelConfigReaderStruct, _super);
        function PlayerLevelConfigReaderStruct() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.tableName = "PlayerLevel";
            return _this;
        }
        PlayerLevelConfigReaderStruct.prototype.ParseCsv = function (csv) {
            var config = new configs.PlayerLevelConfig();
            config.id = csvGetInt(csv, this.GetHeadIndex("id"));
            config.fans = csvGetInt(csv, this.GetHeadIndex("fans"));
            config.story = configs.DTItemNum.parse(csvGetString(csv, this.GetHeadIndex("story")));
            config.reward = configs.DTItemNum.parseArray(csvGetString(csv, this.GetHeadIndex("reward")));
            config.order_qua = toIntArray(csvGetString(csv, this.GetHeadIndex("order_qua")));
            config.order_num = csvGetInt(csv, this.GetHeadIndex("order_num"));
            config.train_max = csvGetInt(csv, this.GetHeadIndex("train_max"));
            config.train_count = csvGetInt(csv, this.GetHeadIndex("train_count"));
            config.actor_max = csvGetInt(csv, this.GetHeadIndex("actor_max"));
            config.actor_count = csvGetInt(csv, this.GetHeadIndex("actor_count"));
            config.hide_max = csvGetInt(csv, this.GetHeadIndex("hide_max"));
            config.hide_count = csvGetInt(csv, this.GetHeadIndex("hide_count"));
            config.day_max = csvGetInt(csv, this.GetHeadIndex("day_max"));
            config.day = csvGetInt(csv, this.GetHeadIndex("day"));
            config.meeting_cd = csvGetInt(csv, this.GetHeadIndex("meeting_cd"));
            config.cost = configs.DTItemNum.parse(csvGetString(csv, this.GetHeadIndex("cost")));
            config.mc_special_package1 = configs.DTItemNum.parse(csvGetString(csv, this.GetHeadIndex("mc_special_package1")));
            config.mc_special_package2 = configs.DTItemNum.parse(csvGetString(csv, this.GetHeadIndex("mc_special_package2")));
            config.shop_1003 = csvGetInt(csv, this.GetHeadIndex("shop_1003"));
            config.shop_1004 = csvGetInt(csv, this.GetHeadIndex("shop_1004"));
            config.Turntable_min = csvGetInt(csv, this.GetHeadIndex("Turntable_min"));
            config.Turntable_max = csvGetInt(csv, this.GetHeadIndex("Turntable_max"));
            this.addConfig(config);
        };
        return PlayerLevelConfigReaderStruct;
    }(configs.CsvConfigRender));
    configs.PlayerLevelConfigReaderStruct = PlayerLevelConfigReaderStruct;
})(configs || (configs = {}));
//# sourceMappingURL=PlayerLevelConfigReaderStruct.js.map