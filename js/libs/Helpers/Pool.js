var Pool = /** @class */ (function () {
    function Pool() {
    }
    // 获取对象
    Pool.getItem = function (cls) {
        var name = cls["name"];
        return laya.utils.Pool.getItemByClass(name, cls);
    };
    // 返回对象
    Pool.recover = function (item) {
        if (!item)
            return;
        var name = getClassName(item);
        laya.utils.Pool.recover(name, item);
    };
    return Pool;
}());
//# sourceMappingURL=Pool.js.map