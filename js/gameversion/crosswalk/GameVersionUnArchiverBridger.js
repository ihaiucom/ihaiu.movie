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
    var GameVersionUnArchiverBridger = /** @class */ (function (_super) {
        __extends(GameVersionUnArchiverBridger, _super);
        function GameVersionUnArchiverBridger(versionHandler) {
            var _this = _super.call(this) || this;
            _this.jsClassName = "GameVersionUnArchiverBridger";
            _this.sComplete = new Signal();
            _this.versionHandler = versionHandler;
            _this.register();
            return _this;
        }
        /**
         * 准备运行
         */
        GameVersionUnArchiverBridger.prototype.onArchiverPre = function () {
            gameLaunchLoding.onVersionCrosswalkUnZip(0, AppSetting.wwwSize);
        };
        /**
         * 开始运行
         */
        GameVersionUnArchiverBridger.prototype.onArchiverStart = function () {
        };
        /**
         * 进度
         */
        GameVersionUnArchiverBridger.prototype.onArchiverProgress = function (msg) {
            gameLaunchLoding.onVersionCrosswalkUnZip(msg.current, msg.total);
        };
        /**
         * 完成
         */
        GameVersionUnArchiverBridger.prototype.onArchiverComplete = function () {
            gameLaunchLoding.onVersionCrosswalkUnZip(100, AppSetting.wwwSize);
            this.sComplete.dispatch();
        };
        /**
         * 出错
         */
        GameVersionUnArchiverBridger.prototype.onArchiverFail = function () {
            Games.SystemMessag.Instance.alertText(LoadingStateTxt.VersionAlertUpdateResFailMsg, this, function () {
                location.reload();
                return;
            });
        };
        return GameVersionUnArchiverBridger;
    }(Games.GameBridger));
    GameVersions.GameVersionUnArchiverBridger = GameVersionUnArchiverBridger;
})(GameVersions || (GameVersions = {}));
//# sourceMappingURL=GameVersionUnArchiverBridger.js.map