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
    var GameLevelConfigReaderStruct = /** @class */ (function (_super) {
        __extends(GameLevelConfigReaderStruct, _super);
        function GameLevelConfigReaderStruct() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.tableName = "GameLevel";
            return _this;
        }
        GameLevelConfigReaderStruct.prototype.ParseCsv = function (csv) {
            var config = new configs.GameLevelConfig();
            config.id = csvGetInt(csv, this.GetHeadIndex("id"));
            config.zh_cn_name = csvGetString(csv, this.GetHeadIndex("zh_cn_name"));
            config.stall = csvGetInt(csv, this.GetHeadIndex("stall"));
            config.icon = csvGetInt(csv, this.GetHeadIndex("icon"));
            config.pre_id = csvGetInt(csv, this.GetHeadIndex("pre_id"));
            config.next_level = csvGetInt(csv, this.GetHeadIndex("next_level"));
            this.addConfig(config);
        };
        return GameLevelConfigReaderStruct;
    }(configs.CsvConfigRender));
    configs.GameLevelConfigReaderStruct = GameLevelConfigReaderStruct;
})(configs || (configs = {}));
//# sourceMappingURL=GameLevelConfigReaderStruct.js.map