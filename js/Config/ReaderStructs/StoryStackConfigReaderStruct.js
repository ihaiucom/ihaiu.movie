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
    var StoryStackConfigReaderStruct = /** @class */ (function (_super) {
        __extends(StoryStackConfigReaderStruct, _super);
        function StoryStackConfigReaderStruct() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.path = "StoryStack";
            return _this;
        }
        StoryStackConfigReaderStruct.prototype.ParseCsv = function (csv) {
            var config = new configs.StoryStackConfig();
            config.id = csvGetInt(csv, this.GetHeadIndex("id"));
            config.key = csvGetString(csv, this.GetHeadIndex("key"));
            config.name = csvGetString(csv, this.GetHeadIndex("name"));
            config.par = toIntArray(csvGetString(csv, this.GetHeadIndex("par")));
            this.addConfig(config);
        };
        return StoryStackConfigReaderStruct;
    }(configs.CsvConfigRender));
    configs.StoryStackConfigReaderStruct = StoryStackConfigReaderStruct;
})(configs || (configs = {}));
//# sourceMappingURL=StoryStackConfigReaderStruct.js.map