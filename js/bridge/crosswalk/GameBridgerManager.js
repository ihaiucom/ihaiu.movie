var Games;
(function (Games) {
    var GameBridgerManager = /** @class */ (function () {
        function GameBridgerManager() {
            this.defaultBridger = new Games.GameDefaultBridger();
            this.applicationBridger = new Games.GameApplicationBridger();
            this.networkBridger = new Games.GameNetworkBridger();
        }
        Object.defineProperty(GameBridgerManager, "Instance", {
            get: function () {
                if (!GameBridgerManager._Instance) {
                    GameBridgerManager._Instance = new GameBridgerManager();
                }
                return GameBridgerManager._Instance;
            },
            enumerable: true,
            configurable: true
        });
        GameBridgerManager.prototype.init = function () {
            if (!window["WebViewJavascriptBridge"]) {
                return;
            }
            WebViewJavascriptBridge.init(this.defaultBridger.handler, this.defaultBridger);
            this.registerHandler(this.applicationBridger);
            this.registerHandler(this.networkBridger);
            this.networkBridger.requireStart();
            this.networkBridger.requireState();
        };
        /**
         * 注册桥接处理器
         * @param bridgeHandler
         */
        GameBridgerManager.prototype.registerHandler = function (bridgeHandler) {
            WebViewJavascriptBridge.registerHandler(bridgeHandler.jsClassName, bridgeHandler.handler, bridgeHandler);
        };
        return GameBridgerManager;
    }());
    Games.GameBridgerManager = GameBridgerManager;
})(Games || (Games = {}));
//# sourceMappingURL=GameBridgerManager.js.map