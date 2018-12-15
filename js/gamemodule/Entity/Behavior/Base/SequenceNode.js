var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Games;
(function (Games) {
    var BTree;
    (function (BTree) {
        var SequenceNode = /** @class */ (function (_super) {
            __extends(SequenceNode, _super);
            function SequenceNode() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            SequenceNode.prototype.onChildrenNodesUpdate = function () {
                for (var i = 0; i < this.childrenNodes.length; i++) {
                    var node = this.childrenNodes[i];
                    var state = node.update();
                    if (state == BTree.TaskState.Inactive || (state == BTree.TaskState.Success) || state == BTree.TaskState.Running)
                        continue;
                    else if (state == BTree.TaskState.Failure)
                        return BTree.TaskState.Failure;
                }
                return BTree.TaskState.Running;
            };
            return SequenceNode;
        }(BTree.CompositeNode));
        BTree.SequenceNode = SequenceNode;
    })(BTree = Games.BTree || (Games.BTree = {}));
})(Games || (Games = {}));
//# sourceMappingURL=SequenceNode.js.map