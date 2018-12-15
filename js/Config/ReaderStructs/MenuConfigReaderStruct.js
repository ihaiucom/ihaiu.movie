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
    var MenuConfigReaderStruct = /** @class */ (function (_super) {
        __extends(MenuConfigReaderStruct, _super);
        function MenuConfigReaderStruct() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.tableName = "Menu";
            return _this;
        }
        MenuConfigReaderStruct.prototype.ParseCsv = function (csv) {
            var config = new configs.MenuConfig();
            config.id = csvGetInt(csv, this.GetHeadIndex("id"));
            config.zh_cn_name = csvGetString(csv, this.GetHeadIndex("zh_cn_name"));
            config.icon = csvGetInt(csv, this.GetHeadIndex("icon"));
            config.moduleName = csvGetString(csv, this.GetHeadIndex("moduleName"));
            config.layer = csvGetInt(csv, this.GetHeadIndex("layer"));
            config.closeOtherType = csvGetInt(csv, this.GetHeadIndex("closeOtherType"));
            config.closeHomeWindow = csvGetBoolean(csv, this.GetHeadIndex("closeHomeWindow"));
            config.isAutoOpenHomeWindow = csvGetBoolean(csv, this.GetHeadIndex("isAutoOpenHomeWindow"));
            config.cacheTime = csvGetInt(csv, this.GetHeadIndex("cacheTime"));
            config.loaderId = csvGetInt(csv, this.GetHeadIndex("loaderId"));
            config.barType = csvGetInt(csv, this.GetHeadIndex("barType"));
            config.barIndex = csvGetInt(csv, this.GetHeadIndex("barIndex"));
            config.openAnimation = csvGetInt(csv, this.GetHeadIndex("openAnimation"));
            config.closeAnimation = csvGetInt(csv, this.GetHeadIndex("closeAnimation"));
            this.addConfig(config);
        };
        return MenuConfigReaderStruct;
    }(configs.CsvConfigRender));
    configs.MenuConfigReaderStruct = MenuConfigReaderStruct;
})(configs || (configs = {}));
//# sourceMappingURL=MenuConfigReaderStruct.js.map