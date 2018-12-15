var Games;
(function (Games) {
    var GameBridger = /** @class */ (function () {
        function GameBridger() {
            this.jsClassName = "GameBridger";
        }
        GameBridger.prototype.handler = function (data, callbackResponse) {
            if (typeof (data) == "string") {
                try {
                    data = JSON.parse(data);
                }
                catch (error) {
                    console.error("GameBridger handler: 解析json出错 " + error);
                }
            }
            if (data && data[GameBridger.HANDLER_NAME_STR]) {
                var handlerName = data[GameBridger.HANDLER_NAME_STR];
                var args = data[GameBridger.DATA_NAME_STR];
                var fun = this[handlerName];
                if (fun) {
                    fun.apply(this, [args, callbackResponse]);
                }
            }
        };
        GameBridger.prototype.callNative = function (handlerName, args, callback) {
            var data = {
                handlerName: handlerName,
                data: args
            };
            WebViewJavascriptBridge.callHandler(this.jsClassName, data, callback);
        };
        /**
         * 将自己注册到
         */
        GameBridger.prototype.register = function () {
            Games.GameBridgerManager.Instance.registerHandler(this);
        };
        GameBridger.HANDLER_NAME_STR = "handlerName";
        GameBridger.DATA_NAME_STR = "data";
        return GameBridger;
    }());
    Games.GameBridger = GameBridger;
})(Games || (Games = {}));
//# sourceMappingURL=GameBridger.js.map