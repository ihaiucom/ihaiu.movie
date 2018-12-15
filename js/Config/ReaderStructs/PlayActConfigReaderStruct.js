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
    var PlayActConfigReaderStruct = /** @class */ (function (_super) {
        __extends(PlayActConfigReaderStruct, _super);
        function PlayActConfigReaderStruct() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.tableName = "PlayAct";
            return _this;
        }
        PlayActConfigReaderStruct.prototype.ParseCsv = function (csv) {
            var config = new configs.PlayActConfig();
            config.id = csvGetInt(csv, this.GetHeadIndex("id"));
            config.type = csvGetInt(csv, this.GetHeadIndex("type"));
            config.data = csvGetInt(csv, this.GetHeadIndex("data"));
            config.event = toIntArray(csvGetString(csv, this.GetHeadIndex("event")));
            config.tips = csvGetString(csv, this.GetHeadIndex("tips"));
            this.addConfig(config);
        };
        return PlayActConfigReaderStruct;
    }(configs.CsvConfigRender));
    configs.PlayActConfigReaderStruct = PlayActConfigReaderStruct;
})(configs || (configs = {}));
//# sourceMappingURL=PlayActConfigReaderStruct.js.map