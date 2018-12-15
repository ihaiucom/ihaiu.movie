//========================
// 回调辅助类
//-------------------------
var CallbackHandler = /** @class */ (function () {
    function CallbackHandler() {
    }
    // 调用
    CallbackHandler.prototype.apply = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        this.handler.apply(this.self, args);
    };
    // 相等判断
    CallbackHandler.prototype.equals = function (handler, self) {
        return this.handler == handler && this.self == self;
    };
    return CallbackHandler;
}());
//# sourceMappingURL=CallbackHandler.js.map