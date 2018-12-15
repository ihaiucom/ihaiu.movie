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
var Games;
(function (Games) {
    var GameApplicationBridger = /** @class */ (function (_super) {
        __extends(GameApplicationBridger, _super);
        function GameApplicationBridger() {
            var _this = _super.call(this) || this;
            _this.jsClassName = "GameApplicationBridger";
            _this.networkEnable = true;
            /////////////////////////////////////
            // 事件
            /////////////////////////////////////
            // 获取完基本消息
            _this.sInfo = new Signal();
            // 触发时机：从活动状态进入非活动状态。
            _this.sAppPause = new Signal();
            // 触发时机：程序进入前台并处于活动状态时调用。
            _this.sAppResume = new Signal();
            _this.isSetUserInfo = false;
            _this.IDFA = AppSetting.IDFA;
            _this.IDFV = AppSetting.IDFV;
            _this.BundleIdentifier = AppSetting.appId;
            _this.AppVersionName = AppSetting.AppVersionName;
            return _this;
        }
        GameApplicationBridger.prototype.getInfo = function () {
            var _this = this;
            this.getIDFA();
            this.getIDFV();
            this.getBundleIdentifier();
            this.getAppVersionName();
            setTimeout(function () {
                _this.sInfo.dispatch();
            }, 200);
        };
        /////////////////////////////////////
        // 通知
        /////////////////////////////////////
        /**
         * 游戏暂停
         */
        GameApplicationBridger.prototype.onPause = function (enterBackgroundTime) {
            console.log("event:> onPause 游戏暂停");
            this.sAppPause.dispatch();
        };
        /**
         * 游戏恢复
         */
        GameApplicationBridger.prototype.onResume = function (enterBackgroundTime) {
            console.log("event:> onResume 游戏恢复 enterBackgroundTime=" + enterBackgroundTime);
            this.sAppResume.dispatch();
        };
        /////////////////////////////////////
        // js 获取
        /////////////////////////////////////
        GameApplicationBridger.prototype.getIDFA = function () {
            var _this = this;
            this.callNative("getIDFA", null, function (response) {
                _this.IDFA = response;
            });
        };
        GameApplicationBridger.prototype.getIDFV = function () {
            var _this = this;
            this.callNative("getIDFV", null, function (response) {
                _this.IDFV = response;
            });
        };
        GameApplicationBridger.prototype.getBundleIdentifier = function () {
            var _this = this;
            this.callNative("getBundleIdentifier", null, function (response) {
                _this.BundleIdentifier = response;
            });
        };
        GameApplicationBridger.prototype.getAppVersionName = function () {
            var _this = this;
            this.callNative("getAppVersionName", null, function (response) {
                _this.AppVersionName = response;
                GameVersions.Manager.Instance.refreshAppVersion();
            });
        };
        /////////////////////////////////////
        // 执行
        /////////////////////////////////////
        GameApplicationBridger.prototype.openURL = function (url) {
            this.callNative("openURL", { url: url }, null);
        };
        GameApplicationBridger.prototype.exitApp = function () {
            this.callNative("exitApp", null, null);
        };
        GameApplicationBridger.prototype.checkNetwork = function () {
        };
        GameApplicationBridger.prototype.getNetworkEnable = function () {
            return this.networkEnable;
        };
        /////////////////////////////////////
        // Testin
        /////////////////////////////////////
        GameApplicationBridger.prototype.reportException = function (message) {
            this.callNative("reportException", { message: message }, null);
        };
        GameApplicationBridger.prototype.setUserInfo = function (username, name) {
            if (this.isSetUserInfo)
                return;
            this.isSetUserInfo = true;
            this.callNative("setUserInfo", { username: username, name: name }, null);
        };
        return GameApplicationBridger;
    }(Games.GameBridger));
    Games.GameApplicationBridger = GameApplicationBridger;
})(Games || (Games = {}));
//# sourceMappingURL=GameApplicationBridger.js.map