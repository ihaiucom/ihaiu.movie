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
    var TaskState = Games.BTree.TaskState;
    /** 单位移动组件 */
    var UnitMoveComponent = /** @class */ (function (_super) {
        __extends(UnitMoveComponent, _super);
        function UnitMoveComponent() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this._pause = false;
            return _this;
        }
        UnitMoveComponent.prototype.setSequenceMove = function (sequence) {
            this.setMoveEnd();
            this.sequenceMove = sequence;
        };
        UnitMoveComponent.prototype.onRender = function () {
            if (this.pause)
                return;
            if (this.sequenceMove) {
                var state = this.sequenceMove.update();
                if (state == TaskState.Success) {
                    this.endMove();
                }
            }
        };
        UnitMoveComponent.prototype.setMoveEnd = function () {
            if (this.sequenceMove != null) {
                this.sequenceMove.onEnd();
                this.sequenceMove = null;
                // console.log(this.Type + " -- 上一次序列完成 id=" + this.unit.unitData.info.id);
            }
        };
        UnitMoveComponent.prototype.endMove = function () {
            // console.log(this.Type + " -- 当前序列完成 id=" + this.unit.unitData.info.id);
            this.sequenceMove = null;
        };
        Object.defineProperty(UnitMoveComponent.prototype, "pause", {
            get: function () {
                return this._pause;
            },
            set: function (val) {
                val &&
                    this.sequenceMove &&
                    this.sequenceMove.unitAgent &&
                    this.sequenceMove.unitAgent.stand();
                this._pause = val;
            },
            enumerable: true,
            configurable: true
        });
        UnitMoveComponent.prototype.Pause = function () {
            this.pause = true;
        };
        UnitMoveComponent.prototype.Resume = function () {
            this.pause = false;
        };
        UnitMoveComponent.prototype.Stop = function () {
            this.setMoveEnd();
        };
        UnitMoveComponent.prototype.dispose = function () {
            this.setMoveEnd();
            _super.prototype.dispose.call(this);
        };
        return UnitMoveComponent;
    }(Games.UnitComponent));
    Games.UnitMoveComponent = UnitMoveComponent;
})(Games || (Games = {}));
//# sourceMappingURL=UnitMoveComponent.js.map