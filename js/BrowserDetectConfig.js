/**
* 浏览器检测
*/
var BrowserDetectConfig = /** @class */ (function () {
    function BrowserDetectConfig() {
        this.isConch = false;
        this.isCrosswalk = false;
        // 发布版本
        this.isResease = false;
        // 是本地
        this.isLocal = false;
        // 是否显示GM
        this.enableGM = true;
        // 是否显示状态
        this.isShowState = true;
        // 是否使用版本号
        this.isUseVersion = false;
        // 内部充值模式
        this.isDebugRecharge = true;
        this.urlServerListRemote = "http://mbqb.ihaiu.com/GamePF/ServerList.json";
        this.urlServerListLocal = "ServerList.json";
        if (window["conch"]) {
            this.isConch = true;
        }
        if (window && window.navigator && window.navigator.userAgent) {
            var agent = window.navigator.userAgent;
            console.log(agent);
            this.isIOS = agent.indexOf("iPod") > -1 || agent.indexOf("iPhone") > -1 || agent.indexOf("iPad") > -1;
            this.isAndroid = (agent.indexOf("Android") > -1);
            this.isCrosswalk = (agent.indexOf("Crosswalk") > -1);
            this.isMobile = this.isIOS || this.isAndroid;
        }
        else {
            this.isMobile = true;
            this.isApp = true;
        }
        this.isMobile = true;
        this.isApp = this.isConch || this.isCrosswalk;
        this.isResease = true;
        if (window && window["location"] && window["location"]["pathname"] && window["location"]["pathname"].startsWith("/GamePF") || /\/[A-Z]:\//.test(window["location"]["pathname"])) {
            this.isResease = false;
        }
        if (window && window["location"] && window["location"]["pathname"] && /\/[A-Z]:\//.test(window["location"]["pathname"])) {
            this.isUseVersion = false;
        }
        if (!this.isIOS && window && window["location"] && window && window["location"]["origin"] && window && (window["location"]["origin"] == "http://pfqa.ihaiu.com" || window["location"]["origin"] == "http://172.16.50.181:8900")) {
            this.isUseVersion = false;
            this.enableGM = true;
            this.isLocal = true;
        }
        this.enableGM = true;
        if (this.isAndroid) {
            this.isUseVersion = false;
            this.enableGM = true;
            this.isShowState = true;
            this.isLocal = true;
            this.isDebugRecharge = true;
        }
        if (this.isIOS) {
            this.isUseVersion = false;
            this.enableGM = true;
            this.isShowState = true;
            this.isLocal = true;
            this.isDebugRecharge = false;
        }
    }
    Object.defineProperty(BrowserDetectConfig.prototype, "versionUrl", {
        // 版本号路径
        get: function () {
            // if (window && window["location"] && window["location"]["_fullpath"] && window["location"]["_fullpath"].startsWith("https://cdn-exp-pf.shinezone.com/resources/"))
            // {
            // 	return window["location"]["_fullpath"].replace("https://cdn-exp-pf.shinezone.com/resources/", "https://s3.amazonaws.com/mv-va-qa01/resources/") + "/version.json";
            // }
            // else
            // {
            return "version.json";
            // }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BrowserDetectConfig.prototype, "urlServerList", {
        get: function () {
            if (this.isLocal) {
                return this.urlServerListLocal;
            }
            else {
                return this.urlServerListRemote;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BrowserDetectConfig.prototype, "deviceInfo", {
        get: function () {
            if (window["conch"]) {
                if (!this._deviceInfo) {
                    this._deviceInfo = JSON.parse(window["conch"].config.getDeviceInfo());
                }
            }
            else {
                if (!this._deviceInfo)
                    this._deviceInfo = {
                        "os": "ios",
                        "devicename": "iPhone8,1",
                        "imei": "imeixxx",
                        "imsi": "imsixxx",
                        "phonemodel": "iPhone",
                        "localmodel": "iPhone",
                        "retinavalue": "2.000000",
                        "osversion": "10.2",
                        "resolution": "375*667",
                        "guid": "E5B525AB-6B9A-495F-BF74-82345E76D646"
                    };
            }
            return this._deviceInfo;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BrowserDetectConfig.prototype, "deviceId", {
        /**
         * 获取设备ID
         */
        get: function () {
            return Games.GameLocalStorage.Instance.deviceId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BrowserDetectConfig.prototype, "deviceName", {
        get: function () {
            return this.deviceInfo["devicename"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BrowserDetectConfig.prototype, "isIphoneX", {
        get: function () {
            if (this.deviceName && this.deviceName.indexOf("iPhone") != -1) {
                try {
                    var v = this.deviceName.replace("iPhone", "").replace(",", ".");
                    var num = parseFloat(v);
                    if (num >= 10.3) {
                        return true;
                    }
                }
                catch (error) {
                    return false;
                }
            }
            return false;
        },
        enumerable: true,
        configurable: true
    });
    return BrowserDetectConfig;
}());
/**
 * 屏幕分辨率
 */
var ScreenSettingConfig = /** @class */ (function () {
    function ScreenSettingConfig() {
        // 开发分辨率
        this.developWidth = 720;
        this.developHeight = 1280;
    }
    Object.defineProperty(ScreenSettingConfig.prototype, "developAspect", {
        get: function () {
            return this.developWidth / this.developHeight;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ScreenSettingConfig.prototype, "screenWidth", {
        // 屏幕分辨率
        get: function () {
            return fairygui.GRoot.inst.width;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ScreenSettingConfig.prototype, "screenHeight", {
        get: function () {
            return fairygui.GRoot.inst.height;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ScreenSettingConfig.prototype, "screenAspect", {
        get: function () {
            return this.screenWidth / this.screenHeight;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ScreenSettingConfig.prototype, "screenScaleExpand", {
        // 获取缩放比例
        get: function () {
            var rate = 1;
            if (this.screenAspect <= this.developAspect) {
                rate = this.screenHeight / this.developHeight / (this.screenWidth / this.developWidth);
            }
            else {
                rate = this.screenWidth / this.developWidth / (this.screenHeight / this.developHeight);
            }
            return rate;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ScreenSettingConfig.prototype, "screenScaleShrink", {
        get: function () {
            var rate = 1;
            if (this.screenAspect <= this.developAspect) {
                rate = this.screenHeight / this.developHeight;
            }
            else {
                rate = this.screenWidth / this.developWidth;
            }
            return rate;
        },
        enumerable: true,
        configurable: true
    });
    return ScreenSettingConfig;
}());
//# sourceMappingURL=BrowserDetectConfig.js.map