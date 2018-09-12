var GameLaunchLoding = /** @class */ (function () {
    function GameLaunchLoding() {
        this.percent = 0;
        this.showPercent = 0;
    }
    GameLaunchLoding.prototype.loading = function (percent) {
        this.percent = percent;
    };
    GameLaunchLoding.prototype.setGameView = function (percent) {
        if (Games && Games.LoaderManager && Games.LoaderManager.instance) {
            var ctl = Games.LoaderManager.instance.getLoaderCtl(LoaderId.Launch);
            ctl.setMax(100);
            ctl.setProgress(percent);
        }
    };
    GameLaunchLoding.prototype.setView = function (percent) {
        this.showPercent = percent;
        if (window["loadingView"]) {
            window["loadingView"]["loading"](percent);
        }
        else {
            this.setGameView(percent);
        }
        if (this.showPercent == 100) {
            this.stopTweenPrecent();
        }
    };
    GameLaunchLoding.prototype.starTweenPrecent = function () {
        var _this = this;
        this.stopTweenPrecent();
        this._tweenHandler = setInterval(function () {
            _this.showPercent = Math.ceil(Mathf.Lerp(_this.showPercent, _this.percent, 0.1));
            _this.setView(_this.showPercent);
        }, 100);
    };
    GameLaunchLoding.prototype.stopTweenPrecent = function () {
        if (this._tweenHandler) {
            clearInterval(this._tweenHandler);
            this._tweenHandler = null;
        }
    };
    GameLaunchLoding.prototype.setTip = function (txt) {
        if (window["loadingView"]) {
            window["loadingView"]["setTips"]([txt]);
        }
        if (Games && Games.LoaderManager && Games.LoaderManager.instance) {
            var ctl = Games.LoaderManager.instance.getLoaderCtl(LoaderId.Launch);
            ctl.setTip(txt);
        }
    };
    GameLaunchLoding.prototype.setTips = function (txts) {
        if (window["loadingView"]) {
            window["loadingView"]["setTips"](txts);
        }
        if (Games && Games.LoaderManager && Games.LoaderManager.instance) {
            var ctl = Games.LoaderManager.instance.getLoaderCtl(LoaderId.Launch);
            ctl.setTips(txts);
        }
    };
    GameLaunchLoding.prototype.closeLayaLoadingView = function () {
        if (window["loadingView"]) {
            window["loadingView"]["loading"](100);
        }
    };
    // 开始加载	
    GameLaunchLoding.prototype.onBegin = function () {
        this.loading(0);
        this.starTweenPrecent();
        if (window["loadingView"]) {
            window["loadingView"]["loadingAutoClose"] = false;
            window["loadingView"]["showTextInfo"] = true;
            window["loadingView"]["setTips"](["Loding..."]);
        }
    };
    // 加载完核心库
    GameLaunchLoding.prototype.onLoadedCore = function () {
        this.setTip("加载完核心库");
        this.loading(10);
    };
    // 加载完启动界面库
    GameLaunchLoding.prototype.onLoadedLaunch = function () {
        this.setTip("加载完启动界面库");
        this.loading(20);
        this.closeLayaLoadingView();
    };
    // 加载完所有脚本代码
    GameLaunchLoding.prototype.onLoadedAllScript = function () {
        this.setTip("加载完所有脚本代码");
        this.loading(40);
    };
    // 加载配置	
    GameLaunchLoding.prototype.onLoadedConfig = function (index, count) {
        this.setTip("加载配置");
        this.loading(40 + Math.floor((index / count) * 20));
    };
    // 加载语言配置
    GameLaunchLoding.prototype.onLoadedLangConfig = function (index, count) {
        this.setTip("加载语言配置");
        this.loading(60 + Math.floor((index / count) * 20));
    };
    // 加载UI
    GameLaunchLoding.prototype.onLoadedFgui = function (index, count) {
        this.setTip("加载UI");
        this.loading(80 + Math.floor((index / count) * 20));
    };
    // 完成	
    GameLaunchLoding.prototype.onEnd = function () {
        this.setTip("完成");
        this.loading(100);
    };
    return GameLaunchLoding;
}());
var gameLaunchLoding = new GameLaunchLoding();
gameLaunchLoding.onBegin();
//# sourceMappingURL=GameLaunchLoding.js.map