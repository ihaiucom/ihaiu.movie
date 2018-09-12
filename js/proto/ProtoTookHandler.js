var Games;
(function (Games) {
    //====================
    // 消息订阅管配置和处理器
    //--------------------
    var ProtoTookHandler = /** @class */ (function () {
        function ProtoTookHandler() {
            /** 自己模块心跳时间(单位毫秒) */
            this.selfHeartbeat = 0;
            //---------- 其他参数 -----------------------
            /** 最后一次发送的服务器时间(秒) */
            this.lastSendServerTime = 0;
        }
        /**
         * 初始化, 配置你的订阅
         */
        ProtoTookHandler.prototype.init = function () {
        };
        /**
         * 验证是否需要发送， 自定义 需要限制发送的条件。不可发送反馈false
         * 如果没有自定义的可以不实现该方法
         */
        ProtoTookHandler.prototype.validate = function () {
            return true;
        };
        /**
         * 设置参数, 在发送前，框架会调该方法
         * 如果没有自定义的可以不实现该方法
         */
        ProtoTookHandler.prototype.setParameter = function () {
        };
        // 发送
        ProtoTookHandler.prototype.__sender = function () {
            this.req["__isTook"] = true;
            this.lastSendServerTime = Game.time.serverMilliseconds;
            Game.proto.sendMsgByModulename(this.req, this.moduleName);
        };
        return ProtoTookHandler;
    }());
    Games.ProtoTookHandler = ProtoTookHandler;
})(Games || (Games = {}));
//# sourceMappingURL=ProtoTookHandler.js.map