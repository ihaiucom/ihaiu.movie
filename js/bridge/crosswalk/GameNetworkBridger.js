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
    var GameNetworkBridger = /** @class */ (function (_super) {
        __extends(GameNetworkBridger, _super);
        function GameNetworkBridger() {
            var _this = _super.call(this) || this;
            _this.jsClassName = "GameNetworkBridger";
            /////////////////////////////////////
            // 事件
            /////////////////////////////////////
            // 网络改变
            _this.sChange = new Signal();
            return _this;
        }
        /////////////////////////////////////
        // 执行
        /////////////////////////////////////
        /**
         * 请求开始
         */
        GameNetworkBridger.prototype.requireStart = function () {
            // alert("GameNetworkBridger requireStart");
            this.callNative("onRequireStart");
        };
        /** 请求状态信息 */
        GameNetworkBridger.prototype.requireState = function () {
            // alert("GameNetworkBridger requireState");
            this.callNative("onGetState", null, function (msg) {
                // alert("msg.isAvailable=" + msg.isAvailable + ", msg.netType=" + msg.netType);
                gameDeviceConfig.setNetworkEnable(msg.isAvailable);
                gameDeviceConfig.networkType = msg.netType;
            });
        };
        /**
         * 设置间隔时间 默认:2000毫秒
         */
        GameNetworkBridger.prototype.setGapTime = function (gapTime) {
            this.callNative("onSetGapTime", { gapTime: gapTime });
        };
        /**
         * 设置ping
         * @param pingEnable 是否开启ping 默认开启
         * @param pingGapTime 间隔时间  默认: 10000毫秒
         * @param pingIp ping的域名   默认: bing.com
         */
        GameNetworkBridger.prototype.setPing = function (pingEnable, pingGapTime, pingIp) {
            this.callNative("onSetPing", { pingEnable: pingEnable, pingGapTime: pingGapTime, pingIp: pingIp });
        };
        /////////////////////////////////////
        // 事件
        /////////////////////////////////////
        GameNetworkBridger.prototype.onChange = function (msg) {
            // alert("msg.isAvailable=" + msg.isAvailable + ", msg.netType=" + msg.netType + ", msg.isPingSuccess=" + msg.isPingSuccess);
            gameDeviceConfig.setNetworkEnable(msg.isAvailable && msg.isPingSuccess);
            gameDeviceConfig.networkType = msg.netType;
            this.sChange.dispatch();
        };
        return GameNetworkBridger;
    }(Games.GameBridger));
    Games.GameNetworkBridger = GameNetworkBridger;
})(Games || (Games = {}));
//# sourceMappingURL=GameNetworkBridger.js.map