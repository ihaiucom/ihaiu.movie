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
var signals;
(function (signals) {
    var TypedSignal = /** @class */ (function () {
        function TypedSignal() {
            this._listeners = [];
        }
        TypedSignal.prototype.add = function (listener, self) {
            if (!this.hasListener(listener, self)) {
                this._listeners.push(new TypedSignalHandler(listener, self));
            }
        };
        TypedSignal.prototype.addOnce = function (listener, self) {
            if (!this.hasListener(listener, self)) {
                this._listeners.push(new TypedSignalHandler(listener, self, true));
            }
        };
        TypedSignal.prototype.hasListener = function (listener, self) {
            for (var i = 0; i < this._listeners.length; i++) {
                if (this._listeners[i].equals(listener, self)) {
                    return true;
                }
            }
            return false;
        };
        TypedSignal.prototype.remove = function (listener, self) {
            for (var i = 0; i < this._listeners.length; i++) {
                if (this._listeners[i].equals(listener, self)) {
                    this._listeners.splice(i, 1);
                    break;
                }
            }
        };
        TypedSignal.prototype.removeAll = function () {
            this._listeners.length = 0;
        };
        TypedSignal.prototype.dispatch = function (value) {
            this._listeners.forEach(function (handler) { return handler.apply(value); });
            this._listeners = this._listeners.filter(function (handler, i, arr) { return !handler.once(); });
        };
        return TypedSignal;
    }());
    signals.TypedSignal = TypedSignal;
    var TypedSignalHandler = /** @class */ (function () {
        function TypedSignalHandler(handler, self, once) {
            if (once === void 0) { once = false; }
            this._handler = handler;
            this._self = self;
            this._once = once;
        }
        TypedSignalHandler.prototype.apply = function (arg) {
            this._handler.apply(this._self, [arg]);
        };
        TypedSignalHandler.prototype.equals = function (handler, self) {
            return this._handler == handler && this._self == self;
        };
        TypedSignalHandler.prototype.once = function () {
            return this._once;
        };
        return TypedSignalHandler;
    }());
})(signals || (signals = {}));
if (!window["TypedSignal"]) {
    window["TypedSignal"] = signals.TypedSignal;
}
//# sourceMappingURL=TypedSignal.js.map
var signals;
(function (signals) {
    var Signal = /** @class */ (function () {
        function Signal() {
            this._listeners = [];
        }
        Signal.prototype.add = function (listener, self) {
            if (!this.hasListener(listener, self)) {
                this._listeners.push(new SignalHandler(listener, self));
            }
        };
        Signal.prototype.addOnce = function (listener, self) {
            if (!this.hasListener(listener, self)) {
                this._listeners.push(new SignalHandler(listener, self, true));
            }
        };
        Signal.prototype.hasListener = function (listener, self) {
            for (var i = 0; i < this._listeners.length; i++) {
                if (this._listeners[i].equals(listener, self)) {
                    return true;
                }
            }
            return false;
        };
        Signal.prototype.remove = function (listener, self) {
            for (var i = 0; i < this._listeners.length; i++) {
                if (this._listeners[i].equals(listener, self)) {
                    this._listeners.splice(i, 1);
                    break;
                }
            }
        };
        Signal.prototype.removeAll = function () {
            this._listeners.length = 0;
        };
        Signal.prototype.dispatch = function () {
            this._listeners.forEach(function (handler) { return handler.apply(); });
            this._listeners = this._listeners.filter(function (handler, i, arr) { return !handler.once(); });
        };
        return Signal;
    }());
    signals.Signal = Signal;
    var SignalHandler = /** @class */ (function () {
        function SignalHandler(handler, self, once) {
            if (once === void 0) { once = false; }
            this._handler = handler;
            this._self = self;
            this._once = once;
        }
        SignalHandler.prototype.apply = function () {
            this._handler.apply(this._self);
        };
        SignalHandler.prototype.equals = function (handler, self) {
            return this._handler == handler && this._self == self;
        };
        SignalHandler.prototype.once = function () {
            return this._once;
        };
        return SignalHandler;
    }());
})(signals || (signals = {}));
if (!window["Signal"]) {
    window["Signal"] = signals.Signal;
}
//# sourceMappingURL=Signal.js.map
///<reference path="TypedSignal.ts"/>
var signals;
(function (signals) {
    var Bindable = /** @class */ (function () {
        function Bindable(value) {
            if (value === void 0) { value = null; }
            this._changeWatcher = new signals.TypedSignal();
            this._value = value;
        }
        Object.defineProperty(Bindable.prototype, "value", {
            get: function () {
                return this._value;
            },
            set: function (value) {
                this.setValue(value);
            },
            enumerable: true,
            configurable: true
        });
        Bindable.prototype.add = function (listener, self) {
            this._changeWatcher.add(listener, self);
        };
        Bindable.prototype.remove = function (listener, self) {
            this._changeWatcher.remove(listener, self);
        };
        Bindable.prototype.removeAll = function () {
            this._changeWatcher.removeAll();
        };
        Bindable.prototype.bindTo = function (target) {
            var _this = this;
            this.value = target.value;
            target.add(function (t) { return _this.setValue(t); }, this);
        };
        Bindable.prototype.unbind = function (target) {
            var _this = this;
            target.remove(function (t) { return _this.setValue(t); }, this);
        };
        Bindable.prototype.setValue = function (value) {
            if (value != this._value) {
                this._value = value;
                this._changeWatcher.dispatch(value);
            }
        };
        return Bindable;
    }());
    signals.Bindable = Bindable;
})(signals || (signals = {}));
if (!window["Bindable"]) {
    window["Bindable"] = signals.Bindable;
}
//# sourceMappingURL=Bindable.js.map
var Mathf = /** @class */ (function () {
    function Mathf() {
    }
    Mathf.clamp = function (num, min, max) {
        return Math.max(Math.min(num, Math.max(min, max)), Math.min(min, max));
    };
    Mathf.Clamp01 = function (value) {
        if (value < 0.0)
            return 0.0;
        if (value > 1.0)
            return 1;
        return value;
    };
    /// <summary>
    ///   <para>Linearly interpolates between a and b by t.</para>
    /// </summary>
    /// <param name="a"></param>
    /// <param name="b"></param>
    /// <param name="t"></param>
    Mathf.Lerp = function (a, b, t) {
        return a + (b - a) * Mathf.Clamp01(t);
    };
    return Mathf;
}());
//# sourceMappingURL=Mathf.js.map

if (DOMParser && DOMParser.initXMl)
{
	var _jsXmlNode = DOMParser.initXMl();
	if (_jsXmlNode)
	{
		_jsXmlNode = _jsXmlNode.constructor.prototype;

		if (_jsXmlNode)
		{
			_jsXmlNode.setAttribute = function (name, value)
			{
				if (this["attributes"] && this["attributes"][name])
					this["attributes"][name]["nodeValue"] = value;
			}
		}
	}
}

String.prototype.format = function (args)
{
    var result = this;
    if (arguments.length > 0)
    {
        if (arguments.length == 1 && typeof (args) == "object")
        {
            for (var key in args)
            {
                if (args[key] != undefined)
                {
                    var reg = new RegExp("({" + key + "})", "g");
                    result = result.replace(reg, args[key]);
                }
            }
        }
        else
        {
            for (var i = 0; i < arguments.length; i++)
            {
                if (arguments[i] != undefined)
                {
                    //var reg = new RegExp("({[" + i + "]})", "g");//这个在索引大于9时会有问题，谢谢何以笙箫的指出
                    var reg = new RegExp("({)" + i + "(})", "g");
                    result = result.replace(reg, arguments[i]);
                }
            }
        }
    }
    return result;
}



String.format = function () 
{
    if (arguments.length == 0)
        return null;

    var str = arguments[0];
    for (var i = 1; i < arguments.length; i++)
    {
        var re = new RegExp('\\{' + (i - 1) + '\\}', 'gm');
        str = str.replace(re, arguments[i]);
    }
    return str;
}

String.prototype.startsWith = function (str, ignoreCase)
{
    return fairygui.utils.ToolSet.startsWith(this, str, ignoreCase);
}

String.prototype.endsWith = function (str, ignoreCase)
{
    return fairygui.utils.ToolSet.endsWith(this, str, ignoreCase);
}

String.prototype.trimLeft = function (targetString)
{
    return fairygui.utils.ToolSet.trimLeft(targetString);
}

String.prototype.trimRight = function (targetString)
{
    return fairygui.utils.ToolSet.trimRight(targetString);
}


// String.prototype.replaceAll = function (searchValue, replaceValue)
// {
//     var reg = new RegExp(searchValue, "g");
//     return this.replace(reg, replaceValue);
// }


function isNumber(x) {
    return typeof x === "number";
}
//判断是否是正整数
function isInt(s) {
    if (s != null) {
        var r, re;
        re = /\d*/i; //\d表示数字,*表示匹配多个数字
        r = s.match(re);
        return (r == s) ? true : false;
    }
    return false;
}
function isString(x) {
    return typeof x === "string";
}
function isNullOrEmpty(x) {
    if (x instanceof Array)
        return x == null || x == undefined;
    return x == null || x == undefined || x == "";
}
// 获取类名
function getClassName(obj) {
    return obj["constructor"]["name"];
}
// 获取函数名
function getFunctionName(method) {
    return method["name"] || method.toString().match(/function\s*([^(]*)\(/)[1];
}
// 获取时间戳
function getTime() {
    return new Date().getTime();
}
// 获取时间戳 （秒）
function getTimeStamp() {
    return Math.floor(getTime() / 1000);
}
// 屏幕自适应
function autoScreenSize(content, alignH, alignV) {
    var rate = ScreenSetting.screenScaleExpand;
    content.width = content.sourceWidth * rate;
    content.height = content.sourceHeight * rate;
    if (alignH) {
        var parent_1 = fairygui.GRoot.inst;
        switch (alignH) {
            case Laya.Stage.ALIGN_LEFT:
                content.x = 0;
                break;
            case Laya.Stage.ALIGN_CENTER:
                content.x = (parent_1.width - content.width) * 0.5;
                break;
            case Laya.Stage.ALIGN_RIGHT:
                content.x = parent_1.width - content.width;
                break;
        }
        switch (alignV) {
            case Laya.Stage.ALIGN_TOP:
                content.y = 0;
                break;
            case Laya.Stage.ALIGN_MIDDLE:
                content.y = (parent_1.height - content.height) * 0.5;
                break;
            case Laya.Stage.ALIGN_BOTTOM:
                content.y = parent_1.height - content.height;
                break;
        }
    }
}
// 屏幕居中
function centerScreen(content) {
    content.x = (ScreenSetting.screenWidth - content.width) * 0.5;
    content.y = (ScreenSetting.screenHeight - content.height) * 0.5;
}
function centerScreenForCenter(content) {
    content.x = ScreenSetting.screenWidth * 0.5;
    content.y = ScreenSetting.screenHeight * 0.5;
}
// 屏幕大小
function setScreenSize(content) {
    content.width = ScreenSetting.screenWidth;
    content.height = ScreenSetting.screenHeight;
}
/** 获取值，使用访问路径 */
function getValueForPath(path, content) {
    var args = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        args[_i - 2] = arguments[_i];
    }
    if (path.endsWith("()")) {
        return getFunResultForPath.apply(void 0, [path, content].concat(args));
    }
    else {
        return getFieldValueForPath(path, content);
    }
}
/** 获取函数结果值，使用访问路径 */
function getFunResultForPath(path, content) {
    var args = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        args[_i - 2] = arguments[_i];
    }
    if (path.endsWith("()")) {
        path = path.replace("()", "");
        var fun = getFieldValueForPath(path, content);
        if (fun) {
            var paths = path.split(/[\.\/]/);
            if (paths.length == 1) {
                if (args.length == 1) {
                    return fun.apply(content, args[0]);
                }
                return fun.apply(content, args);
            }
            else {
                var objPath = "";
                var gap = "";
                for (var i = 0; i < paths.length - 1; i++) {
                    objPath += gap + paths[i];
                    gap = ".";
                }
                var obj = getFieldValueForPath(objPath, content);
                if (args.length == 1) {
                    return fun.apply(obj, args[0]);
                }
                return fun.apply(obj, args);
            }
        }
    }
    else {
        return getFieldValueForPath(path, content);
    }
}
/** 获取值，使用访问路径 */
function getFieldValueForPath(path, content) {
    if (!content) {
        content = window;
        if (!content) {
            content = this;
        }
    }
    var paths = path.split(/[\.\/]/);
    var val = content;
    for (var i = 0; i < paths.length; i++) {
        if (val[paths[i]]) {
            val = val[paths[i]];
        }
        else {
            return null;
        }
    }
    return val;
}
function bToStr(b) {
    if (b < 1024) {
        return b + "B";
    }
    var kb = b / 1024;
    return kbToStr(kb);
}
function kbToStr(kb) {
    if (kb < 1024) {
        return Math.ceil(kb) + "KB";
    }
    var mb = kb / 1024;
    if (mb < 1024) {
        return (Math.ceil(mb * 100) / 100) + "MB";
    }
    var gb = mb / 1024;
    return (Math.ceil(gb * 100) / 100) + "GB";
}
//# sourceMappingURL=Fun.js.map
var Random = /** @class */ (function () {
    function Random() {
    }
    // int
    // min <= r < max
    Random.range = function (min, max) {
        var range = max - min;
        var rand = Math.random();
        return min + Math.floor(range * rand);
    };
    // int
    // min <= r <= max
    Random.rangeBoth = function (min, max) {
        var range = max - min;
        var rand = Math.random();
        return min + Math.round(range * rand);
    };
    // int
    // min < r < max
    Random.rangeBetween = function (min, max) {
        var range = max - min;
        var rand = Math.random();
        if (Math.round(rand * range) == 0) {
            return min + 1;
        }
        else if (Math.round(rand * max) == max) {
            return max - 1;
        }
        else {
            return min + Math.round(rand * range) - 1;
        }
    };
    /// <summary>
    /// 乱序排列一个数组
    /// </summary>
    Random.GetDisorderList = function (list) {
        var countNum = list.length;
        var listA = new Array();
        var listB = new Array();
        for (var i = 0; i < countNum; i++) {
            listA.push(list[i]);
        }
        while (listB.length < countNum) {
            var index = Random.range(0, listA.length);
            if (listB.indexOf(listA[index]) === -1) {
                listB.push(listA[index]);
                listA.splice(index, 1);
            }
        }
        return listB;
    };
    return Random;
}());
//# sourceMappingURL=Random.js.map
var AppSetting = /** @class */ (function () {
    function AppSetting() {
    }
    Object.defineProperty(AppSetting, "wwwFileDir", {
        get: function () {
            return AppSetting.FileDir + "/www";
        },
        enumerable: true,
        configurable: true
    });
    AppSetting.wwwSize = 146169628;
    AppSetting.platform = "android";
    AppSetting.url = "http://mbqb.ihaiu.com/Gidea-PF-Res/resources/android/web/index.html";
    AppSetting.appId = "com.shinezone.movie.test";
    AppSetting.enableVersion = false;
    AppSetting.isDebug = false;
    AppSetting.AppVersionName = "1.0.0";
    AppSetting.FileDir = "/data/data/com.shinezone.movie.test/files";
    AppSetting.CacheDir = "/data/data/com.shinezone.movie.test/cache";
    AppSetting.ExternalCacheDir = "/storage/emulated/0/Android/data/com.shinezone.movie.test/cache";
    AppSetting.ExternalFilesDir = "/storage/emulated/0/Android/data/com.shinezone.movie.test/files";
    AppSetting.ObbDir = "/storage/emulated/0/Android/obb/com.shinezone.movie.test";
    return AppSetting;
}());
//# sourceMappingURL=AppSetting.js.map
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
        this.isLocal = true;
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
            // this.isMobile = true;
            // this.isApp = true;
        }
        // this.isMobile = true;
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
        this.isLocal = true;
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
var Games;
(function (Games) {
    var GameBridger = /** @class */ (function () {
        function GameBridger() {
            this.jsClassName = "GameBridger";
        }
        GameBridger.prototype.handler = function (data, callbackResponse) {
            if (typeof (data) == "string") {
                try {
                    data = JSON.parse(data);
                }
                catch (error) {
                    console.error("GameBridger handler: 解析json出错 " + error);
                }
            }
            if (data && data[GameBridger.HANDLER_NAME_STR]) {
                var handlerName = data[GameBridger.HANDLER_NAME_STR];
                var args = data[GameBridger.DATA_NAME_STR];
                var fun = this[handlerName];
                if (fun) {
                    fun.apply(this, [args, callbackResponse]);
                }
            }
        };
        GameBridger.prototype.callNative = function (handlerName, args, callback) {
            var data = {
                handlerName: handlerName,
                data: args
            };
            WebViewJavascriptBridge.callHandler(this.jsClassName, data, callback);
        };
        /**
         * 将自己注册到
         */
        GameBridger.prototype.register = function () {
            Games.GameBridgerManager.Instance.registerHandler(this);
        };
        GameBridger.HANDLER_NAME_STR = "handlerName";
        GameBridger.DATA_NAME_STR = "data";
        return GameBridger;
    }());
    Games.GameBridger = GameBridger;
})(Games || (Games = {}));
//# sourceMappingURL=GameBridger.js.map

var Games;
(function (Games) {
    var GameApplicationBridger = /** @class */ (function (_super) {
        __extends(GameApplicationBridger, _super);
        function GameApplicationBridger() {
            var _this = _super.call(this) || this;
            _this.jsClassName = "GameApplicationBridger";
            _this.networkEnable = true;
            /////////////////////////////////////
            // 事件
            /////////////////////////////////////
            // 获取完基本消息
            _this.sInfo = new Signal();
            // 触发时机：从活动状态进入非活动状态。
            _this.sAppPause = new Signal();
            // 触发时机：程序进入前台并处于活动状态时调用。
            _this.sAppResume = new Signal();
            _this.isSetUserInfo = false;
            _this.IDFA = AppSetting.IDFA;
            _this.IDFV = AppSetting.IDFV;
            _this.BundleIdentifier = AppSetting.appId;
            _this.AppVersionName = AppSetting.AppVersionName;
            return _this;
        }
        GameApplicationBridger.prototype.getInfo = function () {
            var _this = this;
            this.getIDFA();
            this.getIDFV();
            this.getBundleIdentifier();
            this.getAppVersionName();
            setTimeout(function () {
                _this.sInfo.dispatch();
            }, 200);
        };
        /////////////////////////////////////
        // 通知
        /////////////////////////////////////
        /**
         * 游戏暂停
         */
        GameApplicationBridger.prototype.onPause = function (enterBackgroundTime) {
            console.log("event:> onPause 游戏暂停");
            this.sAppPause.dispatch();
        };
        /**
         * 游戏恢复
         */
        GameApplicationBridger.prototype.onResume = function (enterBackgroundTime) {
            console.log("event:> onResume 游戏恢复 enterBackgroundTime=" + enterBackgroundTime);
            this.sAppResume.dispatch();
        };
        /////////////////////////////////////
        // js 获取
        /////////////////////////////////////
        GameApplicationBridger.prototype.getIDFA = function () {
            var _this = this;
            this.callNative("getIDFA", null, function (response) {
                _this.IDFA = response;
            });
        };
        GameApplicationBridger.prototype.getIDFV = function () {
            var _this = this;
            this.callNative("getIDFV", null, function (response) {
                _this.IDFV = response;
            });
        };
        GameApplicationBridger.prototype.getBundleIdentifier = function () {
            var _this = this;
            this.callNative("getBundleIdentifier", null, function (response) {
                _this.BundleIdentifier = response;
            });
        };
        GameApplicationBridger.prototype.getAppVersionName = function () {
            var _this = this;
            this.callNative("getAppVersionName", null, function (response) {
                _this.AppVersionName = response;
                GameVersions.Manager.Instance.refreshAppVersion();
            });
        };
        /////////////////////////////////////
        // 执行
        /////////////////////////////////////
        GameApplicationBridger.prototype.openURL = function (url) {
            this.callNative("openURL", { url: url }, null);
        };
        GameApplicationBridger.prototype.exitApp = function () {
            this.callNative("exitApp", null, null);
        };
        GameApplicationBridger.prototype.checkNetwork = function () {
        };
        GameApplicationBridger.prototype.getNetworkEnable = function () {
            return this.networkEnable;
        };
        /////////////////////////////////////
        // Testin
        /////////////////////////////////////
        GameApplicationBridger.prototype.reportException = function (message) {
            this.callNative("reportException", { message: message }, null);
        };
        GameApplicationBridger.prototype.setUserInfo = function (username, name) {
            if (this.isSetUserInfo)
                return;
            this.isSetUserInfo = true;
            this.callNative("setUserInfo", { username: username, name: name }, null);
        };
        return GameApplicationBridger;
    }(Games.GameBridger));
    Games.GameApplicationBridger = GameApplicationBridger;
})(Games || (Games = {}));
//# sourceMappingURL=GameApplicationBridger.js.map

var Games;
(function (Games) {
    var GameDefaultBridger = /** @class */ (function (_super) {
        __extends(GameDefaultBridger, _super);
        function GameDefaultBridger() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.jsClassName = "GameDefaultBridger";
            return _this;
        }
        GameDefaultBridger.prototype.handler = function (data, callback) {
            try {
                eval(data);
            }
            catch (error) {
            }
        };
        return GameDefaultBridger;
    }(Games.GameBridger));
    Games.GameDefaultBridger = GameDefaultBridger;
})(Games || (Games = {}));
//# sourceMappingURL=GameDefaultBridger.js.map

var Games;
(function (Games) {
    var GameNetworkBridger = /** @class */ (function (_super) {
        __extends(GameNetworkBridger, _super);
        function GameNetworkBridger() {
            var _this = _super.call(this) || this;
            _this.jsClassName = "GameNetworkBridger";
            /////////////////////////////////////
            // 事件
            /////////////////////////////////////
            // 网络改变
            _this.sChange = new Signal();
            return _this;
        }
        /////////////////////////////////////
        // 执行
        /////////////////////////////////////
        /**
         * 请求开始
         */
        GameNetworkBridger.prototype.requireStart = function () {
            // alert("GameNetworkBridger requireStart");
            this.callNative("onRequireStart");
        };
        /** 请求状态信息 */
        GameNetworkBridger.prototype.requireState = function () {
            // alert("GameNetworkBridger requireState");
            this.callNative("onGetState", null, function (msg) {
                // alert("msg.isAvailable=" + msg.isAvailable + ", msg.netType=" + msg.netType);
                gameDeviceConfig.setNetworkEnable(msg.isAvailable);
                gameDeviceConfig.networkType = msg.netType;
            });
        };
        /**
         * 设置间隔时间 默认:2000毫秒
         */
        GameNetworkBridger.prototype.setGapTime = function (gapTime) {
            this.callNative("onSetGapTime", { gapTime: gapTime });
        };
        /**
         * 设置ping
         * @param pingEnable 是否开启ping 默认开启
         * @param pingGapTime 间隔时间  默认: 10000毫秒
         * @param pingIp ping的域名   默认: bing.com
         */
        GameNetworkBridger.prototype.setPing = function (pingEnable, pingGapTime, pingIp) {
            this.callNative("onSetPing", { pingEnable: pingEnable, pingGapTime: pingGapTime, pingIp: pingIp });
        };
        /////////////////////////////////////
        // 事件
        /////////////////////////////////////
        GameNetworkBridger.prototype.onChange = function (msg) {
            // alert("msg.isAvailable=" + msg.isAvailable + ", msg.netType=" + msg.netType + ", msg.isPingSuccess=" + msg.isPingSuccess);
            gameDeviceConfig.setNetworkEnable(msg.isAvailable && msg.isPingSuccess);
            gameDeviceConfig.networkType = msg.netType;
            this.sChange.dispatch();
        };
        return GameNetworkBridger;
    }(Games.GameBridger));
    Games.GameNetworkBridger = GameNetworkBridger;
})(Games || (Games = {}));
//# sourceMappingURL=GameNetworkBridger.js.map
var Games;
(function (Games) {
    var GameBridgerManager = /** @class */ (function () {
        function GameBridgerManager() {
            this.defaultBridger = new Games.GameDefaultBridger();
            this.applicationBridger = new Games.GameApplicationBridger();
            this.networkBridger = new Games.GameNetworkBridger();
        }
        Object.defineProperty(GameBridgerManager, "Instance", {
            get: function () {
                if (!GameBridgerManager._Instance) {
                    GameBridgerManager._Instance = new GameBridgerManager();
                }
                return GameBridgerManager._Instance;
            },
            enumerable: true,
            configurable: true
        });
        GameBridgerManager.prototype.init = function () {
            if (!window["WebViewJavascriptBridge"]) {
                return;
            }
            WebViewJavascriptBridge.init(this.defaultBridger.handler, this.defaultBridger);
            this.registerHandler(this.applicationBridger);
            this.registerHandler(this.networkBridger);
            this.networkBridger.requireStart();
            this.networkBridger.requireState();
        };
        /**
         * 注册桥接处理器
         * @param bridgeHandler
         */
        GameBridgerManager.prototype.registerHandler = function (bridgeHandler) {
            WebViewJavascriptBridge.registerHandler(bridgeHandler.jsClassName, bridgeHandler.handler, bridgeHandler);
        };
        return GameBridgerManager;
    }());
    Games.GameBridgerManager = GameBridgerManager;
})(Games || (Games = {}));
//# sourceMappingURL=GameBridgerManager.js.map
function log(msg) {
    if (typeof (msg) == "object") {
        msg = JSON.stringify(msg);
    }
    // document.body.innerHTML += msg + "<br>\n";
    console.log(msg);
}
function h1(msg) {
    // document.body.innerHTML += "\n<br><h1>" + msg + "</h1>\n";
    console.log("");
    console.log(msg);
}
function node(msg) {
    if (typeof (msg) == "object") {
        msg = JSON.stringify(msg);
    }
    // document.body.innerHTML += "\n<p style='color: #999; background-color: #f3f6fa;'>\n" + msg + "\n</p>\n";
    console.log(msg);
}
function pre(msg) {
    if (typeof (msg) == "object") {
        msg = JSON.stringify(msg);
    }
    // document.body.innerHTML += "\n<pre style='padding: 0.8rem;overflow: auto;font-size: 0.9rem;line-height: 1.45;border-radius: 0.3rem; word-wrap: normal;background-color: #f3f6fa;border: solid 1px #dce6f0;'>\n" + msg + "\n</pre>\n";
    console.log(msg);
}
function error(msg) {
    if (typeof (msg) == "object") {
        msg = JSON.stringify(msg);
    }
    // document.body.innerHTML += "\n<pre style='padding: 0.8rem;overflow: auto;font-size: 0.9rem;line-height: 1.45;border-radius: 0.3rem; word-wrap: normal;background-color: #dd6666;border: solid 1px #660000;'>\n" + msg + "\n</pre>\n";
    console.error(msg);
}
//# sourceMappingURL=log.js.map
var Dictionary = /** @class */ (function () {
    function Dictionary() {
        this.dict = {};
        this._count = 0;
    }
    Object.defineProperty(Dictionary.prototype, "count", {
        get: function () {
            return this._count;
        },
        enumerable: true,
        configurable: true
    });
    Dictionary.prototype.add = function (key, val) {
        if (this.hasKey(key) === false) {
            this._count++;
        }
        this.dict[key] = val;
    };
    Dictionary.prototype.set = function (key, val) {
        if (this.hasKey(key) === false) {
            this._count++;
        }
        this.dict[key] = val;
    };
    Dictionary.prototype.remove = function (key) {
        if (this.hasKey(key)) {
            this._count--;
        }
        // this.dict[key] = undefined;
        delete this.dict[key];
    };
    Dictionary.prototype.hasKey = function (key) {
        return this.dict[key] != undefined;
    };
    Dictionary.prototype.getValue = function (key) {
        return this.dict[key];
    };
    Dictionary.prototype.getValueOrDefault = function (key, _default) {
        if (this.hasKey(key)) {
            return this.getValue(key);
        }
        else {
            return _default;
        }
    };
    Dictionary.prototype.__getDict = function () {
        return this.dict;
    };
    Dictionary.prototype.getValues = function () {
        var list = [];
        for (var key in this.dict) {
            list.push(this.dict[key]);
        }
        return list;
    };
    Dictionary.prototype.getKeys = function () {
        var list = [];
        for (var key in this.dict) {
            list.push(key);
        }
        return list;
    };
    Dictionary.prototype.clear = function () {
        this.dict = {};
        this._count = 0;
    };
    return Dictionary;
}());
//# sourceMappingURL=Dictionary.js.map
/**
 * 单例基类
 * author chuhua
 */
