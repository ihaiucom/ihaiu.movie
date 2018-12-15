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
    var UnitSystem = /** @class */ (function (_super) {
        __extends(UnitSystem, _super);
        function UnitSystem() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.components = [];
            return _this;
        }
        UnitSystem.prototype.addComponent = function (comp) {
            if (this.components.indexOf(comp) != -1) {
                // console.warn("已经添加过组件 -- " + comp.Type);
                return;
            }
            this.components.push(comp);
        };
        //----------------------------------
        // 接口
        //----------------------------------
        UnitSystem.prototype.start = function () {
            Game.driverSystem.addComponent(this);
        };
        UnitSystem.prototype.stop = function () {
            Game.driverSystem.removeComponet(this);
        };
        UnitSystem.prototype.onUpdate = function () {
            var length = this.components.length;
            for (var i = 0; i < length; i++) {
                this.components[i].onUpdate();
            }
        };
        UnitSystem.prototype.onRender = function () {
            var length = this.components.length;
            for (var i = 0; i < length; i++) {
                this.components[i].onRender();
            }
        };
        UnitSystem.prototype.onSeconds = function () {
            var length = this.components.length;
            for (var i = 0; i < length; i++) {
                this.components[i].onSeconds();
            }
        };
        return UnitSystem;
    }(Games.ESystem));
    Games.UnitSystem = UnitSystem;
})(Games || (Games = {}));
//# sourceMappingURL=UnitSystem.js.map