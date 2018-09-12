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
    /** 多语言配置读取器 */
    var LangConfigReader = /** @class */ (function (_super) {
        __extends(LangConfigReader, _super);
        function LangConfigReader(tableName) {
            var _this = _super.call(this) || this;
            // 语言
            _this.lang = "zh_cn";
            _this.tableName = tableName;
            return _this;
        }
        // 获取配置文件路径        
        LangConfigReader.prototype.getConfigPath = function () {
            return "config/lang/" + this.lang + "/" + this.tableName + ".csv";
        };
        Object.defineProperty(LangConfigReader.prototype, "headKeyFieldList", {
            get: function () {
                if (!this._headKeyFieldList) {
                    this._headKeyFieldList = this.headKeyFields.getValues();
                }
                return this._headKeyFieldList;
            },
            enumerable: true,
            configurable: true
        });
        LangConfigReader.prototype.ParseCsv = function (csv) {
            var config = new configs.LangConfig();
            config.id = csvGetInt(csv, this.GetHeadIndex("id"));
            var fieldList = this.headKeyFieldList;
            for (var i = 0; i < fieldList.length; i++) {
                var txt = csvGetString(csv, this.GetHeadIndex(fieldList[i]));
                var headType = this.GetHeadType(i);
                switch (headType) {
                    case configs.ConfigFieldType.MStringArray:
                        config.dict.add(fieldList[i], toStringArray(txt));
                        break;
                    default:
                        config.dict.add(fieldList[i], txt);
                        break;
                }
            }
            this.addConfig(config);
        };
        return LangConfigReader;
    }(configs.CsvConfigRender));
    configs.LangConfigReader = LangConfigReader;
})(configs || (configs = {}));
//# sourceMappingURL=LangConfigReader.js.map