var Games;
(function (Games) {
    // =====================
    // fgui包资源配置
    // ---------------------
    var GuiResPackageConfig = /** @class */ (function () {
        function GuiResPackageConfig() {
            // xxx@atlasX.png
            this.resAtlas = [];
            // 声音
            this.sounds = [];
        }
        Object.defineProperty(GuiResPackageConfig.prototype, "loadList", {
            // 获取加载列表
            get: function () {
                if (!this._loadList) {
                    var list = [];
                    list.push({ url: Games.GuiSetting.getResPath(this.resBin, this.resDir), type: Loader.BUFFER });
                    if (this.resAtlas) {
                        for (var i = 0; i < this.resAtlas.length; i++) {
                            list.push({ url: Games.GuiSetting.getResPath(this.resAtlas[i], this.resDir), type: Loader.IMAGE });
                        }
                    }
                    if (this.sounds) {
                        for (var i = 0; i < this.sounds.length; i++) {
                            list.push({ url: Games.GuiSetting.getResPath(this.sounds[i], this.resDir), type: Loader.SOUND });
                        }
                    }
                    this._loadList = list;
                }
                return this._loadList;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GuiResPackageConfig.prototype, "packagePath", {
            get: function () {
                return Games.GuiSetting.getResPackagePath(this.packageName, this.resDir);
            },
            enumerable: true,
            configurable: true
        });
        return GuiResPackageConfig;
    }());
    Games.GuiResPackageConfig = GuiResPackageConfig;
})(Games || (Games = {}));
//# sourceMappingURL=GuiResPackageConfig.js.map