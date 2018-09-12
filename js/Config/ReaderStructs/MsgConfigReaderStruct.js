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
    var MsgConfigReaderStruct = /** @class */ (function (_super) {
        __extends(MsgConfigReaderStruct, _super);
        function MsgConfigReaderStruct() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.tableName = "Msg";
            return _this;
        }
        MsgConfigReaderStruct.prototype.ParseCsv = function (csv) {
            var config = new configs.MsgConfig();
            config.id = csvGetInt(csv, this.GetHeadIndex("id"));
            config.key = csvGetString(csv, this.GetHeadIndex("key"));
            config.module = csvGetString(csv, this.GetHeadIndex("module"));
            config.name = csvGetString(csv, this.GetHeadIndex("name"));
            config.zh_cn_notice = csvGetString(csv, this.GetHeadIndex("zh_cn_notice"));
            config.en_notice = csvGetString(csv, this.GetHeadIndex("en_notice"));
            this.addConfig(config);
        };
        return MsgConfigReaderStruct;
    }(configs.CsvConfigRender));
    configs.MsgConfigReaderStruct = MsgConfigReaderStruct;
})(configs || (configs = {}));
//# sourceMappingURL=MsgConfigReaderStruct.js.map