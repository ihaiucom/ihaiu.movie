var GameVersions;
(function (GameVersions) {
    var VersionHandler = /** @class */ (function () {
        function VersionHandler(manager) {
            this.manager = manager;
        }
        Object.defineProperty(VersionHandler.prototype, "urlpath", {
            get: function () {
                return this.manager.urlpath;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(VersionHandler.prototype, "webVersionConfig", {
            // 网络，版本信息配置		
            get: function () {
                return this.manager.webVersionConfig;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(VersionHandler.prototype, "localPartialVersion", {
            /**
             * 当前分包资源版本
             */
            get: function () {
                return this.manager.localPartialVersion;
            },
            set: function (version) {
                this.manager.localPartialVersion = version;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(VersionHandler.prototype, "localResVersion", {
            /**
             * 当前资源版本
             */
            get: function () {
                return this.manager.localResVersion;
            },
            set: function (version) {
                this.manager.localResVersion = version;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(VersionHandler.prototype, "localResVersionData", {
            // 本地，资源版本
            get: function () {
                return this.manager.localResVersionData;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(VersionHandler.prototype, "webResVersionData", {
            // 网络，资源版本
            get: function () {
                return this.manager.webResVersionData;
            },
            enumerable: true,
            configurable: true
        });
        /** 检测Res版本是否需要更新 */
        VersionHandler.prototype.isNeedUpdateRes = function (current, target) {
            return this.manager.isNeedUpdateRes(current, target);
        };
        /**
         * 更新应用
         */
        VersionHandler.prototype.appupdate = function () {
            gameApplication.openURL(this.manager.webVersionConfig.AppDownloadWeb);
        };
        /**
         * 检测是否需要拷贝assets->data/{packages}/files
         */
        VersionHandler.prototype.checkAssetsCopy = function () {
            this.manager.onCheckAssetsCopyEnd();
        };
        /**
         * 更新 分包资源
         */
        VersionHandler.prototype.updatePartial = function () {
        };
        /**
         * 更新 补丁资源
         */
        VersionHandler.prototype.updatePatch = function () {
        };
        /**
         * 更新完成
         */
        VersionHandler.prototype.onComplete = function () {
            this.manager.onComplete();
        };
        /**
         * 结束版本检测
         */
        VersionHandler.prototype.end = function () {
            this.manager.end();
        };
        return VersionHandler;
    }());
    GameVersions.VersionHandler = VersionHandler;
})(GameVersions || (GameVersions = {}));
//# sourceMappingURL=VersionHandler.js.map