var frame;
(function (frame) {
    var base;
    (function (base) {
        var BaseSingleton = /** @class */ (function () {
            function BaseSingleton() {
            }
            /**
             * 获取单例实例
             */
            BaseSingleton.getInstance = function () {
                var Class = this;
                if (Class.__instance == null) {
                    Class.__instance = new Class();
                }
                return Class.__instance;
            };
            /**
             * 销毁实例
             */
            BaseSingleton.prototype.destroyInstance = function () {
                var Class = this;
                if (Class.__instance) {
                    Class.__instance = null;
                    delete Class.__instance;
                }
            };
            return BaseSingleton;
        }());
        base.BaseSingleton = BaseSingleton;
    })(base = frame.base || (frame.base = {}));
})(frame || (frame = {}));
//# sourceMappingURL=BaseSingleton.js.map
var LogType;
(function (LogType) {
    LogType[LogType["Log"] = 1] = "Log";
    LogType[LogType["Warn"] = 2] = "Warn";
    LogType[LogType["Error"] = 3] = "Error";
})(LogType || (LogType = {}));
var LogItem = /** @class */ (function () {
    function LogItem(logType, msg) {
        this.logType = logType;
        this.msg = msg + "";
    }
    return LogItem;
}());
var DebugManager = /** @class */ (function () {
    function DebugManager() {
        this.maxcount = 1000;
        this.dict = new Dictionary();
        this.list = [];
    }
    DebugManager.prototype.getList = function (type) {
        if (this.dict.hasKey(type))
            return this.dict.getValue(type);
        var l = [];
        this.dict.add(type, l);
        return l;
    };
    Object.defineProperty(DebugManager.prototype, "listAll", {
        get: function () {
            return this.list;
        },
        enumerable: true,
        configurable: true
    });
    DebugManager.prototype.getListByTypes = function (types) {
        var list = [];
        for (var i = 0; i < this.list.length; i++) {
            if (types.indexOf(this.list[i].logType) != -1) {
                list.push(this.list[i]);
            }
        }
        return list;
    };
    DebugManager.prototype.addLog = function (type, message) {
        var optionalParams = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            optionalParams[_i - 2] = arguments[_i];
        }
        if (message) {
            this.add(new LogItem(type, this.stringFormat.apply(this, [message].concat(optionalParams))));
        }
        else {
            this.add(new LogItem(type, message));
        }
    };
    DebugManager.prototype.add = function (item) {
        var l = this.getList(item.logType);
        l.push(item);
        this.list.push(item);
        if (this.list.length > this.maxcount) {
            this.list.shift();
        }
        if (l.length > this.maxcount) {
            l.shift();
        }
    };
    DebugManager.prototype.clear = function () {
        __mconsole.clear();
        this.list = [];
        this.dict.clear();
    };
    Object.defineProperty(DebugManager.prototype, "enable", {
        get: function () {
            return console === this;
        },
        set: function (value) {
            if (console !== this) {
                console = this;
            }
        },
        enumerable: true,
        configurable: true
    });
    DebugManager.prototype.stringFormat = function (message) {
        var optionalParams = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            optionalParams[_i - 1] = arguments[_i];
        }
        if (optionalParams) {
            for (var i = 0; i < optionalParams.length; i++) {
                if (/%s|%d|%i|%o/.test(message)) {
                    message = message.replace(/%s|%d|%i|%o/, optionalParams[i]);
                }
                else {
                    break;
                }
            }
        }
        return message;
    };
    DebugManager.prototype.assert = function (test, message) {
        var optionalParams = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            optionalParams[_i - 2] = arguments[_i];
        }
        __mconsole.assert.apply(__mconsole, [test, message].concat(optionalParams));
        if (!message) {
            if (message) {
                alert(this.stringFormat.apply(this, [message].concat(optionalParams)));
            }
            else {
                alert(test);
            }
        }
    };
    DebugManager.prototype.count = function (countTitle) {
        __mconsole.count(countTitle);
    };
    DebugManager.prototype.debug = function (message) {
        var optionalParams = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            optionalParams[_i - 1] = arguments[_i];
        }
        __mconsole.debug.apply(__mconsole, [message].concat(optionalParams));
        this.addLog.apply(this, [LogType.Log, message].concat(optionalParams));
    };
    DebugManager.prototype.dir = function (value) {
        var optionalParams = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            optionalParams[_i - 1] = arguments[_i];
        }
        __mconsole.dir.apply(__mconsole, [value].concat(optionalParams));
        this.addLog.apply(this, [LogType.Log, value + ""].concat(optionalParams));
    };
    DebugManager.prototype.dirxml = function (value) {
        __mconsole.dirxml(value);
        this.addLog(LogType.Log, value + "");
    };
    DebugManager.prototype.error = function (message) {
        var optionalParams = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            optionalParams[_i - 1] = arguments[_i];
        }
        __mconsole.error.apply(__mconsole, [message].concat(optionalParams));
        this.addLog.apply(this, [LogType.Error, message].concat(optionalParams));
    };
    DebugManager.prototype.exception = function (message) {
        var optionalParams = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            optionalParams[_i - 1] = arguments[_i];
        }
        __mconsole.exception.apply(__mconsole, [message].concat(optionalParams));
        this.addLog.apply(this, [LogType.Error, message].concat(optionalParams));
    };
    DebugManager.prototype.group = function (groupTitle) {
        __mconsole.group(groupTitle);
    };
    DebugManager.prototype.groupCollapsed = function (groupTitle) {
        __mconsole.groupCollapsed(groupTitle);
    };
    DebugManager.prototype.groupEnd = function () {
        __mconsole.groupEnd();
    };
    DebugManager.prototype.info = function (message) {
        var optionalParams = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            optionalParams[_i - 1] = arguments[_i];
        }
        __mconsole.info.apply(__mconsole, [message].concat(optionalParams));
        this.addLog.apply(this, [LogType.Log, message].concat(optionalParams));
    };
    DebugManager.prototype.log = function (message) {
        var optionalParams = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            optionalParams[_i - 1] = arguments[_i];
        }
        __mconsole.log.apply(__mconsole, [message].concat(optionalParams));
        this.addLog.apply(this, [LogType.Log, message].concat(optionalParams));
    };
    DebugManager.prototype.msIsIndependentlyComposed = function (element) {
        return __mconsole.msIsIndependentlyComposed(element);
    };
    DebugManager.prototype.profile = function (reportName) {
        __mconsole.profile(reportName);
    };
    DebugManager.prototype.profileEnd = function () {
        __mconsole.profileEnd();
    };
    DebugManager.prototype.select = function (element) {
        __mconsole.select(element);
    };
    DebugManager.prototype.table = function () {
        var data = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            data[_i] = arguments[_i];
        }
        __mconsole.table.apply(__mconsole, data);
    };
    DebugManager.prototype.time = function (timerName) {
        __mconsole.time(timerName);
    };
    DebugManager.prototype.timeEnd = function (timerName) {
        __mconsole.timeEnd(timerName);
    };
    DebugManager.prototype.trace = function (message) {
        var optionalParams = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            optionalParams[_i - 1] = arguments[_i];
        }
        __mconsole.trace.apply(__mconsole, [message].concat(optionalParams));
        this.addLog.apply(this, [LogType.Log, message].concat(optionalParams));
    };
    DebugManager.prototype.warn = function (message) {
        var optionalParams = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            optionalParams[_i - 1] = arguments[_i];
        }
        __mconsole.warn.apply(__mconsole, [message].concat(optionalParams));
        this.addLog.apply(this, [LogType.Warn, message].concat(optionalParams));
    };
    return DebugManager;
}());
var __mconsole = console;
var GameDebug = new DebugManager();
// GameDebug.enable = true;
// console["___mlog"] = console.log;
// console.log = function (message?: any, ...optionalParams: any[])
// {
// 	console["___mlog"](new Date().getTime() + "   " + message, ...optionalParams);
// }
//# sourceMappingURL=Debug.js.map

var Games;
(function (Games) {
    //======================
    // 扩展 fairygui.Window
    //----------------------
    var FWindow = /** @class */ (function (_super) {
        __extends(FWindow, _super);
        function FWindow() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.isAddedStage = false;
            return _this;
        }
        Object.defineProperty(FWindow.prototype, "isShowed", {
            get: function () {
                if (this.contentPane)
                    return this.parent != null;
                return false;
            },
            enumerable: true,
            configurable: true
        });
        FWindow.prototype.onWindowWillShow = function () {
            if (this.contentPane) {
                this.callChildOnWindowWillShow(this.contentPane);
            }
            this.setScreenSize();
            if (this.isAddedStage)
                return;
            this.isAddedStage = true;
            Laya.stage.on(laya.events.Event.RESIZE, this, this.setScreenSize);
        };
        FWindow.prototype.onWindowWillHide = function () {
            if (this.contentPane) {
                this.callChildOnWindowWillHide(this.contentPane);
            }
            this.isAddedStage = false;
            Laya.stage.off(laya.events.Event.RESIZE, this, this.setScreenSize);
        };
        FWindow.prototype.setScreenSize = function () {
            if (this.contentPane) {
                this.contentPane.width = ScreenSetting.screenWidth;
                this.contentPane.height = ScreenSetting.screenHeight;
                this.callChildOnWindowResize(this.contentPane);
                // this.contentPane.displayObject.graphics.drawRect(0, 0, this.contentPane.width, this.contentPane.height, "red");
            }
        };
        //=========================
        // 调用child GComponent的 onWindowWillShow
        //-------------------------
        FWindow.prototype.callChildOnWindowWillShow = function (com) {
            if (com) {
                var fun = com["onWindowWillShow"];
                if (fun) {
                    fun.apply(com);
                }
                if (com._children) {
                    for (var i = 0; i < com._children.length; i++) {
                        this.callChildOnWindowWillShow(com._children[i]);
                    }
                }
            }
        };
        //=========================
        // 调用child GComponent的 onWindowWillHide
        //-------------------------
        FWindow.prototype.callChildOnWindowWillHide = function (com) {
            if (com) {
                var fun = com["onWindowWillHide"];
                if (fun) {
                    fun.apply(com);
                }
                if (com._children) {
                    for (var i = 0; i < com._children.length; i++) {
                        this.callChildOnWindowWillHide(com._children[i]);
                    }
                }
            }
        };
        //=========================
        // 调用child GComponent的 onWindowResize
        //-------------------------
        FWindow.prototype.callChildOnWindowResize = function (com) {
            if (com) {
                var fun = com["onWindowResize"];
                if (fun) {
                    fun.apply(com);
                }
                if (com._children) {
                    for (var i = 0; i < com._children.length; i++) {
                        this.callChildOnWindowResize(com._children[i]);
                    }
                }
            }
        };
        return FWindow;
    }(fairygui.Window));
    Games.FWindow = FWindow;
})(Games || (Games = {}));
//# sourceMappingURL=FWindow.js.map
/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

