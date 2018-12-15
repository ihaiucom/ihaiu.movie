var Games;
(function (Games) {
    var EComponent = /** @class */ (function () {
        function EComponent() {
            this.isDisposed = false;
        }
        Object.defineProperty(EComponent.prototype, "Type", {
            get: function () {
                return this["constructor"]["name"];
            },
            enumerable: true,
            configurable: true
        });
        EComponent.prototype.init = function () {
        };
        EComponent.prototype.onUpdate = function () {
        };
        EComponent.prototype.onRender = function () {
        };
        EComponent.prototype.onSeconds = function () {
        };
        EComponent.prototype.dispose = function () {
            this.recycle();
            this.isDisposed = true;
        };
        EComponent.prototype.recycle = function () {
            Game.pool.componentPool.recycle(this);
        };
        return EComponent;
    }());
    Games.EComponent = EComponent;
})(Games || (Games = {}));
//# sourceMappingURL=EComponent.js.map