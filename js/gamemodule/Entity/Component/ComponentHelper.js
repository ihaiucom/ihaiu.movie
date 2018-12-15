var Games;
(function (Games) {
    var ComponentHelper = /** @class */ (function () {
        function ComponentHelper() {
        }
        /** 从对象池返回组件 */
        ComponentHelper.requestItem = function (newCls) {
            return Game.pool.componentPool.fetch(newCls);
        };
        return ComponentHelper;
    }());
    Games.ComponentHelper = ComponentHelper;
})(Games || (Games = {}));
//# sourceMappingURL=ComponentHelper.js.map