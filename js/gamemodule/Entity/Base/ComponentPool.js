var Games;
(function (Games) {
    var ComponentPool = /** @class */ (function () {
        function ComponentPool() {
            this.dictionary = new Dictionary();
        }
        /** 从对象池取出对象 */
        ComponentPool.prototype.fetch = function (newCls) {
            var type = newCls["name"];
            if (this.dictionary.hasKey(type)) {
                var list = this.dictionary.getValue(type);
                if (list.length > 0) {
                    return list.pop();
                }
            }
            return new newCls();
        };
        /** 对象返回对象池 */
        ComponentPool.prototype.recycle = function (componet) {
            if (!this.dictionary.hasKey(componet.Type)) {
                var list = [];
                this.dictionary.add(componet.Type, list);
            }
            var poolList = this.dictionary.getValue(componet.Type);
            poolList.push(componet);
        };
        return ComponentPool;
    }());
    Games.ComponentPool = ComponentPool;
})(Games || (Games = {}));
//# sourceMappingURL=ComponentPool.js.map