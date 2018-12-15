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
    var ActorLevelConfigReaderStruct = /** @class */ (function (_super) {
        __extends(ActorLevelConfigReaderStruct, _super);
        function ActorLevelConfigReaderStruct() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.tableName = "ActorLevel";
            return _this;
        }
        ActorLevelConfigReaderStruct.prototype.ParseCsv = function (csv) {
            var config = new configs.ActorLevelConfig();
            config.id = csvGetInt(csv, this.GetHeadIndex("id"));
            config.star1_vice = csvGetInt(csv, this.GetHeadIndex("star1_vice"));
            config.star1_main = csvGetInt(csv, this.GetHeadIndex("star1_main"));
            config.star2_vice = csvGetInt(csv, this.GetHeadIndex("star2_vice"));
            config.star2_main = csvGetInt(csv, this.GetHeadIndex("star2_main"));
            config.star3_vice = csvGetInt(csv, this.GetHeadIndex("star3_vice"));
            config.star3_main = csvGetInt(csv, this.GetHeadIndex("star3_main"));
            config.star4_vice = csvGetInt(csv, this.GetHeadIndex("star4_vice"));
            config.star4_main = csvGetInt(csv, this.GetHeadIndex("star4_main"));
            config.star5_vice = csvGetInt(csv, this.GetHeadIndex("star5_vice"));
            config.star5_main = csvGetInt(csv, this.GetHeadIndex("star5_main"));
            config.star6_vice = csvGetInt(csv, this.GetHeadIndex("star6_vice"));
            config.star6_main = csvGetInt(csv, this.GetHeadIndex("star6_main"));
            config.cost = configs.DTItemNum.parse(csvGetString(csv, this.GetHeadIndex("cost")));
            config.star1_paycheck = csvGetInt(csv, this.GetHeadIndex("star1_paycheck"));
            config.star2_paycheck = csvGetInt(csv, this.GetHeadIndex("star2_paycheck"));
            config.star3_paycheck = csvGetInt(csv, this.GetHeadIndex("star3_paycheck"));
            config.star4_paycheck = csvGetInt(csv, this.GetHeadIndex("star4_paycheck"));
            config.star5_paycheck = csvGetInt(csv, this.GetHeadIndex("star5_paycheck"));
            config.star6_paycheck = csvGetInt(csv, this.GetHeadIndex("star6_paycheck"));
            config.star1_assets = csvGetInt(csv, this.GetHeadIndex("star1_assets"));
            config.star2_assets = csvGetInt(csv, this.GetHeadIndex("star2_assets"));
            config.star3_assets = csvGetInt(csv, this.GetHeadIndex("star3_assets"));
            config.star4_assets = csvGetInt(csv, this.GetHeadIndex("star4_assets"));
            config.star5_assets = csvGetInt(csv, this.GetHeadIndex("star5_assets"));
            config.star6_assets = csvGetInt(csv, this.GetHeadIndex("star6_assets"));
            config.star1_stamina = csvGetInt(csv, this.GetHeadIndex("star1_stamina"));
            config.star2_stamina = csvGetInt(csv, this.GetHeadIndex("star2_stamina"));
            config.star3_stamina = csvGetInt(csv, this.GetHeadIndex("star3_stamina"));
            config.star4_stamina = csvGetInt(csv, this.GetHeadIndex("star4_stamina"));
            config.star5_stamina = csvGetInt(csv, this.GetHeadIndex("star5_stamina"));
            config.star6_stamina = csvGetInt(csv, this.GetHeadIndex("star6_stamina"));
            config.culture = csvGetInt(csv, this.GetHeadIndex("culture"));
            config.star1_paycheck_max = csvGetInt(csv, this.GetHeadIndex("star1_paycheck_max"));
            config.star2_paycheck_max = csvGetInt(csv, this.GetHeadIndex("star2_paycheck_max"));
            config.star3_paycheck_max = csvGetInt(csv, this.GetHeadIndex("star3_paycheck_max"));
            config.star4_paycheck_max = csvGetInt(csv, this.GetHeadIndex("star4_paycheck_max"));
            config.star5_paycheck_max = csvGetInt(csv, this.GetHeadIndex("star5_paycheck_max"));
            config.star6_paycheck_max = csvGetInt(csv, this.GetHeadIndex("star6_paycheck_max"));
            this.addConfig(config);
        };
        return ActorLevelConfigReaderStruct;
    }(configs.CsvConfigRender));
    configs.ActorLevelConfigReaderStruct = ActorLevelConfigReaderStruct;
})(configs || (configs = {}));
//# sourceMappingURL=ActorLevelConfigReaderStruct.js.map