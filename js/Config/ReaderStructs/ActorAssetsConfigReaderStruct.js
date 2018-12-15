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
    var ActorAssetsConfigReaderStruct = /** @class */ (function (_super) {
        __extends(ActorAssetsConfigReaderStruct, _super);
        function ActorAssetsConfigReaderStruct() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.tableName = "ActorAssets";
            return _this;
        }
        ActorAssetsConfigReaderStruct.prototype.ParseCsv = function (csv) {
            var config = new configs.ActorAssetsConfig();
            config.id = csvGetInt(csv, this.GetHeadIndex("id"));
            config.type = csvGetInt(csv, this.GetHeadIndex("type"));
            config.actor_property = csvGetInt(csv, this.GetHeadIndex("actor_property"));
            config.tips = csvGetString(csv, this.GetHeadIndex("tips"));
            this.addConfig(config);
        };
        return ActorAssetsConfigReaderStruct;
    }(configs.CsvConfigRender));
    configs.ActorAssetsConfigReaderStruct = ActorAssetsConfigReaderStruct;
})(configs || (configs = {}));
//# sourceMappingURL=ActorAssetsConfigReaderStruct.js.map