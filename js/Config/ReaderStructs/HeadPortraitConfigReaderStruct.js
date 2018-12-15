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
    var HeadPortraitConfigReaderStruct = /** @class */ (function (_super) {
        __extends(HeadPortraitConfigReaderStruct, _super);
        function HeadPortraitConfigReaderStruct() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.tableName = "HeadPortrait";
            return _this;
        }
        HeadPortraitConfigReaderStruct.prototype.ParseCsv = function (csv) {
            var config = new configs.HeadPortraitConfig();
            config.id = csvGetInt(csv, this.GetHeadIndex("id"));
            config.zh_cn_name = csvGetString(csv, this.GetHeadIndex("zh_cn_name"));
            config.sex = csvGetInt(csv, this.GetHeadIndex("sex"));
            config.unlock = configs.DTItemNum.parse(csvGetString(csv, this.GetHeadIndex("unlock")));
            config.icon = csvGetInt(csv, this.GetHeadIndex("icon"));
            this.addConfig(config);
        };
        return HeadPortraitConfigReaderStruct;
    }(configs.CsvConfigRender));
    configs.HeadPortraitConfigReaderStruct = HeadPortraitConfigReaderStruct;
})(configs || (configs = {}));
//# sourceMappingURL=HeadPortraitConfigReaderStruct.js.map