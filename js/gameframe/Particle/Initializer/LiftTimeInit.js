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
    var LiftTimeInit = /** @class */ (function (_super) {
        __extends(LiftTimeInit, _super);
        function LiftTimeInit(min, max) {
            if (min === void 0) { min = 0.1; }
            if (max === void 0) { max = 1; }
            var _this = _super.call(this) || this;
            _this.min = 0;
            _this.max = 0;
            _this.min = min;
            _this.max = max;
            return _this;
        }
        LiftTimeInit.prototype.initialize = function (emitter, particle) {
            var range = this.max - this.min;
            var rand = Math.random();
            particle.lifetime = this.min + range * rand;
        };
        return LiftTimeInit;
    }(Games.Initializer));
    Games.LiftTimeInit = LiftTimeInit;
})(Games || (Games = {}));
//# sourceMappingURL=LiftTimeInit.js.map