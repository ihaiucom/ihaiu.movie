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
    var BattleShootTypeConfigReaderStruct = /** @class */ (function (_super) {
        __extends(BattleShootTypeConfigReaderStruct, _super);
        function BattleShootTypeConfigReaderStruct() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.tableName = "BattleShootType";
            return _this;
        }
        BattleShootTypeConfigReaderStruct.prototype.ParseCsv = function (csv) {
            var config = new configs.BattleShootTypeConfig();
            config.id = csvGetInt(csv, this.GetHeadIndex("id"));
            config.name = csvGetString(csv, this.GetHeadIndex("name"));
            config.man = csvGetInt(csv, this.GetHeadIndex("man"));
            config.woman = csvGetInt(csv, this.GetHeadIndex("woman"));
            config.child = csvGetInt(csv, this.GetHeadIndex("child"));
            this.addConfig(config);
        };
        return BattleShootTypeConfigReaderStruct;
    }(configs.CsvConfigRender));
    configs.BattleShootTypeConfigReaderStruct = BattleShootTypeConfigReaderStruct;
})(configs || (configs = {}));
//# sourceMappingURL=BattleShootTypeConfigReaderStruct.js.map