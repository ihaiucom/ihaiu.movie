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
    var StreetConfigReader = /** @class */ (function (_super) {
        __extends(StreetConfigReader, _super);
        function StreetConfigReader() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        StreetConfigReader.prototype.GetRequire = function (id) {
            var cfg = this.getConfig(id);
            if (cfg) {
                return cfg.Require;
            }
            return [];
        };
        return StreetConfigReader;
    }(configs.StreetConfigReaderStruct));
    configs.StreetConfigReader = StreetConfigReader;
})(configs || (configs = {}));
//# sourceMappingURL=StreetConfigReader.js.map