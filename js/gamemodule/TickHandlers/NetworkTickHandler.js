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
    var Ticks;
    (function (Ticks) {
        /** Tick处理器 -- 检测网络状态 */
        var NetworkTickHandler = /** @class */ (function (_super) {
            __extends(NetworkTickHandler, _super);
            function NetworkTickHandler() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.isBackgroundTimeLong = false;
                _this.lastRefreshTokenTime = 0;
                return _this;
            }
            /** 启动 */
            NetworkTickHandler.prototype.beginInit = function () {
                // 心跳时间(单位毫秒)
                this.heartbeat = 1000;
                // 调启动完成
                this.endInit();
                var __mythis = this;
                if (BrowserDetect.isConch) {
                    window["conch"].setNetworkEvtFunction(function (type) {
                        gameDeviceConfig.networkType = type;
                        __mythis.refreshToken();
                    });
                }
                else if (BrowserDetect.isCrosswalk) {
                    Games.GameBridgerManager.Instance.networkBridger.sChange.add(function () {
                        __mythis.refreshToken();
                    }, this);
                }
                gameApplication.sAppResume.add(this.onAppResume, this);
                Game.protoFailEvent.add(ProtoEventKey.account_refreshToken, gameDeviceConfig.onRefreshTokenFail, gameDeviceConfig);
                Game.protoOkEvent.add(ProtoEventKey.account_refreshToken, gameDeviceConfig.onRefreshTokenOk, gameDeviceConfig);
            };
            /** 执行 */
            NetworkTickHandler.prototype.update = function () {
                if (!this.isBackgroundTimeLong)
                    gameDeviceConfig.checkNetwork();
            };
            /**
             * 从后台进入前台并激活
             */
            NetworkTickHandler.prototype.onAppResume = function () {
                if (gameApplication.atBackgroundTime > 10 * 60 * 1000) {
                    this.isBackgroundTimeLong = true;
                    Games.SystemMessag.Instance.alrtTextFull(LoadingStateTxt.NetworkState_Background, LoadingStateTxt.NetworkState_Title, this, this.onClickAlertExit, LoadingStateTxt.NetworkState_Button);
                    // location.reload();
                }
                else if (gameApplication.atBackgroundTime > 5000) {
                    if (User.isLogined) {
                        this.refreshToken();
                    }
                }
            };
            NetworkTickHandler.prototype.onClickAlertExit = function () {
                gameDeviceConfig.exit();
            };
            NetworkTickHandler.prototype.refreshToken = function () {
                var _this = this;
                if (this.isBackgroundTimeLong)
                    return;
                if (new Date().getTime() - this.lastRefreshTokenTime < 5000) {
                    return;
                }
                setTimeout(function () {
                    _this.lastRefreshTokenTime = new Date().getTime();
                    // alert("重刷 jwt getNetworkEnable" + gameApplication.getNetworkEnable());
                    Game.protosender.account.refreshToken();
                }, 2000);
            };
            return NetworkTickHandler;
        }(Games.TickHandler));
        Ticks.NetworkTickHandler = NetworkTickHandler;
    })(Ticks = Games.Ticks || (Games.Ticks = {}));
})(Games || (Games = {}));
//# sourceMappingURL=NetworkTickHandler.js.map