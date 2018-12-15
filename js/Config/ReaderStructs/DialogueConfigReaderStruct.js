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
    var DialogueConfigReaderStruct = /** @class */ (function (_super) {
        __extends(DialogueConfigReaderStruct, _super);
        function DialogueConfigReaderStruct() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.tableName = "Dialogue";
            return _this;
        }
        DialogueConfigReaderStruct.prototype.ParseCsv = function (csv) {
            var config = new configs.DialogueConfig();
            config.id = csvGetInt(csv, this.GetHeadIndex("id"));
            config.name = csvGetString(csv, this.GetHeadIndex("name"));
            config.face = csvGetInt(csv, this.GetHeadIndex("face"));
            config.zh_cn_content = csvGetString(csv, this.GetHeadIndex("zh_cn_content"));
            this.addConfig(config);
        };
        return DialogueConfigReaderStruct;
    }(configs.CsvConfigRender));
    configs.DialogueConfigReaderStruct = DialogueConfigReaderStruct;
})(configs || (configs = {}));
//# sourceMappingURL=DialogueConfigReaderStruct.js.map