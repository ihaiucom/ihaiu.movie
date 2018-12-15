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
    // 街道 升级信息子窗口
    //----------------------
    var StreetLvUpInfoSubwindow = /** @class */ (function (_super) {
        __extends(StreetLvUpInfoSubwindow, _super);
        function StreetLvUpInfoSubwindow(subwindowIndex, mainWindow) {
            var _this = _super.call(this, subwindowIndex, mainWindow) || this;
            // 添加依赖资源
            _this.addAssetForFguiComponent(fgui.Street.StreetLvUpInfoPanel);
            return _this;
        }
        // 菜单创建
        StreetLvUpInfoSubwindow.prototype.onMenuCreate = function () {
            this.conent = fgui.Street.StreetLvUpInfoPanel.createInstance();
            this.contentPane = this.conent;
            _super.prototype.onMenuCreate.call(this);
        };
        // 菜单打开事件，传递参数
        StreetLvUpInfoSubwindow.prototype.onMenuOpen = function (parameter) {
            _super.prototype.onMenuOpen.call(this, parameter);
            this.conent.onWindowOpen(parameter.args[0]);
        };
        //=========================
        // 显示完成
        // 可以在这里添加协议消息监听
        //-------------------------
        StreetLvUpInfoSubwindow.prototype.onShowComplete = function () {
            _super.prototype.onShowComplete.call(this);
        };
        //=========================
        // 隐藏完成
        // 可以在这里移除协议消息监听
        //-------------------------
        StreetLvUpInfoSubwindow.prototype.onHideComplete = function () {
            _super.prototype.onHideComplete.call(this);
        };
        return StreetLvUpInfoSubwindow;
    }(Games.MSubwindow));
    Games.StreetLvUpInfoSubwindow = StreetLvUpInfoSubwindow;
})(Games || (Games = {}));
//# sourceMappingURL=StreetLvUpInfoSubwindow.js.map