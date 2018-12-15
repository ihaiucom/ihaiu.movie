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
    // 日常任务窗口
    //----------------------
    var MissionWindow = /** @class */ (function (_super) {
        __extends(MissionWindow, _super);
        function MissionWindow() {
            var _this = _super.call(this) || this;
            // 添加依赖资源
            _this.addAssetForFguiComponent(fgui.Mission.MissionMainPanel);
            _this.addAssetForFguiComponent(fgui.Common.TipReward);
            return _this;
        }
        // 菜单创建
        MissionWindow.prototype.onMenuCreate = function () {
            this.conent = fgui.Mission.MissionMainPanel.createInstance();
            this.contentPane = this.conent;
            // this.center();
            // //弹出窗口的动效已中心为轴心
            // this.setPivot(0.5, 0.5);
            _super.prototype.onMenuCreate.call(this);
        };
        return MissionWindow;
    }(Games.MWindow));
    Games.MissionWindow = MissionWindow;
})(Games || (Games = {}));
//# sourceMappingURL=MissionWindow.js.map