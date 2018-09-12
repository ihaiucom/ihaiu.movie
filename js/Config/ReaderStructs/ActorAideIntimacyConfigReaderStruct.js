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
    var ActorAideIntimacyConfigReaderStruct = /** @class */ (function (_super) {
        __extends(ActorAideIntimacyConfigReaderStruct, _super);
        function ActorAideIntimacyConfigReaderStruct() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.tableName = "ActorAideIntimacy";
            return _this;
        }
        ActorAideIntimacyConfigReaderStruct.prototype.ParseCsv = function (csv) {
            var config = new configs.ActorAideIntimacyConfig();
            config.id = csvGetInt(csv, this.GetHeadIndex("id"));
            config.lv = csvGetInt(csv, this.GetHeadIndex("lv"));
            config.cost = configs.DTItemNum.parse(csvGetString(csv, this.GetHeadIndex("cost")));
            config.percent = csvGetInt(csv, this.GetHeadIndex("percent"));
            config.tips = csvGetString(csv, this.GetHeadIndex("tips"));
            this.addConfig(config);
        };
        return ActorAideIntimacyConfigReaderStruct;
    }(configs.CsvConfigRender));
    configs.ActorAideIntimacyConfigReaderStruct = ActorAideIntimacyConfigReaderStruct;
})(configs || (configs = {}));
//# sourceMappingURL=ActorAideIntimacyConfigReaderStruct.js.map