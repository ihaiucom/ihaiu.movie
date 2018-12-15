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
    var ImageConfigReaderStruct = /** @class */ (function (_super) {
        __extends(ImageConfigReaderStruct, _super);
        function ImageConfigReaderStruct() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.tableName = "Image";
            return _this;
        }
        ImageConfigReaderStruct.prototype.ParseCsv = function (csv) {
            var config = new configs.ImageConfig();
            config.id = csvGetInt(csv, this.GetHeadIndex("id"));
            config.key = csvGetString(csv, this.GetHeadIndex("key"));
            config.tip = csvGetString(csv, this.GetHeadIndex("tip"));
            this.addConfig(config);
        };
        return ImageConfigReaderStruct;
    }(configs.CsvConfigRender));
    configs.ImageConfigReaderStruct = ImageConfigReaderStruct;
})(configs || (configs = {}));
//# sourceMappingURL=ImageConfigReaderStruct.js.map