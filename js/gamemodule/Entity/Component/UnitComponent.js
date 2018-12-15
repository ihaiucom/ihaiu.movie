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
    /** 单位组件--抽象类 */
    var UnitComponent = /** @class */ (function (_super) {
        __extends(UnitComponent, _super);
        function UnitComponent(entity) {
            var _this = _super.call(this) || this;
            _this.unit = entity;
            return _this;
        }
        //事件
        UnitComponent.prototype.Start = function () {
        };
        UnitComponent.prototype.Pause = function () {
        };
        UnitComponent.prototype.Resume = function () {
        };
        UnitComponent.prototype.Stop = function () {
        };
        //显示
        UnitComponent.prototype.Show = function () {
        };
        UnitComponent.prototype.Hide = function () {
        };
        return UnitComponent;
    }(Games.EComponent));
    Games.UnitComponent = UnitComponent;
})(Games || (Games = {}));
//# sourceMappingURL=UnitComponent.js.map