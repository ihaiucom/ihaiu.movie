var Games;
(function (Games) {
    /**
     * 骨骼解析数据缓存
     */
    var ShareSkeleton = /** @class */ (function () {
        function ShareSkeleton() {
            this.skDataDict = new Dictionary();
        }
        ShareSkeleton.prototype.dispose = function () {
            this.skDataDict.clear();
            this.caller = undefined;
            this.onComplete = undefined;
            this.onError = undefined;
        };
        /**
         * 获取骨骼数据ArrayBuffer
         * @param skPath 骨骼资源加载路径
         * @param texturePath 骨骼皮肤加载路径
         * @param caller
         * @param onComplete
         * @param onError
         */
        ShareSkeleton.prototype.getSkeletonData = function (skPath, texturePath, caller, onComplete, onError) {
            this.caller = caller;
            this.onComplete = onComplete;
            this.onError = onError;
            var skData = this.skDataDict.getValue(skPath);
            if (skData) {
                this.__onComplete(skData, skPath, texturePath);
            }
            else {
                Laya.loader.load([{ url: skPath, type: Loader.BUFFER }], Handler.create(this, this.onSkeletonLoaded, [skPath, texturePath]));
            }
        };
        ShareSkeleton.prototype.onSkeletonLoaded = function (skPath, texturePath, isSuccess) {
            if (isSuccess) {
                var skData = Loader.getRes(skPath);
                this.skDataDict.add(skPath, skData);
                this.__onComplete(skData, skPath, texturePath);
            }
            else {
                this.__onError(skPath);
            }
        };
        ShareSkeleton.prototype.__onComplete = function (skData, skPath, texturePath) {
            if (this.onComplete) {
                if (this.caller)
                    this.onComplete.apply(this.caller, [skData, skPath, texturePath]);
                else
                    this.onComplete([skData, skPath, texturePath]);
            }
        };
        ShareSkeleton.prototype.__onError = function (skPath) {
            if (this.onError) {
                if (this.caller)
                    this.onError.apply(this.caller, [skPath]);
                else
                    this.onError([skPath]);
            }
            console.error("Skeleton 资源加载失败: " + skPath);
        };
        return ShareSkeleton;
    }());
    Games.ShareSkeleton = ShareSkeleton;
})(Games || (Games = {}));
//# sourceMappingURL=ShareSkeleton.js.map