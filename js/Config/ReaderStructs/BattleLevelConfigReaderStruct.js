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
    var BattleLevelConfigReaderStruct = /** @class */ (function (_super) {
        __extends(BattleLevelConfigReaderStruct, _super);
        function BattleLevelConfigReaderStruct() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.tableName = "BattleLevel";
            return _this;
        }
        BattleLevelConfigReaderStruct.prototype.ParseCsv = function (csv) {
            var config = new configs.BattleLevelConfig();
            config.id = csvGetInt(csv, this.GetHeadIndex("id"));
            config.type_con = csvGetInt(csv, this.GetHeadIndex("type_con"));
            config.tag_con = csvGetInt(csv, this.GetHeadIndex("tag_con"));
            config.character_con = csvGetInt(csv, this.GetHeadIndex("character_con"));
            this.addConfig(config);
        };
        return BattleLevelConfigReaderStruct;
    }(configs.CsvConfigRender));
    configs.BattleLevelConfigReaderStruct = BattleLevelConfigReaderStruct;
})(configs || (configs = {}));
//# sourceMappingURL=BattleLevelConfigReaderStruct.js.map