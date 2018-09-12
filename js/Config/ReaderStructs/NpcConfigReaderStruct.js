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
    var NpcConfigReaderStruct = /** @class */ (function (_super) {
        __extends(NpcConfigReaderStruct, _super);
        function NpcConfigReaderStruct() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.tableName = "Npc";
            return _this;
        }
        NpcConfigReaderStruct.prototype.ParseCsv = function (csv) {
            var config = new configs.NpcConfig();
            config.id = csvGetInt(csv, this.GetHeadIndex("id"));
            config.en_name = csvGetString(csv, this.GetHeadIndex("en_name"));
            config.cn_name = csvGetString(csv, this.GetHeadIndex("cn_name"));
            config.sex = csvGetInt(csv, this.GetHeadIndex("sex"));
            config.avatar = csvGetInt(csv, this.GetHeadIndex("avatar"));
            this.addConfig(config);
        };
        return NpcConfigReaderStruct;
    }(configs.CsvConfigRender));
    configs.NpcConfigReaderStruct = NpcConfigReaderStruct;
})(configs || (configs = {}));
//# sourceMappingURL=NpcConfigReaderStruct.js.map