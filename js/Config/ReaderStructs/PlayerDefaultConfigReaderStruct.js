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
    var PlayerDefaultConfigReaderStruct = /** @class */ (function (_super) {
        __extends(PlayerDefaultConfigReaderStruct, _super);
        function PlayerDefaultConfigReaderStruct() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.tableName = "PlayerDefault";
            return _this;
        }
        PlayerDefaultConfigReaderStruct.prototype.ParseCsv = function (csv) {
            var config = new configs.PlayerDefaultConfig();
            config.id = csvGetInt(csv, this.GetHeadIndex("id"));
            config.actors = toIntArray(csvGetString(csv, this.GetHeadIndex("actors")));
            config.items = configs.DTItemNum.parseArray(csvGetString(csv, this.GetHeadIndex("items")));
            this.addConfig(config);
        };
        return PlayerDefaultConfigReaderStruct;
    }(configs.CsvConfigRender));
    configs.PlayerDefaultConfigReaderStruct = PlayerDefaultConfigReaderStruct;
})(configs || (configs = {}));
//# sourceMappingURL=PlayerDefaultConfigReaderStruct.js.map