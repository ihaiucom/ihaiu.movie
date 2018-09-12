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
    var GMWindow = /** @class */ (function (_super) {
        __extends(GMWindow, _super);
        function GMWindow() {
            var _this = _super.call(this) || this;
            _this.isloaded = false;
            _this.menuParameter = { openType: Games.MenuOpenType.Tab, openIndex: 0, args: [] };
            return _this;
        }
        GMWindow.prototype.load = function () {
            fgui.GM.GMBinder.bindAll();
            // 加载UI
            Laya.loader.load([
                { url: "res/fgui/GM.bin", type: Laya.Loader.BUFFER },
            ], Laya.Handler.create(this, this.onLoaded));
        };
        GMWindow.prototype.onLoaded = function () {
            Games.GuiSetting.addPackage("res/fgui/GM");
            this.isloaded = true;
            this.showOn(Games.MenuLayer.gm);
        };
        GMWindow.prototype.show = function () {
            if (this.isloaded) {
                this.showOn(Games.MenuLayer.gm);
            }
            else {
                this.load();
            }
        };
        // 菜单创建
        GMWindow.prototype.onMenuCreate = function () {
            this.conent = fgui.GM.GMMain.createInstance();
            this.contentPane = this.conent;
            // this.center();
            // //弹出窗口的动效已中心为轴心
            // this.setPivot(0.5, 0.5);
            // 注册Tab
            this.registerTab(Games.GMMenuType.ADD, this.conent.m_addPage);
            this.registerTab(Games.GMMenuType.CMD, this.conent.m_cmdPage);
            this.registerTab(Games.GMMenuType.SELECTSERVER, this.conent.m_selectServerPage);
            this.registerTab(Games.GMMenuType.LOG, this.conent.m_debugPage);
            this.registerTab(Games.GMMenuType.DisplayTree, this.conent.m_displayTreePage);
            this.openTab(Games.GMMenuType.ADD);
            _super.prototype.onMenuCreate.call(this);
        };
        GMWindow.prototype.menuClose = function () {
            this.onMenuClose();
        };
        // 如果需要处理额外的业务，可以重新该方法
        GMWindow.prototype.onOpenTab = function (tabIndex) {
            this.conent.m_mainMenu.setSelect(tabIndex);
        };
        //=========================
        // 显示完成
        // 可以在这里添加协议消息监听
        //-------------------------
        GMWindow.prototype.onShowComplete = function () {
            _super.prototype.onShowComplete.call(this);
        };
        //=========================
        // 隐藏完成
        // 可以在这里移除协议消息监听
        //-------------------------
        GMWindow.prototype.onHideComplete = function () {
            _super.prototype.onHideComplete.call(this);
        };
        return GMWindow;
    }(Games.MWindow));
    Games.GMWindow = GMWindow;
})(Games || (Games = {}));
//# sourceMappingURL=GMWindow.js.map