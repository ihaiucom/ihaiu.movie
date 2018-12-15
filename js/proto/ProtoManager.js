var Games;
(function (Games) {
    var ProtoManager = /** @class */ (function () {
        function ProtoManager() {
            this.isInited = false;
            this.isEnableSendProto = false;
            this.isNeedReGetLoginGameData = false;
            // 最后一次发送该命令时间        
            this.lastCommandTime = new Dictionary();
            // 该命令是否已经反馈
            this.commandIsRespone = new Dictionary();
        }
        // 初始化
        ProtoManager.prototype.install = function (ip, port, useHttps) {
            if (ip === void 0) { ip = "172.16.0.116"; }
            if (port === void 0) { port = 8360; }
            if (useHttps === void 0) { useHttps = false; }
            this.isInited = true;
            this.isEnableSendProto = true;
            DataRespondsManager.init();
            OobManager.init();
            //Http初始化和登录
            this.httpChannel = new frame.comm.HttpChannel(ip, port, useHttps);
        };
        // 发送消息, 使用命令路径
        ProtoManager.prototype.sendMsg = function (requestData, command) {
            if (!this.isInited) {
                Game.system.toastMsg(Games.TEXT.ErorNoInitProto);
                return;
            }
            this.httpChannel.http.addReq(command, requestData);
        };
        // 发送消息, 使用模块名称
        ProtoManager.prototype.sendMsgByModulename = function (requestData, moduleName, responseRequired, limitTime) {
            var clsname = getClassName(requestData).replace("Request", "");
            var command = moduleName + "/" + clsname;
            var time = Game.time.localTime;
            if (requestData["__isTook"] && HttpComm.SendErrorNums.hasKey(command) && HttpComm.SendErrorNums.getValue(command) > 10) {
                return;
            }
            if (limitTime) {
                if (this.lastCommandTime.hasKey(command)) {
                    if (time - this.lastCommandTime.getValue(command) < 500) {
                        return;
                    }
                }
            }
            if (responseRequired) {
                if (this.commandIsRespone.hasKey(command) && !this.commandIsRespone.getValue(command)) {
                    return;
                }
            }
            this.commandIsRespone.add(command, false);
            this.lastCommandTime.add(command, time);
            this.sendMsg(requestData, command);
        };
        ProtoManager.prototype.__onMsgRespone = function (command) {
            this.commandIsRespone.add(command, true);
        };
        return ProtoManager;
    }());
    Games.ProtoManager = ProtoManager;
})(Games || (Games = {}));
//# sourceMappingURL=ProtoManager.js.map