var fgui;
(function (fgui) {
    var System;
    (function (System) {
        var SystemToastTextStruct = /** @class */ (function (_super) {
            __extends(SystemToastTextStruct, _super);
            function SystemToastTextStruct() {
                return _super.call(this) || this;
            }
            SystemToastTextStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("System", "SystemToastText"));
            };
            SystemToastTextStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_title = (this.getChild("title"));
            };
            SystemToastTextStruct.URL = "ui://fiza9hgr5ol91a";
            SystemToastTextStruct.DependPackages = ["System"];
            return SystemToastTextStruct;
        }(fairygui.GComponent));
        System.SystemToastTextStruct = SystemToastTextStruct;
    })(System = fgui.System || (fgui.System = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=SystemToastTextStruct.js.map
/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

var fgui;
(function (fgui) {
    var System;
    (function (System) {
        var SystemToastText = /** @class */ (function (_super) {
            __extends(SystemToastText, _super);
            function SystemToastText() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return SystemToastText;
        }(System.SystemToastTextStruct));
        System.SystemToastText = SystemToastText;
    })(System = fgui.System || (fgui.System = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=SystemToastText.js.map
/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

var fgui;
(function (fgui) {
    var System;
    (function (System) {
        var ScreenBGStruct = /** @class */ (function (_super) {
            __extends(ScreenBGStruct, _super);
            function ScreenBGStruct() {
                return _super.call(this) || this;
            }
            ScreenBGStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("System", "ScreenBG"));
            };
            ScreenBGStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_icon = (this.getChild("icon"));
            };
            ScreenBGStruct.URL = "ui://fiza9hgraat317";
            ScreenBGStruct.DependPackages = ["System"];
            return ScreenBGStruct;
        }(fairygui.GLabel));
        System.ScreenBGStruct = ScreenBGStruct;
    })(System = fgui.System || (fgui.System = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=ScreenBGStruct.js.map
/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

var fgui;
(function (fgui) {
    var System;
    (function (System) {
        var ScreenBG = /** @class */ (function (_super) {
            __extends(ScreenBG, _super);
            function ScreenBG() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            ScreenBG.prototype.onWindowWillShow = function () {
                this.setScreenSize();
                Laya.stage.on(laya.events.Event.RESIZE, this, this.setScreenSize);
            };
            ScreenBG.prototype.onWindowWillHide = function () {
                Laya.stage.off(laya.events.Event.RESIZE, this, this.setScreenSize);
            };
            ScreenBG.prototype.setScreenSize = function () {
                autoScreenSize(this, Laya.Stage.ALIGN_CENTER, Laya.Stage.ALIGN_MIDDLE);
            };
            return ScreenBG;
        }(System.ScreenBGStruct));
        System.ScreenBG = ScreenBG;
    })(System = fgui.System || (fgui.System = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=ScreenBG.js.map
/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

var fgui;
(function (fgui) {
    var System;
    (function (System) {
        var BarSquareStruct = /** @class */ (function (_super) {
            __extends(BarSquareStruct, _super);
            function BarSquareStruct() {
                return _super.call(this) || this;
            }
            BarSquareStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("System", "BarSquare"));
            };
            BarSquareStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_t1 = this.getTransition("t1");
            };
            BarSquareStruct.URL = "ui://fiza9hgrqmhbeh";
            BarSquareStruct.DependPackages = ["System"];
            return BarSquareStruct;
        }(fairygui.GComponent));
        System.BarSquareStruct = BarSquareStruct;
    })(System = fgui.System || (fgui.System = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=BarSquareStruct.js.map
/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

var fgui;
(function (fgui) {
    var System;
    (function (System) {
        var BarSquare = /** @class */ (function (_super) {
            __extends(BarSquare, _super);
            function BarSquare() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return BarSquare;
        }(System.BarSquareStruct));
        System.BarSquare = BarSquare;
    })(System = fgui.System || (fgui.System = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=BarSquare.js.map
/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

var fgui;
(function (fgui) {
    var System;
    (function (System) {
        var BGModelStruct = /** @class */ (function (_super) {
            __extends(BGModelStruct, _super);
            function BGModelStruct() {
                return _super.call(this) || this;
            }
            BGModelStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("System", "BGModel"));
            };
            BGModelStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_bg = (this.getChild("bg"));
            };
            BGModelStruct.URL = "ui://fiza9hgrg2lpz";
            BGModelStruct.DependPackages = ["System"];
            return BGModelStruct;
        }(fairygui.GComponent));
        System.BGModelStruct = BGModelStruct;
    })(System = fgui.System || (fgui.System = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=BGModelStruct.js.map
/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

var fgui;
(function (fgui) {
    var System;
    (function (System) {
        var BGModel = /** @class */ (function (_super) {
            __extends(BGModel, _super);
            function BGModel() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return BGModel;
        }(System.BGModelStruct));
        System.BGModel = BGModel;
    })(System = fgui.System || (fgui.System = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=BGModel.js.map
/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

var fgui;
(function (fgui) {
    var System;
    (function (System) {
        var CommonDialogUIStruct = /** @class */ (function (_super) {
            __extends(CommonDialogUIStruct, _super);
            function CommonDialogUIStruct() {
                return _super.call(this) || this;
            }
            CommonDialogUIStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("System", "CommonDialogUI"));
            };
            CommonDialogUIStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_closeBtn = (this.getChild("closeBtn"));
            };
            CommonDialogUIStruct.URL = "ui://fiza9hgrgdopn";
            CommonDialogUIStruct.DependPackages = ["System"];
            return CommonDialogUIStruct;
        }(fairygui.GComponent));
        System.CommonDialogUIStruct = CommonDialogUIStruct;
    })(System = fgui.System || (fgui.System = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=CommonDialogUIStruct.js.map
/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

var fgui;
(function (fgui) {
    var System;
    (function (System) {
        var CommonDialogUI = /** @class */ (function (_super) {
            __extends(CommonDialogUI, _super);
            function CommonDialogUI() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return CommonDialogUI;
        }(System.CommonDialogUIStruct));
        System.CommonDialogUI = CommonDialogUI;
    })(System = fgui.System || (fgui.System = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=CommonDialogUI.js.map
/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

var fgui;
(function (fgui) {
    var System;
    (function (System) {
        var GlobalModalWaitingStruct = /** @class */ (function (_super) {
            __extends(GlobalModalWaitingStruct, _super);
            function GlobalModalWaitingStruct() {
                return _super.call(this) || this;
            }
            GlobalModalWaitingStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("System", "GlobalModalWaiting"));
            };
            GlobalModalWaitingStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_circle = (this.getChild("circle"));
                this.m_circleMV = this.getTransition("circleMV");
            };
            GlobalModalWaitingStruct.URL = "ui://fiza9hgr5sash";
            GlobalModalWaitingStruct.DependPackages = ["System"];
            return GlobalModalWaitingStruct;
        }(fairygui.GComponent));
        System.GlobalModalWaitingStruct = GlobalModalWaitingStruct;
    })(System = fgui.System || (fgui.System = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=GlobalModalWaitingStruct.js.map
/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

var fgui;
(function (fgui) {
    var System;
    (function (System) {
        var GlobalModalWaiting = /** @class */ (function (_super) {
            __extends(GlobalModalWaiting, _super);
            function GlobalModalWaiting() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.hideTimeHandler = -1;
                _this.delayShowTimeHandler = -1;
                return _this;
            }
            Object.defineProperty(GlobalModalWaiting, "Instance", {
                get: function () {
                    if (!GlobalModalWaiting._Instance) {
                        GlobalModalWaiting._Instance = GlobalModalWaiting.createInstance();
                        ;
                    }
                    return GlobalModalWaiting._Instance;
                },
                enumerable: true,
                configurable: true
            });
            GlobalModalWaiting.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.setScreenSize();
            };
            GlobalModalWaiting.prototype.onLayoutModelWaitPane = function () {
                this.setScreenSize();
            };
            GlobalModalWaiting.prototype.setScreenSize = function () {
                this.width = ScreenSetting.screenWidth;
                this.height = ScreenSetting.screenHeight;
            };
            GlobalModalWaiting.prototype.setShow = function (time, delay) {
                var _this = this;
                clearTimeout(this.delayShowTimeHandler);
                if (delay && delay > 0) {
                    this.delayShowTimeHandler = setTimeout(function () {
                        _this.doShow(time);
                    }, delay);
                }
                else {
                    this.doShow(time);
                }
            };
            GlobalModalWaiting.prototype.doShow = function (time) {
                var _this = this;
                if (time === undefined)
                    time = 5000;
                this.setScreenSize();
                // console.log("GlobalModalWaiting.doShow time=" + time);
                Games.MenuLayer.root.addChild(this);
                clearTimeout(this.hideTimeHandler);
                if (time && time > 0) {
                    this.hideTimeHandler = setTimeout(function () {
                        _this.setHide();
                    }, time);
                }
            };
            GlobalModalWaiting.prototype.setHide = function () {
                // console.log("GlobalModalWaiting.setHide");
                // if (this.hideTimeHandler > 0)
                // {
                // 	clearTimeout(this.hideTimeHandler);
                // 	this.hideTimeHandler = -1;
                // }
                clearTimeout(this.delayShowTimeHandler);
                this.removeFromParent();
            };
            GlobalModalWaiting.show = function (time, delay) {
                GlobalModalWaiting.Instance.setShow(time, delay);
            };
            GlobalModalWaiting.hide = function () {
                GlobalModalWaiting.Instance.setHide();
            };
            return GlobalModalWaiting;
        }(System.GlobalModalWaitingStruct));
        System.GlobalModalWaiting = GlobalModalWaiting;
    })(System = fgui.System || (fgui.System = {}));
})(fgui || (fgui = {}));
var GlobalModalWaiting = fgui.System.GlobalModalWaiting;
//# sourceMappingURL=GlobalModalWaiting.js.map
/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

var fgui;
(function (fgui) {
    var System;
    (function (System) {
        var LoaderEnterGameStruct = /** @class */ (function (_super) {
            __extends(LoaderEnterGameStruct, _super);
            function LoaderEnterGameStruct() {
                return _super.call(this) || this;
            }
            LoaderEnterGameStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("System", "LoaderEnterGame"));
            };
            LoaderEnterGameStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_title = (this.getChild("title"));
                this.m_help = (this.getChild("help"));
                this.m_txt_resVer = (this.getChild("txt_resVer"));
                this.m_txt_gamever = (this.getChild("txt_gamever"));
                this.m_screenBG = (this.getChild("screenBG"));
                this.m_progressBar = (this.getChild("progressBar"));
            };
            LoaderEnterGameStruct.URL = "ui://fiza9hgr5sas6";
            LoaderEnterGameStruct.DependPackages = ["System"];
            return LoaderEnterGameStruct;
        }(fairygui.GComponent));
        System.LoaderEnterGameStruct = LoaderEnterGameStruct;
    })(System = fgui.System || (fgui.System = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=LoaderEnterGameStruct.js.map
/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

var fgui;
(function (fgui) {
    var System;
    (function (System) {
        var LoaderEnterGame = /** @class */ (function (_super) {
            __extends(LoaderEnterGame, _super);
            function LoaderEnterGame() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return LoaderEnterGame;
        }(System.LoaderEnterGameStruct));
        System.LoaderEnterGame = LoaderEnterGame;
    })(System = fgui.System || (fgui.System = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=LoaderEnterGame.js.map
/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

var fgui;
(function (fgui) {
    var System;
    (function (System) {
        var ProgressRedBarStruct = /** @class */ (function (_super) {
            __extends(ProgressRedBarStruct, _super);
            function ProgressRedBarStruct() {
                return _super.call(this) || this;
            }
            ProgressRedBarStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("System", "ProgressRedBar"));
            };
            ProgressRedBarStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_bar = (this.getChild("bar"));
                this.m_top = (this.getChild("top"));
                this.m_barSquare = (this.getChild("barSquare"));
            };
            ProgressRedBarStruct.URL = "ui://fiza9hgr5sas9";
            ProgressRedBarStruct.DependPackages = ["System"];
            return ProgressRedBarStruct;
        }(fairygui.GProgressBar));
        System.ProgressRedBarStruct = ProgressRedBarStruct;
    })(System = fgui.System || (fgui.System = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=ProgressRedBarStruct.js.map
/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

var fgui;
(function (fgui) {
    var System;
    (function (System) {
        var ProgressRedBar = /** @class */ (function (_super) {
            __extends(ProgressRedBar, _super);
            function ProgressRedBar() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return ProgressRedBar;
        }(System.ProgressRedBarStruct));
        System.ProgressRedBar = ProgressRedBar;
    })(System = fgui.System || (fgui.System = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=ProgressRedBar.js.map
/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

var fgui;
(function (fgui) {
    var System;
    (function (System) {
        var SystemAlertMessageStruct = /** @class */ (function (_super) {
            __extends(SystemAlertMessageStruct, _super);
            function SystemAlertMessageStruct() {
                return _super.call(this) || this;
            }
            SystemAlertMessageStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("System", "SystemAlertMessage"));
            };
            SystemAlertMessageStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_content = (this.getChild("content"));
                this.m_title = (this.getChild("title"));
                this.m_bgCom = (this.getChild("bgCom"));
                this.m_okBtn = (this.getChild("okBtn"));
                this.m_t0 = this.getTransition("t0");
                this.m_t1 = this.getTransition("t1");
            };
            SystemAlertMessageStruct.URL = "ui://fiza9hgrgdopy";
            SystemAlertMessageStruct.DependPackages = ["System"];
            return SystemAlertMessageStruct;
        }(fairygui.GComponent));
        System.SystemAlertMessageStruct = SystemAlertMessageStruct;
    })(System = fgui.System || (fgui.System = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=SystemAlertMessageStruct.js.map
/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

var fgui;
(function (fgui) {
    var System;
    (function (System) {
        var SystemAlertMessage = /** @class */ (function (_super) {
            __extends(SystemAlertMessage, _super);
            function SystemAlertMessage() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            /**
             * 对话框消息,一个按钮
             * @param txt 消息内容
             * @param title 标题
             * @param yesObj 点击yes按钮回调对象
             * @param yesFun 点击yes按钮回调函数
             * @param yesTxt yes按钮 文本
             * @param closeButtonVisiable 是否显示关闭按钮
             * @param buttonEnable 按钮是否可以点击
             * @param isClickButtonAutoClose 点击按钮后是否自动关闭
             */
            SystemAlertMessage.prototype.open = function (txt, title, yesObj, yesFun, yesTxt, closeButtonVisiable, buttonEnable, isClickButtonAutoClose) {
                if (title === void 0) { title = ""; }
                if (yesObj === void 0) { yesObj = null; }
                if (yesFun === void 0) { yesFun = null; }
                if (yesTxt === void 0) { yesTxt = null; }
                if (closeButtonVisiable === void 0) { closeButtonVisiable = true; }
                if (buttonEnable === void 0) { buttonEnable = true; }
                if (isClickButtonAutoClose === void 0) { isClickButtonAutoClose = true; }
                if (isNullOrEmpty(title)) {
                    title = "";
                }
                this.yesFun = yesFun;
                this.yesObj = yesObj;
                this.isClickButtonAutoClose = isClickButtonAutoClose;
                this.m_content.text = txt;
                this.m_title.text = title;
                this.m_okBtn.m_title.text = yesTxt;
                this.m_okBtn.enabled = buttonEnable;
                this.m_bgCom.m_closeBtn.enabled = buttonEnable;
                this.m_bgCom.m_closeBtn.visible = closeButtonVisiable;
                this.m_okBtn.onClick(this, this.onClickYes);
                this.m_bgCom.m_closeBtn.onClick(this, this.onClickYes);
                Games.MenuLayer.showDialogModel();
                Games.MenuLayer.floatMsg.addChild(this);
                centerScreen(this);
                this.m_t0.play();
            };
            SystemAlertMessage.prototype.close = function () {
                Games.MenuLayer.hideDialogModel();
                this.m_t1.play(Handler.create(this, this.onHide));
            };
            SystemAlertMessage.prototype.onHide = function () {
                this.removeFromParent();
            };
            SystemAlertMessage.prototype.onClickYes = function () {
                if (this.isClickButtonAutoClose) {
                    this.close();
                }
                if (this.yesFun) {
                    if (this.yesObj) {
                        this.yesFun.apply(this.yesObj);
                    }
                    else {
                        this.yesFun();
                    }
                }
            };
            return SystemAlertMessage;
        }(System.SystemAlertMessageStruct));
        System.SystemAlertMessage = SystemAlertMessage;
    })(System = fgui.System || (fgui.System = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=SystemAlertMessage.js.map
/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

var fgui;
(function (fgui) {
    var System;
    (function (System) {
        var SystemConfirmMessageStruct = /** @class */ (function (_super) {
            __extends(SystemConfirmMessageStruct, _super);
            function SystemConfirmMessageStruct() {
                return _super.call(this) || this;
            }
            SystemConfirmMessageStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("System", "SystemConfirmMessage"));
            };
            SystemConfirmMessageStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_content = (this.getChild("content"));
                this.m_title = (this.getChild("title"));
                this.m_bgCom = (this.getChild("bgCom"));
                this.m_okBtn = (this.getChild("okBtn"));
                this.m_cancleBtn = (this.getChild("cancleBtn"));
                this.m_t0 = this.getTransition("t0");
                this.m_t1 = this.getTransition("t1");
            };
            SystemConfirmMessageStruct.URL = "ui://fiza9hgrgdopm";
            SystemConfirmMessageStruct.DependPackages = ["System"];
            return SystemConfirmMessageStruct;
        }(fairygui.GComponent));
        System.SystemConfirmMessageStruct = SystemConfirmMessageStruct;
    })(System = fgui.System || (fgui.System = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=SystemConfirmMessageStruct.js.map
/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

var fgui;
(function (fgui) {
    var System;
    (function (System) {
        var SystemConfirmMessage = /** @class */ (function (_super) {
            __extends(SystemConfirmMessage, _super);
            function SystemConfirmMessage() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            /**
             * 对话框消息,一个按钮
             * @param txt 消息内容
             * @param title 标题
             * @param caller 点击按钮回调对象
             * @param yesFun 点击yes按钮回调函数
             * @param yesObj 点击yes按钮回调对象
             * @param noFun 点击no按钮回调函数
             * @param noFun 点击no按钮回调对象
             * @param yesTxt yes按钮 文本
             * @param noTxt no按钮 文本
             * @param closeButtonVisiable 是否显示关闭按钮
             * @param isClickButtonAutoClose 点击按钮后是否自动关闭
             */
            SystemConfirmMessage.prototype.open = function (txt, title, caller, yesFun, noFun, yesTxt, noTxt, closeButtonVisiable, isClickButtonAutoClose) {
                if (title === void 0) { title = ""; }
                if (caller === void 0) { caller = null; }
                if (yesFun === void 0) { yesFun = null; }
                if (noFun === void 0) { noFun = null; }
                if (yesTxt === void 0) { yesTxt = null; }
                if (noTxt === void 0) { noTxt = null; }
                if (closeButtonVisiable === void 0) { closeButtonVisiable = true; }
                if (isClickButtonAutoClose === void 0) { isClickButtonAutoClose = true; }
                if (isNullOrEmpty(title)) {
                    title = "";
                }
                this.caller = caller;
                this.yesFun = yesFun;
                this.noFun = noFun;
                this.isClickButtonAutoClose = isClickButtonAutoClose;
                this.m_content.text = txt;
                this.m_title.text = title;
                this.m_okBtn.m_title.text = yesTxt;
                this.m_cancleBtn.m_title.text = noTxt;
                this.m_bgCom.m_closeBtn.visible = closeButtonVisiable;
                this.m_okBtn.onClick(this, this.onClickYes);
                this.m_cancleBtn.onClick(this, this.onClickNo);
                this.m_bgCom.m_closeBtn.onClick(this, this.onClickClose);
                Games.MenuLayer.showDialogModel();
                Games.MenuLayer.floatMsg.addChild(this);
                centerScreen(this);
                this.m_t1.stop();
                this.m_t0.play();
            };
            SystemConfirmMessage.prototype.close = function () {
                Games.MenuLayer.hideDialogModel();
                this.m_t1.play(Handler.create(this, this.onHide));
            };
            SystemConfirmMessage.prototype.onHide = function () {
                this.removeFromParent();
            };
            SystemConfirmMessage.prototype.onClickYes = function () {
                if (this.isClickButtonAutoClose) {
                    this.close();
                }
                if (this.yesFun) {
                    if (this.caller) {
                        this.yesFun.apply(this.caller);
                    }
                    else {
                        this.yesFun();
                    }
                }
            };
            SystemConfirmMessage.prototype.onClickNo = function () {
                if (this.isClickButtonAutoClose) {
                    this.close();
                }
                if (this.noFun) {
                    if (this.caller) {
                        this.noFun.apply(this.caller);
                    }
                    else {
                        this.noFun();
                    }
                }
            };
            SystemConfirmMessage.prototype.onClickClose = function () {
                this.close();
            };
            return SystemConfirmMessage;
        }(System.SystemConfirmMessageStruct));
        System.SystemConfirmMessage = SystemConfirmMessage;
    })(System = fgui.System || (fgui.System = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=SystemConfirmMessage.js.map
/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

var fgui;
(function (fgui) {
    var System;
    (function (System) {
        var SystemToastMessageStruct = /** @class */ (function (_super) {
            __extends(SystemToastMessageStruct, _super);
            function SystemToastMessageStruct() {
                return _super.call(this) || this;
            }
            SystemToastMessageStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("System", "SystemToastMessage"));
            };
            SystemToastMessageStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_title = (this.getChild("title"));
                this.m_t0 = this.getTransition("t0");
            };
            SystemToastMessageStruct.URL = "ui://fiza9hgrgdopk";
            SystemToastMessageStruct.DependPackages = ["System"];
            return SystemToastMessageStruct;
        }(fairygui.GLabel));
        System.SystemToastMessageStruct = SystemToastMessageStruct;
    })(System = fgui.System || (fgui.System = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=SystemToastMessageStruct.js.map
/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

var fgui;
(function (fgui) {
    var System;
    (function (System) {
        var SystemToastMessage = /** @class */ (function (_super) {
            __extends(SystemToastMessage, _super);
            function SystemToastMessage() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            SystemToastMessage.prototype.play = function (txt, onComplete) {
                if (this._onCompleteHandler) {
                    this._onCompleteHandler.recover();
                }
                this._onCompleteHandler = onComplete;
                this.m_title.m_title.text = txt;
                Games.MenuLayer.floatMsg.addChild(this);
                centerScreen(this);
                this.m_t0.play(Handler.create(this, this.onComplete));
            };
            SystemToastMessage.prototype.onComplete = function () {
                this.removeFromParent();
                if (this._onCompleteHandler) {
                    this._onCompleteHandler.runWith(this);
                    this._onCompleteHandler.recover();
                    this._onCompleteHandler = null;
                }
            };
            return SystemToastMessage;
        }(System.SystemToastMessageStruct));
        System.SystemToastMessage = SystemToastMessage;
    })(System = fgui.System || (fgui.System = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=SystemToastMessage.js.map
/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

var fgui;
(function (fgui) {
    var System;
    (function (System) {
        var WindowModalWaitingStruct = /** @class */ (function (_super) {
            __extends(WindowModalWaitingStruct, _super);
            function WindowModalWaitingStruct() {
                return _super.call(this) || this;
            }
            WindowModalWaitingStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("System", "WindowModalWaiting"));
            };
            WindowModalWaitingStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
            };
            WindowModalWaitingStruct.URL = "ui://fiza9hgr5sasc";
            WindowModalWaitingStruct.DependPackages = ["System"];
            return WindowModalWaitingStruct;
        }(fairygui.GComponent));
        System.WindowModalWaitingStruct = WindowModalWaitingStruct;
    })(System = fgui.System || (fgui.System = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=WindowModalWaitingStruct.js.map
/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

var fgui;
(function (fgui) {
    var System;
    (function (System) {
        var WindowModalWaiting = /** @class */ (function (_super) {
            __extends(WindowModalWaiting, _super);
            function WindowModalWaiting() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            WindowModalWaiting.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.setScreenSize();
            };
            WindowModalWaiting.prototype.setScreenSize = function () {
                this.width = ScreenSetting.screenWidth;
                this.height = ScreenSetting.screenHeight;
            };
            WindowModalWaiting.prototype.onLayoutModelWaitPane = function () {
                this.setScreenSize();
            };
            return WindowModalWaiting;
        }(System.WindowModalWaitingStruct));
        System.WindowModalWaiting = WindowModalWaiting;
    })(System = fgui.System || (fgui.System = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=WindowModalWaiting.js.map
/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

var fgui;
(function (fgui) {
    var System;
    (function (System) {
        var CloseBtnStruct = /** @class */ (function (_super) {
            __extends(CloseBtnStruct, _super);
            function CloseBtnStruct() {
                return _super.call(this) || this;
            }
            CloseBtnStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("System", "closeBtn"));
            };
            CloseBtnStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_button = this.getController("button");
                this.m_closeBtn = (this.getChild("closeBtn"));
            };
            CloseBtnStruct.URL = "ui://fiza9hgrupbl1g";
            CloseBtnStruct.DependPackages = ["System"];
            return CloseBtnStruct;
        }(fairygui.GButton));
        System.CloseBtnStruct = CloseBtnStruct;
    })(System = fgui.System || (fgui.System = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=CloseBtnStruct.js.map
/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

var fgui;
(function (fgui) {
    var System;
    (function (System) {
        var CloseBtn = /** @class */ (function (_super) {
            __extends(CloseBtn, _super);
            function CloseBtn() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return CloseBtn;
        }(System.CloseBtnStruct));
        System.CloseBtn = CloseBtn;
    })(System = fgui.System || (fgui.System = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=CloseBtn.js.map
/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

var fgui;
(function (fgui) {
    var System;
    (function (System) {
        var LabItem_bigStruct = /** @class */ (function (_super) {
            __extends(LabItem_bigStruct, _super);
            function LabItem_bigStruct() {
                return _super.call(this) || this;
            }
            LabItem_bigStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("System", "LabItem_big"));
            };
            LabItem_bigStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_trColor = this.getController("trColor");
                this.m_icon = (this.getChild("icon"));
                this.m_title = (this.getChild("title"));
            };
            LabItem_bigStruct.URL = "ui://fiza9hgrnyfh13";
            LabItem_bigStruct.DependPackages = ["System", "Common"];
            return LabItem_bigStruct;
        }(fairygui.GLabel));
        System.LabItem_bigStruct = LabItem_bigStruct;
    })(System = fgui.System || (fgui.System = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=LabItem_bigStruct.js.map
/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

var fgui;
(function (fgui) {
    var System;
    (function (System) {
        var LabItem_big = /** @class */ (function (_super) {
            __extends(LabItem_big, _super);
            function LabItem_big() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return LabItem_big;
        }(System.LabItem_bigStruct));
        System.LabItem_big = LabItem_big;
    })(System = fgui.System || (fgui.System = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=LabItem_big.js.map
/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

var fgui;
(function (fgui) {
    var System;
    (function (System) {
        var SystemAddItemMessageStruct = /** @class */ (function (_super) {
            __extends(SystemAddItemMessageStruct, _super);
            function SystemAddItemMessageStruct() {
                return _super.call(this) || this;
            }
            SystemAddItemMessageStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("System", "SystemAddItemMessage"));
            };
            SystemAddItemMessageStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_title = (this.getChild("title"));
                this.m_listItem = (this.getChild("listItem"));
                this.m_tips = (this.getChild("tips"));
                this.m_closeBtn = (this.getChild("closeBtn"));
                this.m_bgCom = (this.getChild("bgCom"));
                this.m_t0 = this.getTransition("t0");
                this.m_t1 = this.getTransition("t1");
                this.m_t2 = this.getTransition("t2");
            };
            SystemAddItemMessageStruct.URL = "ui://fiza9hgrnyfh11";
            SystemAddItemMessageStruct.DependPackages = ["System", "Common"];
            return SystemAddItemMessageStruct;
        }(fairygui.GComponent));
        System.SystemAddItemMessageStruct = SystemAddItemMessageStruct;
    })(System = fgui.System || (fgui.System = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=SystemAddItemMessageStruct.js.map
/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

var fgui;
(function (fgui) {
    var System;
    (function (System) {
        var SystemAddItemMessage = /** @class */ (function (_super) {
            __extends(SystemAddItemMessage, _super);
            function SystemAddItemMessage() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            /**
             * 获得物品消息,一个按钮
             * @param itemList 物品列表 :DTItemNum[];
             * @param title 标题
             * @param closeButtonVisiable 是否显示关闭按钮
             * @param buttonEnable 按钮是否可以点击
             * @param isClickButtonAutoClose 点击按钮后是否自动关闭
             */
            SystemAddItemMessage.prototype.open = function (itemList, title, autoCloseTime, closeButtonVisiable, buttonEnable, isClickButtonAutoClose) {
                var _this = this;
                if (title === void 0) { title = ""; }
                if (autoCloseTime === void 0) { autoCloseTime = 3; }
                if (closeButtonVisiable === void 0) { closeButtonVisiable = true; }
                if (buttonEnable === void 0) { buttonEnable = true; }
                if (isClickButtonAutoClose === void 0) { isClickButtonAutoClose = true; }
                // this.items = itemList.sort((a, b) => { return a.itemId - b.itemId });
                this.items = itemList;
                if (isNullOrEmpty(title)) {
                    title = "";
                }
                this.isClickButtonAutoClose = isClickButtonAutoClose;
                this.m_listItem.itemRenderer = new Handler(this, this.RenderItem, null, false);
                this.m_listItem.numItems = this.items.length;
                this.m_title.text = title;
                this.m_bgCom.m_closeBtn.enabled = buttonEnable;
                this.m_bgCom.m_closeBtn.visible = closeButtonVisiable;
                this.m_bgCom.m_closeBtn.onClick(this, this.close);
                this.m_closeBtn.enabled = buttonEnable;
                this.m_closeBtn.visible = closeButtonVisiable;
                this.m_closeBtn.onClick(this, this.close);
                this.m_tips.text = Games.TEXT.ClickAnyWhereToClose;
                Games.MenuLayer.showDialogModel();
                Games.MenuLayer.dialog.addChild(this);
                centerScreen(this);
                this.m_t0.play();
                this.timeoutHandle = null;
                if (autoCloseTime > 0) {
                    this.timeoutHandle = setTimeout(function () { _this.close(); }, autoCloseTime * 1000);
                }
            };
            SystemAddItemMessage.prototype.RenderItem = function (index, obj) {
                var data = this.items[index];
                obj.title = data.itemNumTxt;
                obj.icon = data.itemIconUrl;
                obj.m_star.starNum = data.itemStar;
            };
            SystemAddItemMessage.prototype.close = function () {
                if (this.timeoutHandle) {
                    clearTimeout(this.timeoutHandle);
                }
                this.timeoutHandle = null;
                Games.MenuLayer.hideDialogModel();
                this.m_t1.play(Handler.create(this, this.onHide));
            };
            SystemAddItemMessage.prototype.onHide = function () {
                this.removeFromParent();
            };
            return SystemAddItemMessage;
        }(System.SystemAddItemMessageStruct));
        System.SystemAddItemMessage = SystemAddItemMessage;
    })(System = fgui.System || (fgui.System = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=SystemAddItemMessage.js.map
/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

var fgui;
(function (fgui) {
    var System;
    (function (System) {
        var GMLanuchButtonStruct = /** @class */ (function (_super) {
            __extends(GMLanuchButtonStruct, _super);
            function GMLanuchButtonStruct() {
                return _super.call(this) || this;
            }
            GMLanuchButtonStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("System", "GMLanuchButton"));
            };
            GMLanuchButtonStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_button = this.getController("button");
            };
            GMLanuchButtonStruct.URL = "ui://fiza9hgrj5ra14";
            GMLanuchButtonStruct.DependPackages = ["System"];
            return GMLanuchButtonStruct;
        }(fairygui.GButton));
        System.GMLanuchButtonStruct = GMLanuchButtonStruct;
    })(System = fgui.System || (fgui.System = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=GMLanuchButtonStruct.js.map
/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

var fgui;
(function (fgui) {
    var System;
    (function (System) {
        var GMLanuchButtonClickArea;
        (function (GMLanuchButtonClickArea) {
            GMLanuchButtonClickArea[GMLanuchButtonClickArea["None"] = 0] = "None";
            GMLanuchButtonClickArea[GMLanuchButtonClickArea["Left_Top"] = 1] = "Left_Top";
            GMLanuchButtonClickArea[GMLanuchButtonClickArea["Left_Bottom"] = 2] = "Left_Bottom";
            GMLanuchButtonClickArea[GMLanuchButtonClickArea["Right_Buttom"] = 3] = "Right_Buttom";
            GMLanuchButtonClickArea[GMLanuchButtonClickArea["Right_Top"] = 4] = "Right_Top";
        })(GMLanuchButtonClickArea = System.GMLanuchButtonClickArea || (System.GMLanuchButtonClickArea = {}));
        var GMLanuchButton = /** @class */ (function (_super) {
            __extends(GMLanuchButton, _super);
            function GMLanuchButton() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.isDraging = false;
                _this.__clickStageIndex = -1;
                _this.__clickPreArea = GMLanuchButtonClickArea.None;
                return _this;
            }
            GMLanuchButton.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.onClick(this, this.onClickButton);
                this.on(fairygui.Events.DRAG_MOVE, this, this.onDragMove);
                this.on(fairygui.Events.DRAG_END, this, this.onDragEnd);
                if (window["Game"]) {
                    this.x = Game.localStorage.gmX;
                    this.y = Game.localStorage.gmY;
                }
                // Laya.stage.on(laya.events.Event.CLICK, this, this.onClickStage);
            };
            GMLanuchButton.prototype.onClickStage = function (event) {
                if (event && event["stageX"]) {
                    if (this.visible)
                        return;
                    var x = event.stageX;
                    var y = event.stageY;
                    var px = Math.floor(x / Laya.stage.width * 100);
                    var py = Math.floor(y / Laya.stage.height * 100);
                    var area = GMLanuchButtonClickArea.None;
                    if (px < 10 && py < 10) {
                        area = GMLanuchButtonClickArea.Left_Top;
                        if (this.__clickPreArea == GMLanuchButtonClickArea.None) {
                            this.__clickStageIndex = 1;
                        }
                        else if (this.__clickPreArea == GMLanuchButtonClickArea.Right_Top) {
                            this.__clickStageIndex++;
                        }
                        else {
                            this.__clickStageIndex = 0;
                        }
                    }
                    else if (px < 10 && py > 90) {
                        area = GMLanuchButtonClickArea.Left_Bottom;
                        if (this.__clickPreArea == GMLanuchButtonClickArea.Left_Top) {
                            this.__clickStageIndex++;
                        }
                        else {
                            this.__clickStageIndex = 0;
                        }
                    }
                    else if (px > 90 && py > 90) {
                        area = GMLanuchButtonClickArea.Right_Buttom;
                        if (this.__clickPreArea == GMLanuchButtonClickArea.Left_Bottom) {
                            this.__clickStageIndex++;
                        }
                        else {
                            this.__clickStageIndex = 0;
                        }
                    }
                    else if (px > 90 && py < 10) {
                        area = GMLanuchButtonClickArea.Right_Top;
                        if (this.__clickPreArea == GMLanuchButtonClickArea.Right_Buttom) {
                            this.__clickStageIndex++;
                        }
                        else {
                            this.__clickStageIndex = 0;
                        }
                    }
                    this.__clickPreArea = area;
                    if (area == GMLanuchButtonClickArea.None) {
                        this.__clickStageIndex = 0;
                    }
                    if (this.__clickStageIndex >= 20) {
                        this.visible = true;
                    }
                    // console.log("GMLaunchButton onClickStage event.stageX=" + event.stageX + " stageY=" + event.stageY + "  " + px + "%,  " + py + "%" + "  area=" + area + " this.__clickStageIndex=" + this.__clickStageIndex);
                }
            };
            GMLanuchButton.prototype.onDragMove = function () {
                this.isDraging = true;
            };
            GMLanuchButton.prototype.onDragEnd = function () {
                var _this = this;
                setTimeout(function () {
                    _this.isDraging = false;
                }, 100);
                Game.localStorage.gmX = this.x;
                Game.localStorage.gmY = this.y;
            };
            GMLanuchButton.prototype.onClickButton = function () {
                if (!this.isDraging) {
                    Games.GM.visiable = !Games.GM.visiable;
                }
            };
            return GMLanuchButton;
        }(System.GMLanuchButtonStruct));
        System.GMLanuchButton = GMLanuchButton;
    })(System = fgui.System || (fgui.System = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=GMLanuchButton.js.map
/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

var fgui;
(function (fgui) {
    var System;
    (function (System) {
        var StateItemStruct = /** @class */ (function (_super) {
            __extends(StateItemStruct, _super);
            function StateItemStruct() {
                return _super.call(this) || this;
            }
            StateItemStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("System", "StateItem"));
            };
            StateItemStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_key = (this.getChild("key"));
                this.m_value = (this.getChild("value"));
            };
            StateItemStruct.URL = "ui://fiza9hgrqr3y19";
            StateItemStruct.DependPackages = ["System"];
            return StateItemStruct;
        }(fairygui.GComponent));
        System.StateItemStruct = StateItemStruct;
    })(System = fgui.System || (fgui.System = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=StateItemStruct.js.map
/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

var fgui;
(function (fgui) {
    var System;
    (function (System) {
        var StateItem = /** @class */ (function (_super) {
            __extends(StateItem, _super);
            function StateItem() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.unitM = 1024 * 1024;
                return _this;
            }
            Object.defineProperty(StateItem.prototype, "key", {
                get: function () {
                    return this._key;
                },
                set: function (value) {
                    this._key = value;
                    this.m_key.text = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(StateItem.prototype, "val", {
                set: function (value) {
                    this.m_value.text = value;
                },
                enumerable: true,
                configurable: true
            });
            StateItem.prototype.setVal = function (val) {
                if (isNumber(val)) {
                    if (this.key == "currentMemorySize") {
                        if (val > this.unitM) {
                            this.val = Math.floor(val / this.unitM * 100) / 100 + " M";
                        }
                        else {
                            this.val = Math.floor(val / 1024 * 100) / 100 + " K";
                        }
                    }
                    else {
                        this.val = val.toString();
                    }
                }
                else if (isString(val)) {
                    this.val = val;
                }
                else {
                    this.val = val.toString();
                }
            };
            return StateItem;
        }(System.StateItemStruct));
        System.StateItem = StateItem;
    })(System = fgui.System || (fgui.System = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=StateItem.js.map
/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

var fgui;
(function (fgui) {
    var System;
    (function (System) {
        var StateViewStruct = /** @class */ (function (_super) {
            __extends(StateViewStruct, _super);
            function StateViewStruct() {
                return _super.call(this) || this;
            }
            StateViewStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("System", "StateView"));
            };
            StateViewStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_bg = (this.getChild("bg"));
            };
            StateViewStruct.URL = "ui://fiza9hgrqr3y18";
            StateViewStruct.DependPackages = ["System"];
            return StateViewStruct;
        }(fairygui.GComponent));
        System.StateViewStruct = StateViewStruct;
    })(System = fgui.System || (fgui.System = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=StateViewStruct.js.map
/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

var fgui;
(function (fgui) {
    var System;
    (function (System) {
        var StateView = /** @class */ (function (_super) {
            __extends(StateView, _super);
            function StateView() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.list = [];
                _this.list2 = [];
                return _this;
            }
            StateView.show = function () {
                if (StateView._install == null) {
                    StateView._install = StateView.createInstance();
                }
                if (!StateView._install.parent) {
                    Games.MenuLayer.floatMsg.addChild(StateView._install);
                    StateView._install.onShow();
                }
            };
            StateView.hide = function () {
                if (StateView._install) {
                    if (StateView._install.parent) {
                        StateView._install.removeFromParent();
                        StateView._install.onHide();
                    }
                }
            };
            StateView.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                var item = System.StateItem.createInstance();
                item = System.StateItem.createInstance();
                item.key = "isWebGL";
                item.setVal(Laya.Render.isWebGL);
                this.list2.push(item);
                item = System.StateItem.createInstance();
                item.key = "isConchWebGL";
                item.setVal(Laya.Render.isConchWebGL);
                this.list2.push(item);
                item = System.StateItem.createInstance();
                item.key = "is3DMode";
                item.setVal(Laya.Render.is3DMode);
                this.list2.push(item);
                item = System.StateItem.createInstance();
                item.key = "isConchApp";
                item.setVal(Laya.Render.isConchApp);
                this.list2.push(item);
                item = System.StateItem.createInstance();
                item.key = "isConchNode";
                item.setVal(Laya.Render.isConchNode);
                this.list2.push(item);
                item = System.StateItem.createInstance();
                item.key = "Render.context";
                item.setVal(getClassName(Laya.Render.context));
                this.list2.push(item);
                item = System.StateItem.createInstance();
                item.key = "FPS";
                this.list.push(item);
                this.FPS = item;
                item = System.StateItem.createInstance();
                item.key = "canvasNormal";
                this.list.push(item);
                this.canvasNormal = item;
                item = System.StateItem.createInstance();
                item.key = "canvasBitmap";
                this.list.push(item);
                this.canvasBitmap = item;
                item = System.StateItem.createInstance();
                item.key = "canvasReCache";
                this.list.push(item);
                this.canvasReCache = item;
                item = System.StateItem.createInstance();
                item.key = "currentMemorySize";
                this.list.push(item);
                this.currentMemorySize = item;
                item = System.StateItem.createInstance();
                item.key = "shaderCall";
                this.list.push(item);
                this.shaderCall = item;
                item = System.StateItem.createInstance();
                item.key = "drawCall";
                this.list.push(item);
                this.drawCall = item;
                item = System.StateItem.createInstance();
                item.key = "trianglesFaces";
                this.list.push(item);
                this.trianglesFaces = item;
                item = System.StateItem.createInstance();
                item.key = "spriteCount";
                this.list.push(item);
                this.spriteCount = item;
                item = System.StateItem.createInstance();
                item.key = "spriteRenderUseCacheCount";
                this.list.push(item);
                this.spriteRenderUseCacheCount = item;
                item = System.StateItem.createInstance();
                item.key = "treeNodeCollision";
                this.list.push(item);
                this.treeNodeCollision = item;
                item = System.StateItem.createInstance();
                item.key = "treeSpriteCollision";
                this.list.push(item);
                this.treeSpriteCollision = item;
                item = System.StateItem.createInstance();
                item.key = "renderSlow";
                this.list.push(item);
                this.renderSlow = item;
                for (var i = 0; i < this.list2.length; i++) {
                    this.list2[i].y = i * 40;
                    this.addChild(this.list2[i]);
                }
                for (var i = 0; i < this.list.length; i++) {
                    this.list[i].y = (i + this.list2.length) * 40;
                    this.addChild(this.list[i]);
                }
                this.height = (this.list.length + this.list2.length) * 40;
                this.draggable = true;
                this.dragBounds = new laya.maths.Rectangle(-50, -50, Laya.stage.width + 100, Laya.stage.height + 100);
            };
            StateView.prototype.onShow = function () {
                Laya.timer.frameLoop(60, this, this.loop);
            };
            StateView.prototype.onHide = function () {
                Laya.timer.clear(this, this.loop);
            };
            StateView.prototype.loop = function () {
                var state = laya.utils.Stat;
                for (var i = 0; i < this.list.length; i++) {
                    var item = this.list[i];
                    item.setVal(state[item.key]);
                }
            };
            return StateView;
        }(System.StateViewStruct));
        System.StateView = StateView;
    })(System = fgui.System || (fgui.System = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=StateView.js.map
/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

var fgui;
(function (fgui) {
    var System;
    (function (System) {
        var ButtonPurpleBigStruct = /** @class */ (function (_super) {
            __extends(ButtonPurpleBigStruct, _super);
            function ButtonPurpleBigStruct() {
                return _super.call(this) || this;
            }
            ButtonPurpleBigStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("System", "ButtonPurpleBig"));
            };
            ButtonPurpleBigStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_button = this.getController("button");
                this.m_title = (this.getChild("title"));
            };
            ButtonPurpleBigStruct.URL = "ui://fiza9hgrupbl1d";
            ButtonPurpleBigStruct.DependPackages = ["System"];
            return ButtonPurpleBigStruct;
        }(fairygui.GButton));
        System.ButtonPurpleBigStruct = ButtonPurpleBigStruct;
    })(System = fgui.System || (fgui.System = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=ButtonPurpleBigStruct.js.map
/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

var fgui;
(function (fgui) {
    var System;
    (function (System) {
        var ButtonPurpleBig = /** @class */ (function (_super) {
            __extends(ButtonPurpleBig, _super);
            function ButtonPurpleBig() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return ButtonPurpleBig;
        }(System.ButtonPurpleBigStruct));
        System.ButtonPurpleBig = ButtonPurpleBig;
    })(System = fgui.System || (fgui.System = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=ButtonPurpleBig.js.map
/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

var fgui;
(function (fgui) {
    var System;
    (function (System) {
        var ButtonYellowBigStruct = /** @class */ (function (_super) {
            __extends(ButtonYellowBigStruct, _super);
            function ButtonYellowBigStruct() {
                return _super.call(this) || this;
            }
            ButtonYellowBigStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("System", "ButtonYellowBig"));
            };
            ButtonYellowBigStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_button = this.getController("button");
                this.m_title = (this.getChild("title"));
            };
            ButtonYellowBigStruct.URL = "ui://fiza9hgrupbl1c";
            ButtonYellowBigStruct.DependPackages = ["System"];
            return ButtonYellowBigStruct;
        }(fairygui.GButton));
        System.ButtonYellowBigStruct = ButtonYellowBigStruct;
    })(System = fgui.System || (fgui.System = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=ButtonYellowBigStruct.js.map
/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

var fgui;
(function (fgui) {
    var System;
    (function (System) {
        var ButtonYellowBig = /** @class */ (function (_super) {
            __extends(ButtonYellowBig, _super);
            function ButtonYellowBig() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return ButtonYellowBig;
        }(System.ButtonYellowBigStruct));
        System.ButtonYellowBig = ButtonYellowBig;
    })(System = fgui.System || (fgui.System = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=ButtonYellowBig.js.map
/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

var fgui;
(function (fgui) {
    var System;
    (function (System) {
        var PopUp406Struct = /** @class */ (function (_super) {
            __extends(PopUp406Struct, _super);
            function PopUp406Struct() {
                return _super.call(this) || this;
            }
            PopUp406Struct.createInstance = function () {
                return (fairygui.UIPackage.createObject("System", "PopUp406"));
            };
            PopUp406Struct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
            };
            PopUp406Struct.URL = "ui://fiza9hgrupbl1k";
            PopUp406Struct.DependPackages = ["System"];
            return PopUp406Struct;
        }(fairygui.GComponent));
        System.PopUp406Struct = PopUp406Struct;
    })(System = fgui.System || (fgui.System = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=PopUp406Struct.js.map
/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

var fgui;
(function (fgui) {
    var System;
    (function (System) {
        var PopUp406 = /** @class */ (function (_super) {
            __extends(PopUp406, _super);
            function PopUp406() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return PopUp406;
        }(System.PopUp406Struct));
        System.PopUp406 = PopUp406;
    })(System = fgui.System || (fgui.System = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=PopUp406.js.map
/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////
var fgui;
(function (fgui) {
    var System;
    (function (System) {
        var SystemBinder = /** @class */ (function () {
            function SystemBinder() {
            }
            SystemBinder.bindAll = function () {
                fairygui.UIObjectFactory.setPackageItemExtension(System.LoaderEnterGame.URL, System.LoaderEnterGame);
                fairygui.UIObjectFactory.setPackageItemExtension(System.ProgressRedBar.URL, System.ProgressRedBar);
                fairygui.UIObjectFactory.setPackageItemExtension(System.WindowModalWaiting.URL, System.WindowModalWaiting);
                fairygui.UIObjectFactory.setPackageItemExtension(System.GlobalModalWaiting.URL, System.GlobalModalWaiting);
                fairygui.UIObjectFactory.setPackageItemExtension(System.SystemToastMessage.URL, System.SystemToastMessage);
                fairygui.UIObjectFactory.setPackageItemExtension(System.SystemConfirmMessage.URL, System.SystemConfirmMessage);
                fairygui.UIObjectFactory.setPackageItemExtension(System.CommonDialogUI.URL, System.CommonDialogUI);
                fairygui.UIObjectFactory.setPackageItemExtension(System.SystemAlertMessage.URL, System.SystemAlertMessage);
                fairygui.UIObjectFactory.setPackageItemExtension(System.BGModel.URL, System.BGModel);
                fairygui.UIObjectFactory.setPackageItemExtension(System.SystemAddItemMessage.URL, System.SystemAddItemMessage);
                fairygui.UIObjectFactory.setPackageItemExtension(System.LabItem_big.URL, System.LabItem_big);
                fairygui.UIObjectFactory.setPackageItemExtension(System.GMLanuchButton.URL, System.GMLanuchButton);
                fairygui.UIObjectFactory.setPackageItemExtension(System.ScreenBG.URL, System.ScreenBG);
                fairygui.UIObjectFactory.setPackageItemExtension(System.StateView.URL, System.StateView);
                fairygui.UIObjectFactory.setPackageItemExtension(System.StateItem.URL, System.StateItem);
                fairygui.UIObjectFactory.setPackageItemExtension(System.SystemToastText.URL, System.SystemToastText);
                fairygui.UIObjectFactory.setPackageItemExtension(System.ButtonYellowBig.URL, System.ButtonYellowBig);
                fairygui.UIObjectFactory.setPackageItemExtension(System.ButtonPurpleBig.URL, System.ButtonPurpleBig);
                fairygui.UIObjectFactory.setPackageItemExtension(System.CloseBtn.URL, System.CloseBtn);
                fairygui.UIObjectFactory.setPackageItemExtension(System.PopUp406.URL, System.PopUp406);
                fairygui.UIObjectFactory.setPackageItemExtension(System.BarSquare.URL, System.BarSquare);
            };
            return SystemBinder;
        }());
        System.SystemBinder = SystemBinder;
    })(System = fgui.System || (fgui.System = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=SystemBinder.js.map
var Games;
(function (Games) {
    //======================
    // 浮动消息管理
    //----------------------
    var SystemToastMessag = /** @class */ (function () {
        function SystemToastMessag() {
            // 所有的
            this.list = [];
            // 可以使用的池
            this.pools = [];
            this.timeSpacing = 1;
        }
        SystemToastMessag.prototype.play = function (txt) {
            if (txt != this.lastTxt) {
                this.show(txt);
            }
            else if (getTime() - this.lastTime >= this.timeSpacing) {
                this.show(txt);
            }
        };
        SystemToastMessag.prototype.show = function (txt) {
            this.lastTxt = txt;
            this.lastTime = getTime();
            var item;
            if (this.pools.length > 0) {
                item = this.pools.pop();
            }
            else {
                item = fgui.System.SystemToastMessage.createInstance();
                this.list.push(item);
            }
            item.play(txt, Handler.create(this, this.onItemComplete));
        };
        SystemToastMessag.prototype.onItemComplete = function (item) {
            this.pools.push(item);
        };
        return SystemToastMessag;
    }());
    Games.SystemToastMessag = SystemToastMessag;
})(Games || (Games = {}));
//# sourceMappingURL=SystemToastMessage.js.map
var Games;
(function (Games) {
    //======================
    // 转圈
    //----------------------
    var SystemMessag = /** @class */ (function () {
        function SystemMessag() {
            // 浮动消息
            this.toastMessage = new Games.SystemToastMessag();
            //
            this._effectMsg = new Games.SystemEffect();
        }
        Object.defineProperty(SystemMessag, "Instance", {
            get: function () {
                if (!SystemMessag._Instance) {
                    SystemMessag._Instance = new SystemMessag();
                }
                return SystemMessag._Instance;
            },
            enumerable: true,
            configurable: true
        });
        // 播放打开声音		
        SystemMessag.prototype.playOpenSound = function () {
            // 播放弹出声音
            if (window["Game"] && window["Game"]["_isInstall"])
                Game.sound.playSound(SoundKey.MM02_Popup);
        };
        Object.defineProperty(SystemMessag.prototype, "alertMessage", {
            get: function () {
                if (!this._alertMessage) {
                    this._alertMessage = fgui.System.SystemAlertMessage.createInstance();
                }
                return this._alertMessage;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SystemMessag.prototype, "confirmMessage", {
            get: function () {
                if (!this._confirmMessage) {
                    this._confirmMessage = fgui.System.SystemConfirmMessage.createInstance();
                }
                return this._confirmMessage;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SystemMessag.prototype, "renameComfirm", {
            get: function () {
                if (!this._renameComfirm) {
                    this._renameComfirm = fgui.PfSkin.RenameUI.createInstance();
                }
                return this._renameComfirm;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SystemMessag.prototype, "setNumMessage", {
            get: function () {
                if (!this._setNumMessage) {
                    this._setNumMessage = fgui.Common.SystemSetNumMessage.createInstance();
                }
                return this._setNumMessage;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SystemMessag.prototype, "getRewardMessage", {
            get: function () {
                if (!this._getRewardMessage) {
                    this._getRewardMessage = fgui.System.SystemAddItemMessage.createInstance();
                }
                return this._getRewardMessage;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SystemMessag.prototype, "selectActorPanel", {
            get: function () {
                if (!this._selectActorPanel) {
                    this._selectActorPanel = fgui.Bag.SystemSelectActorPanel.createInstance();
                }
                return this._selectActorPanel;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SystemMessag.prototype, "getItemMessage", {
            get: function () {
                if (!this._getItemMessage) {
                    this._getItemMessage = fgui.Common.SystemGetItemMessage.createInstance();
                }
                return this._getItemMessage;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SystemMessag.prototype, "skillEffectUI", {
            get: function () {
                if (!this._actorSkillEffect) {
                    this._actorSkillEffect = fgui.Common.SkillEffectUI.createInstance();
                }
                return this._actorSkillEffect;
            },
            enumerable: true,
            configurable: true
        });
        /**
         *
         * @param acotrId 艺人id
         * @param type 类型
         */
        SystemMessag.prototype.playSkillEffect = function (acotrId, type, callback) {
            this.skillEffectUI.playSkillEffect(acotrId, type, callback);
        };
        Object.defineProperty(SystemMessag.prototype, "addFansMessage", {
            get: function () {
                if (!this._addFansMessage) {
                    this._addFansMessage = fgui.Common.SystemAddFansMessage.createInstance();
                }
                return this._addFansMessage;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SystemMessag.prototype, "alertAwardsDialog", {
            get: function () {
                if (!this._alertAwardsDialog) {
                    this._alertAwardsDialog = fgui.Common.SystemAlertAwards.createInstance();
                }
                return this._alertAwardsDialog;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SystemMessag.prototype, "rankMovieInfo", {
            get: function () {
                if (!this._rankMovieInfo) {
                    this._rankMovieInfo = fgui.Common.RankMovieInfoPanel.createInstance();
                }
                return this._rankMovieInfo;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SystemMessag.prototype, "rankPlayerInfo", {
            get: function () {
                if (!this._rankPlayerInfo) {
                    this._rankPlayerInfo = fgui.Common.RankPlayerInfoPanel.createInstance();
                }
                return this._rankPlayerInfo;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SystemMessag.prototype, "rankRenamePanel", {
            get: function () {
                if (!this._rankRenamePanel) {
                    this._rankRenamePanel = fgui.Common.RankRenamePanel.createInstance();
                }
                return this._rankRenamePanel;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SystemMessag.prototype, "streetLevelUpPanel", {
            get: function () {
                if (!this._streetLevelUpPanel) {
                    this._streetLevelUpPanel = fgui.Common.StreetLevelUp.createInstance();
                }
                return this._streetLevelUpPanel;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SystemMessag.prototype, "playerLevelUpPanel", {
            get: function () {
                if (!this._playerLevelUpPanel) {
                    this._playerLevelUpPanel = fgui.PlayerInfo.PlayerLevelUp.createInstance();
                }
                return this._playerLevelUpPanel;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SystemMessag.prototype, "alertTextIconDialog", {
            get: function () {
                if (!this._alertTextIconDialog) {
                    this._alertTextIconDialog = fgui.Common.SystemAlertTextIconMessage.createInstance();
                }
                return this._alertTextIconDialog;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SystemMessag.prototype, "wayAlertDialog", {
            get: function () {
                if (!this._wayAlertDialog) {
                    this._wayAlertDialog = fgui.Common.GetWayAlert.createInstance();
                }
                return this._wayAlertDialog;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SystemMessag.prototype, "itemInfoPanel", {
            get: function () {
                if (!this._itemInfoPanel) {
                    this._itemInfoPanel = fgui.Common.ItemInfo.createInstance();
                }
                return this._itemInfoPanel;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SystemMessag.prototype, "itemLockTipPanel", {
            get: function () {
                if (!this._itemLockTipPanel) {
                    this._itemLockTipPanel = fgui.Common.ItemLockTip.createInstance();
                }
                return this._itemLockTipPanel;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SystemMessag.prototype, "selectItemPanel", {
            get: function () {
                if (!this._selectItemPanel) {
                    this._selectItemPanel = fgui.Common.SystemSelectItemMessage.createInstance();
                }
                return this._selectItemPanel;
            },
            enumerable: true,
            configurable: true
        });
        /*------------------------------- 我是漂亮的分割线 ----------------------------------------- */
        // 浮动消息
        SystemMessag.prototype.toastText = function (txt) {
            this.toastMessage.play(txt);
        };
        SystemMessag.prototype.toastMsg = function (msgKey) {
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
            var txt = (_a = Game.config.msg).getTxtFormat.apply(_a, [msgKey].concat(args));
            this.toastMessage.play(txt);
            var _a;
        };
        SystemMessag.prototype.toastFormatText = function (txt) {
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
            this.toastText(format(txt, args));
        };
        /**
         * 道具不足提示
         * @param id 道具id
         */
        SystemMessag.prototype.toastItemNotEnough = function (id) {
            var config = Game.config.item.getConfig(id);
            var itemName = "";
            if (config)
                itemName = config.name;
            else
                itemName = id.toString();
            this.toastText(format(Games.TEXT.ToastTextItemNotEnough, itemName));
        };
        /*------------------------------- 我是漂亮的分割线 ----------------------------------------- */
        // 对话框消息,一个按钮, 简洁方法
        SystemMessag.prototype.alertText = function (txt, yesObj, yesFun) {
            this.alrtTextFull(txt, "", yesObj, yesFun);
        };
        SystemMessag.prototype.alertMsg = function (msgKey, yesObj, yesFun) {
            var txt = Game.config.msg.getTxt(msgKey);
            this.alrtTextFull(txt, "", yesObj, yesFun);
        };
        SystemMessag.prototype.alertMsgFormat = function (msgKey, msgargs, yesObj, yesFun) {
            var txt = (_a = Game.config.msg).getTxtFormat.apply(_a, [msgKey].concat(msgargs));
            this.alrtTextFull(txt, "", yesObj, yesFun);
            var _a;
        };
        SystemMessag.prototype.alrtTMsgFull = function (msgkey, msgargs, title, yesObj, yesFun, yesTxt, buttonEnable, isClickButtonAutoClose) {
            if (title === void 0) { title = ""; }
            if (yesObj === void 0) { yesObj = null; }
            if (yesFun === void 0) { yesFun = null; }
            if (yesTxt === void 0) { yesTxt = null; }
            if (buttonEnable === void 0) { buttonEnable = true; }
            if (isClickButtonAutoClose === void 0) { isClickButtonAutoClose = true; }
            var txt = (_a = Game.config.msg).getTxtFormat.apply(_a, [msgkey].concat(msgargs));
            this.alrtTextFull(txt, "", yesObj, yesFun, yesTxt, buttonEnable, isClickButtonAutoClose);
            var _a;
        };
        /**
         * 对话框消息,一个按钮
         * @param txt 消息内容
         * @param title 标题
         * @param yesObj 点击yes按钮回调对象
         * @param yesFun 点击yes按钮回调函数
         * @param yesTxt yes按钮 文本
         * @param closeButtonVisiable 是否显示关闭按钮
         * @param buttonEnable 按钮是否可以点击
         * @param isClickButtonAutoClose 点击按钮后是否自动关闭
         */
        SystemMessag.prototype.alrtTextFull = function (txt, title, yesObj, yesFun, yesTxt, closeButtonVisiable, buttonEnable, isClickButtonAutoClose) {
            if (title === void 0) { title = ""; }
            if (yesObj === void 0) { yesObj = null; }
            if (yesFun === void 0) { yesFun = null; }
            if (yesTxt === void 0) { yesTxt = null; }
            if (closeButtonVisiable === void 0) { closeButtonVisiable = true; }
            if (buttonEnable === void 0) { buttonEnable = true; }
            if (isClickButtonAutoClose === void 0) { isClickButtonAutoClose = true; }
            if (isNullOrEmpty(yesTxt)) {
                yesTxt = LoadingStateTxt.VersionAlertUpdateOKBtn;
            }
            this.alertMessage.open(txt, title, yesObj, yesFun, yesTxt, closeButtonVisiable, buttonEnable, isClickButtonAutoClose);
            this.playOpenSound();
        };
        SystemMessag.prototype.closeAlert = function () {
            this.alertMessage.close();
        };
        /*------------------------------- 我是漂亮的分割线 ----------------------------------------- */
        /**
         * 对话框消息,两个按钮
         * @param msgkey MsgConfig key
         * @param msgargs 消息参数
         * @param title 标题
         * @param caller 点击按钮回调对象
         * @param yesFun 点击yes按钮回调函数
         * @param noFun 点击no按钮回调函数
         * @param yesTxt yes按钮 文本
         * @param noTxt no按钮 文本
         * @param closeButtonVisiable 是否显示关闭按钮
         * @param isClickButtonAutoClose 点击按钮后是否自动关闭
         */
        SystemMessag.prototype.confirmMsg = function (msgkey, msgargs, title, caller, yesFun, noFun, yesTxt, noTxt, closeButtonVisiable, isClickButtonAutoClose) {
            if (title === void 0) { title = ""; }
            if (caller === void 0) { caller = null; }
            if (yesFun === void 0) { yesFun = null; }
            if (noFun === void 0) { noFun = null; }
            if (yesTxt === void 0) { yesTxt = null; }
            if (noTxt === void 0) { noTxt = null; }
            if (closeButtonVisiable === void 0) { closeButtonVisiable = true; }
            if (isClickButtonAutoClose === void 0) { isClickButtonAutoClose = true; }
            var txt = (_a = Game.config.msg).getTxtFormat.apply(_a, [msgkey].concat(msgargs));
            this.confirmText(txt, title, caller, yesFun, noFun, yesTxt, noTxt, closeButtonVisiable, isClickButtonAutoClose);
            var _a;
        };
        /**
         * 对话框消息,两个按钮
         * @param txt 消息内容
         * @param title 标题
         * @param caller 点击按钮回调对象
         * @param yesFun 点击yes按钮回调函数
         * @param noFun 点击no按钮回调函数
         * @param yesTxt yes按钮 文本
         * @param noTxt no按钮 文本
         * @param closeButtonVisiable 是否显示关闭按钮
         * @param isClickButtonAutoClose 点击按钮后是否自动关闭
         */
        SystemMessag.prototype.confirmText = function (txt, title, caller, yesFun, noFun, yesTxt, noTxt, closeButtonVisiable, isClickButtonAutoClose) {
            if (title === void 0) { title = ""; }
            if (caller === void 0) { caller = null; }
            if (yesFun === void 0) { yesFun = null; }
            if (noFun === void 0) { noFun = null; }
            if (yesTxt === void 0) { yesTxt = null; }
            if (noTxt === void 0) { noTxt = null; }
            if (closeButtonVisiable === void 0) { closeButtonVisiable = true; }
            if (isClickButtonAutoClose === void 0) { isClickButtonAutoClose = true; }
            if (isNullOrEmpty(yesTxt)) {
                yesTxt = Games.TEXT.ButtonYes;
            }
            if (isNullOrEmpty(noTxt)) {
                noTxt = Games.TEXT.ButtonNo;
            }
            this.confirmMessage.open(txt, title, caller, yesFun, noFun, yesTxt, noTxt, closeButtonVisiable, isClickButtonAutoClose);
            this.playOpenSound();
        };
        /**
         * 标题，文本内容，图标列表提示框
         * @param itemList
         * @param title
         * @param content
         * @param confirm
         * @param confirmText
         */
        SystemMessag.prototype.confirmTextIcon = function (itemList, title, content, confirm, caller, confirmText, isShowClose, isShowCurNum) {
            if (isShowCurNum === void 0) { isShowCurNum = true; }
            this.alertTextIconDialog.open(itemList, title, content, confirm, caller, confirmText, isShowClose, isShowCurNum);
            this.playOpenSound();
        };
        SystemMessag.prototype.alertTextIcon = function (itemList, title, confirm, caller) {
            this.alertTextIconDialog.open(itemList, title, "", confirm, null, null, null, false);
            this.playOpenSound();
        };
        /**
         *
         * @param itemList
         * @param title
         * @param confirm
         */
        SystemMessag.prototype.alertTextIconByProtoItems = function (itemList, title, content, confirm, caller, confirmText, isShowClose) {
            this.alertTextIconDialog.open(ItemDescList2DTItemNumList(itemList), title, content, confirm, caller, confirmText, isShowClose, false);
            this.playOpenSound();
        };
        /**
         *花费确定
         * @param txt
         * @param costnum
         * @param costId
         * @param caller
         * @param yesFun
         */
        SystemMessag.prototype.confirmBuyText = function (txt, cost, caller, yesFun) {
            var costId = cost[0];
            var costnum = cost[1];
            var config = Game.config.item.getConfig(costId);
            var costItemName = "";
            if (cost) {
                costItemName = config.name;
            }
            else {
                costItemName = costId + "";
            }
            this.confirmText(format(txt, costnum, costItemName), Games.TEXT.SureBuy, null, function () {
                if (Game.moduleModel.item.getItemNum(costId) >= costnum) {
                    if (yesFun) {
                        if (caller) {
                            yesFun.apply(caller);
                        }
                        else {
                            yesFun();
                        }
                    }
                }
                else {
                    Game.system.openItemWay(costId, costnum);
                }
            });
        };
        /**
         * 选择数量
         * @param limit
         * @param txt
         * @param title
         * @param caller
         * @param yesFun
         * @param noFun
         * @param closeButtonVisiable
         * @param isClickButtonAutoClose
         */
        SystemMessag.prototype.setNumText = function (limit, txt, title, caller, yesFun, noFun, yesTxt, closeButtonVisiable, isClickButtonAutoClose) {
            if (txt === void 0) { txt = ""; }
            if (title === void 0) { title = ""; }
            if (caller === void 0) { caller = null; }
            if (yesFun === void 0) { yesFun = null; }
            if (noFun === void 0) { noFun = null; }
            if (yesTxt === void 0) { yesTxt = null; }
            if (closeButtonVisiable === void 0) { closeButtonVisiable = true; }
            if (isClickButtonAutoClose === void 0) { isClickButtonAutoClose = true; }
            if (isNullOrEmpty(yesTxt)) {
                yesTxt = Games.TEXT.ButtonYes;
            }
            this.setNumMessage.open(limit, txt, title, caller, yesFun, noFun, yesTxt, closeButtonVisiable, isClickButtonAutoClose);
            this.playOpenSound();
        };
        /**
         *获得物品
         * @param txt
         * @param items
         */
        SystemMessag.prototype.getRewardText = function (items, title, autoCloseTime) {
            var list = Games.ItemData.BinningItemList(items);
            this.getRewardMessage.open(list, title, autoCloseTime);
            this.playOpenSound();
        };
        /**
         *选择演员
         * @param actorList
         * @param selectFun
         * @param caller
         * @param title
         */
        SystemMessag.prototype.selectActor = function (actorList, selectFun, caller, title) {
            if (caller === void 0) { caller = null; }
            if (title === void 0) { title = ""; }
            this.selectActorPanel.open(actorList, selectFun, caller, title);
            this.playOpenSound();
        };
        /**
                 *获得物品
                 * @param txt
                 * @param items
                 */
        SystemMessag.prototype.getItemText = function (items, closeFun, isAutoClose) {
            var list = Games.ItemData.BinningItemList(items);
            this.getItemMessage.open(list, closeFun, isAutoClose);
            return this.getItemMessage;
        };
        /**
         *增加粉丝
         * @param addFans 增加的粉丝数
         * @param closeHandler 关闭回调
         * @param title 得益于公司的市场推广
         * @param autoCloseTime 自动关闭时间， 为0时不自动关闭
         */
        SystemMessag.prototype.addFansText = function (addFans, closeHandler, title, autoCloseTime) {
            if (autoCloseTime === void 0) { autoCloseTime = 0; }
            this.addFansMessage.open(addFans, closeHandler, title, autoCloseTime);
            this.playOpenSound();
        };
        //弹窗升级界面
        SystemMessag.prototype.tryAlertLevelUp = function (closeHandler) {
            var hasMsg = Game.moduleModel.playerInfo.hasPlayerLevelUpMsg;
            if (hasMsg) {
                var msg = Game.moduleModel.playerInfo.dequeuePlayerLevelUpMsg();
                this.playerLevelUpPanel.show(msg.old_level, msg.now_level, msg.story, closeHandler);
                this.playOpenSound();
            }
            else {
                if (closeHandler) {
                    closeHandler.run();
                    closeHandler = null;
                }
            }
        };
        SystemMessag.prototype.playerInfo = function (playerData) {
            this.rankPlayerInfo.open(playerData);
        };
        SystemMessag.prototype.movieInfo = function (movieData) {
            this.rankMovieInfo.open(movieData);
        };
        SystemMessag.prototype.rename = function (title, caller, renameFun, oldName) {
            if (oldName === void 0) { oldName = ""; }
            this.rankRenamePanel.open(title, caller, renameFun, oldName);
        };
        SystemMessag.prototype.streetLevelUp = function () {
            this.streetLevelUpPanel.open();
        };
        SystemMessag.prototype.selectItem = function (itemList, caller, fun) {
            var list = Games.ItemData.BinningItemList(itemList);
            this.selectItemPanel.open(list, caller, fun);
        };
        /*------------------------------- 我是漂亮的分割线 ----------------------------------------- */
        /**
         * 关闭对话框
         */
        SystemMessag.prototype.alertMessageHide = function () {
            if (this._alertMessage) {
                this._alertMessage.close();
            }
            if (this._confirmMessage) {
                this._confirmMessage.close();
            }
            if (this._getRewardMessage) {
                this._getRewardMessage.close();
            }
            if (this._setNumMessage) {
                this._setNumMessage.close();
            }
        };
        /*------------------------------- 我是漂亮的分割线 ----------------------------------------- */
        /**
         * 打开重命名窗口
         * @param dialogMsg 对话文本
         * @param caller 调用域
         * @param okFunc 函数
         * @param okBtnTxt 按钮文本
         * @param defaultTxt 默认输入文本
         * @param promptText 提示文本
         * @param maxLen 最大字符
         * @param url icon路径
         * @param cost 花费[id,num]
         * @param isClickButtonAutoClose 点击ok是否自动关闭
         * @param randomNames //随机名字数组
         */
        SystemMessag.prototype.openRename = function (dialogMsg, caller, okFunc, closeFunc, okBtnTxt, defaultTxt, promptText, maxLen, url, cost, isClickButtonAutoClose, randomNames) {
            if (isClickButtonAutoClose === void 0) { isClickButtonAutoClose = true; }
            this.renameComfirm.open(dialogMsg, caller, okFunc, closeFunc, okBtnTxt, defaultTxt, promptText, maxLen, url, cost, isClickButtonAutoClose, randomNames);
            this.playOpenSound();
        };
        /**隐藏重命名窗口*/
        SystemMessag.prototype.hideRename = function () {
            this.renameComfirm.close();
        };
        /**
         * 道具不足时提示获取途径
         * @param itemId
         * @param costNum
         */
        SystemMessag.prototype.openItemWay = function (itemId, costNum) {
            this.wayAlertDialog.setInfo(itemId, costNum);
            this.playOpenSound();
        };
        /**
         * 道具信息提示
         * @param button 绑定的物体
         * @param itemId 物品ID
         */
        SystemMessag.prototype.showItemInfo = function (button, itemId) {
            this.itemInfoPanel.Show(button, itemId);
        };
        /**
         * 道具信息提示
         * @param point
         * @param itemData
         */
        SystemMessag.prototype.showItemLockTip = function (button, tip, title) {
            this.itemLockTipPanel.Show(button, tip, title);
        };
        /**
         * 获得物品特效
         * @param items 物品列表
         * @param root
         * @param startPos
         */
        SystemMessag.prototype.showAssetFx = function (items, root, startPos) {
            if (root == null) {
                root = Games.MenuLayer.dialogModel;
            }
            if (startPos == null) {
                startPos = new Point(root.width / 2, root.height / 2);
            }
            this.showAssetFxIndex = 0;
            this.showAssetItems = items;
            Laya.timer.clear(this, this.loopShowAssetFx);
            Laya.timer.loop(100, this, this.loopShowAssetFx, [root, startPos]);
        };
        SystemMessag.prototype.loopShowAssetFx = function (root, startPos) {
            if (this.showAssetFxIndex >= this.showAssetItems.length) {
                console.log("finish");
                Laya.timer.clear(this, this.loopShowAssetFx);
                return;
            }
            var item = this.showAssetItems[this.showAssetFxIndex];
            this.showAssetFxIndex++;
            if (item.itemType == 1 || item.itemType == 2 || item.itemType == 3 || item.itemType == 11 || item.itemType == 12) {
                var endPos = new Point(0, 0);
                FguiHelper.startTrail(item.itemId, startPos, endPos, 500, root);
            }
            else if (item.itemType == 4 || item.itemType == 5 || item.itemType == 6 || item.itemType == 7 || item.itemType == 8 || item.itemType == 9) {
                var endPos = new Point(root.width, root.height);
                FguiHelper.startTrail(item.itemId, startPos, endPos, 500, root);
            }
        };
        /**
         * 提示获取奖励信息
         * @param itemList
         * @param title
         * @param confirm
         */
        SystemMessag.prototype.openAwardsAlert = function (itemList, title, confirm, hideClose) {
            this.alertAwardsDialog.open(itemList, title, confirm, null, hideClose);
            this.playOpenSound();
        };
        SystemMessag.prototype.openAwardsAlertByProtoItems = function (itemList, title, confirm, hideClose) {
            this.openAwardsAlert(ItemDescList2DTItemNumList(itemList), title, confirm, hideClose);
        };
        SystemMessag.prototype.playEffects = function (dts) {
            this._effectMsg.playeffects(dts);
        };
        Object.defineProperty(SystemMessag.prototype, "alertGift", {
            get: function () {
                if (!this._alertGift) {
                    this._alertGift = fgui.Common.SystemAlertGift.createInstance();
                }
                return this._alertGift;
            },
            enumerable: true,
            configurable: true
        });
        //////////////////////////////////////////////////////////////
        //////////////////////////////////////////////////////////////
        //////////////////////////////////////////////////////////////
        /**
         *
         * @param itemList
         * @param title
         * @param desc
         * @param btnTxt
         * @param btnEnabled
         * @param confirm
         */
        SystemMessag.prototype.openAwardsGift = function (itemList, title, desc, btnTxt, btnEnabled, confirm) {
            this.alertGift.open(itemList, title, desc, btnTxt, btnEnabled, confirm);
            this.playOpenSound();
        };
        Object.defineProperty(SystemMessag.prototype, "actorBreakEffect", {
            get: function () {
                if (!this._actorBreakEffect) {
                    this._actorBreakEffect = fgui.Common.ActorLvBreaktUI.createInstance();
                }
                return this._actorBreakEffect;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * 播放突破效果
         * @param acotrId 艺人id
         * @param type 类型
         */
        SystemMessag.prototype.playBreakEffect = function (acotrId, desc) {
            this.actorBreakEffect.playEffect(acotrId, desc);
        };
        Object.defineProperty(SystemMessag.prototype, "goOtherFunction", {
            get: function () {
                if (!this._goOtherFunction) {
                    this._goOtherFunction = fgui.Common.SystemGoOtherFunction.createInstance();
                }
                return this._goOtherFunction;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * 打开功能跳转
         * @param type
         * @param title
         * @param desc
         * @param confirmFunc
         */
        SystemMessag.prototype.openGoOtherFunc = function (type, title, desc, confirmFunc) {
            this.goOtherFunction.open(type, title, desc, confirmFunc);
        };
        Object.defineProperty(SystemMessag.prototype, "unlockPanel", {
            get: function () {
                if (!this._unlockPanel) {
                    this._unlockPanel = fgui.Common.UnlockPanel.createInstance();
                }
                return this._unlockPanel;
            },
            enumerable: true,
            configurable: true
        });
        //打开解锁功能
        SystemMessag.prototype.openUnlock = function (unlockId) {
            this.unlockPanel.openUnlock(unlockId);
        };
        //打开解锁功能
        SystemMessag.prototype.openUnlockLessonFunc = function (url, title) {
            this.unlockPanel.openUnlockLessonFunc(url, title);
        };
        //关闭解锁
        SystemMessag.prototype.closeUnlock = function () {
            this.unlockPanel.closeUnlock();
        };
        return SystemMessag;
    }());
    Games.SystemMessag = SystemMessag;
})(Games || (Games = {}));
//# sourceMappingURL=SystemMessage.js.map
var Games;
(function (Games) {
    // =====================
    // fgui 设置
    // ---------------------
    var GuiSetting = /** @class */ (function () {
        function GuiSetting() {
        }
        GuiSetting.getResPackagePath = function (packageName, dir) {
            if (isNullOrEmpty(dir)) {
                return "" + GuiSetting.resRoot + packageName;
            }
            else {
                return "" + GuiSetting.resRoot + dir + "/" + packageName;
            }
        };
        GuiSetting.getResPath = function (filename, dir) {
            if (isNullOrEmpty(dir)) {
                return "" + GuiSetting.resRoot + filename;
            }
            else {
                return "" + GuiSetting.resRoot + dir + "/" + filename;
            }
        };
        GuiSetting.addPackage = function (resKey, packageConfig) {
            if (GuiSetting._uiPackageDict.hasKey(resKey)) {
                return GuiSetting._uiPackageDict.getValue(resKey);
            }
            else {
                var pkg = fairygui.UIPackage.addPackage(resKey);
                GuiSetting._uiPackageDict.add(resKey, pkg);
                return pkg;
            }
        };
        GuiSetting.removePackage = function (resKey, packageConfig) {
            var pkg = GuiSetting._uiPackageDict.getValue(resKey);
            if (pkg) {
                fairygui.UIPackage.removePackage(resKey);
                pkg.dispose();
                GuiSetting._uiPackageDict.remove(resKey);
            }
            GuiSetting._uiPackageDictForReferenceNum.remove(resKey);
        };
        GuiSetting.hasLoadPackage = function (resKey) {
            return GuiSetting._uiPackageDict.hasKey(resKey);
        };
        GuiSetting.addPackageReferenceNum = function (resKey) {
            var num = GuiSetting.getPackageReferenceNum(resKey) + 1;
            if (num == 0) {
                num = 1;
            }
            console.log("~~addPackageReferenceNum:  " + num + "  " + resKey);
            GuiSetting._uiPackageDictForReferenceNum.add(resKey, num);
            return num;
        };
        GuiSetting.removePackageReferenceNum = function (resKey) {
            var num = GuiSetting.getPackageReferenceNum(resKey) - 1;
            if (num < 0) {
                num = 0;
            }
            console.log("~~removePackageReferenceNum:  " + num + "  " + resKey);
            GuiSetting._uiPackageDictForReferenceNum.add(resKey, num);
            return num;
        };
        GuiSetting.getPackageReferenceNum = function (resKey) {
            return GuiSetting._uiPackageDictForReferenceNum.hasKey(resKey) ? GuiSetting._uiPackageDictForReferenceNum.getValue(resKey) : 0;
        };
        // 资源根目录
        GuiSetting.resRoot = "res/";
        // 后缀
        GuiSetting.packageFileExtension = "bin";
        // 包        
        GuiSetting._uiPackageDict = new Dictionary();
        // 包 引用次数
        GuiSetting._uiPackageDictForReferenceNum = new Dictionary();
        return GuiSetting;
    }());
    Games.GuiSetting = GuiSetting;
})(Games || (Games = {}));
//# sourceMappingURL=GuiSetting.js.map
var Games;
(function (Games) {
    // ===========================
    // 层级类型
    // ---------------------------
    var MenuLayerType;
    (function (MenuLayerType) {
        // 主界面
        MenuLayerType[MenuLayerType["Home"] = 1] = "Home";
        // 主界面 上一层
        MenuLayerType[MenuLayerType["HomeTop"] = 2] = "HomeTop";
        // 模块
        MenuLayerType[MenuLayerType["Module"] = 3] = "Module";
        // 模块
        MenuLayerType[MenuLayerType["ModuleTop"] = 4] = "ModuleTop";
        // 主UI
        MenuLayerType[MenuLayerType["MainUI"] = 5] = "MainUI";
        // 对话框
        MenuLayerType[MenuLayerType["Dialog"] = 6] = "Dialog";
        // 引导
        MenuLayerType[MenuLayerType["Guide"] = 7] = "Guide";
        // 加载面板
        MenuLayerType[MenuLayerType["Loader"] = 8] = "Loader";
        // GM
        MenuLayerType[MenuLayerType["GM"] = 9] = "GM";
        // 浮动对话框
        MenuLayerType[MenuLayerType["FloatMsg"] = 10] = "FloatMsg";
    })(MenuLayerType = Games.MenuLayerType || (Games.MenuLayerType = {}));
})(Games || (Games = {}));
//# sourceMappingURL=MenuLayerType.js.map
var Games;
(function (Games) {
    var MenuLayer = /** @class */ (function () {
        function MenuLayer() {
        }
        Object.defineProperty(MenuLayer, "dialogModel", {
            get: function () {
                if (!MenuLayer._dialogModel) {
                    MenuLayer._dialogModel = fgui.System.BGModel.createInstance();
                }
                return MenuLayer._dialogModel;
            },
            enumerable: true,
            configurable: true
        });
        MenuLayer.showDialogModel = function () {
            MenuLayer.dialog.width = ScreenSetting.screenWidth;
            MenuLayer.dialog.height = ScreenSetting.screenHeight;
            MenuLayer.dialogModel.m_bg.alpha = 0.8;
            MenuLayer.dialogModel.width = ScreenSetting.screenWidth;
            MenuLayer.dialogModel.height = ScreenSetting.screenHeight;
            if (MenuLayer.dialogModel)
                MenuLayer.dialog.addChildAt(MenuLayer.dialogModel, 0);
        };
        MenuLayer.resetDialogModelSize = function () {
            MenuLayer.dialog.width = ScreenSetting.screenWidth;
            MenuLayer.dialog.height = ScreenSetting.screenHeight;
            MenuLayer.dialogModel.width = ScreenSetting.screenWidth;
            MenuLayer.dialogModel.height = ScreenSetting.screenHeight;
        };
        MenuLayer.hideDialogModel = function () {
            if (MenuLayer.dialogModel)
                MenuLayer.dialogModel.removeFromParent();
        };
        // 初始化
        MenuLayer.install = function () {
            // 根容器
            Laya.stage.addChild(fairygui.GRoot.inst.displayObject);
            MenuLayer.root = fairygui.GRoot.inst;
            MenuLayer.home = MenuLayer.createLayer("MenuLayer-home");
            MenuLayer.homeTop = MenuLayer.createLayer("MenuLayer-homeTop");
            MenuLayer.module = MenuLayer.createLayer("MenuLayer-module");
            MenuLayer.moduleTop = MenuLayer.createLayer("MenuLayer-moduleTop");
            MenuLayer.mainUI = MenuLayer.createLayer("MenuLayer-mainUI");
            MenuLayer.dialog = MenuLayer.createLayer("MenuLayer-dialog");
            MenuLayer.guide = MenuLayer.createLayer("MenuLayer-guide");
            MenuLayer.loader = MenuLayer.createLayer("MenuLayer-loader");
            MenuLayer.gm = MenuLayer.createLayer("MenuLayer-gm");
            MenuLayer.floatMsg = MenuLayer.createLayer("MenuLayer-floatMsg");
            MenuLayer.dict.add(Games.MenuLayerType.Home, MenuLayer.home);
            MenuLayer.dict.add(Games.MenuLayerType.HomeTop, MenuLayer.homeTop);
            MenuLayer.dict.add(Games.MenuLayerType.Module, MenuLayer.module);
            MenuLayer.dict.add(Games.MenuLayerType.ModuleTop, MenuLayer.moduleTop);
            MenuLayer.dict.add(Games.MenuLayerType.MainUI, MenuLayer.mainUI);
            MenuLayer.dict.add(Games.MenuLayerType.Dialog, MenuLayer.dialog);
            MenuLayer.dict.add(Games.MenuLayerType.Guide, MenuLayer.guide);
            MenuLayer.dict.add(Games.MenuLayerType.Loader, MenuLayer.loader);
            MenuLayer.dict.add(Games.MenuLayerType.GM, MenuLayer.gm);
            MenuLayer.dict.add(Games.MenuLayerType.FloatMsg, MenuLayer.floatMsg);
        };
        MenuLayer.getLayer = function (layerType) {
            return MenuLayer.dict.getValue(layerType);
        };
        MenuLayer.createLayer = function (name) {
            var root = MenuLayer.root;
            var v = new fairygui.GRoot();
            if (name) {
                v.name = name;
            }
            v.setSize(root.width, root.height);
            root.addChild(v);
            return v;
        };
        // 字典
        MenuLayer.dict = new Dictionary();
        return MenuLayer;
    }());
    Games.MenuLayer = MenuLayer;
})(Games || (Games = {}));
//# sourceMappingURL=MenuLayer.js.map

var Games;
(function (Games) {
    //======================
    // 加载界面
    //----------------------
    var LoaderPanel = /** @class */ (function (_super) {
        __extends(LoaderPanel, _super);
        function LoaderPanel() {
            var _this = _super.call(this) || this;
            // 消息--显示完成
            _this.sShowComplete = new Signal();
            // 消息--隐藏完成
            _this.sHideComplete = new Signal();
            return _this;
        }
        LoaderPanel.prototype.onInit = function () {
            _super.prototype.onInit.call(this);
        };
        // 设置内容是否显示
        LoaderPanel.prototype.getContentVisiable = function () {
            if (this.contentPane) {
                return this.contentPane.visible;
            }
            return false;
        };
        LoaderPanel.prototype.setContentVisiable = function (value) {
            if (this.contentPane) {
                this.contentPane.visible = value;
            }
        };
        LoaderPanel.prototype.doShowAnimation = function () {
            this.onWindowWillShow();
            _super.prototype.doShowAnimation.call(this);
        };
        LoaderPanel.prototype.doHideAnimation = function () {
            this.onWindowWillHide();
            _super.prototype.doHideAnimation.call(this);
        };
        // 显示完成
        LoaderPanel.prototype.onShown = function () {
            this.sShowComplete.dispatch();
        };
        // 隐藏完成
        LoaderPanel.prototype.onHide = function () {
            this.sHideComplete.dispatch();
        };
        // 设置最大值
        LoaderPanel.prototype.setMax = function (value) {
        };
        // 设置加载进度
        LoaderPanel.prototype.setValue = function (value) {
        };
        // 设置Tip
        LoaderPanel.prototype.setTip = function (tip) {
        };
        LoaderPanel.prototype.setTips = function (tips) {
        };
        // 设置版本号
        LoaderPanel.prototype.setVersion = function () {
        };
        return LoaderPanel;
    }(Games.FWindow));
    Games.LoaderPanel = LoaderPanel;
})(Games || (Games = {}));
//# sourceMappingURL=LoaderPanel.js.map

var Games;
(function (Games) {
    //======================
    // 加载界面--转圈
    //----------------------
    var LoaderCirclePanel = /** @class */ (function (_super) {
        __extends(LoaderCirclePanel, _super);
        function LoaderCirclePanel() {
            return _super.call(this) || this;
        }
        LoaderCirclePanel.prototype.onInit = function () {
            this.contentPane = fgui.System.GlobalModalWaiting.createInstance();
            this.center();
            //弹出窗口的动效已中心为轴心
            this.setPivot(0.5, 0.5);
        };
        return LoaderCirclePanel;
    }(Games.LoaderPanel));
    Games.LoaderCirclePanel = LoaderCirclePanel;
})(Games || (Games = {}));
//# sourceMappingURL=LoaderCirclePanel.js.map

var Games;
(function (Games) {
    //======================
    // 加载界面--进入游戏
    //----------------------
    var LoaderEnterPanel = /** @class */ (function (_super) {
        __extends(LoaderEnterPanel, _super);
        function LoaderEnterPanel() {
            var _this = _super.call(this) || this;
            _this.tips = [];
            _this.__setTipHandlerTimer = -1;
            return _this;
        }
        LoaderEnterPanel.prototype.onInit = function () {
            this.loader = fgui.System.LoaderEnterGame.createInstance();
            this.contentPane = this.loader;
            // this.center();
            //弹出窗口的动效已中心为轴心
            // this.setPivot(0.5, 0.5);
            _super.prototype.onInit.call(this);
            this.tips = LoadingStateTxt.tips;
            this.setVersion();
        };
        // 显示完成
        LoaderEnterPanel.prototype.onShown = function () {
            _super.prototype.onShown.call(this);
            this.beginTips();
            this.setVersion();
            gameApplication.sInfo.add(this.setVersion, this);
        };
        // 隐藏完成
        LoaderEnterPanel.prototype.onHide = function () {
            _super.prototype.onHide.call(this);
            this.stopTips();
            gameApplication.sInfo.remove(this.setVersion, this);
        };
        LoaderEnterPanel.prototype.beginTips = function () {
            this.stopTips();
            if (this.tips && this.tips.length > 0) {
                this.__setTipHandler();
            }
        };
        LoaderEnterPanel.prototype.stopTips = function () {
            if (this.__setTipHandlerTimer > 0) {
                clearTimeout(this.__setTipHandlerTimer);
                this.__setTipHandlerTimer = -1;
            }
        };
        LoaderEnterPanel.prototype.__setTipHandler = function () {
            var _this = this;
            this.loader.m_help.text = this.tips[Random.range(0, this.tips.length)];
            this.__setTipHandlerTimer = setTimeout(function () {
                _this.__setTipHandler();
            }, Random.range(100, 400));
        };
        // 设置最大值
        LoaderEnterPanel.prototype.setMax = function (value) {
            // console.log("LoaderEnterPanel.setMax  value=" + value);
            this.loader.m_progressBar.max = value;
        };
        // 设置加载进度
        LoaderEnterPanel.prototype.setValue = function (value) {
            // console.log("LoaderEnterPanel.setValue  value=" + value);
            this.loader.m_progressBar.value = value;
        };
        // 设置Tip
        LoaderEnterPanel.prototype.setTip = function (tip) {
            this.loader.m_title.text = tip;
        };
        LoaderEnterPanel.prototype.setTips = function (tips) {
            // this.loader.m_help.text = tips[0];
        };
        // 设置版本号
        LoaderEnterPanel.prototype.setVersion = function () {
            this.loader.m_txt_gamever.text = "GameVersion:" + GameVersions.Manager.Instance.localAppVersionData.toString();
            this.loader.m_txt_resVer.text = "ResVersion:" + GameVersions.Manager.Instance.localResVersionData.toString();
        };
        return LoaderEnterPanel;
    }(Games.LoaderPanel));
    Games.LoaderEnterPanel = LoaderEnterPanel;
})(Games || (Games = {}));
//# sourceMappingURL=LoaderEnterPanel.js.map

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
var Games;
(function (Games) {
    var LoaderId;
    (function (LoaderId) {
        // 没有显示界面
        LoaderId[LoaderId["None"] = 0] = "None";
        // 转圈圈
        LoaderId[LoaderId["Circle"] = 1] = "Circle";
        // 启动界面
        LoaderId[LoaderId["Launch"] = 2] = "Launch";
        // 进入游戏加载界面
        LoaderId[LoaderId["EnterGame"] = 3] = "EnterGame";
        // 加载模块界面
        LoaderId[LoaderId["Module"] = 4] = "Module";
    })(LoaderId = Games.LoaderId || (Games.LoaderId = {}));
})(Games || (Games = {}));
if (!window["LoaderId"]) {
    window["LoaderId"] = Games.LoaderId;
}
//# sourceMappingURL=LoaderId.js.map
var Games;
(function (Games) {
    //======================
    // 加载界面控制器
    //----------------------
    var LoaderCtl = /** @class */ (function () {
        function LoaderCtl() {
            // 是否已经打开
            this.isOpened = false;
            //延时显示加载面板Handler
            this.delayShowPanelHandler = -1;
        }
        Object.defineProperty(LoaderCtl.prototype, "isDelayShowPanel", {
            get: function () {
                return this.loaderId == Games.LoaderId.Module;
            },
            enumerable: true,
            configurable: true
        });
        // 打开
        LoaderCtl.prototype.open = function () {
            var _this = this;
            this.isOpened = true;
            if (this.loaderPanel) {
                this.loaderPanel.showOn(Games.MenuLayer.loader);
                this.loaderPanel.setContentVisiable(true);
                if (this.isDelayShowPanel) {
                    this.loaderPanel.setContentVisiable(false);
                    clearTimeout(this.delayShowPanelHandler);
                    this.delayShowPanelHandler = setTimeout(function () {
                        _this.loaderPanel.setContentVisiable(true);
                    }, 100);
                }
            }
        };
        // 关闭
        LoaderCtl.prototype.close = function () {
            if (this.delayShowPanelHandler != -1) {
                clearTimeout(this.delayShowPanelHandler);
                this.delayShowPanelHandler = -1;
            }
            this.isOpened = false;
            if (this.loaderPanel) {
                this.loaderPanel.hide();
                if (this.isDelayShowPanel) {
                    this.loaderPanel.setContentVisiable(false);
                }
            }
        };
        // 设置进度
        LoaderCtl.prototype.setProgress = function (progress) {
            // console.log("LoaderCtl.setProgress  progress=" + progress);
            if (this.loaderPanel)
                this.loaderPanel.setValue(progress);
        };
        // 设置进度最大值
        LoaderCtl.prototype.setMax = function (max) {
            if (this.loaderPanel)
                this.loaderPanel.setMax(max);
        };
        // 设置Tip
        LoaderCtl.prototype.setTip = function (txt) {
            if (this.loaderPanel)
                this.loaderPanel.setTip(txt);
        };
        LoaderCtl.prototype.setTips = function (txts) {
            if (this.loaderPanel)
                this.loaderPanel.setTips(txts);
        };
        // 设置版本号
        LoaderCtl.prototype.setVersion = function () {
            if (this.loaderPanel)
                this.loaderPanel.setVersion();
        };
        return LoaderCtl;
    }());
    Games.LoaderCtl = LoaderCtl;
})(Games || (Games = {}));
//# sourceMappingURL=LoaderCtl.js.map

var FGLoader = /** @class */ (function (_super) {
    __extends(FGLoader, _super);
    function FGLoader() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(FGLoader, "freeList", {
        get: function () {
            if (FGLoader._freeList.length > 0) {
                FGLoader._freeList.length = 0;
            }
            var dict = FGLoader.freeDictForNum.__getDict();
            for (var url in dict) {
                // console.log(FGLoader.freeDictForNum.getValue(url) + " " + url);
                if (FGLoader.freeDictForNum.getValue(url) <= 0) {
                    FGLoader._freeList.push(url);
                }
            }
            return FGLoader._freeList;
        },
        enumerable: true,
        configurable: true
    });
    FGLoader.setUse = function (url) {
        var num = FGLoader.freeDictForNum.hasKey(url) ? FGLoader.freeDictForNum.getValue(url) + 1 : 1;
        FGLoader.freeDictForNum.add(url, num);
    };
    FGLoader.setFree = function (url) {
        if (url.indexOf("/MenuIcon/") != -1)
            return;
        FGLoader.freeDictForTime.add(url, Game.time.localTime);
        var num = FGLoader.freeDictForNum.hasKey(url) ? FGLoader.freeDictForNum.getValue(url) - 1 : 0;
        if (num < 0)
            num = 0;
        FGLoader.freeDictForNum.add(url, num);
    };
    FGLoader.removeFree = function (url) {
        FGLoader.freeDictForTime.remove(url);
        FGLoader.freeDictForNum.remove(url);
    };
    /**
     * 清理所有没有使用的
     */
    FGLoader.clearAllFree = function (list) {
        if (!list)
            list = FGLoader.freeList;
        while (list.length > 0) {
            var url = list.pop();
            // console.log("--ClearRes:" + url);
            FGLoader.removeFree(url);
            Laya.loader.clearRes(url);
        }
    };
    /**
     * 清理长时间没有使用的
     */
    FGLoader.clearFreeLong = function () {
        if (FGLoader.freeDictForNum.count <= gameDeviceConfig.fguiLoaderCacheNum)
            return;
        FGLoader._freeLongList.length = 0;
        var dict = FGLoader.freeDictForNum.__getDict();
        for (var url in dict) {
            // console.log(FGLoader.freeDictForNum.getValue(url) + " " + url);
            if (FGLoader.freeDictForNum.getValue(url) <= 0) {
                var time = Game.time.localTime - FGLoader.freeDictForTime.getValueOrDefault(url, 0);
                if (time > gameDeviceConfig.fguiLoaderCacheTime)
                    FGLoader._freeLongList.push(url);
            }
        }
        FGLoader.clearAllFree(FGLoader._freeLongList);
    };
    FGLoader.prototype.loadContent = function () {
        _super.prototype.loadContent.call(this);
    };
    FGLoader.prototype.getPackagenameByUrl = function (url) {
        return url.replace("ui://", "").split("/")[0];
    };
    FGLoader.prototype.loadFromPackage = function (itemURL) {
        // console.log("loadFromPackage:" + itemURL);
        var packageItem = fairygui.UIPackage.getItemByURL(itemURL);
        if (packageItem) {
            _super.prototype.loadFromPackage.call(this, itemURL);
        }
        else {
            var packagename = this.getPackagenameByUrl(itemURL);
            var config = Game.spriteRes.getconfig(packagename);
            if (!config) {
                config = Game.guiRes.getconfig(packagename);
            }
            if (config) {
                Game.asset.loadFgui(config, this, this.onLoadPackage);
            }
        }
    };
    FGLoader.prototype.onLoadPackage = function () {
        // console.log("onLoadPackage:" + this.url);
        _super.prototype.loadFromPackage.call(this, this.url);
    };
    FGLoader.prototype.loadExternal = function () {
        /*
        开始外部载入，地址在url属性
        载入完成后调用OnExternalLoadSuccess
        载入失败调用OnExternalLoadFailed
        注意：如果是外部载入，在载入结束后，调用OnExternalLoadSuccess或OnExternalLoadFailed前，
        比较严谨的做法是先检查url属性是否已经和这个载入的内容不相符。
        如果不相符，表示loader已经被修改了。
        这种情况下应该放弃调用OnExternalLoadSuccess或OnExternalLoadFailed。
        */
        // console.log("loadExternal:" + this.url);
        FGLoader.setUse(this.url);
        _super.prototype.loadExternal.call(this);
    };
    //释放外部载入的资源
    FGLoader.prototype.freeExternal = function (texture) {
        // console.log("freeExternal:" + this.url + "  " + texture.url);
        _super.prototype.freeExternal.call(this, texture);
        if (!isNullOrEmpty(texture.url)) {
            FGLoader.setFree(texture.url);
            texture.url = "";
        }
        // Laya.loader.clearRes(texture.url);
    };
    // 载入完成后调用
    FGLoader.prototype.onExternalLoadSuccess = function (texture) {
        // console.log("onExternalLoadSuccess:" + this.url);
        _super.prototype.onExternalLoadSuccess.call(this, texture);
    };
    // 载入失败调用
    FGLoader.prototype.onExternalLoadFailed = function () {
        _super.prototype.onExternalLoadFailed.call(this);
    };
    // 最后一次没有设置引用的时间
    FGLoader.freeDictForTime = new Dictionary();
    // 引用次数
    FGLoader.freeDictForNum = new Dictionary();
    FGLoader._freeList = [];
    FGLoader._freeLongList = [];
    return FGLoader;
}(fairygui.GLoader));
//# sourceMappingURL=FGLoader.js.map
var configs;
(function (configs) {
    var BaseConfig = /** @class */ (function () {
        function BaseConfig() {
        }
        return BaseConfig;
    }());
    configs.BaseConfig = BaseConfig;
})(configs || (configs = {}));
//# sourceMappingURL=BaseConfig.js.map
//# sourceMappingURL=ConfigLoaderInterface.js.map
//# sourceMappingURL=ConfigRenderInterface.js.map
var configs;
(function (configs) {
    var BaseConfigRender = /** @class */ (function () {
        function BaseConfigRender() {
            // 配置字典
            this.configs = new Dictionary();
        }
        // 获取配置列表
        BaseConfigRender.prototype.getConfigList = function () {
            return this.configs.getValues();
        };
        Object.defineProperty(BaseConfigRender.prototype, "configList", {
            // 配置列表
            get: function () {
                return this.configs.getValues();
            },
            enumerable: true,
            configurable: true
        });
        // 获取配置
        BaseConfigRender.prototype.getConfig = function (id) {
            if (!this.configs.hasKey(id)) {
                console.log(this.tableName + " \u6CA1\u6709 id=" + id + " \u7684\u914D\u7F6E");
            }
            return this.configs.getValue(id);
        };
        // 添加配置
        BaseConfigRender.prototype.addConfig = function (config) {
            this.configs.add(config.id, config);
        };
        // 获取配置文件路径        
        BaseConfigRender.prototype.getConfigPath = function () {
            return "config/csv/" + this.tableName + ".csv";
        };
        // 加载配置
        BaseConfigRender.prototype.load = function (configLoader, onComplete) {
        };
        // 重新加载配置
        BaseConfigRender.prototype.reload = function (configLoader, onComplete) {
        };
        // 游戏加载完所有
        BaseConfigRender.prototype.onGameLoadedAll = function () {
        };
        // 清理
        BaseConfigRender.prototype.clear = function () {
            this.configs.clear();
        };
        return BaseConfigRender;
    }());
    configs.BaseConfigRender = BaseConfigRender;
})(configs || (configs = {}));
//# sourceMappingURL=BaseConfigRender.js.map

var configs;
(function (configs) {
    var CsvConfigRender = /** @class */ (function (_super) {
        __extends(CsvConfigRender, _super);
        function CsvConfigRender() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            // 单元格分隔符
            _this.csvDelimiter = "\t";
            // 单元格分隔符 替换
            _this.csvSeparatorReplace = null;
            // 行分隔符 替换
            _this.csvLineSeparatorReplace = "|n|";
            // 表头--类型
            _this.headTypes = new Dictionary();
            // 表头--索引
            _this.headKeyEns = new Dictionary();
            // 表头--字段
            _this.headKeyFields = new Dictionary();
            // 表头--中文
            _this.headKeyCns = new Dictionary();
            return _this;
        }
        // 替换分割符
        CsvConfigRender.prototype.ReplaceSpearator = function (txt) {
            if (this.tableName == "TextFgui" && txt.indexOf(this.csvLineSeparatorReplace) != -1) {
                var a = 1;
            }
            txt = txt.replace(/\|n\|/g, "\n");
            // if (!isNullOrEmpty(this.csvSeparatorReplace))
            // {
            //     txt = txt.replaceAll(this.csvSeparatorReplace, this.csvDelimiter);
            // }
            txt = txt.replace(/\r/g, "");
            return txt;
        };
        // 加载配置
        CsvConfigRender.prototype.load = function (configLoader, onComplete) {
            var _this = this;
            configLoader.loadConfig(this.getConfigPath(), function (txt, path) {
                _this.parse(txt);
                // console.log(`配置 ${this.path} 加载完成`);
                if (onComplete) {
                    onComplete(_this);
                }
                configLoader.unloadConfig(_this.getConfigPath());
            });
        };
        // 重新加载配置
        CsvConfigRender.prototype.reload = function (configLoader, onComplete) {
            this.clear();
            this.load(configLoader, onComplete);
        };
        // 清理
        CsvConfigRender.prototype.clear = function () {
            this.headTypes.clear();
            this.headKeyEns.clear();
            this.headKeyFields.clear();
            this.headKeyCns.clear();
            _super.prototype.clear.call(this);
        };
        CsvConfigRender.prototype.parse = function (txt) {
            if (txt == null) {
                console.error(this.tableName + ": txt=" + txt);
                return;
            }
            var lines = txt.split('\n');
            var line;
            var csv;
            line = lines[0];
            csv = line.split(this.csvDelimiter);
            this.ParseHeadTypes(csv);
            line = lines[1];
            csv = line.split(this.csvDelimiter);
            this.ParseHeadKeyCN(csv);
            line = lines[2];
            csv = line.split(this.csvDelimiter);
            this.ParseHeadKeyEN(csv);
            for (var i = 3; i < lines.length; i++) {
                line = lines[i];
                if (isNullOrEmpty(line))
                    continue;
                csv = line.split(this.csvDelimiter);
                for (var j = 0; j < csv.length; j++) {
                    csv[j] = this.ReplaceSpearator(csv[j]);
                }
                this.ParseCsv(csv);
            }
        };
        CsvConfigRender.prototype.ParseHeadTypes = function (csv) {
            var key;
            for (var i = 0; i < csv.length; i++) {
                key = csv[i];
                if (!isNullOrEmpty(key)) {
                    key = key.trim();
                    this.headTypes.add(i, key);
                }
            }
        };
        CsvConfigRender.prototype.ParseHeadKeyCN = function (csv) {
            var key;
            for (var i = 0; i < csv.length; i++) {
                key = this.ReplaceSpearator(csv[i]);
                if (!isNullOrEmpty(key)) {
                    key = key.trim();
                    this.headKeyCns.add(i, key);
                }
            }
        };
        CsvConfigRender.prototype.ParseHeadKeyEN = function (csv) {
            Laya.Dictionary;
            var key;
            for (var i = 0; i < csv.length; i++) {
                key = csv[i];
                if (!isNullOrEmpty(key)) {
                    key = key.trim();
                    if (this.headKeyEns.hasKey(key)) {
                        console.error(this.tableName + ": ParseHeadKeyEN \u5DF2\u7ECF\u5B58\u5728key= " + key + ",  i = " + i);
                    }
                    this.headKeyEns.add(key, i);
                    this.headKeyFields.add(i, key);
                }
            }
        };
        CsvConfigRender.prototype.ParseCsv = function (csv) {
        };
        CsvConfigRender.prototype.GetHeadType = function (index) {
            return this.headTypes.getValue(index);
        };
        CsvConfigRender.prototype.GetHeadField = function (index) {
            return this.headKeyFields.getValue(index);
        };
        CsvConfigRender.prototype.GetHeadIndex = function (enName) {
            if (this.headKeyEns.hasKey(enName)) {
                return this.headKeyEns.getValue(enName);
            }
            console.error(this.tableName + ": headKeyEns[" + enName + "] = -1");
            return -1;
        };
        /** 游戏所有配置加载完成 */
        CsvConfigRender.prototype.onGameLoadedAll = function () {
        };
        return CsvConfigRender;
    }(configs.BaseConfigRender));
    configs.CsvConfigRender = CsvConfigRender;
})(configs || (configs = {}));
//# sourceMappingURL=CsvConfigRender.js.map
var Games;
(function (Games) {
    var MeetingResultType;
    (function (MeetingResultType) {
        MeetingResultType[MeetingResultType["Win"] = 1] = "Win";
        MeetingResultType[MeetingResultType["Draw"] = 2] = "Draw";
        MeetingResultType[MeetingResultType["FailHalf"] = 3] = "FailHalf";
        MeetingResultType[MeetingResultType["FailAll"] = 4] = "FailAll";
    })(MeetingResultType = Games.MeetingResultType || (Games.MeetingResultType = {}));
    var MeetingRewardType;
    (function (MeetingRewardType) {
        MeetingRewardType[MeetingRewardType["Receive"] = 0] = "Receive";
        MeetingRewardType[MeetingRewardType["Refuse"] = 1] = "Refuse"; //拒绝
    })(MeetingRewardType = Games.MeetingRewardType || (Games.MeetingRewardType = {}));
    var MeetingMarkUpType;
    (function (MeetingMarkUpType) {
        MeetingMarkUpType[MeetingMarkUpType["Half"] = 1] = "Half";
        MeetingMarkUpType[MeetingMarkUpType["Double"] = 2] = "Double"; //两倍
    })(MeetingMarkUpType = Games.MeetingMarkUpType || (Games.MeetingMarkUpType = {}));
    var MeetingPanelType;
    (function (MeetingPanelType) {
        MeetingPanelType[MeetingPanelType["None"] = 0] = "None";
        MeetingPanelType[MeetingPanelType["Start"] = 1] = "Start";
        MeetingPanelType[MeetingPanelType["AskPirce"] = 2] = "AskPirce";
        MeetingPanelType[MeetingPanelType["Game"] = 3] = "Game";
        MeetingPanelType[MeetingPanelType["Result"] = 4] = "Result";
    })(MeetingPanelType = Games.MeetingPanelType || (Games.MeetingPanelType = {}));
})(Games || (Games = {}));
//# sourceMappingURL=MeetingPanelType.js.map

var configs;
(function (configs) {
    var LangConfig = /** @class */ (function (_super) {
        __extends(LangConfig, _super);
        function LangConfig() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.dict = new Dictionary();
            return _this;
        }
        return LangConfig;
    }(configs.BaseConfig));
    configs.LangConfig = LangConfig;
})(configs || (configs = {}));
//# sourceMappingURL=LangConfig.js.map

var configs;
(function (configs) {
    /** 多语言配置读取器 */
    var LangConfigReader = /** @class */ (function (_super) {
        __extends(LangConfigReader, _super);
        function LangConfigReader(tableName) {
            var _this = _super.call(this) || this;
            // 语言
            _this.lang = "zh_cn";
            _this.tableName = tableName;
            return _this;
        }
        // 获取配置文件路径        
        LangConfigReader.prototype.getConfigPath = function () {
            return "config/lang/" + this.lang + "/" + this.tableName + ".csv";
        };
        Object.defineProperty(LangConfigReader.prototype, "headKeyFieldList", {
            get: function () {
                if (!this._headKeyFieldList) {
                    this._headKeyFieldList = this.headKeyFields.getValues();
                }
                return this._headKeyFieldList;
            },
            enumerable: true,
            configurable: true
        });
        LangConfigReader.prototype.ParseCsv = function (csv) {
            var config = new configs.LangConfig();
            config.id = csvGetInt(csv, this.GetHeadIndex("id"));
            var fieldList = this.headKeyFieldList;
            for (var i = 0; i < fieldList.length; i++) {
                var txt = csvGetString(csv, this.GetHeadIndex(fieldList[i]));
                var headType = this.GetHeadType(i);
                switch (headType) {
                    case configs.ConfigFieldType.MStringArray:
                        config.dict.add(fieldList[i], toStringArray(txt));
                        break;
                    default:
                        config.dict.add(fieldList[i], txt);
                        break;
                }
            }
            this.addConfig(config);
        };
        return LangConfigReader;
    }(configs.CsvConfigRender));
    configs.LangConfigReader = LangConfigReader;
})(configs || (configs = {}));
//# sourceMappingURL=LangConfigReader.js.map
/////////////////////////////////////
// ihaiu.Language生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////
var configs;
(function (configs) {
    /// 配置读取器列表
    var LangConfigLoaderList = /** @class */ (function () {
        function LangConfigLoaderList() {
            this.lang = "zh_cn";
            // 读取器列表
            this.renders = [];
            this.activities = new configs.LangConfigReader("Activities");
            this.actor = new configs.LangConfigReader("Actor");
            this.actorAide = new configs.LangConfigReader("ActorAide");
            this.actorAssets = new configs.LangConfigReader("ActorAssets");
            this.actorLevel = new configs.LangConfigReader("ActorLevel");
            this.actorLoyalty = new configs.LangConfigReader("ActorLoyalty");
            this.actorTrain = new configs.LangConfigReader("ActorTrain");
            this.avatar = new configs.LangConfigReader("Avatar");
            this.blockLevel = new configs.LangConfigReader("BlockLevel");
            this.boxTarget = new configs.LangConfigReader("BoxTarget");
            this.buildingEffect = new configs.LangConfigReader("BuildingEffect");
            this.buildingLevel = new configs.LangConfigReader("BuildingLevel");
            this.business = new configs.LangConfigReader("Business");
            this.cinema = new configs.LangConfigReader("Cinema");
            this.city = new configs.LangConfigReader("City");
            this.cityPopularize = new configs.LangConfigReader("CityPopularize");
            this.country = new configs.LangConfigReader("Country");
            this.cupPackage = new configs.LangConfigReader("CupPackage");
            this.dailySignTrailer = new configs.LangConfigReader("DailySignTrailer");
            this.dialogue = new configs.LangConfigReader("Dialogue");
            this.floor = new configs.LangConfigReader("Floor");
            this.gameLevel = new configs.LangConfigReader("GameLevel");
            this.gameRandomName = new configs.LangConfigReader("GameRandomName");
            this.guidesystem = new configs.LangConfigReader("Guidesystem");
            this.headPortrait = new configs.LangConfigReader("HeadPortrait");
            this.item = new configs.LangConfigReader("Item");
            this.levelGiftPackage = new configs.LangConfigReader("LevelGiftPackage");
            this.mail = new configs.LangConfigReader("Mail");
            this.maintask = new configs.LangConfigReader("Maintask");
            this.meetingGame = new configs.LangConfigReader("MeetingGame");
            this.menu = new configs.LangConfigReader("Menu");
            this.monthCard = new configs.LangConfigReader("MonthCard");
            this.movieAdaptationMsg = new configs.LangConfigReader("MovieAdaptationMsg");
            this.movieAudienceEvaluation = new configs.LangConfigReader("MovieAudienceEvaluation");
            this.movieDrop = new configs.LangConfigReader("MovieDrop");
            this.movieExpect = new configs.LangConfigReader("MovieExpect");
            this.movieMediaVisit = new configs.LangConfigReader("MovieMediaVisit");
            this.movieMidiaEvaluation = new configs.LangConfigReader("MovieMidiaEvaluation");
            this.movieMidiaEvaluationMsg = new configs.LangConfigReader("MovieMidiaEvaluationMsg");
            this.movieShootType = new configs.LangConfigReader("MovieShootType");
            this.msg = new configs.LangConfigReader("Msg");
            this.msgChat = new configs.LangConfigReader("MsgChat");
            this.msgProtoError = new configs.LangConfigReader("MsgProtoError");
            this.npc = new configs.LangConfigReader("Npc");
            this.operationTasks = new configs.LangConfigReader("OperationTasks");
            this.order = new configs.LangConfigReader("Order");
            this.oscar = new configs.LangConfigReader("Oscar");
            this.produce = new configs.LangConfigReader("Produce");
            this.property = new configs.LangConfigReader("Property");
            this.recharge = new configs.LangConfigReader("Recharge");
            this.secretary = new configs.LangConfigReader("Secretary");
            this.secretaryText = new configs.LangConfigReader("SecretaryText");
            this.secretaryType = new configs.LangConfigReader("SecretaryType");
            this.settingDefault = new configs.LangConfigReader("SettingDefault");
            this.shop = new configs.LangConfigReader("Shop");
            this.skill = new configs.LangConfigReader("Skill");
            this.skillEffect = new configs.LangConfigReader("SkillEffect");
            this.skillTrigger = new configs.LangConfigReader("SkillTrigger");
            this.speak = new configs.LangConfigReader("Speak");
            this.story = new configs.LangConfigReader("Story");
            this.storyCharacters = new configs.LangConfigReader("StoryCharacters");
            this.storyline = new configs.LangConfigReader("Storyline");
            this.storyStackSort = new configs.LangConfigReader("StoryStackSort");
            this.street = new configs.LangConfigReader("Street");
            this.task = new configs.LangConfigReader("Task");
            this.textCode = new configs.LangConfigReader("TextCode");
            this.textFgui = new configs.LangConfigReader("TextFgui");
            this.unlock = new configs.LangConfigReader("Unlock");
            this.visit = new configs.LangConfigReader("Visit");
            this.weeklyQuest = new configs.LangConfigReader("WeeklyQuest");
            this.welfare = new configs.LangConfigReader("Welfare");
            this.writer = new configs.LangConfigReader("Writer");
            this.writerAdaptEffect = new configs.LangConfigReader("WriterAdaptEffect");
            this.writerLevel = new configs.LangConfigReader("WriterLevel");
        }
        // 初始化读取器列表
        LangConfigLoaderList.prototype.initList = function () {
            this.renders.push(this.activities);
            this.renders.push(this.actor);
            this.renders.push(this.actorAide);
            this.renders.push(this.actorAssets);
            this.renders.push(this.actorLevel);
            this.renders.push(this.actorLoyalty);
            this.renders.push(this.actorTrain);
            this.renders.push(this.avatar);
            this.renders.push(this.blockLevel);
            this.renders.push(this.boxTarget);
            this.renders.push(this.buildingEffect);
            this.renders.push(this.buildingLevel);
            this.renders.push(this.business);
            this.renders.push(this.cinema);
            this.renders.push(this.city);
            this.renders.push(this.cityPopularize);
            this.renders.push(this.country);
            this.renders.push(this.cupPackage);
            this.renders.push(this.dailySignTrailer);
            this.renders.push(this.dialogue);
            this.renders.push(this.floor);
            this.renders.push(this.gameLevel);
            this.renders.push(this.gameRandomName);
            this.renders.push(this.guidesystem);
            this.renders.push(this.headPortrait);
            this.renders.push(this.item);
            this.renders.push(this.levelGiftPackage);
            this.renders.push(this.mail);
            this.renders.push(this.maintask);
            this.renders.push(this.meetingGame);
            this.renders.push(this.menu);
            this.renders.push(this.monthCard);
            this.renders.push(this.movieAdaptationMsg);
            this.renders.push(this.movieAudienceEvaluation);
            this.renders.push(this.movieDrop);
            this.renders.push(this.movieExpect);
            this.renders.push(this.movieMediaVisit);
            this.renders.push(this.movieMidiaEvaluation);
            this.renders.push(this.movieMidiaEvaluationMsg);
            this.renders.push(this.movieShootType);
            this.renders.push(this.msg);
            this.renders.push(this.msgChat);
            this.renders.push(this.msgProtoError);
            this.renders.push(this.npc);
            this.renders.push(this.operationTasks);
            this.renders.push(this.order);
            this.renders.push(this.oscar);
            this.renders.push(this.produce);
            this.renders.push(this.property);
            this.renders.push(this.recharge);
            this.renders.push(this.secretary);
            this.renders.push(this.secretaryText);
            this.renders.push(this.secretaryType);
            this.renders.push(this.settingDefault);
            this.renders.push(this.shop);
            this.renders.push(this.skill);
            this.renders.push(this.skillEffect);
            this.renders.push(this.skillTrigger);
            this.renders.push(this.speak);
            this.renders.push(this.story);
            this.renders.push(this.storyCharacters);
            this.renders.push(this.storyline);
            this.renders.push(this.storyStackSort);
            this.renders.push(this.street);
            this.renders.push(this.task);
            this.renders.push(this.textCode);
            this.renders.push(this.textFgui);
            this.renders.push(this.unlock);
            this.renders.push(this.visit);
            this.renders.push(this.weeklyQuest);
            this.renders.push(this.welfare);
            this.renders.push(this.writer);
            this.renders.push(this.writerAdaptEffect);
            this.renders.push(this.writerLevel);
        };
        return LangConfigLoaderList;
    }());
    configs.LangConfigLoaderList = LangConfigLoaderList;
})(configs || (configs = {}));
//# sourceMappingURL=LangConfigLoaderList.js.map

var configs;
(function (configs) {
    /// 配置读取器列表
    var LangConfigLoader = /** @class */ (function (_super) {
        __extends(LangConfigLoader, _super);
        function LangConfigLoader() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            // 消息--加载进度
            _this.sLoadProgress = new TypedSignal();
            // 消息--加载完成
            _this.sLoaded = new Signal();
            // 加载进度
            _this.loadProgress = 0;
            // 是否已经加载完成
            _this.isLoadCompleted = false;
            _this.textRenders = [];
            // 消息--加载完成
            _this.sTextLoaded = new Signal();
            return _this;
        }
        // 加载所有
        LangConfigLoader.prototype.loadAll = function () {
            // if (this.renders.indexOf(this.textCode) != -1)
            // {
            // 	this.renders.slice(this.renders.indexOf(this.textCode), 1);
            // 	this.renders.slice(this.renders.indexOf(this.textFgui), 1);
            // }
            var _this = this;
            this.loadProgress = 0;
            var count = this.renders.length;
            var loadedNum = 0;
            var onItemLoaded = function () {
                loadedNum++;
                _this.loadProgress = loadedNum / count;
                _this.sLoadProgress.dispatch(_this.loadProgress);
                gameLaunchLoding.onLoadedLangConfig(loadedNum, count);
                if (loadedNum >= count) {
                    _this.onGameLoadedAll();
                }
            };
            for (var i = 0; i < this.renders.length; i++) {
                this.renders[i].lang = this.lang;
                this.renders[i].load(this.configLoader, onItemLoaded);
            }
        };
        // 加载完成所有
        LangConfigLoader.prototype.onGameLoadedAll = function () {
            for (var i = 0; i < this.renders.length; i++) {
                this.renders[i].onGameLoadedAll();
            }
            // 设置代码文本	
            this.setCodeTEXT();
            // 设置fgui文本
            FguiHelper.setStringsSource(this.textFgui);
            this.isLoadCompleted = true;
            this.sLoaded.dispatch();
        };
        LangConfigLoader.prototype.loadText = function () {
            var _this = this;
            var renders = this.textRenders;
            if (renders.length == 0) {
                renders.push(this.textCode);
                renders.push(this.textFgui);
            }
            this.loadProgress = 0;
            var count = renders.length;
            var loadedNum = 0;
            var onItemLoaded = function () {
                loadedNum++;
                if (loadedNum >= count) {
                    _this.onLoadTextComplte();
                }
            };
            for (var i = 0; i < renders.length; i++) {
                renders[i].lang = this.lang;
                renders[i].load(this.configLoader, onItemLoaded);
            }
        };
        // 加载完成TEXT
        LangConfigLoader.prototype.onLoadTextComplte = function () {
            var renders = this.textRenders;
            for (var i = 0; i < renders.length; i++) {
                renders[i].onGameLoadedAll();
            }
            // 设置代码文本	
            this.setCodeTEXT();
            // 设置fgui文本
            FguiHelper.setStringsSource(this.textFgui);
            this.sTextLoaded.dispatch();
        };
        // 设置代码文本		
        LangConfigLoader.prototype.setCodeTEXT = function () {
            if (!this._srcTEXT && TEXT) {
                this._srcTEXT = new Dictionary();
                for (var key in TEXT) {
                    this._srcTEXT.add(key, TEXT[key]);
                }
            }
            var list = this.textCode.getConfigList();
            for (var i = 0; i < list.length; i++) {
                var item = list[i];
                var key = item.dict.getValue("key");
                var value = item.dict.getValue("value");
                if (!isNullOrEmpty(value)) {
                    TEXT[key] = value;
                }
            }
        };
        return LangConfigLoader;
    }(configs.LangConfigLoaderList));
    configs.LangConfigLoader = LangConfigLoader;
})(configs || (configs = {}));
//# sourceMappingURL=LangConfigLoader.js.map
var LangType = /** @class */ (function () {
    function LangType() {
    }
    LangType.toLang = function (httpLang) {
        httpLang = httpLang.replace("-", "_").toLowerCase();
        if (httpLang.indexOf("en") != -1)
            httpLang = LangType.en;
        if (window["Game"]) {
            if (!Game.config.languageType.getConfigByValue(httpLang)) {
                httpLang = LangType.en;
            }
        }
        else {
            var has = false;
            for (var v in LangType) {
                if (v == httpLang) {
                    has = true;
                    break;
                }
            }
            if (!has) {
                httpLang = LangType.en;
            }
        }
        return httpLang;
    };
    LangType.zh_cn = "zh_cn";
    LangType.zh_tw = "zh_tw";
    LangType.en = "en";
    return LangType;
}());
var LangConfigLoader = configs.LangConfigLoader;
var LangConfigReader = configs.LangConfigReader;
var LangConfig = configs.LangConfig;
/** 多语言配置管理器 */
var LangManager = /** @class */ (function () {
    function LangManager() {
        this._lang = null;
        this.langListDict = new Dictionary();
    }
    Object.defineProperty(LangManager, "Instance", {
        get: function () {
            if (!LangManager._Instance) {
                LangManager._Instance = new LangManager();
            }
            return LangManager._Instance;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LangManager.prototype, "httpLang", {
        get: function () {
            if (!this._httpLang) {
                this.httpLang = this.lang;
            }
            return this._httpLang;
        },
        set: function (value) {
            value = value.replace("_", "-");
            if (value.indexOf("-")) {
                var arr = value.split("-");
                for (var i = 1; i < arr.length; i++) {
                    arr[i] = arr[i].toUpperCase();
                }
                value = arr.join("-");
            }
            this._httpLang = value;
            if (window["frame"] && window["frame"]["comm"] && window["frame"]["comm"]["HttpComm"])
                frame.comm.HttpComm.SetHeader("accept-language", value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LangManager.prototype, "lang", {
        get: function () {
            if (!this._lang) {
                if (Games.GameLocalStorage.Instance.hasItem("_lang", true)) {
                    this._lang = Games.GameLocalStorage.Instance.getString("_lang", true);
                }
                else {
                    // let lang = navigator.language;
                    // if (!lang)
                    // {
                    // 	lang = navigator["browserLanguage"];
                    // }
                    // lang = LangType.toLang(lang);
                    // this._lang = lang;
                    this._lang = LangType.en;
                }
                this.httpLang = this._lang;
            }
            return this._lang;
        },
        set: function (value) {
            this._lang = value;
            this.httpLang = value;
            Games.GameLocalStorage.Instance.setString("_lang", value, true);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LangManager.prototype, "current", {
        get: function () {
            if (this._current) {
                return this._current;
            }
            if (!this.langListDict.hasKey(this.lang)) {
                var langList = new configs.LangConfigLoader();
                langList.lang = this.lang;
                this.langListDict.add(langList.lang, langList);
                this._current = langList;
            }
            return this.langListDict.getValue(this.lang);
        },
        enumerable: true,
        configurable: true
    });
    LangManager.prototype.getValue = function (tableName, id, fieldName) {
        var langReader = this.current[tableName];
        if (langReader) {
            var config = langReader.getConfig(id);
            if (config) {
                return config.dict.getValue(fieldName);
            }
        }
        return null;
    };
    return LangManager;
}());
//# sourceMappingURL=LangManager.js.map
var TrailerTime = /** @class */ (function () {
    function TrailerTime() {
        this.count = 0;
        this.displayIndex = -1;
        this.renderClasses = null;
        this.autoStart = true;
        this.maxCount = 1;
    }
    TrailerTime.prototype.start = function (targetOrItemId, startPos, endPos, duration, parent, displayIndex, renderClasses, autoStart, maxCount) {
        if (displayIndex === void 0) { displayIndex = -1; }
        if (renderClasses === void 0) { renderClasses = null; }
        if (autoStart === void 0) { autoStart = true; }
        if (maxCount === void 0) { maxCount = 1; }
        this.count = 0;
        this.targetOrItemId = targetOrItemId;
        this.startPos = startPos;
        this.endPos = endPos;
        this.duration = duration;
        this.parent = parent;
        this.displayIndex = displayIndex;
        this.renderClasses = renderClasses;
        this.autoStart = autoStart;
        this.maxCount = maxCount;
        Laya.timer.loop(50, this, this.onTimeLoop, null, true, true);
    };
    TrailerTime.prototype.onTimeLoop = function () {
        this.count++;
        if (this.count > this.maxCount) {
            Laya.timer.clear(this, this.onTimeLoop);
            return;
        }
        FguiHelper.startTrailSingle(this.targetOrItemId, this.startPos, this.endPos, this.duration, this.parent, this.displayIndex, this.renderClasses, this.autoStart);
    };
    return TrailerTime;
}());
var FguiHelper = /** @class */ (function () {
    function FguiHelper() {
    }
    FguiHelper.setStringsSource = function (lang) {
        //let txtmap = fairygui.UIPackage["_stringsSource"] = {};
        var txtmap = fairygui.TranslationHelper["strings"] = {};
        var list = lang.getConfigList();
        for (var i = 0; i < list.length; i++) {
            var config = list[i];
            var name_1 = config.dict.getValue("name");
            var value = config.dict.getValue("value");
            var index = name_1.indexOf("-");
            if (value === undefined || value === null)
                continue;
            if (index == -1)
                continue;
            var uiUrl = name_1.substr(0, index);
            var uiNodeName = name_1.substr(index + 1);
            var col = txtmap[uiUrl];
            if (!col) {
                col = {};
                txtmap[uiUrl] = col;
            }
            col[uiNodeName] = value;
        }
    };
    FguiHelper.setGray = function (component) {
        if (!component)
            return;
        if (!FguiHelper.grayscaleFilters) {
            var grayscaleFilter = new Laya.ColorFilter(FguiHelper.grayscaleMat);
            FguiHelper.grayscaleFilters = [grayscaleFilter];
        }
        component.displayObject.filters = FguiHelper.grayscaleFilters;
    };
    FguiHelper.clearFilters = function (component) {
        if (!component)
            return;
        component.displayObject.filters = null;
    };
    Object.defineProperty(FguiHelper, "saturationFilters", {
        get: function () {
            if (!FguiHelper._saturationFilters) {
                FguiHelper._saturationFilters = [new Laya.ColorFilter(FguiHelper.saturation)];
            }
            return FguiHelper._saturationFilters;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FguiHelper, "saturationFilters2", {
        get: function () {
            if (!FguiHelper._saturationFilters2) {
                FguiHelper._saturationFilters2 = [new Laya.ColorFilter(FguiHelper.saturation2)];
            }
            return FguiHelper._saturationFilters2;
        },
        enumerable: true,
        configurable: true
    });
    FguiHelper.halfStaturation = function (obj) {
        if (!obj)
            return;
        obj.displayObject.filters = FguiHelper.saturationFilters;
    };
    FguiHelper.half2Staturation = function (obj) {
        if (!obj)
            return;
        obj.displayObject.filters = FguiHelper.saturationFilters2;
    };
    //组件弹出效果
    FguiHelper.boundEffect = function (target, duration) {
        if (duration === void 0) { duration = 1000; }
        target.setPivot(0.5, 0.5);
        target.setScale(0.5, 0.5);
        Laya.Tween.to(target, { scaleX: 1, scaleY: 1 }, duration, Laya.Ease.backOut, Handler.create(null, function () {
        }), 0, true, true);
    };
    /**
     * 效果 拖尾Wrapper
     * @param targetOrItemId
     * @param startPos
     * @param endPos
     * @param duration
     * @param parent
     * @param displayIndex
     * @param renderClasses
     * @param autoStart
     * @param startCount 发射数量，默认5次
     */
    FguiHelper.startTrail = function (targetOrItemId, startPos, endPos, duration, parent, displayIndex, renderClasses, autoStart, startCount) {
        if (displayIndex === void 0) { displayIndex = -1; }
        if (renderClasses === void 0) { renderClasses = null; }
        if (autoStart === void 0) { autoStart = true; }
        if (startCount === void 0) { startCount = 5; }
        var trailerTime = new TrailerTime();
        startCount = gameDeviceConfig.trailNum; //根据机型高低配置读取
        trailerTime.start(targetOrItemId, startPos, endPos, duration, parent, displayIndex, renderClasses, autoStart, startCount);
    };
    /**
     * 效果-拖尾单次
     * @param target 目标对象 | 物品id
     * @param startPos 开始位置
     * @param endPos 结束位置
     * @param parent 显示容器
     * @param displayIndex 显示层级
     * @param renderClasses fgui渲染类列表
     * @param autoStart 是否自动播放
     */
    FguiHelper.startTrailSingle = function (targetOrItemId, startPos, endPos, duration, parent, displayIndex, renderClasses, autoStart) {
        if (displayIndex === void 0) { displayIndex = -1; }
        if (renderClasses === void 0) { renderClasses = null; }
        if (autoStart === void 0) { autoStart = true; }
        if (!renderClasses) {
            renderClasses = [
                fgui.Fx.TrailerStar1,
                fgui.Fx.TrailerStar3,
            ];
        }
        var emitter = Game.Fx.creatTrail(renderClasses, parent, displayIndex, startPos.x, startPos.y, autoStart);
        var target = null;
        if (isNumber(targetOrItemId)) {
            target = fgui.Common.SplashAssetItem.createInstance();
            target["itemId"] = Number(targetOrItemId);
        }
        else {
            target = targetOrItemId;
        }
        if (target != null) {
            target.setPivot(0.5, 0.5);
            target.x = -target.width / 2;
            target.y = -target.height / 2;
            emitter.addChild(target.displayObject);
        }
        Laya.Tween.to(emitter, { x: endPos.x, y: endPos.y }, duration, Laya.Ease.linearIn, Handler.create(null, function (emitterTarget) {
            Game.pool.trailPool.recover(emitterTarget);
        }, [emitter]), 0, true, true);
    };
    //设置灰色
    FguiHelper.grayscaleMat = [0.3086, 0.6094, 0.0820, 0, 0, 0.3086, 0.6094, 0.0820, 0, 0, 0.3086, 0.6094, 0.0820, 0, 0, 0, 0, 0, 1, 0];
    FguiHelper.grayscaleFilters = null;
    FguiHelper.normalFilters = null;
    // 饱和度一半
    FguiHelper.saturation = [
        0.5, 0, 0, 0, 0,
        0, 0.5, 0, 0, 0,
        0, 0, 0.5, 0, 0,
        0, 0, 0, 1, 0,
    ];
    // 饱和度一半
    FguiHelper.saturation2 = [
        0.25, 0, 0, 0, 0,
        0, 0.25, 0, 0, 0,
        0, 0, 0.25, 0, 0,
        0, 0, 0, 1, 0,
    ];
    return FguiHelper;
}());
//# sourceMappingURL=FguiHelper.js.map
var Games;
(function (Games) {
    //======================
    // 游戏本地数据缓存
    //----------------------
    var LocalStorage = /** @class */ (function () {
        function LocalStorage() {
        }
        Object.defineProperty(LocalStorage.prototype, "username", {
            get: function () {
                if (!this._username) {
                    this._username = this.getString("username", true);
                }
                return this._username;
            },
            set: function (value) {
                this._username = value;
                this.setString("username", value, true);
                Game.sound.onLogin();
            },
            enumerable: true,
            configurable: true
        });
        LocalStorage.prototype.getKey = function (key, isGobal) {
            if (isGobal === void 0) { isGobal = false; }
            if (isGobal) {
                return key;
            }
            else {
                return this.username + "_" + key;
            }
        };
        // string
        LocalStorage.prototype.setItem = function (key, value, isGobal) {
            if (isGobal === void 0) { isGobal = false; }
            Laya.LocalStorage.setItem(this.getKey(key, isGobal), value);
        };
        LocalStorage.prototype.getItem = function (key, isGobal) {
            if (isGobal === void 0) { isGobal = false; }
            return Laya.LocalStorage.getItem(this.getKey(key, isGobal));
        };
        // string
        LocalStorage.prototype.setString = function (key, value, isGobal) {
            if (isGobal === void 0) { isGobal = false; }
            Laya.LocalStorage.setItem(this.getKey(key, isGobal), value);
        };
        LocalStorage.prototype.getString = function (key, isGobal) {
            if (isGobal === void 0) { isGobal = false; }
            var val = Laya.LocalStorage.getItem(this.getKey(key, isGobal));
            if (val === undefined || val === null) {
                val = "";
            }
            return val;
        };
        // boolean
        LocalStorage.prototype.setBoolean = function (key, value, isGobal) {
            if (isGobal === void 0) { isGobal = false; }
            Laya.LocalStorage.setItem(this.getKey(key, isGobal), value ? "true" : "false");
        };
        LocalStorage.prototype.getBoolean = function (key, isGobal) {
            if (isGobal === void 0) { isGobal = false; }
            return Laya.LocalStorage.getItem(this.getKey(key, isGobal)) == "true";
        };
        // int
        LocalStorage.prototype.setInt = function (key, value, isGobal) {
            if (isGobal === void 0) { isGobal = false; }
            Laya.LocalStorage.setItem(this.getKey(key, isGobal), value.toString());
        };
        LocalStorage.prototype.getInt = function (key, isGobal) {
            if (isGobal === void 0) { isGobal = false; }
            var val = Laya.LocalStorage.getItem(this.getKey(key, isGobal));
            if (val) {
                return parseInt(val);
            }
            return 0;
        };
        // float
        LocalStorage.prototype.setFloat = function (key, value, isGobal) {
            if (isGobal === void 0) { isGobal = false; }
            Laya.LocalStorage.setItem(this.getKey(key, isGobal), value.toString());
        };
        LocalStorage.prototype.getFloat = function (key, isGobal) {
            if (isGobal === void 0) { isGobal = false; }
            var val = Laya.LocalStorage.getItem(this.getKey(key, isGobal));
            if (val) {
                return parseFloat(val);
            }
            return 0;
        };
        LocalStorage.prototype.setJSON = function (key, value, isGobal) {
            if (isGobal === void 0) { isGobal = false; }
            Laya.LocalStorage.setJSON(this.getKey(key, isGobal), value);
        };
        LocalStorage.prototype.getJSON = function (key, isGobal) {
            if (isGobal === void 0) { isGobal = false; }
            return Laya.LocalStorage.getJSON(this.getKey(key, isGobal));
        };
        LocalStorage.prototype.removeItem = function (key, isGobal) {
            if (isGobal === void 0) { isGobal = false; }
            return Laya.LocalStorage.removeItem(this.getKey(key, isGobal));
        };
        LocalStorage.prototype.hasItem = function (key, isGobal) {
            if (isGobal === void 0) { isGobal = false; }
            return Laya.LocalStorage.getItem(this.getKey(key, isGobal)) !== null;
        };
        LocalStorage.prototype.clear = function () {
            return Laya.LocalStorage.clear();
        };
        return LocalStorage;
    }());
    Games.LocalStorage = LocalStorage;
})(Games || (Games = {}));
//# sourceMappingURL=LocalStorage.js.map

var Games;
(function (Games) {
    //======================
    // 游戏本地数据缓存
    //----------------------
    var GameLocalStorage = /** @class */ (function (_super) {
        __extends(GameLocalStorage, _super);
        function GameLocalStorage() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Object.defineProperty(GameLocalStorage, "Instance", {
            get: function () {
                if (!GameLocalStorage._Instance) {
                    GameLocalStorage._Instance = new GameLocalStorage();
                }
                return GameLocalStorage._Instance;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GameLocalStorage.prototype, "gmX", {
            get: function () {
                if (this._gmX === undefined) {
                    this._gmX = this.getFloat("gmX", true);
                }
                return this._gmX;
            },
            set: function (value) {
                this._gmX = value;
                this.setFloat("gmX", value, true);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GameLocalStorage.prototype, "gmY", {
            get: function () {
                if (this._gmY === undefined) {
                    if (this.hasItem("gmY", true)) {
                        this._gmY = this.getFloat("gmY", true);
                    }
                    else {
                        this._gmY = 100;
                    }
                }
                return this._gmY;
            },
            set: function (value) {
                this._gmY = value;
                this.setFloat("gmY", value, true);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GameLocalStorage.prototype, "fontSetting", {
            get: function () {
                if (!this._fontSetting) {
                    this._fontSetting = this.getItem("fontSetting", true);
                }
                return this._fontSetting;
            },
            set: function (value) {
                this._fontSetting = value;
                this.setItem("fontSetting", value, true);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GameLocalStorage.prototype, "serverName", {
            get: function () {
                if (!this._serverName) {
                    this._serverName = this.getItem("serverName", true);
                }
                return this._serverName;
            },
            set: function (value) {
                this._serverName = value;
                this.setItem("serverName", value, true);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GameLocalStorage.prototype, "useraccountList", {
            get: function () {
                if (!this._useraccountList) {
                    this._useraccountList = this.getJSON("_useraccountList", true);
                }
                if (!this._useraccountList) {
                    this._useraccountList = [];
                }
                return this._useraccountList;
            },
            set: function (value) {
                this._useraccountList = value;
                this.setJSON("_useraccountList", value, true);
            },
            enumerable: true,
            configurable: true
        });
        GameLocalStorage.prototype.addUseraccount = function (username, password) {
            var has = false;
            var list = this.useraccountList ? this.useraccountList : [];
            for (var i = 0; i < list.length; i++) {
                if (list[i].username == username) {
                    list[i].password = password;
                    list[i].lasttime = Game.time.localTime;
                    has = true;
                }
            }
            if (!has) {
                list.push({ username: username, password: password, lasttime: Game.time.localTime });
            }
            list.sort(function (a, b) { return b.lasttime - a.lasttime; });
            this.useraccountList = list;
        };
        Object.defineProperty(GameLocalStorage.prototype, "password", {
            get: function () {
                if (!this._password) {
                    this._password = this.getItem("password");
                    if (this._password == null)
                        this._password = "";
                }
                return this._password;
            },
            set: function (value) {
                this._password = value;
                this.setItem("password", value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GameLocalStorage.prototype, "deviceId", {
            get: function () {
                if (!this._deviceId) {
                    if (BrowserDetect.isApp) {
                        this._deviceId = gameApplication.IDFA;
                    }
                    if (!this._deviceId || this._deviceId == "undefined" || this._deviceId == undefined) {
                        this._deviceId = this.getString("_deviceId", true);
                        if (!this._deviceId) {
                            var timestamp = new Date().getTime();
                            var random = Math.random();
                            this._deviceId = timestamp.toString() + "." + random.toString();
                        }
                    }
                }
                return this._deviceId;
            },
            set: function (value) {
                this._deviceId = value;
                this.setString("_deviceId", value, true);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GameLocalStorage.prototype, "guestusername", {
            get: function () {
                if (!this._guestusername) {
                    this._guestusername = this.getString("guest", true);
                }
                return this._guestusername;
            },
            set: function (value) {
                this._guestusername = value;
                this.setString("guest", value, true);
                Game.sound.onLogin();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GameLocalStorage.prototype, "isGuest", {
            get: function () {
                if (this._isGuest === undefined) {
                    this._isGuest = this.getBoolean("isGuest", true);
                }
                return this._isGuest;
            },
            set: function (value) {
                this._isGuest = value;
                this.setBoolean("isGuest", value, true);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GameLocalStorage.prototype, "isGameGuest", {
            get: function () {
                if (this._isGameGuest === undefined) {
                    this._isGameGuest = this.getBoolean("isGameGuest", true);
                }
                return this._isGameGuest;
            },
            set: function (value) {
                this._isGameGuest = value;
                this.setBoolean("isGameGuest", value, true);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GameLocalStorage.prototype, "isNoticTodayNoOpen", {
            get: function () {
                if (this._isNoticTodayNoOpen === undefined) {
                    this._isNoticTodayNoOpen = this.getBoolean("isNoticTodayNoOpen", true);
                }
                return this._isNoticTodayNoOpen;
            },
            set: function (value) {
                this._isNoticTodayNoOpen = value;
                this.setBoolean("isNoticTodayNoOpen", value, true);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GameLocalStorage.prototype, "lastOpenShopSpecialTime", {
            get: function () {
                if (this._lastOpenShopSpecialTime === undefined) {
                    this._lastOpenShopSpecialTime = this.getFloat("lastOpenShopSpecialTime", true);
                }
                return this._lastOpenShopSpecialTime;
            },
            set: function (value) {
                this._lastOpenShopSpecialTime = value;
                this.setFloat("lastOpenShopSpecialTime", value, true);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GameLocalStorage.prototype, "lastOpenShopSingleTime", {
            get: function () {
                if (this._lastOpenShopSingleTime === undefined) {
                    this._lastOpenShopSingleTime = this.getFloat("lastOpenShopSingleTime", true);
                }
                return this._lastOpenShopSingleTime;
            },
            set: function (value) {
                this._lastOpenShopSingleTime = value;
                this.setFloat("lastOpenShopSingleTime", value, true);
            },
            enumerable: true,
            configurable: true
        });
        return GameLocalStorage;
    }(Games.LocalStorage));
    Games.GameLocalStorage = GameLocalStorage;
})(Games || (Games = {}));
//# sourceMappingURL=GameLocalStorage.js.map

var Games;
(function (Games) {
    var Handler = laya.utils.Handler;
    var ServerStateType;
    (function (ServerStateType) {
        ServerStateType[ServerStateType["Close"] = 0] = "Close";
        ServerStateType[ServerStateType["Noraml"] = 1] = "Noraml";
    })(ServerStateType = Games.ServerStateType || (Games.ServerStateType = {}));
    var ServerNoticType;
    (function (ServerNoticType) {
        ServerNoticType[ServerNoticType["Normal"] = 1] = "Normal";
        ServerNoticType[ServerNoticType["StopServer"] = 2] = "StopServer";
    })(ServerNoticType || (ServerNoticType = {}));
    var ChannelManager = /** @class */ (function (_super) {
        __extends(ChannelManager, _super);
        function ChannelManager() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.serverListUrl = "http://mbqb.ihaiu.com/GamePF/ServerList.json";
            // 程序内置默认		
            _this.defaultServerItem = { name: "QA", ip: "172.81.240.224", port: 80, state: ServerStateType.Noraml, https: false, test: true };
            return _this;
        }
        Object.defineProperty(ChannelManager.prototype, "noticUrl", {
            // 通知Url		
            get: function () {
                if (this.serverItem) {
                    if (this.serverItem.noticUrl) {
                        return this.serverItem.noticUrl;
                    }
                    if (this.serverItem.https) {
                        return "https://" + this.serverItem.ip + "/notice.html";
                    }
                    else {
                        return "http://" + this.serverItem.ip + "/notice.html";
                    }
                }
                return "http://172.16.0.93/notice.html";
            },
            enumerable: true,
            configurable: true
        });
        ChannelManager.prototype.getServerItem = function (serverName) {
            if (!serverName)
                return null;
            if (this.serverList) {
                for (var i = 0; i < this.serverList.list.length; i++) {
                    if (this.serverList.list[i].name == serverName) {
                        return this.serverList.list[i];
                    }
                }
            }
            return null;
        };
        Object.defineProperty(ChannelManager.prototype, "serverName", {
            get: function () {
                if (!this._serverName) {
                    if (Games.GameLocalStorage.Instance.serverName) {
                        var item = this.getServerItem(Games.GameLocalStorage.Instance.serverName);
                        if (item) {
                            this._serverName = Games.GameLocalStorage.Instance.serverName;
                        }
                    }
                    if (!this._serverName && this.serverList) {
                        var item = this.getServerItem(this.serverList.defaultServer);
                        if (item) {
                            this._serverName = this.serverList.defaultServer;
                        }
                        else if (this.serverList.list.length > 0) {
                            this._serverName = this.serverList.list[0].name;
                        }
                    }
                }
                return this._serverName;
            },
            set: function (name) {
                this._serverName = name;
                Games.GameLocalStorage.Instance.serverName = name;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ChannelManager.prototype, "serverIndex", {
            //======================
            // 选择的服务器的索引
            //----------------------
            get: function () {
                if (this.serverList) {
                    for (var i = 0; i < this.serverList.list.length; i++) {
                        if (this.serverList.list[i].name == this.serverName) {
                            return i;
                        }
                    }
                }
                return -1;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ChannelManager.prototype, "serverItem", {
            //======================
            // 选择的服务器
            //----------------------
            get: function () {
                var item = this.getServerItem(this.serverName);
                if (item) {
                    return item;
                }
                return this.defaultServerItem;
            },
            enumerable: true,
            configurable: true
        });
        // 请求服务器列表
        ChannelManager.prototype.requestServerList = function (url, caller, onSucess, onFail) {
            function callSuccess() {
                if (onSucess) {
                    if (caller) {
                        onSucess.apply(caller);
                    }
                    else {
                        onSucess();
                    }
                }
            }
            function callFail() {
                if (onFail) {
                    if (caller) {
                        onFail.apply(caller);
                    }
                    else {
                        onFail();
                    }
                }
            }
            if (this.serverList) {
                callSuccess();
                return;
            }
            if (!url) {
                url = BrowserDetect.urlServerList;
            }
            console.log("serverListUrl=" + url);
            // alert("确定是热更新了 serverListUrl=" + url);
            this.serverListUrl = url;
            Laya.loader.load(url, Handler.create(this, function () {
                var resust = Laya.loader.getRes(url);
                if (resust) {
                    this.serverList = isString(resust) ? JSON.parse(resust) : resust;
                    console.log("获取服务器列表：");
                    console.log(resust);
                    console.log(JSON.stringify(this.serverList));
                    callSuccess();
                }
                else {
                    console.log("ChannelManager LoadFail: ServerList.json ");
                    callFail();
                }
            }));
        };
        Object.defineProperty(ChannelManager.prototype, "isTodayOpenedNotice", {
            // 是否需要打开通知		
            get: function () {
                if (Games.GameLocalStorage.Instance.isNoticTodayNoOpen) {
                    if (Games.GameLocalStorage.Instance.hasItem("lastOpenNoticeTime", true)) {
                        var lastOpenTime = Games.GameLocalStorage.Instance.getInt("lastOpenNoticeTime", true);
                        var isToday = Game.time.isLocalToday(lastOpenTime);
                        return !isToday;
                    }
                }
                return true;
            },
            enumerable: true,
            configurable: true
        });
        // 请求通知
        ChannelManager.prototype.requestNotice = function () {
            console.log(this.noticUrl);
            Laya.loader.load(this.noticUrl, Handler.create(this, this.onResopneNotic));
            // Laya.loader.load("http://blog.ihaiu.com/params.json", Handler.create(this, () =>
            // {
            // 	let result = Laya.loader.getRes("http://blog.ihaiu.com/params.json");
            // 	if (!isString(result))
            // 	{
            // 		result = JSON.stringify(result);
            // 	}
            // 	console.log("加载http://blog.ihaiu.com/params.json: " + result);
            // }));
        };
        ChannelManager.prototype.onResopneNotic = function () {
            var resust = Laya.loader.getRes(this.noticUrl);
            console.log(resust);
            if (resust) {
                try {
                    this.serverNoticData = isString(resust) ? JSON.parse(resust) : resust;
                    if (!this.serverNoticData || this.serverNoticData.visible == false) {
                        return;
                    }
                    if (this.serverNoticData.type == ServerNoticType.Normal) {
                        if (this.isTodayOpenedNotice) {
                            Game.menu.open(Games.MenuId.Notice);
                            Games.GameLocalStorage.Instance.setInt("lastOpenNoticeTime", Game.time.localTime, true);
                        }
                    }
                    else {
                        Game.system.alrtTextFull(this.serverNoticData.content, this.serverNoticData.title, null, function () {
                            // TODO 退出程序
                            if (window["conch"] && window["conch"]["exit"])
                                window["conch"].exit();
                        });
                    }
                }
                catch (error) {
                    console.warn("通知有问题");
                }
            }
        };
        return ChannelManager;
    }(frame.base.BaseSingleton));
    Games.ChannelManager = ChannelManager;
})(Games || (Games = {}));
//# sourceMappingURL=ChannelManager.js.map
/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////
var SoundKey = /** @class */ (function () {
    function SoundKey() {
    }
    Object.defineProperty(SoundKey, "idDict", {
        get: function () {
            if (!SoundKey._idDict) {
                SoundKey.init();
            }
            return SoundKey._idDict;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SoundKey, "extDict", {
        get: function () {
            if (!SoundKey._extDict) {
                SoundKey.init();
            }
            return SoundKey._extDict;
        },
        enumerable: true,
        configurable: true
    });
    SoundKey.getId = function (key) {
        if (!SoundKey.idDict.hasKey(key)) {
            console.error("SoundKey 不存在 key=" + key);
            return "";
        }
        return SoundKey.idDict.getValue(key);
    };
    SoundKey.getUrl = function (key) {
        return "ui://" + SoundKey.SoundPackageId + SoundKey.getId(key);
    };
    SoundKey.getPath = function (key) {
        return Games.GuiSetting.getResPath(SoundKey.SoundPackageName + "_" + SoundKey.getId(key) + SoundKey.extDict.getValue(key), "fgui");
    };
    SoundKey.init = function () {
        var dict = SoundKey._idDict = new Dictionary();
        dict.add("MM_BGM_Cinema.mp3", "s3xz1n");
        dict.add("MM_BGM_Propaganda.mp3", "s3xz1o");
        dict.add("MM_BGM_RoadShow.mp3", "s3xz1p");
        dict.add("MM_BGM_Award.mp3", "i7ne2w");
        dict.add("MM29_TicketsGreat.ogg", "806p32");
        dict.add("MM01_Button.ogg", "r6c533");
        dict.add("MM02_Popup.ogg", "r6c534");
        dict.add("MM03_ReachGoal.ogg", "r6c535");
        dict.add("MM04_Lose.ogg", "r6c536");
        dict.add("MM05_Upgrade.ogg", "r6c537");
        dict.add("MM06_Building.ogg", "r6c538");
        dict.add("MM07_GoldMuch.ogg", "r6c539");
        dict.add("MM08_GoldLess.ogg", "r6c53a");
        dict.add("MM09_GoldReward.ogg", "r6c53b");
        dict.add("MM10_AwardSwitching.ogg", "r6c53c");
        dict.add("MM11_NewsPaperTop.ogg", "r6c53d");
        dict.add("MM12_RecruitArtist.ogg", "r6c53e");
        dict.add("MM13_GetArtist.ogg", "r6c53f");
        dict.add("MM14_ArtistGradeUp.ogg", "r6c53g");
        dict.add("MM15_Propaganda.ogg", "r6c53h");
        dict.add("MM16_ScriptRolling.ogg", "r6c53i");
        dict.add("MM17_FoundArtist.ogg", "r6c53j");
        dict.add("MM18_Screen.ogg", "r6c53k");
        dict.add("MM19_ArtistShow.ogg", "r6c53l");
        dict.add("MM20_ArtistData.ogg", "r6c53m");
        dict.add("MM21_ArtistAccord.ogg", "r6c53n");
        dict.add("MM22_ScreenOver.ogg", "r6c53o");
        dict.add("MM23_Premiere.ogg", "r6c53p");
        dict.add("MM24_NiceScore1.ogg", "r6c53q");
        dict.add("MM25_NiceScore2.ogg", "r6c53r");
        dict.add("MM26_NiceScore3.ogg", "r6c53s");
        dict.add("MM27_TicketsOrdinary.ogg", "r6c53t");
        dict.add("MM28_TicketsGood.ogg", "r6c53u");
        dict.add("MM30_Settlements.ogg", "r6c53v");
        dict.add("MM31_ClickScreenMenu.ogg", "r6c53w");
        dict.add("MM32_GetScript .ogg", "r6c53x");
        dict.add("MM33_NiceScore4.ogg", "r6c53y");
        dict.add("MM34_CultrueArtist.ogg", "r6c53z");
        dict.add("MM35_AwardResults.ogg", "r6c540");
        dict.add("MM36_CarAcross.ogg", "r6c541");
        dict.add("MM37_FilmStart.ogg", "r6c542");
        dict.add("MM38_AudienceGetIn.ogg", "r6c543");
        dict.add("MM39_FilmShow.ogg", "r6c544");
        dict.add("MM40_FilmScreen.ogg", "r6c545");
        dict.add("MM41_ExpectNotices.ogg", "l1r646");
        dict.add("MM42_FilmFemale01.mp3", "qlot4g");
        dict.add("MM43_FilmFemale02.mp3", "qlot4h");
        dict.add("MM44_FilmFemale03.mp3", "qlot4i");
        dict.add("MM45_FilmFemale04.mp3", "qlot4j");
        dict.add("MM46_FilmMale01.mp3", "qlot4k");
        dict.add("MM47_FilmMale02.mp3", "qlot4l");
        dict.add("MM48_FilmMale03.mp3", "qlot4m");
        dict.add("MM49_FilmMale04.mp3", "qlot4n");
        dict.add("MM50_FilmChangge.mp3", "qlot4o");
        var exts = SoundKey._extDict = new Dictionary();
        exts.add("MM_BGM_Cinema.mp3", ".mp3");
        exts.add("MM_BGM_Propaganda.mp3", ".mp3");
        exts.add("MM_BGM_RoadShow.mp3", ".mp3");
        exts.add("MM_BGM_Award.mp3", ".mp3");
        exts.add("MM29_TicketsGreat.ogg", ".ogg");
        exts.add("MM01_Button.ogg", ".ogg");
        exts.add("MM02_Popup.ogg", ".ogg");
        exts.add("MM03_ReachGoal.ogg", ".ogg");
        exts.add("MM04_Lose.ogg", ".ogg");
        exts.add("MM05_Upgrade.ogg", ".ogg");
        exts.add("MM06_Building.ogg", ".ogg");
        exts.add("MM07_GoldMuch.ogg", ".ogg");
        exts.add("MM08_GoldLess.ogg", ".ogg");
        exts.add("MM09_GoldReward.ogg", ".ogg");
        exts.add("MM10_AwardSwitching.ogg", ".ogg");
        exts.add("MM11_NewsPaperTop.ogg", ".ogg");
        exts.add("MM12_RecruitArtist.ogg", ".ogg");
        exts.add("MM13_GetArtist.ogg", ".ogg");
        exts.add("MM14_ArtistGradeUp.ogg", ".ogg");
        exts.add("MM15_Propaganda.ogg", ".ogg");
        exts.add("MM16_ScriptRolling.ogg", ".ogg");
        exts.add("MM17_FoundArtist.ogg", ".ogg");
        exts.add("MM18_Screen.ogg", ".ogg");
        exts.add("MM19_ArtistShow.ogg", ".ogg");
        exts.add("MM20_ArtistData.ogg", ".ogg");
        exts.add("MM21_ArtistAccord.ogg", ".ogg");
        exts.add("MM22_ScreenOver.ogg", ".ogg");
        exts.add("MM23_Premiere.ogg", ".ogg");
        exts.add("MM24_NiceScore1.ogg", ".ogg");
        exts.add("MM25_NiceScore2.ogg", ".ogg");
        exts.add("MM26_NiceScore3.ogg", ".ogg");
        exts.add("MM27_TicketsOrdinary.ogg", ".ogg");
        exts.add("MM28_TicketsGood.ogg", ".ogg");
        exts.add("MM30_Settlements.ogg", ".ogg");
        exts.add("MM31_ClickScreenMenu.ogg", ".ogg");
        exts.add("MM32_GetScript .ogg", ".ogg");
        exts.add("MM33_NiceScore4.ogg", ".ogg");
        exts.add("MM34_CultrueArtist.ogg", ".ogg");
        exts.add("MM35_AwardResults.ogg", ".ogg");
        exts.add("MM36_CarAcross.ogg", ".ogg");
        exts.add("MM37_FilmStart.ogg", ".ogg");
        exts.add("MM38_AudienceGetIn.ogg", ".ogg");
        exts.add("MM39_FilmShow.ogg", ".ogg");
        exts.add("MM40_FilmScreen.ogg", ".ogg");
        exts.add("MM41_ExpectNotices.ogg", ".ogg");
        exts.add("MM42_FilmFemale01.mp3", ".mp3");
        exts.add("MM43_FilmFemale02.mp3", ".mp3");
        exts.add("MM44_FilmFemale03.mp3", ".mp3");
        exts.add("MM45_FilmFemale04.mp3", ".mp3");
        exts.add("MM46_FilmMale01.mp3", ".mp3");
        exts.add("MM47_FilmMale02.mp3", ".mp3");
        exts.add("MM48_FilmMale03.mp3", ".mp3");
        exts.add("MM49_FilmMale04.mp3", ".mp3");
        exts.add("MM50_FilmChangge.mp3", ".mp3");
    };
    SoundKey.SoundPackageName = "Sound";
    SoundKey.SoundPackageId = "44whq70o";
    SoundKey.MM_BGM_Cinema = "MM_BGM_Cinema.mp3";
    SoundKey.MM_BGM_Propaganda = "MM_BGM_Propaganda.mp3";
    SoundKey.MM_BGM_RoadShow = "MM_BGM_RoadShow.mp3";
    SoundKey.MM_BGM_Award = "MM_BGM_Award.mp3";
    SoundKey.MM29_TicketsGreat = "MM29_TicketsGreat.ogg";
    SoundKey.MM01_Button = "MM01_Button.ogg";
    SoundKey.MM02_Popup = "MM02_Popup.ogg";
    SoundKey.MM03_ReachGoal = "MM03_ReachGoal.ogg";
    SoundKey.MM04_Lose = "MM04_Lose.ogg";
    SoundKey.MM05_Upgrade = "MM05_Upgrade.ogg";
    SoundKey.MM06_Building = "MM06_Building.ogg";
    SoundKey.MM07_GoldMuch = "MM07_GoldMuch.ogg";
    SoundKey.MM08_GoldLess = "MM08_GoldLess.ogg";
    SoundKey.MM09_GoldReward = "MM09_GoldReward.ogg";
    SoundKey.MM10_AwardSwitching = "MM10_AwardSwitching.ogg";
    SoundKey.MM11_NewsPaperTop = "MM11_NewsPaperTop.ogg";
    SoundKey.MM12_RecruitArtist = "MM12_RecruitArtist.ogg";
    SoundKey.MM13_GetArtist = "MM13_GetArtist.ogg";
    SoundKey.MM14_ArtistGradeUp = "MM14_ArtistGradeUp.ogg";
    SoundKey.MM15_Propaganda = "MM15_Propaganda.ogg";
    SoundKey.MM16_ScriptRolling = "MM16_ScriptRolling.ogg";
    SoundKey.MM17_FoundArtist = "MM17_FoundArtist.ogg";
    SoundKey.MM18_Screen = "MM18_Screen.ogg";
    SoundKey.MM19_ArtistShow = "MM19_ArtistShow.ogg";
    SoundKey.MM20_ArtistData = "MM20_ArtistData.ogg";
    SoundKey.MM21_ArtistAccord = "MM21_ArtistAccord.ogg";
    SoundKey.MM22_ScreenOver = "MM22_ScreenOver.ogg";
    SoundKey.MM23_Premiere = "MM23_Premiere.ogg";
    SoundKey.MM24_NiceScore1 = "MM24_NiceScore1.ogg";
    SoundKey.MM25_NiceScore2 = "MM25_NiceScore2.ogg";
    SoundKey.MM26_NiceScore3 = "MM26_NiceScore3.ogg";
    SoundKey.MM27_TicketsOrdinary = "MM27_TicketsOrdinary.ogg";
    SoundKey.MM28_TicketsGood = "MM28_TicketsGood.ogg";
    SoundKey.MM30_Settlements = "MM30_Settlements.ogg";
    SoundKey.MM31_ClickScreenMenu = "MM31_ClickScreenMenu.ogg";
    SoundKey.MM32_GetScript = "MM32_GetScript .ogg";
    SoundKey.MM33_NiceScore4 = "MM33_NiceScore4.ogg";
    SoundKey.MM34_CultrueArtist = "MM34_CultrueArtist.ogg";
    SoundKey.MM35_AwardResults = "MM35_AwardResults.ogg";
    SoundKey.MM36_CarAcross = "MM36_CarAcross.ogg";
    SoundKey.MM37_FilmStart = "MM37_FilmStart.ogg";
    SoundKey.MM38_AudienceGetIn = "MM38_AudienceGetIn.ogg";
    SoundKey.MM39_FilmShow = "MM39_FilmShow.ogg";
    SoundKey.MM40_FilmScreen = "MM40_FilmScreen.ogg";
    SoundKey.MM41_ExpectNotices = "MM41_ExpectNotices.ogg";
    SoundKey.MM42_FilmFemale01 = "MM42_FilmFemale01.mp3";
    SoundKey.MM43_FilmFemale02 = "MM43_FilmFemale02.mp3";
    SoundKey.MM44_FilmFemale03 = "MM44_FilmFemale03.mp3";
    SoundKey.MM45_FilmFemale04 = "MM45_FilmFemale04.mp3";
    SoundKey.MM46_FilmMale01 = "MM46_FilmMale01.mp3";
    SoundKey.MM47_FilmMale02 = "MM47_FilmMale02.mp3";
    SoundKey.MM48_FilmMale03 = "MM48_FilmMale03.mp3";
    SoundKey.MM49_FilmMale04 = "MM49_FilmMale04.mp3";
    SoundKey.MM50_FilmChangge = "MM50_FilmChangge.mp3";
    return SoundKey;
}());
//# sourceMappingURL=SoundKey.js.map
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
var GameVersions;
(function (GameVersions) {
    var Handler = laya.utils.Handler;
    var LocalStorage = Laya.LocalStorage;
    var Manager = /** @class */ (function () {
        function Manager() {
            this.platform = "android";
            this.urlpath = "http://mbqb.ihaiu.com/Gidea-PF-Res/resources/ios/web/";
            this.url = "http://mbqb.ihaiu.com/Gidea-PF-Res/resources/ios/web/index.html";
            this.appId = "com.shinezone.movie";
            this.webRoot = "http://mbqb.ihaiu.com/Gidea-PF-Res/resources";
            this.webVersionUrl = "http://mbqb.ihaiu.com/Gidea-PF-Res/resources/verinfo/DTGameVersion.json";
            // 拷贝 assets->data/{packages}/files 的版本
            this.assetCopytoFileVersionData = new GameVersions.VersionData();
            // 本地，应用版本
            this.localAppVersionData = new GameVersions.VersionData();
            // 网络，应用版本
            this.webAppVersionData = new GameVersions.VersionData();
            // 本地，资源版本
            this.localResVersionData = new GameVersions.VersionData();
            // 网络，资源版本
            this.webResVersionData = new GameVersions.VersionData();
            // 本地，分包资源版本
            this.localPartialVersionData = new GameVersions.VersionData();
            // 网络，分包资源版本
            this.webPartialVersionData = new GameVersions.VersionData();
        }
        Object.defineProperty(Manager, "Instance", {
            get: function () {
                if (!Manager._Instance) {
                    Manager._Instance = new Manager();
                }
                return Manager._Instance;
            },
            enumerable: true,
            configurable: true
        });
        /** 初始化 */
        Manager.prototype.init = function () {
            // 设置处理器			
            if (BrowserDetect.isCrosswalk) {
                this.versionHandler = new GameVersions.CrosswalkVersionHandler(this);
            }
            else {
                this.versionHandler = new GameVersions.ConchVersionHandler(this);
            }
            // 设置信息
            this.platform = AppSetting.platform;
            this.appId = AppSetting.appId;
            this.url = AppSetting.url;
            this.urlpath = this.url.replace("index.html", "");
            var folderUrl = this.url.replace("/index.html", "");
            folderUrl = folderUrl.substring(0, folderUrl.lastIndexOf("/"));
            this.webRoot = folderUrl.substring(0, folderUrl.lastIndexOf("/"));
            this.webVersionUrl = this.webRoot + "/verinfo/DTGameVersion.json";
            console.log("GameVersion platform=" + this.platform);
            console.log("GameVersion appId=" + this.appId);
            console.log("GameVersion url=" + this.url);
            console.log("GameVersion urlpath=" + this.urlpath);
            console.log("GameVersion webRoot=" + this.webRoot);
            console.log("GameVersion webVersionUrl=" + this.webVersionUrl);
            gameDeviceConfig.checkNetwork();
            this.localAppVersionData = new GameVersions.VersionData().setVersionTxt(this.localAppVersion);
            this.localResVersionData = new GameVersions.VersionData().setVersionTxt(this.localResVersion);
            this.assetCopytoFileVersionData = new GameVersions.VersionData().setVersionTxt(this.assetsCopytoFileVersion);
            console.log("GameVersion localAppVersionData=" + this.localAppVersionData.toString());
            console.log("GameVersion localResVersionData=" + this.localResVersionData.toString());
            console.log("GameVersion assetCopytoFileVersionData=" + this.assetCopytoFileVersionData.toString());
            gameLaunchLoding.setVersion();
            // 设置是否要显示错误对话框			
            try {
                if (!BrowserDetect.enableGM && window["showAlertOnJsException"]) {
                    window["showAlertOnJsException"](false);
                }
            }
            catch (error) {
                console.warn("window.showAlertOnJsException error:" + error);
            }
            if (AppSetting.enableVersion) {
                this.checkAssetsCopy();
            }
            else {
                this.end();
            }
        };
        /**
         * 刷新应用版本信息
         */
        Manager.prototype.refreshAppVersion = function () {
            this.__localResVersion = null;
            this.localAppVersionData = new GameVersions.VersionData().setVersionTxt(this.localAppVersion);
            this.localResVersionData = new GameVersions.VersionData().setVersionTxt(this.localResVersion);
            gameLaunchLoding.setVersion();
        };
        Object.defineProperty(Manager.prototype, "localAppVersion", {
            /**
             * 获取当前应用版本
             */
            get: function () {
                return gameApplication.AppVersionName;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Manager.prototype, "localResVersion", {
            get: function () {
                if (!this.__localResVersion) {
                    this.__localResVersion = LocalStorage.getItem("__localResVersion");
                    if (!this.__localResVersion) {
                        this.__localResVersion = this.localAppVersion;
                    }
                }
                return this.__localResVersion;
            },
            set: function (version) {
                this.__localResVersion = version;
                LocalStorage.setItem("__localResVersion", version);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Manager.prototype, "assetsCopytoFileVersion", {
            get: function () {
                if (!this.__assetsCopytoFileVersion) {
                    this.__assetsCopytoFileVersion = LocalStorage.getItem("__assetsCopytoFileVersion");
                    if (!this.__assetsCopytoFileVersion) {
                        this.__assetsCopytoFileVersion = "0.0.0";
                    }
                }
                return this.__assetsCopytoFileVersion;
            },
            set: function (version) {
                this.__assetsCopytoFileVersion = version;
                LocalStorage.setItem("__assetsCopytoFileVersion", version);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Manager.prototype, "localPartialVersion", {
            get: function () {
                if (!this.__localPartialVersion) {
                    this.__localPartialVersion = LocalStorage.getItem("__localPartialVersion");
                    if (!this.__localPartialVersion) {
                        this.__localPartialVersion = "0.0.0";
                    }
                }
                return this.__localPartialVersion;
            },
            set: function (version) {
                this.__localPartialVersion = version;
                LocalStorage.setItem("__localPartialVersion", version);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Manager.prototype, "isNeedAssetsCopy", {
            // 获取是否需要拷贝assets->data/{packages}/files
            get: function () {
                if (BrowserDetect.isCrosswalk) {
                    return !this.localAppVersionData.equal(this.assetCopytoFileVersionData);
                }
                return false;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * 检测是否需要拷贝assets->data/{packages}/files
         */
        Manager.prototype.checkAssetsCopy = function () {
            if (!this.isNeedAssetsCopy) {
                this.onCheckAssetsCopyEnd();
                return;
            }
            this.versionHandler.checkAssetsCopy();
        };
        /**
         * 事件 结束:检测是否需要拷贝assets->data/{packages}/files
         */
        Manager.prototype.onCheckAssetsCopyEnd = function () {
            // 检测是否继续运行			
            if (!AppSetting.enableVersion || (!BrowserDetect.isCrosswalk && !BrowserDetect.isConch) || location.href == "http://stand.alone.version/index.html") {
                this.end();
                return;
            }
            if (!BrowserDetect.isIOS) {
                gameLaunchLoding.onVersionLoadConfig();
            }
            this.loadWebVersion(this.webVersionUrl);
        };
        /**
         * 加载远程版本信息
         */
        Manager.prototype.loadWebVersion = function (webVersionUrl) {
            var _this = this;
            var ___this = this;
            Laya.loader.load(webVersionUrl, Handler.create(this, function () {
                var json = Laya.loader.getRes(webVersionUrl);
                console.log("loadWebVersion: " + JSON.stringify(json));
                // onOk
                if (json) {
                    var all;
                    var platform;
                    for (var k in json) {
                        var config = json[k];
                        if ((config.Platform == ___this.platform) ||
                            (config.Platform == "*" || config.Platform == "")) {
                            if (config.ApplicationId == ___this.appId ||
                                config.ApplicationId == "*" || config.ApplicationId == "") {
                                ___this.webVersionConfig = config;
                            }
                        }
                    }
                    if (___this.webVersionConfig) {
                        console.log("GameVersion webVersionConfig=" + JSON.stringify(___this.webVersionConfig));
                        ___this.checkVersion();
                    }
                    else {
                        console.log("GameVersion loadWebVersion no find config!!");
                        ___this.end();
                    }
                }
                // onError
                else {
                    console.log("GameVersion loadWebVersion error!!:");
                    Games.SystemMessag.Instance.alertText(LoadingStateTxt.VersionAlertUpdateResGetInfoFailMsg, _this, function () {
                        location.reload();
                        return;
                    });
                    // ___this.end();
                }
            }), null, Loader.JSON);
        };
        ;
        /**
         * 版本检测
         */
        Manager.prototype.checkVersion = function () {
            if (window["gmButton"] && this.webVersionConfig.VisiableGM !== undefined && !BrowserDetect.enableGM) {
                window["gmButton"].visible = this.webVersionConfig.VisiableGM;
            }
            var IsErrorAlert = false;
            if (this.webVersionConfig.IsErrorAlert !== undefined) {
                IsErrorAlert = this.webVersionConfig.IsErrorAlert;
            }
            try {
                if (window["showAlertOnJsException"]) {
                    // window["showAlertOnJsException"](IsErrorAlert);
                }
            }
            catch (error) {
                console.warn("window.showAlertOnJsException error:" + error);
            }
            console.log("GameVersion localAppVersion=" + this.localAppVersion);
            console.log("GameVersion webAppVersion=" + this.webVersionConfig.AppVersion);
            console.log("GameVersion localResVersion=" + this.localResVersion);
            console.log("GameVersion webResVersion=" + this.webVersionConfig.PatchVersion);
            this.localAppVersionData = new GameVersions.VersionData().setVersionTxt(this.localAppVersion);
            this.webAppVersionData = new GameVersions.VersionData().setVersionTxt(this.webVersionConfig.AppVersion);
            this.localResVersionData = new GameVersions.VersionData().setVersionTxt(this.localResVersion);
            this.webResVersionData = new GameVersions.VersionData().setVersionTxt(this.webVersionConfig.PatchVersion);
            this.localPartialVersionData = new GameVersions.VersionData().setVersionTxt(this.localPartialVersion);
            this.webPartialVersionData = new GameVersions.VersionData().setVersionTxt(this.webVersionConfig.PartialVersion);
            // 检测app版本, 需要更新app
            if (this.isNeedUpdateApp(this.localAppVersionData, this.webAppVersionData)) {
                this.showNeedUpdateApp();
                return;
            }
            // 检测是否需要更新 分包资源
            if (!this.webPartialVersionData.isZero && this.isNeedUpdateRes(this.localPartialVersionData, this.webPartialVersionData)) {
                this.showNeedUpdatePartial();
                return;
            }
            // 检测是否需要更新 补丁资源
            if (this.isNeedUpdateRes(this.localResVersionData, this.webResVersionData)) {
                this.showNeedUpdatePatch();
                return;
            }
            this.end();
        };
        // 显示要更新App		
        Manager.prototype.showNeedUpdateApp = function () {
            console.log("GameVersion NeedUpdateApp");
            Games.SystemMessag.Instance.alrtTextFull(LoadingStateTxt.VersionAlertUpdateAppMsg.format(this.localAppVersionData.toString(), this.webAppVersionData.toString()), LoadingStateTxt.VersionAlertUpdateAppTitle, this, this.gotoDownloadApp, LoadingStateTxt.VersionAlertUpdateAppBtn, false, true, false);
        };
        // 显示要更新 分包资源
        Manager.prototype.showNeedUpdatePartial = function () {
            console.log("GameVersion showNeedUpdatePartial");
            if (this.webVersionConfig.IsPartialAlert) {
                Games.SystemMessag.Instance.alrtTextFull(LoadingStateTxt.VersionAlertUpdateResMsg.format(this.localPartialVersionData.toString(), this.webPartialVersionData.toString()), LoadingStateTxt.VersionAlertUpdateResTitle, this, this.updatePartial, LoadingStateTxt.VersionAlertUpdateResBtn, false);
            }
            else {
                this.updatePartial();
            }
        };
        // 显示要更新 补丁资源
        Manager.prototype.showNeedUpdatePatch = function () {
            console.log("GameVersion showNeedUpdatePatch");
            if (this.webVersionConfig.IsPatchAlert) {
                Games.SystemMessag.Instance.alrtTextFull(LoadingStateTxt.VersionAlertUpdateResMsg.format(this.localResVersionData.toString(), this.webResVersionData.toString()), LoadingStateTxt.VersionAlertUpdateResTitle, this, this.updatePatch, LoadingStateTxt.VersionAlertUpdateResBtn, false);
            }
            else {
                this.updatePatch();
            }
        };
        /** 检测app版本是否需要更新 */
        Manager.prototype.isNeedUpdateApp = function (current, target) {
            if (target.master > current.master) {
                return true;
            }
            if (target.master == current.master) {
                if (target.minor > current.minor) {
                    return true;
                }
            }
            return false;
        };
        /** 检测Res版本是否需要更新 */
        Manager.prototype.isNeedUpdateRes = function (current, target) {
            if (target.master > current.master) {
                return true;
            }
            if (target.master == current.master) {
                if (target.minor > current.minor) {
                    return true;
                }
                if (target.minor == current.minor) {
                    if (target.revised > current.revised) {
                        return true;
                    }
                    if (target.revised == current.revised) {
                        if (target.revised2 > current.revised2) {
                            return true;
                        }
                    }
                }
            }
            return false;
        };
        /** 前往下载APP */
        Manager.prototype.gotoDownloadApp = function () {
            // 下载方式(0:Auto, 1:App: 2:Browser, 3:DownloadManager);
            if (!this.webVersionConfig.AppDownloadType) {
                this.webVersionConfig.AppDownloadType = 1;
            }
            if (this.webVersionConfig && this.webVersionConfig.AppDownloadWeb) {
                this.versionHandler.appupdate();
            }
            else {
                gameApplication.openURL(this.webRoot + "/appdown.html");
            }
        };
        /**
         * 更新 分包资源
         */
        Manager.prototype.updatePartial = function () {
            this.versionHandler.updatePartial();
        };
        Manager.prototype.onUpdateParitialComplete = function () {
            this.localPartialVersion = this.webVersionConfig.PartialVersion;
            // 检测是否需要更新 补丁资源
            if (this.isNeedUpdateRes(this.localResVersionData, this.webResVersionData)) {
                this.updatePatch();
            }
            else {
                this.onComplete();
            }
        };
        /**
         * 更新 补丁资源
         */
        Manager.prototype.updatePatch = function () {
            this.versionHandler.updatePatch();
        };
        Manager.prototype.onUpdatePatchComplete = function () {
            this.localResVersion = this.webVersionConfig.PatchVersion;
            this.onComplete();
        };
        /**
         * 更新完成
         */
        Manager.prototype.onComplete = function () {
            console.log("GameVersion onComplete");
            // alert("更新完成");
            location.reload();
        };
        /**
         * 结束版本检测
         */
        Manager.prototype.end = function () {
            console.log("GameVersion end");
            // alert("结束版本检测");
            Games.GameLaunch.isRunEnd = true;
            if (window["Game"]) {
                Game.install();
            }
            gameLaunchLoding.setVersion();
            gameLaunchLoding.closeLayaLoadingView();
        };
        return Manager;
    }());
    GameVersions.Manager = Manager;
})(GameVersions || (GameVersions = {}));
//# sourceMappingURL=VersionManager.js.map
var GameVersions;
(function (GameVersions) {
    var VersionData = /** @class */ (function () {
        function VersionData() {
            // 第一部分为主版本号
            this.master = 0;
            // 第二部分为次版本号, 需要更新app版本
            this.minor = 0;
            // 第三部分为修订版
            this.revised = 0;
            // 第四部分为修订版
            this.revised2 = 0;
        }
        Object.defineProperty(VersionData.prototype, "isZero", {
            get: function () {
                return this.master == 0 &&
                    this.minor == 0 &&
                    this.revised == 0 &&
                    this.revised2 == 0;
            },
            enumerable: true,
            configurable: true
        });
        VersionData.prototype.setVersionTxt = function (versionTxt) {
            if (versionTxt === undefined || versionTxt === null)
                return this;
            if (isNullOrEmpty(versionTxt.trim()))
                return this;
            versionTxt = versionTxt.toLowerCase();
            versionTxt = versionTxt.replace("version:", "").replace("version", "").replace("ver", "").replace("v", "");
            var arr = versionTxt.split('.');
            this.master = parseInt(arr[0]);
            if (arr.length > 1)
                this.minor = parseInt(arr[1]);
            if (arr.length > 2)
                this.revised = parseInt(arr[2]);
            if (arr.length > 3)
                this.revised2 = parseInt(arr[3]);
            return this;
        };
        VersionData.prototype.equal = function (target) {
            return this.master == target.master
                && this.minor == target.minor
                && this.revised == target.revised
                && this.revised2 == target.revised2;
        };
        VersionData.prototype.toString = function () {
            return "v" + this.master + "." + this.minor + "." + this.revised + "." + this.revised2;
        };
        return VersionData;
    }());
    GameVersions.VersionData = VersionData;
})(GameVersions || (GameVersions = {}));
//# sourceMappingURL=VersionData.js.map
//# sourceMappingURL=VersionConfig.js.map
var GameVersions;
(function (GameVersions) {
    var VersionHandler = /** @class */ (function () {
        function VersionHandler(manager) {
            this.manager = manager;
        }
        Object.defineProperty(VersionHandler.prototype, "urlpath", {
            get: function () {
                return this.manager.urlpath;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(VersionHandler.prototype, "webVersionConfig", {
            // 网络，版本信息配置		
            get: function () {
                return this.manager.webVersionConfig;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(VersionHandler.prototype, "localPartialVersion", {
            /**
             * 当前分包资源版本
             */
            get: function () {
                return this.manager.localPartialVersion;
            },
            set: function (version) {
                this.manager.localPartialVersion = version;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(VersionHandler.prototype, "localResVersion", {
            /**
             * 当前资源版本
             */
            get: function () {
                return this.manager.localResVersion;
            },
            set: function (version) {
                this.manager.localResVersion = version;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(VersionHandler.prototype, "localResVersionData", {
            // 本地，资源版本
            get: function () {
                return this.manager.localResVersionData;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(VersionHandler.prototype, "webResVersionData", {
            // 网络，资源版本
            get: function () {
                return this.manager.webResVersionData;
            },
            enumerable: true,
            configurable: true
        });
        /** 检测Res版本是否需要更新 */
        VersionHandler.prototype.isNeedUpdateRes = function (current, target) {
            return this.manager.isNeedUpdateRes(current, target);
        };
        /**
         * 更新应用
         */
        VersionHandler.prototype.appupdate = function () {
            gameApplication.openURL(this.manager.webVersionConfig.AppDownloadWeb);
        };
        /**
         * 检测是否需要拷贝assets->data/{packages}/files
         */
        VersionHandler.prototype.checkAssetsCopy = function () {
            this.manager.onCheckAssetsCopyEnd();
        };
        /**
         * 更新 分包资源
         */
        VersionHandler.prototype.updatePartial = function () {
        };
        /**
         * 更新 补丁资源
         */
        VersionHandler.prototype.updatePatch = function () {
        };
        /**
         * 更新完成
         */
        VersionHandler.prototype.onComplete = function () {
            this.manager.onComplete();
        };
        /**
         * 结束版本检测
         */
        VersionHandler.prototype.end = function () {
            this.manager.end();
        };
        return VersionHandler;
    }());
    GameVersions.VersionHandler = VersionHandler;
})(GameVersions || (GameVersions = {}));
//# sourceMappingURL=VersionHandler.js.map

var GameVersions;
(function (GameVersions) {
    var ConchVersionHandler = /** @class */ (function (_super) {
        __extends(ConchVersionHandler, _super);
        function ConchVersionHandler() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        /**
         * 检测是否需要拷贝assets->data/{packages}/files
         */
        ConchVersionHandler.prototype.checkAssetsCopy = function () {
        };
        /**
         * 更新 分包资源
         */
        ConchVersionHandler.prototype.updatePartial = function () {
            var _this = this;
            var zip = new GameVersions.UpdateResZip();
            zip.urlpath = this.urlpath;
            zip.assetsidUrl = this.webVersionConfig.ResWeb + "/" + this.webVersionConfig.PartialFolder + "/update/assetsid.txt";
            zip.filetableUrl = this.webVersionConfig.ResWeb + "/" + this.webVersionConfig.PartialFolder + "/update/filetable.txt";
            zip.zipUrl = this.webVersionConfig.ResWeb + "/" + this.webVersionConfig.PartialFolder + "/res.zip";
            var cachePath = window["conch"].getCachePath();
            var filename = "res_partia_" + this.webVersionConfig.PatchVersion + "__" + this.webVersionConfig.PatchFolder;
            filename = filename.replace(/\./g, "_").replace(/\//g, "__").replace(/\\/g, "__") + new Date().getTime();
            zip.zipPath = cachePath + "/" + filename + ".zip";
            zip.setCallback(this, 
            // onComplete	
            function () {
                _this.manager.onUpdateParitialComplete();
            }, 
            // onError
            function () {
                // 检测是否需要更新 补丁资源
                if (_this.isNeedUpdateRes(_this.localResVersionData, _this.webResVersionData)) {
                    _this.updatePatch();
                }
                else {
                    _this.end();
                }
            });
            zip.run();
        };
        /**
         * 更新 补丁资源
         */
        ConchVersionHandler.prototype.updatePatch = function () {
            var _this = this;
            var zip = new GameVersions.UpdateResZip();
            zip.urlpath = this.urlpath;
            zip.assetsidUrl = this.webVersionConfig.ResWeb + "/" + this.webVersionConfig.PatchFolder + "/update/assetsid.txt";
            zip.filetableUrl = this.webVersionConfig.ResWeb + "/" + this.webVersionConfig.PatchFolder + "/update/filetable.txt";
            zip.zipUrl = this.webVersionConfig.ResWeb + "/" + this.webVersionConfig.PatchFolder + "/res.zip";
            var cachePath = window["conch"] ? window["conch"].getCachePath() : "./";
            var filename = "res_patch_" + this.webVersionConfig.PatchVersion + "__" + this.webVersionConfig.PatchFolder;
            filename = filename.replace(/\./g, "_").replace(/\//g, "__").replace(/\\/g, "__") + new Date().getTime();
            zip.zipPath = cachePath + "/" + filename + ".zip";
            zip.setCallback(this, 
            // onComplete	
            function () {
                _this.manager.onUpdatePatchComplete();
            }, 
            // onError
            function () {
                _this.end();
            });
            zip.run();
        };
        return ConchVersionHandler;
    }(GameVersions.VersionHandler));
    GameVersions.ConchVersionHandler = ConchVersionHandler;
})(GameVersions || (GameVersions = {}));
//# sourceMappingURL=ConchVersionHandler.js.map
var GameVersions;
(function (GameVersions) {
    var Handler = laya.utils.Handler;
    var UpdateResZip = /** @class */ (function () {
        function UpdateResZip() {
            this.assetsidUrl = "http://mbqb.ihaiu.com/Gidea-PF-Res/resources/ios/version-patch/patch_v1_05_01/update/assetsid.txt";
            this.filetableUrl = "http://mbqb.ihaiu.com/Gidea-PF-Res/resources/ios/version-patch/patch_v1_05_01/update/filetable.txt";
            this.urlpath = "http://mbqb.ihaiu.com/Gidea-PF-Res/resources/ios/web/";
            this.zipUrl = "http://mbqb.ihaiu.com/Gidea-PF-Res/resources/ios/version-patch/patch_v1_05_01/update/res.zip";
            this.zipRate = 0;
            this.zipRateNetBreak = 10;
            this.zipRateTimeHandler = -1;
        }
        UpdateResZip.prototype.setCallback = function (callbackObj, onComplete, onError) {
            this.callbackObj = callbackObj;
            this.callbacOnComplete = onComplete;
            this.callbacOnError = onError;
        };
        UpdateResZip.prototype.run = function () {
            this.updateAssetsid();
        };
        UpdateResZip.prototype.updateAssetsid = function () {
            var _this = this;
            Laya.loader.load(this.assetsidUrl, Handler.create(this, function () {
                _this.webAssetsid = Laya.loader.getRes(_this.assetsidUrl);
                _this.updateFiletable();
            }));
        };
        UpdateResZip.prototype.updateFiletable = function () {
            var _this = this;
            Laya.loader.load(this.filetableUrl, Handler.create(this, function () {
                _this.txtdcc = Laya.loader.getRes(_this.filetableUrl);
                _this.downZip();
            }));
        };
        UpdateResZip.prototype.saveFiletable = function () {
            //alert("this.txtdcc=" + this.txtdcc + " this.webAssetsid=" + this.webAssetsid + " " + (this.txtdcc ? this.txtdcc.length : 0));
            if (this.txtdcc && this.txtdcc.length > 0) {
                window["appcache"].saveFileTable(this.txtdcc);
                window["appcache"] = new window["AppCache"](this.urlpath);
                if (this.webAssetsid) {
                    window["appcache"].setResourceID('netassetsid', this.webAssetsid);
                }
            }
        };
        UpdateResZip.prototype.downZip = function () {
            this.zipRate = 0;
            this.zipRateNetBreak = 10;
            this.breakpointDownZip();
        };
        UpdateResZip.prototype.breakpointDownZip = function () {
            var _this = this;
            // alert("breakpointDownZip zipRate=" + this.zipRate);
            console.log("breakpointDownZip zipRate=" + this.zipRate);
            window["downloadBigFile"](this.zipUrl, this.zipPath, 
            // onprog
            function (total, now, speed) {
                var zipRate = Math.floor((now / total) * 100);
                if (zipRate != _this.zipRate) {
                    gameLaunchLoding.onVersionLoadZip(now, total, speed);
                    _this.zipRate = Math.floor((now / total) * 100);
                }
                return false;
            }, 
            // oncomp
            function (curlret, httpret) {
                if (curlret != 0 || httpret < 200 || httpret >= 300) {
                    //console.error("GameVersion downZip Fail: curlret=" + curlret + ",  httpret=" + httpret + this.zipUrl);
                    // alert("GameVersion downZip Fail: curlret=" + curlret + ",  httpret=" + httpret + "\n" + this.zipUrl);
                    Games.SystemMessag.Instance.alertText(LoadingStateTxt.NetworkState_Error, _this, function () {
                        location.reload();
                        return;
                    });
                    // this.error();
                }
                else {
                    _this.unZip();
                }
            }, 
            // 重复次数
            10, 
            // 超时时间
            100000000);
            console.log("breakpointDownZip end zipRate=" + this.zipRate);
        };
        UpdateResZip.prototype.unZip = function () {
            this.saveFiletable();
            var index = 0;
            var total = 100;
            gameLaunchLoding.onVersionUnZip(0, total);
            var zip = new window["ZipFile"]();
            if (zip.setSrc(this.zipPath)) {
                zip.forEach(function (id, name, dir, sz) {
                    if (!dir) {
                        var buf = zip.readFile(id);
                        var fid = window["appcache"].hashstr('/' + name);
                        if (window["appcache"].updateFile(fid, 0, buf, false)) {
                            console.log("GameVersion appcache updatefile:" + name);
                        }
                        else {
                            // alert("GameVersion appcache updatefile error:" + name);
                            console.log("GameVersion appcache updatefile error:" + name);
                        }
                        gameLaunchLoding.onVersionUnZip(index++, total);
                    }
                });
                zip.close();
                this.complete();
            }
            else {
                console.log('GameVersion set zip src error!');
                Games.SystemMessag.Instance.alertText(LoadingStateTxt.VersionAlertUpdateResFailMsg, this, function () {
                    location.reload();
                    return;
                });
                // this.error();
            }
        };
        /**
         * 更新完成
         */
        UpdateResZip.prototype.complete = function () {
            console.log("GameVersion onComplete " + this.zipUrl);
            if (this.callbacOnComplete) {
                if (this.callbackObj) {
                    this.callbacOnComplete.apply(this.callbackObj);
                }
                else {
                    this.callbacOnComplete();
                }
            }
        };
        UpdateResZip.prototype.error = function () {
            console.log("GameVersion error " + this.zipUrl);
            if (this.callbacOnError) {
                if (this.callbackObj) {
                    this.callbacOnError.apply(this.callbackObj);
                }
                else {
                    this.callbacOnError();
                }
            }
        };
        return UpdateResZip;
    }());
    GameVersions.UpdateResZip = UpdateResZip;
})(GameVersions || (GameVersions = {}));
//# sourceMappingURL=UpdateResZip.js.map

var GameVersions;
(function (GameVersions) {
    var CrosswalkVersionHandler = /** @class */ (function (_super) {
        __extends(CrosswalkVersionHandler, _super);
        function CrosswalkVersionHandler(manager) {
            var _this = _super.call(this, manager) || this;
            _this.bridger = new GameVersions.GameVersionBridger(_this);
            return _this;
        }
        /**
         * 更新应用
         */
        CrosswalkVersionHandler.prototype.appupdate = function () {
            if (BrowserDetect.isAndroid) {
                var apkUrl = this.manager.webVersionConfig.AppDownloadWeb;
                var apkName = this.manager.webVersionConfig.AppDownloadName;
                if (isNullOrEmpty(apkName)) {
                    apkName = "MovieInc.apk";
                    try {
                        var name_1 = apkUrl.split("?")[0];
                        name_1 = name_1.substring(name_1.lastIndexOf("/") + 1, name_1.length);
                        if (!name_1.endsWith(".apk")) {
                            name_1 += ".apk";
                        }
                        apkName = name_1;
                    }
                    catch (error) {
                    }
                }
                // 下载方式 (  0:Auto, 1:App: 2:Browser, 3:DownloadManager );
                var downloadType = this.manager.webVersionConfig.AppDownloadType;
                this.bridger.appupdate(apkUrl, apkName, downloadType);
            }
            else {
                _super.prototype.appupdate.call(this);
            }
        };
        /**
         * 检测是否需要拷贝assets->data/{packages}/files
         */
        CrosswalkVersionHandler.prototype.checkAssetsCopy = function () {
            this.bridger.assetsCopyTo("www", AppSetting.wwwFileDir, AppSetting.wwwSize);
        };
        /**
         * 更新 分包资源
         */
        CrosswalkVersionHandler.prototype.updatePartial = function () {
            var filename = "res_patch_" + this.webVersionConfig.PartialVersion + "__" + this.webVersionConfig.PartialFolder;
            filename = filename.replace(/\./g, "_").replace(/\//g, "__").replace(/\\/g, "__");
            this.partialUrl = this.webVersionConfig.ResWeb + "/" + this.webVersionConfig.PartialFolder + "/res.zip";
            this.partialPath = AppSetting.FileDir + "/" + filename + ".zip";
            this.bridger.downloadBridger.sComplete.addOnce(this.onDownloadPartialComplete, this);
            this.bridger.download(this.partialUrl, this.partialPath);
        };
        CrosswalkVersionHandler.prototype.onDownloadPartialComplete = function () {
            this.bridger.unArchiverBridger.sComplete.addOnce(this.onUnArchiverPartialComplete, this);
            this.bridger.unArchiver(this.partialPath, AppSetting.wwwFileDir, "");
        };
        CrosswalkVersionHandler.prototype.onUnArchiverPartialComplete = function () {
            this.manager.onUpdateParitialComplete();
        };
        /**
         * 更新 补丁资源
         */
        CrosswalkVersionHandler.prototype.updatePatch = function () {
            var filename = "res_patch_" + this.webVersionConfig.PatchVersion + "__" + this.webVersionConfig.PatchFolder;
            filename = filename.replace(/\./g, "_").replace(/\//g, "__").replace(/\\/g, "__");
            this.patchUrl = this.webVersionConfig.ResWeb + "/" + this.webVersionConfig.PatchFolder + "/res.zip";
            this.patchPath = AppSetting.FileDir + "/" + filename + ".zip";
            this.bridger.downloadBridger.sComplete.addOnce(this.onDownloadPatchComplete, this);
            this.bridger.download(this.patchUrl, this.patchPath);
        };
        CrosswalkVersionHandler.prototype.onDownloadPatchComplete = function () {
            this.bridger.unArchiverBridger.sComplete.addOnce(this.onUnArchiverPatchComplete, this);
            this.bridger.unArchiver(this.patchPath, AppSetting.wwwFileDir, "");
        };
        CrosswalkVersionHandler.prototype.onUnArchiverPatchComplete = function () {
            this.manager.onUpdatePatchComplete();
        };
        return CrosswalkVersionHandler;
    }(GameVersions.VersionHandler));
    GameVersions.CrosswalkVersionHandler = CrosswalkVersionHandler;
})(GameVersions || (GameVersions = {}));
//# sourceMappingURL=CrosswalkVersionHandler.js.map

var GameVersions;
(function (GameVersions) {
    var GameVersionAssetsCopyToBridger = /** @class */ (function (_super) {
        __extends(GameVersionAssetsCopyToBridger, _super);
        function GameVersionAssetsCopyToBridger(versionHandler) {
            var _this = _super.call(this) || this;
            _this.jsClassName = "GameVersionAssetsCopyToBridger";
            _this.versionHandler = versionHandler;
            _this.register();
            return _this;
        }
        /**
         * 准备运行
         */
        GameVersionAssetsCopyToBridger.prototype.onArchiverPre = function () {
            gameLaunchLoding.onAssetsCopy(0, AppSetting.wwwSize);
        };
        /**
         * 开始运行
         */
        GameVersionAssetsCopyToBridger.prototype.onArchiverStart = function () {
        };
        /**
         * 进度
         */
        GameVersionAssetsCopyToBridger.prototype.onArchiverProgress = function (msg) {
            gameLaunchLoding.onAssetsCopy(msg.current, msg.total);
        };
        /**
         * 完成
         */
        GameVersionAssetsCopyToBridger.prototype.onArchiverComplete = function () {
            gameLaunchLoding.onAssetsCopy(AppSetting.wwwSize, AppSetting.wwwSize);
            this.versionHandler.manager.assetsCopytoFileVersion = this.versionHandler.manager.localAppVersion;
            this.versionHandler.manager.localResVersion = this.versionHandler.manager.localAppVersion;
            window.location.replace(AppSetting.wwwFileDir + "/index.html");
            // this.versionHandler.manager.onCheckAssetsCopyEnd();
        };
        /**
         * 出错
         */
        GameVersionAssetsCopyToBridger.prototype.onArchiverFail = function (error) {
            Games.SystemMessag.Instance.alrtTextFull(error, LoadingStateTxt.VersionAssetsCopyError);
        };
        return GameVersionAssetsCopyToBridger;
    }(Games.GameBridger));
    GameVersions.GameVersionAssetsCopyToBridger = GameVersionAssetsCopyToBridger;
})(GameVersions || (GameVersions = {}));
//# sourceMappingURL=GameVersionAssetsCopyToBridger.js.map

var GameVersions;
(function (GameVersions) {
    var GameVersionBridger = /** @class */ (function (_super) {
        __extends(GameVersionBridger, _super);
        function GameVersionBridger(versionHandler) {
            var _this = _super.call(this) || this;
            _this.jsClassName = "GameVersionBridger";
            _this.versionHandler = versionHandler;
            _this.assetsCopyToBridger = new GameVersions.GameVersionAssetsCopyToBridger(versionHandler);
            _this.unArchiverBridger = new GameVersions.GameVersionUnArchiverBridger(versionHandler);
            _this.downloadBridger = new GameVersions.GameVersionDownloadBridger(versionHandler);
            _this.appupdateBridger = new GameVersions.GameVersionAppUpdateBridger(versionHandler);
            _this.register();
            _this.assetsCopyToBridger.register();
            _this.unArchiverBridger.register();
            _this.downloadBridger.register();
            _this.appupdateBridger.register();
            return _this;
        }
        /**
         * assets 资源拷贝到其他目录
         * @param assetPath assets目录路径
         * @param destPath 目标文件夹路径
         * @param estimateTotal 预估总文件多大(字节)
         * @param listenerJsClass js监听对象名称
         * */
        GameVersionBridger.prototype.assetsCopyTo = function (assetPath, destPath, estimateTotal) {
            this.callNative("assetsCopyTo", { assetPath: assetPath, destPath: destPath, estimateTotal: estimateTotal, listenerJsClass: this.assetsCopyToBridger.jsClassName });
        };
        /**
         * 解压文件
         * @param srcfile  zip文件
         * @param unrarPath 解压目录
         * @param password 密码
         * @param listenerJsClass js监听对象名称
         */
        GameVersionBridger.prototype.unArchiver = function (srcfile, unrarPath, password) {
            this.callNative("unArchiver", { srcfile: srcfile, unrarPath: unrarPath, password: password, listenerJsClass: this.unArchiverBridger.jsClassName });
        };
        /**
         * 下载文件
         * @param url  要下载的文件
         * @param path 保存路径
         * @param listenerJsClass js监听对象名称
         */
        GameVersionBridger.prototype.download = function (url, path) {
            this.callNative("download", { url: url, path: path, listenerJsClass: this.downloadBridger.jsClassName });
        };
        /**
         * 停止下载文件
         * @param url  要下载的文件
         */
        GameVersionBridger.prototype.stopdownload = function (url) {
            this.callNative("stopdownload", { url: url });
        };
        /**
         * 更新应用
         * @param apkUrl  要下载的文件
         * @param apkName 保存路径
         * @param downloadType 下载方式 (  0:Auto, 1:App: 2:Browser, 3:DownloadManager );
         * @param listenerJsClass js监听对象名称
         */
        GameVersionBridger.prototype.appupdate = function (apkUrl, apkName, downloadType) {
            Games.SystemMessag.Instance.closeAlert();
            this.callNative("appupdate", { apkUrl: apkUrl, apkName: apkName, downloadType: downloadType, listenerJsClass: this.appupdateBridger.jsClassName });
        };
        return GameVersionBridger;
    }(Games.GameBridger));
    GameVersions.GameVersionBridger = GameVersionBridger;
})(GameVersions || (GameVersions = {}));
//# sourceMappingURL=GameVersionBridger.js.map

var GameVersions;
(function (GameVersions) {
    var GameVersionDownloadBridger = /** @class */ (function (_super) {
        __extends(GameVersionDownloadBridger, _super);
        function GameVersionDownloadBridger(versionHandler) {
            var _this = _super.call(this) || this;
            _this.jsClassName = "GameVersionDownloadBridger";
            _this.sComplete = new Signal();
            _this.versionHandler = versionHandler;
            _this.register();
            return _this;
        }
        /**
         * 准备运行
         */
        GameVersionDownloadBridger.prototype.onTaskPre = function (url) {
            gameLaunchLoding.onVersionCrosswalkLoadZip(0, null, null, null);
        };
        /**
         * 恢复
         */
        GameVersionDownloadBridger.prototype.onTaskResume = function (url) {
        };
        /**
         * 进度
         */
        GameVersionDownloadBridger.prototype.onTaskRunning = function (msg) {
            gameLaunchLoding.onVersionCrosswalkLoadZip(msg.percent, msg.convertCurrentProgress, msg.convertFileSize, msg.convertSpeed);
        };
        /**
         * 完成
         */
        GameVersionDownloadBridger.prototype.onTaskComplete = function (url) {
            gameLaunchLoding.onVersionCrosswalkLoadZip(100, null, null, null);
            this.sComplete.dispatch();
        };
        /**
         * 停止
         */
        GameVersionDownloadBridger.prototype.onTaskStop = function (url) {
        };
        /**
         * 取消
         */
        GameVersionDownloadBridger.prototype.onTaskCancel = function (url) {
        };
        /**
         * 出错
         */
        GameVersionDownloadBridger.prototype.onTaskFail = function (url) {
            Games.SystemMessag.Instance.alertText(LoadingStateTxt.NetworkState_Error, this, function () {
                location.reload();
                return;
            });
        };
        return GameVersionDownloadBridger;
    }(Games.GameBridger));
    GameVersions.GameVersionDownloadBridger = GameVersionDownloadBridger;
})(GameVersions || (GameVersions = {}));
//# sourceMappingURL=GameVersionDownloadBridger.js.map

var GameVersions;
(function (GameVersions) {
    var GameVersionAppUpdateBridger = /** @class */ (function (_super) {
        __extends(GameVersionAppUpdateBridger, _super);
        function GameVersionAppUpdateBridger(versionHandler) {
            var _this = _super.call(this) || this;
            _this.jsClassName = "GameVersionAppUpdateBridger";
            _this.versionHandler = versionHandler;
            _this.register();
            return _this;
        }
        /**
         * 准备运行
         */
        GameVersionAppUpdateBridger.prototype.onTaskPre = function (url) {
            Games.SystemMessag.Instance.closeAlert();
            gameLaunchLoding.onVersionCrosswalkAppUpdate(0, null, null);
        };
        /**
         * 恢复
         */
        GameVersionAppUpdateBridger.prototype.onTaskResume = function (url) {
        };
        /**
         * 进度
         */
        GameVersionAppUpdateBridger.prototype.onTaskRunning = function (msg) {
            gameLaunchLoding.onVersionCrosswalkAppUpdate(msg.progress, msg.current, msg.total);
        };
        /**
         * 完成
         */
        GameVersionAppUpdateBridger.prototype.onTaskComplete = function (url) {
            gameLaunchLoding.onVersionCrosswalkAppUpdate(100, null, null);
        };
        /**
         * 停止
         */
        GameVersionAppUpdateBridger.prototype.onTaskStop = function (url) {
            this.versionHandler.manager.showNeedUpdateApp();
        };
        /**
         * 取消
         */
        GameVersionAppUpdateBridger.prototype.onTaskCancel = function (url) {
            this.versionHandler.manager.showNeedUpdateApp();
        };
        /**
         * 出错
         */
        GameVersionAppUpdateBridger.prototype.onTaskFail = function (url) {
            var _this = this;
            Games.SystemMessag.Instance.alertText(LoadingStateTxt.NetworkState_Error, this, function () {
                _this.versionHandler.manager.showNeedUpdateApp();
                // location.reload();
                return;
            });
        };
        return GameVersionAppUpdateBridger;
    }(Games.GameBridger));
    GameVersions.GameVersionAppUpdateBridger = GameVersionAppUpdateBridger;
})(GameVersions || (GameVersions = {}));
//# sourceMappingURL=GameVersionAppUpdateBridger.js.map

var GameVersions;
(function (GameVersions) {
    var GameVersionUnArchiverBridger = /** @class */ (function (_super) {
        __extends(GameVersionUnArchiverBridger, _super);
        function GameVersionUnArchiverBridger(versionHandler) {
            var _this = _super.call(this) || this;
            _this.jsClassName = "GameVersionUnArchiverBridger";
            _this.sComplete = new Signal();
            _this.versionHandler = versionHandler;
            _this.register();
            return _this;
        }
        /**
         * 准备运行
         */
        GameVersionUnArchiverBridger.prototype.onArchiverPre = function () {
            gameLaunchLoding.onVersionCrosswalkUnZip(0, AppSetting.wwwSize);
        };
        /**
         * 开始运行
         */
        GameVersionUnArchiverBridger.prototype.onArchiverStart = function () {
        };
        /**
         * 进度
         */
        GameVersionUnArchiverBridger.prototype.onArchiverProgress = function (msg) {
            gameLaunchLoding.onVersionCrosswalkUnZip(msg.current, msg.total);
        };
        /**
         * 完成
         */
        GameVersionUnArchiverBridger.prototype.onArchiverComplete = function () {
            gameLaunchLoding.onVersionCrosswalkUnZip(100, AppSetting.wwwSize);
            this.sComplete.dispatch();
        };
        /**
         * 出错
         */
        GameVersionUnArchiverBridger.prototype.onArchiverFail = function () {
            Games.SystemMessag.Instance.alertText(LoadingStateTxt.VersionAlertUpdateResFailMsg, this, function () {
                location.reload();
                return;
            });
        };
        return GameVersionUnArchiverBridger;
    }(Games.GameBridger));
    GameVersions.GameVersionUnArchiverBridger = GameVersionUnArchiverBridger;
})(GameVersions || (GameVersions = {}));
//# sourceMappingURL=GameVersionUnArchiverBridger.js.map
var Games;
(function (Games) {
    var GameLaunch = /** @class */ (function () {
        function GameLaunch() {
        }
        GameLaunch.prototype.install = function () {
            var _this = this;
            // Laya.init(ScreenSetting.developWidth, ScreenSetting.developHeight, Laya.CanvasMeshRender);
            Laya.init(ScreenSetting.developWidth, ScreenSetting.developHeight, Laya.WebGL);
            // 初始化桥接
            Games.GameBridgerManager.Instance.init();
            // 设置	 gameApplication
            if (BrowserDetect.isCrosswalk) {
                window["gameApplication"] = Games.GameBridgerManager.Instance.applicationBridger;
            }
            else {
                var gameApplication = new GameApplicationConch(window["gameApplication"]);
                window["gameApplication"] = gameApplication;
            }
            if (BrowserDetect.isApp) {
                if (BrowserDetect.isIphoneX) {
                    // iPhone X适配
                    Laya.stage["__offestY"] = 90;
                    Laya.stage["__screenHeightSub"] = Laya.stage["__offestY"] + 68;
                }
            }
            // 状态显示
            if (BrowserDetect.isShowState)
                laya.utils.Stat.show(0, 0);
            //设置适配模式
            Laya.stage.scaleMode = BrowserDetect.isMobile ? Laya.Stage.SCALE_FIXED_AUTO : Laya.Stage.SCALE_SHOWALL;
            Laya.stage.alignH = "center";
            Laya.stage.alignV = "top";
            if (!BrowserDetect.isAndroid) {
                Laya.stage.frameRate = Laya.Stage.FRAME_SLOW;
            }
            // 是否开启多点触控
            Laya.MouseManager.multiTouchEnabled = false;
            if (LangManager.Instance.lang == LangType.zh_cn) {
                LoadingStateTxt = LoadingStateTxt_ZH_Cn;
            }
            gameLaunchLoding.setTips(LoadingStateTxt.tips);
            // 初始化UI层级容器
            Games.MenuLayer.install();
            Games.ChannelManager.getInstance().requestServerList(null, null, 
            // onSuccess
            function () {
                _this.loadVersion();
            }, 
            // onFaile    
            function () {
                _this.loadVersion();
            });
        };
        // 加载版本信息		
        GameLaunch.prototype.loadVersion = function () {
            if (BrowserDetect.isUseVersion) {
                console.log("loadVersion:" + BrowserDetect.versionUrl);
                //设置版本控制类型为使用文件名映射的方式
                Laya.ResourceVersion.type = Laya.ResourceVersion.FILENAME_VERSION;
                //加载版本信息文件
                Laya.ResourceVersion.enable(BrowserDetect.versionUrl + "?t=" + new Date().getTime(), Laya.Handler.create(this, this.onLoadedVersion));
            }
            else {
                this.installSystem();
            }
        };
        GameLaunch.prototype.onLoadedVersion = function () {
            // new ZFTests.TestMemory();
            this.installSystem();
        };
        // 初始化系统
        GameLaunch.prototype.installSystem = function () {
            // 设置fgui文件后缀
            fairygui.UIConfig["packageFileExtension"] = Games.GuiSetting.packageFileExtension;
            // 设置按钮声音
            fairygui.UIConfig.buttonSound = SoundKey.getUrl(SoundKey.MM01_Button);
            // 绑定组件
            fgui.System.SystemBinder.bindAll();
            // 注册Loader类
            fairygui.UIObjectFactory.setLoaderExtension(FGLoader);
            //设置字体
            // switch (LangManager.Instance.lang)
            // {
            //     case LangType.zh_cn:
            //         fairygui.UIConfig.defaultFont = "黑体";
            //         break;
            //     default:
            //         fairygui.UIConfig.defaultFont = "Arial";
            //         break;
            // }
            // fairygui.UIConfig.defaultFont = BrowserDetect.isApp ? "HYZhengYuan-65W" : "HYZhengYuan";
            fairygui.UIConfig.defaultFont = "HYZhengYuan-65W";
            window["__isCnLang"] = LangManager.Instance.lang == LangType.zh_cn;
            // 加载系统UI
            Laya.loader.load([
                { url: "res/fgui/System.bin", type: Laya.Loader.BUFFER },
                { url: "res/fgui/System_atlas0.png", type: Laya.Loader.IMAGE },
                { url: "res/fgui/System_atlas_5sasa.png", type: Laya.Loader.IMAGE },
            ], Laya.Handler.create(this, this.onLoadedSystem));
        };
        // 加载完系统UI
        GameLaunch.prototype.onLoadedSystem = function () {
            // console.log(document.body.textContent.replace("<", " ").replace(">", " "));
            // alert("onLoadedSystem");
            Games.GuiSetting.addPackage("res/fgui/System");
            // 初始化转圈
            fairygui.UIConfig.globalModalWaiting = fairygui.UIPackage.getItemURL("System", "GlobalModalWaiting");
            fairygui.UIConfig.windowModalWaiting = fairygui.UIPackage.getItemURL("System", "WindowModalWaiting");
            Games.LoaderManager.instance = Games.LoaderManager.getInstance();
            Games.LoaderManager.instance.install();
            Games.LoaderManager.instance.open(Games.LoaderId.Launch);
            gameLaunchLoding.onLoadedLaunch();
            // 创建GM按钮
            var gm = fgui.System.GMLanuchButton.createInstance();
            gm.draggable = true;
            gm.dragBounds = new laya.maths.Rectangle(-50, -50, Laya.stage.width + 100, Laya.stage.height + 100);
            gm.visible = false;
            window["gmButton"] = gm;
            Games.MenuLayer.floatMsg.addChild(gm);
            if (BrowserDetect.enableGM) {
                gm.visible = true;
            }
            GameVersions.Manager.Instance.init();
            var launchImg = document.getElementById("launch");
            if (launchImg) {
                launchImg.remove();
            }
            var fontText = document.getElementById("fontText");
            if (fontText) {
                fontText.remove();
            }
        };
        GameLaunch.isRunEnd = false;
        return GameLaunch;
    }());
    Games.GameLaunch = GameLaunch;
})(Games || (Games = {}));
var BrowserDetect = new BrowserDetectConfig();
var gameDeviceConfig;
var ScreenSetting;
var isStartGamed = false;
function StartGame() {
    if (isStartGamed)
        return;
    isStartGamed = true;
    gameDeviceConfig = new GameDeviceConfig();
    ScreenSetting = new ScreenSettingConfig();
    gameDeviceConfig.init();
    new Games.GameLaunch().install();
}
if (!BrowserDetect.isCrosswalk) {
    StartGame();
}
window.onload = function onWindowLoad() {
    window["__isloaded"] = true;
    if (window["Game"]) {
        Game.install();
    }
};
//# sourceMappingURL=GameLaunch.js.map
