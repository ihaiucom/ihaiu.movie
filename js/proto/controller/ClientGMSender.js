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
    var ClientGMSender = /** @class */ (function (_super) {
        __extends(ClientGMSender, _super);
        function ClientGMSender() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.moduleName = Games.ProtoModuleNames.ClientGM;
            return _this;
        }
        /**
         *  测试
         */
        ClientGMSender.prototype.gmTest = function () {
            var req = new Proto.API.ClientGM.gmTestRequest();
            this.send(req);
        };
        /**
         *  请求奥斯卡数据
         */
        ClientGMSender.prototype.gmUpdateOscar = function () {
            Game.protosender.rank.GetOscarData();
        };
        /**
         *  打印内存
         */
        ClientGMSender.prototype.gmPrintMem = function () {
            gameDeviceConfig.printInfo();
        };
        /**
         *  测试几百个本地缓存同时存储
         */
        ClientGMSender.prototype.gmTestLocalStorageSave = function () {
            var req = new Proto.API.ClientGM.gmTestLocalStorageSaveRequest();
            this.send(req);
        };
        /**
         *  测试几百个本地缓存同时读取
         */
        ClientGMSender.prototype.gmTestLocalStorageRead = function () {
            var req = new Proto.API.ClientGM.gmTestLocalStorageReadRequest();
            this.send(req);
        };
        /**
         *  检测TimerLoop
         */
        ClientGMSender.prototype.gmTestTimerLoop = function () {
            var req = new Proto.API.ClientGM.gmTestTimerLoopRequest();
            this.send(req);
        };
        /**
         *  重新登录
         */
        ClientGMSender.prototype.gmTestRelogin = function () {
            var req = new Proto.API.ClientGM.gmTestReloginRequest();
            this.send(req);
        };
        /**
         *  重新登录2
         */
        ClientGMSender.prototype.gmTestRelogin2 = function () {
            var req = new Proto.API.ClientGM.gmTestRelogin2Request();
            this.send(req);
        };
        /**
         *  打印有多少个fgui的动效
         */
        ClientGMSender.prototype.gmTestPrintTotalActiveTweens = function () {
            var req = new Proto.API.ClientGM.gmTestPrintTotalActiveTweensRequest();
            this.send(req);
        };
        /**
         *  停止透明的fgui动效
         */
        ClientGMSender.prototype.gmTestKillAlphaTransition = function () {
            var req = new Proto.API.ClientGM.gmTestKillAlphaTransitionRequest();
            this.send(req);
        };
        /**
         *  暂停游戏
         */
        ClientGMSender.prototype.gmPause = function () {
            var req = new Proto.API.ClientGM.gmPauseRequest();
            this.send(req);
        };
        /**
         *  暂停游戏渲染
         */
        ClientGMSender.prototype.gmPauseRebder = function () {
            var req = new Proto.API.ClientGM.gmPauseRebderRequest();
            this.send(req);
        };
        /**
         *  设置cacheAs
         */
        ClientGMSender.prototype.gmCacheAs = function () {
            var req = new Proto.API.ClientGM.gmCacheAsRequest();
            this.send(req);
        };
        /**
         *  停止所有东西
         */
        ClientGMSender.prototype.gmStopAllTransform = function () {
            var req = new Proto.API.ClientGM.gmStopAllTransformRequest();
            this.send(req);
        };
        /**
         *  是否打印loop开关
         */
        ClientGMSender.prototype.gmEnablePrinLoop = function () {
            var req = new Proto.API.ClientGM.gmEnablePrinLoopRequest();
            this.send(req);
        };
        return ClientGMSender;
    }(Games.ProtoSender));
    Games.ClientGMSender = ClientGMSender;
})(Games || (Games = {}));
//# sourceMappingURL=ClientGMSender.js.map