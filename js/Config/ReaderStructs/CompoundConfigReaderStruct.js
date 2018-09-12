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
    var CompoundConfigReaderStruct = /** @class */ (function (_super) {
        __extends(CompoundConfigReaderStruct, _super);
        function CompoundConfigReaderStruct() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.tableName = "Compound";
            return _this;
        }
        CompoundConfigReaderStruct.prototype.ParseCsv = function (csv) {
            var config = new configs.CompoundConfig();
            config.id = csvGetInt(csv, this.GetHeadIndex("id"));
            config.name_tips = csvGetString(csv, this.GetHeadIndex("name_tips"));
            config.syn_item = csvGetInt(csv, this.GetHeadIndex("syn_item"));
            config.num_req = csvGetInt(csv, this.GetHeadIndex("num_req"));
            config.split_list = configs.DTItemNum.parseArray(csvGetString(csv, this.GetHeadIndex("split_list")));
            this.addConfig(config);
        };
        return CompoundConfigReaderStruct;
    }(configs.CsvConfigRender));
    configs.CompoundConfigReaderStruct = CompoundConfigReaderStruct;
})(configs || (configs = {}));
//# sourceMappingURL=CompoundConfigReaderStruct.js.map