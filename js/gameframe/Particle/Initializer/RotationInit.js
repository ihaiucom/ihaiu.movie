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
    var RotationInit = /** @class */ (function (_super) {
        __extends(RotationInit, _super);
        function RotationInit(min, max) {
            if (min === void 0) { min = 0; }
            var _this = _super.call(this) || this;
            _this.min = 0;
            _this.max = 0;
            _this.min = min;
            _this.max = max;
            return _this;
        }
        RotationInit.prototype.initialize = function (emitter, particle) {
            var range = this.max - this.min;
            var rand = Math.random();
            particle.rotation = this.min + Math.round(range * rand);
        };
        return RotationInit;
    }(Games.Initializer));
    Games.RotationInit = RotationInit;
})(Games || (Games = {}));
//# sourceMappingURL=RotationInit.js.map