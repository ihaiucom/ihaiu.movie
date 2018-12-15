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
        var CompositeNode = /** @class */ (function (_super) {
            __extends(CompositeNode, _super);
            function CompositeNode() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.childrenNodes = [];
                return _this;
            }
            CompositeNode.prototype.addNode = function (node) {
                this.childrenNodes.push(node);
                BTree.Node.SetParentNode(node, this);
            };
            CompositeNode.prototype.removeNode = function (node) {
                var index = this.childrenNodes.indexOf(node);
                if (index != -1) {
                    this.childrenNodes.splice(index, 1);
                }
            };
            CompositeNode.prototype.onChildrenNodesUpdate = function () {
            };
            return CompositeNode;
        }(BTree.Node));
        BTree.CompositeNode = CompositeNode;
    })(BTree = Games.BTree || (Games.BTree = {}));
})(Games || (Games = {}));
//# sourceMappingURL=CompositeNode.js.map