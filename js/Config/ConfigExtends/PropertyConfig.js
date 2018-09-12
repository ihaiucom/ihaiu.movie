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
    var PropertyConfig = /** @class */ (function (_super) {
        __extends(PropertyConfig, _super);
        function PropertyConfig() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Object.defineProperty(PropertyConfig.prototype, "iconUrl", {
            get: function () {
                var cfg = Game.config.avatar.getConfig(this.icon);
                if (cfg) {
                    return cfg.iconUrl;
                }
                return "";
            },
            enumerable: true,
            configurable: true
        });
        return PropertyConfig;
    }(configs.PropertyConfigStruct));
    configs.PropertyConfig = PropertyConfig;
})(configs || (configs = {}));
//# sourceMappingURL=PropertyConfig.js.map