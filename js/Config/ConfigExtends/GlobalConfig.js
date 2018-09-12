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
    var GlobalConfig = /** @class */ (function (_super) {
        __extends(GlobalConfig, _super);
        function GlobalConfig() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        GlobalConfig.getConfig = function (key) {
            return Game.config.global.getConfig(key);
        };
        // 获取一个整数
        GlobalConfig.getValue = function (key) {
            var config = GlobalConfig.getConfig(key);
            if (config) {
                return config.value;
            }
            return 0;
        };
        // 获取一维数组
        GlobalConfig.getValue1 = function (key) {
            var config = GlobalConfig.getConfig(key);
            if (config) {
                return config.value1;
            }
            return [];
        };
        // 获取二维数组
        GlobalConfig.getValue2 = function (key) {
            var config = GlobalConfig.getConfig(key);
            if (config) {
                return config.value2;
            }
            return [];
        };
        // 获取三维数组
        GlobalConfig.getValue3 = function (key) {
            var config = GlobalConfig.getConfig(key);
            if (config) {
                return config.value3;
            }
            return [];
        };
        // 获取字符串
        GlobalConfig.getValue4 = function (key) {
            var config = GlobalConfig.getConfig(key);
            if (config) {
                return config.value4;
            }
            return "";
        };
        return GlobalConfig;
    }(configs.GlobalConfigStruct));
    configs.GlobalConfig = GlobalConfig;
})(configs || (configs = {}));
//# sourceMappingURL=GlobalConfig.js.map