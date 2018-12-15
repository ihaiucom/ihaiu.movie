var Particle2D = Laya.Particle2D;
var ParticleSetting = Laya.ParticleSetting;
/**
 * 特效控制器
 */
var FxCtrl = /** @class */ (function () {
    function FxCtrl(fxKey) {
        // 显示层级
        this.displayIndex = -1;
        // 是否播放的	
        this.isPlay = true;
        // 是否已经销毁
        this.isDestroyed = false;
        // 是否中心点居中
        this.pivotCenter = true;
        this._x = 0;
        this._y = 0;
        this.key = fxKey;
        this.pathFull = Res.getFx(fxKey);
    }
    Object.defineProperty(FxCtrl.prototype, "x", {
        get: function () {
            return this._x;
        },
        set: function (value) {
            this._x = value;
            if (this.sp) {
                this.sp.x = this.pivotCenter ? value - this.sp.width * 0.5 : value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FxCtrl.prototype, "y", {
        get: function () {
            return this._y;
        },
        set: function (value) {
            this._y = value;
            if (this.sp) {
                this.sp.y = this.pivotCenter ? value - this.sp.height * 0.5 : value;
            }
        },
        enumerable: true,
        configurable: true
    });
    FxCtrl.prototype.load = function (onComplete) {
        this.onComplete = onComplete;
        Laya.loader.load(this.pathFull, Handler.create(this, this.onAssetsLoaded), null, Loader.JSON);
    };
    FxCtrl.prototype.onAssetsLoaded = function (settings) {
        if (this.isDestroyed) {
            return;
        }
        if (!settings.textureName.startsWith("fx/")) {
            settings.textureName = Res.rootFx + settings.textureName;
        }
        this.sp = new Particle2D(settings);
        this.sp.emitter.start();
        if (this.isPlay)
            this.sp.play();
        this.checkShow();
        this.sp.x = this.pivotCenter ? this.x - this.sp.width * 0.5 : this.x;
        this.sp.y = this.pivotCenter ? this.y - this.sp.height * 0.5 : this.y;
        if (this.onComplete) {
            this.onComplete.run();
        }
    };
    FxCtrl.prototype.showOn = function (parent, displayIndex) {
        if (displayIndex === void 0) { displayIndex = -1; }
        if (parent instanceof laya.display.Sprite) {
            this.parent = parent;
        }
        else {
            this.parent = parent.displayObject;
        }
        this.displayIndex = displayIndex;
        this.checkShow();
    };
    FxCtrl.prototype.checkShow = function () {
        if (this.parent && this.sp) {
            if (this.displayIndex >= 0) {
                this.parent.addChildAt(this.sp, this.displayIndex);
            }
            else {
                this.parent.addChild(this.sp);
            }
        }
    };
    Object.defineProperty(FxCtrl.prototype, "visible", {
        set: function (value) {
            if (this.sp) {
                this.sp.visible = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * 播放
     */
    FxCtrl.prototype.play = function () {
        if (this.sp) {
            this.sp.play();
        }
        this.isPlay = true;
    };
    /**
     * 停止
     */
    FxCtrl.prototype.stop = function () {
        if (this.sp) {
            this.sp.stop();
        }
        this.isPlay = false;
    };
    /**
     * 销毁
     */
    FxCtrl.prototype.destroy = function (destroyChild) {
        this.isDestroyed = true;
        if (this.sp) {
            this.sp.destroy(destroyChild);
            this.sp.removeSelf();
            this.sp = null;
        }
    };
    return FxCtrl;
}());
var FxManager = /** @class */ (function () {
    function FxManager() {
    }
    /**
     * 创建特效
     * @param fxKey  特效Key
     * @param parent  显示容器
     * @param displayIndex  显示层级
     * @param x  坐标x
     * @param y  坐标y
     * @param pivotCenter 特效中心点是否居中
     */
    FxManager.prototype.create = function (fxKey, parent, displayIndex, x, y, pivotCenter, onComplete) {
        if (displayIndex === void 0) { displayIndex = -1; }
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        if (pivotCenter === void 0) { pivotCenter = true; }
        var ctl = new FxCtrl(fxKey);
        ctl.pivotCenter = pivotCenter;
        ctl.showOn(parent, displayIndex);
        ctl.x = x;
        ctl.y = y;
        ctl.load(onComplete);
        return ctl;
    };
    /**
     * 创建粒子拖尾
     * @param renderClass fgui渲染类名
     * @param parent 显示容器
     * @param displayIndex 显示层级
     * @param x x坐标
     * @param y y坐标
     */
    FxManager.prototype.creatTrail = function (renderClassList, parent, displayIndex, x, y, autoStart) {
        if (displayIndex === void 0) { displayIndex = -1; }
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        if (autoStart === void 0) { autoStart = true; }
        var emitter2D = Game.pool.trailPool.requrestItem();
        emitter2D.x = x;
        emitter2D.y = y;
        emitter2D.showOn(parent, displayIndex);
        if (!emitter2D.hasRenderer) //fixed renderList
         {
            emitter2D.setRenderList(renderClassList);
        }
        if (autoStart) {
            emitter2D.start();
        }
        return emitter2D;
    };
    return FxManager;
}());
//# sourceMappingURL=Fx.js.map