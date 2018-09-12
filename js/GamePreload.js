var Games;
(function (Games) {
    // 游戏初始化-- 预加载资源
    var GamePreload = /** @class */ (function () {
        function GamePreload() {
            this.packageConfigs = [];
            // 依赖资源列表
            this.assets = [];
        }
        // 添加依赖资源--fgui 包名
        GamePreload.prototype.addAssetForFguiPackagename = function (packagename) {
            this.assets.push({ url: packagename, type: Games.AssetItemType.FguiPackage });
        };
        // 添加依赖资源--组件
        GamePreload.prototype.addAssetForFguiComponent = function (fguiCom) {
            var names = fguiCom["DependPackages"];
            for (var i = 0; i < names.length; i++) {
                this.addAssetForFguiPackagename(names[i]);
            }
        };
        // 添加动态资源--AvatarConfig里的所有
        GamePreload.prototype.addDynmicAssetForAvatarAll = function (avatarConfig) {
            avatarConfig.getAllAssset(this.assets);
        };
        GamePreload.prototype.generate = function () {
            this.addAssetForFguiPackagename(Games.GuiPackageNames.Login);
            this.addAssetForFguiPackagename(Games.GuiPackageNames.Common);
            this.addAssetForFguiPackagename(Games.GuiPackageNames.Sound);
            this.addAssetForFguiPackagename(Games.GuiPackageNames.Cooperation);
            this.addAssetForFguiPackagename(Games.GuiPackageNames.Fx);
            this.addAssetForFguiComponent(fgui.MainUI.MainUI);
            this.addAssetForFguiComponent(fgui.Building.Main);
            this.addAssetForFguiComponent(fgui.MainUI.VisitMainTopUI);
            // // 艺人			
            this.addAssetForFguiComponent(fgui.PfSkin.ArtistUI);
            // this.addAssetForFguiComponent(fgui.PfSkin.ArtistScoutSuccessUI);
            // this.addAssetForFguiComponent(fgui.PfSkin.ArtistGetUI);
            // this.addDynmicAssetForAvatarAll(Game.config.avatar.getConfig(1501));
            // this.addDynmicAssetForAvatarAll(Game.config.avatar.getConfig(2001));
            // this.addDynmicAssetForAvatarAll(Game.config.avatar.getConfig(2201));
            // this.addDynmicAssetForAvatarAll(Game.config.avatar.getConfig(7101));
            // this.addDynmicAssetForAvatarAll(Game.config.avatar.getConfig(7301));
            // this.addDynmicAssetForAvatarAll(Game.config.avatar.getConfig(5001));
            // this.addDynmicAssetForAvatarAll(Game.config.avatar.getConfig(6001));
            // this.addDynmicAssetForAvatarAll(Game.config.avatar.getConfig(8001));
            // this.addDynmicAssetForAvatarAll(Game.config.avatar.getConfig(1001));
            // this.addDynmicAssetForAvatarAll(Game.config.avatar.getConfig(3001));
            // this.addDynmicAssetForAvatarAll(Game.config.avatar.getConfig(9999));
            var dict = new Dictionary();
            var packageDict = new Dictionary();
            for (var i = 0; i < this.assets.length; i++) {
                var item = this.assets[i];
                var packageConfig = null;
                switch (item.type) {
                    case Games.AssetItemType.FguiPackage:
                        packageConfig = Game.guiRes.getconfig(item.url);
                        break;
                    case Games.AssetItemType.FspritePackage:
                        packageConfig = Game.spriteRes.getconfig(item.url);
                        break;
                }
                if (packageConfig) {
                    if (!packageDict.hasKey(packageConfig.packagePath)) {
                        packageDict.add(packageConfig.packagePath, packageConfig);
                    }
                    var packageRes = packageConfig.loadList;
                    for (var _i = 0, packageRes_1 = packageRes; _i < packageRes_1.length; _i++) {
                        var packageItem = packageRes_1[_i];
                        if (!dict.hasKey(packageItem.url)) {
                            var mitem = { url: packageItem.url, type: Games.AssetHelper.layaLoaderType2AssetItemType(packageItem.type) };
                            dict.add(mitem.url, mitem);
                        }
                    }
                }
                else {
                    if (!dict.hasKey(item.url)) {
                        dict.add(item.url, item);
                    }
                }
            }
            this.list = dict.getValues();
            this.packageConfigs = packageDict.getValues();
        };
        GamePreload.prototype.begin = function (onObj, onCompleteFun) {
            this.onObj = onObj;
            this.onCompleteFun = onCompleteFun;
            this.generate();
            console.log("预加载资源数量：" + this.list.length);
            Game.asset.loadList(this.list, this, this.onEnd, this.onProgress);
        };
        GamePreload.prototype.onProgress = function (rate, index, count, item) {
            gameLaunchLoding.onLoadedFgui(index, count);
        };
        GamePreload.prototype.onEnd = function () {
            for (var _i = 0, _a = this.packageConfigs; _i < _a.length; _i++) {
                var packageConfig = _a[_i];
                Games.GuiSetting.addPackage(packageConfig.packagePath);
            }
            if (this.onCompleteFun) {
                if (this.onObj) {
                    this.onCompleteFun.apply(this.onObj);
                }
                else {
                    this.onCompleteFun();
                }
            }
        };
        return GamePreload;
    }());
    Games.GamePreload = GamePreload;
})(Games || (Games = {}));
//# sourceMappingURL=GamePreload.js.map