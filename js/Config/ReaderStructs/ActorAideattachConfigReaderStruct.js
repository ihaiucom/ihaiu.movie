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
    var ActorAideattachConfigReaderStruct = /** @class */ (function (_super) {
        __extends(ActorAideattachConfigReaderStruct, _super);
        function ActorAideattachConfigReaderStruct() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.tableName = "ActorAideattach";
            return _this;
        }
        ActorAideattachConfigReaderStruct.prototype.ParseCsv = function (csv) {
            var config = new configs.ActorAideattachConfig();
            config.id = csvGetInt(csv, this.GetHeadIndex("id"));
            config.actor = csvGetInt(csv, this.GetHeadIndex("actor"));
            config.aide_type = csvGetInt(csv, this.GetHeadIndex("aide_type"));
            config.attach_type = csvGetInt(csv, this.GetHeadIndex("attach_type"));
            config.value = csvGetInt(csv, this.GetHeadIndex("value"));
            config.lv = csvGetInt(csv, this.GetHeadIndex("lv"));
            config.tips = csvGetString(csv, this.GetHeadIndex("tips"));
            this.addConfig(config);
        };
        return ActorAideattachConfigReaderStruct;
    }(configs.CsvConfigRender));
    configs.ActorAideattachConfigReaderStruct = ActorAideattachConfigReaderStruct;
})(configs || (configs = {}));
//# sourceMappingURL=ActorAideattachConfigReaderStruct.js.map