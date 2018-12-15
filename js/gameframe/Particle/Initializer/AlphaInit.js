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
var Games;
(function (Games) {
    var AlphaInit = /** @class */ (function (_super) {
        __extends(AlphaInit, _super);
        function AlphaInit(minAlpha, maxAlpha) {
            if (minAlpha === void 0) { minAlpha = 0.1; }
            if (maxAlpha === void 0) { maxAlpha = 1; }
            var _this = _super.call(this) || this;
            _this.minAlpha = 0;
            _this.maxAlpha = 0;
            _this.minAlpha = minAlpha;
            _this.maxAlpha = maxAlpha;
            return _this;
        }
        AlphaInit.prototype.initialize = function (emitter, particle) {
            var range = this.maxAlpha - this.minAlpha;
            var rand = Math.random();
            particle.alpha = this.minAlpha + range * rand;
        };
        return AlphaInit;
    }(Games.Initializer));
    Games.AlphaInit = AlphaInit;
})(Games || (Games = {}));
//# sourceMappingURL=AlphaInit.js.map