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
    var GameVersionConfigReaderStruct = /** @class */ (function (_super) {
        __extends(GameVersionConfigReaderStruct, _super);
        function GameVersionConfigReaderStruct() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.tableName = "GameVersion";
            return _this;
        }
        GameVersionConfigReaderStruct.prototype.ParseCsv = function (csv) {
            var config = new configs.GameVersionConfig();
            config.id = csvGetInt(csv, this.GetHeadIndex("id"));
            config.Platform = csvGetString(csv, this.GetHeadIndex("Platform"));
            config.ApplicationId = csvGetString(csv, this.GetHeadIndex("ApplicationId"));
            config.ResWeb = csvGetString(csv, this.GetHeadIndex("ResWeb"));
            config.AppVersion = csvGetString(csv, this.GetHeadIndex("AppVersion"));
            config.PartialVersion = csvGetString(csv, this.GetHeadIndex("PartialVersion"));
            config.PartialFolder = csvGetString(csv, this.GetHeadIndex("PartialFolder"));
            config.PatchVersion = csvGetString(csv, this.GetHeadIndex("PatchVersion"));
            config.PatchFolder = csvGetString(csv, this.GetHeadIndex("PatchFolder"));
            config.IsPartialAlert = csvGetBoolean(csv, this.GetHeadIndex("IsPartialAlert"));
            config.IsPatchAlert = csvGetBoolean(csv, this.GetHeadIndex("IsPatchAlert"));
            config.VisiableGM = csvGetBoolean(csv, this.GetHeadIndex("VisiableGM"));
            config.IsErrorAlert = csvGetBoolean(csv, this.GetHeadIndex("IsErrorAlert"));
            config.AppDownloadWeb = csvGetString(csv, this.GetHeadIndex("AppDownloadWeb"));
            this.addConfig(config);
        };
        return GameVersionConfigReaderStruct;
    }(configs.CsvConfigRender));
    configs.GameVersionConfigReaderStruct = GameVersionConfigReaderStruct;
})(configs || (configs = {}));
//# sourceMappingURL=GameVersionConfigReaderStruct.js.map