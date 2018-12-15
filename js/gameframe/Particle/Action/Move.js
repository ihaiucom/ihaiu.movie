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
    var Move = /** @class */ (function (_super) {
        __extends(Move, _super);
        // xDir: number = 1;
        // yDir: number = 1;
        function Move(velX, velY) {
            if (velX === void 0) { velX = 1; }
            if (velY === void 0) { velY = 1; }
            var _this = _super.call(this) || this;
            _this.velX = 0; //x方向速度
            _this.velY = 0; //y方向速度
            _this.velX = velX;
            _this.velY = velY;
            return _this;
            // this.xDir = Math.random() > 0.5 ? 1 : -1;
            // this.yDir = Math.random() > 0.5 ? 1 : -1;
        }
        Move.prototype.update = function (emitter, particle, time) {
            particle.velX = this.velX;
            particle.velY = this.velY;
            particle.previousX = Math.sin(particle.rotation) * particle.velX * time * particle.energy;
            particle.previousY = Math.cos(particle.rotation) * particle.velY * time * particle.energy;
            particle.x += particle.previousX;
            particle.y += particle.previousY;
            // particle.x = emitter.x + particle.previousX;
            // particle.y = emitter.y + particle.previousY;
        };
        return Move;
    }(Games.Actioner));
    Games.Move = Move;
})(Games || (Games = {}));
//# sourceMappingURL=Move.js.map