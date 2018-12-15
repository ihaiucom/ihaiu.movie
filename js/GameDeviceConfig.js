/** 机器性能类型 */
var GameDevicePerformanceType;
(function (GameDevicePerformanceType) {
    /** 非常底，快支持不了 */
    GameDevicePerformanceType[GameDevicePerformanceType["VeryLower"] = 0] = "VeryLower";
    /** 底 */
    GameDevicePerformanceType[GameDevicePerformanceType["Lower"] = 1] = "Lower";
    /** 中 */
    GameDevicePerformanceType[GameDevicePerformanceType["Middle"] = 2] = "Middle";
    /** 高 */
    GameDevicePerformanceType[GameDevicePerformanceType["Hight"] = 3] = "Hight";
})(GameDevicePerformanceType || (GameDevicePerformanceType = {}));
/** 机器性能类型 */
var NetworkType = /** @class */ (function () {
    function NetworkType() {
    }
    NetworkType.NET_NO = 0;
    NetworkType.NET_WIFI = 1;
    NetworkType.NET_2G = 2;
    NetworkType.NET_3G = 3;
    NetworkType.NET_4G = 4;
    NetworkType.NET_UNKNOWN = 5;
    return NetworkType;
}());
/**
* 机型配置
*/
var GameDeviceConfig = /** @class */ (function () {
    function GameDeviceConfig() {
        /** 骨骼动画最大缓存数量 */
        this.skeletonCacheMaxNum = 10;
        /** 总共单位最大数量 default = 10*/
        this.unitMaxNum = 10;
        /** 单个房间单位最大数量 default = 2*/
        this.roomUnitMaxNum = 2;
        /** 模块最小缓存时间 */
        this.menuCacheTime = 10000;
        /** 动态图片缓存数量 */
        this.fguiLoaderCacheNum = 100;
        /** 粒子拖尾数量 */
        this.trailNum = 2;
        /** 动态图片缓存时间 */
        this.fguiLoaderCacheTime = 100;
        /** 机器性能类型 */
        this._performanceType = GameDevicePerformanceType.Lower;
        this._networkType = -1;
        this._networkEnable = true;
        this.alertVisiable = false;
        this.netNoTime = 0;
        this.reconnectingNum = 1;
        this.reconnectingCount = 3;
    }
    Object.defineProperty(GameDeviceConfig.prototype, "performanceType", {
        get: function () {
            return this._performanceType;
        },
        set: function (val) {
            this._performanceType = val;
            switch (val) {
                case GameDevicePerformanceType.VeryLower:
                    this.skeletonCacheMaxNum = 5;
                    this.unitMaxNum = 18;
                    this.roomUnitMaxNum = 2;
                    this.menuCacheTime = 3000;
                    this.fguiLoaderCacheNum = 50;
                    this.fguiLoaderCacheTime = 3000;
                    this.trailNum = 2;
                    break;
                case GameDevicePerformanceType.Lower:
                    this.skeletonCacheMaxNum = 10;
                    this.unitMaxNum = 20;
                    this.roomUnitMaxNum = 3;
                    this.menuCacheTime = 3000;
                    this.fguiLoaderCacheNum = 30;
                    this.fguiLoaderCacheTime = 3000;
                    this.trailNum = 3;
                    break;
                case GameDevicePerformanceType.Middle:
                    this.skeletonCacheMaxNum = 25;
                    this.unitMaxNum = 30;
                    this.roomUnitMaxNum = 4;
                    this.menuCacheTime = 10000;
                    this.fguiLoaderCacheNum = 60;
                    this.fguiLoaderCacheTime = 10000;
                    this.trailNum = 4;
                    break;
                case GameDevicePerformanceType.Hight:
                    this.skeletonCacheMaxNum = 50;
                    this.unitMaxNum = 50;
                    this.roomUnitMaxNum = 4;
                    this.menuCacheTime = 300000;
                    this.fguiLoaderCacheNum = 100;
                    this.fguiLoaderCacheTime = 100000;
                    this.trailNum = 5;
                    break;
            }
            // this.unitMaxNum = 2;
            // this.roomUnitMaxNum = 1;
        },
        enumerable: true,
        configurable: true
    });
    GameDeviceConfig.prototype.init = function () {
        var totalMem = this.getTotalMem();
        if (totalMem <= 0) {
            this.performanceType = GameDevicePerformanceType.Hight;
        }
        else if (totalMem <= 1 * 1024 * 1024) {
            this.performanceType = GameDevicePerformanceType.VeryLower;
        }
        else if (totalMem <= 2 * 1024 * 1024) {
            this.performanceType = GameDevicePerformanceType.Middle;
        }
        else {
            this.performanceType = GameDevicePerformanceType.Hight;
        }
    };
    Object.defineProperty(GameDeviceConfig.prototype, "isApp", {
        /**
         * 是否是应用设备
         */
        get: function () {
            return window["conch"] ? true : false;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * 获得运行设备总内存
     * 单位为KB
     */
    GameDeviceConfig.prototype.getTotalMem = function () {
        if (this.isApp) {
            return window["conch"].config.getTotalMem();
        }
        return 0;
    };
    /**
     * 获得当前应用程序占用的内存
     * 单位为KB
     */
    GameDeviceConfig.prototype.getUsedMem = function () {
        if (this.isApp) {
            return window["conch"].config.getUsedMem();
        }
        return 0;
    };
    /**
     * 获得可用的内存
     * 单位为KB
     */
    GameDeviceConfig.prototype.getAvalidMem = function () {
        if (this.isApp) {
            return window["conch"].config.getAvalidMem();
        }
        return 0;
    };
    /**
     * 获得网络类型
     */
    GameDeviceConfig.prototype.getNetworkType = function () {
        if (this._networkType == -1) {
            if (BrowserDetect.isConch) {
                this._networkType = window["conch"].config.getNetworkType();
                return this._networkType;
            }
        }
        else {
            return this._networkType;
        }
        return NetworkType.NET_UNKNOWN;
    };
    Object.defineProperty(GameDeviceConfig.prototype, "networkType", {
        set: function (type) {
            this._networkType = type;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * 获得网络状态
     */
    GameDeviceConfig.prototype.getNetworkEnable = function () {
        if (BrowserDetect.isConch) {
            return gameApplication.getNetworkEnable();
        }
        return this._networkEnable;
    };
    GameDeviceConfig.prototype.setNetworkEnable = function (value) {
        this._networkEnable = value;
    };
    /**
     * 检测网络状态
     */
    GameDeviceConfig.prototype.checkNetwork = function () {
        gameApplication.checkNetwork();
        if (!this.getNetworkEnable()) {
            this.showCheckNetworkAlert();
        }
        else if (this.alertVisiable) {
            if (!User.isLogined || Game.proto.isEnableSendProto) {
                this.closeCheckNetworkAlert();
            }
        }
    };
    GameDeviceConfig.prototype.closeCheckNetworkAlert = function () {
        this.alertVisiable = false;
        this.reconnectingNum = 1;
        Games.SystemMessag.Instance.closeAlert();
    };
    GameDeviceConfig.prototype.showCheckNetworkAlert = function (isForce) {
        if (isForce === void 0) { isForce = false; }
        if (!this.alertVisiable || isForce) {
            this.netNoTime = new Date().getTime();
            // let button = this.reconnectingNum <= this.reconnectingCount ? LoadingStateTxt.NetworkState_Button_Reconnecting : LoadingStateTxt.NetworkState_Button;
            // button = button.format(this.reconnectingNum, this.reconnectingCount);
            Games.SystemMessag.Instance.alrtTextFull(LoadingStateTxt.NetworkState_Error, LoadingStateTxt.NetworkState_Title, this, this.onClickCheckNetworkAlert, LoadingStateTxt.NetworkState_Button_Reconnecting, false, true, false);
        }
        this.alertVisiable = true;
    };
    GameDeviceConfig.prototype.onClickCheckNetworkAlert = function () {
        if (window["User"] && User.isLogined) {
            Game.protosender.account.refreshToken();
        }
    };
    GameDeviceConfig.prototype.onRefreshTokenFail = function () {
        this.reconnectingNum++;
        this.showCheckNetworkAlert(true);
    };
    GameDeviceConfig.prototype.onRefreshTokenOk = function () {
        if (this.alertVisiable)
            this.closeCheckNetworkAlert();
    };
    /**
     * 退出
     */
    GameDeviceConfig.prototype.exit = function () {
        this.alertVisiable = false;
        gameApplication.exit();
    };
    /**
     * 打印设备信息情况
     */
    GameDeviceConfig.prototype.printInfo = function () {
        var str = " TotalMem: " + kbToStr(this.getTotalMem()) + "\n UsedMem: " + kbToStr(this.getUsedMem()) + "\n AvalidMem: " + kbToStr(this.getAvalidMem()) + "\n NetworkType: " + this.getNetworkType();
        console.log(str);
    };
    return GameDeviceConfig;
}());
//# sourceMappingURL=GameDeviceConfig.js.map