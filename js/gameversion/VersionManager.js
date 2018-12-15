var GameVersions;
(function (GameVersions) {
    var Handler = laya.utils.Handler;
    var LocalStorage = Laya.LocalStorage;
    var Manager = /** @class */ (function () {
        function Manager() {
            this.platform = "android";
            this.urlpath = "http://mbqb.ihaiu.com/Gidea-PF-Res/resources/ios/web/";
            this.url = "http://mbqb.ihaiu.com/Gidea-PF-Res/resources/ios/web/index.html";
            this.appId = "com.shinezone.movie";
            this.webRoot = "http://mbqb.ihaiu.com/Gidea-PF-Res/resources";
            this.webVersionUrl = "http://mbqb.ihaiu.com/Gidea-PF-Res/resources/verinfo/DTGameVersion.json";
            // 拷贝 assets->data/{packages}/files 的版本
            this.assetCopytoFileVersionData = new GameVersions.VersionData();
            // 本地，应用版本
            this.localAppVersionData = new GameVersions.VersionData();
            // 网络，应用版本
            this.webAppVersionData = new GameVersions.VersionData();
            // 本地，资源版本
            this.localResVersionData = new GameVersions.VersionData();
            // 网络，资源版本
            this.webResVersionData = new GameVersions.VersionData();
            // 本地，分包资源版本
            this.localPartialVersionData = new GameVersions.VersionData();
            // 网络，分包资源版本
            this.webPartialVersionData = new GameVersions.VersionData();
        }
        Object.defineProperty(Manager, "Instance", {
            get: function () {
                if (!Manager._Instance) {
                    Manager._Instance = new Manager();
                }
                return Manager._Instance;
            },
            enumerable: true,
            configurable: true
        });
        /** 初始化 */
        Manager.prototype.init = function () {
            // 设置处理器			
            if (BrowserDetect.isCrosswalk) {
                this.versionHandler = new GameVersions.CrosswalkVersionHandler(this);
            }
            else {
                this.versionHandler = new GameVersions.ConchVersionHandler(this);
            }
            // 设置信息
            this.platform = AppSetting.platform;
            this.appId = AppSetting.appId;
            this.url = AppSetting.url;
            this.urlpath = this.url.replace("index.html", "");
            var folderUrl = this.url.replace("/index.html", "");
            folderUrl = folderUrl.substring(0, folderUrl.lastIndexOf("/"));
            this.webRoot = folderUrl.substring(0, folderUrl.lastIndexOf("/"));
            this.webVersionUrl = this.webRoot + "/verinfo/DTGameVersion.json";
            console.log("GameVersion platform=" + this.platform);
            console.log("GameVersion appId=" + this.appId);
            console.log("GameVersion url=" + this.url);
            console.log("GameVersion urlpath=" + this.urlpath);
            console.log("GameVersion webRoot=" + this.webRoot);
            console.log("GameVersion webVersionUrl=" + this.webVersionUrl);
            gameDeviceConfig.checkNetwork();
            this.localAppVersionData = new GameVersions.VersionData().setVersionTxt(this.localAppVersion);
            this.localResVersionData = new GameVersions.VersionData().setVersionTxt(this.localResVersion);
            this.assetCopytoFileVersionData = new GameVersions.VersionData().setVersionTxt(this.assetsCopytoFileVersion);
            console.log("GameVersion localAppVersionData=" + this.localAppVersionData.toString());
            console.log("GameVersion localResVersionData=" + this.localResVersionData.toString());
            console.log("GameVersion assetCopytoFileVersionData=" + this.assetCopytoFileVersionData.toString());
            gameLaunchLoding.setVersion();
            // 设置是否要显示错误对话框			
            try {
                if (!BrowserDetect.enableGM && window["showAlertOnJsException"]) {
                    window["showAlertOnJsException"](false);
                }
            }
            catch (error) {
                console.warn("window.showAlertOnJsException error:" + error);
            }
            if (AppSetting.enableVersion) {
                this.checkAssetsCopy();
            }
            else {
                this.end();
            }
        };
        /**
         * 刷新应用版本信息
         */
        Manager.prototype.refreshAppVersion = function () {
            this.__localResVersion = null;
            this.localAppVersionData = new GameVersions.VersionData().setVersionTxt(this.localAppVersion);
            this.localResVersionData = new GameVersions.VersionData().setVersionTxt(this.localResVersion);
            gameLaunchLoding.setVersion();
        };
        Object.defineProperty(Manager.prototype, "localAppVersion", {
            /**
             * 获取当前应用版本
             */
            get: function () {
                return gameApplication.AppVersionName;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Manager.prototype, "localResVersion", {
            get: function () {
                if (!this.__localResVersion) {
                    this.__localResVersion = LocalStorage.getItem("__localResVersion");
                    if (!this.__localResVersion) {
                        this.__localResVersion = this.localAppVersion;
                    }
                }
                return this.__localResVersion;
            },
            set: function (version) {
                this.__localResVersion = version;
                LocalStorage.setItem("__localResVersion", version);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Manager.prototype, "assetsCopytoFileVersion", {
            get: function () {
                if (!this.__assetsCopytoFileVersion) {
                    this.__assetsCopytoFileVersion = LocalStorage.getItem("__assetsCopytoFileVersion");
                    if (!this.__assetsCopytoFileVersion) {
                        this.__assetsCopytoFileVersion = "0.0.0";
                    }
                }
                return this.__assetsCopytoFileVersion;
            },
            set: function (version) {
                this.__assetsCopytoFileVersion = version;
                LocalStorage.setItem("__assetsCopytoFileVersion", version);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Manager.prototype, "localPartialVersion", {
            get: function () {
                if (!this.__localPartialVersion) {
                    this.__localPartialVersion = LocalStorage.getItem("__localPartialVersion");
                    if (!this.__localPartialVersion) {
                        this.__localPartialVersion = "0.0.0";
                    }
                }
                return this.__localPartialVersion;
            },
            set: function (version) {
                this.__localPartialVersion = version;
                LocalStorage.setItem("__localPartialVersion", version);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Manager.prototype, "isNeedAssetsCopy", {
            // 获取是否需要拷贝assets->data/{packages}/files
            get: function () {
                if (BrowserDetect.isCrosswalk) {
                    return !this.localAppVersionData.equal(this.assetCopytoFileVersionData);
                }
                return false;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * 检测是否需要拷贝assets->data/{packages}/files
         */
        Manager.prototype.checkAssetsCopy = function () {
            if (!this.isNeedAssetsCopy) {
                this.onCheckAssetsCopyEnd();
                return;
            }
            this.versionHandler.checkAssetsCopy();
        };
        /**
         * 事件 结束:检测是否需要拷贝assets->data/{packages}/files
         */
        Manager.prototype.onCheckAssetsCopyEnd = function () {
            // 检测是否继续运行			
            if (!AppSetting.enableVersion || (!BrowserDetect.isCrosswalk && !BrowserDetect.isConch) || location.href == "http://stand.alone.version/index.html") {
                this.end();
                return;
            }
            if (!BrowserDetect.isIOS) {
                gameLaunchLoding.onVersionLoadConfig();
            }
            this.loadWebVersion(this.webVersionUrl);
        };
        /**
         * 加载远程版本信息
         */
        Manager.prototype.loadWebVersion = function (webVersionUrl) {
            var _this = this;
            var ___this = this;
            Laya.loader.load(webVersionUrl, Handler.create(this, function () {
                var json = Laya.loader.getRes(webVersionUrl);
                console.log("loadWebVersion: " + JSON.stringify(json));
                // onOk
                if (json) {
                    var all;
                    var platform;
                    for (var k in json) {
                        var config = json[k];
                        if ((config.Platform == ___this.platform) ||
                            (config.Platform == "*" || config.Platform == "")) {
                            if (config.ApplicationId == ___this.appId ||
                                config.ApplicationId == "*" || config.ApplicationId == "") {
                                ___this.webVersionConfig = config;
                            }
                        }
                    }
                    if (___this.webVersionConfig) {
                        console.log("GameVersion webVersionConfig=" + JSON.stringify(___this.webVersionConfig));
                        ___this.checkVersion();
                    }
                    else {
                        console.log("GameVersion loadWebVersion no find config!!");
                        ___this.end();
                    }
                }
                // onError
                else {
                    console.log("GameVersion loadWebVersion error!!:");
                    Games.SystemMessag.Instance.alertText(LoadingStateTxt.VersionAlertUpdateResGetInfoFailMsg, _this, function () {
                        location.reload();
                        return;
                    });
                    // ___this.end();
                }
            }), null, Loader.JSON);
        };
        ;
        /**
         * 版本检测
         */
        Manager.prototype.checkVersion = function () {
            if (window["gmButton"] && this.webVersionConfig.VisiableGM !== undefined && !BrowserDetect.enableGM) {
                window["gmButton"].visible = this.webVersionConfig.VisiableGM;
            }
            var IsErrorAlert = false;
            if (this.webVersionConfig.IsErrorAlert !== undefined) {
                IsErrorAlert = this.webVersionConfig.IsErrorAlert;
            }
            try {
                if (window["showAlertOnJsException"]) {
                    // window["showAlertOnJsException"](IsErrorAlert);
                }
            }
            catch (error) {
                console.warn("window.showAlertOnJsException error:" + error);
            }
            console.log("GameVersion localAppVersion=" + this.localAppVersion);
            console.log("GameVersion webAppVersion=" + this.webVersionConfig.AppVersion);
            console.log("GameVersion localResVersion=" + this.localResVersion);
            console.log("GameVersion webResVersion=" + this.webVersionConfig.PatchVersion);
            this.localAppVersionData = new GameVersions.VersionData().setVersionTxt(this.localAppVersion);
            this.webAppVersionData = new GameVersions.VersionData().setVersionTxt(this.webVersionConfig.AppVersion);
            this.localResVersionData = new GameVersions.VersionData().setVersionTxt(this.localResVersion);
            this.webResVersionData = new GameVersions.VersionData().setVersionTxt(this.webVersionConfig.PatchVersion);
            this.localPartialVersionData = new GameVersions.VersionData().setVersionTxt(this.localPartialVersion);
            this.webPartialVersionData = new GameVersions.VersionData().setVersionTxt(this.webVersionConfig.PartialVersion);
            // 检测app版本, 需要更新app
            if (this.isNeedUpdateApp(this.localAppVersionData, this.webAppVersionData)) {
                this.showNeedUpdateApp();
                return;
            }
            // 检测是否需要更新 分包资源
            if (!this.webPartialVersionData.isZero && this.isNeedUpdateRes(this.localPartialVersionData, this.webPartialVersionData)) {
                this.showNeedUpdatePartial();
                return;
            }
            // 检测是否需要更新 补丁资源
            if (this.isNeedUpdateRes(this.localResVersionData, this.webResVersionData)) {
                this.showNeedUpdatePatch();
                return;
            }
            this.end();
        };
        // 显示要更新App		
        Manager.prototype.showNeedUpdateApp = function () {
            console.log("GameVersion NeedUpdateApp");
            Games.SystemMessag.Instance.alrtTextFull(LoadingStateTxt.VersionAlertUpdateAppMsg.format(this.localAppVersionData.toString(), this.webAppVersionData.toString()), LoadingStateTxt.VersionAlertUpdateAppTitle, this, this.gotoDownloadApp, LoadingStateTxt.VersionAlertUpdateAppBtn, false, true, false);
        };
        // 显示要更新 分包资源
        Manager.prototype.showNeedUpdatePartial = function () {
            console.log("GameVersion showNeedUpdatePartial");
            if (this.webVersionConfig.IsPartialAlert) {
                Games.SystemMessag.Instance.alrtTextFull(LoadingStateTxt.VersionAlertUpdateResMsg.format(this.localPartialVersionData.toString(), this.webPartialVersionData.toString()), LoadingStateTxt.VersionAlertUpdateResTitle, this, this.updatePartial, LoadingStateTxt.VersionAlertUpdateResBtn, false);
            }
            else {
                this.updatePartial();
            }
        };
        // 显示要更新 补丁资源
        Manager.prototype.showNeedUpdatePatch = function () {
            console.log("GameVersion showNeedUpdatePatch");
            if (this.webVersionConfig.IsPatchAlert) {
                Games.SystemMessag.Instance.alrtTextFull(LoadingStateTxt.VersionAlertUpdateResMsg.format(this.localResVersionData.toString(), this.webResVersionData.toString()), LoadingStateTxt.VersionAlertUpdateResTitle, this, this.updatePatch, LoadingStateTxt.VersionAlertUpdateResBtn, false);
            }
            else {
                this.updatePatch();
            }
        };
        /** 检测app版本是否需要更新 */
        Manager.prototype.isNeedUpdateApp = function (current, target) {
            if (target.master > current.master) {
                return true;
            }
            if (target.master == current.master) {
                if (target.minor > current.minor) {
                    return true;
                }
            }
            return false;
        };
        /** 检测Res版本是否需要更新 */
        Manager.prototype.isNeedUpdateRes = function (current, target) {
            if (target.master > current.master) {
                return true;
            }
            if (target.master == current.master) {
                if (target.minor > current.minor) {
                    return true;
                }
                if (target.minor == current.minor) {
                    if (target.revised > current.revised) {
                        return true;
                    }
                    if (target.revised == current.revised) {
                        if (target.revised2 > current.revised2) {
                            return true;
                        }
                    }
                }
            }
            return false;
        };
        /** 前往下载APP */
        Manager.prototype.gotoDownloadApp = function () {
            // 下载方式(0:Auto, 1:App: 2:Browser, 3:DownloadManager);
            if (!this.webVersionConfig.AppDownloadType) {
                this.webVersionConfig.AppDownloadType = 1;
            }
            if (this.webVersionConfig && this.webVersionConfig.AppDownloadWeb) {
                this.versionHandler.appupdate();
            }
            else {
                gameApplication.openURL(this.webRoot + "/appdown.html");
            }
        };
        /**
         * 更新 分包资源
         */
        Manager.prototype.updatePartial = function () {
            this.versionHandler.updatePartial();
        };
        Manager.prototype.onUpdateParitialComplete = function () {
            this.localPartialVersion = this.webVersionConfig.PartialVersion;
            // 检测是否需要更新 补丁资源
            if (this.isNeedUpdateRes(this.localResVersionData, this.webResVersionData)) {
                this.updatePatch();
            }
            else {
                this.onComplete();
            }
        };
        /**
         * 更新 补丁资源
         */
        Manager.prototype.updatePatch = function () {
            this.versionHandler.updatePatch();
        };
        Manager.prototype.onUpdatePatchComplete = function () {
            this.localResVersion = this.webVersionConfig.PatchVersion;
            this.onComplete();
        };
        /**
         * 更新完成
         */
        Manager.prototype.onComplete = function () {
            console.log("GameVersion onComplete");
            // alert("更新完成");
            location.reload();
        };
        /**
         * 结束版本检测
         */
        Manager.prototype.end = function () {
            console.log("GameVersion end");
            // alert("结束版本检测");
            Games.GameLaunch.isRunEnd = true;
            if (window["Game"]) {
                Game.install();
            }
            gameLaunchLoding.setVersion();
            gameLaunchLoding.closeLayaLoadingView();
        };
        return Manager;
    }());
    GameVersions.Manager = Manager;
})(GameVersions || (GameVersions = {}));
//# sourceMappingURL=VersionManager.js.map