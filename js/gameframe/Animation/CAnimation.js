var Games;
(function (Games) {
    var Event = laya.events.Event;
    var CAnimation = /** @class */ (function () {
        // private skeletonData: ArrayBuffer;      //骨骼动画信息及纹理分块信息
        // private texture: Texture;               //骨骼动画用到的纹理
        function CAnimation() {
            // 播放完成事件
            this.sPlayEnd = new Signal();
            this.curSkinIndex = 0; //当前皮肤索引
            this.enableHasSkeleton = true;
            this._nameOrIndex = "zhanli1";
            this._loop = true;
            this.init();
        }
        CAnimation.prototype.init = function () {
            this.dict = new Dictionary();
            // this.animTemlet = new Templet();
            // this.animTemlet.on(Event.COMPLETE, this, this.parseAnimComplete);
            // this.animTemlet.on(Event.ERROR, this, this.parseAnimError);
        };
        /**
         * 销毁动画
         */
        CAnimation.prototype.dispose = function () {
            this.recoverSkeleton();
            // this.animTemlet.off(Event.COMPLETE, this, this.parseAnimComplete);
            // this.animTemlet.off(Event.ERROR, this, this.parseAnimError);
            // this.animTemlet.destroy();
            this.animLoadCompleteCallBack = null;
            this.animLoadErrorCallBack = null;
            // this.skeletonData = null;
            this.dict.clear();
        };
        Object.defineProperty(CAnimation.prototype, "Skeleton", {
            get: function () {
                return this.animator;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * 获取骨骼从缓存池
         */
        CAnimation.prototype.getSkeleton = function () {
            this.enableHasSkeleton = true;
            GameBoone.skeletonCache.requrestItem(this.texturePath, this.skeletonPath, this, this.onSkeletonComplete, this.onSkeletonError);
        };
        /**
         * 返回骨骼到缓存池
         */
        CAnimation.prototype.recoverSkeleton = function (skeleton) {
            this.enableHasSkeleton = false;
            if (!skeleton) {
                skeleton = this.animator;
                this.animator = null;
            }
            if (skeleton) {
                skeleton.off(Event.STOPPED, this, this.onSkeletonPlayEnd);
                GameBoone.skeletonCache.recoverItem(this.texturePath, skeleton);
            }
        };
        /**
         * @public
         * 加载，解析纹理和骨骼动画信息
         * @param texturePath   纹理文件路径
         * @param skeletonPath  骨骼文件路径
         * @param parent        添加的容器节点
         * @param isChangeSkin  是否需要换皮肤
         * @param complete      解析成功回调
         * @param error         解析失败回调
         */
        CAnimation.prototype.loadAnim = function (texturePath, skeletonPath, parent, isChangeSkin, complete, error) {
            if (isChangeSkin === void 0) { isChangeSkin = true; }
            this.texturePath = texturePath;
            this.skeletonPath = skeletonPath;
            this.parent = parent;
            this.isChangeSkin = isChangeSkin;
            this.animLoadCompleteCallBack = complete;
            this.animLoadErrorCallBack = error;
        };
        /**
        * 动画解析成功
        */
        CAnimation.prototype.onSkeletonComplete = function (skeleton) {
            if (!this.enableHasSkeleton) {
                this.recoverSkeleton(skeleton);
                this.animator = null;
                return;
            }
            if (this.animator) {
                this.recoverSkeleton();
            }
            this.animator = skeleton;
            this.animator.on(Event.STOPPED, this, this.onSkeletonPlayEnd);
            // this.animator.showSkinByIndex(0);
            this.playLast();
            this.parent.addChild(this.animator);
            // this.animator.on(Event.LABEL, this, this.onSpineLabel);
            if (this.animLoadCompleteCallBack != null) {
                this.animLoadCompleteCallBack.apply(null);
                this.animLoadCompleteCallBack = null;
            }
        };
        /**
         * 动画解析错误
         */
        CAnimation.prototype.onSkeletonError = function () {
            if (this.animLoadErrorCallBack != null) {
                this.animLoadErrorCallBack.apply(null);
                this.animLoadErrorCallBack = null;
            }
        };
        CAnimation.prototype.onSkeletonPlayEnd = function () {
            this.sPlayEnd.dispatch();
        };
        /**
         * 设置骨骼槽位贴图
         * @param slotName  槽位名
         * @param slotTexturePath   自定义纹理资源路径
         */
        CAnimation.prototype.setSlotSkinPath = function (slotName, slotTexturePath, useScale) {
            var _this = this;
            if (useScale === void 0) { useScale = true; }
            var slotTexture;
            var onAssetsLoaded = function (result) {
                slotTexture = Loader.getRes(slotTexturePath);
                _this.setSlotSkin(slotName, slotTexture, useScale);
            };
            Laya.loader.load([{ url: slotTexturePath, type: Loader.IMAGE }], Handler.create(this, onAssetsLoaded));
            var slotBone = this.animator.getSlotByName(slotName);
        };
        /**
         * 设置骨骼槽位贴图
         * @param slotName  槽位名
         * @param texture   自定义纹理
         */
        CAnimation.prototype.setSlotSkin = function (slotName, texture, useScale) {
            if (useScale === void 0) { useScale = true; }
            var slotBone = this.animator.getSlotByName(slotName);
            texture.active();
            this.animator.setSlotSkin(slotName, texture);
            var scX = texture.width;
            var scY = texture.height;
            var scaleFactor = 1;
            if (useScale) {
                scaleFactor = 1 / CAnimation.SCALE_DEFAULT;
            }
            slotBone.currDisplayData.transform.scX = scX * scaleFactor;
            slotBone.currDisplayData.transform.scY = scY * scaleFactor;
        };
        /**
         * 恢复槽位为默认皮肤
         * @param slotName
         */
        CAnimation.prototype.resetSlotSkin = function (slotName) {
            var slotBone = this.animator.getSlotByName(slotName);
            slotBone.currDisplayData.transform.scX = 1;
            slotBone.currDisplayData.transform.scY = 1;
            slotBone.currDisplayData.destory();
            this.animator.setSlotSkin(slotName, null);
        };
        CAnimation.prototype.onSpineLabel = function (e) {
            var tEventData = e;
            console.log("onSpineLabel");
        };
        CAnimation.prototype.playLast = function () {
            if (this.animator)
                this.animator.play(this._nameOrIndex, this._loop, this._force, this._start, this._end, this._freshSkin);
        };
        /**
         * 播放动画
         * @param nameOrIndex
         * @param loop
         * @param force
         * @param start
         * @param end
         * @param freshSkin
         */
        CAnimation.prototype.play = function (nameOrIndex, loop, force, start, end, freshSkin) {
            this._nameOrIndex = nameOrIndex;
            this._loop = loop;
            this._force = force;
            this._start = start;
            this._end = end;
            this._freshSkin = freshSkin;
            if (this.animator)
                this.animator.play(nameOrIndex, loop, force, start, end, freshSkin);
        };
        CAnimation.prototype.crossFade = function (nameOrIndex, loop) {
            if (loop === void 0) { loop = true; }
            this.play(nameOrIndex, loop);
        };
        CAnimation.prototype.setBounds = function (rect) {
            this.animator.setBounds(rect);
        };
        CAnimation.prototype.getBounds = function () {
            return this.animator.getBounds();
        };
        CAnimation.prototype.scale = function (scaleX, scaleY, speedMode) {
            this.animator.scale(scaleX, scaleY, speedMode);
        };
        CAnimation.prototype.pos = function (x, y) {
            if (this.animator != null)
                this.animator.pos(x, y);
        };
        /**
         * 切换皮肤
         * @param nameOrIndex
         */
        CAnimation.prototype.changeSkin = function (nameOrIndex) {
            if (typeof (nameOrIndex) == "string") {
                this.animator.showSkinByName(nameOrIndex);
            }
            if (typeof (nameOrIndex) == "number") {
                this.animator.showSkinByIndex(nameOrIndex);
            }
        };
        CAnimation.SCALE_DEFAULT = 0.26;
        return CAnimation;
    }());
    Games.CAnimation = CAnimation;
})(Games || (Games = {}));
//# sourceMappingURL=CAnimation.js.map