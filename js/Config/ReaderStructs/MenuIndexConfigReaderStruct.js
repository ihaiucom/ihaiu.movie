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
    var MenuIndexConfigReaderStruct = /** @class */ (function (_super) {
        __extends(MenuIndexConfigReaderStruct, _super);
        function MenuIndexConfigReaderStruct() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.tableName = "MenuIndex";
            return _this;
        }
        MenuIndexConfigReaderStruct.prototype.ParseCsv = function (csv) {
            var config = new configs.MenuIndexConfig();
            config.id = csvGetInt(csv, this.GetHeadIndex("id"));
            config.name = csvGetString(csv, this.GetHeadIndex("name"));
            config.menuId = csvGetInt(csv, this.GetHeadIndex("menuId"));
            config.openType = csvGetInt(csv, this.GetHeadIndex("openType"));
            config.menuIndex = csvGetInt(csv, this.GetHeadIndex("menuIndex"));
            this.addConfig(config);
        };
        return MenuIndexConfigReaderStruct;
    }(configs.CsvConfigRender));
    configs.MenuIndexConfigReaderStruct = MenuIndexConfigReaderStruct;
})(configs || (configs = {}));
//# sourceMappingURL=MenuIndexConfigReaderStruct.js.map