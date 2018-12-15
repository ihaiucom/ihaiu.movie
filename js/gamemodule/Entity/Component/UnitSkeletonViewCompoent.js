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
    /** 单位组件--骨骼显示对象 */
    var UnitSkeletonViewCompoent = /** @class */ (function (_super) {
        __extends(UnitSkeletonViewCompoent, _super);
        function UnitSkeletonViewCompoent() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            //是否允许动画		
            _this.enableHasSkeleton = true;
            return _this;
        }
        UnitSkeletonViewCompoent.prototype.size = function (width, height) {
            if (this.displayObject)
                this.displayObject.size(width, height);
        };
        UnitSkeletonViewCompoent.prototype.scale = function (scaleFactor, speedMode) {
            if (this.displayObject)
                this.displayObject.scale(scaleFactor, scaleFactor, speedMode);
        };
        Object.defineProperty(UnitSkeletonViewCompoent.prototype, "x", {
            set: function (val) {
                if (this.displayObject)
                    this.displayObject.x = val;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(UnitSkeletonViewCompoent.prototype, "y", {
            set: function (val) {
                if (this.displayObject)
                    this.displayObject.y = val;
            },
            enumerable: true,
            configurable: true
        });
        UnitSkeletonViewCompoent.prototype.pos = function (x, y) {
            if (this.displayObject)
                this.displayObject.pos(x, y);
        };
        Object.defineProperty(UnitSkeletonViewCompoent.prototype, "direction", {
            get: function () {
                return this.unit.unitData.info.direction;
            },
            set: function (value) {
                if (this.displayObject) {
                    if (value == Games.DirtionType.Right) {
                        this.displayObject.skewY = 0;
                        this.headIcon && (this.headIcon.skewY = 0);
                    }
                    else {
                        this.displayObject.skewY = 180;
                        this.headIcon && (this.headIcon.skewY = 180);
                    }
                }
            },
            enumerable: true,
            configurable: true
        });
        UnitSkeletonViewCompoent.prototype.setBounds = function (bounds) {
            if (this.displayObject)
                this.displayObject.setBounds(bounds);
        };
        Object.defineProperty(UnitSkeletonViewCompoent.prototype, "hitArea", {
            set: function (bounds) {
                if (this.displayObject)
                    this.displayObject.hitArea = bounds;
            },
            enumerable: true,
            configurable: true
        });
        /** 添加引导指引 */
        UnitSkeletonViewCompoent.prototype.addGuidUI = function (guideUI) {
            this.guideUI = guideUI;
            if (this.displayObject)
                this.displayObject.addChild(this.guideUI.displayObject);
        };
        /** 设置头顶头像 */
        UnitSkeletonViewCompoent.prototype.setTopHeadIcon = function (headIcon, sourceScale) {
            if (sourceScale === void 0) { sourceScale = 0.26; }
            if (this.headIcon) {
                this.headIcon.displayObject.removeSelf();
                this.headIcon = null;
            }
            if (headIcon) {
                this.headIcon = headIcon;
                var headIconScale = 1 / sourceScale;
                var dir = (this.direction == Games.DirtionType.Right) ? 1 : -1;
                this.headIcon.skewY = (this.direction == Games.DirtionType.Right) ? 0 : 180;
                this.headIcon.setScale(headIconScale, headIconScale);
                var scaleBoundWidth = this.unit.unitData.boundWidth;
                var scaleBoundHeight = this.unit.unitData.boundHeight;
                this.headIcon.x = -(scaleBoundWidth / 4 + dir * headIcon.width * headIconScale / 2);
                this.headIcon.y = -(scaleBoundHeight + headIcon.height) * headIconScale;
                if (this.displayObject)
                    this.displayObject.addChild(headIcon.displayObject);
            }
        };
        UnitSkeletonViewCompoent.prototype.removeHeadIcon = function () {
            if (this.headIcon) {
                this.headIcon.dispose();
                this.headIcon = null;
            }
        };
        //开启关闭阴影
        UnitSkeletonViewCompoent.prototype.openShadow = function (val) {
            if (val === void 0) { val = true; }
            if (this.shadow) {
                this.shadow.visible = val;
            }
            else {
                val && this.createShadow();
            }
        };
        // 创建阴影        
        UnitSkeletonViewCompoent.prototype.createShadow = function () {
            this.shadow = fgui.Common.AvatarShadow.createInstance();
            var shadowScale = 1 / this.unit.unitData.scaleFactor;
            this.shadow.setScale(shadowScale, shadowScale);
            this.shadow.setXY(-this.shadow.sourceWidth * shadowScale / 2, -this.shadow.sourceHeight * shadowScale / 3);
            if (this.unit.unitView.displayObject) {
                this.unit.unitView.displayObject.addChildAt(this.shadow.displayObject, 0);
            }
        };
        UnitSkeletonViewCompoent.prototype.startAnimator = function () {
            this.getSkeleton();
        };
        UnitSkeletonViewCompoent.prototype.pauseAnimator = function () {
            this.recoverSkeleton();
        };
        /**
         * 获取骨骼从缓存池
         */
        UnitSkeletonViewCompoent.prototype.getSkeleton = function () {
            this.enableHasSkeleton = true;
            GameBoone.skeletonCache.requrestItem(this.texturePath, this.skeletonPath, this, this.onSkeletonComplete, this.onSkeletonError);
        };
        /**
        * 返回骨骼到缓存池
        */
        UnitSkeletonViewCompoent.prototype.recoverSkeleton = function (skeleton) {
            this.enableHasSkeleton = false;
            if (!skeleton) {
                skeleton = this.displayObject;
                this.displayObject = null;
            }
            if (skeleton) {
                if (!skeleton.destroyed) {
                    var animatorComp = this.unit.getComponent(Games.UnitAnimatorComponent);
                    if (animatorComp) {
                        animatorComp.recycle();
                    }
                    this.eventList.forEach(function (value) {
                        skeleton.off(value.eventType, value.eventCaller, value.eventListener);
                    });
                    GameBoone.skeletonCache.recoverItem(this.texturePath, skeleton);
                }
                else {
                    skeleton.destroy();
                    console.log("骨骼动画已经销毁----" + this.texturePath);
                }
            }
        };
        /**
         * @public
         * 加载，解析纹理和骨骼动画信息
         * @param texturePath   纹理文件路径
         * @param skeletonPath  骨骼文件路径
         * @param parent        添加的容器节点
         * @param complete      解析成功回调
         * @param error         解析失败回调
         */
        UnitSkeletonViewCompoent.prototype.loadAnim = function (texturePath, skeletonPath, parent, caller, complete, error) {
            this.texturePath = texturePath;
            this.skeletonPath = skeletonPath;
            this.unit.parent = parent;
            this.caller = caller;
            this.animLoadCompleteCallBack = complete;
            this.animLoadErrorCallBack = error;
        };
        /**
        * 动画解析成功
        */
        UnitSkeletonViewCompoent.prototype.onSkeletonComplete = function (skeleton) {
            var _this = this;
            if (!this.enableHasSkeleton) {
                this.recoverSkeleton(skeleton);
                this.displayObject = null;
                return;
            }
            if (this.displayObject) {
                this.recoverSkeleton();
            }
            this.displayObject = skeleton;
            if (!this.displayObject.destroyed) {
                var animatorComp = this.unit.getComponent(Games.UnitAnimatorComponent);
                animatorComp.setAnimator(skeleton);
                animatorComp.playLast();
                /** 完成后初始化设置 */
                this.displayObject.autoSize = true;
                this.size(this.unit.unitData.width, this.unit.unitData.height);
                this.scale(this.unit.unitData.scaleFactor);
                this.setBounds(this.unit.unitData.bounds);
                this.hitArea = this.unit.unitData.bounds;
                // this.debugDrawGraph(bounds.x, bounds.y, bounds.width, bounds.height); //test hitArea
                this.pos(this.unit.unitData.x, this.unit.unitData.y);
                this.direction = this.unit.unitData.info.direction;
                this.setShow();
                this.eventList.forEach(function (value) {
                    _this.displayObject.on(value.eventType, value.eventCaller, value.eventListener, value.eventArgs);
                });
                /** apply caller */
                if (this.animLoadCompleteCallBack != null) {
                    this.animLoadCompleteCallBack.apply(this.caller, [skeleton]);
                }
            }
        };
        UnitSkeletonViewCompoent.prototype.debugDrawGraph = function (x, y, w, h) {
            var sp = new Sprite();
            sp.graphics.drawRect(x, y, w, h, "#ff9900");
            sp.mouseEnabled = false;
            sp.size(w, h);
            this.displayObject.addChild(sp);
        };
        UnitSkeletonViewCompoent.prototype.setShow = function () {
            if (this.displayObject && !this.displayObject.parent) {
                if (this.unit.displayIndex >= 0)
                    this.unit.parent.addChildAt(this.displayObject, this.unit.displayIndex);
                else
                    this.unit.parent.addChild(this.displayObject);
                //头像和影子
                if (this.headIcon) {
                    this.displayObject.addChild(this.headIcon.displayObject);
                }
                if (this.shadow) {
                    this.displayObject.addChildAt(this.shadow.displayObject, 0);
                }
                if (this.unit.talk.hasTalk && this.talkBox) {
                    this.unit.parent.addChild(this.talkBox.displayObject);
                }
                if (this.guideUI) {
                    this.addGuidUI(this.guideUI);
                }
            }
        };
        /**
         * 动画解析错误
         */
        UnitSkeletonViewCompoent.prototype.onSkeletonError = function () {
            if (this.animLoadErrorCallBack != null) {
                this.animLoadErrorCallBack.apply(null);
                this.animLoadErrorCallBack = null;
            }
        };
        /**
         * 设置骨骼槽位贴图
         * @param slotName  槽位名
         * @param slotTexturePath   自定义纹理资源路径
         */
        UnitSkeletonViewCompoent.prototype.setSlotSkinPath = function (slotName, slotTexturePath, useScale) {
            var _this = this;
            if (useScale === void 0) { useScale = true; }
            var slotTexture;
            var onAssetsLoaded = function (result) {
                slotTexture = Loader.getRes(slotTexturePath);
                _this.setSlotSkin(slotName, slotTexture, useScale);
            };
            Laya.loader.load([{ url: slotTexturePath, type: Loader.IMAGE }], Handler.create(this, onAssetsLoaded));
            var slotBone = this.displayObject.getSlotByName(slotName);
        };
        /**
         * 设置骨骼槽位贴图
         * @param slotName  槽位名
         * @param texture   自定义纹理
         */
        UnitSkeletonViewCompoent.prototype.setSlotSkin = function (slotName, texture, useScale) {
            if (useScale === void 0) { useScale = true; }
            var slotBone = this.displayObject.getSlotByName(slotName);
            texture.active();
            this.displayObject.setSlotSkin(slotName, texture);
            var scX = texture.width;
            var scY = texture.height;
            var scaleFactor = 1;
            if (useScale) {
                scaleFactor = 1 / Games.CAnimation.SCALE_DEFAULT;
            }
            slotBone.currDisplayData.transform.scX = scX * scaleFactor;
            slotBone.currDisplayData.transform.scY = scY * scaleFactor;
        };
        /**
         * 恢复槽位为默认皮肤
         * @param slotName
         */
        UnitSkeletonViewCompoent.prototype.resetSlotSkin = function (slotName) {
            var slotBone = this.displayObject.getSlotByName(slotName);
            slotBone.currDisplayData.transform.scX = 1;
            slotBone.currDisplayData.transform.scY = 1;
            slotBone.currDisplayData.destory();
            this.displayObject.setSlotSkin(slotName, null);
        };
        UnitSkeletonViewCompoent.prototype.Show = function () {
            if (this.talkBox)
                this.talkBox.visible = true;
            if (this.headIcon)
                this.headIcon.visible = true;
            if (this.shadow)
                this.shadow.visible = true;
            if (this.guideUI)
                this.guideUI.visible = true;
            if (this.displayObject)
                this.displayObject.visible = true;
        };
        UnitSkeletonViewCompoent.prototype.Hide = function () {
            if (this.talkBox)
                this.talkBox.visible = false;
            if (this.headIcon)
                this.headIcon.visible = false;
            if (this.shadow)
                this.shadow.visible = false;
            if (this.guideUI)
                this.guideUI.visible = false;
            if (this.displayObject)
                this.displayObject.visible = false;
        };
        UnitSkeletonViewCompoent.prototype.dispose = function () {
            this.recoverSkeleton();
            if (this.shadow) {
                this.shadow.displayObject.removeSelf();
                this.shadow = null;
            }
            if (this.headIcon) {
                this.headIcon.displayObject.removeSelf();
                this.headIcon = null;
            }
            if (this.guideUI) {
                this.guideUI.displayObject.removeSelf();
                this.guideUI = null;
            }
            for (var i = 0; i < this.eventList.length; i++) {
                this.eventList[i].eventType = undefined;
                this.eventList[i].eventCaller = undefined;
                this.eventList[i].eventListener = undefined;
                this.eventList[i].eventArgs = undefined;
            }
            this.eventList.length = 0;
            this.caller = null;
            this.animLoadCompleteCallBack = null;
            this.animLoadErrorCallBack = null;
            _super.prototype.dispose.call(this);
        };
        return UnitSkeletonViewCompoent;
    }(Games.UnitViewCompoent));
    Games.UnitSkeletonViewCompoent = UnitSkeletonViewCompoent;
})(Games || (Games = {}));
//# sourceMappingURL=UnitSkeletonViewCompoent.js.map