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