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
    var ActionNode = Games.BTree.ActionNode;
    var TaskState = Games.BTree.TaskState;
    /** 移动节点 */
    var MoveAction = /** @class */ (function (_super) {
        __extends(MoveAction, _super);
        function MoveAction() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            /** 移动到目标点 */
            _this.pointX = 0;
            //移动动作Id
            _this.animId = 1004; //行走
            //移动结束动作名
            _this.endAnimName = "zhanli1";
            //移动结束动作是否循环播放
            _this.endAnimLoop = true;
            /** 速度 */
            _this.speed = 100; //行走速度
            _this.speedRun = 150; //跑步速度
            return _this;
        }
        Object.defineProperty(MoveAction.prototype, "run", {
            get: function () {
                return this.animId == 1005;
            },
            set: function (val) {
                this.animId = val ? 1005 : 1004;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MoveAction.prototype, "moveAnimId", {
            set: function (animId) {
                this.animId = animId;
            },
            enumerable: true,
            configurable: true
        });
        MoveAction.prototype.init = function (unitAgent) {
            this.unitAgent = unitAgent;
        };
        MoveAction.prototype.onUpdate = function () {
            if (this.unitAgent) {
                this.unitAgent.playAction(this.animId);
                var distance = Math.abs(this.unitAgent.x - this.pointX);
                this.unitAgent.direction = this.unitAgent.x > this.pointX ? Games.DirtionType.Left : Games.DirtionType.Right;
                var dir = (this.unitAgent.direction == Games.DirtionType.Right) ? 1 : -1;
                var dspeed = this.run ? this.speedRun : this.speed;
                this.unitAgent.x += dspeed * Games.GameDriver.time.renderTime.deltaTime * dir;
                if (this.checkMoveToEnd()) {
                    this.unitAgent.x = this.pointX;
                    this.unitAgent.play(this.endAnimName);
                    if (this.completeHandler) {
                        this.completeHandler.run();
                    }
                    return TaskState.Success;
                }
            }
            return TaskState.Running;
        };
        MoveAction.prototype.checkMoveToEnd = function () {
            var dspeed = this.run ? this.speedRun : this.speed;
            var deltaLength = dspeed * Games.GameDriver.time.updateTime.deltaTime;
            var distance = Math.abs(this.unitAgent.x - this.pointX);
            if (distance <= deltaLength) {
                return true;
            }
            return false;
        };
        /** 移动完成 */
        MoveAction.prototype.onEnd = function () {
            // console.log("MoveAction -- onEnd");
            this.unitAgent = null;
            this.recycle();
        };
        MoveAction.prototype.recycle = function () {
            this.pointX = 0;
            this.animId = 1004; //行走
            this.endAnimName = "zhanli1";
            this.endAnimLoop = true;
            this.completeHandler = null;
            Pool.recover(this);
        };
        return MoveAction;
    }(ActionNode));
    Games.MoveAction = MoveAction;
})(Games || (Games = {}));
//# sourceMappingURL=MoveAction.js.map