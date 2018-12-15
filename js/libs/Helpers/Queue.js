var Queue = /** @class */ (function () {
    function Queue() {
        this.items = [];
    }
    // 在队列尾部添加一个或者多个元素
    Queue.prototype.enqueue = function (element) {
        this.items.push(element);
    };
    // 移除队列顶部的元素，并返回被移除的元素
    Queue.prototype.dequeue = function () {
        return this.items.shift();
    };
    // 清空队列
    Queue.prototype.remove = function () {
        this.items = [];
    };
    // 返回队列顶部的元素，不对队列本身做修改
    Queue.prototype.front = function () {
        return this.items[0];
    };
    // 判断队列是否为空
    Queue.prototype.isEmpty = function () {
        return this.items.length === 0;
    };
    // 返回队列里面元素的个数
    Queue.prototype.length = function () {
        return this.items.length;
    };
    Queue.prototype.toString = function () {
        this.items.forEach(function (item, index) {
            console.log(index + 1 + ":" + item);
        });
    };
    return Queue;
}());
//# sourceMappingURL=Queue.js.map