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
    var Fade = /** @class */ (function (_super) {
        __extends(Fade, _super);
        function Fade(startAlpha, endAlpha) {
            if (startAlpha === void 0) { startAlpha = 1; }
            if (endAlpha === void 0) { endAlpha = 0; }
            var _this = _super.call(this) || this;
            _this.startAlpha = 0;
            _this.endAlpha = 0;
            _this.diffAlpha = 0;
            _this.startAlpha = startAlpha;
            _this.endAlpha = endAlpha;
            _this.diffAlpha = startAlpha - endAlpha;
            return _this;
        }
        Fade.prototype.update = function (emitter, particle, time) {
            particle.alpha = this.endAlpha + this.diffAlpha * particle.energy;
        };
        return Fade;
    }(Games.Actioner));
    Games.Fade = Fade;
})(Games || (Games = {}));
//# sourceMappingURL=Fade.js.map