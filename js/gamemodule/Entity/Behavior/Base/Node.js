var Games;
(function (Games) {
    var BTree;
    (function (BTree) {
        var Node = /** @class */ (function () {
            function Node() {
                this.isStart = false;
                this._isPaused = false;
            }
            Node.Update = function (node) {
                if (node == null || node.isPaused)
                    return BTree.TaskState.Inactive;
                if (!node.isStart)
                    node.onStart();
                var state = node.onUpdate();
                if (state == BTree.TaskState.Failure || state == BTree.TaskState.Success)
                    node.onEnd();
                return state;
            };
            Node.SetParentNode = function (node, parent) {
                node.parentNode = parent;
            };
            Object.defineProperty(Node.prototype, "isPaused", {
                get: function () {
                    return this._isPaused;
                },
                set: function (val) {
                    this._isPaused = val;
                    val && this.onPause();
                    !val && this.onResume();
                },
                enumerable: true,
                configurable: true
            });
            /** 执行周期 */
            Node.prototype.onStart = function () {
                this.isStart = true;
            };
            Node.prototype.update = function () {
                return Node.Update(this);
            };
            Node.prototype.onUpdate = function () {
                if (this.isPaused)
                    return BTree.TaskState.Inactive;
                return BTree.TaskState.Running;
            };
            Node.prototype.onPause = function () { };
            Node.prototype.onResume = function () { };
            Node.prototype.onEnd = function () { };
            return Node;
        }());
        BTree.Node = Node;
    })(BTree = Games.BTree || (Games.BTree = {}));
})(Games || (Games = {}));
//# sourceMappingURL=Node.js.map