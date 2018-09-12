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
    var VisitConfigReaderStruct = /** @class */ (function (_super) {
        __extends(VisitConfigReaderStruct, _super);
        function VisitConfigReaderStruct() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.tableName = "Visit";
            return _this;
        }
        VisitConfigReaderStruct.prototype.ParseCsv = function (csv) {
            var config = new configs.VisitConfig();
            config.id = csvGetInt(csv, this.GetHeadIndex("id"));
            config.fans = csvGetInt(csv, this.GetHeadIndex("fans"));
            config.flower = csvGetInt(csv, this.GetHeadIndex("flower"));
            config.zh_cn_fans_speak0 = csvGetString(csv, this.GetHeadIndex("zh_cn_fans_speak0"));
            config.zh_cn_actor_speak0 = csvGetString(csv, this.GetHeadIndex("zh_cn_actor_speak0"));
            config.zh_cn_fans_speak1 = csvGetString(csv, this.GetHeadIndex("zh_cn_fans_speak1"));
            config.zh_cn_actor_speak1 = csvGetString(csv, this.GetHeadIndex("zh_cn_actor_speak1"));
            config.zh_cn_fans_speak2 = csvGetString(csv, this.GetHeadIndex("zh_cn_fans_speak2"));
            config.zh_cn_actor_speak2 = csvGetString(csv, this.GetHeadIndex("zh_cn_actor_speak2"));
            config.reward = configs.DTItemNum.parseArray(csvGetString(csv, this.GetHeadIndex("reward")));
            config.expect = csvGetInt(csv, this.GetHeadIndex("expect"));
            this.addConfig(config);
        };
        return VisitConfigReaderStruct;
    }(configs.CsvConfigRender));
    configs.VisitConfigReaderStruct = VisitConfigReaderStruct;
})(configs || (configs = {}));
//# sourceMappingURL=VisitConfigReaderStruct.js.map