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
    var ActorAideLvConfigReaderStruct = /** @class */ (function (_super) {
        __extends(ActorAideLvConfigReaderStruct, _super);
        function ActorAideLvConfigReaderStruct() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.tableName = "ActorAideLv";
            return _this;
        }
        ActorAideLvConfigReaderStruct.prototype.ParseCsv = function (csv) {
            var config = new configs.ActorAideLvConfig();
            config.id = csvGetInt(csv, this.GetHeadIndex("id"));
            config.lv = toIntArray(csvGetString(csv, this.GetHeadIndex("lv")));
            config.icon = csvGetInt(csv, this.GetHeadIndex("icon"));
            config.tips = csvGetString(csv, this.GetHeadIndex("tips"));
            this.addConfig(config);
        };
        return ActorAideLvConfigReaderStruct;
    }(configs.CsvConfigRender));
    configs.ActorAideLvConfigReaderStruct = ActorAideLvConfigReaderStruct;
})(configs || (configs = {}));
//# sourceMappingURL=ActorAideLvConfigReaderStruct.js.map