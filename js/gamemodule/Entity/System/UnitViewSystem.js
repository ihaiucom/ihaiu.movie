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
    /** 单位系统--显示对象 */
    var UnitViewSystem = /** @class */ (function (_super) {
        __extends(UnitViewSystem, _super);
        function UnitViewSystem() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        UnitViewSystem.prototype.Show = function () {
            this.components.forEach(function (value) {
                if (!value.isDisposed)
                    value.Show();
            });
        };
        UnitViewSystem.prototype.Hide = function () {
            this.components.forEach(function (value) {
                if (!value.isDisposed)
                    value.Hide();
            });
        };
        return UnitViewSystem;
    }(Games.UnitSystem));
    Games.UnitViewSystem = UnitViewSystem;
})(Games || (Games = {}));
//# sourceMappingURL=UnitViewSystem.js.map