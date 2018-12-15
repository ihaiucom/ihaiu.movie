/////////////////////////////////////
// ihaiu.ExportProto生成
// http://blog.ihaiu.com
/////////////////////////////////////
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
    /**
     *
     */
    var ClientGMHandler = /** @class */ (function (_super) {
        __extends(ClientGMHandler, _super);
        function ClientGMHandler() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.moduleName = Games.ProtoModuleNames.ClientGM;
            return _this;
        }
        /**
         *  测试
         */
        ClientGMHandler.prototype.gmTest = function (msg) {
        };
        /**
         *  请求奥斯卡数据
         */
        ClientGMHandler.prototype.gmUpdateOscar = function (msg) {
        };
        /**
         *  打印内存
         */
        ClientGMHandler.prototype.gmPrintMem = function (msg) {
            gameDeviceConfig.printInfo();
        };
        /**
         *  测试几百个本地缓存同时存储
         */
        ClientGMHandler.prototype.gmTestLocalStorageSave = function (msg) {
        };
        /**
         *  测试几百个本地缓存同时读取
         */
        ClientGMHandler.prototype.gmTestLocalStorageRead = function (msg) {
        };
        /**
         *  检测TimerLoop
         */
        ClientGMHandler.prototype.gmTestTimerLoop = function (msg) {
        };
        /**
         *  重新登录
         */
        ClientGMHandler.prototype.gmTestRelogin = function (msg) {
            Game.protosender.account.refreshToken();
        };
        /**
         *  重新登录2
         */
        ClientGMHandler.prototype.gmTestRelogin2 = function (msg) {
            Game.protosender.GameData.ReGetLoginGameData();
        };
        /**
         *  打印有多少个fgui的动效
         */
        ClientGMHandler.prototype.gmTestPrintTotalActiveTweens = function (msg) {
        };
        /**
         *  停止透明的fgui动效
         */
        ClientGMHandler.prototype.gmTestKillAlphaTransition = function (msg) {
        };
        /**
         *  暂停游戏
         */
        ClientGMHandler.prototype.gmPause = function (msg) {
        };
        /**
         *  暂停游戏渲染
         */
        ClientGMHandler.prototype.gmPauseRebder = function (msg) {
        };
        /**
         *  设置cacheAs
         */
        ClientGMHandler.prototype.gmCacheAs = function (msg) {
        };
        /**
         *  停止所有东西
         */
        ClientGMHandler.prototype.gmStopAllTransform = function (msg) {
        };
        /**
         *  是否打印loop开关
         */
        ClientGMHandler.prototype.gmEnablePrinLoop = function (msg) {
        };
        return ClientGMHandler;
    }(Games.ProtoHandler));
    Games.ClientGMHandler = ClientGMHandler;
})(Games || (Games = {}));
//# sourceMappingURL=ClientGMHandler.js.map