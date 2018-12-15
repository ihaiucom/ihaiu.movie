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
    var ActorTrainLvConfigReaderStruct = /** @class */ (function (_super) {
        __extends(ActorTrainLvConfigReaderStruct, _super);
        function ActorTrainLvConfigReaderStruct() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.tableName = "ActorTrainLv";
            return _this;
        }
        ActorTrainLvConfigReaderStruct.prototype.ParseCsv = function (csv) {
            var config = new configs.ActorTrainLvConfig();
            config.id = csvGetInt(csv, this.GetHeadIndex("id"));
            config.star1_vice = toIntArray(csvGetString(csv, this.GetHeadIndex("star1_vice")));
            config.star1_main = toIntArray(csvGetString(csv, this.GetHeadIndex("star1_main")));
            config.star2_vice = toIntArray(csvGetString(csv, this.GetHeadIndex("star2_vice")));
            config.star2_main = toIntArray(csvGetString(csv, this.GetHeadIndex("star2_main")));
            config.star3_vice = toIntArray(csvGetString(csv, this.GetHeadIndex("star3_vice")));
            config.star3_main = toIntArray(csvGetString(csv, this.GetHeadIndex("star3_main")));
            config.star4_vice = toIntArray(csvGetString(csv, this.GetHeadIndex("star4_vice")));
            config.star4_main = toIntArray(csvGetString(csv, this.GetHeadIndex("star4_main")));
            config.star5_vice = toIntArray(csvGetString(csv, this.GetHeadIndex("star5_vice")));
            config.star5_main = toIntArray(csvGetString(csv, this.GetHeadIndex("star5_main")));
            config.star6_vice = toIntArray(csvGetString(csv, this.GetHeadIndex("star6_vice")));
            config.star6_main = toIntArray(csvGetString(csv, this.GetHeadIndex("star6_main")));
            config.cost = configs.DTItemNum.parseArray(csvGetString(csv, this.GetHeadIndex("cost")));
            config.diamonds_cost = configs.DTItemNum.parse(csvGetString(csv, this.GetHeadIndex("diamonds_cost")));
            this.addConfig(config);
        };
        return ActorTrainLvConfigReaderStruct;
    }(configs.CsvConfigRender));
    configs.ActorTrainLvConfigReaderStruct = ActorTrainLvConfigReaderStruct;
})(configs || (configs = {}));
//# sourceMappingURL=ActorTrainLvConfigReaderStruct.js.map