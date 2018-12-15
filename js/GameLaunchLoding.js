var LoadingStateTxt_EN = /** @class */ (function () {
    function LoadingStateTxt_EN() {
    }
    LoadingStateTxt_EN.Loading = "Loading...";
    LoadingStateTxt_EN.LoadedCore = "Loading Core...";
    LoadingStateTxt_EN.LoadedLaunchUI = "Loading Launch UI...";
    LoadingStateTxt_EN.LoadedAllScript = "Loading Code...";
    LoadingStateTxt_EN.LoadedConfig = "Loading Config...";
    LoadingStateTxt_EN.LoadedLangConfig = "Loading Lang Config...";
    LoadingStateTxt_EN.LoadedUI = "Loading UI...";
    LoadingStateTxt_EN.LoadedEnd = "Loading Complete";
    // 加载版本信息
    LoadingStateTxt_EN.VersionLoadConfig = "Loading version info...";
    // 更新应用
    LoadingStateTxt_EN.VersionAppUpdate = "Download APK";
    // 下载资源包
    LoadingStateTxt_EN.VersionLoadZip = "Downloading packets...";
    // 正在解压资源包
    LoadingStateTxt_EN.VersionUnZip = "Unzipping resources...";
    // 拷贝assets->data
    LoadingStateTxt_EN.VersionAssetsCopy = "Initialize resources ";
    LoadingStateTxt_EN.VersionAssetsCopyError = "First Launch Init resources Fail!";
    // 需要更新App
    LoadingStateTxt_EN.VersionAlertUpdateAppTitle = "New update available";
    LoadingStateTxt_EN.VersionAlertUpdateAppMsg = "It is recommended to install with a WiFi connection<br/> &nbsp; <br/>  Current: {0} <br/> Now: {1}";
    LoadingStateTxt_EN.VersionAlertUpdateAppBtn = "Go";
    // 需要更新补丁包
    LoadingStateTxt_EN.VersionAlertUpdateResTitle = "New patch available";
    LoadingStateTxt_EN.VersionAlertUpdateResMsg = "It is recommended to install with a WiFi connection<br/> &nbsp; <br/> Current: {0} <br/> Now: {1}";
    LoadingStateTxt_EN.VersionAlertUpdateResBtn = "Continue";
    LoadingStateTxt_EN.VersionAlertUpdateResFailMsg = "Update version fail! please retry!";
    LoadingStateTxt_EN.VersionAlertUpdateResGetInfoFailMsg = "Load version info fail! please check your network!";
    LoadingStateTxt_EN.VersionAlertUpdateOKBtn = "OK";
    LoadingStateTxt_EN.tips = [
        "Hiring actors...",
        "Filming movies...",
        "Popping popcorn...",
        "Selling tickets...",
        "Owner of this cinema is a genius!"
    ];
    // 网络
    LoadingStateTxt_EN.NetworkState_Title = "Network Status";
    LoadingStateTxt_EN.NetworkState_Error = "Connection seems lost, please check your network!";
    LoadingStateTxt_EN.NetworkState_Background = "Connection failed, please exit and try logging in again!";
    LoadingStateTxt_EN.NetworkState_Button = "EXIT";
    LoadingStateTxt_EN.NetworkState_Button_Reconnecting = "Reconnect";
    return LoadingStateTxt_EN;
}());
var LoadingStateTxt_ZH_Cn = /** @class */ (function () {
    function LoadingStateTxt_ZH_Cn() {
    }
    LoadingStateTxt_ZH_Cn.Loading = "加载中...";
    LoadingStateTxt_ZH_Cn.LoadedCore = "加载完核心";
    LoadingStateTxt_ZH_Cn.LoadedLaunchUI = "加载完成启动界面";
    LoadingStateTxt_ZH_Cn.LoadedAllScript = "加载完代码";
    LoadingStateTxt_ZH_Cn.LoadedConfig = "加载配置文件";
    LoadingStateTxt_ZH_Cn.LoadedLangConfig = "加载多语言配置";
    LoadingStateTxt_ZH_Cn.LoadedUI = "加载UI";
    LoadingStateTxt_ZH_Cn.LoadedEnd = "加载完成";
    LoadingStateTxt_ZH_Cn.VersionLoadConfig = "加载版本信息";
    // 更新应用
    LoadingStateTxt_ZH_Cn.VersionAppUpdate = "下载应用";
    LoadingStateTxt_ZH_Cn.VersionLoadZip = "下载资源包";
    LoadingStateTxt_ZH_Cn.VersionUnZip = "正在解压资源包";
    LoadingStateTxt_ZH_Cn.VersionAssetsCopy = "初始化资源";
    LoadingStateTxt_ZH_Cn.VersionAssetsCopyError = "初始化资源失败!";
    // 需要更新App
    LoadingStateTxt_ZH_Cn.VersionAlertUpdateAppTitle = "需要更新App";
    LoadingStateTxt_ZH_Cn.VersionAlertUpdateAppMsg = "建议在wifi网络安装!!<br/>  &nbsp;  <br/> 当前版本: {0} <br/> 最新版本: {1}";
    LoadingStateTxt_ZH_Cn.VersionAlertUpdateAppBtn = "前往安装";
    LoadingStateTxt_ZH_Cn.VersionAlertUpdateResFailMsg = "更新版本失败！请重试！";
    LoadingStateTxt_ZH_Cn.VersionAlertUpdateResGetInfoFailMsg = "获取版本信息失败！请检查网络重试！";
    // 需要更新补丁包
    LoadingStateTxt_ZH_Cn.VersionAlertUpdateResTitle = "需要更新补丁资源包";
    LoadingStateTxt_ZH_Cn.VersionAlertUpdateResMsg = "建议在wifi网络下更新!!<br/>  &nbsp;  <br/> 当前版本: {0} <br/> 最新版本: {1}";
    LoadingStateTxt_ZH_Cn.VersionAlertUpdateResBtn = "继续";
    LoadingStateTxt_ZH_Cn.VersionAlertUpdateOKBtn = "确定";
    LoadingStateTxt_ZH_Cn.tips = [
        "正在炸爆米花...",
        "正在驱赶放映泥棒...",
        "正在张贴海报...",
        "正在DIY特制3D眼镜...",
        "影院的负责人是个天才!"
    ];
    // 网络
    LoadingStateTxt_ZH_Cn.NetworkState_Title = "网络状态";
    LoadingStateTxt_ZH_Cn.NetworkState_Error = "网络中断，请检查网络设备！";
    LoadingStateTxt_ZH_Cn.NetworkState_Background = "您已断开连接，请点击下方按钮退出游戏并重新登陆！";
    LoadingStateTxt_ZH_Cn.NetworkState_Button = "退出";
    LoadingStateTxt_ZH_Cn.NetworkState_Button_Reconnecting = "尝试重连";
    return LoadingStateTxt_ZH_Cn;
}());
var LoadingStateTxt = LoadingStateTxt_EN;
var GameLaunchLoding = /** @class */ (function () {
    function GameLaunchLoding() {
        this.percent = 0;
        this.showPercent = 0;
        this._repaint = 0;
    }
    GameLaunchLoding.prototype.loading = function (percent) {
        this.percent = percent;
    };
    GameLaunchLoding.prototype.setGameView = function (percent) {
        // console.log("GameLaunchLoding.setGameView  percent=" + percent);
        if (Games && Games.LoaderManager && Games.LoaderManager.instance) {
            var ctl = Games.LoaderManager.instance.getLoaderCtl(LoaderId.Launch);
            ctl.setMax(100);
            ctl.setProgress(percent);
        }
    };
    // 刷新版本好
    GameLaunchLoding.prototype.setVersion = function () {
        if (Games && Games.LoaderManager && Games.LoaderManager.instance) {
            var ctl = Games.LoaderManager.instance.getLoaderCtl(LoaderId.Launch);
            ctl.setVersion();
        }
    };
    GameLaunchLoding.prototype.setView = function (percent, force, isRepaint) {
        if (force === void 0) { force = false; }
        if (isRepaint === void 0) { isRepaint = false; }
        if (force) {
            this.percent = percent;
        }
        if (isRepaint) {
            var time = new Date().getTime();
            if (time > this._repaint + 500) {
                Laya.stage.repaint();
                this._repaint = time;
            }
        }
        this.showPercent = percent;
        if (window["loadingView"]) {
            window["loadingView"]["loading"](percent);
        }
        this.setGameView(percent);
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
        // if (window["loadingView"])
        // {
        // 	window["loadingView"]["setTips"]([txt]);
        // }
        switch (txt) {
            case LoadingStateTxt.LoadedCore:
            case LoadingStateTxt.LoadedAllScript:
            case LoadingStateTxt.LoadedLaunchUI:
            case LoadingStateTxt.LoadedConfig:
            case LoadingStateTxt.LoadedLangConfig:
            case LoadingStateTxt.LoadedUI:
            case LoadingStateTxt.LoadedEnd:
                txt = LoadingStateTxt.Loading;
                break;
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
        this.setTip(LoadingStateTxt.LoadedCore);
        this.loading(10);
    };
    // 加载完启动界面库
    GameLaunchLoding.prototype.onLoadedLaunch = function () {
        var _this = this;
        this.setTip(LoadingStateTxt.LoadedLaunchUI);
        this.loading(20);
        setTimeout(function () {
            _this.closeLayaLoadingView();
        }, 2000);
    };
    // 加载完所有脚本代码
    GameLaunchLoding.prototype.onLoadedAllScript = function () {
        // this.setTip(LoadingStateTxt.LoadedAllScript);
        // this.loading(40);
    };
    // 加载配置	
    GameLaunchLoding.prototype.onLoadedConfig = function (index, count) {
        this.setTip(LoadingStateTxt.LoadedConfig);
        this.loading(40 + Math.floor((index / count) * 20));
    };
    // 加载语言配置
    GameLaunchLoding.prototype.onLoadedLangConfig = function (index, count) {
        this.setTip(LoadingStateTxt.LoadedLangConfig);
        this.loading(60 + Math.floor((index / count) * 20));
    };
    // 加载UI
    GameLaunchLoding.prototype.onLoadedFgui = function (index, count) {
        this.setTip(LoadingStateTxt.LoadedUI);
        this.loading(80 + Math.floor((index / count) * 20));
    };
    // 加载版本信息
    GameLaunchLoding.prototype.onVersionLoadConfig = function () {
        this.setTip(LoadingStateTxt.VersionLoadConfig);
    };
    // 拷贝 assets-> data/{packages}/files
    GameLaunchLoding.prototype.onAssetsCopy = function (currentSize, totalSize) {
        var rate = Math.floor((currentSize / totalSize) * 100);
        this.setTip(LoadingStateTxt.VersionAssetsCopy + " " + bToStr(currentSize) + "/" + bToStr(totalSize));
        this.setView(rate, true);
    };
    // 下载zip包	
    GameLaunchLoding.prototype.onVersionCrosswalkLoadZip = function (percent, convertCurrentProgress, convertFileSize, convertSpeed) {
        this.setView(percent, true);
        if (convertCurrentProgress) {
            this.setTip(LoadingStateTxt.VersionLoadZip + " " + convertCurrentProgress + "/" + convertFileSize + "    " + convertSpeed);
        }
        else {
            this.setTip(LoadingStateTxt.VersionLoadZip);
        }
    };
    // 解压zip包	
    GameLaunchLoding.prototype.onVersionCrosswalkUnZip = function (current, total) {
        if (total > 0) {
            this.setView(Math.floor((current / total) * 100), true);
            this.setTip(LoadingStateTxt.VersionUnZip + " " + current + "/" + total);
        }
        else {
            this.setView(0, true);
            this.setTip(LoadingStateTxt.VersionUnZip);
        }
    };
    GameLaunchLoding.prototype.onVersionCrosswalkAppUpdate = function (percent, currentSize, totalSize) {
        this.setView(percent, true);
        if (currentSize) {
            this.setTip(LoadingStateTxt.VersionAppUpdate + " " + bToStr(currentSize) + "/" + bToStr(totalSize));
        }
        else {
            this.setTip(LoadingStateTxt.VersionAppUpdate);
        }
    };
    // 下载zip包	
    GameLaunchLoding.prototype.onVersionLoadZip = function (currentSize, totalSize, speed) {
        var rate = Math.floor((currentSize / totalSize) * 98);
        if (rate < 95) {
            this.setTip(LoadingStateTxt.VersionLoadZip + " " + bToStr(currentSize) + "/" + bToStr(totalSize) + "    " + kbToStr(speed) + "/s");
        }
        else {
            this.setTip(LoadingStateTxt.VersionUnZip);
        }
        this.setView(rate, true, true);
    };
    // 解压zip包	
    GameLaunchLoding.prototype.onVersionUnZip = function (index, total) {
        this.setTip(LoadingStateTxt.VersionUnZip);
        // this.loading(Math.floor((index / total) * 98));
        this.setView(Math.floor((index / total) * 98), true, true);
        var time = new Date().getTime();
        if (time > this._repaint + 20 || index <= 1) {
            Laya.stage.repaint();
            this._repaint = time;
        }
    };
    // 完成	
    GameLaunchLoding.prototype.onEnd = function () {
        this.setTip(LoadingStateTxt.LoadedEnd);
        this.loading(100);
    };
    return GameLaunchLoding;
}());
var gameLaunchLoding = new GameLaunchLoding();
gameLaunchLoding.onBegin();
//# sourceMappingURL=GameLaunchLoding.js.map