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
    // 影片类型选择子窗口
    //----------------------
    var WarSelectFilmTypeSubwindow = /** @class */ (function (_super) {
        __extends(WarSelectFilmTypeSubwindow, _super);
        function WarSelectFilmTypeSubwindow(subwindowIndex, mainWindow) {
            var _this = _super.call(this, subwindowIndex, mainWindow) || this;
            // 添加依赖资源
            _this.addAssetForFguiComponent(fgui.WarMovie.WarSelectFilmType);
            return _this;
        }
        // 菜单创建
        WarSelectFilmTypeSubwindow.prototype.onMenuCreate = function () {
            this.conent = fgui.WarMovie.WarSelectFilmType.createInstance();
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
        WarSelectFilmTypeSubwindow.prototype.onShowComplete = function () {
            _super.prototype.onShowComplete.call(this);
        };
        //=========================
        // 隐藏完成
        // 可以在这里移除协议消息监听
        //-------------------------
        WarSelectFilmTypeSubwindow.prototype.onHideComplete = function () {
            _super.prototype.onHideComplete.call(this);
        };
        return WarSelectFilmTypeSubwindow;
    }(Games.MSubwindow));
    Games.WarSelectFilmTypeSubwindow = WarSelectFilmTypeSubwindow;
})(Games || (Games = {}));
//# sourceMappingURL=WarSelectFilmTypeSubwindow.js.map