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
    var TurntableRewardConfigReaderStruct = /** @class */ (function (_super) {
        __extends(TurntableRewardConfigReaderStruct, _super);
        function TurntableRewardConfigReaderStruct() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.tableName = "TurntableReward";
            return _this;
        }
        TurntableRewardConfigReaderStruct.prototype.ParseCsv = function (csv) {
            var config = new configs.TurntableRewardConfig();
            config.id = csvGetInt(csv, this.GetHeadIndex("id"));
            config.type = csvGetInt(csv, this.GetHeadIndex("type"));
            config.itemtype = csvGetInt(csv, this.GetHeadIndex("itemtype"));
            config.itme = csvGetInt(csv, this.GetHeadIndex("itme"));
            config.quantity = csvGetInt(csv, this.GetHeadIndex("quantity"));
            config.weights = csvGetInt(csv, this.GetHeadIndex("weights"));
            this.addConfig(config);
        };
        return TurntableRewardConfigReaderStruct;
    }(configs.CsvConfigRender));
    configs.TurntableRewardConfigReaderStruct = TurntableRewardConfigReaderStruct;
})(configs || (configs = {}));
//# sourceMappingURL=TurntableRewardConfigReaderStruct.js.map