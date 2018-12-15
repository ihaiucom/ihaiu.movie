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
    var GameVersionAppUpdateBridger = /** @class */ (function (_super) {
        __extends(GameVersionAppUpdateBridger, _super);
        function GameVersionAppUpdateBridger(versionHandler) {
            var _this = _super.call(this) || this;
            _this.jsClassName = "GameVersionAppUpdateBridger";
            _this.versionHandler = versionHandler;
            _this.register();
            return _this;
        }
        /**
         * 准备运行
         */
        GameVersionAppUpdateBridger.prototype.onTaskPre = function (url) {
            Games.SystemMessag.Instance.closeAlert();
            gameLaunchLoding.onVersionCrosswalkAppUpdate(0, null, null);
        };
        /**
         * 恢复
         */
        GameVersionAppUpdateBridger.prototype.onTaskResume = function (url) {
        };
        /**
         * 进度
         */
        GameVersionAppUpdateBridger.prototype.onTaskRunning = function (msg) {
            gameLaunchLoding.onVersionCrosswalkAppUpdate(msg.progress, msg.current, msg.total);
        };
        /**
         * 完成
         */
        GameVersionAppUpdateBridger.prototype.onTaskComplete = function (url) {
            gameLaunchLoding.onVersionCrosswalkAppUpdate(100, null, null);
        };
        /**
         * 停止
         */
        GameVersionAppUpdateBridger.prototype.onTaskStop = function (url) {
            this.versionHandler.manager.showNeedUpdateApp();
        };
        /**
         * 取消
         */
        GameVersionAppUpdateBridger.prototype.onTaskCancel = function (url) {
            this.versionHandler.manager.showNeedUpdateApp();
        };
        /**
         * 出错
         */
        GameVersionAppUpdateBridger.prototype.onTaskFail = function (url) {
            var _this = this;
            Games.SystemMessag.Instance.alertText(LoadingStateTxt.NetworkState_Error, this, function () {
                _this.versionHandler.manager.showNeedUpdateApp();
                // location.reload();
                return;
            });
        };
        return GameVersionAppUpdateBridger;
    }(Games.GameBridger));
    GameVersions.GameVersionAppUpdateBridger = GameVersionAppUpdateBridger;
})(GameVersions || (GameVersions = {}));
//# sourceMappingURL=GameVersionAppUpdateBridger.js.map