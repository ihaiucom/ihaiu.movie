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
    var SpeakConfigReaderStruct = /** @class */ (function (_super) {
        __extends(SpeakConfigReaderStruct, _super);
        function SpeakConfigReaderStruct() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.tableName = "Speak";
            return _this;
        }
        SpeakConfigReaderStruct.prototype.ParseCsv = function (csv) {
            var config = new configs.SpeakConfig();
            config.id = csvGetInt(csv, this.GetHeadIndex("id"));
            config.en_speak = csvGetString(csv, this.GetHeadIndex("en_speak"));
            config.cn_speak = csvGetString(csv, this.GetHeadIndex("cn_speak"));
            config.tips = csvGetString(csv, this.GetHeadIndex("tips"));
            this.addConfig(config);
        };
        return SpeakConfigReaderStruct;
    }(configs.CsvConfigRender));
    configs.SpeakConfigReaderStruct = SpeakConfigReaderStruct;
})(configs || (configs = {}));
//# sourceMappingURL=SpeakConfigReaderStruct.js.map