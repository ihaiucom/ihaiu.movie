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
    //======================
    // 模块 数据模型 管理器
    //----------------------
    var ModelManager = /** @class */ (function (_super) {
        __extends(ModelManager, _super);
        function ModelManager() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        // 初始化
        ModelManager.prototype.install = function () {
            this.initList();
            for (var i = 0; i < this.list.length; i++) {
                this.list[i].install();
            }
        };
        return ModelManager;
    }(Games.ModelManagerList));
    Games.ModelManager = ModelManager;
})(Games || (Games = {}));
//# sourceMappingURL=ModelManager.js.map