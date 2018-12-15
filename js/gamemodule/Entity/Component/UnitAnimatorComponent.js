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
    var Event = laya.events.Event;
    /** 动画组件 */
    var UnitAnimatorComponent = /** @class */ (function (_super) {
        __extends(UnitAnimatorComponent, _super);
        function UnitAnimatorComponent() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            // 播放完成事件
            _this.sPlayEnd = new Signal();
            /** 分段动画序列 */
            _this.animSequence = [];
            /** 当前播放动画状态 */
            _this.currentAnimId = 0;
            _this.currentAnimName = "";
            _this.currentAnimLoop = false;
            /**
             * 播放动画
             * @param nameOrIndex
             * @param loop
             * @param force
             * @param start
             * @param end
             * @param freshSkin
             */
            _this._nameOrIndex = "zhanli1";
            _this._loop = true;
            return _this;
        }
        UnitAnimatorComponent.prototype.onRender = function () {
            if (this.animator) {
                if (this.currentAnimId != this.unit.unitData.currentAnimId) {
                    this.playAction(this.unit.unitData.currentAnimId);
                    this.currentAnimId = this.unit.unitData.currentAnimId;
                }
            }
        };
        /**
         * 设置动画播放体，可扩展为多种播放
         * @param skeleton
         */
        UnitAnimatorComponent.prototype.setAnimator = function (skeleton) {
            if (!this.animator) {
                this.animator = skeleton;
                this.animator.on(Event.STOPPED, this, this.onAnimatorPlayEnd);
            }
        };
        UnitAnimatorComponent.prototype.recycle = function () {
            if (this.animator) {
                this.animator.off(Event.STOPPED, this, this.onAnimatorPlayEnd);
                this.animator = null;
            }
        };
        //暂停移动动画
        UnitAnimatorComponent.prototype.pauseMoveAnim = function () {
            if (this.isMoveAnim) {
                this.animator.play(this.unit.unitData.info.idleName, true);
            }
        };
        UnitAnimatorComponent.prototype.resumeMoveAnim = function () {
            if (this.isMoveAnim) {
                this.animator.play(this.currentAnimName, this.currentAnimLoop);
            }
        };
        Object.defineProperty(UnitAnimatorComponent.prototype, "isMoveAnim", {
            get: function () {
                var currentAnimName = this.unit.unitData.currentAnimName;
                return currentAnimName == "zoulu1" || currentAnimName == "paodong1";
            },
            enumerable: true,
            configurable: true
        });
        //播放动作id
        UnitAnimatorComponent.prototype.playAction = function (actionId) {
            var actionCfg = Game.config.action.getConfig(actionId);
            if (actionCfg) {
                //单项循环动作
                if (actionCfg.loop == 1) {
                    this.animSequence.length = 0;
                    this.play(actionCfg.action, true);
                }
                //组动作
                else {
                    this.playList(actionCfg.actionSequence);
                }
            }
            else {
                console.error("error: playAction -> " + actionId);
            }
        };
        UnitAnimatorComponent.prototype.playList = function (animSequence) {
            this.animSequence = animSequence;
            this.playNextAnim();
        };
        UnitAnimatorComponent.prototype.onAnimatorPlayEnd = function () {
            this.playNextAnim();
            this.sPlayEnd.dispatch();
        };
        UnitAnimatorComponent.prototype.playNextAnim = function () {
            if (this.animSequence.length > 0) {
                var animId = this.animSequence.splice(0, 1)[0];
                var animCfg = this.getAnimConfg(animId);
                if (animCfg) {
                    var loop = (animCfg.loop == 0) ? false : true;
                    this.play(animCfg.action, loop);
                }
            }
        };
        UnitAnimatorComponent.prototype.play = function (anim, loop) {
            if (anim != "" && this.currentAnimName != anim) {
                this.currentAnimName = anim;
                this.currentAnimLoop = loop;
                this.__play(anim, loop);
                this.unit.unitData.currentAnimName = anim;
            }
        };
        UnitAnimatorComponent.prototype.__play = function (nameOrIndex, loop, force, start, end, freshSkin) {
            this._nameOrIndex = nameOrIndex;
            this._loop = loop;
            this._force = force;
            this._start = start;
            this._end = end;
            this._freshSkin = freshSkin;
            if (this.animator)
                this.animator.play(nameOrIndex, loop, force, start, end, freshSkin);
        };
        /** 播放最后一次动画 */
        UnitAnimatorComponent.prototype.playLast = function () {
            if (this.animator)
                this.animator.play(this._nameOrIndex, this._loop, this._force, this._start, this._end, this._freshSkin);
        };
        UnitAnimatorComponent.prototype.getAnimConfg = function (animId) {
            var cfg = Game.config.action.getConfig(animId);
            return cfg;
        };
        return UnitAnimatorComponent;
    }(Games.UnitComponent));
    Games.UnitAnimatorComponent = UnitAnimatorComponent;
})(Games || (Games = {}));
//# sourceMappingURL=UnitAnimatorComponent.js.map