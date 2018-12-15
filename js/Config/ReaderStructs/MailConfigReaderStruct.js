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
    var MailConfigReaderStruct = /** @class */ (function (_super) {
        __extends(MailConfigReaderStruct, _super);
        function MailConfigReaderStruct() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.tableName = "Mail";
            return _this;
        }
        MailConfigReaderStruct.prototype.ParseCsv = function (csv) {
            var config = new configs.MailConfig();
            config.id = csvGetInt(csv, this.GetHeadIndex("id"));
            config.tip = csvGetString(csv, this.GetHeadIndex("tip"));
            config.life_time = csvGetInt(csv, this.GetHeadIndex("life_time"));
            config.zh_cn_title = csvGetString(csv, this.GetHeadIndex("zh_cn_title"));
            config.en_title = csvGetString(csv, this.GetHeadIndex("en_title"));
            config.zh_tw_title = csvGetString(csv, this.GetHeadIndex("zh_tw_title"));
            config.item = configs.DTItemNum.parseArray(csvGetString(csv, this.GetHeadIndex("item")));
            config.zh_cn_content = csvGetString(csv, this.GetHeadIndex("zh_cn_content"));
            config.en_content = csvGetString(csv, this.GetHeadIndex("en_content"));
            config.zh_tw_content = csvGetString(csv, this.GetHeadIndex("zh_tw_content"));
            this.addConfig(config);
        };
        return MailConfigReaderStruct;
    }(configs.CsvConfigRender));
    configs.MailConfigReaderStruct = MailConfigReaderStruct;
})(configs || (configs = {}));
//# sourceMappingURL=MailConfigReaderStruct.js.map