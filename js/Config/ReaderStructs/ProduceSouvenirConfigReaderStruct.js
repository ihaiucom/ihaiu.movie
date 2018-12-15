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
    var ProduceSouvenirConfigReaderStruct = /** @class */ (function (_super) {
        __extends(ProduceSouvenirConfigReaderStruct, _super);
        function ProduceSouvenirConfigReaderStruct() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.tableName = "ProduceSouvenir";
            return _this;
        }
        ProduceSouvenirConfigReaderStruct.prototype.ParseCsv = function (csv) {
            var config = new configs.ProduceSouvenirConfig();
            config.id = csvGetInt(csv, this.GetHeadIndex("id"));
            config.once = csvGetInt(csv, this.GetHeadIndex("once"));
            config.max = csvGetInt(csv, this.GetHeadIndex("max"));
            this.addConfig(config);
        };
        return ProduceSouvenirConfigReaderStruct;
    }(configs.CsvConfigRender));
    configs.ProduceSouvenirConfigReaderStruct = ProduceSouvenirConfigReaderStruct;
})(configs || (configs = {}));
//# sourceMappingURL=ProduceSouvenirConfigReaderStruct.js.map