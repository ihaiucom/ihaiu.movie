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
    var GameVersionAssetsCopyToBridger = /** @class */ (function (_super) {
        __extends(GameVersionAssetsCopyToBridger, _super);
        function GameVersionAssetsCopyToBridger(versionHandler) {
            var _this = _super.call(this) || this;
            _this.jsClassName = "GameVersionAssetsCopyToBridger";
            _this.versionHandler = versionHandler;
            _this.register();
            return _this;
        }
        /**
         * 准备运行
         */
        GameVersionAssetsCopyToBridger.prototype.onArchiverPre = function () {
            gameLaunchLoding.onAssetsCopy(0, AppSetting.wwwSize);
        };
        /**
         * 开始运行
         */
        GameVersionAssetsCopyToBridger.prototype.onArchiverStart = function () {
        };
        /**
         * 进度
         */
        GameVersionAssetsCopyToBridger.prototype.onArchiverProgress = function (msg) {
            gameLaunchLoding.onAssetsCopy(msg.current, msg.total);
        };
        /**
         * 完成
         */
        GameVersionAssetsCopyToBridger.prototype.onArchiverComplete = function () {
            gameLaunchLoding.onAssetsCopy(AppSetting.wwwSize, AppSetting.wwwSize);
            this.versionHandler.manager.assetsCopytoFileVersion = this.versionHandler.manager.localAppVersion;
            this.versionHandler.manager.localResVersion = this.versionHandler.manager.localAppVersion;
            window.location.replace(AppSetting.wwwFileDir + "/index.html");
            // this.versionHandler.manager.onCheckAssetsCopyEnd();
        };
        /**
         * 出错
         */
        GameVersionAssetsCopyToBridger.prototype.onArchiverFail = function (error) {
            Games.SystemMessag.Instance.alrtTextFull(error, LoadingStateTxt.VersionAssetsCopyError);
        };
        return GameVersionAssetsCopyToBridger;
    }(Games.GameBridger));
    GameVersions.GameVersionAssetsCopyToBridger = GameVersionAssetsCopyToBridger;
})(GameVersions || (GameVersions = {}));
//# sourceMappingURL=GameVersionAssetsCopyToBridger.js.map