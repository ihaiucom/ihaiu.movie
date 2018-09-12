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
    var ActionConfigReaderStruct = /** @class */ (function (_super) {
        __extends(ActionConfigReaderStruct, _super);
        function ActionConfigReaderStruct() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.tableName = "Action";
            return _this;
        }
        ActionConfigReaderStruct.prototype.ParseCsv = function (csv) {
            var config = new configs.ActionConfig();
            config.id = csvGetInt(csv, this.GetHeadIndex("id"));
            config.action = csvGetString(csv, this.GetHeadIndex("action"));
            config.parts = configs.DTParts.parse(csvGetString(csv, this.GetHeadIndex("parts")));
            config.loop = csvGetInt(csv, this.GetHeadIndex("loop"));
            config.Connect = csvGetInt(csv, this.GetHeadIndex("Connect"));
            config.tips = csvGetString(csv, this.GetHeadIndex("tips"));
            this.addConfig(config);
        };
        return ActionConfigReaderStruct;
    }(configs.CsvConfigRender));
    configs.ActionConfigReaderStruct = ActionConfigReaderStruct;
})(configs || (configs = {}));
//# sourceMappingURL=ActionConfigReaderStruct.js.map