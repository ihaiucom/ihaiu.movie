var GameApplicationConch = /** @class */ (function () {
    function GameApplicationConch(_base) {
        // 获取完基本消息
        this.sInfo = new Signal();
        // 触发时机：从活动状态进入非活动状态。
        this.sAppPause = new Signal();
        // 触发时机：程序进入后台时调用。
        this.sDidEnterBackground = new Signal();
        // 触发时机：程序进入前台，但是还没有处于活动状态时调用。
        this.sWillEnterForeground = new Signal();
        // 触发时机：程序进入前台并处于活动状态时调用。
        this.sAppResume = new Signal();
        // 触发时机：程序被杀死时调用。
        this.sWillTerminate = new Signal();
        // 进入后台时间搓 (毫秒)
        this.enterBackgroundTime = 0;
        // 在后台待了多长时间 (毫秒)
        this.atBackgroundTime = 0;
        this.isSetUserInfo = false;
        this._base = _base;
        if (_base) {
            this.IDFA = _base.IDFA;
            this.IDFV = _base.IDFV;
            this.BundleIdentifier = _base.BundleIdentifier;
        }
    }
    // 打开网页	
    GameApplicationConch.prototype.openURL = function (url) {
        if (this._base) {
            this._base.openURL(url);
        }
        else {
            if (!window["conch"]) {
                window.open(url);
            }
        }
    };
    GameApplicationConch.prototype.setUserInfo = function (username, name) {
        if (this.isSetUserInfo)
            return;
        this.isSetUserInfo = true;
        if (this._base && this._base.setUserInfo) {
            this._base.setUserInfo(username, name);
        }
    };
    GameApplicationConch.prototype.reportException = function (message, filename, lineno, colno, e) {
        if (this._base && this._base["reportException"]) {
            this._base["reportException"](message, filename, lineno, colno, e);
        }
    };
    /*
     （3）回调方法：applicationWillResignActive:
     本地通知：UIApplicationWillResignActiveNotification
     触发时机：从活动状态进入非活动状态。
     适宜操作：这个阶段应该保存UI状态（例如游戏状态）。
     */
    GameApplicationConch.prototype.applicationWillResignActive = function () {
        console.log("event:> gameApplication.applicationWillResignActive");
        this.enterBackgroundTime = new Date().getTime();
        this.sAppPause.dispatch();
    };
    /**
     (4）回调方法：applicationDidEnterBackground:
     本地通知：UIApplicationDidEnterBackgroundNotification
     触发时机：程序进入后台时调用。
     适宜操作：这个阶段应该保存用户数据，释放一些资源（例如释放数据库资源）。
     */
    GameApplicationConch.prototype.applicationDidEnterBackground = function () {
        console.log("event:> gameApplication.applicationDidEnterBackground");
        this.sDidEnterBackground.dispatch();
    };
    /**
     （5）回调方法：applicationWillEnterForeground：
     本地通知：UIApplicationWillEnterForegroundNotification
     触发时机：程序进入前台，但是还没有处于活动状态时调用。
     适宜操作：这个阶段应该恢复用户数据。
     */
    GameApplicationConch.prototype.applicationWillEnterForeground = function () {
        console.log("event:> gameApplication.applicationWillEnterForeground");
        this.sWillEnterForeground.dispatch();
    };
    /**
     （2）回调方法：applicationDidBecomeActive：
     本地通知：UIApplicationDidBecomeActiveNotification
     触发时机：程序进入前台并处于活动状态时调用。
     适宜操作：这个阶段应该恢复UI状态（例如游戏状态）。
     */
    GameApplicationConch.prototype.applicationDidBecomeActive = function (enterBackgroundTimeStr) {
        console.log("event:> gameApplication.enterBackgroundTimeStr");
        if (enterBackgroundTimeStr) {
            this.enterBackgroundTime = parseInt(enterBackgroundTimeStr);
        }
        if (this.enterBackgroundTime > 0) {
            this.atBackgroundTime = new Date().getTime() - this.enterBackgroundTime;
        }
        this.sAppResume.dispatch();
    };
    /**
     （6）回调方法：applicationWillTerminate:
     本地通知：UIApplicationWillTerminateNotification
     触发时机：程序被杀死时调用。
     适宜操作：这个阶段应该进行释放一些资源和保存用户数据。
     */
    GameApplicationConch.prototype.applicationWillTerminate = function () {
        console.log("event:> gameApplication.applicationWillTerminate");
        this.sWillTerminate.dispatch();
    };
    GameApplicationConch.prototype.exit = function () {
        if (BrowserDetect.isIOS) {
            this._base["exitApp"]();
        }
        else if (window["conch"] && window["conch"]["exit"]) {
            window["conch"].exit();
        }
    };
    GameApplicationConch.prototype.checkNetwork = function () {
        if (BrowserDetect.isIOS) {
            this._base.checkNetwork();
        }
    };
    GameApplicationConch.prototype.getNetworkEnable = function () {
        if (BrowserDetect.isIOS) {
            return this._base.networkEnable;
        }
        else {
            return gameDeviceConfig.getNetworkType() != NetworkType.NET_NO;
        }
    };
    Object.defineProperty(GameApplicationConch.prototype, "AppVersionName", {
        get: function () {
            if (window["conch"]) {
                if (BrowserDetect.isIOS) {
                    return window["conch"].config.getAppVersion();
                }
                else if (this._base && this._base["AppVersionName"]) {
                    return this._base["AppVersionName"];
                }
            }
            return "1.00.00";
        },
        enumerable: true,
        configurable: true
    });
    return GameApplicationConch;
}());
if (!window["gameApplication"]) {
    var gameApplication;
}
//# sourceMappingURL=GameApplicationConch.js.map