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
    //=================
    // 加载界面管理器
    //------------------
    var LoaderManager = /** @class */ (function (_super) {
        __extends(LoaderManager, _super);
        function LoaderManager() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            // 加载器字典
            _this.dict = new Dictionary();
            _this.isInited = false;
            return _this;
        }
        // 初始化
        LoaderManager.prototype.install = function () {
            if (this.isInited)
                return;
            this.isInited = true;
            // None
            var ctl = new Games.LoaderCtl();
            ctl.loaderId = Games.LoaderId.None;
            this.dict.add(ctl.loaderId, ctl);
            // Circle
            ctl = new Games.LoaderCtl();
            ctl.loaderId = Games.LoaderId.Circle;
            ctl.loaderPanel = new Games.LoaderCirclePanel();
            this.dict.add(ctl.loaderId, ctl);
            var defaultPanel = new Games.LoaderEnterPanel();
            // Launch
            ctl = new Games.LoaderCtl();
            ctl.loaderId = Games.LoaderId.Launch;
            ctl.loaderPanel = defaultPanel;
            this.dict.add(ctl.loaderId, ctl);
            // EnterGame
            ctl = new Games.LoaderCtl();
            ctl.loaderId = Games.LoaderId.EnterGame;
            ctl.loaderPanel = defaultPanel;
            this.dict.add(ctl.loaderId, ctl);
            // Module
            ctl = new Games.LoaderCtl();
            ctl.loaderId = Games.LoaderId.Module;
            ctl.loaderPanel = defaultPanel;
            this.dict.add(ctl.loaderId, ctl);
        };
        // 获取加载进度面板控制器
        LoaderManager.prototype.getLoaderCtl = function (loaderId) {
            return this.dict.getValue(loaderId);
        };
        // 打开加载进度面板控制器
        LoaderManager.prototype.open = function (loaderId) {
            var loaderCtl = this.getLoaderCtl(loaderId);
            loaderCtl.open();
            this.current = loaderCtl;
            return loaderCtl;
        };
        // 关闭加载进度控制器
        LoaderManager.prototype.close = function (loaderId) {
            var loaderCtl = this.getLoaderCtl(loaderId);
            if (loaderCtl) {
                if (this.current == loaderCtl) {
                    this.current = null;
                }
                loaderCtl.close();
            }
        };
        // 关闭所有
        LoaderManager.prototype.closeAll = function () {
            var list = this.dict.getValues();
            for (var i = 0; i < list.length; i++) {
                list[i].close();
            }
            this.current = null;
        };
        // 设置进度
        LoaderManager.prototype.setProgress = function (progress) {
            if (this.current) {
                this.current.setProgress(progress);
            }
        };
        // 设置进度最大值
        LoaderManager.prototype.setMax = function (max) {
            if (this.current) {
                this.current.setMax(max);
            }
        };
        return LoaderManager;
    }(frame.base.BaseSingleton));
    Games.LoaderManager = LoaderManager;
})(Games || (Games = {}));
//# sourceMappingURL=LoaderManager.js.map