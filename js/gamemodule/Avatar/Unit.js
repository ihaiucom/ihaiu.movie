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
    var Sprite = laya.display.Sprite;
    /**
     * 单位视图
     */
    var Unit = /** @class */ (function (_super) {
        __extends(Unit, _super);
        function Unit(unitModel) {
            var _this = _super.call(this) || this;
            /** 单位唯一id */
            _this.uid = 0;
            /** 单位id */
            _this.id = 0;
            /**当前播放动画名 */
            _this.currentAnimName = "";
            /** 当前播放动画循环状态 */
            _this.currentAnimLoop = false;
            /** 默认缩放比 */
            _this.scaleFactor = 1;
            /** 分段动画序列 */
            _this.animSequence = [];
            /** 视图是否已经销毁 */
            _this.isDestoryed = false;
            //方向
            _this._direction = Games.DirtionType.Right;
            _this.unitModel = unitModel;
            _this.animator = new Games.CAnimation();
            return _this;
        }
        Unit.prototype.dispose = function () {
            if (this.isDestoryed)
                return;
            this.isDestoryed = true;
            this.animator.sPlayEnd.remove(this.onAnimPlayEnd, this);
            this.animator.dispose();
            this.removeHeadIcon();
            this.destroy();
        };
        /**
         * 构建单位
         * @param info
         * @param onComplete
         */
        Unit.prototype.creat = function (info, caller, complete, error) {
            this.uid = info.uid;
            (this.uid == 0) && (this.uid = ++Games.UnitCreator.incrementId);
            info.uid = this.uid;
            this.id = info.id;
            this.direction = info.direction;
            this.setBounds(new Rectangle(-this.width / 2, -this.height, this.width, this.height));
            this.hitArea = new Rectangle(-this.width / 2, -this.height, this.width, this.height);
            // this.creatGraph(-this.width / 2, -this.height, this.width, this.height);
            //animator
            this.animator.sPlayEnd.add(this.onAnimPlayEnd, this);
            this.animator.crossFade(info.idleName, true); //idle
            this.animator.loadAnim(info.texturePath, info.skeletonPath, this, caller, complete, error);
            //
            this.startAnimator();
        };
        Unit.prototype.creatGraph = function (x, y, w, h) {
            var sp = new Sprite();
            //画矩形
            sp.graphics.drawRect(x, y, w, h, "#ff9900");
            sp.mouseEnabled = false;
            sp.size(w, h);
            this.addChild(sp);
        };
        //设置缩放比
        Unit.prototype.setScale = function (scaleFactor, speedMode) {
            this.scaleFactor = scaleFactor;
            this.scale(scaleFactor, scaleFactor, speedMode);
        };
        Unit.prototype.setTopHeadIcon = function (headIcon, sourceScale) {
            if (sourceScale === void 0) { sourceScale = 0.26; }
            if (this.headIcon) {
                this.headIcon.removeFromParent();
                this.headIcon = null;
            }
            if (headIcon) {
                this.headIcon = headIcon;
                var headIconScale = 1 / sourceScale;
                var dir = (this.direction == Games.DirtionType.Right) ? 1 : -1;
                this.headIcon.skewY = (this.direction == Games.DirtionType.Right) ? 0 : 180;
                this.headIcon.setScale(headIconScale, headIconScale);
                var bound = this.getBounds();
                this.headIcon.x = -(bound.width / 4 + dir * headIcon.width * headIconScale / 2);
                this.headIcon.y = -(bound.height + headIcon.height) * headIconScale;
                this.addChild(headIcon.displayObject);
            }
        };
        Unit.prototype.removeHeadIcon = function () {
            if (this.headIcon) {
                this.headIcon.dispose();
                this.headIcon = null;
            }
        };
        //开启关闭阴影
        Unit.prototype.openShadow = function (val) {
            if (val === void 0) { val = true; }
            if (this.shadow) {
                this.shadow.visible = val;
            }
            else {
                val && this.createShadow();
            }
        };
        // 创建阴影        
        Unit.prototype.createShadow = function () {
            this.shadow = fgui.Common.AvatarShadow.createInstance();
            var shadowScale = 1 / this.scaleFactor;
            this.shadow.setScale(shadowScale, shadowScale);
            this.shadow.setXY(-this.shadow.sourceWidth * shadowScale / 2, -this.shadow.sourceHeight * shadowScale / 3);
            this.addChildAt(this.shadow.displayObject, 0);
        };
        Object.defineProperty(Unit.prototype, "direction", {
            get: function () {
                return this._direction;
            },
            set: function (value) {
                if (value == Games.DirtionType.Right) {
                    this.skewY = 0;
                    this.headIcon && (this.headIcon.skewY = 0);
                }
                if (value == Games.DirtionType.Left) {
                    this.skewY = 180;
                    this.headIcon && (this.headIcon.skewY = 180);
                }
                this._direction = value;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * 暂停动画
         */
        Unit.prototype.pauseAnimator = function () {
            this.animator.recoverSkeleton();
        };
        /**
         * 启动动画
         */
        Unit.prototype.startAnimator = function () {
            this.animator.getSkeleton();
        };
        //暂停移动动画
        Unit.prototype.pauseMoveAnim = function () {
            if (this.isMoveAnim) {
                this.animator.play(this.unitModel.info.idleName, true);
            }
        };
        Unit.prototype.resumeMoveAnim = function () {
            if (this.isDestoryed) {
                return;
            }
            if (this.isMoveAnim) {
                this.animator.play(this.currentAnimName, this.currentAnimLoop);
            }
        };
        Object.defineProperty(Unit.prototype, "isMoveAnim", {
            get: function () {
                return this.currentAnimName == "zoulu1" || this.currentAnimName == "paodong1";
            },
            enumerable: true,
            configurable: true
        });
        //播放动作名
        Unit.prototype.play = function (anim, loop) {
            if (this.isDestoryed) {
                console.log("Avatar.play: " + anim);
                return;
            }
            if (anim != "" && this.currentAnimName != anim) {
                this.currentAnimName = anim;
                this.currentAnimLoop = loop;
                this.animator.play(anim, loop);
                if (this.unitModel) {
                    this.unitModel.currentAnimName = anim;
                }
            }
        };
        //播放动作id
        Unit.prototype.playAction = function (actionId) {
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
        Unit.prototype.playList = function (animSequence) {
            this.animSequence = animSequence;
            this.playNextAnim();
        };
        Unit.prototype.onAnimPlayEnd = function () {
            this.playNextAnim();
        };
        Unit.prototype.playNextAnim = function () {
            if (this.animSequence.length > 0) {
                var animId = this.animSequence.splice(0, 1)[0];
                var animCfg = this.getAnimConfg(animId);
                if (animCfg) {
                    var loop = (animCfg.loop == 0) ? false : true;
                    this.play(animCfg.action, loop);
                }
            }
        };
        Unit.prototype.getAnimConfg = function (animId) {
            var cfg = Game.config.action.getConfig(animId);
            return cfg;
        };
        return Unit;
    }(Sprite));
    Games.Unit = Unit;
})(Games || (Games = {}));
//# sourceMappingURL=Unit.js.map