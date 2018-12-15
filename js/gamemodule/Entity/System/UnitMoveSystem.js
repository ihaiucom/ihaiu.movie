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
    /** 单位系统--移动 */
    var UnitMoveSystem = /** @class */ (function (_super) {
        __extends(UnitMoveSystem, _super);
        function UnitMoveSystem() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        UnitMoveSystem.prototype.Pause = function () {
            this.components.forEach(function (value) {
                if (!value.isDisposed)
                    value.Pause();
            });
        };
        UnitMoveSystem.prototype.Resume = function () {
            this.components.forEach(function (value) {
                if (!value.isDisposed)
                    value.Resume();
            });
        };
        UnitMoveSystem.prototype.Stop = function () {
            this.components.forEach(function (value) {
                if (!value.isDisposed)
                    value.Stop();
            });
        };
        return UnitMoveSystem;
    }(Games.UnitSystem));
    Games.UnitMoveSystem = UnitMoveSystem;
})(Games || (Games = {}));
//# sourceMappingURL=UnitMoveSystem.js.map