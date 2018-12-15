var Games;
(function (Games) {
    var AnimationCache = /** @class */ (function () {
        function AnimationCache() {
            this.dict = new Dictionary();
        }
        /**
         * 获取骨骼缓存信息,包含共用纹理资源
         * @param texturePath
         * @param skPath
         * @param caller
         * @param onComplete
         * @param onError
         */
        AnimationCache.prototype.getSKCache = function (texturePath, skPath, caller, onComplete, onError) {
            if (!this.dict.hasKey(skPath)) {
                var assets = [];
                assets.push({ url: texturePath, type: Loader.IMAGE });
                assets.push({ url: skPath, type: Loader.BUFFER });
                Laya.loader.load(assets, Handler.create(this, this.onAssetsLoaded, [texturePath, skPath, caller, onComplete, onError]));
            }
            else {
                var skCache_1 = this.dict.getValue(skPath);
                var thisCaller_1 = caller;
                skCache_1.getTexture(texturePath, this, function (textureData) {
                    onComplete.apply(thisCaller_1, [textureData, skCache_1.skData]);
                });
            }
        };
        AnimationCache.prototype.onAssetsLoaded = function (texturePath, skPath, caller, onComplete, onError, isSuccess) {
            if (isSuccess) {
                var skCache = new Games.SKCache();
                skCache.skData.url = skPath;
                skCache.skData.buffer = Loader.getRes(skPath);
                var textureData = new Games.TextureData();
                textureData.url = texturePath;
                textureData.texture = Loader.getRes(texturePath);
                skCache.textureDataDict.add(texturePath, textureData);
                this.dict.add(skPath, skCache);
                onComplete.apply(caller, [textureData, skCache.skData]);
            }
            else {
                caller = null;
                onComplete = null;
                onError(texturePath, skPath);
            }
        };
        return AnimationCache;
    }());
    Games.AnimationCache = AnimationCache;
})(Games || (Games = {}));
//# sourceMappingURL=AnimationCache.js.map