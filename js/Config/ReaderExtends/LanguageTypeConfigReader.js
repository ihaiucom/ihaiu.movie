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
    var LanguageTypeConfigReader = /** @class */ (function (_super) {
        __extends(LanguageTypeConfigReader, _super);
        function LanguageTypeConfigReader() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.dictByValue = new Dictionary();
            return _this;
        }
        /** 游戏所有配置加载完成 */
        LanguageTypeConfigReader.prototype.onGameLoadedAll = function () {
            var list = this.getConfigList();
            for (var _i = 0, list_1 = list; _i < list_1.length; _i++) {
                var config = list_1[_i];
                this.dictByValue.add(config.value, config);
            }
        };
        LanguageTypeConfigReader.prototype.getConfigByValue = function (value) {
            return this.dictByValue.getValue(value);
        };
        return LanguageTypeConfigReader;
    }(configs.LanguageTypeConfigReaderStruct));
    configs.LanguageTypeConfigReader = LanguageTypeConfigReader;
})(configs || (configs = {}));
//# sourceMappingURL=LanguageTypeConfigReader.js.map