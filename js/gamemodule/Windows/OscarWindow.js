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
    var OscarSubEnum;
    (function (OscarSubEnum) {
        OscarSubEnum[OscarSubEnum["None"] = 0] = "None";
        OscarSubEnum[OscarSubEnum["OscarShow"] = 1] = "OscarShow";
        OscarSubEnum[OscarSubEnum["OscarReward"] = 2] = "OscarReward";
    })(OscarSubEnum = Games.OscarSubEnum || (Games.OscarSubEnum = {}));
    //======================
    // 颁奖窗口
    //----------------------
    var OscarWindow = /** @class */ (function (_super) {
        __extends(OscarWindow, _super);
        function OscarWindow() {
            var _this = _super.call(this) || this;
            _this.oscarShowSubWindow = new Games.OscarShowSubWindow(OscarSubEnum.OscarShow, _this);
            _this.oscarRewardSubWindow = new Games.OscarRewardSubWindow(OscarSubEnum.OscarReward, _this);
            _this.registerSubwindow(_this.oscarShowSubWindow);
            _this.registerSubwindow(_this.oscarRewardSubWindow);
            // 添加依赖资源
            _this.addAssetForFguiComponent(fgui.Oscar.OscarAwardsListPanel);
            return _this;
        }
        // 菜单创建
        OscarWindow.prototype.onMenuCreate = function () {
            this.conent = fgui.Oscar.OscarAwardsListPanel.createInstance();
            this.contentPane = this.conent;
            this.center();
            //弹出窗口的动效已中心为轴心
            this.setPivot(0.5, 0.5);
            _super.prototype.onMenuCreate.call(this);
        };
        // 菜单打开事件，传递参数
        OscarWindow.prototype.onMenuOpen = function (parameter) {
            _super.prototype.onMenuOpen.call(this, parameter);
            this.conent.onWindowOpen(parameter.args[0]);
        };
        //=========================
        // 显示完成
        // 可以在这里添加协议消息监听
        //-------------------------
        OscarWindow.prototype.onShowComplete = function () {
            _super.prototype.onShowComplete.call(this);
        };
        //=========================
        // 隐藏完成
        // 可以在这里移除协议消息监听
        //-------------------------
        OscarWindow.prototype.onHideComplete = function () {
            _super.prototype.onHideComplete.call(this);
        };
        return OscarWindow;
    }(Games.MWindow));
    Games.OscarWindow = OscarWindow;
})(Games || (Games = {}));
//# sourceMappingURL=OscarWindow.js.map