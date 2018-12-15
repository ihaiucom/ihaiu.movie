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
    var GuidePathConfigReaderStruct = /** @class */ (function (_super) {
        __extends(GuidePathConfigReaderStruct, _super);
        function GuidePathConfigReaderStruct() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.tableName = "GuidePath";
            return _this;
        }
        GuidePathConfigReaderStruct.prototype.ParseCsv = function (csv) {
            var config = new configs.GuidePathConfig();
            config.id = csvGetInt(csv, this.GetHeadIndex("id"));
            config.find_ui_type = csvGetInt(csv, this.GetHeadIndex("find_ui_type"));
            config.menuid = csvGetInt(csv, this.GetHeadIndex("menuid"));
            config.path = csvGetString(csv, this.GetHeadIndex("path"));
            config.list_path = csvGetString(csv, this.GetHeadIndex("list_path"));
            config.sub_id = csvGetInt(csv, this.GetHeadIndex("sub_id"));
            config.list_index = csvGetInt(csv, this.GetHeadIndex("list_index"));
            config.add_btn = csvGetInt(csv, this.GetHeadIndex("add_btn"));
            config.tip = csvGetString(csv, this.GetHeadIndex("tip"));
            this.addConfig(config);
        };
        return GuidePathConfigReaderStruct;
    }(configs.CsvConfigRender));
    configs.GuidePathConfigReaderStruct = GuidePathConfigReaderStruct;
})(configs || (configs = {}));
//# sourceMappingURL=GuidePathConfigReaderStruct.js.map