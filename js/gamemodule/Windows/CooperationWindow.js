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
    /**
     * 合作窗口
     */
    var CooperationWindow = /** @class */ (function (_super) {
        __extends(CooperationWindow, _super);
        function CooperationWindow() {
            var _this = _super.call(this) || this;
            _this.serachOther = new Games.CooperationMainPanelSubwindow(Games.CooperationSubwindowType.serachOther, _this);
            _this.cooperationApplySubwindow = new Games.CooperationApplySubwindow(Games.CooperationSubwindowType.cooperationApply, _this);
            _this.cooperationRealtionshipSubwindow = new Games.CooperationRealtionshipSubwindow(Games.CooperationSubwindowType.cooperationRealtionship, _this);
            _this.cooperationEndSubwindow = new Games.CooperationEndSubwindow(Games.CooperationSubwindowType.CooperationEnd, _this);
            _this.cooperationAchievedSubwindow = new Games.CooperationAchievedSubwindow(Games.CooperationSubwindowType.CooperationAchieved, _this);
            _this.registerSubwindow(_this.serachOther);
            _this.registerSubwindow(_this.cooperationApplySubwindow);
            _this.registerSubwindow(_this.cooperationRealtionshipSubwindow);
            _this.registerSubwindow(_this.cooperationEndSubwindow);
            _this.registerSubwindow(_this.cooperationAchievedSubwindow);
            // 添加依赖资源
            _this.addAssetForFguiComponent(fgui.Cooperation.CooperationMain);
            return _this;
        }
        // 菜单创建
        CooperationWindow.prototype.onMenuCreate = function () {
            this.conent = fgui.Cooperation.CooperationMain.createInstance();
            this.contentPane = this.conent;
            // this.center();
            // //弹出窗口的动效已中心为轴心
            // this.setPivot(0.5, 0.5);
            _super.prototype.onMenuCreate.call(this);
        };
        // 菜单打开事件，传递参数
        CooperationWindow.prototype.onMenuOpen = function (parameter) {
            _super.prototype.onMenuOpen.call(this, parameter);
        };
        //=========================
        // 显示完成
        // 可以在这里添加协议消息监听
        //-------------------------
        CooperationWindow.prototype.onShowComplete = function () {
            _super.prototype.onShowComplete.call(this);
        };
        //=========================
        // 隐藏完成
        // 可以在这里移除协议消息监听
        //-------------------------
        CooperationWindow.prototype.onHideComplete = function () {
            _super.prototype.onHideComplete.call(this);
        };
        return CooperationWindow;
    }(Games.MWindow));
    Games.CooperationWindow = CooperationWindow;
})(Games || (Games = {}));
//# sourceMappingURL=CooperationWindow.js.map