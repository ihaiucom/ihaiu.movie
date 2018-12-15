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
    var TestConfigReaderStruct = /** @class */ (function (_super) {
        __extends(TestConfigReaderStruct, _super);
        function TestConfigReaderStruct() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.tableName = "Test";
            return _this;
        }
        TestConfigReaderStruct.prototype.ParseCsv = function (csv) {
            var config = new configs.TestConfig();
            config.id = csvGetInt(csv, this.GetHeadIndex("id"));
            config.name = csvGetString(csv, this.GetHeadIndex("name"));
            config.age = csvGetInt(csv, this.GetHeadIndex("age"));
            config.intArray = toIntArray(csvGetString(csv, this.GetHeadIndex("intArray")));
            config.coin = configs.DTItemNum.parse(csvGetString(csv, this.GetHeadIndex("coin")));
            config.items = configs.DTItemNum.parseArray(csvGetString(csv, this.GetHeadIndex("items")));
            config.position = configs.DTVector2.parse(csvGetString(csv, this.GetHeadIndex("position")));
            config.story = configs.DTStoryNum.parse(csvGetString(csv, this.GetHeadIndex("story")));
            this.addConfig(config);
        };
        return TestConfigReaderStruct;
    }(configs.CsvConfigRender));
    configs.TestConfigReaderStruct = TestConfigReaderStruct;
})(configs || (configs = {}));
//# sourceMappingURL=TestConfigReaderStruct.js.map