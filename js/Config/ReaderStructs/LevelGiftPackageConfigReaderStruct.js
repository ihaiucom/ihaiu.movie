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
    var LevelGiftPackageConfigReaderStruct = /** @class */ (function (_super) {
        __extends(LevelGiftPackageConfigReaderStruct, _super);
        function LevelGiftPackageConfigReaderStruct() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.tableName = "LevelGiftPackage";
            return _this;
        }
        LevelGiftPackageConfigReaderStruct.prototype.ParseCsv = function (csv) {
            var config = new configs.LevelGiftPackageConfig();
            config.id = csvGetInt(csv, this.GetHeadIndex("id"));
            config.zh_cn_name = csvGetString(csv, this.GetHeadIndex("zh_cn_name"));
            config.player_level = csvGetInt(csv, this.GetHeadIndex("player_level"));
            config.reward = configs.DTItemNum.parseArray(csvGetString(csv, this.GetHeadIndex("reward")));
            config.next_id = csvGetInt(csv, this.GetHeadIndex("next_id"));
            config.image = csvGetString(csv, this.GetHeadIndex("image"));
            this.addConfig(config);
        };
        return LevelGiftPackageConfigReaderStruct;
    }(configs.CsvConfigRender));
    configs.LevelGiftPackageConfigReaderStruct = LevelGiftPackageConfigReaderStruct;
})(configs || (configs = {}));
//# sourceMappingURL=LevelGiftPackageConfigReaderStruct.js.map