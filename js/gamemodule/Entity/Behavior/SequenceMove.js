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
    var SequnceNode = Games.BTree.SequenceNode;
    var TaskState = Games.BTree.TaskState;
    /** 移动决策--Sequence */
    var SequenceMove = /** @class */ (function (_super) {
        __extends(SequenceMove, _super);
        function SequenceMove() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            /** 是否启动 */
            _this.isStarted = false;
            /** 是否完成 */
            _this.isComplete = true;
            return _this;
        }
        SequenceMove.prototype.initAgent = function (agent) {
            this.unitAgent = agent;
        };
        SequenceMove.prototype.onStart = function () {
            var _this = this;
            this.isStarted = true;
            this.isComplete = false;
            this.childrenNodes.forEach(function (node) {
                node.unitAgent = _this.unitAgent;
            });
        };
        SequenceMove.prototype.onUpdate = function () {
            return this.onChildrenNodesUpdate();
        };
        SequenceMove.prototype.onChildrenNodesUpdate = function () {
            if (this.childrenNodes.length == 0 && this.isCurrentNodeEnd) {
                return TaskState.Success;
            }
            if (!this.currentNode)
                this.nextChildNode();
            if (this.currentNode) {
                var state = this.currentNode.update();
                if (state == TaskState.Success) {
                    this.currentNode = null;
                }
            }
            return TaskState.Running;
        };
        SequenceMove.prototype.nextChildNode = function () {
            if (this.childrenNodes.length > 0)
                this.currentNode = this.childrenNodes.shift();
        };
        Object.defineProperty(SequenceMove.prototype, "isCurrentNodeEnd", {
            get: function () {
                return this.currentNode == null;
            },
            enumerable: true,
            configurable: true
        });
        SequenceMove.prototype.onEnd = function () {
            // console.log("SequenceMove -- onEnd");
            this.recycle();
        };
        SequenceMove.prototype.recycle = function () {
            this.unitAgent = null;
            this.currentNode = null;
            this.isComplete = true;
            this.isStart = false;
            Pool.recover(this);
        };
        return SequenceMove;
    }(SequnceNode));
    Games.SequenceMove = SequenceMove;
})(Games || (Games = {}));
//# sourceMappingURL=SequenceMove.js.map