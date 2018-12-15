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
var FGLoader = /** @class */ (function (_super) {
    __extends(FGLoader, _super);
    function FGLoader() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(FGLoader, "freeList", {
        get: function () {
            if (FGLoader._freeList.length > 0) {
                FGLoader._freeList.length = 0;
            }
            var dict = FGLoader.freeDictForNum.__getDict();
            for (var url in dict) {
                // console.log(FGLoader.freeDictForNum.getValue(url) + " " + url);
                if (FGLoader.freeDictForNum.getValue(url) <= 0) {
                    FGLoader._freeList.push(url);
                }
            }
            return FGLoader._freeList;
        },
        enumerable: true,
        configurable: true
    });
    FGLoader.setUse = function (url) {
        var num = FGLoader.freeDictForNum.hasKey(url) ? FGLoader.freeDictForNum.getValue(url) + 1 : 1;
        FGLoader.freeDictForNum.add(url, num);
    };
    FGLoader.setFree = function (url) {
        if (url.indexOf("/MenuIcon/") != -1)
            return;
        FGLoader.freeDictForTime.add(url, Game.time.localTime);
        var num = FGLoader.freeDictForNum.hasKey(url) ? FGLoader.freeDictForNum.getValue(url) - 1 : 0;
        if (num < 0)
            num = 0;
        FGLoader.freeDictForNum.add(url, num);
    };
    FGLoader.removeFree = function (url) {
        FGLoader.freeDictForTime.remove(url);
        FGLoader.freeDictForNum.remove(url);
    };
    /**
     * 清理所有没有使用的
     */
    FGLoader.clearAllFree = function (list) {
        if (!list)
            list = FGLoader.freeList;
        while (list.length > 0) {
            var url = list.pop();
            // console.log("--ClearRes:" + url);
            FGLoader.removeFree(url);
            Laya.loader.clearRes(url);
        }
    };
    /**
     * 清理长时间没有使用的
     */
    FGLoader.clearFreeLong = function () {
        if (FGLoader.freeDictForNum.count <= gameDeviceConfig.fguiLoaderCacheNum)
            return;
        FGLoader._freeLongList.length = 0;
        var dict = FGLoader.freeDictForNum.__getDict();
        for (var url in dict) {
            // console.log(FGLoader.freeDictForNum.getValue(url) + " " + url);
            if (FGLoader.freeDictForNum.getValue(url) <= 0) {
                var time = Game.time.localTime - FGLoader.freeDictForTime.getValueOrDefault(url, 0);
                if (time > gameDeviceConfig.fguiLoaderCacheTime)
                    FGLoader._freeLongList.push(url);
            }
        }
        FGLoader.clearAllFree(FGLoader._freeLongList);
    };
    FGLoader.prototype.loadContent = function () {
        _super.prototype.loadContent.call(this);
    };
    FGLoader.prototype.getPackagenameByUrl = function (url) {
        return url.replace("ui://", "").split("/")[0];
    };
    FGLoader.prototype.loadFromPackage = function (itemURL) {
        // console.log("loadFromPackage:" + itemURL);
        var packageItem = fairygui.UIPackage.getItemByURL(itemURL);
        if (packageItem) {
            _super.prototype.loadFromPackage.call(this, itemURL);
        }
        else {
            var packagename = this.getPackagenameByUrl(itemURL);
            var config = Game.spriteRes.getconfig(packagename);
            if (!config) {
                config = Game.guiRes.getconfig(packagename);
            }
            if (config) {
                Game.asset.loadFgui(config, this, this.onLoadPackage);
            }
        }
    };
    FGLoader.prototype.onLoadPackage = function () {
        // console.log("onLoadPackage:" + this.url);
        _super.prototype.loadFromPackage.call(this, this.url);
    };
    FGLoader.prototype.loadExternal = function () {
        /*
        开始外部载入，地址在url属性
        载入完成后调用OnExternalLoadSuccess
        载入失败调用OnExternalLoadFailed
        注意：如果是外部载入，在载入结束后，调用OnExternalLoadSuccess或OnExternalLoadFailed前，
        比较严谨的做法是先检查url属性是否已经和这个载入的内容不相符。
        如果不相符，表示loader已经被修改了。
        这种情况下应该放弃调用OnExternalLoadSuccess或OnExternalLoadFailed。
        */
        // console.log("loadExternal:" + this.url);
        FGLoader.setUse(this.url);
        _super.prototype.loadExternal.call(this);
    };
    //释放外部载入的资源
    FGLoader.prototype.freeExternal = function (texture) {
        // console.log("freeExternal:" + this.url + "  " + texture.url);
        _super.prototype.freeExternal.call(this, texture);
        if (!isNullOrEmpty(texture.url)) {
            FGLoader.setFree(texture.url);
            texture.url = "";
        }
        // Laya.loader.clearRes(texture.url);
    };
    // 载入完成后调用
    FGLoader.prototype.onExternalLoadSuccess = function (texture) {
        // console.log("onExternalLoadSuccess:" + this.url);
        _super.prototype.onExternalLoadSuccess.call(this, texture);
    };
    // 载入失败调用
    FGLoader.prototype.onExternalLoadFailed = function () {
        _super.prototype.onExternalLoadFailed.call(this);
    };
    // 最后一次没有设置引用的时间
    FGLoader.freeDictForTime = new Dictionary();
    // 引用次数
    FGLoader.freeDictForNum = new Dictionary();
    FGLoader._freeList = [];
    FGLoader._freeLongList = [];
    return FGLoader;
}(fairygui.GLoader));
//# sourceMappingURL=FGLoader.js.map