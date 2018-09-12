var Games;
(function (Games) {
    //粒子-初始化基类
    var Actioner = /** @class */ (function () {
        function Actioner() {
        }
        Actioner.prototype.addedToEmitter = function (emitter) {
        };
        Actioner.prototype.removedFromEmitter = function (emitter) {
        };
        Actioner.prototype.update = function (emitter, particle, time) {
        };
        return Actioner;
    }());
    Games.Actioner = Actioner;
})(Games || (Games = {}));
//# sourceMappingURL=Actioner.js.map