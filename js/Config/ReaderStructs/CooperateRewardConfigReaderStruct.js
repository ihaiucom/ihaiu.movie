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
    var CooperateRewardConfigReaderStruct = /** @class */ (function (_super) {
        __extends(CooperateRewardConfigReaderStruct, _super);
        function CooperateRewardConfigReaderStruct() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.path = "CooperateReward";
            return _this;
        }
        CooperateRewardConfigReaderStruct.prototype.ParseCsv = function (csv) {
            var config = new configs.CooperateRewardConfig();
            config.id = csvGetInt(csv, this.GetHeadIndex("id"));
            config.tips = csvGetString(csv, this.GetHeadIndex("tips"));
            config.first_id = csvGetInt(csv, this.GetHeadIndex("first_id"));
            config.first_num = csvGetInt(csv, this.GetHeadIndex("first_num"));
            config.second_id = csvGetInt(csv, this.GetHeadIndex("second_id"));
            config.second_num = csvGetInt(csv, this.GetHeadIndex("second_num"));
            config.third_id = csvGetInt(csv, this.GetHeadIndex("third_id"));
            config.third_num = csvGetInt(csv, this.GetHeadIndex("third_num"));
            config.fourth_id = csvGetInt(csv, this.GetHeadIndex("fourth_id"));
            config.fourth_num = csvGetInt(csv, this.GetHeadIndex("fourth_num"));
            config.fifth_id = csvGetInt(csv, this.GetHeadIndex("fifth_id"));
            config.fifth_num = csvGetInt(csv, this.GetHeadIndex("fifth_num"));
            config.sixth_id = csvGetInt(csv, this.GetHeadIndex("sixth_id"));
            config.six_num = csvGetInt(csv, this.GetHeadIndex("six_num"));
            this.addConfig(config);
        };
        return CooperateRewardConfigReaderStruct;
    }(configs.CsvConfigRender));
    configs.CooperateRewardConfigReaderStruct = CooperateRewardConfigReaderStruct;
})(configs || (configs = {}));
//# sourceMappingURL=CooperateRewardConfigReaderStruct.js.map