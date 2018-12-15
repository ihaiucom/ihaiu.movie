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
    var ShopConfigReader = /** @class */ (function (_super) {
        __extends(ShopConfigReader, _super);
        function ShopConfigReader() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        ShopConfigReader.prototype.GetCfgByType = function (type) {
            var list = [];
            for (var key in this.configs) {
                if (this.configs.hasOwnProperty(key)) {
                    var cfg = this.configs[key];
                    if (cfg.type == type) {
                        list.push(cfg);
                    }
                }
            }
            return list;
        };
        ShopConfigReader.prototype.SetPeroid = function (id, time) {
            var cfg = this.getConfig(id);
            if (cfg) {
                cfg.period = time;
            }
        };
        return ShopConfigReader;
    }(configs.ShopConfigReaderStruct));
    configs.ShopConfigReader = ShopConfigReader;
})(configs || (configs = {}));
//# sourceMappingURL=ShopConfigReader.js.map