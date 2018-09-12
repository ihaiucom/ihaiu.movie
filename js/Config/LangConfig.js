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
    var LangConfig = /** @class */ (function (_super) {
        __extends(LangConfig, _super);
        function LangConfig() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.dict = new Dictionary();
            return _this;
        }
        return LangConfig;
    }(configs.BaseConfig));
    configs.LangConfig = LangConfig;
})(configs || (configs = {}));
//# sourceMappingURL=LangConfig.js.map