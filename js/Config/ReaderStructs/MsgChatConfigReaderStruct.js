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
    var MsgChatConfigReaderStruct = /** @class */ (function (_super) {
        __extends(MsgChatConfigReaderStruct, _super);
        function MsgChatConfigReaderStruct() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.tableName = "MsgChat";
            return _this;
        }
        MsgChatConfigReaderStruct.prototype.ParseCsv = function (csv) {
            var config = new configs.MsgChatConfig();
            config.id = csvGetInt(csv, this.GetHeadIndex("id"));
            config.key = csvGetString(csv, this.GetHeadIndex("key"));
            config.info = csvGetString(csv, this.GetHeadIndex("info"));
            config.zh_cn_notice = csvGetString(csv, this.GetHeadIndex("zh_cn_notice"));
            config.parameter = configs.DTlValue2.parseArray(csvGetString(csv, this.GetHeadIndex("parameter")));
            config.popup = configs.DTlValue2.parseArray(csvGetString(csv, this.GetHeadIndex("popup")));
            this.addConfig(config);
        };
        return MsgChatConfigReaderStruct;
    }(configs.CsvConfigRender));
    configs.MsgChatConfigReaderStruct = MsgChatConfigReaderStruct;
})(configs || (configs = {}));
//# sourceMappingURL=MsgChatConfigReaderStruct.js.map