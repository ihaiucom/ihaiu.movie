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
    //======================
    // 转圈
    //----------------------
    var Circle = /** @class */ (function (_super) {
        __extends(Circle, _super);
        function Circle() {
            return _super.call(this) || this;
        }
        Circle.prototype.onInit = function () {
            this.loaderCircle = fgui.System.GlobalModalWaiting.createInstance();
            this.contentPane = this.loaderCircle;
            this.center();
            //弹出窗口的动效已中心为轴心
            this.setPivot(0.5, 0.5);
        };
        Circle.prototype.show = function () {
            _super.prototype.showOn.call(this, Games.MenuLayer.loader);
        };
        return Circle;
    }(fairygui.Window));
    Games.Circle = Circle;
})(Games || (Games = {}));
//# sourceMappingURL=Cricle.js.map