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
    var MsgProtoErrorConfigReaderStruct = /** @class */ (function (_super) {
        __extends(MsgProtoErrorConfigReaderStruct, _super);
        function MsgProtoErrorConfigReaderStruct() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.tableName = "MsgProtoError";
            return _this;
        }
        MsgProtoErrorConfigReaderStruct.prototype.ParseCsv = function (csv) {
            var config = new configs.MsgProtoErrorConfig();
            config.id = csvGetInt(csv, this.GetHeadIndex("id"));
            config.key = csvGetString(csv, this.GetHeadIndex("key"));
            config.module = csvGetString(csv, this.GetHeadIndex("module"));
            config.zh_cn_notice = csvGetString(csv, this.GetHeadIndex("zh_cn_notice"));
            this.addConfig(config);
        };
        return MsgProtoErrorConfigReaderStruct;
    }(configs.CsvConfigRender));
    configs.MsgProtoErrorConfigReaderStruct = MsgProtoErrorConfigReaderStruct;
})(configs || (configs = {}));
//# sourceMappingURL=MsgProtoErrorConfigReaderStruct.js.map