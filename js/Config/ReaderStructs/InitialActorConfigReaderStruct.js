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
    var InitialActorConfigReaderStruct = /** @class */ (function (_super) {
        __extends(InitialActorConfigReaderStruct, _super);
        function InitialActorConfigReaderStruct() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.tableName = "InitialActor";
            return _this;
        }
        InitialActorConfigReaderStruct.prototype.ParseCsv = function (csv) {
            var config = new configs.InitialActorConfig();
            config.id = csvGetInt(csv, this.GetHeadIndex("id"));
            config.actor_id = csvGetInt(csv, this.GetHeadIndex("actor_id"));
            this.addConfig(config);
        };
        return InitialActorConfigReaderStruct;
    }(configs.CsvConfigRender));
    configs.InitialActorConfigReaderStruct = InitialActorConfigReaderStruct;
})(configs || (configs = {}));
//# sourceMappingURL=InitialActorConfigReaderStruct.js.map