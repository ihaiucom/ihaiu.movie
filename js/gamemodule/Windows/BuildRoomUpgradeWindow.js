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
    // 建造升级窗口
    //----------------------
    var BuildRoomUpgradeWindow = /** @class */ (function (_super) {
        __extends(BuildRoomUpgradeWindow, _super);
        function BuildRoomUpgradeWindow() {
            var _this = _super.call(this) || this;
            // 添加依赖资源
            _this.addAssetForFguiComponent(fgui.Building.BuildRoomUpgrade);
            return _this;
        }
        // 生成动态预加载资源
        BuildRoomUpgradeWindow.prototype.generateAssetsForDynmic = function () {
            _super.prototype.generateAssetsForDynmic.call(this);
        };
        // 菜单创建
        BuildRoomUpgradeWindow.prototype.onMenuCreate = function () {
            this.conent = fgui.Building.BuildRoomUpgrade.createInstance();
            this.contentPane = this.conent;
            // this.center();
            // //弹出窗口的动效已中心为轴心
            // this.setPivot(0.5, 0.5);
            _super.prototype.onMenuCreate.call(this);
        };
        //=========================
        // 显示完成
        // 可以在这里添加协议消息监听
        //-------------------------
        BuildRoomUpgradeWindow.prototype.onShowComplete = function () {
            var roomInfo = this.menuParameter.args[0];
            this.conent.setInfo(roomInfo);
            _super.prototype.onShowComplete.call(this);
        };
        //=========================
        // 隐藏完成
        // 可以在这里移除协议消息监听
        //-------------------------
        BuildRoomUpgradeWindow.prototype.onHideComplete = function () {
            _super.prototype.onHideComplete.call(this);
        };
        BuildRoomUpgradeWindow.prototype.btnLevelUp = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return this.conent.btnLevelUp(args[0]);
        };
        return BuildRoomUpgradeWindow;
    }(Games.MWindow));
    Games.BuildRoomUpgradeWindow = BuildRoomUpgradeWindow;
})(Games || (Games = {}));
//# sourceMappingURL=BuildRoomUpgradeWindow.js.map