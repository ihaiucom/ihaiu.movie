var Games;
(function (Games) {
    var SKCache = /** @class */ (function () {
        function SKCache() {
            this.skData = new Games.SKData();
            this.textureDataDict = new Dictionary();
        }
        SKCache.prototype.getTexture = function (texturePath, caller, onComplete) {
            if (this.textureDataDict.hasKey(texturePath)) {
                var textureData = this.textureDataDict.getValue(texturePath);
                onComplete.apply(caller, [textureData]);
            }
            else {
                Laya.loader.load([{ url: texturePath, type: Loader.IMAGE }], Handler.create(this, this.onAssetsLoaded, [texturePath, caller, onComplete]));
            }
        };
        SKCache.prototype.onAssetsLoaded = function (texturePath, caller, onComplete, isSuccess) {
            if (isSuccess) {
                var textureData = new Games.TextureData();
                textureData.url = texturePath;
                textureData.texture = Loader.getRes(texturePath);
                this.textureDataDict.add(texturePath, textureData);
                onComplete.apply(caller, [textureData]);
            }
            else {
                this.__onError(texturePath);
            }
        };
        SKCache.prototype.__onError = function (texturePath) {
            console.error("SKCache 纹理资源加载失败: Texture=" + texturePath);
        };
        return SKCache;
    }());
    Games.SKCache = SKCache;
})(Games || (Games = {}));
//# sourceMappingURL=SKCache.js.map