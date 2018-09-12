var Games;
(function (Games) {
    var AssetManager = /** @class */ (function () {
        function AssetManager() {
            this.loadedAssets = new Dictionary();
        }
        // 加载配置
        AssetManager.prototype.loadConfig = function (path, callback) {
            if (callback) {
                // path = `config/csv/${path}.csv`;
                var obj = {
                    onLoaded: function () {
                        var txt = Laya.loader.getRes(path);
                        callback(txt, path);
                    }
                };
                Laya.loader.load(path, Handler.create(obj, obj.onLoaded), null, Loader.TEXT);
            }
        };
        // 卸载配置文件
        AssetManager.prototype.unloadConfig = function (path) {
            Laya.loader.clearRes(path, true);
        };
        // 加载资源列表
        AssetManager.prototype.loadList = function (list, onObj, onCompleteFun, onProgress) {
            var count = list.length;
            var index = 0;
            var callback = {
                onComplete: function (isSuccess) {
                    var item = list[index];
                    // console.log("加载资源列表 onComplete: val=" + item);
                    index++;
                    if (onProgress) {
                        var rate = count > 0 ? index / count : 1;
                        onProgress(rate, index, count, item);
                    }
                    if (index >= count) {
                        if (onCompleteFun) {
                            if (onObj) {
                                onCompleteFun.apply(onObj);
                            }
                            else {
                                onCompleteFun();
                            }
                        }
                    }
                },
                onProgress: function (val) {
                    // console.log("加载资源列表 onProgress: val=" + val);
                }
            };
            if (list && list.length > 0) {
                var assets = [];
                var item = void 0;
                for (var i = 0; i < list.length; i++) {
                    item = list[i];
                    if (!item) {
                        callback.onComplete(item);
                    }
                    // console.log(item.type + ", " + item.url);
                    switch (item.type) {
                        case Games.AssetItemType.FguiPackage:
                            this.loadFguiByPackagename(item.url, callback, callback.onComplete);
                            break;
                        case Games.AssetItemType.FspritePackage:
                            this.loadFSpriteByPackagename(item.url, callback, callback.onComplete);
                            break;
                        case Games.AssetItemType.Image:
                            assets.push({ url: item.url, type: Loader.IMAGE });
                            break;
                        case Games.AssetItemType.Buffer:
                            assets.push({ url: item.url, type: Loader.BUFFER });
                            break;
                        case Games.AssetItemType.Sound:
                            assets.push({ url: item.url, type: Loader.SOUND });
                            break;
                        case Games.AssetItemType.Text:
                            assets.push({ url: item.url, type: Loader.TEXT });
                            break;
                        case Games.AssetItemType.Json:
                            assets.push({ url: item.url, type: Loader.JSON });
                            break;
                        case Games.AssetItemType.Xml:
                            assets.push({ url: item.url, type: Loader.XML });
                            break;
                        case Games.AssetItemType.Font:
                            assets.push({ url: item.url, type: Loader.FONT });
                            break;
                        case Games.AssetItemType.TTF:
                            assets.push({ url: item.url, type: Loader.TTF });
                            break;
                        case Games.AssetItemType.PKM:
                            assets.push({ url: item.url, type: Loader.PKM });
                            break;
                    }
                }
                if (assets.length > 0) {
                    for (var j = 0; j < assets.length; j++) {
                        if (this.loadedAssets.hasKey(assets[j].url)) {
                            callback.onComplete(true);
                        }
                        else {
                            Laya.loader.load([assets[j]], Handler.create(callback, callback.onComplete), Handler.create(callback, callback.onProgress));
                        }
                        this.loadedAssets.add(assets[j].url, Game.time.localTime);
                    }
                }
            }
            else {
                callback.onComplete(null);
            }
        };
        // 加载fgui包
        AssetManager.prototype.loadFguiByPackagename = function (packageName, caller, method) {
            var packageConfig = Game.guiRes.getconfig(packageName);
            this.loadFgui(packageConfig, caller, method);
        };
        // 加载fsprite包
        AssetManager.prototype.loadFSpriteByPackagename = function (packageName, caller, method) {
            var packageConfig = Game.spriteRes.getconfig(packageName);
            this.loadFgui(packageConfig, caller, method);
        };
        AssetManager.prototype.loadFgui = function (packageConfig, caller, method) {
            var callback = {
                apply: function () {
                    Games.GuiSetting.addPackage(packageConfig.packagePath, packageConfig);
                    if (method) {
                        if (caller) {
                            return method.apply(caller, [packageConfig]);
                        }
                        else {
                            method(packageConfig);
                        }
                    }
                }
            };
            Games.GuiSetting.addPackageReferenceNum(packageConfig.packagePath);
            if (Games.GuiSetting.hasLoadPackage(packageConfig.packagePath)) {
                callback.apply();
                return;
            }
            Laya.loader.load(packageConfig.loadList, Handler.create(callback, callback.apply));
        };
        AssetManager.prototype.unloadFgui = function (packageName, forceDispose) {
            if (forceDispose === undefined)
                forceDispose = false;
            var packageConfig = Game.guiRes.getconfig(packageName);
            if (!packageConfig)
                packageConfig = Game.spriteRes.getconfig(packageName);
            if (packageConfig) {
                var referenceNum = Games.GuiSetting.removePackageReferenceNum(packageConfig.packagePath);
                if (!forceDispose) {
                    if (referenceNum > 0) {
                        return;
                    }
                }
                Games.GuiSetting.removePackage(packageConfig.packagePath, packageConfig);
                var list = packageConfig.loadList;
                for (var i = 0; i < list.length; i++) {
                    console.log("==clearRes:" + list[i].url);
                    Laya.loader.clearRes(list[i].url, forceDispose);
                }
            }
        };
        //加载特效
        AssetManager.prototype.loadFx = function (path, caller, complete) {
            Laya.loader.load(path, Handler.create(null, function (setting) {
                if (complete) {
                    if (caller) {
                        complete.apply(caller, setting);
                    }
                    else {
                        complete(setting);
                    }
                }
            }), null, Loader.JSON);
        };
        return AssetManager;
    }());
    Games.AssetManager = AssetManager;
})(Games || (Games = {}));
//# sourceMappingURL=AssetManager.js.map