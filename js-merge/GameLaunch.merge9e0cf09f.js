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
//# sourceMappingURL=Fun.js.map
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
                this.m_t0 = this.getTransition("t0");
            };
            BarSquareStruct.URL = "ui://fiza9hgr5sasi";
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
            CommonDialogUIStruct.DependPackages = ["System", "Common"];
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
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return GlobalModalWaiting;
        }(System.GlobalModalWaitingStruct));
        System.GlobalModalWaiting = GlobalModalWaiting;
    })(System = fgui.System || (fgui.System = {}));
})(fgui || (fgui = {}));
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
            SystemAlertMessageStruct.DependPackages = ["System", "Common"];
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
                Games.MenuLayer.dialog.addChild(this);
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
            SystemConfirmMessageStruct.DependPackages = ["System", "Common"];
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
                Games.MenuLayer.dialog.addChild(this);
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
        var YellowBtnStruct = /** @class */ (function (_super) {
            __extends(YellowBtnStruct, _super);
            function YellowBtnStruct() {
                return _super.call(this) || this;
            }
            YellowBtnStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("System", "YellowBtn"));
            };
            YellowBtnStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_button = this.getController("button");
                this.m_icon = (this.getChild("icon"));
                this.m_title = (this.getChild("title"));
            };
            YellowBtnStruct.URL = "ui://fiza9hgrgdopt";
            YellowBtnStruct.DependPackages = ["System"];
            return YellowBtnStruct;
        }(fairygui.GButton));
        System.YellowBtnStruct = YellowBtnStruct;
    })(System = fgui.System || (fgui.System = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=YellowBtnStruct.js.map
/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

var fgui;
(function (fgui) {
    var System;
    (function (System) {
        var YellowBtn = /** @class */ (function (_super) {
            __extends(YellowBtn, _super);
            function YellowBtn() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return YellowBtn;
        }(System.YellowBtnStruct));
        System.YellowBtn = YellowBtn;
    })(System = fgui.System || (fgui.System = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=YellowBtn.js.map
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
                return (fairygui.UIPackage.createObject("System", "CloseBtn"));
            };
            CloseBtnStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_button = this.getController("button");
            };
            CloseBtnStruct.URL = "ui://fiza9hgrgdopq";
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
                this.m_closeBtn = (this.getChild("closeBtn"));
                this.m_bgCom = (this.getChild("bgCom"));
                this.m_t0 = this.getTransition("t0");
                this.m_t1 = this.getTransition("t1");
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
                Games.MenuLayer.showDialogModel();
                Games.MenuLayer.dialog.addChild(this);
                centerScreen(this);
                this.m_t0.play();
                if (autoCloseTime > 0) {
                    setTimeout(function () { _this.close(); }, autoCloseTime * 1000);
                }
            };
            SystemAddItemMessage.prototype.RenderItem = function (index, obj) {
                var data = this.items[index];
                obj.title = data.itemNumTxt;
                obj.icon = data.itemIconUrl;
            };
            SystemAddItemMessage.prototype.close = function () {
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
        var GMLanuchButton = /** @class */ (function (_super) {
            __extends(GMLanuchButton, _super);
            function GMLanuchButton() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.isDraging = false;
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
        var SystemBinder = /** @class */ (function () {
            function SystemBinder() {
            }
            SystemBinder.bindAll = function () {
                fairygui.UIObjectFactory.setPackageItemExtension(System.LoaderEnterGame.URL, System.LoaderEnterGame);
                fairygui.UIObjectFactory.setPackageItemExtension(System.ProgressRedBar.URL, System.ProgressRedBar);
                fairygui.UIObjectFactory.setPackageItemExtension(System.WindowModalWaiting.URL, System.WindowModalWaiting);
                fairygui.UIObjectFactory.setPackageItemExtension(System.GlobalModalWaiting.URL, System.GlobalModalWaiting);
                fairygui.UIObjectFactory.setPackageItemExtension(System.BarSquare.URL, System.BarSquare);
                fairygui.UIObjectFactory.setPackageItemExtension(System.SystemToastMessage.URL, System.SystemToastMessage);
                fairygui.UIObjectFactory.setPackageItemExtension(System.SystemConfirmMessage.URL, System.SystemConfirmMessage);
                fairygui.UIObjectFactory.setPackageItemExtension(System.CommonDialogUI.URL, System.CommonDialogUI);
                fairygui.UIObjectFactory.setPackageItemExtension(System.YellowBtn.URL, System.YellowBtn);
                fairygui.UIObjectFactory.setPackageItemExtension(System.SystemAlertMessage.URL, System.SystemAlertMessage);
                fairygui.UIObjectFactory.setPackageItemExtension(System.BGModel.URL, System.BGModel);
                fairygui.UIObjectFactory.setPackageItemExtension(System.SystemAddItemMessage.URL, System.SystemAddItemMessage);
                fairygui.UIObjectFactory.setPackageItemExtension(System.LabItem_big.URL, System.LabItem_big);
                fairygui.UIObjectFactory.setPackageItemExtension(System.GMLanuchButton.URL, System.GMLanuchButton);
                fairygui.UIObjectFactory.setPackageItemExtension(System.ScreenBG.URL, System.ScreenBG);
                fairygui.UIObjectFactory.setPackageItemExtension(System.StateView.URL, System.StateView);
                fairygui.UIObjectFactory.setPackageItemExtension(System.StateItem.URL, System.StateItem);
                fairygui.UIObjectFactory.setPackageItemExtension(System.SystemToastText.URL, System.SystemToastText);
            };
            return SystemBinder;
        }());
        System.SystemBinder = SystemBinder;
    })(System = fgui.System || (fgui.System = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=SystemBinder.js.map
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
        // 主UI
        MenuLayerType[MenuLayerType["MainUI"] = 4] = "MainUI";
        // 对话框
        MenuLayerType[MenuLayerType["Dialog"] = 5] = "Dialog";
        // 引导
        MenuLayerType[MenuLayerType["Guide"] = 6] = "Guide";
        // 加载面板
        MenuLayerType[MenuLayerType["Loader"] = 7] = "Loader";
        // GM
        MenuLayerType[MenuLayerType["GM"] = 8] = "GM";
        // 浮动对话框
        MenuLayerType[MenuLayerType["FloatMsg"] = 9] = "FloatMsg";
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
            MenuLayer.mainUI = MenuLayer.createLayer("MenuLayer-mainUI");
            MenuLayer.dialog = MenuLayer.createLayer("MenuLayer-dialog");
            MenuLayer.guide = MenuLayer.createLayer("MenuLayer-guide");
            MenuLayer.loader = MenuLayer.createLayer("MenuLayer-loader");
            MenuLayer.gm = MenuLayer.createLayer("MenuLayer-gm");
            MenuLayer.floatMsg = MenuLayer.createLayer("MenuLayer-floatMsg");
            MenuLayer.dict.add(Games.MenuLayerType.Home, MenuLayer.home);
            MenuLayer.dict.add(Games.MenuLayerType.HomeTop, MenuLayer.homeTop);
            MenuLayer.dict.add(Games.MenuLayerType.Module, MenuLayer.module);
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
            return _super.call(this) || this;
        }
        LoaderEnterPanel.prototype.onInit = function () {
            this.loader = fgui.System.LoaderEnterGame.createInstance();
            this.contentPane = this.loader;
            // this.center();
            //弹出窗口的动效已中心为轴心
            // this.setPivot(0.5, 0.5);
            _super.prototype.onInit.call(this);
        };
        // 设置最大值
        LoaderEnterPanel.prototype.setMax = function (value) {
            this.loader.m_progressBar.max = value;
        };
        // 设置加载进度
        LoaderEnterPanel.prototype.setValue = function (value) {
            this.loader.m_progressBar.value = value;
        };
        // 设置Tip
        LoaderEnterPanel.prototype.setTip = function (tip) {
            this.loader.m_help.text = tip;
        };
        LoaderEnterPanel.prototype.setTips = function (tips) {
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
            var dict = FGLoader.freeDictForTime.__getDict();
            for (var url in dict) {
                console.log(FGLoader.freeDictForNum.getValue(url) + " " + url);
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
    FGLoader.prototype.loadContent = function () {
        _super.prototype.loadContent.call(this);
    };
    FGLoader.prototype.getPackagenameByUrl = function (url) {
        return url.replace("ui://", "").split("/")[0];
    };
    FGLoader.prototype.loadFromPackage = function (itemURL) {
        console.log("loadFromPackage:" + itemURL);
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
        console.log("onLoadPackage:" + this.url);
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
        console.log("loadExternal:" + this.url);
        FGLoader.setUse(this.url);
        _super.prototype.loadExternal.call(this);
    };
    //释放外部载入的资源
    FGLoader.prototype.freeExternal = function (texture) {
        console.log("freeExternal:" + this.url + "  " + texture.url);
        _super.prototype.freeExternal.call(this, texture);
        if (!isNullOrEmpty(texture.url)) {
            FGLoader.setFree(texture.url);
        }
        // Laya.loader.clearRes(texture.url);
    };
    // 载入完成后调用
    FGLoader.prototype.onExternalLoadSuccess = function (texture) {
        console.log("onExternalLoadSuccess:" + this.url);
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
            this.dailySignTrailer = new configs.LangConfigReader("DailySignTrailer");
            this.dialogue = new configs.LangConfigReader("Dialogue");
            this.floor = new configs.LangConfigReader("Floor");
            this.gameLevel = new configs.LangConfigReader("GameLevel");
            this.guidesystem = new configs.LangConfigReader("Guidesystem");
            this.headPortrait = new configs.LangConfigReader("HeadPortrait");
            this.item = new configs.LangConfigReader("Item");
            this.mail = new configs.LangConfigReader("Mail");
            this.maintask = new configs.LangConfigReader("Maintask");
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
            this.msgProtoError = new configs.LangConfigReader("MsgProtoError");
            this.npc = new configs.LangConfigReader("Npc");
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
            this.welfare = new configs.LangConfigReader("Welfare");
        }
        // 初始化读取器列表
        LangConfigLoaderList.prototype.initList = function () {
            this.renders.push(this.activities);
            this.renders.push(this.actor);
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
            this.renders.push(this.dailySignTrailer);
            this.renders.push(this.dialogue);
            this.renders.push(this.floor);
            this.renders.push(this.gameLevel);
            this.renders.push(this.guidesystem);
            this.renders.push(this.headPortrait);
            this.renders.push(this.item);
            this.renders.push(this.mail);
            this.renders.push(this.maintask);
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
            this.renders.push(this.msgProtoError);
            this.renders.push(this.npc);
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
            this.renders.push(this.welfare);
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
            return _this;
        }
        // 加载所有
        LangConfigLoader.prototype.loadAll = function () {
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
        // 重新加载所有
        LangConfigLoader.prototype.reloadAll = function () {
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
                this.renders[i].reload(this.configLoader, onItemLoaded);
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
                if (Games.GameLocalStorage.Instance.hasItem("lang", true)) {
                    this._lang = Games.GameLocalStorage.Instance.getString("lang", true);
                }
                else {
                    var lang = navigator.language;
                    if (!lang) {
                        lang = navigator["browserLanguage"];
                    }
                    lang = LangType.toLang(lang);
                    this._lang = lang;
                }
                this.httpLang = this._lang;
            }
            return this._lang;
        },
        set: function (value) {
            this._lang = value;
            this.httpLang = value;
            Games.GameLocalStorage.Instance.setString("lang", value, true);
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
        fairygui.UIPackage["_stringsSource"] = {};
        var list = lang.getConfigList();
        for (var i = 0; i < list.length; i++) {
            var config = list[i];
            var name_1 = config.dict.getValue("name");
            var value = config.dict.getValue("value");
            var index = name_1.indexOf("-");
            if (isNullOrEmpty(value))
                continue;
            if (index == -1)
                continue;
            var uiUrl = name_1.substr(0, index);
            var uiNodeName = name_1.substr(index + 1);
            var col = fairygui.UIPackage["_stringsSource"][uiUrl];
            if (!col) {
                col = {};
                fairygui.UIPackage["_stringsSource"][uiUrl] = col;
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
            emitterTarget.removeChildren();
            emitterTarget.stop();
            emitterTarget = null;
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
        Object.defineProperty(GameLocalStorage.prototype, "password", {
            get: function () {
                if (!this._password) {
                    this._password = this.getItem("password");
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
        Object.defineProperty(GameLocalStorage.prototype, "lastOpenShopTime", {
            get: function () {
                if (this._lastOpenShopTime === undefined) {
                    this._lastOpenShopTime = this.getFloat("lastOpenShopTime", true);
                }
                return this._lastOpenShopTime;
            },
            set: function (value) {
                this._lastOpenShopTime = value;
                this.setFloat("lastOpenShopTime", value, true);
            },
            enumerable: true,
            configurable: true
        });
        return GameLocalStorage;
    }(Games.LocalStorage));
    Games.GameLocalStorage = GameLocalStorage;
})(Games || (Games = {}));
//# sourceMappingURL=GameLocalStorage.js.map
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

/**
 * 浏览器检测
 */
var BrowserDetectConfig = /** @class */ (function () {
    function BrowserDetectConfig() {
        // 发布版本
        this.isResease = false;
        // 是本地
        this.isLocal = false;
        // 是否显示GM
        this.enableGM = true;
        // 是否显示状态
        this.isShowState = true;
        this.urlServerListRemote = "http://mbqb.ihaiu.com/GamePF/ServerList.json";
        this.urlServerListLocal = "ServerList.json";
        if (window && window.navigator && window.navigator.userAgent) {
            var agent = window.navigator.userAgent;
            console.log(agent);
            this.isFirefox = (agent.indexOf("Firefox") > -1);
            this.isOpera = (window["opera"] != null);
            this.isChrome = (agent.indexOf("Chrome") > -1); // NOTE that Chrome on Android returns true but is a completely different browser with different abilities
            this.isIOS = agent.indexOf("iPod") > -1 || agent.indexOf("iPhone") > -1 || agent.indexOf("iPad") > -1;
            this.isAndroid = (agent.indexOf("Android") > -1);
            this.isBlackberry = (agent.indexOf("Blackberry") > -1);
            this.isTV = (agent.indexOf("Box") > -1) || (agent.indexOf("box") > -1);
            this.isIE = (agent.indexOf("IE") > -1);
            this.isMobile = this.isIOS || this.isAndroid || this.isBlackberry;
            this.isApp = window["conch"] ? true : false;
        }
        else {
            this.isMobile = true;
            this.isApp = true;
        }
        this.isResease = window.location.hostname == "ts1.ihaiu.com" || window.location.hostname == "pf.ihaiu.com";
        if (this.isResease) {
            this.enableGM = false;
            this.isShowState = false;
            this.isLocal = true;
        }
        if (this.isAndroid) {
            this.enableGM = false;
            this.isShowState = false;
            this.isLocal = true;
        }
        this.enableGM = true;
        console.log("this.isResease=" + this.isResease);
        console.log("this.urlServerList=" + this.urlServerListRemote);
        if (window["conch"]) {
            var nType = window["conch"].config.getNetworkType();
            console.log("getNetworkType:" + nType);
            window["conch"].setNetworkEvtFunction(function (type) {
                console.log("setNetworkEvtFunction:" + type);
            });
        }
    }
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
    return BrowserDetectConfig;
}());
var BrowserDetect = new BrowserDetectConfig();
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
var ScreenSetting = new ScreenSettingConfig();
/*------------------------------------------------------------ */
var ZFTests;
(function (ZFTests) {
    var Component = Laya.Component;
    var List = Laya.List;
    var Button = Laya.Button;
    var Handler = Laya.Handler;
    var Event = Laya.Event;
    var Templet = Laya.Templet;
    var MenuButtons = /** @class */ (function () {
        function MenuButtons() {
        }
        MenuButtons.MainMenu = "返回主菜单";
        MenuButtons.LoadResList = "加载资源列表";
        MenuButtons.AddPackageFgui = "AddPackage Fgui";
        MenuButtons.AddPackageFsprite = "AddPackage Fsprite";
        MenuButtons.BindFgui = "Bind Fgui";
        MenuButtons.SpineSK = "SpineSK";
        MenuButtons.List = [
            MenuButtons.MainMenu,
            MenuButtons.LoadResList,
            MenuButtons.AddPackageFgui,
            MenuButtons.AddPackageFsprite,
            MenuButtons.BindFgui,
            MenuButtons.SpineSK
        ];
        return MenuButtons;
    }());
    ZFTests.MenuButtons = MenuButtons;
    var ButtonListItem = /** @class */ (function (_super) {
        __extends(ButtonListItem, _super);
        function ButtonListItem() {
            var _this = _super.call(this) || this;
            _this.labelSize = 30;
            _this.labelAlign = "left";
            _this.width = ButtonListItem.WID;
            _this.height = ButtonListItem.HEI;
            return _this;
        }
        ButtonListItem.WID = 500;
        ButtonListItem.HEI = 80;
        return ButtonListItem;
    }(Button));
    ZFTests.ButtonListItem = ButtonListItem;
    var ButtonList = /** @class */ (function (_super) {
        __extends(ButtonList, _super);
        function ButtonList(menu, testMemory) {
            var _this = _super.call(this) || this;
            _this.unitM = 1024 * 1024;
            _this.menu = menu;
            _this.testMemory = testMemory;
            return _this;
        }
        ButtonList.prototype.createButtonList = function () {
            var list = new List();
            list.itemRender = ButtonListItem;
            list.repeatX = 1;
            list.repeatY = 10;
            list.x = (Laya.stage.width - ButtonListItem.WID) / 2;
            list.y = (Laya.stage.height - ButtonListItem.HEI * list.repeatY) / 2;
            // 使用但隐藏滚动条
            list.vScrollBarSkin = "";
            list.selectEnable = true;
            list.selectHandler = new Handler(this, this.onSelect);
            list.renderHandler = new Handler(this, this.updateItem);
            this.addChild(list);
            this.list = list;
            list.array = this.listData;
            return list;
        };
        ButtonList.prototype.updateItem = function (cell, index) {
            cell.label = cell.dataSource;
        };
        ButtonList.prototype.onSelect = function (index) {
        };
        Object.defineProperty(ButtonList.prototype, "currentMemorySize", {
            get: function () {
                var val = laya.utils.Stat.currentMemorySize;
                if (laya.utils.Stat.currentMemorySize > this.unitM) {
                    return Math.floor(val / this.unitM * 100) / 100 + " M";
                }
                else {
                    return Math.floor(val / 1024 * 100) / 100 + " K";
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ButtonList.prototype, "currentSubMemorySize", {
            get: function () {
                var sub = ButtonList.preMemorySize - laya.utils.Stat.currentMemorySize;
                ButtonList.preMemorySize = laya.utils.Stat.currentMemorySize;
                return sub;
            },
            enumerable: true,
            configurable: true
        });
        ButtonList.initPreMemorySize = function () {
            ButtonList.preMemorySize = laya.utils.Stat.currentMemorySize;
        };
        ButtonList.preMemorySize = 0;
        return ButtonList;
    }(Component));
    ZFTests.ButtonList = ButtonList;
    var MenuButtonList = /** @class */ (function (_super) {
        __extends(MenuButtonList, _super);
        function MenuButtonList(menu, testMemory) {
            var _this = _super.call(this, menu, testMemory) || this;
            _this.listData = MenuButtons.List;
            _this.createButtonList();
            return _this;
        }
        MenuButtonList.prototype.onSelect = function (index) {
            var button = this.listData[index];
            this.testMemory.openTab(button);
        };
        return MenuButtonList;
    }(ButtonList));
    ZFTests.MenuButtonList = MenuButtonList;
    var ResListView = /** @class */ (function (_super) {
        __extends(ResListView, _super);
        function ResListView(menu, testMemory, list) {
            var _this = _super.call(this, menu, testMemory) || this;
            _this.listData = list;
            _this.createButtonList();
            return _this;
        }
        ResListView.prototype.updateItem = function (cell, index) {
            if (index < this.listData.length) {
                var name_1 = this.listData[index]["path"];
                var arr = name_1.split('/');
                name_1 = arr[arr.length - 1].replace("@", "--");
                cell.label = name_1;
            }
        };
        ResListView.prototype.onSelect = function (index) {
            if (index < this.listData.length) {
                var path = "res" + this.listData[index]["path"];
                var arr = path.split(".");
                var ext = arr[arr.length - 1];
                var type = ext == "bin" ? Laya.Loader.BUFFER : Laya.Loader.IMAGE;
                console.log("BeginLoad: " + path);
                Laya.loader.load(path, Handler.create(this, this.onLoadItem, [path]), null, type);
            }
        };
        ResListView.prototype.onLoadItem = function (path) {
            console.log("onLoadItem: " + path + ", currentMemorySize:" + this.currentMemorySize + "  " + this.currentSubMemorySize);
        };
        return ResListView;
    }(ButtonList));
    ZFTests.ResListView = ResListView;
    var LoadAllResListView = /** @class */ (function (_super) {
        __extends(LoadAllResListView, _super);
        function LoadAllResListView(menu, testMemory, list) {
            var _this = _super.call(this, menu, testMemory) || this;
            _this.listData = list;
            _this.createButtonList();
            return _this;
        }
        LoadAllResListView.prototype.updateItem = function (cell, index) {
            if (index < this.listData.length) {
                cell.label = this.listData[index];
            }
        };
        LoadAllResListView.prototype.onSelect = function (index) {
            if (index < this.listData.length) {
                var path = this.listData[index];
                var list = this.testMemory.getResList(path);
                for (var i = 0; i < list.length; i++) {
                    var itemPath = "res" + list[i]["path"];
                    console.log("BeginLoad: " + itemPath);
                    var arr = itemPath.split(".");
                    var ext = arr[arr.length - 1];
                    var type = ext == "bin" ? Laya.Loader.BUFFER : Laya.Loader.IMAGE;
                    Laya.loader.load(itemPath, Handler.create(this, this.onLoadItem, [itemPath]), null, type);
                }
            }
        };
        LoadAllResListView.prototype.onLoadItem = function (path) {
            console.log("onLoadItem: " + path + ", currentMemorySize:" + this.currentMemorySize + "  " + this.currentSubMemorySize);
        };
        return LoadAllResListView;
    }(ButtonList));
    ZFTests.LoadAllResListView = LoadAllResListView;
    var AddPackageListView = /** @class */ (function (_super) {
        __extends(AddPackageListView, _super);
        function AddPackageListView(menu, testMemory, list) {
            var _this = _super.call(this, menu, testMemory) || this;
            _this.listData = list;
            _this.createButtonList();
            return _this;
        }
        AddPackageListView.prototype.updateItem = function (cell, index) {
            if (index < this.listData.length) {
                cell.label = this.listData[index]["path"];
            }
        };
        AddPackageListView.prototype.onSelect = function (index) {
            if (index < this.listData.length) {
                var pack = this.listData[index]["path"];
                pack = "res" + pack.replace(".bin", "");
                Games.GuiSetting.addPackage(pack);
            }
        };
        return AddPackageListView;
    }(ButtonList));
    ZFTests.AddPackageListView = AddPackageListView;
    var BindListView = /** @class */ (function (_super) {
        __extends(BindListView, _super);
        function BindListView(menu, testMemory, list) {
            var _this = _super.call(this, menu, testMemory) || this;
            _this.listData = list;
            _this.createButtonList();
            return _this;
        }
        BindListView.prototype.updateItem = function (cell, index) {
            if (index < this.listData.length) {
                cell.label = this.listData[index]["path"];
            }
        };
        BindListView.prototype.onSelect = function (index) {
            if (index < this.listData.length) {
                var pack = this.listData[index]["path"].replace(".bin", "");
                var arr = pack.split('/');
                var name_2 = arr[arr.length - 1];
                if (fgui[name_2] && fgui[name_2][name_2 + "Binder"])
                    fgui[name_2][name_2 + "Binder"]["bindAll"]();
            }
        };
        return BindListView;
    }(ButtonList));
    ZFTests.BindListView = BindListView;
    var SpineListView = /** @class */ (function (_super) {
        __extends(SpineListView, _super);
        function SpineListView(menu, testMemory, list) {
            var _this = _super.call(this, menu, testMemory) || this;
            _this.templets = [];
            _this.skeletons = [];
            _this.listData = list;
            _this.createButtonList();
            return _this;
        }
        SpineListView.prototype.updateItem = function (cell, index) {
            if (index < this.listData.length) {
                cell.label = this.listData[index]["path"];
            }
        };
        SpineListView.prototype.onSelect = function (index) {
            if (index < this.listData.length) {
                var path = "res" + this.listData[index]["path"];
                var urls = [
                    { url: path.replace(".sk", ".png"), type: Laya.Loader.IMAGE },
                    { url: path, type: Laya.Loader.BUFFER }
                ];
                Laya.loader.load(urls, Laya.Handler.create(this, this.onLoadRes, [path]));
            }
        };
        SpineListView.prototype.onLoadRes = function (path) {
            var _this = this;
            var png = Laya.loader.getRes(path.replace(".sk", ".png"));
            var sk = Laya.loader.getRes(path);
            var templet = new Templet();
            templet.on(Event.COMPLETE, this, function () {
                var sk = templet.buildArmature(0);
                sk.x = Laya.stage.width * 0.5;
                sk.y = Laya.stage.height - 50;
                sk.play(0, true);
                Laya.stage.addChild(sk);
                _this.skeletons.push(sk);
            });
            templet.parseData(png, sk);
            this.templets.push(templet);
            console.log("this.templets.length=" + this.templets.length);
        };
        return SpineListView;
    }(ButtonList));
    ZFTests.SpineListView = SpineListView;
    var ResList = /** @class */ (function () {
        function ResList() {
        }
        ResList.FguiBin = "ResList/FguiBin.json";
        ResList.FguiImage = "ResList/FguiImage.json";
        ResList.FSpriteBin = "ResList/FSpriteBin.json";
        ResList.FSpriteImage = "ResList/FSpriteImage.json";
        ResList.Sprite = "ResList/Sprite.json";
        ResList.SpineSK = "ResList/SpineSK.json";
        ResList.SpineImage = "ResList/SpineImage.json";
        ResList.List = [
            ResList.FguiBin,
            ResList.FguiImage,
            ResList.FSpriteBin,
            ResList.FSpriteImage,
            ResList.Sprite,
            ResList.SpineSK,
            ResList.SpineImage
        ];
        return ResList;
    }());
    ZFTests.ResList = ResList;
    var TestMemory = /** @class */ (function () {
        function TestMemory() {
            this.tabDict = [];
            this.resListDict = {};
            this.spineSkUrls = [];
            this.spinePngUrls = [];
            this.templets = [];
            this.skeletons = [];
            this.loadResListNum = 0;
            // 设置fgui文件后缀
            fairygui.UIConfig["packageFileExtension"] = Games.GuiSetting.packageFileExtension;
            this.container = new Component();
            Laya.stage.addChild(this.container);
            this.loadResListJson();
            this.container.mouseEnabled = true;
            gameLaunchLoding.onEnd();
        }
        TestMemory.prototype.onClickBackMainMenu = function () {
            this.openTab(MenuButtons.MainMenu);
        };
        TestMemory.prototype.onClicBindAll = function () {
            var list = this.getResList(ResList.FguiBin);
            for (var i = 0; i < list.length; i++) {
                var path = list[i].path.replace(".bin", "");
                var arr = path.split('/');
                var name_3 = arr[arr.length - 1];
                if (fgui[name_3] && fgui[name_3][name_3 + "Binder"])
                    fgui[name_3][name_3 + "Binder"]["bindAll"]();
            }
        };
        TestMemory.prototype.createTabs = function () {
            for (var i = 0; i < ResList.List.length; i++) {
                MenuButtons.List.push(ResList.List[i]);
            }
            var buttonList;
            buttonList = new MenuButtonList(MenuButtons.MainMenu, this);
            this.tabDict.push(buttonList);
            buttonList = new LoadAllResListView(MenuButtons.LoadResList, this, ResList.List);
            this.tabDict.push(buttonList);
            buttonList = new AddPackageListView(MenuButtons.AddPackageFgui, this, this.getResList(ResList.FguiBin));
            this.tabDict.push(buttonList);
            buttonList = new AddPackageListView(MenuButtons.AddPackageFsprite, this, this.getResList(ResList.FSpriteBin));
            this.tabDict.push(buttonList);
            buttonList = new BindListView(MenuButtons.BindFgui, this, this.getResList(ResList.FguiBin));
            this.tabDict.push(buttonList);
            buttonList = new SpineListView(MenuButtons.SpineSK, this, this.getResList(ResList.SpineSK));
            this.tabDict.push(buttonList);
            for (var i = 0; i < ResList.List.length; i++) {
                buttonList = new ResListView(ResList.List[i], this, this.getResList(ResList.List[i]));
                this.tabDict.push(buttonList);
            }
            this.openTab(MenuButtons.MainMenu);
            var mainMenuButton = new Button(null, "主菜单");
            mainMenuButton.width = 300;
            mainMenuButton.height = 80;
            mainMenuButton.labelSize = 30;
            mainMenuButton.mouseEnabled = true;
            mainMenuButton.on(laya.events.Event.CLICK, this, this.onClickBackMainMenu);
            this.container.addChild(mainMenuButton);
            mainMenuButton = new Button(null, "BindAll");
            mainMenuButton.width = 300;
            mainMenuButton.height = 80;
            mainMenuButton.labelSize = 30;
            mainMenuButton.mouseEnabled = true;
            mainMenuButton.on(laya.events.Event.CLICK, this, this.onClicBindAll);
            mainMenuButton.y = 100;
            this.container.addChild(mainMenuButton);
            mainMenuButton = new Button(null, "创建所有单位动画");
            mainMenuButton.width = 300;
            mainMenuButton.height = 80;
            mainMenuButton.labelSize = 30;
            mainMenuButton.mouseEnabled = true;
            mainMenuButton.on(laya.events.Event.CLICK, this, this.createAllUnitSpine);
            mainMenuButton.x = 400;
            mainMenuButton.y = 100;
            this.container.addChild(mainMenuButton);
            mainMenuButton = new Button(null, "销毁所有单位动画");
            mainMenuButton.width = 300;
            mainMenuButton.height = 80;
            mainMenuButton.labelSize = 30;
            mainMenuButton.mouseEnabled = true;
            mainMenuButton.on(laya.events.Event.CLICK, this, this.destoryAllUnitSpine);
            mainMenuButton.x = 400;
            mainMenuButton.y = 200;
            this.container.addChild(mainMenuButton);
            ButtonList.initPreMemorySize();
        };
        TestMemory.prototype.destoryAllUnitSpine = function () {
            this.destorySkeleton();
            this.destoryTemplet();
            this.destorySpineRes();
        };
        TestMemory.prototype.destorySkeleton = function () {
            while (this.skeletons.length > 0) {
                var tmp = this.skeletons.pop();
                tmp.removeSelf();
                tmp.destroy();
            }
        };
        TestMemory.prototype.destoryTemplet = function () {
            while (this.templets.length > 0) {
                var tmp = this.templets.pop();
                tmp.destroy();
                tmp.dispose();
            }
        };
        TestMemory.prototype.destorySpineRes = function () {
            while (this.spinePngUrls.length > 0) {
                Laya.loader.clearRes(this.spinePngUrls.pop(), true);
            }
            while (this.spineSkUrls.length > 0) {
                Laya.loader.clearRes(this.spineSkUrls.pop(), true);
            }
        };
        TestMemory.prototype.createAllUnitSpine = function () {
            var list = this.getResList(ResList.SpineSK);
            for (var i = 0; i < list.length; i++) {
                var path = list[i].path;
                if (path.indexOf("/spine/Female01") == 0 ||
                    path.indexOf("/spine/Female02") == 0 ||
                    path.indexOf("/spine/Female03") == 0 ||
                    path.indexOf("/spine/Male01") == 0 ||
                    path.indexOf("/spine/Male02") == 0 ||
                    path.indexOf("/spine/Male03") == 0) {
                    var skUrl = "res" + path;
                    var pngUrl = skUrl.replace(".sk", ".png");
                    var urls = [
                        { url: pngUrl, type: Laya.Loader.IMAGE },
                        { url: skUrl, type: Laya.Loader.BUFFER }
                    ];
                    Laya.loader.load(urls, Laya.Handler.create(this, this.onLoadSpineRes, [skUrl, pngUrl]));
                    this.spinePngUrls.push(pngUrl);
                    this.spineSkUrls.push(skUrl);
                }
            }
        };
        TestMemory.prototype.onLoadSpineRes = function (skUrl, pngUrl) {
            var _this = this;
            var png = Laya.loader.getRes(pngUrl);
            var sk = Laya.loader.getRes(skUrl);
            var templet = new Templet();
            templet.on(Event.COMPLETE, this, function () {
                var sk = templet.buildArmature(0);
                sk.x = Laya.stage.width * 0.5;
                sk.y = Laya.stage.height - 50;
                sk.play(0, true);
                Laya.stage.addChild(sk);
                _this.skeletons.push(sk);
            });
            templet.parseData(png, sk);
            this.templets.push(templet);
            console.log("this.templets.length=" + this.templets.length);
        };
        TestMemory.prototype.openTab = function (menu) {
            for (var i = 0; i < this.tabDict.length; i++) {
                if (this.tabDict[i].menu == menu) {
                    if (!this.tabDict[i].parent) {
                        this.container.addChildAt(this.tabDict[i], 0);
                    }
                }
                else {
                    if (this.tabDict[i].parent) {
                        this.tabDict[i].removeSelf();
                    }
                }
            }
        };
        TestMemory.prototype.loadResListJson = function () {
            for (var i = 0; i < ResList.List.length; i++) {
                console.log("BeginLoad:" + ResList.List[i]);
                Laya.loader.load(ResList.List[i], Handler.create(this, this.onLoadResList, [ResList.List[i]]), null, Laya.Loader.JSON);
            }
        };
        TestMemory.prototype.onLoadResList = function (path) {
            console.log("onLoadResList:" + path);
            this.resListDict[path] = Laya.loader.getRes(path);
            this.loadResListNum++;
            if (this.loadResListNum >= ResList.List.length) {
                this.createTabs();
            }
        };
        TestMemory.prototype.getResList = function (path) {
            return this.resListDict[path];
        };
        return TestMemory;
    }());
    ZFTests.TestMemory = TestMemory;
})(ZFTests || (ZFTests = {}));
/*------------------------------------------------------------ */
var Games;
(function (Games) {
    var GameLaunch = /** @class */ (function () {
        function GameLaunch() {
        }
        GameLaunch.prototype.install = function () {
            // Laya.init(ScreenSetting.developWidth, ScreenSetting.developHeight, Laya.CanvasMeshRender);
            Laya.init(ScreenSetting.developWidth, ScreenSetting.developHeight, Laya.WebGL);
            // Laya.stage["__screenHeightSub"] = 400;
            // laya.utils.Log.enable();
            // laya.utils.Log.toggle();
            // laya.debug.DebugPanel.init();
            // Laya.init(document.body.clientWidth, document.body.clientHeight, Laya.WebGL);
            // 状态显示
            if (BrowserDetect.isShowState)
                laya.utils.Stat.show(0, 0);
            //设置适配模式
            // Laya.stage.scaleMode = Laya.Stage.SCALE_FIXED_AUTO;
            Laya.stage.scaleMode = BrowserDetect.isMobile ? Laya.Stage.SCALE_FIXED_AUTO : Laya.Stage.SCALE_SHOWALL;
            Laya.stage.alignH = "center";
            Laya.stage.alignV = "top";
            // 初始化UI层级容器
            Games.MenuLayer.install();
            this.loadVersion();
        };
        // 加载版本信息		
        GameLaunch.prototype.loadVersion = function () {
            //设置版本控制类型为使用文件名映射的方式
            Laya.ResourceVersion.type = Laya.ResourceVersion.FILENAME_VERSION;
            //加载版本信息文件
            Laya.ResourceVersion.enable("version.json?t=" + new Date().getTime(), Laya.Handler.create(this, this.onLoadedVersion));
        };
        GameLaunch.prototype.onLoadedVersion = function () {
            // new ZFTests.TestMemory();
            this.installSystem();
        };
        // 初始化系统
        GameLaunch.prototype.installSystem = function () {
            // 设置fgui文件后缀
            fairygui.UIConfig["packageFileExtension"] = Games.GuiSetting.packageFileExtension;
            // 绑定组件
            fgui.System.SystemBinder.bindAll();
            // 注册Loader类
            fairygui.UIObjectFactory.setLoaderExtension(FGLoader);
            //设置字体
            switch (LangManager.Instance.lang) {
                case LangType.zh_cn:
                    fairygui.UIConfig.defaultFont = "黑体";
                    break;
                default:
                    fairygui.UIConfig.defaultFont = "Arial";
                    break;
            }
            // 加载系统UI
            Laya.loader.load([
                { url: "res/fgui/System.bin", type: Laya.Loader.BUFFER },
                { url: "res/fgui/System@atlas0.png", type: Laya.Loader.IMAGE },
                { url: "res/fgui/System@atlas_5sasa.png", type: Laya.Loader.IMAGE },
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
            if (BrowserDetect.enableGM) {
                // 创建GM按钮
                var gm = fgui.System.GMLanuchButton.createInstance();
                gm.draggable = true;
                gm.dragBounds = new laya.maths.Rectangle(-50, -50, Laya.stage.width + 100, Laya.stage.height + 100);
                Games.MenuLayer.floatMsg.addChild(gm);
            }
            // fgui.System.StateView.show();
            // fairygui.GRoot.inst.displayObject.graphics.drawRect(0, 0, fairygui.GRoot.inst.width, fairygui.GRoot.inst.height, "yellow");
            GameLaunch.isRunEnd = true;
            if (window["Game"]) {
                Game.install();
            }
            // console.log("laya.utils.Stat");
            // for (let v in laya.utils.Stat)
            // {
            // 	console.log(v + "=" + laya.utils.Stat[v]);
            // }
        };
        GameLaunch.isRunEnd = false;
        return GameLaunch;
    }());
    Games.GameLaunch = GameLaunch;
})(Games || (Games = {}));
new Games.GameLaunch().install();
//# sourceMappingURL=GameLaunch.js.map
