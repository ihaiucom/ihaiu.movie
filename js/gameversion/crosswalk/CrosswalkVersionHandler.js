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
var GameVersions;
(function (GameVersions) {
    var CrosswalkVersionHandler = /** @class */ (function (_super) {
        __extends(CrosswalkVersionHandler, _super);
        function CrosswalkVersionHandler(manager) {
            var _this = _super.call(this, manager) || this;
            _this.bridger = new GameVersions.GameVersionBridger(_this);
            return _this;
        }
        /**
         * 更新应用
         */
        CrosswalkVersionHandler.prototype.appupdate = function () {
            if (BrowserDetect.isAndroid) {
                var apkUrl = this.manager.webVersionConfig.AppDownloadWeb;
                var apkName = this.manager.webVersionConfig.AppDownloadName;
                if (isNullOrEmpty(apkName)) {
                    apkName = "MovieInc.apk";
                    try {
                        var name_1 = apkUrl.split("?")[0];
                        name_1 = name_1.substring(name_1.lastIndexOf("/") + 1, name_1.length);
                        if (!name_1.endsWith(".apk")) {
                            name_1 += ".apk";
                        }
                        apkName = name_1;
                    }
                    catch (error) {
                    }
                }
                // 下载方式 (  0:Auto, 1:App: 2:Browser, 3:DownloadManager );
                var downloadType = this.manager.webVersionConfig.AppDownloadType;
                this.bridger.appupdate(apkUrl, apkName, downloadType);
            }
            else {
                _super.prototype.appupdate.call(this);
            }
        };
        /**
         * 检测是否需要拷贝assets->data/{packages}/files
         */
        CrosswalkVersionHandler.prototype.checkAssetsCopy = function () {
            this.bridger.assetsCopyTo("www", AppSetting.wwwFileDir, AppSetting.wwwSize);
        };
        /**
         * 更新 分包资源
         */
        CrosswalkVersionHandler.prototype.updatePartial = function () {
            var filename = "res_patch_" + this.webVersionConfig.PartialVersion + "__" + this.webVersionConfig.PartialFolder;
            filename = filename.replace(/\./g, "_").replace(/\//g, "__").replace(/\\/g, "__");
            this.partialUrl = this.webVersionConfig.ResWeb + "/" + this.webVersionConfig.PartialFolder + "/res.zip";
            this.partialPath = AppSetting.FileDir + "/" + filename + ".zip";
            this.bridger.downloadBridger.sComplete.addOnce(this.onDownloadPartialComplete, this);
            this.bridger.download(this.partialUrl, this.partialPath);
        };
        CrosswalkVersionHandler.prototype.onDownloadPartialComplete = function () {
            this.bridger.unArchiverBridger.sComplete.addOnce(this.onUnArchiverPartialComplete, this);
            this.bridger.unArchiver(this.partialPath, AppSetting.wwwFileDir, "");
        };
        CrosswalkVersionHandler.prototype.onUnArchiverPartialComplete = function () {
            this.manager.onUpdateParitialComplete();
        };
        /**
         * 更新 补丁资源
         */
        CrosswalkVersionHandler.prototype.updatePatch = function () {
            var filename = "res_patch_" + this.webVersionConfig.PatchVersion + "__" + this.webVersionConfig.PatchFolder;
            filename = filename.replace(/\./g, "_").replace(/\//g, "__").replace(/\\/g, "__");
            this.patchUrl = this.webVersionConfig.ResWeb + "/" + this.webVersionConfig.PatchFolder + "/res.zip";
            this.patchPath = AppSetting.FileDir + "/" + filename + ".zip";
            this.bridger.downloadBridger.sComplete.addOnce(this.onDownloadPatchComplete, this);
            this.bridger.download(this.patchUrl, this.patchPath);
        };
        CrosswalkVersionHandler.prototype.onDownloadPatchComplete = function () {
            this.bridger.unArchiverBridger.sComplete.addOnce(this.onUnArchiverPatchComplete, this);
            this.bridger.unArchiver(this.patchPath, AppSetting.wwwFileDir, "");
        };
        CrosswalkVersionHandler.prototype.onUnArchiverPatchComplete = function () {
            this.manager.onUpdatePatchComplete();
        };
        return CrosswalkVersionHandler;
    }(GameVersions.VersionHandler));
    GameVersions.CrosswalkVersionHandler = CrosswalkVersionHandler;
})(GameVersions || (GameVersions = {}));
//# sourceMappingURL=CrosswalkVersionHandler.js.map