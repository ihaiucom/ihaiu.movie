/**
 * 框架顶级工具类
 * author chuhua
 */
var Frame = /** @class */ (function () {
    function Frame() {
    }
    Object.defineProperty(Frame, "MessageCenter", {
        /**
         * 消息处理中心
         */
        get: function () {
            return frame.system.MessageCenter.getInstance();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Frame, "CallbackMappingCenter", {
        /**
         * 回调映射管理中心
         */
        get: function () {
            return frame.system.CallbackMappingCenter.getInstance();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Frame, "Tool", {
        /**
         * 其他工具
         */
        get: function () {
            return frame.system.ToolMod.getInstance();
        },
        enumerable: true,
        configurable: true
    });
    return Frame;
}());
//# sourceMappingURL=Frame.js.map