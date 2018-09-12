/**
 * 事件
 */
var Emitter = /** @class */ (function () {
    function Emitter(isDispatchName) {
        if (isDispatchName === void 0) { isDispatchName = false; }
        /** 监听数组 */
        this.listeners = {};
        /** 是否把事件名称抛当参数抛给回调 */
        this.isDispatchName = false;
        this.isDispatchName = isDispatchName;
    }
    /**
     * 注册事件
     * @param name 事件名称
     * @param callback 回调函数
     * @param context 上下文
     */
    Emitter.prototype.add = function (name, callback, context) {
        var hasRegistered = false;
        var observers = this.listeners[name];
        if (!observers) {
            this.listeners[name] = [];
        }
        else {
            var length_1 = observers.length;
            for (var i = 0; i < length_1; i++) {
                var observer = observers[i];
                if (observer.comparAll(callback, context)) {
                    hasRegistered = true;
                }
            }
        }
        if (!hasRegistered) {
            this.listeners[name].push(new Observer(callback, context));
        }
    };
    /**
     * 移除事件
     * @param name 事件名称
     * @param callback 回调函数
     * @param context 上下文
     */
    Emitter.prototype.remove = function (name, callback, context) {
        var observers = this.listeners[name];
        if (!observers)
            return;
        var length = observers.length;
        for (var i = 0; i < length; i++) {
            var observer = observers[i];
            if (observer.compar(context)) {
                observers.splice(i, 1);
                break;
            }
        }
        if (observers.length == 0) {
            delete this.listeners[name];
        }
    };
    /**
     * 发送事件
     * @param name 事件名称
     */
    Emitter.prototype.dispatch = function (name) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var observers = this.listeners[name];
        if (!observers)
            return;
        var length = observers.length;
        for (var i = length - 1; i >= 0; i--) {
            var observer = observers[i];
            if (this.isDispatchName) {
                observer.notify.apply(observer, [name].concat(args));
            }
            else {
                observer.notify.apply(observer, args);
            }
        }
    };
    return Emitter;
}());
/**
 * 观察者
 */
var Observer = /** @class */ (function () {
    function Observer(callback, context) {
        /** 回调函数 */
        this.callback = null;
        /** 上下文 */
        this.context = null;
        var self = this;
        self.callback = callback;
        self.context = context;
    }
    /**
     * 发送通知
     * @param args 不定参数
     */
    Observer.prototype.notify = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var self = this;
        (_a = self.callback).call.apply(_a, [self.context].concat(args));
        var _a;
    };
    /**
     * 上下文比较
     * @param context 上下文
     */
    Observer.prototype.compar = function (context) {
        return context == this.context;
    };
    /**
     * 上下文比较
     * @param context 上下文
     */
    Observer.prototype.comparAll = function (callback, context) {
        return callback == this.callback && context == this.context;
    };
    return Observer;
}());
//# sourceMappingURL=Emitter.js.map