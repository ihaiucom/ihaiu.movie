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
    // 加载界面--转圈
    //----------------------
    var LoaderCirclePanel = /** @class */ (function (_super) {
        __extends(LoaderCirclePanel, _super);
        function LoaderCirclePanel() {
            return _super.call(this) || this;
        }
        LoaderCirclePanel.prototype.onInit = function () {
            this.contentPane = fgui.System.GlobalModalWaiting.createInstance();
            this.center();
            //弹出窗口的动效已中心为轴心
            this.setPivot(0.5, 0.5);
        };
        return LoaderCirclePanel;
    }(Games.LoaderPanel));
    Games.LoaderCirclePanel = LoaderCirclePanel;
})(Games || (Games = {}));
//# sourceMappingURL=LoaderCirclePanel.js.map