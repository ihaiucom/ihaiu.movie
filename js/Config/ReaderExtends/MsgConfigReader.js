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
    var MsgConfigReader = /** @class */ (function (_super) {
        __extends(MsgConfigReader, _super);
        function MsgConfigReader() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            // 配置字典
            _this.configsByKey = new Dictionary();
            return _this;
        }
        MsgConfigReader.prototype.onGameLoadedAll = function () {
            _super.prototype.onGameLoadedAll.call(this);
            var list = this.configs.getValues();
            for (var i = 0; i < list.length; i++) {
                var key = list[i].key;
                if (isNullOrEmpty(key)) {
                    key = list[i].id;
                }
                this.configsByKey.add(key, list[i]);
            }
        };
        MsgConfigReader.prototype.getConfig = function (key) {
            if (!this.configsByKey.hasKey(key)) {
                if (this.configs.hasKey(key)) {
                    return this.configs.getValue(key);
                }
                console.log(this.tableName + " \u6CA1\u6709 key=" + key + " \u7684\u914D\u7F6E");
            }
            return this.configsByKey.getValue(key);
        };
        MsgConfigReader.prototype.getTxt = function (key) {
            var config = this.getConfig(key);
            if (!config) {
                return "[Error]" + this.tableName + " \u6CA1\u6709 key=" + key + " \u7684\u914D\u7F6E";
            }
            return config.notice;
        };
        MsgConfigReader.prototype.getTxtFormat = function (key) {
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
            var txt = (_a = this.getTxt(key)).format.apply(_a, args);
            return txt;
            var _a;
        };
        // 生成KEY 代码
        MsgConfigReader.prototype.outKeyCode = function () {
            console.log("");
            console.log("class MsgKey");
            console.log("{");
            var list = this.configsByKey.getValues();
            for (var i = 0; i < list.length; i++) {
                var key = list[i].key;
                var val = key;
                if (isNullOrEmpty(key)) {
                    key = "KEY_" + list[i].id;
                    val = list[i].id;
                }
                else {
                    key = key.replace("-", "_");
                }
                console.log("\tstatic " + key + " = \"" + val + "\";");
            }
            console.log("}");
            console.log("");
            console.log("");
        };
        return MsgConfigReader;
    }(configs.MsgConfigReaderStruct));
    configs.MsgConfigReader = MsgConfigReader;
})(configs || (configs = {}));
//# sourceMappingURL=MsgConfigReader.js.map