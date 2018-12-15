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
    var GameVersionBridger = /** @class */ (function (_super) {
        __extends(GameVersionBridger, _super);
        function GameVersionBridger(versionHandler) {
            var _this = _super.call(this) || this;
            _this.jsClassName = "GameVersionBridger";
            _this.versionHandler = versionHandler;
            _this.assetsCopyToBridger = new GameVersions.GameVersionAssetsCopyToBridger(versionHandler);
            _this.unArchiverBridger = new GameVersions.GameVersionUnArchiverBridger(versionHandler);
            _this.downloadBridger = new GameVersions.GameVersionDownloadBridger(versionHandler);
            _this.appupdateBridger = new GameVersions.GameVersionAppUpdateBridger(versionHandler);
            _this.register();
            _this.assetsCopyToBridger.register();
            _this.unArchiverBridger.register();
            _this.downloadBridger.register();
            _this.appupdateBridger.register();
            return _this;
        }
        /**
         * assets 资源拷贝到其他目录
         * @param assetPath assets目录路径
         * @param destPath 目标文件夹路径
         * @param estimateTotal 预估总文件多大(字节)
         * @param listenerJsClass js监听对象名称
         * */
        GameVersionBridger.prototype.assetsCopyTo = function (assetPath, destPath, estimateTotal) {
            this.callNative("assetsCopyTo", { assetPath: assetPath, destPath: destPath, estimateTotal: estimateTotal, listenerJsClass: this.assetsCopyToBridger.jsClassName });
        };
        /**
         * 解压文件
         * @param srcfile  zip文件
         * @param unrarPath 解压目录
         * @param password 密码
         * @param listenerJsClass js监听对象名称
         */
        GameVersionBridger.prototype.unArchiver = function (srcfile, unrarPath, password) {
            this.callNative("unArchiver", { srcfile: srcfile, unrarPath: unrarPath, password: password, listenerJsClass: this.unArchiverBridger.jsClassName });
        };
        /**
         * 下载文件
         * @param url  要下载的文件
         * @param path 保存路径
         * @param listenerJsClass js监听对象名称
         */
        GameVersionBridger.prototype.download = function (url, path) {
            this.callNative("download", { url: url, path: path, listenerJsClass: this.downloadBridger.jsClassName });
        };
        /**
         * 停止下载文件
         * @param url  要下载的文件
         */
        GameVersionBridger.prototype.stopdownload = function (url) {
            this.callNative("stopdownload", { url: url });
        };
        /**
         * 更新应用
         * @param apkUrl  要下载的文件
         * @param apkName 保存路径
         * @param downloadType 下载方式 (  0:Auto, 1:App: 2:Browser, 3:DownloadManager );
         * @param listenerJsClass js监听对象名称
         */
        GameVersionBridger.prototype.appupdate = function (apkUrl, apkName, downloadType) {
            Games.SystemMessag.Instance.closeAlert();
            this.callNative("appupdate", { apkUrl: apkUrl, apkName: apkName, downloadType: downloadType, listenerJsClass: this.appupdateBridger.jsClassName });
        };
        return GameVersionBridger;
    }(Games.GameBridger));
    GameVersions.GameVersionBridger = GameVersionBridger;
})(GameVersions || (GameVersions = {}));
//# sourceMappingURL=GameVersionBridger.js.map