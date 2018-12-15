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
    var RechargeConfig = /** @class */ (function (_super) {
        __extends(RechargeConfig, _super);
        function RechargeConfig() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Object.defineProperty(RechargeConfig.prototype, "rechangeDesc", {
            get: function () {
                return "$ " + this.cost_dollar;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(RechargeConfig.prototype, "rechangeGifts", {
            get: function () {
                if (this._gifts == null) {
                    this._gifts = [this.item].concat(this.gift);
                }
                return this._gifts;
            },
            enumerable: true,
            configurable: true
        });
        return RechargeConfig;
    }(configs.RechargeConfigStruct));
    configs.RechargeConfig = RechargeConfig;
})(configs || (configs = {}));
//# sourceMappingURL=RechargeConfig.js.map