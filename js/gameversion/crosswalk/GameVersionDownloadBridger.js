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
    var GameVersionDownloadBridger = /** @class */ (function (_super) {
        __extends(GameVersionDownloadBridger, _super);
        function GameVersionDownloadBridger(versionHandler) {
            var _this = _super.call(this) || this;
            _this.jsClassName = "GameVersionDownloadBridger";
            _this.sComplete = new Signal();
            _this.versionHandler = versionHandler;
            _this.register();
            return _this;
        }
        /**
         * 准备运行
         */
        GameVersionDownloadBridger.prototype.onTaskPre = function (url) {
            gameLaunchLoding.onVersionCrosswalkLoadZip(0, null, null, null);
        };
        /**
         * 恢复
         */
        GameVersionDownloadBridger.prototype.onTaskResume = function (url) {
        };
        /**
         * 进度
         */
        GameVersionDownloadBridger.prototype.onTaskRunning = function (msg) {
            gameLaunchLoding.onVersionCrosswalkLoadZip(msg.percent, msg.convertCurrentProgress, msg.convertFileSize, msg.convertSpeed);
        };
        /**
         * 完成
         */
        GameVersionDownloadBridger.prototype.onTaskComplete = function (url) {
            gameLaunchLoding.onVersionCrosswalkLoadZip(100, null, null, null);
            this.sComplete.dispatch();
        };
        /**
         * 停止
         */
        GameVersionDownloadBridger.prototype.onTaskStop = function (url) {
        };
        /**
         * 取消
         */
        GameVersionDownloadBridger.prototype.onTaskCancel = function (url) {
        };
        /**
         * 出错
         */
        GameVersionDownloadBridger.prototype.onTaskFail = function (url) {
            Games.SystemMessag.Instance.alertText(LoadingStateTxt.NetworkState_Error, this, function () {
                location.reload();
                return;
            });
        };
        return GameVersionDownloadBridger;
    }(Games.GameBridger));
    GameVersions.GameVersionDownloadBridger = GameVersionDownloadBridger;
})(GameVersions || (GameVersions = {}));
//# sourceMappingURL=GameVersionDownloadBridger.js.map