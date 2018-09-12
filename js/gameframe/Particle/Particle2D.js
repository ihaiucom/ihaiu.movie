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
    //粒子-用于跟踪粒子创建和显示状况
    var ParticleFactoryStats = /** @class */ (function () {
        function ParticleFactoryStats() {
        }
        ParticleFactoryStats.numParticles = 0;
        return ParticleFactoryStats;
    }());
    Games.ParticleFactoryStats = ParticleFactoryStats;
    //2D粒子-创建工厂类
    var ParticleFactory = /** @class */ (function () {
        function ParticleFactory() {
            this.particlePool = [];
        }
        //创建粒子
        ParticleFactory.prototype.creatParticle = function () {
            ParticleFactoryStats.numParticles++;
            if (this.particlePool.length > 0) {
                return this.particlePool.pop();
            }
            else {
                return new Particle2D();
            }
        };
        //销毁粒子
        ParticleFactory.prototype.disposeParticle = function (particle) {
            ParticleFactoryStats.numParticles--;
            particle.init();
            // particle.remove();
            this.particlePool.push(particle);
            // console.log("pool count:" + this.particlePool.length);
        };
        ParticleFactory.prototype.clearPool = function () {
            for (var _i = 0, _a = this.particlePool; _i < _a.length; _i++) {
                var particle = _a[_i];
                particle.destroy();
            }
            this.particlePool.length = 0;
        };
        return ParticleFactory;
    }());
    Games.ParticleFactory = ParticleFactory;
    //粒子-基类
    var Particle = /** @class */ (function (_super) {
        __extends(Particle, _super);
        function Particle() {
            var _this = _super.call(this) || this;
            _this.color = "#FFFFFF";
            _this.mass = 1;
            _this.energy = 1;
            _this.age = 0; // 当前生命值
            _this.lifetime = 0; // 生命值 单位秒
            _this.isDead = false;
            return _this;
        }
        //默认初始状态
        Particle.prototype.init = function () {
            this.color = "#FFFFFF";
            this.alpha = 1;
            this.scale(1, 1, true);
            this.mass = 1;
            this.energy = 1;
            this.age = 0;
            this.lifetime = 0;
            this.isDead = false;
        };
        return Particle;
    }(laya.display.Sprite));
    Games.Particle = Particle;
    var Particle2D = /** @class */ (function (_super) {
        __extends(Particle2D, _super);
        function Particle2D() {
            var _this = _super.call(this) || this;
            _this.x = 0;
            _this.y = 0;
            _this.previousX = 0; //上一次更新x增量值
            _this.previousY = 0; //上一次更新y增量值
            _this.velX = 0; //x方向速度
            _this.velY = 0; //y方向速度
            _this.rotation = 0; //旋转角度
            _this.angVelocity = 0; //旋转速度
            _this.init();
            return _this;
        }
        //默认初始状态
        Particle2D.prototype.init = function () {
            _super.prototype.init.call(this);
            this.x = 0;
            this.y = 0;
            this.previousX = 0;
            this.previousY = 0;
            this.velX = 0;
            this.velY = 0;
            this.rotation = 0;
            this.angVelocity = 0;
            if (this._renderer) {
                this._renderer.visible = false;
            }
        };
        Object.defineProperty(Particle2D.prototype, "renderer", {
            get: function () {
                return this._renderer;
            },
            set: function (val) {
                if (this._renderer) {
                    if (this._renderer !== val) {
                        this._renderer.removeFromParent();
                        this._renderer = null;
                    }
                    else {
                        this._renderer.visible = true;
                    }
                }
                this._renderer = val;
                val.x = 0;
                val.y = 0;
                this.addChild(val.displayObject);
            },
            enumerable: true,
            configurable: true
        });
        Particle2D.prototype.remove = function () {
            this.removeSelf();
        };
        return Particle2D;
    }(Particle));
    Games.Particle2D = Particle2D;
})(Games || (Games = {}));
//# sourceMappingURL=Particle2D.js.map