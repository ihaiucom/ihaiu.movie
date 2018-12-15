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
    //粒子-发射器
    var ParticleEmitter2D = /** @class */ (function (_super) {
        __extends(ParticleEmitter2D, _super);
        function ParticleEmitter2D() {
            var _this = _super.call(this) || this;
            _this.DELTA_TIME = 0.02;
            _this.isStart = false;
            _this.isRunning = false;
            //emitNum
            _this._emitNum = 2; //每个发射时间间隔发射数量
            _this.frameId = 0;
            _this.isStart = false;
            _this.particles = [];
            _this.initializers = [];
            _this.actioners = [];
            _this.creater = new Games.ParticleFactory();
            return _this;
        }
        //添加-特效初始化设置
        ParticleEmitter2D.prototype.addInitializer = function (initializer) {
            initializer.addedToEmitter(this);
            this.initializers.push(initializer);
        };
        //添加-特效行为
        ParticleEmitter2D.prototype.addActoiner = function (action) {
            action.addedToEmitter(this);
            this.actioners.push(action);
        };
        //创建-特效
        ParticleEmitter2D.prototype.creatParticle = function () {
            var particle = this.creater.creatParticle();
            for (var _i = 0, _a = this.initializers; _i < _a.length; _i++) {
                var initializer = _a[_i];
                initializer.initialize(this, particle);
            }
            this.particles.push(particle);
            return particle;
        };
        Object.defineProperty(ParticleEmitter2D.prototype, "emitNum", {
            get: function () {
                return this._emitNum;
            },
            //设置-每个发射时间间隔发射数量
            set: function (value) {
                this._emitNum = value;
            },
            enumerable: true,
            configurable: true
        });
        ParticleEmitter2D.prototype.start = function () {
            if (!this.isRunning)
                Laya.timer.loop(this.DELTA_TIME * 1000, this, this.update, null, true, true);
            this.isStart = true;
            this.isRunning = true;
            for (var i = 0; i < this.emitNum; i++) {
                this.creatParticle();
            }
        };
        ParticleEmitter2D.prototype.pause = function () {
            if (this.isRunning) {
                Laya.timer.clear(this, this.update);
            }
            this.isRunning = false;
        };
        ParticleEmitter2D.prototype.resume = function () {
            if (!this.isRunning) {
                Laya.timer.loop(this.DELTA_TIME * 1000, this, this.update, null, true, true);
            }
            this.isRunning = true;
        };
        ParticleEmitter2D.prototype.stop = function () {
            var _this = this;
            this.isStart = false;
            this.isRunning = false;
            this.killAllParticles();
            this.removeChildren();
            this.removeSelf();
            Laya.timer.clear(this, this.update);
            //延迟一帧销毁
            setTimeout(function () {
                _this.creater.clearPool();
            }, this.DELTA_TIME * 1000);
        };
        /** 返回对象池 */
        ParticleEmitter2D.prototype.recover = function () {
            this.pause();
            this.removeChildren();
            this.removeSelf();
            this.killAllParticles();
        };
        ParticleEmitter2D.prototype.update = function () {
            if (!this.isRunning) {
                return;
            }
            this.frameId++;
            if (this.frameId % 2 == 0) {
                this.frameId = 0;
                for (var i = 0; i < this.emitNum; i++) {
                    this.creatParticle();
                }
            }
            var len = this.actioners.length;
            var len2 = this.particles.length;
            var action;
            var particle2D;
            for (var i = 0; i < len; i++) {
                action = this.actioners[i];
                for (var j = len2 - 1; j >= 0; j--) {
                    particle2D = this.particles[j];
                    action.update(this, particle2D, this.DELTA_TIME);
                }
            }
            for (var i = len2 - 1; i >= 0; i--) {
                particle2D = this.particles[i];
                if (particle2D.isDead) {
                    this.particles.splice(i, 1);
                    this.creater.disposeParticle(particle2D);
                }
            }
        };
        ParticleEmitter2D.prototype.killAllParticles = function () {
            for (var i = this.particles.length - 1; i >= 0; i--) {
                var particle2D = this.particles[i];
                this.creater.disposeParticle(particle2D);
            }
            this.particles.length = 0;
        };
        return ParticleEmitter2D;
    }(Sprite));
    Games.ParticleEmitter2D = ParticleEmitter2D;
})(Games || (Games = {}));
//# sourceMappingURL=ParticleEmitter2D.js.map