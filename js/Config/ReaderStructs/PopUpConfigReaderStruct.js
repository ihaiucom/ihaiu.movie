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
    var PopUpConfigReaderStruct = /** @class */ (function (_super) {
        __extends(PopUpConfigReaderStruct, _super);
        function PopUpConfigReaderStruct() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.tableName = "PopUp";
            return _this;
        }
        PopUpConfigReaderStruct.prototype.ParseCsv = function (csv) {
            var config = new configs.PopUpConfig();
            config.id = csvGetInt(csv, this.GetHeadIndex("id"));
            config.tips = csvGetString(csv, this.GetHeadIndex("tips"));
            config.start_type = csvGetInt(csv, this.GetHeadIndex("start_type"));
            config.start_par1 = csvGetInt(csv, this.GetHeadIndex("start_par1"));
            config.start_par2 = configs.DTDate.parse(csvGetString(csv, this.GetHeadIndex("start_par2")));
            config.start_par3 = csvGetInt(csv, this.GetHeadIndex("start_par3"));
            config.image = csvGetString(csv, this.GetHeadIndex("image"));
            config.priority = csvGetInt(csv, this.GetHeadIndex("priority"));
            this.addConfig(config);
        };
        return PopUpConfigReaderStruct;
    }(configs.CsvConfigRender));
    configs.PopUpConfigReaderStruct = PopUpConfigReaderStruct;
})(configs || (configs = {}));
//# sourceMappingURL=PopUpConfigReaderStruct.js.map