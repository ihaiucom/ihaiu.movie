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
    var Age = /** @class */ (function (_super) {
        __extends(Age, _super);
        function Age() {
            return _super.call(this) || this;
        }
        Age.prototype.update = function (emitter, particle, time) {
            particle.age += time;
            if (particle.age >= particle.lifetime) {
                particle.energy = 0;
                particle.isDead = true;
            }
            else {
                particle.energy = 1 - particle.age / particle.lifetime;
            }
        };
        return Age;
    }(Games.Actioner));
    Games.Age = Age;
})(Games || (Games = {}));
//# sourceMappingURL=Age.js.map