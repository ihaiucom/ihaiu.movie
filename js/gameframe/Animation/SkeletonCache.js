var Games;
(function (Games) {
    /**
     * 骨骼动画 缓存
     */
    var SkeletonCache = /** @class */ (function () {
        function SkeletonCache() {
            this.isAddListenced = false;
            this.poolDict = new Dictionary();
        }
        SkeletonCache.prototype.addListance = function () {
            if (this.isAddListenced)
                return;
            this.isAddListenced = true;
            Game.moduleModel.building.sScrollEnd.add(this.tickClear, this);
        };
        Object.defineProperty(SkeletonCache.prototype, "maxNum", {
            /** 最多缓存数量 */
            get: function () {
                // 默认10
                return gameDeviceConfig.skeletonCacheMaxNum;
            },
            enumerable: true,
            configurable: true
        });
        /** 获取对象池 */
        SkeletonCache.prototype.getPool = function (texturePath) {
            return this.poolDict.getValue(texturePath);
        };
        /** 请求骨骼动画 */
        SkeletonCache.prototype.requrestItem = function (texturePath, skPath, caller, onComplete, onError) {
            var pool = this.getPool(texturePath);
            if (!pool) {
                pool = new Games.SkeletonPool();
                pool.texturePath = texturePath;
                pool.skPath = skPath;
                this.poolDict.add(texturePath, pool);
            }
            pool.requrestItem(caller, onComplete, onError);
            //share bone
            // pool.requestShareItem(caller, onComplete, onError);
            this.tickClear();
        };
        /** 返回骨骼动画 */
        SkeletonCache.prototype.recoverItem = function (texturePath, skeleton) {
            skeleton.stop();
            skeleton.removeSelf();
            var pool = this.getPool(texturePath);
            if (pool) {
                pool.recover(skeleton);
                this.tickClear();
            }
            else {
                skeleton.destroy();
            }
        };
        /**
         * 清理缓存
         */
        SkeletonCache.prototype.tickClear = function (isPringLog) {
            if (isPringLog === void 0) { isPringLog = true; }
            return; //共用骨骼数据暂不清理
            if (Game.moduleModel.building.isBuildListScrolling) {
                return;
            }
            var poolCount = 0;
            var skeletonTotal = 0;
            var skeletonNoUse = 0;
            var skeletonUse = 0;
            var dict = this.poolDict.__getDict();
            for (var key in dict) {
                var pool = dict[key];
                skeletonTotal += pool.totalNum;
                skeletonNoUse += pool.poolNum;
                skeletonUse += pool.useNum;
                poolCount++;
            }
            var clearNum = 0;
            if (skeletonTotal > this.maxNum) {
                for (var key in dict) {
                    var pool = dict[key];
                    pool.clearNoUse();
                    clearNum += 1;
                    // if (clearNum >= 2)
                    // 	break;
                }
            }
            isPringLog = false;
            // 打印日志	
            if (isPringLog) {
                poolCount = 0;
                skeletonTotal = 0;
                skeletonNoUse = 0;
                skeletonUse = 0;
                for (var key in dict) {
                    var pool = dict[key];
                    skeletonTotal += pool.totalNum;
                    skeletonNoUse += pool.poolNum;
                    skeletonUse += pool.useNum;
                    poolCount++;
                }
                console.log("===============");
                console.log("poolCount:" + poolCount + ", skeletonTotal:" + skeletonTotal + ", skeletonNoUse:" + skeletonNoUse + ", skeletonUse:" + skeletonUse);
                for (var key in dict) {
                    var pool = dict[key];
                    console.log(pool.toString());
                }
            }
        };
        return SkeletonCache;
    }());
    Games.SkeletonCache = SkeletonCache;
})(Games || (Games = {}));
//# sourceMappingURL=SkeletonCache.js.map