var Games;
(function (Games) {
    var ESystem = /** @class */ (function () {
        function ESystem() {
            this.isUpdateTick = false;
            this.isRenderTick = false;
            this.isSecondsTick = false;
        }
        ESystem.prototype.start = function () {
        };
        ESystem.prototype.stop = function () {
        };
        ESystem.prototype.onUpdate = function () {
        };
        ESystem.prototype.onRender = function () {
        };
        ESystem.prototype.onSeconds = function () {
        };
        return ESystem;
    }());
    Games.ESystem = ESystem;
})(Games || (Games = {}));
//# sourceMappingURL=ESystem.js.map