var Games;
(function (Games) {
    var AssetItemType;
    (function (AssetItemType) {
        AssetItemType[AssetItemType["FguiPackage"] = 0] = "FguiPackage";
        AssetItemType[AssetItemType["FspritePackage"] = 1] = "FspritePackage";
        AssetItemType[AssetItemType["Image"] = 2] = "Image";
        AssetItemType[AssetItemType["Buffer"] = 3] = "Buffer";
        AssetItemType[AssetItemType["Sound"] = 4] = "Sound";
        AssetItemType[AssetItemType["Text"] = 5] = "Text";
        AssetItemType[AssetItemType["Json"] = 6] = "Json";
        AssetItemType[AssetItemType["Xml"] = 7] = "Xml";
        AssetItemType[AssetItemType["Font"] = 8] = "Font";
        AssetItemType[AssetItemType["TTF"] = 9] = "TTF";
        AssetItemType[AssetItemType["PKM"] = 10] = "PKM";
    })(AssetItemType = Games.AssetItemType || (Games.AssetItemType = {}));
    var AssetHelper = /** @class */ (function () {
        function AssetHelper() {
        }
        Object.defineProperty(AssetHelper, "layaLoaderType2AssetItemTypeDict", {
            get: function () {
                if (!AssetHelper._layaLoaderType2AssetItemTypeDict) {
                    var dict = new Dictionary();
                    dict.add(Loader.IMAGE, AssetItemType.Image);
                    dict.add(Loader.BUFFER, AssetItemType.Buffer);
                    dict.add(Loader.SOUND, AssetItemType.Sound);
                    dict.add(Loader.TEXT, AssetItemType.Text);
                    dict.add(Loader.JSON, AssetItemType.Json);
                    dict.add(Loader.XML, AssetItemType.Xml);
                    dict.add(Loader.FONT, AssetItemType.Font);
                    dict.add(Loader.TTF, AssetItemType.TTF);
                    dict.add(Loader.PKM, AssetItemType.PKM);
                    AssetHelper._layaLoaderType2AssetItemTypeDict = dict;
                }
                return AssetHelper._layaLoaderType2AssetItemTypeDict;
            },
            enumerable: true,
            configurable: true
        });
        AssetHelper.layaLoaderType2AssetItemType = function (loader) {
            return AssetHelper.layaLoaderType2AssetItemTypeDict.getValue(loader);
        };
        return AssetHelper;
    }());
    Games.AssetHelper = AssetHelper;
})(Games || (Games = {}));
//# sourceMappingURL=AssetItemInfo.js.map