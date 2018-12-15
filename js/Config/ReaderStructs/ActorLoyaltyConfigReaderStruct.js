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
    var ActorLoyaltyConfigReaderStruct = /** @class */ (function (_super) {
        __extends(ActorLoyaltyConfigReaderStruct, _super);
        function ActorLoyaltyConfigReaderStruct() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.tableName = "ActorLoyalty";
            return _this;
        }
        ActorLoyaltyConfigReaderStruct.prototype.ParseCsv = function (csv) {
            var config = new configs.ActorLoyaltyConfig();
            config.id = csvGetInt(csv, this.GetHeadIndex("id"));
            config.lv = csvGetInt(csv, this.GetHeadIndex("lv"));
            config.exp = csvGetInt(csv, this.GetHeadIndex("exp"));
            config.max_lv = csvGetInt(csv, this.GetHeadIndex("max_lv"));
            config.tips = csvGetString(csv, this.GetHeadIndex("tips"));
            this.addConfig(config);
        };
        return ActorLoyaltyConfigReaderStruct;
    }(configs.CsvConfigRender));
    configs.ActorLoyaltyConfigReaderStruct = ActorLoyaltyConfigReaderStruct;
})(configs || (configs = {}));
//# sourceMappingURL=ActorLoyaltyConfigReaderStruct.js.map