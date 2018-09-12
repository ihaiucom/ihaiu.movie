var Games;
(function (Games) {
    //====================
    // 消息控制器 抽象类
    //--------------------
    var ProtoBaseController = /** @class */ (function () {
        function ProtoBaseController() {
        }
        // 发送消息
        ProtoBaseController.prototype.send = function (msg, responseRequired, limitTime, moduleName) {
            if (limitTime === void 0) { limitTime = true; }
            moduleName = moduleName ? moduleName : this.moduleName;
            Game.proto.sendMsgByModulename(msg, moduleName, responseRequired, limitTime);
        };
        // 发送消息，直接用命令
        ProtoBaseController.prototype.sendByCommand = function (msg, command) {
            Game.proto.sendMsg(msg, command);
        };
        return ProtoBaseController;
    }());
    Games.ProtoBaseController = ProtoBaseController;
})(Games || (Games = {}));
//# sourceMappingURL=ProtoBaseController.js.map