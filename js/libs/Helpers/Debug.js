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