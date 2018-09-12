var Games;
(function (Games) {
    /**
     * 骨骼动画 对象池
     */
    var SkeletonPool = /** @class */ (function () {
        function SkeletonPool() {
            /** 是否加载失败 */
            this.isLoadFail = false;
            /** 所有对象 */
            this.allList = [];
            /** 没有使用的对象列表 */
            this.list = [];
            /** 回调列表 */
            this.callbackList = [];
            /**
             * 被清理数量
             */
            this.clearNum = 0;
        }
        Object.defineProperty(SkeletonPool.prototype, "totalNum", {
            /**
             * 总数
             */
            get: function () {
                return this.allList.length;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SkeletonPool.prototype, "poolNum", {
            /**
             * 没有使用的数量
             */
            get: function () {
                return this.list.length;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SkeletonPool.prototype, "useNum", {
            /**
             * 正在被使用的数量
             */
            get: function () {
                return this.totalNum - this.poolNum;
            },
            enumerable: true,
            configurable: true
        });
        // 添加监听回调		
        SkeletonPool.prototype.addCallbackHandler = function (caller, onComplete, onError) {
            for (var i = 0; i < this.callbackList.length; i++) {
                if (this.callbackList[i].caller == caller && this.callbackList[i].onComplete == onComplete) {
                    return;
                }
            }
            var item = laya.utils.Pool.getItem(SkeletonPool.CallbackPoolKey);
            if (!item) {
                item = { caller: caller, onComplete: onComplete, onError: onError };
            }
            this.callbackList.push(item);
        };
        /**
         * 创建对象
         */
        SkeletonPool.prototype.createItem = function () {
            var item;
            if (this.templet) {
                item = this.templet.buildArmature(0);
                this.allList.push(item);
            }
            return item;
        };
        /** 获取对象 */
        SkeletonPool.prototype.getItem = function () {
            var item;
            if (this.list.length > 0) {
                item = this.list.pop();
            }
            return item;
        };
        /**
         * 获取或者创建对象
         */
        SkeletonPool.prototype.getItemOrCreate = function () {
            var item = this.getItem();
            if (!item) {
                if (this.templet) {
                    item = this.createItem();
                }
            }
            return item;
        };
        /** 返回对象 */
        SkeletonPool.prototype.recover = function (skeleton) {
            if (this.list.indexOf(skeleton) == -1) {
                this.list.push(skeleton);
            }
            else {
                console.error("该对象已经返还对象池了:" + this.texturePath);
            }
        };
        /**
         * 异步请求对象
         * @param onComplete(skeleton: Skeleton);
         * @param onError(error: string);
         */
        SkeletonPool.prototype.requrestItem = function (caller, onComplete, onError) {
            var item = this.getItemOrCreate();
            if (item) {
                if (onComplete) {
                    setTimeout(function () {
                        if (caller)
                            onComplete.apply(caller, [item]);
                        else
                            onComplete(item);
                    }, 100);
                }
            }
            else {
                if (this.isLoadFail) {
                    if (onError) {
                        if (caller)
                            onError.apply(caller, ["加载失败"]);
                        else
                            onError("加载失败");
                    }
                }
                else {
                    if (onComplete || onError) {
                        this.addCallbackHandler(caller, onComplete, onError);
                    }
                    GameBoone.templetPool.requrestItem(this.texturePath, this.skPath, this, this.onLoadTempleteComplete, this.onLoadTempleteError);
                }
            }
        };
        /**
         * 加载动画模版完成
         */
        SkeletonPool.prototype.onLoadTempleteComplete = function (templet) {
            if (this.templet) {
                return;
            }
            this.templet = templet;
            while (this.callbackList.length > 0) {
                var caller = this.callbackList.pop();
                if (caller.onComplete) {
                    var item = this.getItemOrCreate();
                    if (caller.caller) {
                        caller.onComplete.apply(caller.caller, [item]);
                    }
                    else {
                        caller.onComplete(item);
                    }
                }
            }
        };
        /**
         * 加载动画模版失败
         * @param error
         */
        SkeletonPool.prototype.onLoadTempleteError = function (error) {
            if (this.isLoadFail) {
                return;
            }
            this.isLoadFail = true;
            while (this.callbackList.length > 0) {
                var caller = this.callbackList.pop();
                if (caller.onError) {
                    if (caller.caller) {
                        caller.onError.apply(caller.caller, ["加载失败"]);
                    }
                    else {
                        caller.onError("加载失败");
                    }
                }
            }
        };
        SkeletonPool.prototype.toString = function () {
            return "totalNum:" + this.totalNum + ", poolNum:" + this.poolNum + ", useNum:" + this.useNum + ": " + this.texturePath;
        };
        SkeletonPool.prototype.removeFromAll = function (self) {
            for (var i = 0; i < this.allList.length; i++) {
                if (this.allList[i] == self) {
                    this.allList.splice(i, 1);
                    break;
                }
            }
        };
        SkeletonPool.prototype.clearNoUse = function () {
            if (this.callbackList.length > 0)
                return 0;
            var clearNum = 0;
            while (this.list.length > 0) {
                var skeleton = this.list.pop();
                this.removeFromAll(skeleton);
                skeleton.destroy();
                this.clearNum++;
                clearNum++;
            }
            if (this.totalNum <= 0) {
                GameBoone.templetPool.recoverItem(this.texturePath, this.skPath);
                this.templet = undefined;
            }
            return clearNum;
        };
        SkeletonPool.CallbackPoolKey = "TempletCallbackHandler";
        return SkeletonPool;
    }());
    Games.SkeletonPool = SkeletonPool;
})(Games || (Games = {}));
//# sourceMappingURL=SkeletonPool.js.map